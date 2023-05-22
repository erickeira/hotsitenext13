var H=(V,u,o)=>{"use strict";o.r(u),o.d(u,{ComponentMod:()=>z,default:()=>K});var r={};o.r(r),o.d(r,{default:()=>B,getServerSideProps:()=>D});var g=o(6428),x=o(4763),f=o(1106),j=o(5368),e=o(5893),n=o(3805),_=o(3990),b=o(6733),i=o.n(b),w=o(7191),y=o(423),C=o(6982),S=o.n(C),q=o(7717),N=o(8357);function R(a){return(0,N.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(a)}var T=o(7294),M=o(1163),F=o(9352),k=o(9008);function B({data:a}){let[c,d]=(0,T.useState)(!1),m=()=>d(!c),l=()=>d(!1),{query:p}=(0,M.useRouter)(),{dadosanuncio:s,dadosloja:h}=a,v=parseInt(s.vei_preco),U=v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),W=()=>(0,e.jsxs)("div",{className:i().envolveAnoCorCombustivelKm,children:[(0,e.jsx)("div",{className:i().anoCorCombustivelKm,style:{borderTopLeftRadius:5,borderBottomLeftRadius:5,borderRightWidth:0,width:s.vei_km?"25%":"33%"},children:s.vei_ano}),(0,e.jsx)("div",{className:i().anoCorCombustivelKm,style:{borderRightWidth:0,width:s.vei_km?"25%":"33%"},children:s.cor_nome}),(0,e.jsx)("div",{className:i().anoCorCombustivelKm,style:s.vei_km?{borderRightWidth:0,width:"25%"}:{width:"33%",borderTopRightRadius:5,borderBottomRightRadius:5},children:s.com_nome}),s.vei_km?(0,e.jsxs)("div",{className:i().anoCorCombustivelKm,style:{borderTopRightRadius:5,borderBottomRightRadius:5,width:"25%"},children:[s.vei_km," km"]}):null]}),G=()=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:i().opcionaisDescricaoObservacao,style:{display:s.vei_opcoes||s.vei_descricao||s.vei_observacoes?void 0:"none"},children:[s.vei_opcoes&&(0,e.jsxs)("div",{className:i().containerOpcionais,children:[(0,e.jsx)("strong",{children:"Opcionais:"}),(0,e.jsx)("div",{className:i().opcionaisGrid,children:s.vei_opcoes&&s.vei_opcoes.map(t=>(0,e.jsx)("div",{style:{padding:2},children:(0,e.jsxs)("span",{className:i().opcionais,children:[(0,e.jsx)(R,{}),t]},t)},t))})]}),s.vei_descricao&&(0,e.jsxs)("div",{className:i().descricao,children:[(0,e.jsx)("strong",{children:"Descri\xE7\xE3o:"}),(0,e.jsx)("p",{children:s.vei_descricao})]}),s.vei_observacoes&&(0,e.jsxs)("div",{className:i().observacoes,children:[(0,e.jsx)("strong",{children:"Observa\xE7\xF5es:"}),(0,e.jsx)("p",{children:s.vei_observacoes})]})]})});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(k.default,{children:[(0,e.jsx)("meta",{property:"og:type",content:"product"}),(0,e.jsx)("meta",{property:"og:title",content:`${s.mar_nome} ${s.vei_modelo} | ${h[0].loj_nome}`}),(0,e.jsx)("meta",{property:"og:description",content:`${s.vei_ano} | ${s.cor_nome} | ${s.com_nome} ${s.vei_km!=""?"| KM":""} ${s.vei_km}`}),(0,e.jsx)("meta",{property:"og:image",content:s.fotos[0]?`${n.wB}${s.fotos[0]}`:"/img/sem-foto.jpg"}),(0,e.jsx)("meta",{property:"og:image:width",content:"400"}),(0,e.jsx)("meta",{property:"og:image:height",content:"400"}),(0,e.jsx)("title",{children:`${s.mar_nome} ${s.vei_modelo} | ${h[0].loj_nome}`})]}),(0,e.jsxs)("div",{className:i().container,children:[(0,e.jsxs)("div",{className:i().marcaModeloECompartilhar,children:[(0,e.jsxs)("div",{className:i().marcaComModelo,style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)("small",{style:{color:"#00000070"},children:s.mar_nome}),(0,e.jsx)("b",{children:s.vei_modelo})]}),(0,e.jsxs)("div",{className:i().dropdown,children:[(0,e.jsxs)("button",{onClick:m,className:i().dropbtn,children:[(0,e.jsx)(_.TRZ,{})," Compartilhar"]}),(0,e.jsxs)("div",{className:`${i().dropdownContent} ${c&&i().show}`,onBlur:l,children:[(0,e.jsx)("a",{target:"_blank",href:`https://api.whatsapp.com/send?text=www.nomedosite.com.br/noticia/${p.id}`,children:"WhatsApp"}),(0,e.jsx)("a",{target:"_blank",href:`https://www.facebook.com/sharer/sharer.php?u=https://www.nomedosite.com.br/noticia/${p.id}`,children:"Facebook"})]})]})]}),(0,e.jsxs)("div",{className:i().envolveImagensComDados,children:[(0,e.jsx)("div",{className:i().galeriaImagens,children:s.fotos.length?(0,e.jsx)(S(),{width:200,height:200,showFullscreenButton:!1,items:s.fotos?.map(t=>({original:`${n.wB}${t.replace("pd","")}`,thumbnail:`${n.wB}redim/200/${t}`}))||[{original:"",thumbnail:""}],showPlayButton:!1,showThumbnails:s.fotos?.length>1}):(0,e.jsxs)("div",{className:i().envolveImagemSemFoto,children:[(0,e.jsx)(F.Vsj,{size:50,color:"#adadad"}),(0,e.jsx)("span",{children:"SEM FOTO"})]})}),(0,e.jsxs)("div",{className:i().EnvolveDadosAnuncio,children:[(0,e.jsx)(W,{}),(0,e.jsx)(G,{}),(0,e.jsx)("div",{className:i().preco,children:v?U:"Consulte-nos"}),(0,e.jsx)("div",{className:i().dadosLoja,children:(0,e.jsx)(w.Z,{dadosloja:h})})]})]}),(0,e.jsx)(y.Z,{metodo:"proposta",dadosVeiculo:s,idVeiculo:s.vei_id})]})]})}async function D({req:a,res:c,query:d,params:m}){try{let l=JSON.stringify({acoes:[{acao:"dadosloja"},{acao:"dadosanuncio",params:{id:m.idview}}],loja:n.eP});return{props:{data:await(await fetch(n.rO,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:l})).json()}}}catch{return{notFound:!0}}}var E=o(3405),A=o(8104);(0,g.g)();let I=self.__BUILD_MANIFEST,$=self.__REACT_LOADABLE_MANIFEST;self.__RSC_MANIFEST,self.__RSC_CSS_MANIFEST;let L=self.__SUBRESOURCE_INTEGRITY_MANIFEST,O=self.__FONT_LOADER_MANIFEST,P=(0,x.d)({pageType:"pages",dev:!1,page:"/[view]/[idview]",appMod:E,pageMod:r,errorMod:A,error500Mod:null,Document:f.Z,buildManifest:I,appRenderToHTML:null,pagesRenderToHTML:j.R,reactLoadableManifest:$,serverComponentManifest:null,serverCSSManifest:null,subresourceIntegrityManifest:L,config:{env:{},webpack:null,webpackDevMiddleware:null,eslint:{ignoreDuringBuilds:!1},typescript:{ignoreBuildErrors:!1,tsconfigPath:"tsconfig.json"},distDir:".next",cleanDistDir:!0,assetPrefix:"",configOrigin:"next.config.js",useFileSystemPublicRoutes:!0,generateEtags:!0,pageExtensions:["tsx","ts","jsx","js"],target:"server",poweredByHeader:!0,compress:!0,analyticsId:"",images:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",remotePatterns:[],unoptimized:!1},devIndicators:{buildActivity:!0,buildActivityPosition:"bottom-right"},onDemandEntries:{maxInactiveAge:15e3,pagesBufferLength:2},amp:{canonicalBase:""},basePath:"",sassOptions:{},trailingSlash:!1,i18n:null,productionBrowserSourceMaps:!1,optimizeFonts:!0,excludeDefaultMomentLocales:!0,serverRuntimeConfig:{},publicRuntimeConfig:{},reactStrictMode:!0,httpAgentOptions:{keepAlive:!0},outputFileTracing:!0,staticPageGenerationTimeout:60,swcMinify:!0,experimental:{fetchCache:!1,middlewarePrefetch:"flexible",optimisticClientCache:!0,runtime:"experimental-edge",manualClientBasePath:!1,legacyBrowsers:!1,newNextLinkBehavior:!0,cpus:5,sharedPool:!0,profiling:!1,isrFlushToDisk:!0,workerThreads:!1,pageEnv:!1,optimizeCss:!1,nextScriptWorkers:!1,scrollRestoration:!1,externalDir:!1,disableOptimizedLoading:!1,gzipSize:!0,swcFileReading:!0,craCompat:!1,esmExternals:!0,appDir:!1,isrMemoryCacheSize:52428800,fullySpecified:!1,outputFileTracingRoot:"/Users/infoshop/Documents/Nextjs/shopcar-hotsites",swcTraceProfiling:!1,forceSwcTransforms:!1,largePageDataBytes:128e3,enableUndici:!1,adjustFontFallbacks:!1,adjustFontFallbacksWithSizeAdjust:!1,fontLoaders:[{loader:"@next/font/google"},{loader:"@next/font/local"}]},configFile:"/Users/infoshop/Documents/Nextjs/shopcar-hotsites/next.config.js",configFileName:"next.config.js"},buildId:"aqfUQeRIKM0sHGiBkrRCt",fontLoaderManifest:O}),z=r;function K(a){return(0,g.V)({...a,handler:P})}};export{H as default};