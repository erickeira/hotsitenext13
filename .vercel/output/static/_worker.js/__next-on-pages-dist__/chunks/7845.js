var y=(a,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=n;var i="none",l="contents",c=/input|select|textarea|button|object|iframe/;function d(e,t){return t.getPropertyValue("overflow")!=="visible"||e.scrollWidth<=0&&e.scrollHeight<=0}function s(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var r=window.getComputedStyle(e),u=r.getPropertyValue("display");return t?u!==l&&d(e,r):u===i}catch{return console.warn("Failed to inspect element style"),!1}}function f(e){for(var t=e,r=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(r&&t===r&&(t=r.host.parentNode),s(t))return!1;t=t.parentNode}return!0}function p(e,t){var r=e.nodeName.toLowerCase();return(c.test(r)&&!e.disabled||r==="a"&&e.href||t)&&f(e)}function v(e){var t=e.getAttribute("tabindex");t===null&&(t=void 0);var r=isNaN(t);return(r||t>=0)&&p(e,!r)}function n(e){return[].slice.call(e.querySelectorAll("*"),0).reduce(function(t,r){return t.concat(r.shadowRoot?n(r.shadowRoot):[r])},[]).filter(v)}a.exports=o.default};export{y as default};
/*!
* Adapted from jQuery UI core
*
* http://jqueryui.com
*
* Copyright 2014 jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
* http://api.jqueryui.com/category/ui-core/
*/
