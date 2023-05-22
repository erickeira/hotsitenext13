var D=(M,u,n)=>{"use strict";n.d(u,{Z:()=>p});var e=n(5893),d=n(7294),v=n(7216),t=n.n(v),j=n(259),o=n(3805),g=n(5678);function p(f){let{executeRecaptcha:c}=(0,j.xX)(),[$,m]=(0,d.useState)(!1),[l,N]=(0,d.useState)([]),{metodo:r,idVeiculo:h}=f;function i(a){N({...l,...a})}let b=a=>{fetch("https://shopcar-hotsites.vercel.app/api/enquiry",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({gRecaptchaToken:a})}).then(s=>s.json()).then(s=>{s?.status==="success"?C():((0,o.h4)("erro",s?.message),m(!1))})};async function C(){let a=JSON.stringify({acoes:[{acao:r,params:{id:h||"",dados:{...l}}}],loja:o.eP}),s=await fetch(o.Zv,{method:"POST",body:a}),x=await s.json();x.erro?(0,o.h4)("erro",x.erro):(0,o.h4)("sucesso","Enviado"),m(!1)}async function y(){if(!c){(0,o.h4)("erro","recaptcha n\xE3o valida");return}let a={validateName:(0,o.DE)(l.nome),validateEmail:(0,o.DE)(l.email),validateUf:(0,o.DE)(l.cidadeuf),validateTel:(0,o.DE)(l.telefone),validateMensage:(0,o.DE)(l.mensagem),validateMarca:(0,o.DE)(l.marca),validateModelo:(0,o.DE)(l.modelo),validateAnoModelo:(0,o.DE)(l.ano)};a.validateName?a.validateEmail?a.validateUf?a.validateTel?a.validateMensage?(0,o.s6)(l.email)?(0,o.tq)(l.telefone)?r&&r==="pedidoloja"?a.validateMarca?a.validateModelo?a.validateAnoModelo||(0,o.h4)("erro","Ano/Modelo obrigat\xF3rio"):(0,o.h4)("erro","Modelo obrigat\xF3rio"):(0,o.h4)("erro","Marca obrigat\xF3rio"):c("enquiryFormSubmit").then(s=>{b(s)}):(0,o.h4)("erro","Digite um celular v\xE1lido"):(0,o.h4)("erro","Digite um e-mail v\xE1lido"):(0,o.h4)("erro","Mensagem obrigat\xF3ria"):(0,o.h4)("erro","Telefone obrigat\xF3rio"):(0,o.h4)("erro","Cidade obrigat\xF3rio"):(0,o.h4)("erro","Email obrigat\xF3rio"):(0,o.h4)("erro","Nome obrigat\xF3rio")}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:t().containerMain,children:[r&&r==="pedidoloja"&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:t().containerDadosVeiculo,children:[(0,e.jsx)("div",{className:`${t().panelHeading}`,children:(0,e.jsx)("b",{children:"Dados do ve\xEDculo"})}),(0,e.jsxs)("div",{className:`${t().dadosVeiculoCorpo}`,children:[(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsx)("label",{htmlFor:"marca",children:"Marca"}),(0,e.jsx)("input",{type:"text",name:"marca",className:`${t().formControl}`,id:"marca",value:l.marca||"",onChange:a=>i({marca:a.target.value})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{htmlFor:"modelo",children:"Modelo"}),(0,e.jsx)("input",{type:"text",name:"modelo",className:`${t().formControl}`,id:"modelo",value:l.modelo||"",onChange:a=>i({modelo:a.target.value})})]})]}),(0,e.jsxs)("div",{className:t().dadosContatoCorpo,style:{width:"100%"},children:[(0,e.jsxs)("div",{className:"form-group",style:{width:"100%"},children:[(0,e.jsx)("label",{htmlFor:"anomodelo",children:"Ano/Modelo"}),(0,e.jsx)("input",{type:"text",name:"anomodelo",className:`${t().formControl}`,id:"anomodelo",value:l.ano||"",onChange:a=>i({ano:a.target.value})})]}),(0,e.jsxs)("div",{className:"form-group",children:[(0,e.jsx)("label",{htmlFor:"cor",children:"Cor"}),(0,e.jsx)("input",{type:"text",name:"cor",className:`${t().formControl}`,id:"cor",value:l.cor||"",onChange:a=>i({cor:a.target.value})})]})]})]})]})}),(0,e.jsxs)("div",{className:t().containerDadosContato,children:[(0,e.jsx)("div",{className:`${t().panelHeading}`,children:(0,e.jsx)("b",{children:"Dados para contato"})}),(0,e.jsxs)("div",{className:`${t().dadosCorpo}`,children:[(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"control-label",htmlFor:"nome",children:"Nome"}),(0,e.jsx)("input",{className:`${t().formControl}`,id:"nome",name:"nome",type:"text",value:l.nome||"",onChange:a=>i({nome:a.target.value})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"control-label",htmlFor:"telefone",children:"Telefone"}),(0,e.jsx)("input",{className:`${t().formControl}`,id:"telefone",placeholder:"(xx) xxxx-xxxx",name:"telefone",type:"text",value:l.telefone||"",onChange:a=>i({telefone:a.target.value})})]})]}),(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"control-label",htmlFor:"cidadeuf",children:"Cidade/UF"}),(0,e.jsx)("input",{className:`${t().formControl}`,id:"cidadeuf",name:"cidadeuf",type:"text",value:l.cidadeuf||"",onChange:a=>i({cidadeuf:a.target.value})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"control-label",htmlFor:"email",children:"E-mail"}),(0,e.jsx)("input",{className:`${t().formControl}`,id:"email",name:"email",type:"email",value:l.email||"",onChange:a=>i({email:a.target.value})})]})]})]}),(0,e.jsxs)("div",{className:`${t().formMensage}`,children:[(0,e.jsx)("label",{className:"control-label",htmlFor:"mensagem",children:"Mensagem"}),(0,e.jsx)("textarea",{className:`${t().formControl}`,id:"mensagem",name:"mensagem",rows:"4",value:l.mensagem||"",onChange:a=>i({mensagem:a.target.value})}),r&&r=="proposta"?(0,e.jsx)("input",{type:"hidden",value:h||null}):null,(0,e.jsx)("button",{className:`${t().botaoForm}`,type:"button",onClick:()=>y(),children:"Enviar"})]})]})]}),(0,e.jsx)(g.Ix,{className:t().toastContainer})]})}};export{D as default};