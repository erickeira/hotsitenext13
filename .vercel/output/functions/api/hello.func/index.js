
  
  let _ENTRIES = {};
/**/;/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			993: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;
//# sourceMappingURL=edge-runtime-webpack.js.map
/**/;(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{9908:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});class s extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class n extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class o extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}function i(e){let t=new Headers;for(let[r,s]of Object.entries(e)){let e=Array.isArray(s)?s:[s];for(let s of e)void 0!==s&&t.append(r,s)}return t}function a(e){var t,r,s,n,o,i=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,o=!1;l();)if(","===(r=e.charAt(a))){for(s=a,a+=1,l(),n=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=n,i.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!o||a>=e.length)&&i.push(e.substring(t,e.length))}return i}function l(e){let t={};if(e)for(let[r,s]of e.entries())t[r]=s,"set-cookie"===r.toLowerCase()&&(t[r]=a(s));return t}function h(e){try{return String(new URL(String(e)))}catch(t){throw Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t})}}let u=Symbol("response"),d=Symbol("passThrough"),c=Symbol("waitUntil");class p{[c]=[];[d]=!1;constructor(e){}respondWith(e){this[u]||(this[u]=Promise.resolve(e))}passThroughOnException(){this[d]=!0}waitUntil(e){this[c].push(e)}}class f extends p{constructor(e){super(e.request),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}}function g(e,t,r){let s;if(e)for(let i of(r&&(r=r.toLowerCase()),e)){var n,o;let e=null==(n=i.domain)?void 0:n.split(":")[0].toLowerCase();if(t===e||r===i.defaultLocale.toLowerCase()||(null==(o=i.locales)?void 0:o.some(e=>e.toLowerCase()===r))){s=i;break}}return s}function m(e){return e.replace(/\/$/,"")||"/"}function w(e){let t=e.indexOf("#"),r=e.indexOf("?"),s=r>-1&&(t<0||r<t);return s||t>-1?{pathname:e.substring(0,s?r:t),query:s?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}function x(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:n}=w(e);return`${t}${r}${s}${n}`}function b(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:n}=w(e);return`${r}${t}${s}${n}`}function y(e,t){if("string"!=typeof e)return!1;let{pathname:r}=w(e);return r===t||r.startsWith(t+"/")}function v(e,t,r,s){return t&&t!==r&&(s||!y(e.toLowerCase(),`/${t.toLowerCase()}`)&&!y(e.toLowerCase(),"/api"))?x(e,`/${t}`):e}function S(e){let t=v(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=m(t)),e.buildId&&(t=b(x(t,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),t=x(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:b(t,"/"):m(t)}function _(e,t){var r;return null==(r=!Array.isArray(null==t?void 0:t.host)&&(null==t?void 0:t.host)||e.hostname)?void 0:r.split(":")[0].toLowerCase()}function L(e,t){let r;let s=e.split("/");return(t||[]).some(t=>!!s[1]&&s[1].toLowerCase()===t.toLowerCase()&&(r=t,s.splice(1,1),e=s.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}function C(e,t){if(y(e,t)){let r=e.slice(t.length);return r.startsWith("/")?r:`/${r}`}return e}function $(e,t){var r;let{basePath:s,i18n:n,trailingSlash:o}=null!=(r=t.nextConfig)?r:{},i={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):o};if(s&&y(i.pathname,s)&&(i.pathname=C(i.pathname,s),i.basePath=s),!0===t.parseData&&i.pathname.startsWith("/_next/data/")&&i.pathname.endsWith(".json")){let e=i.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),t=e[0];i.pathname="index"!==e[1]?`/${e.slice(1).join("/")}`:"/",i.buildId=t}if(n){let e=L(i.pathname,n.locales);i.locale=null==e?void 0:e.detectedLocale,i.pathname=(null==e?void 0:e.pathname)||i.pathname}return i}let P=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;function R(e,t){return new URL(String(e).replace(P,"localhost"),t&&String(t).replace(P,"localhost"))}let j=Symbol("NextURLInternal");class E{constructor(e,t,r){let s,n;"object"==typeof t&&"pathname"in t||"string"==typeof t?(s=t,n=r||{}):n=r||t||{},this[j]={url:R(e,s??n.base),options:n,basePath:""},this.analyzeUrl()}analyzeUrl(){var e,t,r,s,n;let o=$(this[j].url.pathname,{nextConfig:this[j].options.nextConfig,parseData:!0});this[j].domainLocale=g(null==(e=this[j].options.nextConfig)?void 0:null==(t=e.i18n)?void 0:t.domains,_(this[j].url,this[j].options.headers));let i=(null==(r=this[j].domainLocale)?void 0:r.defaultLocale)||(null==(s=this[j].options.nextConfig)?void 0:null==(n=s.i18n)?void 0:n.defaultLocale);this[j].url.pathname=o.pathname,this[j].defaultLocale=i,this[j].basePath=o.basePath??"",this[j].buildId=o.buildId,this[j].locale=o.locale??i,this[j].trailingSlash=o.trailingSlash}formatPathname(){return S({basePath:this[j].basePath,buildId:this[j].buildId,defaultLocale:this[j].options.forceLocale?void 0:this[j].defaultLocale,locale:this[j].locale,pathname:this[j].url.pathname,trailingSlash:this[j].trailingSlash})}formatSearch(){return this[j].url.search}get buildId(){return this[j].buildId}set buildId(e){this[j].buildId=e}get locale(){return this[j].locale??""}set locale(e){var t,r;if(!this[j].locale||!(null==(t=this[j].options.nextConfig)?void 0:null==(r=t.i18n)?void 0:r.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[j].locale=e}get defaultLocale(){return this[j].defaultLocale}get domainLocale(){return this[j].domainLocale}get searchParams(){return this[j].url.searchParams}get host(){return this[j].url.host}set host(e){this[j].url.host=e}get hostname(){return this[j].url.hostname}set hostname(e){this[j].url.hostname=e}get port(){return this[j].url.port}set port(e){this[j].url.port=e}get protocol(){return this[j].url.protocol}set protocol(e){this[j].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[j].url=R(e),this.analyzeUrl()}get origin(){return this[j].url.origin}get pathname(){return this[j].url.pathname}set pathname(e){this[j].url.pathname=e}get hash(){return this[j].url.hash}set hash(e){this[j].url.hash=e}get search(){return this[j].url.search}set search(e){this[j].url.search=e}get password(){return this[j].url.password}set password(e){this[j].url.password=e}get username(){return this[j].url.username}set username(e){this[j].url.username=e}get basePath(){return this[j].basePath}set basePath(e){this[j].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new E(String(this),this[j].options)}}var q=r(5768);let I=Symbol("internal request");class k extends Request{constructor(e,t={}){let r="string"!=typeof e&&"url"in e?e.url:String(e);h(r),super(r,t),this[I]={cookies:new q.RequestCookies(this.headers),geo:t.geo||{},ip:t.ip,url:new E(r,{headers:l(this.headers),nextConfig:t.nextConfig})}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[I].cookies}get geo(){return this[I].geo}get ip(){return this[I].ip}get nextUrl(){return this[I].url}get page(){throw new n}get ua(){throw new o}get url(){return this[I].url.toString()}}let A=Symbol("internal response"),U=new Set([301,302,303,307,308]);function O(e,t){var r;if(null==e?void 0:null==(r=e.request)?void 0:r.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let r=[];for(let[s,n]of e.request.headers)t.set("x-middleware-request-"+s,n),r.push(s);t.set("x-middleware-override-headers",r.join(","))}}class T extends Response{constructor(e,t={}){super(e,t),this[A]={cookies:new q.ResponseCookies(this.headers),url:t.url?new E(t.url,{headers:l(this.headers),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[A].cookies}static json(e,t){let r=Response.json(e,t);return new T(r.body,r)}static redirect(e,t){let r="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!U.has(r))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let s="object"==typeof t?t:{},n=new Headers(null==s?void 0:s.headers);return n.set("Location",h(e)),new T(null,{...s,headers:n,status:r})}static rewrite(e,t){let r=new Headers(null==t?void 0:t.headers);return r.set("x-middleware-rewrite",h(e)),O(t,r),new T(null,{...t,headers:r})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),O(e,t),new T(null,{...e,headers:t})}}function N(e,t){let r="string"==typeof t?new URL(t):t,s=new URL(e,t),n=`${r.protocol}//${r.host}`;return`${s.protocol}//${s.host}`===n?s.toString().replace(n,""):s.toString()}let D=["__nextFallback","__nextLocale","__nextDefaultLocale","__nextIsNotFound"],W=["__nextDataReq"];function M(e,t){for(let t of D)e.delete(t);if(t)for(let t of W)e.delete(t);return e}function H(e,t){return t?e.replace(/\.rsc($|\?)/,"$1"):e}class z extends k{constructor(e){super(e.input,e.init),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}waitUntil(){throw new s({page:this.sourcePage})}}let F=[["RSC"],["Next-Router-State-Tree"],["Next-Router-Prefetch"],["x-vercel-sc-headers"]];async function J(e){let t=void 0!==self.__BUILD_MANIFEST;e.request.url=H(e.request.url,!0);let r=new E(e.request.url,{headers:e.request.headers,nextConfig:e.request.nextConfig}),s=r.buildId;r.buildId="";let n=e.request.headers["x-nextjs-data"];n&&"/index"===r.pathname&&(r.pathname="/");let o=i(e.request.headers),a=new Map;if(!t)for(let e of F){let t=e.toString().toLowerCase(),r=o.get(t);r&&(a.set(t,o.get(t)),o.delete(t))}M(r.searchParams,!0);let l=new z({page:e.page,input:String(r),init:{body:e.request.body,geo:e.request.geo,headers:o,ip:e.request.ip,method:e.request.method,nextConfig:e.request.nextConfig}});n&&Object.defineProperty(l,"__isData",{enumerable:!1,value:!0});let h=new f({request:l,page:e.page}),u=await e.handler(l,h);if(u&&!(u instanceof Response))throw TypeError("Expected an instance of Response to be returned");let d=null==u?void 0:u.headers.get("x-middleware-rewrite");if(u&&d){let t=new E(d,{forceLocale:!0,headers:e.request.headers,nextConfig:e.request.nextConfig});t.host===l.nextUrl.host&&(t.buildId=s||t.buildId,u.headers.set("x-middleware-rewrite",String(t)));let o=N(String(t),String(r));n&&u.headers.set("x-nextjs-rewrite",o)}let p=null==u?void 0:u.headers.get("Location");if(u&&p){let t=new E(p,{forceLocale:!1,headers:e.request.headers,nextConfig:e.request.nextConfig});u=new Response(u.body,u),t.host===l.nextUrl.host&&(t.buildId=s||t.buildId,u.headers.set("Location",String(t))),n&&(u.headers.delete("Location"),u.headers.set("x-nextjs-redirect",N(String(t),String(r))))}let g=u||T.next(),m=g.headers.get("x-middleware-override-headers"),w=[];if(m){for(let[e,t]of a)g.headers.set(`x-middleware-request-${e}`,t),w.push(e);w.length>0&&g.headers.set("x-middleware-override-headers",m+","+w.join(","))}return{response:g,waitUntil:Promise.all(h[c])}}function B(e){return`The edge runtime does not support Node.js '${e}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`}function G(e){let t=new Proxy(function(){},{get(t,r){if("then"===r)return{};throw Error(B(e))},construct(){throw Error(B(e))},apply(r,s,n){if("function"==typeof n[0])return n[0](t);throw Error(B(e))}});return new Proxy({},{get:()=>t})}!function(){if(process!==r.g.process&&(process.env=r.g.process.env,r.g.process=process),Object.defineProperty(globalThis,"__import_unsupported",{value:G,enumerable:!1,configurable:!1}),"_ENTRIES"in globalThis&&_ENTRIES.middleware_instrumentation&&_ENTRIES.middleware_instrumentation.register)try{_ENTRIES.middleware_instrumentation.register()}catch(e){throw e.message=`An error occurred while loading instrumentation hook: ${e.message}`,e}}();var K=r(9830),Q=K.middleware||K.default;if("function"!=typeof Q)throw Error('The Edge Function "pages/api/hello" must export a `default` function');function V(e){return J({...e,page:"/api/hello",handler:Q})}},9830:(e,t,r)=>{"use strict";function s(e,t){t.status(200).json({name:"John Doe"})}r.r(t),r.d(t,{default:()=>s})},5768:e=>{"use strict";var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,o=(e,o,i,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let l of s(o))n.call(e,l)||l===i||t(e,l,{get:()=>o[l],enumerable:!(a=r(o,l))||a.enumerable});return e},i=e=>o(t({},"__esModule",{value:!0}),e),a={};function l(e){let t=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&e.expires&&`Expires=${e.expires.toUTCString()}`,"maxAge"in e&&e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`].filter(Boolean);return`${e.name}=${encodeURIComponent(e.value??"")}; ${t.join("; ")}`}function h(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("="),[s,n]=[r.slice(0,e),r.slice(e+1)];try{t.set(s,decodeURIComponent(n??"true"))}catch{}}return t}function u(e){if(!e)return;let[[t,r],...s]=h(e),{domain:n,expires:o,httponly:i,maxage:a,path:l,samesite:u,secure:c}=Object.fromEntries(s.map(([e,t])=>[e.toLowerCase(),t])),f={name:t,value:decodeURIComponent(r),domain:n,...o&&{expires:new Date(o)},...i&&{httpOnly:!0},..."string"==typeof a&&{maxAge:Number(a)},path:l,...u&&{sameSite:p(u)},...c&&{secure:!0}};return d(f)}function d(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}((e,r)=>{for(var s in r)t(e,s,{get:r[s],enumerable:!0})})(a,{RequestCookies:()=>f,ResponseCookies:()=>g}),e.exports=i(a);var c=["strict","lax","none"];function p(e){return e=e.toLowerCase(),c.includes(e)?e:void 0}var f=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t){let e=h(t);for(let[t,r]of e)this._parsed.set(t,{name:t,value:r})}}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===s).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,s=this._parsed;return s.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(s).map(([e,t])=>l(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>l(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},g=class{constructor(e){var t;this._parsed=new Map,this._headers=e;let r=(null==(t=e.getAll)?void 0:t.call(e,"set-cookie"))??e.get("set-cookie")??[],s=Array.isArray(r)?r:x(r);for(let e of s){let t=u(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===s)}set(...e){let[t,r,s]=1===e.length?[e[0].name,e[0].value,e[0]]:e,n=this._parsed;return n.set(t,w({name:t,value:r,...s})),m(n,this._headers),this}delete(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this.set({name:t,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(l).join("; ")}};function m(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=l(r);t.append("set-cookie",e)}}function w(e={name:"",value:""}){return e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}function x(e){if(!e)return[];var t,r,s,n,o,i=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,o=!1;l();)if(","===(r=e.charAt(a))){for(s=a,a+=1,l(),n=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=n,i.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!o||a>=e.length)&&i.push(e.substring(t,e.length))}return i}}},e=>{var t=e(e.s=9908);(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_pages/api/hello"]=t}]);
//# sourceMappingURL=hello.js.map;
  export default (function () {
    const module = { exports: {}, loaded: false };
    const fn = (function(module,exports) {var d=Object.defineProperty;var m=e=>d(e,"__esModule",{value:!0});var y=(e,r)=>{m(e);for(var t in r)d(e,t,{get:r[t],enumerable:!0})};y(exports,{default:()=>x});function h(e){let r={};return e&&e.forEach((t,i)=>{r[i]=t,i.toLowerCase()==="set-cookie"&&(r[i]=C(t))}),r}function C(e){let r=[],t=0,i,a,p,n,s;function c(){for(;t<e.length&&/\s/.test(e.charAt(t));)t+=1;return t<e.length}function o(){return a=e.charAt(t),a!=="="&&a!==";"&&a!==","}for(;t<e.length;){for(i=t,s=!1;c();)if(a=e.charAt(t),a===","){for(p=t,t+=1,c(),n=t;t<e.length&&o();)t+=1;t<e.length&&e.charAt(t)==="="?(s=!0,t=n,r.push(e.substring(i,p)),i=t):t=p+1}else t+=1;(!s||t>=e.length)&&r.push(e.substring(i,e.length))}return r}function x(e){let r=e.staticRoutes.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page})),t=e.dynamicRoutes?.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page}))||[];return async function(a,p){let n=new URL(a.url).pathname,s={};if(e.nextConfig?.basePath&&n.startsWith(e.nextConfig.basePath)&&(n=n.replace(e.nextConfig.basePath,"")||"/"),e.nextConfig?.i18n)for(let o of e.nextConfig.i18n.locales){let g=new RegExp(`^/${o}($|/)`,"i");if(n.match(g)){n=n.replace(g,"/")||"/";break}}for(let o of r)if(o.regexp.exec(n)){s.name=o.page;break}if(!s.name){let o=R(n);for(let g of t||[]){if(o&&!R(g.page))continue;let f=g.regexp.exec(n);if(f){s={name:g.page,params:f.groups};break}}}let c=await _ENTRIES[`middleware_${e.name}`].default.call({},{request:{url:a.url,method:a.method,headers:h(a.headers),ip:u(a.headers,l.Ip),geo:{city:u(a.headers,l.City,!0),country:u(a.headers,l.Country,!0),latitude:u(a.headers,l.Latitude),longitude:u(a.headers,l.Longitude),region:u(a.headers,l.Region,!0)},nextConfig:e.nextConfig,page:s,body:a.body}});return p.waitUntil(c.waitUntil),c.response}}function u(e,r,t=!1){let i=e.get(r)||void 0;return t&&i?decodeURIComponent(i):i}function R(e){return e==="/api"||e.startsWith("/api/")}var l;(function(n){n.City="x-vercel-ip-city",n.Country="x-vercel-ip-country",n.Ip="x-real-ip",n.Latitude="x-vercel-ip-latitude",n.Longitude="x-vercel-ip-longitude",n.Region="x-vercel-ip-country-region"})(l||(l={}));

});
    fn(module, module.exports);
    return module.exports;
  }).call({}).default(
    {"name":"pages/api/hello","staticRoutes":[{"page":"/","regex":"^/(?:/)?$","routeKeys":{},"namedRegex":"^/(?:/)?$"},{"page":"/teste1","regex":"^/teste1(?:/)?$","routeKeys":{},"namedRegex":"^/teste1(?:/)?$"},{"page":"/teste2","regex":"^/teste2(?:/)?$","routeKeys":{},"namedRegex":"^/teste2(?:/)?$"},{"page":"/teste3","regex":"^/teste3(?:/)?$","routeKeys":{},"namedRegex":"^/teste3(?:/)?$"}],"dynamicRoutes":[],"nextConfig":{"basePath":""}}
  )