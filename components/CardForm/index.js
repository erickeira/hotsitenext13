
import React,{useState}from 'react';
import styles from './cardForm.module.scss';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { existsOrError,UrlSite,notify,IsEmail, isMobile, } from '../../utils';

import { ToastContainer } from 'react-toastify';


 export default function CardForm(props)   {

    const { executeRecaptcha } = useGoogleReCaptcha();
    const [ loading, setLoading] = useState(false);
    const [ formulario, setFormulario ] = useState([]);

    const [ validate, setValidate ] = useState({ validateName: true,validateEmail: true,validateTel: true,validateUf: true,validateMensage: true });

    const {metodo, dadosVeiculo } = props
    
    let   ReqdadosVeiculos ;

    if (dadosVeiculo){

        ReqdadosVeiculos = {

            idveiculo: dadosVeiculo.vei_id || "",
            marca: dadosVeiculo.mar_nome || "",
            modelo : dadosVeiculo.vei_modelo || "",
            ano: dadosVeiculo.vei_ano || "",
            cor: dadosVeiculo.cor_nome || "",
            preco: dadosVeiculo.vei_preco || "",
                
          }
      
    }

    



    function handleForm(valores) {
        setFormulario({ ...formulario, ...valores });
        
    }



   
    async function handleSubmit() {
        setLoading(true);
        if (!executeRecaptcha) {
            notify('erro', 'recaptcha  não valida');
            return;
          }
        if (!existsOrError(formulario.nome) || !existsOrError(formulario.email) ||  !existsOrError(formulario.cidadeuf) || !existsOrError(formulario.telefone) || !existsOrError(formulario.mensagem)) {
            
            const camposinvalidos = {
                validateName:    existsOrError(formulario.nome) ? true : false,
                validateEmail:   existsOrError(formulario.email) ? true : false,
                validateUf:      existsOrError(formulario.cidadeuf) ? true : false,  
                validateTel:     existsOrError(formulario.telefone) ? true : false, 
                validateMensage: existsOrError(formulario.mensagem) ? true : false, 
            }

            setValidate({...validate, ...camposinvalidos});               
            notify('erro', 'Digite os campos obrigatórios'); 
            
        } else if (!IsEmail(formulario.email)) {
            
            setValidate({ validateName: true, validateEmail: false, validateTel: true, validateUf: true, validateMensage: true });
            notify('erro', 'Digite um e-mail válido');
            
        } else if (!isMobile(formulario.telefone)) {

            setValidate({ validateName: true, validateEmail: true, validateTel: false,  validateUf: true, validateMensage: true });
            notify('erro', 'Digite um celular válido');

        } else {


            executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
                
                submitEnquiryForm(gReCaptchaToken);

            });
         
        }


        
        


    }

    const submitEnquiryForm = (gReCaptchaToken) => {
        fetch("https://shopcar-hotsites.vercel.app/api/enquiry", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
            gRecaptchaToken: gReCaptchaToken,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
  
            if (res?.status === "success") {
    
              SubmitForm();
            } else {
                notify('erro', res?.message);
                setLoading(false); 
              
            }
          });
      };
    //    setLoading(true); 
        //    fazer chamada para Api 
        //     let corpo = {}
      async function SubmitForm() {
        
       
            let corpo = {}
       
        //     corpo = JSON.stringify( { ...formulario, metodo,ReqdadosVeiculos });
        //     let novaUrl = `http://localhost:3000/api/dados`;
        //     const response = await fetch(
            corpo = JSON.stringify( { ...formulario, metodo,ReqdadosVeiculos });
            
            let novaUrl = `${UrlSite}api/dados`;
      
            const response = await fetch(
                
                novaUrl,
                {                    
                    method: 'POST',
                    body: corpo
                } 
            )
         
           let resp = await response.json()
           if (resp.erro){
            notify('erro', resp.erro);
           }else{
            notify('sucesso', "sucesso!!!");
           }
                  
        setLoading(false); 
        
      }
     
  
 
 
    return(
        <>
            
            <div className={styles.containerMain}>
             {(metodo &&  metodo === "pedidoloja") && (
                <>
                    <div className={styles.containerDadosVeiculo}>
                        <div className= {`${styles.panelHeading}`}><b>Dados do veículo</b></div>
                            
                            <div className= {`${styles.dadosVeiculoCorpo}`}>
                                <div style={{width: '100%'}}>
                                    <div style={{width: '100%'}}>
                                        <label htmlFor="marca">Marca</label>
                                        <input type="text" name="marca" className= {`${styles.formControl}`} id="marca" onChange={(e) => handleForm({marca: e.target.value})} />
                                    </div>
                                    <div>
                                            <label htmlFor="modelo">Modelo</label>
                                            <input type="text" name="modelo" className= {`${styles.formControl}`} id="modelo" onChange={(e) => handleForm({modelo: e.target.value})} />
                                    </div>                          
                                </div>

                                <div className={styles.dadosContatoCorpo} style={{width: '100%'}}>
                                    
                                    <div className="form-group" style={{width: '100%'}}>
                                        <label htmlFor="anomodelo">Ano/Modelo</label>
                                        <input type="text" name="anomodelo" className= {`${styles.formControl}`} id="anomodelo" onChange={(e) => handleForm({anomodelo: e.target.value})}/>
                                    </div>       
                                    
                                    <div className="form-group" >
                                        <label htmlFor="cor">Cor</label>
                                        <input type="text" name="cor" className= {`${styles.formControl}`} id="cor" onChange={(e) => handleForm({cor: e.target.value})}/>
                                    </div>
                                    
                                </div>
                    
                            </div>
                            
                    </div>
                </>
                )}

                    <div className={styles.containerDadosContato}>
                        <div className= {`${styles.panelHeading}`}><b>Dados do contato</b></div>
                        <div className= {`${styles.dadosCorpo}`}>
                            <div style={{width: '100%'}}>
                                
                                <div>
                                    <label className="control-label" htmlFor="nome">Nome</label>                                    
                                    <input className= {`${styles.formControl}`} id="nome" name="nome" type="text" value={formulario.nome} onChange={(e) => handleForm({nome: e.target.value})} />
                                </div>
                                <div>
                                    <label className="control-label" htmlFor="telefone">Telefone</label>
                                    <input className= {`${styles.formControl}`} id="telefone" placeholder="(xx) xxxx-xxxx" name="telefone" type="text" value={formulario.telefone} onChange={(e) => handleForm({telefone: e.target.value})} />
                                </div>

                            </div>
                            <div style={{width: '100%'}}>
                                
                                <div>
                                    <label className="control-label" htmlFor="cidadeuf">Cidade/UF</label>
                                    <input className= {`${styles.formControl}`} id="cidadeuf" name="cidadeuf" type="text" value={formulario.cidadeuf} onChange={(e) => handleForm({cidadeuf: e.target.value})} />
                                </div>

                                <div>
                                    <label className="control-label" htmlFor="email">E-mail</label>
                                    <input className= {`${styles.formControl}`} id="email" name="email" type="email"value={formulario.email} onChange={(e) => handleForm({email: e.target.value})} />
                                </div>

                            </div>
                        </div>

                        <div className={`${styles.formMensage}`}>
                            <label className="control-label" htmlFor="mensagem">Mensagem</label>
                            <textarea className= {`${styles.formControl}`} id="mensagem" name="mensagem" rows="4" value={formulario.mensagem} onChange={(e) => handleForm({mensagem: e.target.value})} ></textarea>
                            
                            <button className= {`${styles.botaoForm}`} type="button" onClick={() => handleSubmit()}  >
                                {loading && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>}
                                {loading ? 'Enviando' : 'Enviar'}
                            </button>
                            
                        </div>
                    </div>
                
            </div>

            <ToastContainer/>        
        </>
    )

}