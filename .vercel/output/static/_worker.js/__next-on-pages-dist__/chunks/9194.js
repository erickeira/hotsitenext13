var m=($,i,h)=>{"use strict";h.d(i,{CD:()=>f,CN:()=>l});var u=h(261);let d=/https?|ftp|gopher|file/;function l(e){let{auth:p,hostname:c}=e,t=e.protocol||"",n=e.pathname||"",a=e.hash||"",r=e.query||"",o=!1;p=p?encodeURIComponent(p).replace(/%3A/i,":")+"@":"",e.host?o=p+e.host:c&&(o=p+(~c.indexOf(":")?`[${c}]`:c),e.port&&(o+=":"+e.port)),r&&typeof r=="object"&&(r=String(u.Nn(r)));let s=e.search||r&&`?${r}`||"";return t&&!t.endsWith(":")&&(t+=":"),e.slashes||(!t||d.test(t))&&o!==!1?(o="//"+(o||""),n&&n[0]!=="/"&&(n="/"+n)):o||(o=""),a&&a[0]!=="#"&&(a="#"+a),s&&s[0]!=="?"&&(s="?"+s),`${t}${o}${n=n.replace(/[?#]/g,encodeURIComponent)}${s=s.replace("#","%23")}${a}`}function f(e){return l(e)}};export{m as default};
