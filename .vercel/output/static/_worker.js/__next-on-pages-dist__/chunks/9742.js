var B=(x,a)=>{"use strict";a.byteLength=p,a.toByteArray=l,a.fromByteArray=j;for(var c=[],h=[],v=typeof Uint8Array<"u"?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,y=i.length;d<y;++d)c[d]=i[d],h[i.charCodeAt(d)]=d;function C(r){var n=r.length;if(n%4>0)throw Error("Invalid string. Length must be a multiple of 4");var e=r.indexOf("=");e===-1&&(e=n);var o=e===n?0:4-e%4;return[e,o]}function p(r){var n=C(r),e=n[0],o=n[1];return(e+o)*3/4-o}function g(r,n,e){return(n+e)*3/4-e}function l(r){var n,e,o=C(r),t=o[0],f=o[1],u=new v(g(r,t,f)),A=0,w=f>0?t-4:t;for(e=0;e<w;e+=4)n=h[r.charCodeAt(e)]<<18|h[r.charCodeAt(e+1)]<<12|h[r.charCodeAt(e+2)]<<6|h[r.charCodeAt(e+3)],u[A++]=n>>16&255,u[A++]=n>>8&255,u[A++]=255&n;return f===2&&(n=h[r.charCodeAt(e)]<<2|h[r.charCodeAt(e+1)]>>4,u[A++]=255&n),f===1&&(n=h[r.charCodeAt(e)]<<10|h[r.charCodeAt(e+1)]<<4|h[r.charCodeAt(e+2)]>>2,u[A++]=n>>8&255,u[A++]=255&n),u}function m(r){return c[r>>18&63]+c[r>>12&63]+c[r>>6&63]+c[63&r]}function b(r,n,e){for(var o=[],t=n;t<e;t+=3)o.push(m((r[t]<<16&16711680)+(r[t+1]<<8&65280)+(255&r[t+2])));return o.join("")}function j(r){for(var n,e=r.length,o=e%3,t=[],f=0,u=e-o;f<u;f+=16383)t.push(b(r,f,f+16383>u?u:f+16383));return o===1?t.push(c[(n=r[e-1])>>2]+c[n<<4&63]+"=="):o===2&&t.push(c[(n=(r[e-2]<<8)+r[e-1])>>10]+c[n>>4&63]+c[n<<2&63]+"="),t.join("")}h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63};export{B as default};
