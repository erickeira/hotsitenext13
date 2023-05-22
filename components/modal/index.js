import styles from './modal.module.scss'
import { useState } from 'react'

const Modal = (props) => {  

    const {className, style} = props

    if(!props.modalAberto) return null
    return(
        <div className={styles.fundoModal} onClick={() => {props.fecharModal()}}>
            <div className={`${styles.containerModal} ${className}`} style={{...style}}>                
                {props.children}
            </div>
        </div>
    )  
}

export default Modal;