(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9937:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fale-conosco",function(){return l(7069)}])},9916:function(e,a,l){"use strict";l.d(a,{Z:function(){return d}});var t=l(5893),s=l(7294),n=l(1163),i=l(8596);l(134),l(4398);var o=l(5675),c=l.n(o),r=l(926);function d(e){let a=(0,n.useRouter)(),[l,o]=(0,s.useState)(!1);a.query;let d=()=>o(!1),m=()=>o(!0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"content-header",children:(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between container py-4",children:[(0,t.jsx)("h1",{className:"font-20 font-md-28 text-center text-md-left m-0 text-white",children:e.title}),(0,t.jsx)("button",{onClick:m,className:"p-1 m-0 bg-transparent botaoLupa border-0 d-block d-md-none",children:(0,t.jsx)(c(),{src:"/svg/search.svg",width:30,height:30,alt:"busca"})})]})}),(0,t.jsx)(i.Z,{className:"modal-style",centered:!0,show:l,onHide:d,children:(0,t.jsx)(i.Z.Body,{className:"p-4",children:(0,t.jsx)(r.Z,{show:l,formulario:e.formulario,callbackclose:d})})})]})}},926:function(e,a,l){"use strict";l.d(a,{Z:function(){return m}});var t=l(5893),s=l(7294),n=l(4398),i=l(9020),o=l(1163),c=l(134),r=l(9072);let d={menuPortal:e=>({...e,zIndex:9999,fontSize:14}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"4px",height:"0px"},"::-webkit-scrollbar-track":{background:"#f1f1f1"},"::-webkit-scrollbar-thumb":{background:"#888"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})};function m(e){let a=(0,o.useRouter)(),l=a.query,{finalidades:m,tipoimoveis:p,estados:x,valores:u,loadingDados:h,setValores:v}=(0,s.useContext)(c.V),{callbackclose:f}=e,g=m.map(e=>({value:e,label:e})),[j,b]=(0,s.useState)(!1),[N,y]=(0,s.useState)(e.formulario?e.formulario:l||[]),[w,C]=(0,s.useState)([]),[E,k]=(0,s.useState)([]),{valor_minimo:D,valor_maximo:L}=u;async function _(){let e=await (0,r.VQ)("");return v({...u,valor_minimo:parseInt(e.valor_minimo),valor_maximo:parseInt(e.valor_maximo)})}async function I(e,a){if("finalidade"===e){let e=await (0,r.VQ)(a);return v({...u,valor_minimo:parseInt(e.valor_minimo),valor_maximo:parseInt(e.valor_maximo)}),y({...N,finalidade:a,valorde:parseInt(e.valor_minimo),valorate:parseInt(e.valor_maximo)})}return"tipo"===e?y({...N,tipo:a}):"uf"===e?(y({...N,uf:a}),C([{value:"",label:"Carregando"}]),C((await (0,r.P6)("cidades",a)).cidades)):"cidade"===e?(y({...N,cidade:a}),k([{value:"",label:"Carregando"}]),k((await (0,r.P6)("bairros",a)).bairros)):"bairro"===e?y({...N,bairro:a}):void 0}async function S(){return(f&&f(),N.finalidade&&void 0!==N)?(b(!1),a.push({pathname:"/busca",query:N})):(y({...N,finalidade:"",valorde:parseInt(D),valorate:parseInt(L)}),a.push({pathname:"/busca",query:y}))}return(0,s.useEffect)(()=>{(null===L&&null===D||isNaN(L)&&isNaN(D))&&_()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"font-24 m-0 pb-3 color-primary",children:"Encontre no Site"}),(0,t.jsx)("div",{className:"flex-grow-1",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12 pb-2 mb-1",children:(0,t.jsx)(i.ZP,{className:"select",classNamePrefix:"react-select",value:g.find(e=>e.value==N.finalidade),placeholder:"FINALIDADE",onChange:e=>I("finalidade",e.value),options:g,styles:d})}),(0,t.jsx)("div",{className:"col-12 pb-2 mb-1",children:(0,t.jsx)(i.ZP,{className:"select",classNamePrefix:"react-select",value:p.find(e=>e.value==N.tipo),placeholder:"TIPO DO IM\xd3VEL",onChange:e=>I("tipo",e.value),options:p,styles:d})}),(0,t.jsx)("div",{className:"col-12 col-md-4 pb-2 mb-1 pr-3 pr-md-0",children:(0,t.jsx)(i.ZP,{className:"select",classNamePrefix:"react-select",placeholder:"UF",value:x.find(e=>e.value==N.uf),onChange:e=>I("uf",e.value),options:x,styles:d})}),(0,t.jsx)("div",{className:"col-12 col-md-8 pb-2 mb-1 pl-3 pl-md-0",children:(0,t.jsx)(i.ZP,{className:"select",classNamePrefix:"react-select",value:null==w?void 0:w.find(e=>e.value==N.cidade),placeholder:"CIDADE",onChange:e=>I("cidade",e.value),options:w,noOptionsMessage:()=>"Selecione",styles:d})}),(0,t.jsx)("div",{className:"col-12 pb-2 mb-2",children:(0,t.jsx)(i.ZP,{className:"select",classNamePrefix:"react-select",placeholder:"BAIRRO",value:E.find(e=>e.value==N.bairro),onChange:e=>I("bairro",e.value),options:E,styles:d,noOptionsMessage:()=>"Selecione"})}),(0,t.jsxs)("div",{className:"col-12 pb-2 mb-1",children:[(0,t.jsx)("label",{className:"d-block font-12 pb-3 ms-2",children:(0,t.jsx)("div",{className:"imputValorDesejado react-select__control ",children:"VALOR DESEJADO"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.Range,{min:parseInt(D),max:parseInt(L),values:[N.valorde||D||0,N.valorate||L||100],allowCross:!1,allowOverlap:!0,onChange:e=>{var a;return a={valorde:e[0],valorate:e[1]},void y({...N,...a})},renderTrack:e=>{let{props:a,children:l}=e;return(0,t.jsx)("div",{...a,style:{...a.style,height:"6px",width:"100%",backgroundColor:"#ccc"},children:l})},renderThumb:e=>{let{props:a}=e;return(0,t.jsx)("div",{...a,style:{...a.style,height:"20px",width:"20px",borderRadius:"5px",backgroundColor:"#48AAF0"}})}}),(0,t.jsxs)("div",{className:"d-flex justify-content-between font-12 pt-3 pb-1 text-center",children:[h?(0,t.jsx)("div",{style:{backgroundColor:"#d1d1d1",height:15,width:80}}):(0,t.jsxs)("div",{children:["R$  ",(0,r.ed)(N.valorde||D||0)," "]}),h?(0,t.jsx)("div",{style:{backgroundColor:"#d1d1d1",height:15,width:80}}):(0,t.jsxs)("div",{children:["R$  ",(0,r.ed)(N.valorate||L||0)," "]})]})]})]})]})}),(0,t.jsxs)("button",{type:"button",className:"btn btn-primary font-weight-bold font-14 w-100 py-3",onClick:()=>S(),disabled:!!j,children:[j&&(0,t.jsx)("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),j?"BUSCANDO":"BUSCAR AGORA"]})]})}},7069:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return p}});var t=l(5893),s=l(7294),n=l(9008),i=l.n(n),o=l(5675),c=l.n(o),r=l(9916),d=l(2920),m=l(9072);function p(e){let[a,l]=(0,s.useState)(!1),[n,o]=(0,s.useState)({nomecompleto:"",email:"",cidade:"",uf:"",telefone:"",mensagem:""}),[p,x]=(0,s.useState)({validateName:!0,validateEmail:!0,validateTel:!0,validateCity:!0,validateUf:!0,validateMensage:!0});async function u(){if((0,m.DE)(n.nomecompleto)&&(0,m.DE)(n.email)&&(0,m.DE)(n.cidade)&&(0,m.DE)(n.uf)&&(0,m.DE)(n.telefone)&&(0,m.DE)(n.mensagem)){if((0,m.s6)(n.email)){if((0,m.tq)(n.telefone)){l(!0),x({validateName:!0,validateEmail:!0,validateTel:!0,validateCity:!0,validateUf:!0,validateMensage:!0});let e=JSON.stringify({acoes:[{metodo:"faleconosco",params:[{...n}]}],id:m.pG}),a=await fetch(m.JW,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}),t=await a.json();"erro"===t.faleconosco.status?(0,m.h4)("erro",t.faleconosco.erro):"sucesso"===t.faleconosco.status&&((0,m.h4)("sucesso","Mensagem enviada com sucesso"),o({nomecompleto:"",email:"",cidade:"",uf:"",telefone:"",mensagem:""})),l(!1)}else x({validateName:!0,validateEmail:!0,validateTel:!1,validateCity:!0,validateUf:!0,validateMensage:!0}),(0,m.h4)("erro","Digite um celular v\xe1lido")}else x({validateName:!0,validateEmail:!1,validateTel:!0,validateCity:!0,validateUf:!0,validateMensage:!0}),(0,m.h4)("erro","Digite um e-mail v\xe1lido")}else{let e={validateName:!!(0,m.DE)(n.nomecompleto),validateEmail:!!(0,m.DE)(n.email),validateCity:!!(0,m.DE)(n.cidade),validateUf:!!(0,m.DE)(n.uf),validateTel:!!(0,m.DE)(n.telefone),validateMensage:!!(0,m.DE)(n.mensagem)};x({...p,...e}),(0,m.h4)("erro","Digite os campos obrigat\xf3rios")}}function h(e){o({...n,...e})}return(0,s.useEffect)(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i(),{children:[(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"".concat(m.Lt,"apple-icon-57x57.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"".concat(m.Lt,"apple-icon-60x60.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"".concat(m.Lt,"apple-icon-72x72.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"".concat(m.Lt,"apple-icon-76x76.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"".concat(m.Lt,"apple-icon-114x114.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"".concat(m.Lt,"apple-icon-120x120.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"".concat(m.Lt,"apple-icon-144x144.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"".concat(m.Lt,"apple-icon-152x152.png")}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(m.Lt,"apple-icon-180x180.png")}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(m.Lt,"android-icon-192x192.png")}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(m.Lt,"favicon-32x32.png")}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"".concat(m.Lt,"favicon-96x96.png")}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(m.Lt,"favicon-16x16.png")}),(0,t.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,t.jsx)("meta",{name:"msapplication-TileImage",content:"".concat(m.Lt,"ms-icon-144x144.png")}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,t.jsx)("meta",{name:"description",content:m.iI}),(0,t.jsx)("meta",{name:"og:site_name",property:"og:site_name",content:m.oY}),(0,t.jsx)("meta",{name:"og:title",property:"og:title",content:"Fale Conosco | ".concat(m.oY)}),(0,t.jsx)("meta",{name:"og:url",property:"og:url",content:"".concat(m.oA,"/fale-conosco")}),(0,t.jsx)("meta",{name:"og:description",property:"og:description",content:m.iI}),(0,t.jsx)("meta",{name:"og:image",property:"og:image",content:"".concat(m.Lt,"padrao.png")}),(0,t.jsx)("meta",{name:"og:image:width",property:"og:image:width",content:"300"}),(0,t.jsx)("meta",{name:"og:image:height",property:"og:image:height",content:"300"}),(0,t.jsxs)("title",{children:["Fale Conosco | ",m.oY]})]}),(0,t.jsx)(r.Z,{title:"Fale Conosco",noSearch:!0,routes:e}),(0,t.jsx)("div",{className:"main",children:(0,t.jsxs)("div",{className:"container py-5 font-14",children:[(0,t.jsx)("p",{children:"Caso necessite, entre em contato conosco preenchendo o formul\xe1rio abaixo."}),(0,t.jsxs)("div",{className:"row py-4",children:[(0,t.jsx)("div",{className:"d-none d-xl-block col-4",children:(0,t.jsx)(c(),{src:"../img/banco-de-pedidos.jpg",loader:m.L7,width:72,height:16,alt:"place",blurDataURL:"URL",placeholder:"blur"})}),(0,t.jsx)("div",{className:"col-12 col-xl-8",children:(0,t.jsx)("form",{children:(0,t.jsx)("div",{className:"row mx-0",children:(0,t.jsxs)("div",{className:"col-12 col-md-6 pl-0 pr-0 pr-md-4",children:[(0,t.jsx)("h2",{className:"font-24 color-primary pb-4",children:"Seus Dados"}),(0,t.jsxs)("div",{className:"row mx-0",children:[(0,t.jsx)("div",{className:"col-12 pb-2 mb-1 px-0",children:(0,t.jsx)("input",{type:"text",className:p.validateName?"":"is-invalid",placeholder:"NOME COMPLETO",value:n.nomecompleto,onChange:e=>h({nomecompleto:e.target.value})})}),(0,t.jsx)("div",{className:"col-12 px-0 pb-2 mb-1",children:(0,t.jsx)("input",{type:"email",className:p.validateEmail?"":"is-invalid",placeholder:"E-MAIL",value:n.email,onChange:e=>h({email:e.target.value})})}),(0,t.jsx)("div",{className:"col-12 col-md-10 px-0 pb-2 mb-1",children:(0,t.jsx)("input",{type:"text",className:p.validateCity?"":"is-invalid",placeholder:"CIDADE",value:n.cidade,onChange:e=>h({cidade:e.target.value})})}),(0,t.jsx)("div",{className:"col-12 col-md-2 px-0 pb-2 mb-1",children:(0,t.jsx)("input",{type:"text",placeholder:"UF",maxLength:"2",className:p.validateUf?"text-uppercase":"is-invalid text-uppercase",value:n.uf,onChange:e=>h({uf:e.target.value})})}),(0,t.jsx)("div",{className:"col-12 px-0 pb-2 mb-1",children:(0,t.jsx)("input",{className:p.validateTel?"":"is-invalid",placeholder:"CELULAR",value:n.telefone,onChange:e=>h({telefone:e.target.value})})}),(0,t.jsx)("div",{className:"col-12 px-0 pb-2 mb-1",children:(0,t.jsx)("textarea",{className:p.validateMensage?"":"is-invalid",placeholder:"MENSAGEM",value:n.mensagem,onChange:e=>h({mensagem:e.target.value})})}),(0,t.jsx)("div",{className:"col-12 pt-4 px-0 d-flex justify-content-end",children:(0,t.jsxs)("button",{type:"button",onClick:()=>u(),className:"btn btn-primary font-14 py-2 px-5 shadow-sm",disabled:!!a,children:[a&&(0,t.jsx)("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),"ENVIAR"]})})]})]})})})})]})]})}),(0,t.jsx)(d.Ix,{})]})}}},function(e){e.O(0,[893,596,774,888,179],function(){return e(e.s=9937)}),_N_E=e.O()}]);