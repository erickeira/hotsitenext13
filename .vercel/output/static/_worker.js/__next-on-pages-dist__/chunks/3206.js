var c=(p,t,a)=>{"use strict";a.r(t),a.d(t,{config:()=>o,default:()=>n});let o={runtime:"edge"};async function n(s,u){let r="";try{let e=await s.text();e=JSON.parse(e),r=e==="Aluguel de Temporada"||e==="Aluguel/Temporada"?3:e?parseInt(e)?e:e.toLowerCase()=="venda"?2:1:"";let i=JSON.stringify({acoes:[{metodo:"valores",params:[{finalidade:r}]}],id:"328"}),d=await fetch("https://dev.infoimoveis.com.br/webservice/hotsites.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i}),l=await d.json();return new Response(JSON.stringify(l))}catch{return new Response(JSON.stringify({erro:" erro na requisi\xE7ao"}))}}};export{c as default};
