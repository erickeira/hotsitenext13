
  
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
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/**/;(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{5755:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(9625);(0,s.g)();var n=r(7455),o=n.middleware||n.default;if("function"!=typeof o)throw Error('The Edge Function "pages/api/enquiry" must export a `default` function');function i(e){return(0,s.V)({...e,page:"/api/enquiry",handler:o})}},7455:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let s=(e,t)=>{if(t.setHeader("Access-Control-Allow-Origin","*"),"POST"===e.method)try{fetch("https://www.google.com/recaptcha/api/siteverify",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`secret=6Le-0JklAAAAAGkZkeACpvn-22R9kplIB2-LEnHt&response=${e.body.gRecaptchaToken}`}).then(e=>e.json()).then(e=>{e?.score>.5?t.status(200).json({status:"success",message:"Enquiry submitted successfully"}):t.status(200).json({status:"failure",message:"Google ReCaptcha Failure"})})}catch(r){t.status(405).json({status:"failure",message:"Error submitting the enquiry form"})}else t.status(405),t.end()},n=s},9625:(e,t,r)=>{"use strict";r.d(t,{V:()=>ee,g:()=>es});class s extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class n extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class o extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}function i(e){let t=new Headers;for(let[r,s]of Object.entries(e)){let n=Array.isArray(s)?s:[s];for(let o of n)void 0!==o&&t.append(r,o)}return t}function a(e){var t,r,s,n,o,i=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,o=!1;l();)if(","===(r=e.charAt(a))){for(s=a,a+=1,l(),n=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=n,i.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!o||a>=e.length)&&i.push(e.substring(t,e.length))}return i}function l(e){let t={};if(e)for(let[r,s]of e.entries())t[r]=s,"set-cookie"===r.toLowerCase()&&(t[r]=a(s));return t}function h(e){try{return String(new URL(String(e)))}catch(t){throw Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t})}}let u=Symbol("response"),d=Symbol("passThrough"),c=Symbol("waitUntil");class p{[c]=[];[d]=!1;constructor(e){}respondWith(e){this[u]||(this[u]=Promise.resolve(e))}passThroughOnException(){this[d]=!0}waitUntil(e){this[c].push(e)}}class f extends p{constructor(e){super(e.request),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}}function g(e,t,r){let s;if(e)for(let n of(r&&(r=r.toLowerCase()),e)){var o,i;let a=null==(o=n.domain)?void 0:o.split(":")[0].toLowerCase();if(t===a||r===n.defaultLocale.toLowerCase()||(null==(i=n.locales)?void 0:i.some(e=>e.toLowerCase()===r))){s=n;break}}return s}function m(e){return e.replace(/\/$/,"")||"/"}function w(e){let t=e.indexOf("#"),r=e.indexOf("?"),s=r>-1&&(t<0||r<t);return s||t>-1?{pathname:e.substring(0,s?r:t),query:s?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}function x(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:n}=w(e);return`${t}${r}${s}${n}`}function y(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:n}=w(e);return`${r}${t}${s}${n}`}function b(e,t){if("string"!=typeof e)return!1;let{pathname:r}=w(e);return r===t||r.startsWith(t+"/")}function v(e,t,r,s){return t&&t!==r&&(s||!b(e.toLowerCase(),`/${t.toLowerCase()}`)&&!b(e.toLowerCase(),"/api"))?x(e,`/${t}`):e}function S(e){let t=v(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=m(t)),e.buildId&&(t=y(x(t,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),t=x(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:y(t,"/"):m(t)}function _(e,t){var r;return null==(r=!Array.isArray(null==t?void 0:t.host)&&(null==t?void 0:t.host)||e.hostname)?void 0:r.split(":")[0].toLowerCase()}function L(e,t){let r;let s=e.split("/");return(t||[]).some(t=>!!s[1]&&s[1].toLowerCase()===t.toLowerCase()&&(r=t,s.splice(1,1),e=s.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}function C(e,t){if(b(e,t)){let r=e.slice(t.length);return r.startsWith("/")?r:`/${r}`}return e}function P(e,t){var r;let{basePath:s,i18n:n,trailingSlash:o}=null!=(r=t.nextConfig)?r:{},i={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):o};if(s&&b(i.pathname,s)&&(i.pathname=C(i.pathname,s),i.basePath=s),!0===t.parseData&&i.pathname.startsWith("/_next/data/")&&i.pathname.endsWith(".json")){let a=i.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),l=a[0];i.pathname="index"!==a[1]?`/${a.slice(1).join("/")}`:"/",i.buildId=l}if(n){let h=L(i.pathname,n.locales);i.locale=null==h?void 0:h.detectedLocale,i.pathname=(null==h?void 0:h.pathname)||i.pathname}return i}let $=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;function q(e,t){return new URL(String(e).replace($,"localhost"),t&&String(t).replace($,"localhost"))}let A=Symbol("NextURLInternal");class j{constructor(e,t,r){let s,n;"object"==typeof t&&"pathname"in t||"string"==typeof t?(s=t,n=r||{}):n=r||t||{},this[A]={url:q(e,s??n.base),options:n,basePath:""},this.analyzeUrl()}analyzeUrl(){var e,t,r,s,n;let o=P(this[A].url.pathname,{nextConfig:this[A].options.nextConfig,parseData:!0});this[A].domainLocale=g(null==(e=this[A].options.nextConfig)?void 0:null==(t=e.i18n)?void 0:t.domains,_(this[A].url,this[A].options.headers));let i=(null==(r=this[A].domainLocale)?void 0:r.defaultLocale)||(null==(s=this[A].options.nextConfig)?void 0:null==(n=s.i18n)?void 0:n.defaultLocale);this[A].url.pathname=o.pathname,this[A].defaultLocale=i,this[A].basePath=o.basePath??"",this[A].buildId=o.buildId,this[A].locale=o.locale??i,this[A].trailingSlash=o.trailingSlash}formatPathname(){return S({basePath:this[A].basePath,buildId:this[A].buildId,defaultLocale:this[A].options.forceLocale?void 0:this[A].defaultLocale,locale:this[A].locale,pathname:this[A].url.pathname,trailingSlash:this[A].trailingSlash})}formatSearch(){return this[A].url.search}get buildId(){return this[A].buildId}set buildId(e){this[A].buildId=e}get locale(){return this[A].locale??""}set locale(e){var t,r;if(!this[A].locale||!(null==(t=this[A].options.nextConfig)?void 0:null==(r=t.i18n)?void 0:r.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[A].locale=e}get defaultLocale(){return this[A].defaultLocale}get domainLocale(){return this[A].domainLocale}get searchParams(){return this[A].url.searchParams}get host(){return this[A].url.host}set host(e){this[A].url.host=e}get hostname(){return this[A].url.hostname}set hostname(e){this[A].url.hostname=e}get port(){return this[A].url.port}set port(e){this[A].url.port=e}get protocol(){return this[A].url.protocol}set protocol(e){this[A].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[A].url=q(e),this.analyzeUrl()}get origin(){return this[A].url.origin}get pathname(){return this[A].url.pathname}set pathname(e){this[A].url.pathname=e}get hash(){return this[A].url.hash}set hash(e){this[A].url.hash=e}get search(){return this[A].url.search}set search(e){this[A].url.search=e}get password(){return this[A].url.password}set password(e){this[A].url.password=e}get username(){return this[A].url.username}set username(e){this[A].url.username=e}get basePath(){return this[A].basePath}set basePath(e){this[A].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new j(String(this),this[A].options)}}let k=["strict","lax","none"];function R(e){return e=e.toLowerCase(),k.includes(e)?e:void 0}function E(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}function I(e){let t=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&e.expires&&`Expires=${e.expires.toUTCString()}`,"maxAge"in e&&e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`].filter(Boolean);return`${e.name}=${encodeURIComponent(e.value??"")}; ${t.join("; ")}`}function U(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let[s,n]=r.split("=",2);t.set(s,decodeURIComponent(n??"true"))}return t}function T(e){if(!e)return;let[[t,r],...s]=U(e),{domain:n,expires:o,httponly:i,maxage:a,path:l,samesite:h,secure:u}=Object.fromEntries(s.map(([e,t])=>[e.toLowerCase(),t])),d={name:t,value:decodeURIComponent(r),domain:n,...o&&{expires:new Date(o)},...i&&{httpOnly:!0},..."string"==typeof a&&{maxAge:Number(a)},path:l,...h&&{sameSite:R(h)},...u&&{secure:!0}};return E(d)}class O{_parsed=new Map;constructor(e){this._headers=e;let t=e.get("cookie");if(t){let r=U(t);for(let[s,n]of r)this._parsed.set(s,{name:s,value:n})}}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===s).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,s=this._parsed;return s.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(s).map(([e,t])=>I(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>I(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}}function N(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let s=I(r);t.append("set-cookie",s)}}function W(e={name:"",value:""}){return e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}class D{_parsed=new Map;constructor(e){this._headers=e;let t=this._headers.getAll("set-cookie");for(let r of t){let s=T(r);s&&this._parsed.set(s.name,s)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===s)}set(...e){let[t,r,s]=1===e.length?[e[0].name,e[0].value,e[0]]:e,n=this._parsed;return n.set(t,W({name:t,value:r,...s})),N(n,this._headers),this}delete(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this.set({name:t,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}}let H=Symbol("internal request");class F extends Request{constructor(e,t={}){let r="string"!=typeof e&&"url"in e?e.url:String(e);h(r),super(r,t),this[H]={cookies:new O(this.headers),geo:t.geo||{},ip:t.ip,url:new j(r,{headers:l(this.headers),nextConfig:t.nextConfig})}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[H].cookies}get geo(){return this[H].geo}get ip(){return this[H].ip}get nextUrl(){return this[H].url}get page(){throw new n}get ua(){throw new o}get url(){return this[H].url.toString()}}let M=Symbol("internal response"),z=new Set([301,302,303,307,308]);function J(e,t){var r;if(null==e?void 0:null==(r=e.request)?void 0:r.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let s=[];for(let[n,o]of e.request.headers)t.set("x-middleware-request-"+n,o),s.push(n);t.set("x-middleware-override-headers",s.join(","))}}class B extends Response{constructor(e,t={}){super(e,t),this[M]={cookies:new D(this.headers),url:t.url?new j(t.url,{headers:l(this.headers),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[M].cookies}static json(e,t){let r=Response.json(e,t);return new B(r.body,r)}static redirect(e,t){let r="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!z.has(r))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let s="object"==typeof t?t:{},n=new Headers(null==s?void 0:s.headers);return n.set("Location",h(e)),new B(null,{...s,headers:n,status:r})}static rewrite(e,t){let r=new Headers(null==t?void 0:t.headers);return r.set("x-middleware-rewrite",h(e)),J(t,r),new B(null,{...t,headers:r})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),J(e,t),new B(null,{...e,headers:t})}}function G(e,t){let r="string"==typeof t?new URL(t):t,s=new URL(e,t),n=`${r.protocol}//${r.host}`;return`${s.protocol}//${s.host}`===n?s.toString().replace(n,""):s.toString()}let V=["__nextFallback","__nextLocale","__nextDefaultLocale","__nextIsNotFound"],Z=["__nextDataReq"];function K(e,t){for(let r of V)e.delete(r);if(t)for(let s of Z)e.delete(s);return e}function Q(e,t){return t?e.replace(/\.rsc($|\?)/,""):e}class X extends F{constructor(e){super(e.input,e.init),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}waitUntil(){throw new s({page:this.sourcePage})}}let Y=[["RSC"],["Next-Router-State-Tree"],["Next-Router-Prefetch"],["x-vercel-sc-headers"]];async function ee(e){let t=void 0!==self.__BUILD_MANIFEST;e.request.url=Q(e.request.url,!0);let r=new j(e.request.url,{headers:e.request.headers,nextConfig:e.request.nextConfig}),s=r.buildId;r.buildId="";let n=e.request.headers["x-nextjs-data"];n&&"/index"===r.pathname&&(r.pathname="/");let o=i(e.request.headers);if(!t)for(let a of Y)o.delete(a.toString().toLowerCase());K(r.searchParams,!0);let l=new X({page:e.page,input:String(r),init:{body:e.request.body,geo:e.request.geo,headers:o,ip:e.request.ip,method:e.request.method,nextConfig:e.request.nextConfig}});n&&Object.defineProperty(l,"__isData",{enumerable:!1,value:!0});let h=new f({request:l,page:e.page}),u=await e.handler(l,h);if(u&&!(u instanceof Response))throw TypeError("Expected an instance of Response to be returned");let d=null==u?void 0:u.headers.get("x-middleware-rewrite");if(u&&d){let p=new j(d,{forceLocale:!0,headers:e.request.headers,nextConfig:e.request.nextConfig});p.host===l.nextUrl.host&&(p.buildId=s||p.buildId,u.headers.set("x-middleware-rewrite",String(p))),n&&u.headers.set("x-nextjs-rewrite",G(String(p),String(r)))}let g=null==u?void 0:u.headers.get("Location");if(u&&g){let m=new j(g,{forceLocale:!1,headers:e.request.headers,nextConfig:e.request.nextConfig});u=new Response(u.body,u),m.host===l.nextUrl.host&&(m.buildId=s||m.buildId,u.headers.set("Location",String(m))),n&&(u.headers.delete("Location"),u.headers.set("x-nextjs-redirect",G(String(m),String(r))))}return{response:u||B.next(),waitUntil:Promise.all(h[c])}}function et(e){return`The edge runtime does not support Node.js '${e}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`}function er(e){let t=new Proxy(function(){},{get(t,r){if("then"===r)return{};throw Error(et(e))},construct(){throw Error(et(e))},apply(r,s,n){if("function"==typeof n[0])return n[0](t);throw Error(et(e))}});return new Proxy({},{get:()=>t})}function es(){process!==r.g.process&&(process.env=r.g.process.env,r.g.process=process),Object.defineProperty(globalThis,"__import_unsupported",{value:er,enumerable:!1,configurable:!1})}}},e=>{var t=e(e.s=5755);(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_pages/api/enquiry"]=t}]);
//# sourceMappingURL=enquiry.js.map;
  export default (function () {
    const module = { exports: {}, loaded: false };
    const fn = (function(module,exports) {var d=Object.defineProperty;var m=e=>d(e,"__esModule",{value:!0});var y=(e,r)=>{m(e);for(var t in r)d(e,t,{get:r[t],enumerable:!0})};y(exports,{default:()=>x});function h(e){let r={};return e&&e.forEach((t,i)=>{r[i]=t,i.toLowerCase()==="set-cookie"&&(r[i]=C(t))}),r}function C(e){let r=[],t=0,i,a,p,n,s;function c(){for(;t<e.length&&/\s/.test(e.charAt(t));)t+=1;return t<e.length}function o(){return a=e.charAt(t),a!=="="&&a!==";"&&a!==","}for(;t<e.length;){for(i=t,s=!1;c();)if(a=e.charAt(t),a===","){for(p=t,t+=1,c(),n=t;t<e.length&&o();)t+=1;t<e.length&&e.charAt(t)==="="?(s=!0,t=n,r.push(e.substring(i,p)),i=t):t=p+1}else t+=1;(!s||t>=e.length)&&r.push(e.substring(i,e.length))}return r}function x(e){let r=e.staticRoutes.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page})),t=e.dynamicRoutes?.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page}))||[];return async function(a,p){let n=new URL(a.url).pathname,s={};if(e.nextConfig?.basePath&&n.startsWith(e.nextConfig.basePath)&&(n=n.replace(e.nextConfig.basePath,"")||"/"),e.nextConfig?.i18n)for(let o of e.nextConfig.i18n.locales){let g=new RegExp(`^/${o}($|/)`,"i");if(n.match(g)){n=n.replace(g,"/")||"/";break}}for(let o of r)if(o.regexp.exec(n)){s.name=o.page;break}if(!s.name){let o=R(n);for(let g of t||[]){if(o&&!R(g.page))continue;let f=g.regexp.exec(n);if(f){s={name:g.page,params:f.groups};break}}}let c=await _ENTRIES[`middleware_${e.name}`].default.call({},{request:{url:a.url,method:a.method,headers:h(a.headers),ip:u(a.headers,l.Ip),geo:{city:u(a.headers,l.City,!0),country:u(a.headers,l.Country,!0),latitude:u(a.headers,l.Latitude),longitude:u(a.headers,l.Longitude),region:u(a.headers,l.Region,!0)},nextConfig:e.nextConfig,page:s,body:a.body}});return p.waitUntil(c.waitUntil),c.response}}function u(e,r,t=!1){let i=e.get(r)||void 0;return t&&i?decodeURIComponent(i):i}function R(e){return e==="/api"||e.startsWith("/api/")}var l;(function(n){n.City="x-vercel-ip-city",n.Country="x-vercel-ip-country",n.Ip="x-real-ip",n.Latitude="x-vercel-ip-latitude",n.Longitude="x-vercel-ip-longitude",n.Region="x-vercel-ip-country-region"})(l||(l={}));

});
    fn(module, module.exports);
    return module.exports;
  }).call({}).default(
    {"name":"pages/api/enquiry","staticRoutes":[{"page":"/","regex":"^/(?:/)?$","routeKeys":{},"namedRegex":"^/(?:/)?$"},{"page":"/captcha","regex":"^/captcha(?:/)?$","routeKeys":{},"namedRegex":"^/captcha(?:/)?$"},{"page":"/contato","regex":"^/contato(?:/)?$","routeKeys":{},"namedRegex":"^/contato(?:/)?$"},{"page":"/estoque","regex":"^/estoque(?:/)?$","routeKeys":{},"namedRegex":"^/estoque(?:/)?$"},{"page":"/loja","regex":"^/loja(?:/)?$","routeKeys":{},"namedRegex":"^/loja(?:/)?$"},{"page":"/pedidos","regex":"^/pedidos(?:/)?$","routeKeys":{},"namedRegex":"^/pedidos(?:/)?$"}],"dynamicRoutes":[{"page":"/noticia/[id]","regex":"^/noticia/([^/]+?)(?:/)?$","routeKeys":{"id":"id"},"namedRegex":"^/noticia/(?<id>[^/]+?)(?:/)?$"},{"page":"/[view]/[idview]","regex":"^/([^/]+?)/([^/]+?)(?:/)?$","routeKeys":{"view":"view","idview":"idview"},"namedRegex":"^/(?<view>[^/]+?)/(?<idview>[^/]+?)(?:/)?$"}],"nextConfig":{"basePath":""}}
  )