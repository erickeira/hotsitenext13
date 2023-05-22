import styles from "./rodape.module.scss"

function obterAnoAtual() {
    const dataAtual = new Date();
    return dataAtual.getFullYear();
}
const anoAtual = obterAnoAtual();

const Rodape = () => {      
    return(
        <footer className={styles.container}>
            <p>© {anoAtual} <a href={`https://www.shopcar.com.br/`} target="_blank">SHOPCAR</a> - Sua Referência em Veículos - Classificados de Carros. Todos os direitos reservados.</p>   
        </footer>
    )
}

export default Rodape;