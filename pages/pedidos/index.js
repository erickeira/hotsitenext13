
import styles from './pedidos.module.scss'
import  CardForm  from '../../components/CardForm'
import Image from 'next/image'
import pedidoImg from '../../public/img/img-pedidos.png'
import {nomeLoja} from '../../utils'
import { Divider } from '@mui/material'
import Head from 'next/head';


export default function Pedidos () {
    const metodo =  "pedidoloja"

    return(
        <>        
            <Head> 
                <meta property="og:type" content="product" />
                <meta property="og:title" content="Faça seu pedido" />
                <meta property="og:description" content="Não encontou o veiculo que você deseja?" />
                <meta property="og:image" content="/img/compartilhamento.jpg" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" />
                <title>{`Faça seu pedido | ${nomeLoja}`}</title>
            </Head>
            <div className={styles.containerPagePedidos}>
            
                <div>
                    <div className= {`${styles.pageHeader}`}>
                        <h2>Banco de pedidos</h2>
                    </div>
                </div>
               
                    <div className={`${styles.container}`}>
                        <div className= {`${styles.row}`}>
                            
                            <div className= {`${styles.infoEsquerda}`}>
                                <h3 className= {`${styles.textSub}`}>Não encontrou o veículo que você deseja?</h3>
                                <p>Faça o seu pedido! Faremos o possível para encontrar o que você procura.</p>
                                <p>Preencha corretamente os campos do formulário, envie-nos o seu pedido, e logo entraremos em contato com você.</p>
                                <div className= {`${styles.imgPedido} `}>
                                    <Image src={pedidoImg} className= {`${styles.imgPedido}`}  priority="hight"  width="auto" height="auto" alt="pedido"/>				
                                </div>
                                <p>Faça seu pedido!</p>
                            </div>

                            <div className= {`${styles.infoDireita}`}>
                                <div className= {`${styles.AlinhaCard}`}>
                                    <CardForm  metodo={metodo}/>
                                </div>
                            </div>

                        </div>				 
                    </div>
            </div>  
        </>     
    )
}