var L=(v,i,e)=>{"use strict";e.d(i,{u:()=>h});var w=e(1768),n=e(9782);function h(t,a){let r=new URL("http://n"),s=a?new URL(a,r):t.startsWith(".")?new URL("http://n"):r,{pathname:o,searchParams:u,search:c,hash:l,href:f,origin:p}=new URL(t,s);if(p!==r.origin)throw Error(`invariant: invalid relative URL, router received ${t}`);return{pathname:o,query:(0,n.u5)(u),search:c,hash:l,href:f.slice(r.origin.length)}}};export{L as default};
