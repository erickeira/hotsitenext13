import React, { useEffect, useState } from 'react';
import Busca from "../components/busca";
import { lojaId, urlRequisicao, fetcher, nomeLoja } from "../utils";
import styles from './pageInicial.module.scss';
import Noticias from '../components/noticias';
import CardContato from '../components/cardContato';
import Head from 'next/head';

export default function  Home({data}) {
  const {destaques, ultimasnoticias, dadosloja} = data
  const [loadingSelect, setLoadingSelect] = useState(true);

  useEffect(() => {
    setLoadingSelect(false)
  }, [])

  
  return(
    <>          
      <Head> 
          <meta property="og:type" content="product" />
          <meta property="og:description" content="Confira nosso site." />
          <meta property="og:image" content="/img/compartilhamento.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
          <title>{nomeLoja}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.cardContatos}>
          <CardContato dadosloja={dadosloja}/>
        </div>
        <Busca anuncios={destaques} resultados={8} titulo={"Veículos em destaque"} ordenacao={false} />      
        <div className={styles.cardContatosMobile}>
          <CardContato dadosloja={dadosloja}/>
        </div>
      </div>
      {    
        ultimasnoticias ?             
          <Noticias noticias={ultimasnoticias}/>
        :
        null
      }
    </>
  )
}

export async function getStaticProps(){
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