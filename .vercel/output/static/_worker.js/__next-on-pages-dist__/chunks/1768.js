var P=(A,c,o)=>{"use strict";o.d(c,{At:()=>E,Ax:()=>m,Dp:()=>i,Gf:()=>s,KM:()=>w,ST:()=>x,U3:()=>h,_9:()=>$,aC:()=>a,gf:()=>p,nq:()=>l,sD:()=>g});var f=o(7568);function p(t){let e,n=!1;return(...r)=>(n||(n=!0,e=t(...r)),e)}let d=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,g=t=>d.test(t);function i(){let{protocol:t,hostname:e,port:n}=window.location;return`${t}//${e}${n?":"+n:""}`}function m(){let{href:t}=window.location,e=i();return t.substring(e.length)}function s(t){return typeof t=="string"?t:t.displayName||t.name||"Unknown"}function a(t){return t.finished||t.headersSent}function h(t){let e=t.split("?");return e[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(e[1]?`?${e.slice(1).join("?")}`:"")}function l(t,e){return u.apply(this,arguments)}function u(){return(u=(0,f.Z)(function*(t,e){let n=e.res||e.ctx&&e.ctx.res;if(!t.getInitialProps)return e.ctx&&e.Component?{pageProps:yield l(e.Component,e.ctx)}:{};let r=yield t.getInitialProps(e);if(n&&a(n))return r;if(!r){let v=`"${s(t)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`;throw Error(v)}return r})).apply(this,arguments)}let y=typeof performance<"u",x=y&&["mark","measure","getEntriesByName"].every(t=>typeof performance[t]=="function");class $ extends Error{}class w extends Error{}class E extends Error{constructor(e,n){super(),this.message=`Failed to load static file for page: ${e} ${n}`}}};export{P as default};
