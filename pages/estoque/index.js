import styles from './estoque.module.scss'
import Busca from "../../components/busca";

export default function Estoque () {
    return(        
        <div className={styles.container}>
            <Busca temPaginacao/>
        </div>
    )
}