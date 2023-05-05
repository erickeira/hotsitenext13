import React, { useEffect, useState } from 'react'
import CardAnuncio from "../components/cardAnuncio";
import Busca from "../components/busca";
import { lojaId, urlRequisicao, fetcher } from "../utils";
import ListagemVeiculos from '../components/listagemVeiculos';
import {BiSearch} from 'react-icons/bi'
import Select from 'react-select'
import styles from './pageInicial.module.scss'
import Noticias from '../components/noticias';
import CardContato from '../components/cardContato';

export default function  Home({data}) {
  return null
  const {destaques, ultimasnoticias, dadosloja} = data
  return(
    <>          
      <div className={styles.container}>
        <div className={styles.cardContatos}>
          <CardContato dadosloja={dadosloja}/>
        </div>
        <Busca categoria="destaques" resultados={8} titulo={"Veículos em destaque."} ordenacao={false} />      
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

export async function getServerSideProps(){
  try {
    let body = JSON.stringify({
      acoes: 
        [
          {
            acao: "dadosloja"
          },
          {
            acao: "destaques",
            params:{resultados: 8}
          },
          {
            acao: "ultimasnoticias",
            params:{resultados: 7}
          },
          {
            acao: "marcas",
          }         
        ],
      loja: lojaId
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