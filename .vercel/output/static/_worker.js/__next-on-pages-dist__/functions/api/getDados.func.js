import $ from"../../../__next-on-pages-dist__/chunks/4716.js";import C from"../../../__next-on-pages-dist__/chunks/665.js";import O from"../../../__next-on-pages-dist__/chunks/5768.js";import P from"../../../__next-on-pages-dist__/chunks/3416.js";var R={};(()=>{"use strict";var b={},v={};function i(t){var a=v[t];if(a!==void 0)return a.exports;var r=v[t]={exports:{}},u=!0;try{b[t].call(r.exports,r,r.exports,i),u=!1}finally{u&&delete v[t]}return r.exports}i.m=b,(()=>{var t=[];i.O=(a,r,u,l)=>{if(r){l=l||0;for(var f=t.length;f>0&&t[f-1][2]>l;f--)t[f]=t[f-1];t[f]=[r,u,l];return}for(var d=1/0,f=0;f<t.length;f++){for(var[r,u,l]=t[f],g=!0,h=0;h<r.length;h++)(l&!1||d>=l)&&Object.keys(i.O).every(x=>i.O[x](r[h]))?r.splice(h--,1):(g=!1,l<d&&(d=l));if(g){t.splice(f--,1);var s=u();s!==void 0&&(a=s)}}return a}})(),i.n=t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return i.d(a,{a}),a},(()=>{var t=Object.getPrototypeOf?r=>Object.getPrototypeOf(r):r=>r.__proto__,a;i.t=function(r,u){if(u&1&&(r=this(r)),u&8||typeof r=="object"&&r&&(u&4&&r.__esModule||u&16&&typeof r.then=="function"))return r;var l=Object.create(null);i.r(l);var f={};a=a||[null,t({}),t([]),t(t)];for(var d=u&2&&r;typeof d=="object"&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach(g=>f[g]=()=>r[g]);return f.default=()=>r,i.d(l,f),l}})(),i.d=(t,a)=>{for(var r in a)i.o(a,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),i.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={993:0};i.O.j=u=>t[u]===0;var a=(u,l)=>{var[f,d,g]=l,h,s,e=0;if(f.some(n=>t[n]!==0)){for(h in d)i.o(d,h)&&(i.m[h]=d[h]);if(g)var c=g(i)}for(u&&u(l);e<f.length;e++)s=f[e],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(c)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})()})();(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{4716:$,665:C,5768:O,3416:P},b=>{var v=b(b.s=4716);(R=typeof R>"u"?{}:R)["middleware_pages/api/getDados"]=v}]);var L=function(){let b={exports:{},loaded:!1};return function(i,t){var a=Object.defineProperty,r=e=>a(e,"__esModule",{value:!0}),u=(e,c)=>{r(e);for(var n in c)a(e,n,{get:c[n],enumerable:!0})};u(t,{default:()=>d});function l(e){let c={};return e&&e.forEach((n,o)=>{c[o]=n,o.toLowerCase()==="set-cookie"&&(c[o]=f(n))}),c}function f(e){let c=[],n=0,o,x,p,y,w;function _(){for(;n<e.length&&/\s/.test(e.charAt(n));)n+=1;return n<e.length}function m(){return x=e.charAt(n),x!=="="&&x!==";"&&x!==","}for(;n<e.length;){for(o=n,w=!1;_();)if(x=e.charAt(n),x===","){for(p=n,n+=1,_(),y=n;n<e.length&&m();)n+=1;n<e.length&&e.charAt(n)==="="?(w=!0,n=y,c.push(e.substring(o,p)),o=n):n=p+1}else n+=1;(!w||n>=e.length)&&c.push(e.substring(o,e.length))}return c}function d(e){let c=e.staticRoutes.map(o=>({regexp:new RegExp(o.namedRegex),page:o.page})),n=e.dynamicRoutes?.map(o=>({regexp:new RegExp(o.namedRegex),page:o.page}))||[];return async function(o,x){let p=new URL(o.url).pathname,y={};if(e.nextConfig?.basePath&&p.startsWith(e.nextConfig.basePath)&&(p=p.replace(e.nextConfig.basePath,"")||"/"),e.nextConfig?.i18n)for(let _ of e.nextConfig.i18n.locales){let m=new RegExp(`^/${_}($|/)`,"i");if(p.match(m)){p=p.replace(m,"/")||"/";break}}for(let _ of c)if(_.regexp.exec(p)){y.name=_.page;break}if(!y.name){let _=h(p);for(let m of n||[]){if(_&&!h(m.page))continue;let k=m.regexp.exec(p);if(k){y={name:m.page,params:k.groups};break}}}let w=await R[`middleware_${e.name}`].default.call({},{request:{url:o.url,method:o.method,headers:l(o.headers),ip:g(o.headers,s.Ip),geo:{city:g(o.headers,s.City,!0),country:g(o.headers,s.Country,!0),latitude:g(o.headers,s.Latitude),longitude:g(o.headers,s.Longitude),region:g(o.headers,s.Region,!0)},nextConfig:e.nextConfig,page:y,body:o.body}});return x.waitUntil(w.waitUntil),w.response}}function g(e,c,n=!1){let o=e.get(c)||void 0;return n&&o?decodeURIComponent(o):o}function h(e){return e==="/api"||e.startsWith("/api/")}var s;(function(e){e.City="x-vercel-ip-city",e.Country="x-vercel-ip-country",e.Ip="x-real-ip",e.Latitude="x-vercel-ip-latitude",e.Longitude="x-vercel-ip-longitude",e.Region="x-vercel-ip-country-region"})(s||(s={}))}(b,b.exports),b.exports}.call({}).default({name:"pages/api/getDados",staticRoutes:[{page:"/",regex:"^/(?:/)?$",routeKeys:{},namedRegex:"^/(?:/)?$"},{page:"/aluguel",regex:"^/aluguel(?:/)?$",routeKeys:{},namedRegex:"^/aluguel(?:/)?$"},{page:"/banco-de-pedidos",regex:"^/banco\\-de\\-pedidos(?:/)?$",routeKeys:{},namedRegex:"^/banco\\-de\\-pedidos(?:/)?$"},{page:"/busca",regex:"^/busca(?:/)?$",routeKeys:{},namedRegex:"^/busca(?:/)?$"},{page:"/fale-conosco",regex:"^/fale\\-conosco(?:/)?$",routeKeys:{},namedRegex:"^/fale\\-conosco(?:/)?$"},{page:"/temporada",regex:"^/temporada(?:/)?$",routeKeys:{},namedRegex:"^/temporada(?:/)?$"},{page:"/venda",regex:"^/venda(?:/)?$",routeKeys:{},namedRegex:"^/venda(?:/)?$"}],dynamicRoutes:[{page:"/imovel/[id]",regex:"^/imovel/([^/]+?)(?:/)?$",routeKeys:{id:"id"},namedRegex:"^/imovel/(?<id>[^/]+?)(?:/)?$"},{page:"/noticia/[id]",regex:"^/noticia/([^/]+?)(?:/)?$",routeKeys:{id:"id"},namedRegex:"^/noticia/(?<id>[^/]+?)(?:/)?$"}],nextConfig:{basePath:""}});export{L as default};
