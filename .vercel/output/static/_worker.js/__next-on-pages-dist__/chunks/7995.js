var m=(h,i,a)=>{"use strict";a.d(i,{t:()=>u});var p=a(1768);function u({re:f,groups:n}){return l=>{let c=f.exec(l);if(!c)return!1;let t=r=>{try{return decodeURIComponent(r)}catch{throw new p._9("failed to decode param")}},d={};return Object.keys(n).forEach(r=>{let o=n[r],e=c[o.pos];e!==void 0&&(d[r]=~e.indexOf("/")?e.split("/").map(s=>t(s)):o.repeat?[t(e)]:t(e))}),d}}};export{m as default};
