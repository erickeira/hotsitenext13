var x=(f,p,t)=>{"use strict";t.d(p,{a:()=>c});var d=t(4773),m=t(7924),o=t(6414);function c(l,h){var i;let{basePath:n,i18n:s,trailingSlash:r}=(i=h.nextConfig)!=null?i:{},a={pathname:l,trailingSlash:l!=="/"?l.endsWith("/"):r};if(n&&(0,o.Y)(a.pathname,n)&&(a.pathname=(0,m.n)(a.pathname,n),a.basePath=n),h.parseData===!0&&a.pathname.startsWith("/_next/data/")&&a.pathname.endsWith(".json")){let e=a.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),u=e[0];a.pathname=e[1]!=="index"?`/${e.slice(1).join("/")}`:"/",a.buildId=u}if(s){let e=(0,d.h)(a.pathname,s.locales);a.locale=e?.detectedLocale,a.pathname=e?.pathname||a.pathname}return a}};export{x as default};
