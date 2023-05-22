var u=(g,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>l});var c,e=r(7294),p=r(9094);let h={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function a({res:i,err:t}){return{statusCode:i&&i.statusCode?i.statusCode:t?t.statusCode:404}}let n={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"0 23px 0 0",fontSize:"24px",fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"49px",margin:0,padding:0}};class l extends(c=e.Component){render(){let{statusCode:t,withDarkMode:s=!0}=this.props,d=this.props.title||h[t]||"An unexpected error has occurred";return e.createElement("div",{style:n.error},e.createElement(p.default,null,e.createElement("title",null,t?`${t}: ${d}`:"Application error: a client-side exception has occurred")),e.createElement("div",null,e.createElement("style",{dangerouslySetInnerHTML:{__html:`
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${s?`@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`:""}`}}),t?e.createElement("h1",{className:"next-error-h1",style:n.h1},t):null,e.createElement("div",{style:n.desc},e.createElement("h2",{style:n.h2},this.props.title||t?d:e.createElement(e.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}l.displayName="ErrorPage",l.getInitialProps=a,l.origGetInitialProps=a};export{u as default};
