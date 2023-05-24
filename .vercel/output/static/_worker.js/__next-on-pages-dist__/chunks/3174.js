var J=(Z,h,o)=>{"use strict";o.r(h),o.d(h,{ComponentMod:()=>W,default:()=>U});var l={};o.r(l),o.d(l,{default:()=>D,getServerSideProps:()=>E});var u=o(6428),j=o(4763),_=o(1106),b=o(5368),e=o(5893),n=o(3805),w=o(3990),y=o(6733),i=o.n(y),N=o(2676),C=o(423),S=o(6982),R=o.n(S),q=o(7717),T=o(8357);function M(a){return(0,T.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(a)}var k=o(7294),F=o(1163),B=o(9352),A=o(9008);function D({data:a}){var d,c;let[m,r]=(0,k.useState)(!1),v=()=>r(!m),g=()=>r(!1),{query:x}=(0,F.useRouter)(),{dadosanuncio:s,dadosloja:p}=a,f=parseInt(s.vei_preco),V=f.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),G=()=>(0,e.jsxs)("div",{className:i().envolveAnoCorCombustivelKm,children:[(0,e.jsx)("div",{className:i().anoCorCombustivelKm,style:{borderTopLeftRadius:5,borderBottomLeftRadius:5,borderRightWidth:0,width:s.vei_km?"25%":"33%"},children:s.vei_ano}),(0,e.jsx)("div",{className:i().anoCorCombustivelKm,style:{borderRightWidth:0,width:s.vei_km?"25%":"33%"},children:s.cor_nome}),(0,e.jsx)("div",{className:i().anoCorCombustivelKm,style:s.vei_km?{borderRightWidth:0,width:"25%"}:{width:"33%",borderTopRightRadius:5,borderBottomRightRadius:5},children:s.com_nome}),s.vei_km?(0,e.jsxs)("div",{className:i().anoCorCombustivelKm,style:{borderTopRightRadius:5,borderBottomRightRadius:5,width:"25%"},children:[s.vei_km," km"]}):null]}),H=()=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:i().opcionaisDescricaoObservacao,style:{display:s.vei_opcoes||s.vei_descricao||s.vei_observacoes?void 0:"none"},children:[s.vei_opcoes&&(0,e.jsxs)("div",{className:i().containerOpcionais,children:[(0,e.jsx)("strong",{children:"Opcionais:"}),(0,e.jsx)("div",{className:i().opcionaisGrid,children:s.vei_opcoes&&s.vei_opcoes.map(t=>(0,e.jsx)("div",{style:{padding:2},children:(0,e.jsxs)("span",{className:i().opcionais,children:[(0,e.jsx)(M,{}),t]},t)},t))})]}),s.vei_descricao&&(0,e.jsxs)("div",{className:i().descricao,children:[(0,e.jsx)("strong",{children:"Descri\xE7\xE3o:"}),(0,e.jsx)("p",{children:s.vei_descricao})]}),s.vei_observacoes&&(0,e.jsxs)("div",{className:i().observacoes,children:[(0,e.jsx)("strong",{children:"Observa\xE7\xF5es:"}),(0,e.jsx)("p",{children:s.vei_observacoes})]})]})});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(A.default,{children:[(0,e.jsx)("meta",{property:"og:type",content:"product"}),(0,e.jsx)("meta",{property:"og:title",content:`${s.mar_nome} ${s.vei_modelo} | ${p[0].loj_nome}`}),(0,e.jsx)("meta",{property:"og:description",content:`${s.vei_ano} | ${s.cor_nome} | ${s.com_nome} ${s.vei_km!=""?"| KM":""} ${s.vei_km}`}),(0,e.jsx)("meta",{property:"og:image",content:s.fotos[0]?`${n.wB}${s.fotos[0]}`:"/img/sem-foto.jpg"}),(0,e.jsx)("meta",{property:"og:image:width",content:"400"}),(0,e.jsx)("meta",{property:"og:image:height",content:"400"}),(0,e.jsx)("title",{children:`${s.mar_nome} ${s.vei_modelo} | ${p[0].loj_nome}`})]}),(0,e.jsxs)("div",{className:i().container,children:[(0,e.jsxs)("div",{className:i().marcaModeloECompartilhar,children:[(0,e.jsxs)("div",{className:i().marcaComModelo,style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)("small",{style:{color:"#00000070"},children:s.mar_nome}),(0,e.jsx)("b",{children:s.vei_modelo})]}),(0,e.jsxs)("div",{className:i().dropdown,children:[(0,e.jsxs)("button",{onClick:v,className:i().dropbtn,children:[(0,e.jsx)(w.TRZ,{})," Compartilhar"]}),(0,e.jsxs)("div",{className:`${i().dropdownContent} ${m&&i().show}`,onBlur:g,children:[(0,e.jsx)("a",{target:"_blank",href:`https://api.whatsapp.com/send?text=www.nomedosite.com.br/noticia/${x.id}`,children:"WhatsApp"}),(0,e.jsx)("a",{target:"_blank",href:`https://www.facebook.com/sharer/sharer.php?u=https://www.nomedosite.com.br/noticia/${x.id}`,children:"Facebook"})]})]})]}),(0,e.jsxs)("div",{className:i().envolveImagensComDados,children:[(0,e.jsx)("div",{className:i().galeriaImagens,children:s.fotos.length?(0,e.jsx)(R(),{width:200,height:200,showFullscreenButton:!1,items:((d=s.fotos)===null||d===void 0?void 0:d.map(t=>({original:`${n.wB}${t.replace("pd","")}`,thumbnail:`${n.wB}redim/200/${t}`})))||[{original:"",thumbnail:""}],showPlayButton:!1,showThumbnails:((c=s.fotos)===null||c===void 0?void 0:c.length)>1}):(0,e.jsxs)("div",{className:i().envolveImagemSemFoto,children:[(0,e.jsx)(B.Vsj,{size:50,color:"#adadad"}),(0,e.jsx)("span",{children:"SEM FOTO"})]})}),(0,e.jsxs)("div",{className:i().EnvolveDadosAnuncio,children:[(0,e.jsx)(G,{}),(0,e.jsx)(H,{}),(0,e.jsx)("div",{className:i().preco,children:f?V:"Consulte-nos"}),(0,e.jsx)("div",{className:i().dadosLoja,children:(0,e.jsx)(N.Z,{dadosloja:p})})]})]}),(0,e.jsx)(C.Z,{metodo:"proposta",dadosVeiculo:s,idVeiculo:s.vei_id})]})]})}async function E({req:a,res:d,query:c,params:m}){try{let r=JSON.stringify({acoes:[{acao:"dadosloja"},{acao:"dadosanuncio",params:{id:m.idview}}],loja:n.eP});return{props:{data:await(await fetch(n.rO,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r})).json()}}}catch{return{notFound:!0}}}var $=o(3405),I=o(8104);(0,u.g)();let L=self.__BUILD_MANIFEST,O=self.__REACT_LOADABLE_MANIFEST;self.__RSC_MANIFEST,self.__RSC_CSS_MANIFEST;let P=self.__SUBRESOURCE_INTEGRITY_MANIFEST,z=self.__FONT_LOADER_MANIFEST,K=(0,j.d)({pageType:"pages",dev:!1,page:"/[view]/[idview]",appMod:$,pageMod:l,errorMod:I,error500Mod:null,Document:_.Z,buildManifest:L,appRenderToHTML:null,pagesRenderToHTML:b.R,reactLoadableManifest:O,serverComponentManifest:null,serverCSSManifest:null,subresourceIntegrityManifest:P,config:{env:{},webpack:null,webpackDevMiddleware:null,eslint:{ignoreDuringBuilds:!1},typescript:{ignoreBuildErrors:!1,tsconfigPath:"tsconfig.json"},distDir:".next",cleanDistDir:!0,assetPrefix:"",configOrigin:"next.config.js",useFileSystemPublicRoutes:!0,generateEtags:!0,pageExtensions:["tsx","ts","jsx","js"],target:"server",poweredByHeader:!0,compress:!0,analyticsId:"",images:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",remotePatterns:[],unoptimized:!1},devIndicators:{buildActivity:!0,buildActivityPosition:"bottom-right"},onDemandEntries:{maxInactiveAge:15e3,pagesBufferLength:2},amp:{canonicalBase:""},basePath:"",sassOptions:{},trailingSlash:!1,i18n:null,productionBrowserSourceMaps:!1,optimizeFonts:!0,excludeDefaultMomentLocales:!0,serverRuntimeConfig:{},publicRuntimeConfig:{},reactStrictMode:!0,httpAgentOptions:{keepAlive:!0},outputFileTracing:!0,staticPageGenerationTimeout:60,swcMinify:!0,experimental:{fetchCache:!1,middlewarePrefetch:"flexible",optimisticClientCache:!0,runtime:"experimental-edge",manualClientBasePath:!1,legacyBrowsers:!1,newNextLinkBehavior:!0,cpus:5,sharedPool:!0,profiling:!1,isrFlushToDisk:!0,workerThreads:!1,pageEnv:!1,optimizeCss:!1,nextScriptWorkers:!1,scrollRestoration:!1,externalDir:!1,disableOptimizedLoading:!1,gzipSize:!0,swcFileReading:!0,craCompat:!1,esmExternals:!0,appDir:!1,isrMemoryCacheSize:52428800,fullySpecified:!1,outputFileTracingRoot:"/Users/infoshop/Documents/Nextjs/hotsitenext13",swcTraceProfiling:!1,forceSwcTransforms:!1,largePageDataBytes:128e3,enableUndici:!1,adjustFontFallbacks:!1,adjustFontFallbacksWithSizeAdjust:!1,fontLoaders:[{loader:"@next/font/google"},{loader:"@next/font/local"}]},configFile:"/Users/infoshop/Documents/Nextjs/hotsitenext13/next.config.js",configFileName:"next.config.js"},buildId:"9vtKsRkgnHXA84NNzdtu9",fontLoaderManifest:z}),W=l;function U(a){return(0,u.V)({...a,handler:K})}};export{J as default};
