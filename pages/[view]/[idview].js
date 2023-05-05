// import { useRouter } from 'next/router'
import { lojaId, urlRequisicao, fetcher } from "../../utils";
import {ImShare} from 'react-icons/im';
import styles from './view.module.scss';
import CardContato from '../../components/cardContato';
import CardForm from "../../components/CardForm";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import {GrFormCheckmark} from 'react-icons/gr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import { loaderImagens, urlImg } from '../../utils/index';
import {RiCameraOffFill} from 'react-icons/ri'
import { Skeleton } from "@mui/material";

export default function VisualizarAnuncio({data}) {

    const metodo = 'proposta';
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const closeMenu = () => setShowMenu(false);
    const { query } = useRouter();
    const { dadosanuncio, dadosloja } = data;    
    const preco = parseInt(dadosanuncio.vei_preco);
    const precoFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const AnoCorCombustivelKm = () => {
        return(
            <div className={styles.envolveAnoCorCombustivelKm}>
                <div className={styles.anoCorCombustivelKm} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderRightWidth: 0, width: dadosanuncio.vei_km ? '25%' : '33%'}}>{dadosanuncio.vei_ano}</div>
                <div className={styles.anoCorCombustivelKm} style={{borderRightWidth: 0, width: dadosanuncio.vei_km ? '25%' : '33%' }}>{dadosanuncio.cor_nome}</div>
                <div 
                    className={styles.anoCorCombustivelKm} 
                    style={
                        dadosanuncio.vei_km ? 
                        {
                            borderRightWidth: 0,
                            width: '25%'
                        }
                        : 
                        {
                            width: '33%',
                            borderTopRightRadius: 5, 
                            borderBottomRightRadius: 5
                        }    
                    }
                >
                    {dadosanuncio.com_nome}
                </div>
                {
                    dadosanuncio.vei_km ?
                    <div className={styles.anoCorCombustivelKm} style={{borderTopRightRadius: 5, borderBottomRightRadius: 5, width: '25%'}} >{dadosanuncio.vei_km} km</div>
                    : null
                }                
            </div>
        )
    }

    const OpcionaisDescricaoObservacao = () => {
        return (
            <>
                <div className={styles.opcionaisDescricaoObservacao} style={{display: !dadosanuncio.vei_opcoes && !dadosanuncio.vei_descricao && !dadosanuncio.vei_observacoes ? 'none' : undefined}}>
                    {
                        dadosanuncio.vei_opcoes && (
                            
                            <div className={styles.containerOpcionais}>
                                <strong>Opcionais:</strong>
                                <div className={styles.opcionaisGrid}>
                                {
                                    dadosanuncio.vei_opcoes &&
                                    dadosanuncio.vei_opcoes.map((opcional) => (
                                        <div key={opcional} style={{padding: 2}}>
                                            <span className={styles.opcionais} key={opcional}>
                                                <GrFormCheckmark />
                                                {opcional}
                                            </span>
                                        </div>                            
                                    ))
                                }
                                </div>
                            </div>                            
                        )                    
                    }                

                    {dadosanuncio.vei_descricao && (
                        <div className={styles.descricao}>
                            <strong>Descrição:</strong>
                            <p>{dadosanuncio.vei_descricao}</p>
                        </div>
                        )
                    }

                    {dadosanuncio.vei_observacoes && (
                        <div className={styles.observacoes}>
                            <strong>Observacoes:</strong>
                            <p>{dadosanuncio.vei_observacoes}</p>
                        </div>
                        )
                    }        
                </div>  
            </>
            
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.marcaModeloECompartilhar}>
                <div className={styles.marcaComModelo} style={{display: 'flex', flexDirection: 'column'}}>
                    <small style={{color: '#00000070'}}>{dadosanuncio.mar_nome}</small>
                    <b>{dadosanuncio.vei_modelo}</b>
                </div>
                
                <div className={styles.dropdown}>
                    <button onClick={toggleMenu} className={styles.dropbtn}>
                        <ImShare/> Compartilhar
                    </button>
                    <div className={`${styles.dropdownContent} ${showMenu && styles.show}`} onBlur={closeMenu}>
                        <a target="_blank" href={`https://api.whatsapp.com/send?text=www.nomedosite.com.br/noticia/${query.id}`}>WhatsApp</a>
                        <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.nomedosite.com.br/noticia/${query.id}`}>Facebook</a>
                    </div>
                </div>
            </div>

            <div className={styles.envolveImagensComDados}>
                <div className={styles.galeriaImagens}>       
                    {/* <Skeleton className={styles.skeletonImageGallery}/>              */}
                    {                        
                        dadosanuncio.fotos.length ?
                        
                            <ImageGallery
                                width={200}
                                height={200}
                                items={dadosanuncio.fotos?.map(foto => { return { original: `${urlImg}${foto.replace('pd', '')}`, thumbnail: `${urlImg}redim/200/${foto}`}}) || [{original: "", thumbnail: ""}]}
                                showPlayButton={false}
                                // showFullscreenButton={false}
                                showThumbnails={dadosanuncio.fotos?.length > 1}
                                // loading="lazy"
                                // lazyLoad={true}
                            />
                        : 
                            <div className={styles.envolveImagemSemFoto}>
                                <RiCameraOffFill size={50} color={"#adadad"}/>
                                <span>SEM FOTO</span>
                            </div> 
                    }

                </div> 
                
                <div className={styles.EnvolveDadosAnuncio}>
                    <AnoCorCombustivelKm/>                                         
                    <OpcionaisDescricaoObservacao/>
                    
                    <div className={styles.preco}>
                        {preco ? precoFormatado: "Consulte-nos."}
                    </div>
                    <div className={styles.dadosLoja}>
                        <CardContato dadosloja={dadosloja}/>
                    </div>
                </div>
            </div>           
            <CardForm metodo={metodo}  dadosVeiculo={dadosanuncio} />
        </div>
    )
}


export async function getServerSideProps({req, res, query}){
    let idAnuncio = req.url.split('/')[2]
    try {
      let body = JSON.stringify({
        "acoes": 
          [
            {
                "acao": "dadosloja"
            },
            {
              "acao": "dadosanuncio",
              "params":{"id": query.idview || idAnuncio}
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