var ve=(ye,Q,E)=>{"use strict";E.d(Q,{default:()=>ue});var x=E(872),q=E(6119),l=E(7294),Y=E(9094);function ee({widthInt:e,heightInt:i,blurWidth:a,blurHeight:n,blurDataURL:t}){let s=a||e,o=n||i,d=t.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?`%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${s} ${o}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${a&&n?"1":"20"}'/%3E${d}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${t}'/%3E%3C/svg%3E`:`%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='${t}'/%3E%3C/svg%3E`}var te=E(7810),ie=E(1323);function W({config:e,src:i,width:a,quality:n}){return`${e.path}?url=${encodeURIComponent(i)}&w=${a}&q=${n||75}`}W.__next_img_default=!0;let re={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function Z(e){return e.default!==void 0}function oe(e){return e.src!==void 0}function le(e){return typeof e=="object"&&(Z(e)||oe(e))}function ne({deviceSizes:e,allSizes:i},a,n){if(n){let s=/(^|\s)(1?\d?\d)vw/g,o=[];for(let d;d=s.exec(n);d)o.push(parseInt(d[2]));if(o.length){let d=.01*Math.min(...o);return{widths:i.filter(u=>u>=e[0]*d),kind:"w"}}return{widths:i,kind:"w"}}return typeof a!="number"?{widths:e,kind:"w"}:{widths:[...new Set([a,2*a].map(s=>i.find(o=>o>=s)||i[i.length-1]))],kind:"x"}}function ae({config:e,src:i,unoptimized:a,width:n,quality:t,sizes:s,loader:o}){if(a)return{src:i,srcSet:void 0,sizes:void 0};let{widths:d,kind:u}=ne(e,n,s),p=d.length-1;return{sizes:s||u!=="w"?s:"100vw",srcSet:d.map((h,w)=>`${o({config:e,src:i,quality:t,width:h})} ${u==="w"?h:w+1}${u}`).join(", "),src:o({config:e,src:i,quality:t,width:d[p]})}}function T(e){return typeof e=="number"||e===void 0?e:typeof e=="string"&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function F(e,i,a,n,t,s,o){if(!e||e["data-loaded-src"]===i)return;e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentNode){if(a==="blur"&&s(!0),n?.current){let u=new Event("load");Object.defineProperty(u,"target",{writable:!1,value:e});let p=!1,h=!1;n.current((0,x.Z)({},u,{nativeEvent:u,currentTarget:e,target:e,isDefaultPrevented:()=>p,isPropagationStopped:()=>h,persist:()=>{},preventDefault:()=>{p=!0,u.preventDefault()},stopPropagation:()=>{h=!0,u.stopPropagation()}}))}t?.current&&t.current(e)}})}globalThis.__NEXT_IMAGE_IMPORTED=!0;let se=(0,l.forwardRef)((e,i)=>{var{imgAttributes:a,heightInt:n,widthInt:t,qualityInt:s,className:o,imgStyle:d,blurStyle:u,isLazy:p,fill:h,placeholder:w,loading:I,srcString:b,config:A,unoptimized:C,loader:k,onLoadRef:R,onLoadingCompleteRef:y,setBlurComplete:f,setShowAltText:D,onLoad:M,onError:L}=e,U=(0,q.Z)(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return I=p?"lazy":I,l.createElement(l.Fragment,null,l.createElement("img",Object.assign({},U,a,{width:t,height:n,decoding:"async","data-nimg":h?"fill":"1",className:o,loading:I,style:(0,x.Z)({},d,u),ref:(0,l.useCallback)(c=>{i&&(typeof i=="function"?i(c):typeof i=="object"&&(i.current=c)),c&&(L&&(c.src=c.src),c.complete&&F(c,b,w,R,y,f,C))},[b,w,R,y,f,L,C,i]),onLoad:c=>{let P=c.currentTarget;F(P,b,w,R,y,f,C)},onError:c=>{D(!0),w==="blur"&&f(!0),L&&L(c)}})))}),de=(0,l.forwardRef)((e,i)=>{let a,n;var{src:t,sizes:s,unoptimized:o=!1,priority:d=!1,loading:u,className:p,quality:h,width:w,height:I,fill:b,style:A,onLoad:C,onLoadingComplete:k,placeholder:R="empty",blurDataURL:y,layout:f,objectFit:D,objectPosition:M,lazyBoundary:L,lazyRoot:U}=e,c=(0,q.Z)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let P=(0,l.useContext)(ie.z),j=(0,l.useMemo)(()=>{let r=re||P||te.z,g=[...r.deviceSizes,...r.imageSizes].sort((z,B)=>z-B),_=r.deviceSizes.sort((z,B)=>z-B);return(0,x.Z)({},r,{allSizes:g,deviceSizes:_})},[P]),N=c,$=N.loader||W;delete N.loader;let G="__next_img_default"in $;if(G){if(j.loader==="custom")throw Error(`Image with src "${t}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let r=$;$=g=>{let{config:_}=g,z=(0,q.Z)(g,["config"]);return r(z)}}if(f){f==="fill"&&(b=!0);let r={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},g={responsive:"100vw",fill:"100vw"},_=r[f];_&&(A=(0,x.Z)({},A,_));let z=g[f];z&&!s&&(s=z)}let H="",m=T(w),v=T(I);if(le(t)){let r=Z(t)?t.default:t;if(!r.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(r)}`);if(!r.height||!r.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(r)}`);if(a=r.blurWidth,n=r.blurHeight,y=y||r.blurDataURL,H=r.src,!b)if(m||v){if(m&&!v){let g=m/r.width;v=Math.round(r.height*g)}else if(!m&&v){let g=v/r.height;m=Math.round(r.width*g)}}else m=r.width,v=r.height}let V=!d&&(u==="lazy"||u===void 0);((t=typeof t=="string"?t:H).startsWith("data:")||t.startsWith("blob:"))&&(o=!0,V=!1),j.unoptimized&&(o=!0),G&&t.endsWith(".svg")&&!j.dangerouslyAllowSVG&&(o=!0);let[ce,ge]=(0,l.useState)(!1),[he,fe]=(0,l.useState)(!1),J=T(h),O=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:M}:{},he?{}:{color:"transparent"},A),me=R==="blur"&&y&&!ce?{backgroundSize:O.objectFit||"cover",backgroundPosition:O.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:`url("data:image/svg+xml;charset=utf-8,${ee({widthInt:m,heightInt:v,blurWidth:a,blurHeight:n,blurDataURL:y})}")`}:{},S=ae({config:j,src:t,unoptimized:o,width:m,quality:J,sizes:s,loader:$}),pe=t,we={imageSrcSet:S.srcSet,imageSizes:S.sizes,crossOrigin:N.crossOrigin},X=(0,l.useRef)(C);(0,l.useEffect)(()=>{X.current=C},[C]);let K=(0,l.useRef)(k);(0,l.useEffect)(()=>{K.current=k},[k]);let be=(0,x.Z)({isLazy:V,imgAttributes:S,heightInt:v,widthInt:m,qualityInt:J,className:p,imgStyle:O,blurStyle:me,loading:u,config:j,fill:b,unoptimized:o,placeholder:R,loader:$,srcString:pe,onLoadRef:X,onLoadingCompleteRef:K,setBlurComplete:ge,setShowAltText:fe},N);return l.createElement(l.Fragment,null,l.createElement(se,Object.assign({},be,{ref:i})),d?l.createElement(Y.default,null,l.createElement("link",Object.assign({key:"__nimg-"+S.src+S.srcSet+S.sizes,rel:"preload",as:"image",href:S.srcSet?void 0:S.src},we))):null)}),ue=de};export{ve as default};