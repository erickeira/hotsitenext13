var d=(i,r,s)=>{"use strict";function l(t,c){let o,e=t.split("/");return(c||[]).some(a=>!!e[1]&&e[1].toLowerCase()===a.toLowerCase()&&(o=a,e.splice(1,1),t=e.join("/")||"/",!0)),{pathname:t,detectedLocale:o}}s.d(r,{h:()=>l})};export{d as default};