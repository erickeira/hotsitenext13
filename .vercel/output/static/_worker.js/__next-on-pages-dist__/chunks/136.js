var i=(c,s,a)=>{"use strict";function l(t,n){let o,e=t.split("/");return(n||[]).some(r=>!!e[1]&&e[1].toLowerCase()===r.toLowerCase()&&(o=r,e.splice(1,1),t=e.join("/")||"/",!0)),{pathname:t,detectedLocale:o}}a.d(s,{h:()=>l})};export{i as default};
