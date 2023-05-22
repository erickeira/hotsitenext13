import React,{useState}from 'react';
import styles from './cardForm.module.scss';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { existsOrError,UrlSite,notify,IsEmail, isMobile, lojaId, urlApiLocal } from '../../utils';
import { ToastContainer } from 'react-toastify';

 export default function CardForm(props)   {

    const { executeRecaptcha } = useGoogleReCaptcha();
    const [ loading, setLoading] = useState(false);
    const [ formulario, setFormulario ] = useState([]);
    
    // const [ validate, setValidate ] = useState({ validateName: true,validateEmail: true,validateTel: true,validateUf: true,validateMensage: true });
    
    const {metodo, idVeiculo} = props    

    function handleForm(valores) {
      setFormulario({ ...formulario, ...valores });
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
      async function SubmitForm() {    
        const corpo = JSON.stringify({
          acoes: [
            {
              acao: metodo,
              params: {
                id: idVeiculo ? idVeiculo : '',
                dados: {                  
                  ...formulario
                }
              }
            }
          ],
          loja: lojaId
        });
        
      
            const response = await fetch(

                urlApiLocal,
                {                    
                  method: 'POST',
                  body: corpo
                } 
            )
         
           let resp = await response.json()
           if (resp.erro){
            notify('erro', resp.erro);
           }else{
            notify('sucesso', "Enviado");
           }
        setLoading(false);         
      }   
   
    async function handleSubmit() {
        if (!executeRecaptcha) {
          notify('erro', 'recaptcha não valida');
          return;
        }
      
        const camposinvalidos = {
          validateName: existsOrError(formulario.nome),
          validateEmail: existsOrError(formulario.email),
          validateUf: existsOrError(formulario.cidadeuf),
          validateTel: existsOrError(formulario.telefone),
          validateMensage: existsOrError(formulario.mensagem),
          validateMarca: existsOrError(formulario.marca),
          validateModelo: existsOrError(formulario.modelo),
          validateAnoModelo: existsOrError(formulario.ano)
        };
      
        if (!camposinvalidos.validateName) {
          notify('erro', 'Nome obrigatório');
        } else if (!camposinvalidos.validateEmail) {
          notify('erro', 'Email obrigatório');
        } else if (!camposinvalidos.validateUf) {
          notify('erro', 'Cidade obrigatório');
        } else if (!camposinvalidos.validateTel) {
          notify('erro', 'Telefone obrigatório');
        } else if (!camposinvalidos.validateMensage) {
          notify('erro', 'Mensagem obrigatória');
        } else if (!IsEmail(formulario.email)) {
          notify('erro', 'Digite um e-mail válido');
        } else if (!isMobile(formulario.telefone)) {
          notify('erro', 'Digite um celular válido');
        } else if (metodo && metodo === "pedidoloja") {
          if (!camposinvalidos.validateMarca) {
            notify('erro', 'Marca obrigatório');
          } else if (!camposinvalidos.validateModelo) {
            notify('erro', 'Modelo obrigatório');
          } else if (!camposinvalidos.validateAnoModelo) {
            notify('erro', 'Ano/Modelo obrigatório');
          }
        } else {
            if (typeof window !== 'undefined') {
              window.location.hostname == 'localhost' ? SubmitForm() : executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {submitEnquiryForm(gReCaptchaToken);}); 
            } else{
              executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {submitEnquiryForm(gReCaptchaToken);});
            }
        }
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
                                  <input type="text" name="marca" className= {`${styles.formControl}`} id="marca" value={formulario.marca || ''} onChange={(e) => handleForm({marca: e.target.value})} />
                                </div>
                                <div>
                                  <label htmlFor="modelo">Modelo</label>
                                  <input type="text" name="modelo" className= {`${styles.formControl}`} id="modelo" value={formulario.modelo || ''} onChange={(e) => handleForm({modelo: e.target.value})} />
                                </div>                          
                            </div>

                            <div className={styles.dadosContatoCorpo} style={{width: '100%'}}>
                                
                                <div className="form-group" style={{width: '100%'}}>
                                  <label htmlFor="anomodelo">Ano/Modelo</label>
                                  <input type="text" name="anomodelo" className= {`${styles.formControl}`} id="anomodelo" value={formulario.ano || ''} onChange={(e) => handleForm({ano: e.target.value})}/>
                                </div>       
                                
                                <div className="form-group">
                                  <label htmlFor="cor">Cor</label>
                                  <input type="text" name="cor" className= {`${styles.formControl}`} id="cor" value={formulario.cor || ''} onChange={(e) => handleForm({cor: e.target.value})}/>
                                </div>                                
                                
                            </div>
                
                        </div>                            
                    </div>
                </>
                )}

                    <div className={styles.containerDadosContato}>
                        <div className= {`${styles.panelHeading}`}><b>Dados para contato</b></div>
                        <div className= {`${styles.dadosCorpo}`}>
                            <div style={{width: '100%'}}>
                                
                                <div>
                                  <label className="control-label" htmlFor="nome">Nome</label>                                    
                                  <input className= {`${styles.formControl}`} id="nome" name="nome" type="text" value={formulario.nome || ''} onChange={(e) => handleForm({nome: e.target.value})} />
                                </div>
                                <div>
                                  <label className="control-label" htmlFor="telefone">Telefone</label>
                                  <input className= {`${styles.formControl}`} id="telefone" placeholder="(xx) xxxx-xxxx" name="telefone" type="text" value={formulario.telefone || ''} onChange={(e) => handleForm({telefone: e.target.value})} />
                                </div>

                            </div>
                            <div style={{width: '100%'}}>
                                
                                <div>
                                  <label className="control-label" htmlFor="cidadeuf">Cidade/UF</label>
                                  <input className= {`${styles.formControl}`} id="cidadeuf" name="cidadeuf" type="text" value={formulario.cidadeuf || ''} onChange={(e) => handleForm({cidadeuf: e.target.value})} />
                                </div>

                                <div>
                                  <label className="control-label" htmlFor="email">E-mail</label>
                                  <input className= {`${styles.formControl}`} id="email" name="email" type="email" value={formulario.email || ''} onChange={(e) => handleForm({email: e.target.value})} />
                                </div>

                            </div>
                        </div>

                        <div className={`${styles.formMensage}`}>
                          <label className="control-label" htmlFor="mensagem">Mensagem</label>
                          <textarea className= {`${styles.formControl}`} id="mensagem" name="mensagem" rows="4" value={formulario.mensagem || ''} onChange={(e) => handleForm({mensagem: e.target.value})} ></textarea>
                          
                          {metodo &&  metodo == 'proposta' ? <input type="hidden"  value={idVeiculo ? idVeiculo : null}/> : null}

                          <button className={`${styles.botaoForm}`} type="button" onClick={() => handleSubmit()}>
                            Enviar
                          </button>
                            
                        </div>                        
                    </div>                
                    
            </div>
            <ToastContainer className={styles.toastContainer}/>
        </>
    )

}