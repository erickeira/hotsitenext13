import styles from './viewNoticia.module.scss'
import {ImShare} from 'react-icons/im'
import Image from "next/image"
import { loaderImagens, urlImg } from '../../utils/index';
import { lojaId, urlRequisicao, fetcher } from "../../utils";
import Modal from '../../components/modal'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import Head from 'next/head';

export default function ViewNoticia ({data}) { 

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const closeMenu = () => setShowMenu(false);

  const { query } = useRouter();

  const {viewnoticia} = data;

  const noticia = viewnoticia;

  const [fotoModal, mudaFotoModal] = useState(null);

  const[modalImagemAberta, setmodalImagemAberta] = useState(false);
  function abrirModalImagem(foto) {
    mudaFotoModal(foto)   
    setmodalImagemAberta(true)
  };
  function fecharModalImagem() {
    setmodalImagemAberta(false)
  };

  const textoNoticia = noticia.art_texto;

  return(
    <>
      <Head> 
          <meta property="og:type" content="product" />
          <meta property="og:description" content="Fique por dentro de noticías sobre o mundo automotivo." />
          <meta property="og:image" content="/img/compartilhamento.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
          <title>Noticias.</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.envolveTituloComBotaoCompartilhar}>
            <h1 className={styles.tituloNoticia}>{noticia.art_titulo.split('.')}</h1>
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
        <p className={styles.fonteNoticia}>{noticia.art_fonte}</p>
        <div className={styles.envolveImagemComTextoNoticia}>
          <div className={styles.textoNoticiaComImagemPincipal}>
            <div className={styles.envolveImagens}>
              {
                noticia.art_fotos[0] 
                ?
                  <ImageGallery
                    width={200}
                    height={200}
                    items={noticia.art_fotos?.map(foto => { return { original: `${urlImg}${foto.replace('pd', '')}`, thumbnail: `${urlImg}redim/200/${foto}`}}) || [{original: "", thumbnail: ""}]}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showThumbnails={noticia.art_fotos?.length > 1}
                />                  
                :
                null
              }
            </div>
            <div className={styles.textoNoticia} dangerouslySetInnerHTML={{__html: textoNoticia}}></div>
          </div>
        </div>                
    </div>

    </>
    
  )
}

export async function getServerSideProps({req, res, query}){
    let idNoticia = req.url.split('/')[2]
    try {
      let body = JSON.stringify({
        "acoes": 
          [           
            {
              "acao": "viewnoticia",
              "params":{"id": query.id || idNoticia}
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