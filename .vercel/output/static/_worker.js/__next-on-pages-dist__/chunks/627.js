var k=(z,m,o)=>{"use strict";o.d(m,{JV:()=>R,vG:()=>h});var g=o(872),c=o(310),d=o(5861);function f(t){let e=t.startsWith("[")&&t.endsWith("]");e&&(t=t.slice(1,-1));let r=t.startsWith("...");return r&&(t=t.slice(3)),{key:t,repeat:r,optional:e}}function $(t){let e=(0,d.Q)(t).slice(1).split("/"),r={},a=1;return{parameterizedRoute:e.map(n=>{if(!(n.startsWith("[")&&n.endsWith("]")))return`/${(0,c.f)(n)}`;{let{key:s,optional:l,repeat:u}=f(n.slice(1,-1));return r[s]={pos:a++,repeat:u,optional:l},u?l?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function h(t){let{parameterizedRoute:e,groups:r}=$(t);return{re:RegExp(`^${e}(?:/)?$`),groups:r}}function W(){let t=97,e=1;return()=>{let r="";for(let a=0;a<e;a++)r+=String.fromCharCode(t),++t>122&&(e++,t=97);return r}}function y(t){let e=(0,d.Q)(t).slice(1).split("/"),r=W(),a={};return{namedParameterizedRoute:e.map(n=>{if(!(n.startsWith("[")&&n.endsWith("]")))return`/${(0,c.f)(n)}`;{let{key:s,optional:l,repeat:u}=f(n.slice(1,-1)),i=s.replace(/\W/g,""),p=!1;return(i.length===0||i.length>30)&&(p=!0),isNaN(parseInt(i.slice(0,1)))||(p=!0),p&&(i=r()),a[i]=s,u?l?`(?:/(?<${i}>.+?))?`:`/(?<${i}>.+?)`:`/(?<${i}>[^/]+?)`}}).join(""),routeKeys:a}}function R(t){let e=y(t);return(0,g.Z)({},h(t),{namedRegex:`^${e.namedParameterizedRoute}(?:/)?$`,routeKeys:e.routeKeys})}};export{k as default};
