var c=(d,r,s)=>{"use strict";s.d(r,{Y5:()=>o,cR:()=>a,qJ:()=>t});class t extends Error{constructor({page:n}){super(`The middleware "${n}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class a extends Error{constructor(){super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ")}}class o extends Error{constructor(){super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ")}}};export{c as default};
