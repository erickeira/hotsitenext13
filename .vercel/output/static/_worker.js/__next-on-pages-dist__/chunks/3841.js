var z=(D,j,a)=>{"use strict";a.d(j,{V:()=>W,g:()=>A});var h=a(4495),p=a(8839);let q=Symbol("response"),y=Symbol("passThrough"),m=Symbol("waitUntil");class C{[m]=[];[y]=!1;constructor(r){}respondWith(r){this[q]||(this[q]=Promise.resolve(r))}passThroughOnException(){this[y]=!0}waitUntil(r){this[m].push(r)}}class L extends C{constructor(r){super(r.request),this.sourcePage=r.page}get request(){throw new h.qJ({page:this.sourcePage})}respondWith(){throw new h.qJ({page:this.sourcePage})}}var U=a(725),g=a(4533),k=a(9380);let v=Symbol("internal response"),$=new Set([301,302,303,307,308]);function S(e,r){var t;if(!(e==null||(t=e.request)==null)&&t.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let s=[];for(let[o,d]of e.request.headers)r.set("x-middleware-request-"+o,d),s.push(o);r.set("x-middleware-override-headers",s.join(","))}}class l extends Response{constructor(r,t={}){super(r,t),this[v]={cookies:new k.ResponseCookies(this.headers),url:t.url?new g.c(t.url,{headers:(0,p.uf)(this.headers),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[v].cookies}static json(r,t){let s=Response.json(r,t);return new l(s.body,s)}static redirect(r,t){let s=typeof t=="number"?t:t?.status??307;if(!$.has(s))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let o=typeof t=="object"?t:{},d=new Headers(o?.headers);return d.set("Location",(0,p.r4)(r)),new l(null,{...o,headers:d,status:s})}static rewrite(r,t){let s=new Headers(t?.headers);return s.set("x-middleware-rewrite",(0,p.r4)(r)),S(t,s),new l(null,{...t,headers:s})}static next(r){let t=new Headers(r?.headers);return t.set("x-middleware-next","1"),S(r,t),new l(null,{...r,headers:t})}}function E(e,r){let t=typeof r=="string"?new URL(r):r,s=new URL(e,r),o=`${t.protocol}//${t.host}`;return`${s.protocol}//${s.host}`===o?s.toString().replace(o,""):s.toString()}var N=a(4127),H=a(7532),w=a(1238);class J extends U.I{constructor(r){super(r.input,r.init),this.sourcePage=r.page}get request(){throw new h.qJ({page:this.sourcePage})}respondWith(){throw new h.qJ({page:this.sourcePage})}waitUntil(){throw new h.qJ({page:this.sourcePage})}}let O=[[w.i4],[w.ph],[w.pz],[w.yR]];async function W(e){let r=self.__BUILD_MANIFEST!==void 0;e.request.url=(0,H.W)(e.request.url,!0);let t=new g.c(e.request.url,{headers:e.request.headers,nextConfig:e.request.nextConfig}),s=t.buildId;t.buildId="";let o=e.request.headers["x-nextjs-data"];o&&t.pathname==="/index"&&(t.pathname="/");let d=(0,p.w_)(e.request.headers),I=new Map;if(!r)for(let i of O){let u=i.toString().toLowerCase();d.get(u)&&(I.set(u,d.get(u)),d.delete(u))}(0,N.T)(t.searchParams,!0);let c=new J({page:e.page,input:String(t),init:{body:e.request.body,geo:e.request.geo,headers:d,ip:e.request.ip,method:e.request.method,nextConfig:e.request.nextConfig}});o&&Object.defineProperty(c,"__isData",{enumerable:!1,value:!0});let P=new L({request:c,page:e.page}),n=await e.handler(c,P);if(n&&!(n instanceof Response))throw TypeError("Expected an instance of Response to be returned");let R=n?.headers.get("x-middleware-rewrite");if(n&&R){let i=new g.c(R,{forceLocale:!0,headers:e.request.headers,nextConfig:e.request.nextConfig});i.host===c.nextUrl.host&&(i.buildId=s||i.buildId,n.headers.set("x-middleware-rewrite",String(i)));let u=E(String(i),String(t));o&&n.headers.set("x-nextjs-rewrite",u)}let T=n?.headers.get("Location");if(n&&T){let i=new g.c(T,{forceLocale:!1,headers:e.request.headers,nextConfig:e.request.nextConfig});n=new Response(n.body,n),i.host===c.nextUrl.host&&(i.buildId=s||i.buildId,n.headers.set("Location",String(i))),o&&(n.headers.delete("Location"),n.headers.set("x-nextjs-redirect",E(String(i),String(t))))}let f=n||l.next(),_=f.headers.get("x-middleware-override-headers"),b=[];if(_){for(let[i,u]of I)f.headers.set(`x-middleware-request-${i}`,u),b.push(i);b.length>0&&f.headers.set("x-middleware-override-headers",_+","+b.join(","))}return{response:f,waitUntil:Promise.all(P[m])}}function x(e){return`The edge runtime does not support Node.js '${e}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`}function M(e){let r=new Proxy(function(){},{get(t,s){if(s==="then")return{};throw Error(x(e))},construct(){throw Error(x(e))},apply(t,s,o){if(typeof o[0]=="function")return o[0](r);throw Error(x(e))}});return new Proxy({},{get:()=>r})}function A(){if(process!==a.g.process&&(process.env=a.g.process.env,a.g.process=process),Object.defineProperty(globalThis,"__import_unsupported",{value:M,enumerable:!1,configurable:!0}),"_ENTRIES"in globalThis&&_ENTRIES.middleware_instrumentation&&_ENTRIES.middleware_instrumentation.register)try{_ENTRIES.middleware_instrumentation.register()}catch(e){throw e.message=`An error occurred while loading instrumentation hook: ${e.message}`,e}}};export{z as default};