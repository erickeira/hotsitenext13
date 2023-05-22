import styles from './estoque.module.scss'
import Busca from "../../components/busca";
import { lojaId, urlRequisicao, nomeLoja} from "../../utils";
import Head from 'next/head';

export default function Estoque ({data}) {

    return(        
        <>
            <Head> 
                <meta property="og:type" content="product" />
                <meta property="og:description" content="Confira os veículos que temos disponivel em nosso estoque." />
                <meta property="og:image" content="/img/compartilhamento.jpg" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" />
                <title>{`Confira nosso estoque | ${nomeLoja}`}</title>
            </Head>
            <div className={styles.container}>
                <Busca temPaginacao anuncios={data.estoque}/>
            </div>
        </>
        
    )
}

export async function getServerSideProps({req, query}) {
    
    let body = JSON.stringify({
        "acoes": 
        [
        {
        "acao": "estoque",
        "params":
            {
            resultados  : 20,
            ordenacao   : query?.ordenacao || "",
            marca       : query?.marca == "Marca" ? "" : (query?.marca || ""),
            modelo      : query?.modelo == "Modelo" ? "" : (query?.modelo || ""),
            pagina      : query?.pagina || 1
            }
        }
        ],
        "loja": lojaId
    })
    const response = await fetch(urlRequisicao,{
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
    })
    
    const data = await response.json()
    return {props: { data }}
}