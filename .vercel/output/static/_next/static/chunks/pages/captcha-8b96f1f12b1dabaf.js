(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{4114:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/captcha",function(){return t(9986)}])},9986:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var a=t(5893),l=t(7294),s=t(1502),i=t.n(s),o=t(259);function r(){let[e,n]=(0,l.useState)(""),[t,s]=(0,l.useState)(""),[r,u]=(0,l.useState)(""),[c,m]=(0,l.useState)(""),{executeRecaptcha:h}=(0,o.xX)(),p=(0,l.useCallback)(e=>{e.preventDefault(),h&&h("enquiryFormSubmit").then(e=>{d(e)})},[h]),d=n=>{fetch("https://shopcar-hotsites.vercel.app/api/enquiry",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,message:r,gRecaptchaToken:n})}).then(e=>e.json()).then(e=>{null==e||e.status,m(null==e?void 0:e.message)})};return(0,a.jsx)("div",{className:i().container,children:(0,a.jsxs)("main",{className:i().main,children:[(0,a.jsx)("h2",{children:"Enquiry Form"}),(0,a.jsxs)("form",{onSubmit:p,children:[(0,a.jsx)("input",{type:"text",name:"name",value:e,onChange:e=>{var t;return n(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)},className:"form-control mb-3",placeholder:"Name"}),(0,a.jsx)("input",{type:"text",name:"email",value:t,onChange:e=>{var n;return s(null==e?void 0:null===(n=e.target)||void 0===n?void 0:n.value)},className:"form-control mb-3",placeholder:"Email"}),(0,a.jsx)("textarea",{rows:3,type:"text",name:"message",value:r,onChange:e=>{var n;return u(null==e?void 0:null===(n=e.target)||void 0===n?void 0:n.value)},className:"form-control mb-3",placeholder:"Message"}),(0,a.jsx)("button",{type:"submit",className:"btn btn-light",children:"Submit"}),c&&(0,a.jsx)("p",{children:c})]})]})})}},1502:function(){}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4114)}),_N_E=e.O()}]);