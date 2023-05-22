import Image from "next/image";
import styles from "./cardAnuncio.module.scss";
import { formatadorValor, loaderImagens } from '../../utils/index';
import {Skeleton} from '@mui/material';
import {RiCameraOffFill, RiCameraFill} from 'react-icons/ri';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

const CardAnuncio = ({anuncio, loading}) => {    

    if (loading) return(        
        <div className={styles.cardAnuncio}>
            <span className={styles.detalhes}>Ver detalhes</span>
            <div className={styles.envolveImagemVeiculo}>
                <Skeleton height={'120%'}/>                   
            </div>
            <p className={styles.modelo}><Skeleton width={'50%'}/></p>
            <span className={[styles.ano, {color: ""}]}><Skeleton width={40}/></span>
            <div className={styles.preco}><Skeleton width={'50%'}/></div>
        </div>
    )

    return(
        <div className={styles.cardAnuncio}>
            <span className={styles.detalhes}>Ver detalhes</span>
            <div className={styles.envolveImagemVeiculo}>
                {                    
                    anuncio.vei_foto ?
                        <>
                            <Image className={styles.imagemVeiculo} loader={loaderImagens} fill priority="high" sizes="(max-width: 100px) 100vw" alt={anuncio.vei_modelo} src={`${anuncio.vei_foto}`} />
                            {/* <div className={styles.fundoCardAnuncio} /> */}
                            {/* <Skeleton className={styles.skeletonCardAnuncio} /> */}
                        </>
                        
                    : 
                        anuncio.tem_fotos == 'nao' ? 
                            <div className={styles.envolveImagemSemFoto}>
                                <RiCameraOffFill size={50} color={"#adadad"}/>
                                <span>SEM FOTO</span>
                            </div>
                        :
                            <div className={styles.envolveImagemSemFoto}>
                                <RiCameraFill size={50} color={"#adadad"}/>
                            </div> 
                }                    
            </div>                
            <p className={styles.modelo}>{anuncio.vei_modelo}</p>
            <span className={styles.ano}>{anuncio.vei_ano} - {anuncio.cor_nome}</span>
            <div className={styles.preco}>{anuncio.vei_preco ? formatadorValor(anuncio.vei_preco) : "Consulte-nos"}</div>
        </div>   
    )
}

export default CardAnuncio;