var R=g=>{var C="/";(function(){"use strict";var y,I={815:function(c){c.exports=function(n,u,f,r){u=u||"&",f=f||"=";var e={};if(typeof n!="string"||n.length===0)return e;var o=/\+/g;n=n.split(u);var t=1e3;r&&typeof r.maxKeys=="number"&&(t=r.maxKeys);var i=n.length;t>0&&i>t&&(i=t);for(var s=0;s<i;++s){var l,j,p,d,b=n[s].replace(o,"%20"),m=b.indexOf(f);m>=0?(l=b.substr(0,m),j=b.substr(m+1)):(l=b,j=""),p=decodeURIComponent(l),d=decodeURIComponent(j),Object.prototype.hasOwnProperty.call(e,p)?a(e[p])?e[p].push(d):e[p]=[e[p],d]:e[p]=d}return e};var a=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"}},577:function(c){var a=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};c.exports=function(r,e,o,t){return e=e||"&",o=o||"=",r===null&&(r=void 0),typeof r=="object"?u(f(r),function(i){var s=encodeURIComponent(a(i))+o;return n(r[i])?u(r[i],function(l){return s+encodeURIComponent(a(l))}).join(e):s+encodeURIComponent(a(r[i]))}).join(e):t?encodeURIComponent(a(t))+o+encodeURIComponent(a(r)):""};var n=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function u(r,e){if(r.map)return r.map(e);for(var o=[],t=0;t<r.length;t++)o.push(e(r[t],t));return o}var f=Object.keys||function(r){var e=[];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.push(o);return e}}},x={};function v(c){var a=x[c];if(a!==void 0)return a.exports;var n=x[c]={exports:{}},u=!0;try{I[c](n,n.exports,v),u=!1}finally{u&&delete x[c]}return n.exports}v.ab=C+"/";var O={};(y=O).decode=y.parse=v(815),y.encode=y.stringify=v(577),g.exports=O})()};export{R as default};
