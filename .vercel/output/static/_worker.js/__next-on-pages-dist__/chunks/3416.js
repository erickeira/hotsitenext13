var pe=(de,D,m)=>{"use strict";m.d(D,{V:()=>le,g:()=>ue});class w extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class H extends Error{constructor(){super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ")}}class F extends Error{constructor(){super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ")}}function z(t){let e=new Headers;for(let[r,s]of Object.entries(t)){let o=Array.isArray(s)?s:[s];for(let l of o)l!==void 0&&e.append(r,l)}return e}function M(t){var e,r,s,o,l,a=[],i=0;function d(){for(;i<t.length&&/\s/.test(t.charAt(i));)i+=1;return i<t.length}for(;i<t.length;){for(e=i,l=!1;d();)if((r=t.charAt(i))===","){for(s=i,i+=1,d(),o=i;i<t.length&&(r=t.charAt(i))!=="="&&r!==";"&&r!==",";)i+=1;i<t.length&&t.charAt(i)==="="?(l=!0,i=o,a.push(t.substring(e,s)),e=i):i=s+1}else i+=1;(!l||i>=t.length)&&a.push(t.substring(e,t.length))}return a}function C(t){let e={};if(t)for(let[r,s]of t.entries())e[r]=s,r.toLowerCase()==="set-cookie"&&(e[r]=M(s));return e}function y(t){try{return String(new URL(String(t)))}catch(e){throw Error(`URL is malformed "${String(t)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:e})}}let $=Symbol("response"),I=Symbol("passThrough"),v=Symbol("waitUntil");class B{[v]=[];[I]=!1;constructor(e){}respondWith(e){this[$]||(this[$]=Promise.resolve(e))}passThroughOnException(){this[I]=!0}waitUntil(e){this[v].push(e)}}class J extends B{constructor(e){super(e.request),this.sourcePage=e.page}get request(){throw new w({page:this.sourcePage})}respondWith(){throw new w({page:this.sourcePage})}}function V(t,e,r){let s;if(t)for(let a of(r&&(r=r.toLowerCase()),t)){var o,l;let i=(o=a.domain)==null?void 0:o.split(":")[0].toLowerCase();if(e===i||r===a.defaultLocale.toLowerCase()||((l=a.locales)==null?void 0:l.some(d=>d.toLowerCase()===r))){s=a;break}}return s}function R(t){return t.replace(/\/$/,"")||"/"}function L(t){let e=t.indexOf("#"),r=t.indexOf("?"),s=r>-1&&(e<0||r<e);return s||e>-1?{pathname:t.substring(0,s?r:e),query:s?t.substring(r,e>-1?e:void 0):"",hash:e>-1?t.slice(e):""}:{pathname:t,query:"",hash:""}}function S(t,e){if(!t.startsWith("/")||!e)return t;let{pathname:r,query:s,hash:o}=L(t);return`${e}${r}${s}${o}`}function j(t,e){if(!t.startsWith("/")||!e)return t;let{pathname:r,query:s,hash:o}=L(t);return`${r}${e}${s}${o}`}function x(t,e){if(typeof t!="string")return!1;let{pathname:r}=L(t);return r===e||r.startsWith(e+"/")}function G(t,e,r,s){return e&&e!==r&&(s||!x(t.toLowerCase(),`/${e.toLowerCase()}`)&&!x(t.toLowerCase(),"/api"))?S(t,`/${e}`):t}function K(t){let e=G(t.pathname,t.locale,t.buildId?void 0:t.defaultLocale,t.ignorePrefix);return(t.buildId||!t.trailingSlash)&&(e=R(e)),t.buildId&&(e=j(S(e,`/_next/data/${t.buildId}`),t.pathname==="/"?"index.json":".json")),e=S(e,t.basePath),!t.buildId&&t.trailingSlash?e.endsWith("/")?e:j(e,"/"):R(e)}function Q(t,e){var r;return(r=!Array.isArray(e?.host)&&e?.host||t.hostname)==null?void 0:r.split(":")[0].toLowerCase()}function X(t,e){let r,s=t.split("/");return(e||[]).some(o=>!!s[1]&&s[1].toLowerCase()===o.toLowerCase()&&(r=o,s.splice(1,1),t=s.join("/")||"/",!0)),{pathname:t,detectedLocale:r}}function Y(t,e){if(x(t,e)){let r=t.slice(e.length);return r.startsWith("/")?r:`/${r}`}return t}function Z(t,e){var r;let{basePath:s,i18n:o,trailingSlash:l}=(r=e.nextConfig)!=null?r:{},a={pathname:t,trailingSlash:t!=="/"?t.endsWith("/"):l};if(s&&x(a.pathname,s)&&(a.pathname=Y(a.pathname,s),a.basePath=s),e.parseData===!0&&a.pathname.startsWith("/_next/data/")&&a.pathname.endsWith(".json")){let i=a.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),d=i[0];a.pathname=i[1]!=="index"?`/${i.slice(1).join("/")}`:"/",a.buildId=d}if(o){let i=X(a.pathname,o.locales);a.locale=i?.detectedLocale,a.pathname=i?.pathname||a.pathname}return a}let U=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;function E(t,e){return new URL(String(t).replace(U,"localhost"),e&&String(e).replace(U,"localhost"))}let n=Symbol("NextURLInternal");class p{constructor(e,r,s){let o,l;typeof r=="object"&&"pathname"in r||typeof r=="string"?(o=r,l=s||{}):l=s||r||{},this[n]={url:E(e,o??l.base),options:l,basePath:""},this.analyzeUrl()}analyzeUrl(){var e,r,s,o,l;let a=Z(this[n].url.pathname,{nextConfig:this[n].options.nextConfig,parseData:!0});this[n].domainLocale=V((e=this[n].options.nextConfig)==null||(r=e.i18n)==null?void 0:r.domains,Q(this[n].url,this[n].options.headers));let i=((s=this[n].domainLocale)==null?void 0:s.defaultLocale)||((o=this[n].options.nextConfig)==null||(l=o.i18n)==null?void 0:l.defaultLocale);this[n].url.pathname=a.pathname,this[n].defaultLocale=i,this[n].basePath=a.basePath??"",this[n].buildId=a.buildId,this[n].locale=a.locale??i,this[n].trailingSlash=a.trailingSlash}formatPathname(){return K({basePath:this[n].basePath,buildId:this[n].buildId,defaultLocale:this[n].options.forceLocale?void 0:this[n].defaultLocale,locale:this[n].locale,pathname:this[n].url.pathname,trailingSlash:this[n].trailingSlash})}formatSearch(){return this[n].url.search}get buildId(){return this[n].buildId}set buildId(e){this[n].buildId=e}get locale(){return this[n].locale??""}set locale(e){var r,s;if(!this[n].locale||!(!((r=this[n].options.nextConfig)==null||(s=r.i18n)==null)&&s.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[n].locale=e}get defaultLocale(){return this[n].defaultLocale}get domainLocale(){return this[n].domainLocale}get searchParams(){return this[n].url.searchParams}get host(){return this[n].url.host}set host(e){this[n].url.host=e}get hostname(){return this[n].url.hostname}set hostname(e){this[n].url.hostname=e}get port(){return this[n].url.port}set port(e){this[n].url.port=e}get protocol(){return this[n].url.protocol}set protocol(e){this[n].url.protocol=e}get href(){let e=this.formatPathname(),r=this.formatSearch();return`${this.protocol}//${this.host}${e}${r}${this.hash}`}set href(e){this[n].url=E(e),this.analyzeUrl()}get origin(){return this[n].url.origin}get pathname(){return this[n].url.pathname}set pathname(e){this[n].url.pathname=e}get hash(){return this[n].url.hash}set hash(e){this[n].url.hash=e}get search(){return this[n].url.search}set search(e){this[n].url.search=e}get password(){return this[n].url.password}set password(e){this[n].url.password=e}get username(){return this[n].url.username}set username(e){this[n].url.username=e}get basePath(){return this[n].basePath}set basePath(e){this[n].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new p(String(this),this[n].options)}}var _=m(5768);let g=Symbol("internal request");class ee extends Request{constructor(e,r={}){let s=typeof e!="string"&&"url"in e?e.url:String(e);y(s),super(s,r),this[g]={cookies:new _.RequestCookies(this.headers),geo:r.geo||{},ip:r.ip,url:new p(s,{headers:C(this.headers),nextConfig:r.nextConfig})}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[g].cookies}get geo(){return this[g].geo}get ip(){return this[g].ip}get nextUrl(){return this[g].url}get page(){throw new H}get ua(){throw new F}get url(){return this[g].url.toString()}}let k=Symbol("internal response"),te=new Set([301,302,303,307,308]);function T(t,e){var r;if(!(t==null||(r=t.request)==null)&&r.headers){if(!(t.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let s=[];for(let[o,l]of t.request.headers)e.set("x-middleware-request-"+o,l),s.push(o);e.set("x-middleware-override-headers",s.join(","))}}class f extends Response{constructor(e,r={}){super(e,r),this[k]={cookies:new _.ResponseCookies(this.headers),url:r.url?new p(r.url,{headers:C(this.headers),nextConfig:r.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[k].cookies}static json(e,r){let s=Response.json(e,r);return new f(s.body,s)}static redirect(e,r){let s=typeof r=="number"?r:r?.status??307;if(!te.has(s))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let o=typeof r=="object"?r:{},l=new Headers(o?.headers);return l.set("Location",y(e)),new f(null,{...o,headers:l,status:s})}static rewrite(e,r){let s=new Headers(r?.headers);return s.set("x-middleware-rewrite",y(e)),T(r,s),new f(null,{...r,headers:s})}static next(e){let r=new Headers(e?.headers);return r.set("x-middleware-next","1"),T(e,r),new f(null,{...e,headers:r})}}function N(t,e){let r=typeof e=="string"?new URL(e):e,s=new URL(t,e),o=`${r.protocol}//${r.host}`;return`${s.protocol}//${s.host}`===o?s.toString().replace(o,""):s.toString()}let re=["__nextFallback","__nextLocale","__nextDefaultLocale","__nextIsNotFound"],se=["__nextDataReq"];function ne(t,e){for(let r of re)t.delete(r);if(e)for(let r of se)t.delete(r);return t}function oe(t,e){return e?t.replace(/\.rsc($|\?)/,"$1"):t}class ie extends ee{constructor(e){super(e.input,e.init),this.sourcePage=e.page}get request(){throw new w({page:this.sourcePage})}respondWith(){throw new w({page:this.sourcePage})}waitUntil(){throw new w({page:this.sourcePage})}}let ae=[["RSC"],["Next-Router-State-Tree"],["Next-Router-Prefetch"],["x-vercel-sc-headers"]];async function le(t){let e=self.__BUILD_MANIFEST!==void 0;t.request.url=oe(t.request.url,!0);let r=new p(t.request.url,{headers:t.request.headers,nextConfig:t.request.nextConfig}),s=r.buildId;r.buildId="";let o=t.request.headers["x-nextjs-data"];o&&r.pathname==="/index"&&(r.pathname="/");let l=z(t.request.headers),a=new Map;if(!e)for(let u of ae){let c=u.toString().toLowerCase();l.get(c)&&(a.set(c,l.get(c)),l.delete(c))}ne(r.searchParams,!0);let i=new ie({page:t.page,input:String(r),init:{body:t.request.body,geo:t.request.geo,headers:l,ip:t.request.ip,method:t.request.method,nextConfig:t.request.nextConfig}});o&&Object.defineProperty(i,"__isData",{enumerable:!1,value:!0});let d=new J({request:i,page:t.page}),h=await t.handler(i,d);if(h&&!(h instanceof Response))throw TypeError("Expected an instance of Response to be returned");let A=h?.headers.get("x-middleware-rewrite");if(h&&A){let u=new p(A,{forceLocale:!0,headers:t.request.headers,nextConfig:t.request.nextConfig});u.host===i.nextUrl.host&&(u.buildId=s||u.buildId,h.headers.set("x-middleware-rewrite",String(u)));let c=N(String(u),String(r));o&&h.headers.set("x-nextjs-rewrite",c)}let W=h?.headers.get("Location");if(h&&W){let u=new p(W,{forceLocale:!1,headers:t.request.headers,nextConfig:t.request.nextConfig});h=new Response(h.body,h),u.host===i.nextUrl.host&&(u.buildId=s||u.buildId,h.headers.set("Location",String(u))),o&&(h.headers.delete("Location"),h.headers.set("x-nextjs-redirect",N(String(u),String(r))))}let b=h||f.next(),O=b.headers.get("x-middleware-override-headers"),q=[];if(O){for(let[u,c]of a)b.headers.set(`x-middleware-request-${u}`,c),q.push(u);q.length>0&&b.headers.set("x-middleware-override-headers",O+","+q.join(","))}return{response:b,waitUntil:Promise.all(d[v])}}function P(t){return`The edge runtime does not support Node.js '${t}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`}function he(t){let e=new Proxy(function(){},{get(r,s){if(s==="then")return{};throw Error(P(t))},construct(){throw Error(P(t))},apply(r,s,o){if(typeof o[0]=="function")return o[0](e);throw Error(P(t))}});return new Proxy({},{get:()=>e})}function ue(){if(process!==m.g.process&&(process.env=m.g.process.env,m.g.process=process),Object.defineProperty(globalThis,"__import_unsupported",{value:he,enumerable:!1,configurable:!0}),"_ENTRIES"in globalThis&&_ENTRIES.middleware_instrumentation&&_ENTRIES.middleware_instrumentation.register)try{_ENTRIES.middleware_instrumentation.register()}catch(t){throw t.message=`An error occurred while loading instrumentation hook: ${t.message}`,t}}};export{pe as default};