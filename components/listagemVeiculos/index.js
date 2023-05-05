import React, { useEffect, useState } from 'react';
import CardAnuncio from "../cardAnuncio";
import { lojaId, removerSpecials, urlRequisicao } from "../../utils";
import styles from './listagemVeiculos.module.scss'
import Link from "next/link"
import { Skeleton } from '@mui/material';

export default function ListagemVeiculos({anuncios, loading}) {

  const listaAnuncios = loading ? Array.from({length: 8}, (v, k) => k) : anuncios
  return(
    listaAnuncios ? 
    <div className={styles.listagemAnuncios}>
      {
        listaAnuncios.map((anuncio) => {
          if(loading) return <CardAnuncio anuncio={anuncio} loading={loading} key={anuncio}/>
            return(
              <Link key={anuncio.vei_id} href={`/${removerSpecials(anuncio.mar_nome)}-${removerSpecials(anuncio.vei_modelo)}/${anuncio.vei_id}`} className={styles.anuncios}>                
                <CardAnuncio anuncio={anuncio} loading={loading}/>
              </Link>
            )
        })
      }   
    </div>
    : <div className={styles.listagemSemAnuncio}>Nenhum anuncio encontrado!</div>
  )
}