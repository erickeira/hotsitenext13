import Image from 'next/image';
import {urlRequisicao,lojaId, urlImg,loaderImagens, nomeLoja } from '../../utils';
import styles from './loja.module.scss';
import Head from 'next/head';
import Link from 'next/link';
// import GoogleMapReact from 'google-map-react';

export default function Loja (props) {
    const {dadoshotsite, dadosloja}= props
    let texto=""
    
    if (dadoshotsite.length > 0) {
        texto = dadoshotsite[0].hot_texto1 
    }
    else{
        texto= "Aguardem...";
    }
    
    const textoComNovaTag = texto.replace(/<h5>/g, "<p>").replace(/<\/h5>/g, "</p><br>");

    return(
    <>
        <Head> 
            <meta property="og:type" content="product" />
            <meta property="og:description" content="Conheça nossa loja e nossos veículos." />
            <meta property="og:image" content="/img/compartilhamento.jpg" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />
            <title>{`Confira nossa loja | ${nomeLoja}`}</title>
        </Head>
        <div className={`${styles.containerPageLoja} medidasTela`}>

            <div className="container">
                <div  className= {`${styles.pageHeader}`}>
                    <h2 className= {`${styles.titulo}`}>A loja</h2>
                </div>
            </div>
        
            <div className="content loja">
                <div className="container">
                    <div className= {`${styles}`}>
                        <div className="col-lg-9 col-md-9 col-sm-9">
                            <h3 className= {`${styles.subtitulo}`}>Somos a {dadosloja[0].loj_nome} </h3>
                    
                            <div className= {`${styles.bufferTexto}`} dangerouslySetInnerHTML={{ __html: textoComNovaTag }}></div>
                                        
                        </div>
                    </div>	

                    <div className= {`${styles.pageHeader}`}><h2>Local</h2></div>
                    
                    <div className={styles.row}>
                        {dadosloja.length && dadosloja[0].loj_foto ? (
                            <Image src={dadosloja[0].loj_foto} priority="high" loader={loaderImagens} width={250} height={150} alt="imagemLoja" />
                        ) : (
                            <div></div>
                        )}
                        <div className={styles.mapaLoja}>
                            {/* <iframe
                                className={styles.mapa}             
                                    src={window.open(`https://www.google.com/maps?q=${dadosloja[0].loj_latitude},${dadosloja[0].loj_longitude}`)}
                                    src={`https://www.google.com/maps?q=${dadosloja[0].loj_latitude},${dadosloja[0].loj_longitude}`}
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.250493730164!2d${dadosloja[0].loj_latitude}!3d${dadosloja[0].loj_longitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489078d89ff44fd%3A0x433d05089a9e4d7e!2sR.%20Fernando%20Ferrari%2C%201175%20-%20Vila%20Industrial%2C%20Dourados%20-%20MS%2C%2079840-120!5e0!3m2!1spt-BR!2sbr!4v1675196720125!5m2!1spt-BR!2sbr`}
                            />                                         */}
                            <Link style={{textDecoration: "none", color: 'inherit', textAlign: 'center'}}  target='_blank' href={`https://www.google.com/maps/search/?api=1&query=${dadosloja[0].loj_latitude},${dadosloja[0].loj_longitude}`}>
                                Ver localização
                            </Link>
                        </div>
                    </div>	                
                </div>

            </div>        

        </div>
    
    </>               
    )
}

export async function getStaticProps() {
    
    const corpo = JSON.stringify( {
        acoes: [              
            { "acao" : "dadoshotsite"},
            { "acao" : "dadosloja"}
            
        ], loja: lojaId
    });

    const response =  await fetch(
        urlRequisicao,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: corpo
        }
    );

    const list = await response.json()


    return {
        props:  list,
        revalidate:10 
      }
}