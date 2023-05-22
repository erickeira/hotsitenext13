import styles    from './contato.module.scss';
import Image     from 'next/image';
// import { lojaId, urlRequisicao, nomeLoja } from "../../utils";
import CardForm  from '../../components/CardForm';
import CardContato from '../../components/cardContato';
import pedidoImg from '../../public/img/img-pedidos.png';
import {lojaId, urlRequisicao, nomeLoja} from '../../utils';

import Head from 'next/head';



export default function Contato (data) {

    const metodo = "contatoloja"

    return(
        <>        
            <Head> 
                <meta property="og:type" content="product" />
                <meta property="og:description" content="Para mais informações, entre em contato." />
                <meta property="og:image" content="/img/compartilhamento.jpg" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" />
                <title>{`Entre em contato conosco. | ${nomeLoja}`}</title>
            </Head>
        
        <div className={styles.containerPageContato}>
            <div className= {`${styles.pageHeader}`}>
                <h2>Entre em contato conosco</h2>
            </div>   
            <div className={styles.envolveConteudoPageContato}>
                <div className= {`${styles.row}`}>
                    <div className= {`${styles.infoEsquerda}`}>
                        <h3 className= {`${styles.textSub}`}>Deseja entrar em contato com nossa equipe?</h3>
                        <p>Para enviar dúvidas, críticas e/ou sugestões basta entrar em contato conosco utilizando o formulário ao lado.</p>
                        <p>Se preferir, entre em contato utilizando o(s) telefone(s) localizados logo acima.</p>
                        <div className= {`${styles.imgPedido} `}>
                            <Image src={pedidoImg} className= {`${styles.imgPedido} `} priority width="300" height="188" alt="pedido"/>	
                        </div>
                        <p> Entre em contato! </p>                     
                    </div>
                    
                    <div className={`${styles.infoDireita}`}>
                        <div className={`${styles.AlinhaCard}`}>
                            <CardForm metodo={metodo}/>
                        </div>
                    </div>				                    
                </div>	
                <div style={{marginTop: 15}}>
                  <CardContato dadosloja={data.data.dadosloja}/>
                </div>
                
            </div>   
        </div>
    </>     
    )
}

export async function getServerSideProps(){
    try {
      let body = JSON.stringify({
        "acoes": 
          [
            {
              "acao": "dadosloja"
            },
            {
              "acao": "destaques",
              "params":{"resultados": 8}
            },
            {
              "acao": "ultimasnoticias",
              "params":{"resultados": 7}
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
      return {    
        props: {data}
      }
  
    } catch(e) {
      return {
        notFound: true
      }
    }   
  }