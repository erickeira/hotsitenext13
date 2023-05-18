var l=(e,s)=>{var n;(function(){"use strict";var f={}.hasOwnProperty;function t(){for(var i=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=typeof r;if(a==="string"||a==="number")i.push(r);else if(Array.isArray(r)){if(r.length){var p=t.apply(null,r);p&&i.push(p)}}else if(a==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){i.push(r.toString());continue}for(var u in r)f.call(r,u)&&r[u]&&i.push(u)}}}return i.join(" ")}e.exports?(t.default=t,e.exports=t):(n=function(){return t}.apply(s,[]))!==void 0&&(e.exports=n)})()};export{l as default};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
