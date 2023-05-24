var or=(ar,He,c)=>{"use strict";let ie,se;c.d(He,{R:()=>At});var u=c(7294),le=c(7762),ue=c(6973),E=c(8478),j=c(2142),U=c(786);let Je=/^[A-Za-z_$][A-Za-z0-9_$]*$/;class F extends Error{constructor(a,e,o,r){super(o?`Error serializing \`${o}\` returned from \`${e}\` in "${a}".
Reason: ${r}`:`Error serializing props returned from \`${e}\` in "${a}".
Reason: ${r}`)}}function de(t,a,e){if(!(0,U.P)(e))throw new F(t,a,"",`Props must be returned as a plain object from ${a}: \`{ props: { ... } }\` (received: \`${(0,U.A)(e)}\`).`);function o(r,l,i){if(r.has(l))throw new F(t,a,i,`Circular references cannot be expressed in JSON (references: \`${r.get(l)||"(self)"}\`).`);r.set(l,i)}return function r(l,i,s){let p=typeof i;if(i===null||p==="boolean"||p==="number"||p==="string")return!0;if(p==="undefined")throw new F(t,a,s,"`undefined` cannot be serialized as JSON. Please use `null` or omit this value.");if((0,U.P)(i)){if(o(l,i,s),Object.entries(i).every(([m,v])=>{let h=Je.test(m)?`${s}.${m}`:`${s}[${JSON.stringify(m)}]`,D=new Map(l);return r(D,m,h)&&r(D,v,h)}))return!0;throw new F(t,a,s,"invariant: Unknown error encountered in Object.")}if(Array.isArray(i)){if(o(l,i,s),i.every((m,v)=>{let h=new Map(l);return r(h,m,`${s}[${v}]`)}))return!0;throw new F(t,a,s,"invariant: Unknown error encountered in Array.")}throw new F(t,a,s,"`"+p+"`"+(p==="object"?` ("${Object.prototype.toString.call(i)}")`:"")+" cannot be serialized as JSON. Please only return JSON serializable data types.")}(new Map,e,"")}var ce=c(7400),Ze=c(9094),Ve=c(6395),Ge=c(872);let pe=u.createContext(null),me=[],Qe=[],Xe=!1;function Ye(t){let a=t(),e={loading:!0,loaded:null,error:null};return e.promise=a.then(o=>(e.loading=!1,e.loaded=o,o)).catch(o=>{throw e.loading=!1,e.error=o,o}),e}function Ke(t,a){let e=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},a);e.lazy=u.lazy(e.loader);let o=null;function r(){if(!o){let i=new et(t,e);o={getCurrentValue:i.getCurrentValue.bind(i),subscribe:i.subscribe.bind(i),retry:i.retry.bind(i),promise:i.promise.bind(i)}}return o.promise()}function l(i){(function(){r();let p=u.useContext(pe);p&&Array.isArray(e.modules)&&e.modules.forEach(m=>{p(m)})})();let s=u.createElement(e.loading,{isLoading:!0,pastDelay:!0,error:null});return u.createElement(u.Suspense,{fallback:s},u.createElement(e.lazy,i))}return me.push(r),l.preload=()=>r(),l.displayName="LoadableComponent",l}class et{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:a,_opts:e}=this;a.loading&&(typeof e.delay=="number"&&(e.delay===0?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},e.delay)),typeof e.timeout=="number"&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},e.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(o=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(a){this._state=(0,Ge.Z)({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(a){return this._callbacks.add(a),()=>{this._callbacks.delete(a)}}constructor(a,e){this._loadFn=a,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function W(t){return Ke(Ye,t)}function B(t,a){let e=[];for(;t.length;){let o=t.pop();e.push(o(a))}return Promise.all(e).then(()=>{if(t.length)return B(t,a)})}W.preloadAll=()=>new Promise((t,a)=>{B(me).then(t,a)}),W.preloadReady=(t=[])=>new Promise(a=>{let e=()=>(Xe=!0,a());B(Qe,t).then(e,e)});var tt=c(9588),fe=c(8858),he=c(9737),rt=c(5911),at=c(7515),nt=c(8402),ge=c(5130),k=c(1981),H=c(4137),ot=c(9136);function ve(t){return t!=null}let it=globalThis.setTimeout;function P(t){return new TextEncoder().encode(t)}function M(t,a){return a?a.decode(t,{stream:!0}):new TextDecoder().decode(t)}function ye(t){let{readable:a,writable:e}=new TransformStream,o=Promise.resolve();for(let r=0;r<t.length;++r)o=o.then(()=>t[r].pipeTo(e,{preventClose:r+1<t.length}));return a}function st(t){let{readable:a,writable:e}=new TransformStream,o=e.getWriter();return t.forEach(r=>o.write(P(r))),o.close(),a}async function be(t){let a=t.getReader(),e=new TextDecoder,o="";for(;;){let{done:r,value:l}=await a.read();if(r)return o;o+=M(l,e)}}function we(t=a=>a){let a="",e=null,o=l=>(e||(e=new Promise(i=>{setTimeout(async()=>{let s=await t(a);l.enqueue(P(s)),a="",e=null,i()},0)})),e),r=new TextDecoder;return new TransformStream({transform(l,i){a+=M(l,r),o(i)},flush(){if(e)return e}})}function lt(t){return new TransformStream({async transform(a,e){let o=P(await t());e.enqueue(o),e.enqueue(a)}})}function ut({ReactDOMServer:t,element:a,streamOptions:e}){return t.renderToReadableStream(a,e)}function dt(t){let a=!1,e=!1;return new TransformStream({async transform(o,r){if(e){r.enqueue(o);return}let l=await t();if(a)r.enqueue(P(l)),r.enqueue(o),e=!0;else{let i=M(o),s=i.indexOf("</head>");if(s!==-1){let p=i.slice(0,s)+l+i.slice(s);r.enqueue(P(p)),e=!0,a=!0}}a?it(()=>{e=!1}):r.enqueue(o)}})}function ct(t){let a=!1,e=null;return new TransformStream({transform(o,r){r.enqueue(o),!a&&t&&(a=!0,e=new Promise(l=>{setTimeout(()=>{r.enqueue(P(t)),l()})}))},flush(o){if(e)return e;!a&&t&&(a=!0,o.enqueue(P(t)))}})}function pt(t){let a=null;return new TransformStream({transform(e,o){if(o.enqueue(e),!a){let r=t.getReader();a=new Promise(l=>setTimeout(async()=>{try{for(;;){let{done:i,value:s}=await r.read();if(i)return l();o.enqueue(s)}}catch(i){o.error(i)}l()},0))}},flush(){if(a)return a}})}function mt(t){return new TransformStream({flush(a){t&&a.enqueue(P(t))}})}function ft(t="",a){let e=!1,o=!1;return new TransformStream({async transform(r,l){if(!e||!o){let i=M(r);!e&&i.includes("<html")&&(e=!0),!o&&i.includes("<body")&&(o=!0)}l.enqueue(r)},flush(r){let l=[e?null:"html",o?null:"body"].filter(ve);l.length>0&&r.enqueue(P(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({missingTags:l,assetPrefix:t??"",tree:a()})}<\/script>`))}})}async function ht(t,{suffix:a,dataStream:e,generateStaticHTML:o,getServerInsertedHTML:r,serverInsertedHTMLToHead:l,validateRootLayout:i}){let s="</body></html>",p=a?a.split(s)[0]:null;return o&&await t.allReady,[we(),r&&!l?lt(r):null,p!=null?ct(p):null,e?pt(e):null,p!=null?mt(s):null,dt(async()=>r&&l?await r():""),i?ft(i.assetPrefix,i.getTree):null].filter(ve).reduce((v,h)=>v.pipeThrough(h),t)}var gt=c(1323),vt=c(7971),yt=c.n(vt),bt=c(4127),wt=c(6119);let Et=(0,u.createContext)(null),Pt=(0,u.createContext)(null);function _t(t){return{back(){t.back()},forward(){t.forward()},refresh(){t.reload()},push(a){t.push(a)},replace(a){t.replace(a)},prefetch(a){t.prefetch(a)}}}function St(t){let a=new URLSearchParams;for(let[e,o]of Object.entries(t))if(Array.isArray(o))for(let r of o)a.append(e,r);else o!==void 0&&a.append(e,o);return a}function Tt(t){return t.isReady&&t.query?St(t.query):new URLSearchParams}function xt(t){var{children:a,router:e}=t,o=(0,wt.Z)(t,["children","router"]);let r=(0,u.useRef)(o.isAutoExport),l=(0,u.useMemo)(()=>{let i,s=r.current;if(s&&(r.current=!1),(0,fe.$)(e.pathname)&&(e.isFallback||s&&!e.isReady))return null;try{i=new URL(e.asPath,"http://f")}catch{return"/"}return i.pathname},[e.asPath,e.isFallback,e.isReady,e.pathname]);return u.createElement(Pt.Provider,{value:l},a)}var $t=c(9970);let Ee="<!DOCTYPE html>";function $(){throw Error('No router instance found. you should only use "next/router" inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance')}async function Pe(t){let a=await le.renderToReadableStream(t);return await a.allReady,be(a)}ie=console.warn.bind(console),se=async(t,a)=>a;class Rt{constructor(a,e,o,{isFallback:r},l,i,s,p,m,v,h,D){this.route=a.replace(/\/$/,"")||"/",this.pathname=a,this.query=e,this.asPath=o,this.isFallback=r,this.basePath=i,this.locale=s,this.locales=p,this.defaultLocale=m,this.isReady=l,this.domainLocales=v,this.isPreview=!!h,this.isLocaleDomain=!!D}push(){$()}replace(){$()}reload(){$()}back(){$()}forward(){$()}prefetch(){$()}beforePopState(){$()}}function _e(t,a,e){return u.createElement(t,Object.assign({Component:a},e))}let Se=(t,a)=>{let e=`invalid-${t.toLocaleLowerCase()}-value`;return`Additional keys were returned from \`${t}\`. Properties intended for your component must be nested under the \`props\` key, e.g.:

	return { props: { title: 'My Title', content: '...' } }

Keys that need to be moved: ${a.join(", ")}.
Read more: https://nextjs.org/docs/messages/${e}`};function Te(t,a,e){let{destination:o,permanent:r,statusCode:l,basePath:i}=t,s=[],p=l!==void 0,m=r!==void 0;m&&p?s.push("`permanent` and `statusCode` can not both be provided"):m&&typeof r!="boolean"?s.push("`permanent` must be `true` or `false`"):p&&!k.q0.has(l)&&s.push(`\`statusCode\` must undefined or one of ${[...k.q0].join(", ")}`);let v=typeof o;v!=="string"&&s.push(`\`destination\` should be string but received ${v}`);let h=typeof i;if(h!=="undefined"&&h!=="boolean"&&s.push(`\`basePath\` should be undefined or a false, received ${h}`),s.length>0)throw Error(`Invalid redirect object returned from ${e} for ${a.url}
`+s.join(" and ")+`
See more info here: https://nextjs.org/docs/messages/invalid-redirect-gssp`)}function Ot(t){return{name:t.name,source:"server",message:yt()(t.message),stack:t.stack}}function Ct(t,a){return t?Ot(a):{name:"Internal Server Error.",message:"500 - Internal Server Error.",statusCode:500}}async function At(t,a,e,o,r){let l,i,s;r.devOnlyCacheBusterQueryString=r.dev?r.devOnlyCacheBusterQueryString||`?ts=${Date.now()}`:"",o=Object.assign({},o);let{err:p,dev:m=!1,ampPath:v="",pageConfig:h={},buildManifest:D,reactLoadableManifest:Lt,ErrorDebug:xe,getStaticProps:J,getStaticPaths:Z,getServerSideProps:w,isDataReq:Ft,params:Dt,previewProps:nr,basePath:It,devOnlyCacheBusterQueryString:qt,supportsDynamicHTML:Nt,images:jt,runtime:kt,App:R}=r,I=r.Document,y=r.Component,O=!!o.__nextFallback,$e=o.__nextNotFoundSrcPage;(0,bt.Q)(o);let b=!!J,V=b&&r.nextExport,G=R.getInitialProps===R.origGetInitialProps,_=!!y?.getInitialProps,Re=y?.unstable_scriptLoader,q=(0,fe.$)(e),Mt=e==="/_error"&&y.getInitialProps===y.origGetInitialProps;r.nextExport&&_&&!Mt&&ie(`Detected getInitialProps on page '${e}' while running "next export". It's recommended to use getStaticProps which has a more correct behavior for static exporting.
Read more: https://nextjs.org/docs/messages/get-initial-props-export`);let C=!_&&G&&!b&&!w;if(_&&b)throw Error(E.wh+` ${e}`);if(_&&w)throw Error(E.Wo+` ${e}`);if(w&&b)throw Error(E.oL+` ${e}`);if(Z&&!q)throw Error(`getStaticPaths is only allowed for dynamic SSG pages and was found on '${e}'.
Read more: https://nextjs.org/docs/messages/non-dynamic-getstaticpaths-usage`);if(Z&&!b)throw Error(`getStaticPaths was added without a getStaticProps in ${e}. Without getStaticProps, getStaticPaths does nothing`);if(b&&q&&!Z)throw Error(`getStaticPaths is required for dynamic SSG pages and is missing for '${e}'.
Read more: https://nextjs.org/docs/messages/invalid-getstaticpaths-value`);let Q=r.resolvedAsPath||t.url;if(m){let{isValidElementType:n}=c(Object(function(){var d=Error("Cannot find module 'next/dist/compiled/react-is'");throw d.code="MODULE_NOT_FOUND",d}()));if(!n(y))throw Error(`The default export is not a React Component in page: "${e}"`);if(!n(R))throw Error('The default export is not a React Component in page: "/_app"');if(!n(I))throw Error('The default export is not a React Component in page: "/_document"');if((C||O)&&(o={...o.amp?{amp:o.amp}:{}},Q=`${e}${t.url.endsWith("/")&&e!=="/"&&!q?"/":""}`,t.url=e),e==="/404"&&(_||w))throw Error(`\`pages/404\` ${E.Ei}`);if(j.Er.includes(e)&&(_||w))throw Error(`\`pages${e}\` ${E.Ei}`)}for(let n of["getStaticProps","getServerSideProps","getStaticPaths"])if(y?.[n])throw Error(`page ${e} ${n} ${E.lk}`);await W.preloadAll();let S=new Rt(e,o,Q,{isFallback:O},!!(w||_||!G&&!b),It,r.locale,r.locales,r.defaultLocale,r.domainLocales,l,(0,ge.OX)(t,"__nextIsLocaleDomain")),zt=_t(S),Oe={},A=(0,ue.createStyleRegistry)(),X={ampFirst:h.amp===!0,hasQuery:Boolean(o.amp),hybrid:h.amp==="hybrid"},Ce=(0,Ze.U)(!1),Ae=[],Le={};Re&&(Le.beforeInteractive=[].concat(Re()).filter(n=>n.props.strategy==="beforeInteractive").map(n=>n.props));let Ut=({children:n})=>u.createElement($t.pk.Provider,{value:zt},u.createElement(Et.Provider,{value:Tt(S)},u.createElement(xt,{router:S,isAutoExport:C},u.createElement(tt._.Provider,{value:S},u.createElement(ce.C.Provider,{value:X},u.createElement(Ve.V.Provider,{value:{updateHead:d=>{Ce=d},updateScripts:d=>{Oe=d},scripts:Le,mountedInstances:new Set}},u.createElement(pe.Provider,{value:d=>Ae.push(d)},u.createElement(ue.StyleRegistry,{registry:A},u.createElement(gt.z.Provider,{value:jt},n))))))))),Y=()=>null,Fe=({children:n})=>u.createElement(u.Fragment,null,u.createElement(Y,null),u.createElement(Ut,null,u.createElement(u.Fragment,null,m?u.createElement(u.Fragment,null,n,u.createElement(Y,null)):n,u.createElement(Y,null)))),z={err:p,req:C?void 0:t,res:C?void 0:a,pathname:e,query:o,asPath:Q,locale:r.locale,locales:r.locales,defaultLocale:r.defaultLocale,AppTree:n=>u.createElement(Fe,null,_e(R,y,{...n,router:S})),defaultGetInitialProps:async(n,d={})=>{let f=ne=>We=>u.createElement(ne,Object.assign({},We)),{html:g,head:re}=await n.renderPage({enhanceApp:f}),ae=A.styles({nonce:d.nonce});return A.flush(),{html:g,head:re,styles:ae}}},Wt=!b&&(r.nextExport||m&&(C||O)),Bt=()=>{let n=A.styles();return A.flush(),u.createElement(u.Fragment,null,n)};if(s=await(0,he.nq)(R,{AppTree:z.AppTree,Component:y,router:S,ctx:z}),(b||w)&&l&&(s.__N_PREVIEW=!0),b&&(s[j.NO]=!0),b&&!O){let n;try{n=await J({...q?{params:o}:void 0,...l?{preview:!0,previewData:i}:void 0,locales:r.locales,locale:r.locale,defaultLocale:r.defaultLocale})}catch(f){throw f&&f.code==="ENOENT"&&delete f.code,f}if(n==null)throw Error(E.q6);let d=Object.keys(n).filter(f=>f!=="revalidate"&&f!=="props"&&f!=="redirect"&&f!=="notFound");if(d.includes("unstable_revalidate"))throw Error(E.Eo);if(d.length)throw Error(Se("getStaticProps",d));if("notFound"in n&&n.notFound){if(e==="/404")throw Error('The /404 page can not return notFound in "getStaticProps", please remove it to continue!');r.isNotFound=!0}if("redirect"in n&&n.redirect&&typeof n.redirect=="object"){if(Te(n.redirect,t,"getStaticProps"),V)throw Error(`\`redirect\` can not be returned from getStaticProps during prerendering (${t.url})
See more info here: https://nextjs.org/docs/messages/gsp-redirect-during-prerender`);n.props={__N_REDIRECT:n.redirect.destination,__N_REDIRECT_STATUS:(0,k.WW)(n.redirect)},n.redirect.basePath!==void 0&&(n.props.__N_REDIRECT_BASE_PATH=n.redirect.basePath),r.isRedirect=!0}if((m||V)&&!r.isNotFound&&!de(e,"getStaticProps",n.props))throw Error("invariant: getStaticProps did not return valid props. Please report this.");if("revalidate"in n)if(typeof n.revalidate=="number")if(Number.isInteger(n.revalidate)){if(n.revalidate<=0)throw Error(`A page's revalidate option can not be less than or equal to zero for ${t.url}. A revalidate option of zero means to revalidate after _every_ request, and implies stale data cannot be tolerated.

To never revalidate, you can set revalidate to \`false\` (only ran once at build-time).
To revalidate as soon as possible, you can set the value to \`1\`.`);n.revalidate>31536e3&&console.warn(`Warning: A page's revalidate option was set to more than a year for ${t.url}. This may have been done in error.
To only run getStaticProps at build-time and not revalidate at runtime, you can set \`revalidate\` to \`false\`!`)}else throw Error(`A page's revalidate option must be seconds expressed as a natural number for ${t.url}. Mixed numbers, such as '${n.revalidate}', cannot be used.
Try changing the value to '${Math.ceil(n.revalidate)}' or using \`Math.ceil()\` if you're computing the value.`);else if(n.revalidate===!0)n.revalidate=1;else if(n.revalidate===!1||n.revalidate===void 0)n.revalidate=!1;else throw Error(`A page's revalidate option must be seconds expressed as a natural number. Mixed numbers and strings cannot be used. Received '${JSON.stringify(n.revalidate)}' for ${t.url}`);else n.revalidate=!1;if(s.pageProps=Object.assign({},s.pageProps,"props"in n?n.props:void 0),r.revalidate="revalidate"in n?n.revalidate:void 0,r.pageData=s,r.isNotFound)return null}if(w&&(s[j.uY]=!0),w&&!O){let n,d=!1;try{n=await w({req:t,res:a,query:o,resolvedUrl:r.resolvedUrl,...q?{params:Dt}:void 0,...i!==!1?{preview:!0,previewData:i}:void 0,locales:r.locales,locale:r.locale,defaultLocale:r.defaultLocale})}catch(g){throw(0,ot.Z)(g)&&g.code==="ENOENT"&&delete g.code,g}if(n==null)throw Error(E.Lx);n.props instanceof Promise&&(d=!0);let f=Object.keys(n).filter(g=>g!=="props"&&g!=="redirect"&&g!=="notFound");if(n.unstable_notFound)throw Error(`unstable_notFound has been renamed to notFound, please update the field to continue. Page: ${e}`);if(n.unstable_redirect)throw Error(`unstable_redirect has been renamed to redirect, please update the field to continue. Page: ${e}`);if(f.length)throw Error(Se("getServerSideProps",f));if("notFound"in n&&n.notFound){if(e==="/404")throw Error('The /404 page can not return notFound in "getStaticProps", please remove it to continue!');return r.isNotFound=!0,null}if("redirect"in n&&typeof n.redirect=="object"&&(Te(n.redirect,t,"getServerSideProps"),n.props={__N_REDIRECT:n.redirect.destination,__N_REDIRECT_STATUS:(0,k.WW)(n.redirect)},n.redirect.basePath!==void 0&&(n.props.__N_REDIRECT_BASE_PATH=n.redirect.basePath),r.isRedirect=!0),d&&(n.props=await n.props),(m||V)&&!de(e,"getServerSideProps",n.props))throw Error("invariant: getServerSideProps did not return valid props. Please report this.");s.pageProps=Object.assign({},s.pageProps,n.props),r.pageData=s}if(Ft&&!b||r.isRedirect)return H.Z.fromStatic(JSON.stringify(s));if(O&&(s.pageProps={}),(0,he.aC)(a)&&!b)return null;let T=D;if(C&&q){let n=(0,nt.s)((0,at.y)(e));n in T.pages&&(T={...T,pages:{...T.pages,[n]:[...T.pages[n],...T.lowPriorityFiles.filter(d=>d.includes("_buildManifest"))]},lowPriorityFiles:T.lowPriorityFiles.filter(d=>!d.includes("_buildManifest"))})}let De=({children:n})=>u.createElement("div",{id:"__next"},n),Ie=Nt!==!0,Ht=async()=>{let n,d,f,g=I[j.wU];if(I.getInitialProps&&!g)throw Error("`getInitialProps` in Document component is not supported with the Edge Runtime.");if(I.getInitialProps)if(g)I=g;else throw Error("`getInitialProps` in Document component is not supported with React Server Components.");let re=(x,L)=>z.err&&xe?u.createElement(De,null,u.createElement(xe,{error:z.err})):u.createElement(De,null,u.createElement(Fe,null,_e(x||R,L||y,{...s,router:S}))),ae=async(x,L)=>{let Be=re(x,L);return await ut({ReactDOMServer:le,element:Be,streamOptions:{onError(oe){if(oe?.digest==="DYNAMIC_SERVER_USAGE")return oe.digest}}})},ne=(x,L)=>ht(x,{suffix:L,dataStream:void 0,generateStaticHTML:Ie,getServerInsertedHTML:async()=>Pe(Bt()),serverInsertedHTMLToHead:!1});{let x=await ae(R,y);n=L=>ne(x,L),d={}}let{docProps:We}=d||{},rr=x=>I();return f=A.styles(),A.flush(),{bodyResult:n,documentElement:rr,head:Ce,headTags:[],styles:f}},N=await Ht();if(!N)return null;let K=new Set,qe=new Set;for(let n of Ae){let d=Lt[n];d&&(K.add(d.id),d.files.forEach(f=>{qe.add(f)}))}let Ne=X.hybrid,{assetPrefix:ee,buildId:Jt,customServer:Zt,defaultLocale:Vt,disableOptimizedLoading:Gt,domainLocales:Qt,locale:je,locales:Xt,runtimeConfig:Yt}=r,ke={__NEXT_DATA__:{props:s,page:e,query:o,buildId:Jt,assetPrefix:ee===""?void 0:ee,runtimeConfig:Yt,nextExport:Wt===!0||void 0,autoExport:C===!0||void 0,isFallback:O,dynamicIds:K.size===0?void 0:Array.from(K),err:r.err?Ct(m,r.err):void 0,gsp:!!J||void 0,gssp:!!w||void 0,customServer:Zt,gip:!!_||void 0,appGip:!G||void 0,locale:je,locales:Xt,defaultLocale:Vt,domainLocales:Qt,isPreview:l===!0||void 0,notFoundSrcPage:$e&&m?$e:void 0},buildManifest:T,docComponentsRendered:{},dangerousAsPath:S.asPath,canonicalBase:!r.ampPath&&(0,ge.OX)(t,"__nextStrippedLocale")?`${r.canonicalBase||""}/${r.locale}`:r.canonicalBase,ampPath:v,inAmpMode:!1,isDevelopment:!!m,hybridAmp:Ne,dynamicImports:Array.from(qe),assetPrefix:ee,unstable_runtimeJS:h.unstable_runtimeJS,unstable_JsPreload:h.unstable_JsPreload,devOnlyCacheBusterQueryString:qt,scriptLoader:Oe,locale:je,disableOptimizedLoading:Gt,head:N.head,headTags:N.headTags,styles:N.styles,crossOrigin:r.crossOrigin,optimizeCss:r.optimizeCss,optimizeFonts:r.optimizeFonts,nextScriptWorkers:r.nextScriptWorkers,runtime:kt,largePageDataBytes:r.largePageDataBytes,fontLoaderManifest:r.fontLoaderManifest},Kt=u.createElement(ce.C.Provider,{value:X},u.createElement(rt.X.Provider,{value:ke},N.documentElement(ke))),Me=await Pe(Kt),[er,tr]=Me.split("<next-js-internal-body-render-target></next-js-internal-body-render-target>"),te=[];Me.startsWith(Ee)||te.push(Ee),te.push(er);let ze=[st(te),await N.bodyResult(tr)],Ue=n=>se(e,n,r,{inAmpMode:!1,hybridAmp:Ne});if(Ie){let n=await be(ye(ze)),d=await Ue(n);return new H.Z(d)}return new H.Z(ye(ze).pipeThrough(we(Ue)))}};export{or as default};
