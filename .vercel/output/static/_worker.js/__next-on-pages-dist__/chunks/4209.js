var ve=(ye,K,E)=>{"use strict";E.d(K,{default:()=>ce});var x=E(872),O=E(6119),n=E(7294),Q=E(8945);function ee({widthInt:e,heightInt:i,blurWidth:d,blurHeight:a,blurDataURL:t,objectFit:c}){let o=d||e,s=a||i,l=t.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?`%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${o} ${s}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${d&&a?"1":"20"}'/%3E${l}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${t}'/%3E%3C/svg%3E`:`%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='${c==="contain"?"xMidYMid":c==="cover"?"xMidYMid slice":"none"}' x='0' y='0' height='100%25' width='100%25' href='${t}'/%3E%3C/svg%3E`}var te=E(3367),ie=E(235);function T({config:e,src:i,width:d,quality:a}){return`${e.path}?url=${encodeURIComponent(i)}&w=${d}&q=${a||75}`}T.__next_img_default=!0;let re={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function B(e){return e.default!==void 0}function oe(e){return e.src!==void 0}function ne(e){return typeof e=="object"&&(B(e)||oe(e))}function le({deviceSizes:e,allSizes:i},d,a){if(a){let c=/(^|\s)(1?\d?\d)vw/g,o=[];for(let s;s=c.exec(a);s)o.push(parseInt(s[2]));if(o.length){let s=.01*Math.min(...o);return{widths:i.filter(l=>l>=e[0]*s),kind:"w"}}return{widths:i,kind:"w"}}return typeof d!="number"?{widths:e,kind:"w"}:{widths:[...new Set([d,2*d].map(c=>i.find(o=>o>=c)||i[i.length-1]))],kind:"x"}}function ae({config:e,src:i,unoptimized:d,width:a,quality:t,sizes:c,loader:o}){if(d)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=le(e,a,c),p=s.length-1;return{sizes:c||l!=="w"?c:"100vw",srcSet:s.map((h,w)=>`${o({config:e,src:i,quality:t,width:h})} ${l==="w"?h:w+1}${l}`).join(", "),src:o({config:e,src:i,quality:t,width:s[p]})}}function D(e){return typeof e=="number"||e===void 0?e:typeof e=="string"&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function W(e,i,d,a,t,c,o){if(!e||e["data-loaded-src"]===i)return;e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if(d==="blur"&&c(!0),a?.current){let l=new Event("load");Object.defineProperty(l,"target",{writable:!1,value:e});let p=!1,h=!1;a.current((0,x.Z)({},l,{nativeEvent:l,currentTarget:e,target:e,isDefaultPrevented:()=>p,isPropagationStopped:()=>h,persist:()=>{},preventDefault:()=>{p=!0,l.preventDefault()},stopPropagation:()=>{h=!0,l.stopPropagation()}}))}t?.current&&t.current(e)}})}globalThis.__NEXT_IMAGE_IMPORTED=!0;let se=(0,n.forwardRef)((e,i)=>{var{imgAttributes:d,heightInt:a,widthInt:t,qualityInt:c,className:o,imgStyle:s,blurStyle:l,isLazy:p,fill:h,placeholder:w,loading:j,srcString:b,config:_,unoptimized:C,loader:k,onLoadRef:R,onLoadingCompleteRef:y,setBlurComplete:f,setShowAltText:F,onLoad:Z,onError:I}=e,U=(0,O.Z)(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return j=p?"lazy":j,n.createElement(n.Fragment,null,n.createElement("img",Object.assign({},U,{loading:j,width:t,height:a,decoding:"async","data-nimg":h?"fill":"1",className:o,style:(0,x.Z)({},s,l)},d,{ref:(0,n.useCallback)(u=>{i&&(typeof i=="function"?i(u):typeof i=="object"&&(i.current=u)),u&&(I&&(u.src=u.src),u.complete&&W(u,b,w,R,y,f,C))},[b,w,R,y,f,I,C,i]),onLoad:u=>{let P=u.currentTarget;W(P,b,w,R,y,f,C)},onError:u=>{F(!0),w==="blur"&&f(!0),I&&I(u)}})))}),de=(0,n.forwardRef)((e,i)=>{let d,a;var{src:t,sizes:c,unoptimized:o=!1,priority:s=!1,loading:l,className:p,quality:h,width:w,height:j,fill:b,style:_,onLoad:C,onLoadingComplete:k,placeholder:R="empty",blurDataURL:y,layout:f,objectFit:F,objectPosition:Z,lazyBoundary:I,lazyRoot:U}=e,u=(0,O.Z)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let P=(0,n.useContext)(ie.z),L=(0,n.useMemo)(()=>{let r=re||P||te.z,g=[...r.deviceSizes,...r.imageSizes].sort((S,M)=>S-M),A=r.deviceSizes.sort((S,M)=>S-M);return(0,x.Z)({},r,{allSizes:g,deviceSizes:A})},[P]),q=u,$=q.loader||T;delete q.loader;let G="__next_img_default"in $;if(G){if(L.loader==="custom")throw Error(`Image with src "${t}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let r=$;$=g=>{let{config:A}=g,S=(0,O.Z)(g,["config"]);return r(S)}}if(f){f==="fill"&&(b=!0);let r={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},g={responsive:"100vw",fill:"100vw"},A=r[f];A&&(_=(0,x.Z)({},_,A));let S=g[f];S&&!c&&(c=S)}let H="",m=D(w),v=D(j);if(ne(t)){let r=B(t)?t.default:t;if(!r.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(r)}`);if(!r.height||!r.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(r)}`);if(d=r.blurWidth,a=r.blurHeight,y=y||r.blurDataURL,H=r.src,!b)if(m||v){if(m&&!v){let g=m/r.width;v=Math.round(r.height*g)}else if(!m&&v){let g=v/r.height;m=Math.round(r.width*g)}}else m=r.width,v=r.height}let V=!s&&(l==="lazy"||l===void 0);((t=typeof t=="string"?t:H).startsWith("data:")||t.startsWith("blob:"))&&(o=!0,V=!1),L.unoptimized&&(o=!0),G&&t.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(o=!0);let[ue,ge]=(0,n.useState)(!1),[he,fe]=(0,n.useState)(!1),J=D(h),N=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:Z}:{},he?{}:{color:"transparent"},_),me=R==="blur"&&y&&!ue?{backgroundSize:N.objectFit||"cover",backgroundPosition:N.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:`url("data:image/svg+xml;charset=utf-8,${ee({widthInt:m,heightInt:v,blurWidth:d,blurHeight:a,blurDataURL:y,objectFit:N.objectFit})}")`}:{},z=ae({config:L,src:t,unoptimized:o,width:m,quality:J,sizes:c,loader:$}),pe=t,we={imageSrcSet:z.srcSet,imageSizes:z.sizes,crossOrigin:q.crossOrigin},Y=(0,n.useRef)(C);(0,n.useEffect)(()=>{Y.current=C},[C]);let X=(0,n.useRef)(k);(0,n.useEffect)(()=>{X.current=k},[k]);let be=(0,x.Z)({isLazy:V,imgAttributes:z,heightInt:v,widthInt:m,qualityInt:J,className:p,imgStyle:N,blurStyle:me,loading:l,config:L,fill:b,unoptimized:o,placeholder:R,loader:$,srcString:pe,onLoadRef:Y,onLoadingCompleteRef:X,setBlurComplete:ge,setShowAltText:fe},q);return n.createElement(n.Fragment,null,n.createElement(se,Object.assign({},be,{ref:i})),s?n.createElement(Q.default,null,n.createElement("link",Object.assign({key:"__nimg-"+z.src+z.srcSet+z.sizes,rel:"preload",as:"image",href:z.srcSet?void 0:z.src},we))):null)}),ce=de};export{ve as default};
