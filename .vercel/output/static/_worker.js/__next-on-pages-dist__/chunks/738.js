var w=l=>{var u="/";(()=>{"use strict";typeof __nccwpck_require__<"u"&&(__nccwpck_require__.ab=u+"/");var c={};(()=>{var m=c;m.parse=S,m.serialize=g;var v=decodeURIComponent,h=encodeURIComponent,y=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function S(i,n){if(typeof i!="string")throw TypeError("argument str must be a string");for(var o={},e=i.split(y),p=(n||{}).decode||v,r=0;r<e.length;r++){var t=e[r],a=t.indexOf("=");if(!(a<0)){var d=t.substr(0,a).trim(),f=t.substr(++a,t.length).trim();f[0]=='"'&&(f=f.slice(1,-1)),o[d]==null&&(o[d]=x(f,p))}}return o}function g(i,n,o){var e=o||{},p=e.encode||h;if(typeof p!="function")throw TypeError("option encode is invalid");if(!s.test(i))throw TypeError("argument name is invalid");var r=p(n);if(r&&!s.test(r))throw TypeError("argument val is invalid");var t=i+"="+r;if(e.maxAge!=null){var a=e.maxAge-0;if(isNaN(a)||!isFinite(a))throw TypeError("option maxAge is invalid");t+="; Max-Age="+Math.floor(a)}if(e.domain){if(!s.test(e.domain))throw TypeError("option domain is invalid");t+="; Domain="+e.domain}if(e.path){if(!s.test(e.path))throw TypeError("option path is invalid");t+="; Path="+e.path}if(e.expires){if(typeof e.expires.toUTCString!="function")throw TypeError("option expires is invalid");t+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(t+="; HttpOnly"),e.secure&&(t+="; Secure"),e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:case"strict":t+="; SameSite=Strict";break;case"lax":t+="; SameSite=Lax";break;case"none":t+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return t}function x(i,n){try{return n(i)}catch{return i}}})(),l.exports=c})()};export{w as default};
/*!
* cookie
* Copyright(c) 2012-2014 Roman Shtylman
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
