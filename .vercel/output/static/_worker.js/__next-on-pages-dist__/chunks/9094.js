var M=(I,y,u)=>{"use strict";u.d(y,{default:()=>x,U:()=>f});var g=u(872),o=u(7294);let i=()=>{},v=()=>{};function k(t){var n;let{headManager:e,reduceComponentsToState:r}=t;function a(){if(e&&e.mountedInstances){let l=o.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));e.updateHead(r(l,t))}}return e==null||(n=e.mountedInstances)==null||n.add(t.children),a(),i(()=>{var l;return e==null||(l=e.mountedInstances)==null||l.add(t.children),()=>{var d;e==null||(d=e.mountedInstances)==null||d.delete(t.children)}}),i(()=>(e&&(e._pendingUpdate=a),()=>{e&&(e._pendingUpdate=a)})),v(()=>(e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null),()=>{e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null)})),null}var w=u(7400),S=u(6395);function U({ampFirst:t=!1,hybrid:n=!1,hasQuery:e=!1}={}){return t||n&&e}function f(t=!1){let n=[o.createElement("meta",{charSet:"utf-8"})];return t||n.push(o.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function _(t,n){return typeof n=="string"||typeof n=="number"?t:n.type===o.Fragment?t.concat(o.Children.toArray(n.props.children).reduce((e,r)=>typeof r=="string"||typeof r=="number"?e:e.concat(r),[])):t.concat(n)}let h=["name","httpEquiv","charSet","itemProp"];function C(){let t=new Set,n=new Set,e=new Set,r={};return a=>{let l=!0,d=!1;if(a.key&&typeof a.key!="number"&&a.key.indexOf("$")>0){d=!0;let s=a.key.slice(a.key.indexOf("$")+1);t.has(s)?l=!1:t.add(s)}switch(a.type){case"title":case"base":n.has(a.type)?l=!1:n.add(a.type);break;case"meta":for(let s=0,A=h.length;s<A;s++){let p=h[s];if(a.props.hasOwnProperty(p))if(p==="charSet")e.has(p)?l=!1:e.add(p);else{let m=a.props[p],c=r[p]||new Set;(p!=="name"||!d)&&c.has(m)?l=!1:(c.add(m),r[p]=c)}}}return l}}function b(t,n){let{inAmpMode:e}=n;return t.reduce(_,[]).reverse().concat(f(e).reverse()).filter(C()).reverse().map((r,a)=>{let l=r.key||a;if(!e&&r.type==="link"&&r.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(d=>r.props.href.startsWith(d))){let d=(0,g.Z)({},r.props||{});return d["data-href"]=d.href,d.href=void 0,d["data-optimized-fonts"]=!0,o.cloneElement(r,d)}return o.cloneElement(r,{key:l})})}function E({children:t}){let n=(0,o.useContext)(w.C),e=(0,o.useContext)(S.V);return o.createElement(k,{reduceComponentsToState:b,headManager:e,inAmpMode:U(n)},t)}let x=E};export{M as default};