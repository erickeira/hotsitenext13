var l=(s,t,u)=>{"use strict";function o(e){var n,f,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(f=o(e[n]))&&(r&&(r+=" "),r+=f);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function a(){for(var e,n,f=0,r="";f<arguments.length;)(e=arguments[f++])&&(n=o(e))&&(r&&(r+=" "),r+=n);return r}u.d(t,{Z:()=>i});let i=a};export{l as default};
