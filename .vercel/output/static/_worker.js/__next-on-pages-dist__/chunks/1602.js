var c=(f,a,i)=>{"use strict";i.r(a),i.d(a,{config:()=>d,default:()=>r});let d={runtime:"edge"};async function r(t,p){try{let e=await t.text();e=JSON.parse(e);let o={};o=e.finalidade=="Aluguel de Temporada"||e.finalidade=="Aluguel/Temporada"?{finalidade:3,tipo:e.tipo||"",uf:e.uf||"",cidade:e.cidade||"",bairro:e.bairro||"",valorde:e.valorde||"",valorate:e.valorate||"",pagina:e.pg||"",ordenacao:e.ordenacao||""}:{finalidade:e.finalidade?parseInt(e.finalidade)?e.finalidade:e.finalidade.toLowerCase()=="venda"?2:1:"",tipo:e.tipo||"",uf:e.uf||"",cidade:e.cidade||"",bairro:e.bairro||"",valorde:e.valorde||"",valorate:e.valorate||"",pagina:e.pg||"",ordenacao:e.ordenacao||""};let n=JSON.stringify({acoes:[{metodo:"busca",params:[{resultados:12,...o}]}],id:"328"}),l=await fetch("https://dev.infoimoveis.com.br/webservice/hotsites.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),s=await l.json();return new Response(JSON.stringify(s))}catch{return new Response(JSON.stringify({erro:" erro na requisi\xE7ao"}))}}};export{c as default};