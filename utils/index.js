import axios from "axios";
import { toast } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css' ;

let urlRequisicao   = 'https://api-dev.shopcar.com.br/hotsites/'
let lojaId          = 1722
const urlApiLocal   = '/api'
const nomeLoja      = "Loja para testes"
const UrlSite       = "https://shopcar-hotsites.vercel.app/"
const urlImg        = "https://static-dev.shopcar.com.br/"
const api           = axios.create({
                            baseURL: urlRequisicao,    
                            headers: {'Content-type' : 'application/x-www-form-urlencoded'}
                        });

const defaultColors = {
    primary: 'var(--corTema1)',
    secundary: 'black'
}
const tema = {
    header : 'primary',
    card: 'primary',
    rodape: 'primary'
}

function removerSpecials(texto) {
    texto = texto.replace(/\s/g, '');
    texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
    texto = texto.replace(/[àáâãäå]/,"a");
    texto = texto.replace(/[ÈÉÊË]/,"E");
    texto = texto.replace(/[éèêë]/,"e");
    texto = texto.replace(/[ÍÎÌÏĮĪ]/,"I");
    texto = texto.replace(/[íîìïįī]/,"i");
    texto = texto.replace(/[ÓÕÔÒºÖŒØŌ]/,"O");
    texto = texto.replace(/[óõôòºöœøō]/,"o");
    texto = texto.replace(/[úüùûū]/,"u");
    texto = texto.replace(/[ÚÜÙÛŪ]/,"U");
    texto = texto.replace(/[Ç]/,"C");
    texto = texto.replace(/[ç]/,"c");
    texto = texto.replace("/", "-");
    return texto.toLowerCase();
    }


function loaderImagens({src, width, quality}) {
    return `${urlImg}${src}`
}

function loaderImagensLocal({src, width, quality}) {
    return `${src}`
}

const formatadorValor = (valor) => {
    var v = valor.replace(/\D/g,'');
    v = (v*1).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return 'R$ ' + v;
}

const existsOrError = (value) => {
    if(!value) return false;
    if(Array.isArray(value) && value.length === 0) return false;
    if(typeof value === 'string' && !value.trim()) return false;
    return true;
}

const notify = (tipo, mensagem) => {

    if (tipo === 'sucesso') {
        toast.success(mensagem, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar',
            autoClose: 5000
        });            
    } else if (tipo === 'erro') {
        toast.error(mensagem, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar',
            autoClose: 5000
        });
    } else if (tipo === 'aviso') {
        toast.warn(mensagem, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar' ,
            autoClose: 5000
        });
    }

}

const IsEmail = (email) => { 
    // eslint-disable-next-line
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;var check=/@[\w\-]+\./;var checkend=/\.[a-zA-Z]{2,3}$/;if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}else {return true;} 
}


const isMobile = (celular) => {
    const numero = celular.replace('-', '').replace('(', '').replace(')', '').replace(' ', '').replace('_', '');
    const telefones_blacklist = ['000000000', '111111111','222222222','333333333','444444444','555555555','666666666','777777777','888888888','999999999'];
    let validaBlacklist = true;
    telefones_blacklist.forEach(function(valida){
            if(valida === numero.substr(2,9)){
                validaBlacklist = false;
                return false;
            }
        }
    );
    
    if(numero.length === 11 && numero.substr(2,1) === '9' && validaBlacklist){ 
        return true; 
    }else{ 
        return false;  
    } 
}

export {
    defaultColors,
    loaderImagens,
    api,
    lojaId,
    UrlSite,
    urlImg,
    urlRequisicao,
    loaderImagensLocal,
    formatadorValor,
    existsOrError,
    notify,
    IsEmail,
    isMobile,
    removerSpecials,
    nomeLoja,
    urlApiLocal,
    tema
};

