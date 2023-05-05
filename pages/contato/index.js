import styles    from './contato.module.scss';
import Image     from 'next/image'
import CardForm  from '../../components/CardForm';
import pedidoImg from '../../public/img/img-pedidos.png'
import {defaultColors, loaderImagensLocal} from '../../utils'
export default function Contato () {

const metodo = "contatoloja"


    return(
        <>        
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
            </div>   
        </div>
    </>     
    )
}