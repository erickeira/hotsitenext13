var R=O=>{var C="/";(function(){"use strict";var y,I={815:function(c){c.exports=function(n,u,f,r){u=u||"&",f=f||"=";var t={};if(typeof n!="string"||n.length===0)return t;var o=/\+/g;n=n.split(u);var e=1e3;r&&typeof r.maxKeys=="number"&&(e=r.maxKeys);var i=n.length;e>0&&i>e&&(i=e);for(var p=0;p<i;++p){var l,x,s,d,b=n[p].replace(o,"%20"),j=b.indexOf(f);j>=0?(l=b.substr(0,j),x=b.substr(j+1)):(l=b,x=""),s=decodeURIComponent(l),d=decodeURIComponent(x),Object.prototype.hasOwnProperty.call(t,s)?a(t[s])?t[s].push(d):t[s]=[t[s],d]:t[s]=d}return t};var a=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"}},577:function(c){var a=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};c.exports=function(r,t,o,e){return t=t||"&",o=o||"=",r===null&&(r=void 0),typeof r=="object"?u(f(r),function(i){var p=encodeURIComponent(a(i))+o;return n(r[i])?u(r[i],function(l){return p+encodeURIComponent(a(l))}).join(t):p+encodeURIComponent(a(r[i]))}).join(t):e?encodeURIComponent(a(e))+o+encodeURIComponent(a(r)):""};var n=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function u(r,t){if(r.map)return r.map(t);for(var o=[],e=0;e<r.length;e++)o.push(t(r[e],e));return o}var f=Object.keys||function(r){var t=[];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.push(o);return t}}},m={};function v(c){var a=m[c];if(a!==void 0)return a.exports;var n=m[c]={exports:{}},u=!0;try{I[c](n,n.exports,v),u=!1}finally{u&&delete m[c]}return n.exports}v.ab=C+"/";var g={};(y=g).decode=y.parse=v(815),y.encode=y.stringify=v(577),O.exports=g})()};export{R as default};