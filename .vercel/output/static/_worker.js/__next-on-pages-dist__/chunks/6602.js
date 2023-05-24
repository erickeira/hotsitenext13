var ut=(it,Be,y)=>{"use strict";y.d(Be,{ZP:()=>L,tn:()=>ue,cG:()=>ye});var F=y(7568),H=y(872),Ke=y(5826),O=y(3066),ce=y(9043);let Se=Symbol("ASSET_LOAD_ERROR");function pe(a){return Object.defineProperty(a,Se,{})}function Qe(a){return a&&Se in a}function We(a,e,t){return new Promise((r,n)=>{let o=!1;a.then(s=>{o=!0,r(s)}).catch(n),(0,ce.K)(()=>setTimeout(()=>{o||n(t)},e))})}function Ce(){if(self.__BUILD_MANIFEST)return Promise.resolve(self.__BUILD_MANIFEST);let a=new Promise(e=>{let t=self.__BUILD_MANIFEST_CB;self.__BUILD_MANIFEST_CB=()=>{e(self.__BUILD_MANIFEST),t&&t()}});return We(a,3800,pe(Error("Failed to load client build manifest")))}(function(a){try{a=document.createElement("link"),window.MSInputMethodContext&&document.documentMode||a.relList.supports("prefetch")}catch{return!1}})();var Xe=y(6119),be=y(3935),B=y(7294),Je=y(6395);let Ve={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},de=new Map,ae=new Set,ze=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],J=a=>{let{src:e,id:t,onLoad:r=()=>{},onReady:n=null,dangerouslySetInnerHTML:o,children:s="",strategy:u="afterInteractive",onError:c}=a,h=t||e;if(h&&ae.has(h))return;if(de.has(e)){ae.add(h),de.get(e).then(r,c);return}let d=()=>{n&&n(),ae.add(h)},i=document.createElement("script"),m=new Promise((l,_)=>{i.addEventListener("load",function(v){l(),r&&r.call(this,v),d()}),i.addEventListener("error",function(v){_(v)})}).catch(function(l){c&&c(l)});for(let[l,_]of(o?(i.innerHTML=o.__html||"",d()):s?(i.textContent=typeof s=="string"?s:Array.isArray(s)?s.join(""):"",d()):e&&(i.src=e,de.set(e,m)),Object.entries(a))){if(_===void 0||ze.includes(l))continue;let v=Ve[l]||l.toLowerCase();i.setAttribute(v,_)}u==="worker"&&i.setAttribute("type","text/partytown"),i.setAttribute("data-nscript",u),document.body.appendChild(i)};function Ye(a){let{strategy:e="afterInteractive"}=a;e==="lazyOnload"?window.addEventListener("load",()=>{(0,ce.K)(()=>J(a))}):J(a)}function et(a){document.readyState==="complete"?(0,ce.K)(()=>J(a)):window.addEventListener("load",()=>{(0,ce.K)(()=>J(a))})}Object.defineProperty(function(a){let{id:e,src:t="",onLoad:r=()=>{},onReady:n=null,strategy:o="afterInteractive",onError:s}=a,u=(0,Xe.Z)(a,["id","src","onLoad","onReady","strategy","onError"]),{updateScripts:c,scripts:h,getIsSsr:d,appDir:i,nonce:m}=(0,B.useContext)(Je.V),l=(0,B.useRef)(!1);(0,B.useEffect)(()=>{let v=e||t;l.current||(n&&v&&ae.has(v)&&n(),l.current=!0)},[n,e,t]);let _=(0,B.useRef)(!1);if((0,B.useEffect)(()=>{_.current||(o==="afterInteractive"?J(a):o==="lazyOnload"&&et(a),_.current=!0)},[a,o]),(o==="beforeInteractive"||o==="worker")&&(c?(h[o]=(h[o]||[]).concat([(0,H.Z)({id:e,src:t,onLoad:r,onReady:n,onError:s},u)]),c(h)):d&&d()?ae.add(e||t):d&&!d()&&J(a)),i){if(o==="beforeInteractive")return t?(be.preload(t,u.integrity?{as:"script",integrity:u.integrity}:{as:"script"}),B.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([t])})`}})):(u.dangerouslySetInnerHTML&&(u.children=u.dangerouslySetInnerHTML.__html,delete u.dangerouslySetInnerHTML),B.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,(0,H.Z)({},u)])})`}}));o==="afterInteractive"&&t&&be.preload(t,u.integrity?{as:"script",integrity:u.integrity}:{as:"script"})}return null},"__nextScript",{value:!0});var ne=y(9136),tt=y(8402),fe=y(4773);function rt(){let a=Object.create(null);return{on(e,t){(a[e]||(a[e]=[])).push(t)},off(e,t){a[e]&&a[e].splice(a[e].indexOf(t)>>>0,1)},emit(e,...t){(a[e]||[]).slice().map(r=>{r(...t)})}}}var q=y(9737),$=y(8858),Z=y(4595),at=y(261),ct=y(5114),ht=y(7826),V=y(995),K=y(8464),j=y(9194),z=y(169),se=y(2293);function Ee(a,e){return a}function k(a){return(a=a.slice(0)).startsWith("/")||(a=`/${a}`),a}var x=y(7833),nt=y(6414);function Y(a){return(0,nt.Y)(a,"")}var st=y(8849),he=y(5860),Le=y(7447);function lt(a,e){let t=Object.keys(a);if(t.length!==Object.keys(e).length)return!1;for(let r=t.length;r--;){let n=t[r];if(n==="query"){let o=Object.keys(a.query);if(o.length!==Object.keys(e.query).length)return!1;for(let s=o.length;s--;){let u=o[s];if(!e.query.hasOwnProperty(u)||a.query[u]!==e.query[u])return!1}}else if(!e.hasOwnProperty(n)||a[n]!==e[n])return!1}return!0}function Ae(){return Object.assign(Error("Route Cancelled"),{cancelled:!0})}function me(a){return Re.apply(this,arguments)}function Re(){return(Re=(0,F.Z)(function*(a){let e=yield Promise.resolve(a.router.pageLoader.getMiddleware());if(!e)return!1;let{pathname:t}=(0,z.c)(a.asPath),r=Y(t)?k(t):t,n=(0,x.n)((0,se.b)(r,a.locale));return e.some(o=>RegExp(o.regexp).test(n))})).apply(this,arguments)}function _e(a){let e=(0,q.Dp)();return a.startsWith(e)?a.substring(e.length):a}function Ie(a,e){let t={};return Object.keys(a).forEach(r=>{e.includes(r)||(t[r]=a[r])}),t}function ue(a){if(!(0,q.sD)(a))return!0;try{let e=(0,q.Dp)(),t=new URL(a,e);return t.origin===e&&Y(t.pathname)}catch{return!1}}function xe(a,e,t){let r="",n=(0,K.vG)(a),o=n.groups,s=(e!==a?(0,V.t)(n)(e):"")||t;r=a;let u=Object.keys(o);return u.every(c=>{let h=s[c]||"",{repeat:d,optional:i}=o[c],m=`[${d?"...":""}${c}]`;return i&&(m=`${h?"":"/"}[${m}]`),d&&!Array.isArray(h)&&(h=[h]),(i||c in s)&&(r=r.replace(m,d?h.map(l=>encodeURIComponent(l)).join("/"):encodeURIComponent(h))||"/")})||(r=""),{params:u,result:r}}function ye(a,e,t){let r,n=typeof e=="string"?e:(0,j.CD)(e),o=n.match(/^[a-zA-Z]{1,}:\/\//),s=o?n.slice(o[0].length):n;if((s.split("?")[0]||"").match(/(\/\/|\\)/)){console.error(`Invalid href passed to next/router: ${n}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);let c=(0,q.U3)(s);n=(o?o[0]:"")+c}if(!ue(n))return t?[n]:n;try{r=new URL(n.startsWith("#")?a.asPath:a.pathname,"http://n")}catch{r=new URL("/","http://n")}try{let c=new URL(n,r);c.pathname=(0,Ke.R)(c.pathname);let h="";if((0,$.$)(c.pathname)&&c.searchParams&&t){let i=(0,at.u5)(c.searchParams),{result:m,params:l}=xe(c.pathname,c.pathname,i);m&&(h=(0,j.CD)({pathname:m,hash:c.hash,query:Ie(i,l)}))}let d=c.origin===r.origin?c.href.slice(c.origin.length):c.href;return t?[d,h||d]:d}catch{return t?[n]:n}}function ge(a,e,t){let[r,n]=ye(a,e,!0),o=(0,q.Dp)(),s=r.startsWith(o),u=n&&n.startsWith(o);r=_e(r),n=n&&_e(n);let c=s?r:(0,x.n)(r),h=t?_e(ye(a,t)):n||r;return{url:c,as:u?h:(0,x.n)(h)}}function le(a,e){let t=(0,O.Q)((0,tt.s)(a));return t==="/404"||t==="/_error"?a:(e.includes(t)||e.some(r=>{if((0,$.$)(r)&&(0,K.vG)(r).re.test(t))return a=r,!0}),(0,O.Q)(a))}function ot(a,e,t){let r={basePath:t.router.basePath,i18n:{locales:t.router.locales},trailingSlash:Boolean(!1)},n=e.headers.get("x-nextjs-rewrite"),o=n||e.headers.get("x-nextjs-matched-path"),s=e.headers.get("x-matched-path");if(!s||o||s.includes("__next_data_catchall")||s.includes("/_error")||s.includes("/404")||(o=s),o){if(o.startsWith("/")){let d=(0,Z.u)(o),i=(0,he.a)(d.pathname,{nextConfig:r,parseData:!0}),m=(0,O.Q)(i.pathname);return Promise.all([t.router.pageLoader.getPageList(),Ce()]).then(([l,{__rewrites:_}])=>{let v=(0,se.b)(i.pathname,i.locale);if((0,$.$)(v)||!n&&l.includes((0,fe.h)(k(v),t.router.locales).pathname)){let w=(0,he.a)((0,Z.u)(a).pathname,{parseData:!0});v=(0,x.n)(w.pathname),d.pathname=v}if(!l.includes(m)){let w=le(m,l);w!==m&&(m=w)}let R=l.includes(m)?m:le((0,fe.h)(k(d.pathname),t.router.locales).pathname,l);if((0,$.$)(R)){let w=(0,V.t)((0,K.vG)(R))(v);Object.assign(d.query,w||{})}return{type:"rewrite",parsedAs:d,resolvedHref:R}})}let c=(0,z.c)(a),h=(0,Le.R)((0,H.Z)({},(0,he.a)(c.pathname,{nextConfig:r,parseData:!0}),{defaultLocale:t.router.defaultLocale,buildId:""}));return Promise.resolve({type:"redirect-external",destination:`${h}${c.query}${c.hash}`})}let u=e.headers.get("x-nextjs-redirect");if(u){if(u.startsWith("/")){let c=(0,z.c)(u),h=(0,Le.R)((0,H.Z)({},(0,he.a)(c.pathname,{nextConfig:r,parseData:!0}),{defaultLocale:t.router.defaultLocale,buildId:""}));return Promise.resolve({type:"redirect-internal",newAs:`${h}${c.query}${c.hash}`,newUrl:`${h}${c.query}${c.hash}`})}return Promise.resolve({type:"redirect-external",destination:u})}return Promise.resolve({type:"next"})}function De(a){return Ne.apply(this,arguments)}function Ne(){return(Ne=(0,F.Z)(function*(a){if(!(yield me(a))||!a.fetchData)return null;try{let t=yield a.fetchData(),r=yield ot(t.dataHref,t.response,a);return{dataHref:t.dataHref,json:t.json,response:t.response,text:t.text,cacheKey:t.cacheKey,effect:r}}catch{return null}})).apply(this,arguments)}let Te=Symbol("SSG_DATA_NOT_FOUND");function He(a,e,t){return fetch(a,{credentials:"same-origin",method:t.method||"GET",headers:Object.assign({},t.headers,{"x-nextjs-data":"1"})}).then(r=>!r.ok&&e>1&&r.status>=500?He(a,e-1,t):r)}function ve(a){let e=document.documentElement,t=e.style.scrollBehavior;e.style.scrollBehavior="auto",e.getClientRects(),a(),e.style.scrollBehavior=t}function je(a){try{return JSON.parse(a)}catch{return null}}function ee({dataHref:a,inflightCache:e,isPrefetch:t,hasMiddleware:r,isServerRender:n,parseJSON:o,persistCache:s,isBackground:u,unstable_skipClientCache:c}){var h;let{href:d}=new URL(a,window.location.href),i=m=>He(a,n?3:1,{headers:Object.assign({},t?{purpose:"prefetch"}:{},t&&r?{"x-middleware-prefetch":"1"}:{}),method:(h=m?.method)!=null?h:"GET"}).then(l=>l.ok&&m?.method==="HEAD"?{dataHref:a,response:l,text:"",json:{},cacheKey:d}:l.text().then(_=>{if(!l.ok){if(r&&[301,302,307,308].includes(l.status))return{dataHref:a,response:l,text:_,json:{},cacheKey:d};if(!r&&l.status===404){var v;if((v=je(_))!=null&&v.notFound)return{dataHref:a,json:{notFound:Te},response:l,text:_,cacheKey:d}}let R=Error("Failed to load static props");throw n||pe(R),R}return{dataHref:a,json:o?je(_):null,response:l,text:_,cacheKey:d}})).then(l=>(s&&l.response.headers.get("x-middleware-cache")!=="no-cache"||delete e[d],l)).catch(l=>{throw c||delete e[d],l.message==="Failed to fetch"&&pe(l),l});return c&&s?i({}).then(m=>(e[d]=Promise.resolve(m),m)):e[d]!==void 0?e[d]:e[d]=i(u?{method:"HEAD"}:{})}function ke(){return Math.random().toString(36).slice(2,10)}function Q({url:a,router:e}){if(a===(0,x.n)((0,se.b)(e.asPath,e.locale)))throw Error(`Invariant: attempted to hard navigate to the same URL ${a} ${location.href}`);window.location.href=a}let Oe=({route:a,router:e})=>{let t=!1,r=e.clc=()=>{t=!0};return()=>{if(t){let o=Error(`Abort fetching component for route: "${a}"`);throw o.cancelled=!0,o}r===e.clc&&(e.clc=null)}};class L{reload(){window.location.reload()}back(){window.history.back()}forward(){window.history.forward()}push(e,t,r={}){return{url:e,as:t}=ge(this,e,t),this.change("pushState",e,t,r)}replace(e,t,r={}){return{url:e,as:t}=ge(this,e,t),this.change("replaceState",e,t,r)}change(e,t,r,n,o){var s=this;return(0,F.Z)(function*(){let u,c;if(!ue(t))return Q({url:t,router:s}),!1;let h=n._h===1,d=h||n._shouldResolveHref||(0,z.c)(t).pathname===(0,z.c)(r).pathname,i=(0,H.Z)({},s.state),m=s.isReady!==!0;s.isReady=!0;let l=s.isSsr;if(h||(s.isSsr=!1),h&&s.clc)return!1;let _=i.locale;q.ST&&performance.mark("routeChange");let{shallow:v=!1,scroll:R=!0}=n,w={shallow:v};s._inFlightRoute&&s.clc&&(l||L.events.emit("routeChangeError",Ae(),s._inFlightRoute,w),s.clc(),s.clc=null),r=(0,x.n)((0,se.b)(Y(r)?k(r):r,n.locale,s.defaultLocale));let A=Ee(Y(r)?k(r):r,i.locale);s._inFlightRoute=r;let M=_!==i.locale;if(!h&&s.onlyAHashChange(A)&&!M){i.asPath=A,L.events.emit("hashChangeStart",r,w),s.changeState(e,t,r,(0,H.Z)({},n,{scroll:!1})),R&&s.scrollToHash(A);try{yield s.set(i,s.components[i.route],null)}catch(p){throw(0,ne.Z)(p)&&p.cancelled&&L.events.emit("routeChangeError",p,A,w),p}return L.events.emit("hashChangeComplete",r,w),!0}let C=(0,Z.u)(t),{pathname:b,query:P}=C;try{[u,{__rewrites:c}]=yield Promise.all([s.pageLoader.getPageList(),Ce(),s.pageLoader.getMiddleware()])}catch{return Q({url:r,router:s}),!1}s.urlIsNew(A)||M||(e="replaceState");let f=r;b=b&&(0,O.Q)(k(b));let g=(0,O.Q)(b),D=r.startsWith("/")&&(0,Z.u)(r).pathname,oe=!!(D&&g!==D&&(!(0,$.$)(g)||!(0,V.t)((0,K.vG)(g))(D))),N=!n.shallow&&(yield me({asPath:r,locale:i.locale,router:s}));if(h&&N&&(d=!1),d&&b!=="/_error"&&(n._shouldResolveHref=!0,C.pathname=le(b,u),C.pathname===b||(b=C.pathname,C.pathname=(0,x.n)(b),N||(t=(0,j.CD)(C)))),!ue(r))return Q({url:r,router:s}),!1;f=Ee(k(f),i.locale),g=(0,O.Q)(b);let I=!1;if((0,$.$)(g)){let p=(0,Z.u)(f),U=p.pathname,ie=(0,K.vG)(g);I=(0,V.t)(ie)(U);let G=g===U,X=G?xe(g,U,P):{};if(I&&(!G||X.result))G?r=(0,j.CD)(Object.assign({},p,{pathname:X.result,query:Ie(P,X.params)})):Object.assign(P,I);else{let te=Object.keys(ie.groups).filter(we=>!P[we]&&!ie.groups[we].optional);if(te.length>0&&!N)throw Error((G?`The provided \`href\` (${t}) value is missing query values (${te.join(", ")}) to be interpolated properly. `:`The provided \`as\` value (${U}) is incompatible with the \`href\` value (${g}). `)+`Read more: https://nextjs.org/docs/messages/${G?"href-interpolation-failed":"incompatible-href-as"}`)}}h||L.events.emit("routeChangeStart",r,w);try{var E,W,qe,$e,Me,Fe,Ze,Ue;let p=yield s.getRouteInfo({route:g,pathname:b,query:P,as:r,resolvedAs:f,routeProps:w,locale:i.locale,isPreview:i.isPreview,hasMiddleware:N,unstable_skipClientCache:n.unstable_skipClientCache,isQueryUpdating:h&&!s.isFallback,isMiddlewareRewrite:oe});if("route"in p&&N){g=b=p.route||g,w.shallow||(P=Object.assign({},p.query||{},P));let S=Y(C.pathname)?k(C.pathname):C.pathname;if(I&&b!==S&&Object.keys(I).forEach(T=>{I&&P[T]===I[T]&&delete P[T]}),(0,$.$)(b)){let T=!w.shallow&&p.resolvedAs?p.resolvedAs:(0,x.n)((0,se.b)(new URL(r,location.href).pathname,i.locale),!0),re=T;Y(re)&&(re=k(re));let Pe=(0,K.vG)(b),Ge=(0,V.t)(Pe)(new URL(re,location.href).pathname);Ge&&Object.assign(P,Ge)}}if("type"in p)return p.type==="redirect-internal"?s.change(e,p.newUrl,p.newAs,n):(Q({url:p.destination,router:s}),new Promise(()=>{}));let U=p.Component;if(U&&U.unstable_scriptLoader&&[].concat(U.unstable_scriptLoader()).forEach(T=>{Ye(T.props)}),(p.__N_SSG||p.__N_SSP)&&p.props){if(p.props.pageProps&&p.props.pageProps.__N_REDIRECT){n.locale=!1;let S=p.props.pageProps.__N_REDIRECT;if(S.startsWith("/")&&p.props.pageProps.__N_REDIRECT_BASE_PATH!==!1){let T=(0,Z.u)(S);T.pathname=le(T.pathname,u);let{url:re,as:Pe}=ge(s,S,S);return s.change(e,re,Pe,n)}return Q({url:S,router:s}),new Promise(()=>{})}if(i.isPreview=!!p.props.__N_PREVIEW,p.props.notFound===Te){let S;try{yield s.fetchComponent("/404"),S="/404"}catch{S="/_error"}if(p=yield s.getRouteInfo({route:S,pathname:S,query:P,as:r,resolvedAs:f,routeProps:{shallow:!1},locale:i.locale,isPreview:i.isPreview}),"type"in p)throw Error("Unexpected middleware effect on /404")}}h&&s.pathname==="/_error"&&((E=self.__NEXT_DATA__.props)==null||(W=E.pageProps)==null?void 0:W.statusCode)===500&&((qe=p.props)==null?void 0:qe.pageProps)&&(p.props.pageProps.statusCode=500);let ie=n.shallow&&i.route===(($e=p.route)!=null?$e:g),G=(Me=n.scroll)!=null?Me:!h&&!ie,X=o??(G?{x:0,y:0}:null),te=(0,H.Z)({},i,{route:g,pathname:b,query:P,asPath:A,isFallback:!1});if(h&&(s.pathname==="/404"||s.pathname==="/_error")){if(p=yield s.getRouteInfo({route:s.pathname,pathname:s.pathname,query:P,as:r,resolvedAs:f,routeProps:{shallow:!1},locale:i.locale,isPreview:i.isPreview}),"type"in p)throw Error(`Unexpected middleware effect on ${s.pathname}`);s.pathname==="/_error"&&((Fe=self.__NEXT_DATA__.props)==null||(Ze=Fe.pageProps)==null?void 0:Ze.statusCode)===500&&((Ue=p.props)==null?void 0:Ue.pageProps)&&(p.props.pageProps.statusCode=500);try{yield s.set(te,p,X)}catch(S){throw(0,ne.Z)(S)&&S.cancelled&&L.events.emit("routeChangeError",S,A,w),S}return!0}if(L.events.emit("beforeHistoryChange",r,w),s.changeState(e,t,r,n),!(h&&!X&&!m&&!M&&lt(te,s.state))){try{yield s.set(te,p,X)}catch(S){if(S.cancelled)p.error=p.error||S;else throw S}if(p.error)throw h||L.events.emit("routeChangeError",p.error,A,w),p.error;h||L.events.emit("routeChangeComplete",r,w),G&&/#.+$/.test(r)&&s.scrollToHash(r)}return!0}catch(p){if((0,ne.Z)(p)&&p.cancelled)return!1;throw p}})()}changeState(e,t,r,n={}){(e!=="pushState"||(0,q.Ax)()!==r)&&(this._shallow=n.shallow,window.history[e]({url:t,as:r,options:n,__N:!0,key:this._key=e!=="pushState"?this._key:ke()},"",r))}handleRouteInfoError(e,t,r,n,o,s){var u=this;return(0,F.Z)(function*(){if(console.error(e),e.cancelled)throw e;if(Qe(e)||s)throw L.events.emit("routeChangeError",e,n,o),Q({url:n,router:u}),Ae();try{let c,{page:h,styleSheets:d}=yield u.fetchComponent("/_error"),i={props:c,Component:h,styleSheets:d,err:e,error:e};if(!i.props)try{i.props=yield u.getInitialProps(h,{err:e,pathname:t,query:r})}catch(m){console.error("Error in error page `getInitialProps`: ",m),i.props={}}return i}catch(c){return u.handleRouteInfoError((0,ne.Z)(c)?c:Error(c+""),t,r,n,o,!0)}})()}getRouteInfo({route:e,pathname:t,query:r,as:n,resolvedAs:o,routeProps:s,locale:u,hasMiddleware:c,isPreview:h,unstable_skipClientCache:d,isQueryUpdating:i,isMiddlewareRewrite:m}){var l=this;return(0,F.Z)(function*(){let _=e;try{var v,R,w,A;let M=Oe({route:_,router:l}),C=l.components[_];if(s.shallow&&C&&l.route===_)return C;c&&(C=void 0);let b=!C||"initial"in C?void 0:C,P={dataHref:l.pageLoader.getDataHref({href:(0,j.CD)({pathname:t,query:r}),skipInterpolation:!0,asPath:o,locale:u}),hasMiddleware:!0,isServerRender:l.isSsr,parseJSON:!0,inflightCache:i?l.sbc:l.sdc,persistCache:!h,isPrefetch:!1,unstable_skipClientCache:d,isBackground:i},f=i&&!m?null:yield De({fetchData:()=>ee(P),asPath:o,locale:u,router:l}).catch(E=>{if(i)return null;throw E});if(i&&(f?f.json=self.__NEXT_DATA__.props:f={json:self.__NEXT_DATA__.props}),M(),(f==null||(v=f.effect)==null?void 0:v.type)==="redirect-internal"||(f==null||(R=f.effect)==null?void 0:R.type)==="redirect-external")return f.effect;if((f==null||(w=f.effect)==null?void 0:w.type)==="rewrite"){let E=(0,O.Q)(f.effect.resolvedHref),W=yield l.pageLoader.getPageList();if((!i||W.includes(E))&&(_=E,t=f.effect.resolvedHref,r=(0,H.Z)({},r,f.effect.parsedAs.query),o=k((0,fe.h)(f.effect.parsedAs.pathname,l.locales).pathname),C=l.components[_],s.shallow&&C&&l.route===_&&!c))return(0,H.Z)({},C,{route:_})}if((0,st.Q)(_))return Q({url:n,router:l}),new Promise(()=>{});let g=b||(yield l.fetchComponent(_).then(E=>({Component:E.page,styleSheets:E.styleSheets,__N_SSG:E.mod.__N_SSG,__N_SSP:E.mod.__N_SSP}))),D=f==null||(A=f.response)==null?void 0:A.headers.get("x-middleware-skip"),oe=g.__N_SSG||g.__N_SSP;D&&f?.dataHref&&delete l.sdc[f.dataHref];let{props:N,cacheKey:I}=yield l._getData((0,F.Z)(function*(){if(oe){if(f?.json&&!D)return{cacheKey:f.cacheKey,props:f.json};let E=f?.dataHref?f.dataHref:l.pageLoader.getDataHref({href:(0,j.CD)({pathname:t,query:r}),asPath:o,locale:u}),W=yield ee({dataHref:E,isServerRender:l.isSsr,parseJSON:!0,inflightCache:D?{}:l.sdc,persistCache:!h,isPrefetch:!1,unstable_skipClientCache:d});return{cacheKey:W.cacheKey,props:W.json||{}}}return{headers:{},props:yield l.getInitialProps(g.Component,{pathname:t,query:r,asPath:n,locale:u,locales:l.locales,defaultLocale:l.defaultLocale})}}));return g.__N_SSP&&P.dataHref&&I&&delete l.sdc[I],l.isPreview||!g.__N_SSG||i||ee(Object.assign({},P,{isBackground:!0,persistCache:!1,inflightCache:l.sbc})).catch(()=>{}),N.pageProps=Object.assign({},N.pageProps),g.props=N,g.route=_,g.query=r,g.resolvedAs=o,l.components[_]=g,g}catch(M){return l.handleRouteInfoError((0,ne.S)(M),t,r,n,s)}})()}set(e,t,r){return this.state=e,this.sub(t,this.components["/_app"].Component,r)}beforePopState(e){this._bps=e}onlyAHashChange(e){if(!this.asPath)return!1;let[t,r]=this.asPath.split("#"),[n,o]=e.split("#");return!!o&&t===n&&r===o||t===n&&r!==o}scrollToHash(e){let[,t=""]=e.split("#");if(t===""||t==="top"){ve(()=>window.scrollTo(0,0));return}let r=decodeURIComponent(t),n=document.getElementById(r);if(n){ve(()=>n.scrollIntoView());return}let o=document.getElementsByName(r)[0];o&&ve(()=>o.scrollIntoView())}urlIsNew(e){return this.asPath!==e}prefetch(e,t=e,r={}){var n=this;return(0,F.Z)(function*(){let o=(0,Z.u)(e),{pathname:s,query:u}=o,c=s,h=yield n.pageLoader.getPageList(),d=t,i=r.locale!==void 0?r.locale||void 0:n.locale,m=yield me({asPath:t,locale:i,router:n});o.pathname=le(o.pathname,h),(0,$.$)(o.pathname)&&(s=o.pathname,o.pathname=s,Object.assign(u,(0,V.t)((0,K.vG)(o.pathname))((0,z.c)(t).pathname)||{}),m||(e=(0,j.CD)(o)));let l=yield De({fetchData:()=>ee({dataHref:n.pageLoader.getDataHref({href:(0,j.CD)({pathname:c,query:u}),skipInterpolation:!0,asPath:d,locale:i}),hasMiddleware:!0,isServerRender:n.isSsr,parseJSON:!0,inflightCache:n.sdc,persistCache:!n.isPreview,isPrefetch:!0}),asPath:t,locale:i,router:n});if(l?.effect.type==="rewrite"&&(o.pathname=l.effect.resolvedHref,s=l.effect.resolvedHref,u=(0,H.Z)({},u,l.effect.parsedAs.query),d=l.effect.parsedAs.pathname,e=(0,j.CD)(o)),l?.effect.type==="redirect-external")return;let _=(0,O.Q)(s);yield Promise.all([n.pageLoader._isSsg(_).then(v=>!!v&&ee({dataHref:l?.json?l?.dataHref:n.pageLoader.getDataHref({href:e,asPath:d,locale:i}),isServerRender:!1,parseJSON:!0,inflightCache:n.sdc,persistCache:!n.isPreview,isPrefetch:!0,unstable_skipClientCache:r.unstable_skipClientCache||r.priority&&!0}).then(()=>!1)),n.pageLoader[r.priority?"loadPage":"prefetch"](_)])})()}fetchComponent(e){var t=this;return(0,F.Z)(function*(){let r=Oe({route:e,router:t});try{let n=yield t.pageLoader.loadPage(e);return r(),n}catch(n){throw r(),n}})()}_getData(e){let t=!1,r=()=>{t=!0};return this.clc=r,e().then(n=>{if(r===this.clc&&(this.clc=null),t){let o=Error("Loading initial props cancelled");throw o.cancelled=!0,o}return n})}_getFlightData(e){return ee({dataHref:e,isServerRender:!0,parseJSON:!1,inflightCache:this.sdc,persistCache:!1,isPrefetch:!1}).then(({text:t})=>({data:t}))}getInitialProps(e,t){let{Component:r}=this.components["/_app"],n=this._wrapApp(r);return t.AppTree=n,(0,q.nq)(r,{AppTree:n,Component:e,router:this,ctx:t})}get route(){return this.state.route}get pathname(){return this.state.pathname}get query(){return this.state.query}get asPath(){return this.state.asPath}get locale(){return this.state.locale}get isFallback(){return this.state.isFallback}get isPreview(){return this.state.isPreview}constructor(e,t,r,{initialProps:n,pageLoader:o,App:s,wrapApp:u,Component:c,err:h,subscription:d,isFallback:i,locale:m,locales:l,defaultLocale:_,domainLocales:v,isPreview:R}){this.sdc={},this.sbc={},this.isFirstPopStateEvent=!0,this._key=ke(),this.onPopState=M=>{let C,{isFirstPopStateEvent:b}=this;this.isFirstPopStateEvent=!1;let P=M.state;if(!P){let{pathname:I,query:E}=this;this.changeState("replaceState",(0,j.CD)({pathname:(0,x.n)(I),query:E}),(0,q.Ax)());return}if(P.__NA){window.location.reload();return}if(!P.__N||b&&this.locale===P.options.locale&&P.as===this.asPath)return;let{url:f,as:g,options:D,key:oe}=P;this._key=oe;let{pathname:N}=(0,Z.u)(f);(!this.isSsr||g!==(0,x.n)(this.asPath)||N!==(0,x.n)(this.pathname))&&(!this._bps||this._bps(P))&&this.change("replaceState",f,g,Object.assign({},D,{shallow:D.shallow&&this._shallow,locale:D.locale||this.defaultLocale,_h:0}),C)};let w=(0,O.Q)(e);this.components={},e!=="/_error"&&(this.components[w]={Component:c,initial:!0,props:n,err:h,__N_SSG:n&&n.__N_SSG,__N_SSP:n&&n.__N_SSP}),this.components["/_app"]={Component:s,styleSheets:[]},this.events=L.events,this.pageLoader=o;let A=(0,$.$)(e)&&self.__NEXT_DATA__.autoExport;this.basePath="",this.sub=d,this.clc=null,this._wrapApp=u,this.isSsr=!0,this.isLocaleDomain=!1,this.isReady=!!(self.__NEXT_DATA__.gssp||self.__NEXT_DATA__.gip||self.__NEXT_DATA__.appGip&&!self.__NEXT_DATA__.gsp||!A&&!self.location.search),this.state={route:w,pathname:e,query:t,asPath:A?e:r,isPreview:!!R,locale:void 0,isFallback:i},this._initialMatchesMiddlewarePromise=Promise.resolve(!1)}}L.events=rt()};export{ut as default};
