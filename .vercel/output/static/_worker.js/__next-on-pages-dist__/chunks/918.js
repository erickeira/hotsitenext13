var ue=(ae,P,f)=>{"use strict";f.d(P,{default:()=>re});var z=f(6119),i=f(7294),S=f(2956),U=f(8460),F=f(9745),G=f(1768),V=f(4708),Z=f(2233),$=f(1974),R=f(668);let x=typeof IntersectionObserver=="function",k=new Map,C=[];function q(e){let n,r={root:e.root||null,margin:e.rootMargin||""},t=C.find(c=>c.root===r.root&&c.margin===r.margin);if(t&&(n=k.get(t)))return n;let a=new Map,u=new IntersectionObserver(c=>{c.forEach(p=>{let v=a.get(p.target),s=p.isIntersecting||p.intersectionRatio>0;v&&s&&v(s)})},e);return n={id:r,observer:u,elements:a},C.push(r),k.set(r,n),n}function J(e,n,r){let{id:t,observer:a,elements:u}=q(r);return u.set(e,n),a.observe(e),function(){if(u.delete(e),a.unobserve(e),u.size===0){a.disconnect(),k.delete(t);let c=C.findIndex(p=>p.root===t.root&&p.margin===t.margin);c>-1&&C.splice(c,1)}}}function Q({rootRef:e,rootMargin:n,disabled:r}){let t=r||!x,[a,u]=(0,i.useState)(!1),c=(0,i.useRef)(null),p=(0,i.useCallback)(s=>{c.current=s},[]);(0,i.useEffect)(()=>{if(x){if(t||a)return;let s=c.current;if(s&&s.tagName)return J(s,b=>b&&u(b),{root:e?.current,rootMargin:n})}else if(!a){let s=(0,R.K)(()=>u(!0));return()=>(0,R.G)(s)}},[t,n,e,a,c.current]);let v=(0,i.useCallback)(()=>{u(!1)},[]);return[p,a,v]}function W(e,n,r,t){return!1}var X=f(623);function Y(e){let n=e.currentTarget,r=n.getAttribute("target");return r&&r!=="_self"||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&e.nativeEvent.which===2}function ee(e,n,r,t,a,u,c,p,v,s){let{nodeName:E}=e.currentTarget;if(E.toUpperCase()==="A"&&(Y(e)||!v&&!(0,U.t)(r)))return;e.preventDefault();let g=()=>{"beforePopState"in n?n[a?"replace":"push"](r,t,{shallow:u,locale:p,scroll:c}):n[a?"replace":"push"](t||r,{forceOptimisticNavigation:!s})};v?i.startTransition(g):g()}function I(e){return typeof e=="string"?e:(0,F.CN)(e)}let te=i.forwardRef(function(e,n){let r,t,{href:a,as:u,children:c,prefetch:p,passHref:v,replace:s,shallow:E,scroll:b,locale:g,onClick:K,onMouseEnter:N,onTouchStart:O,legacyBehavior:h=!1}=e,oe=(0,z.Z)(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=c,h&&(typeof r=="string"||typeof r=="number")&&(r=i.createElement("a",null,r));let j=p!==!1,l=i.useContext(Z._),ne=i.useContext($.pk),w=l??ne,D=!l,{href:y,as:d}=i.useMemo(()=>{if(!l){let H=I(a);return{href:H,as:u?I(u):H}}let[o,T]=(0,S.c)(l,a,!0);return{href:o,as:u?(0,S.c)(l,u):T||o}},[l,a,u]),L=i.useRef(y),_=i.useRef(d);h&&(t=i.Children.only(r));let m=h?t&&typeof t=="object"&&t.ref:n,[A,le,B]=Q({rootMargin:"200px"}),ie=i.useCallback(o=>{(_.current!==d||L.current!==y)&&(B(),_.current=d,L.current=y),A(o),m&&(typeof m=="function"?m(o):typeof m=="object"&&(m.current=o))},[d,m,y,B,A]);i.useEffect(()=>{},[d,y,le,g,j,l?.locale,w,D]);let M={ref:ie,onClick(o){h||typeof K!="function"||K(o),h&&t.props&&typeof t.props.onClick=="function"&&t.props.onClick(o),w&&!o.defaultPrevented&&ee(o,w,y,d,s,E,b,g,D,j)},onMouseEnter(o){h||typeof N!="function"||N(o),h&&t.props&&typeof t.props.onMouseEnter=="function"&&t.props.onMouseEnter(o)},onTouchStart(o){h||typeof O!="function"||O(o),h&&t.props&&typeof t.props.onTouchStart=="function"&&t.props.onTouchStart(o)}};if((0,G.sD)(d))M.href=d;else if(!h||v||t.type==="a"&&!("href"in t.props)){let o=g!==void 0?g:l?.locale,T=l?.isLocaleDomain&&W(d,o,l?.locales,l?.domainLocales);M.href=T||(0,X.n)((0,V.b)(d,o,l?.defaultLocale))}return h?i.cloneElement(t,M):i.createElement("a",Object.assign({},oe,M),r)}),re=te};export{ue as default};