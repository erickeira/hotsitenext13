var q=(R,u,s)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var f=C(s(7294)),i=b(s(5697)),d=b(s(4184));function b(e){return e&&e.__esModule?e:{default:e}}function y(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return y=function(){return e},e}function C(e){if(e&&e.__esModule)return e;if(e===null||c(e)!=="object"&&typeof e!="function")return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function c(e){return(c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function O(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function j(e,t){return t&&(c(t)==="object"||typeof t=="function")?t:_(e)}function _(e){if(e===void 0)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function P(e,t){if(typeof t!="function"&&t!==null)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(){return O(this,t),j(this,m(t).apply(this,arguments))}return P(t,e),k(t,[{key:"handleClick",value:function(n){var r=this.props,a=r.isDisabled,o=r.pageNumber;n.preventDefault(),a||this.props.onClick(o)}},{key:"render",value:function(){var n,r=this.props,a=r.pageText,o=(r.pageNumber,r.activeClass),w=r.itemClass,D=r.linkClass,S=r.activeLinkClass,T=r.disabledClass,g=r.isActive,E=r.isDisabled,L=r.href,M=r.ariaLabel,N=(0,d.default)(w,(l(n={},o,g),l(n,T,E),n)),x=(0,d.default)(D,l({},S,g));return f.default.createElement("li",{className:N,onClick:this.handleClick.bind(this)},f.default.createElement("a",{className:x,href:L,"aria-label":M},a))}}]),t}(f.Component);u.default=p,l(p,"propTypes",{pageText:i.default.oneOfType([i.default.string,i.default.element]),pageNumber:i.default.number.isRequired,onClick:i.default.func.isRequired,isActive:i.default.bool.isRequired,isDisabled:i.default.bool,activeClass:i.default.string,activeLinkClass:i.default.string,itemClass:i.default.string,linkClass:i.default.string,disabledClass:i.default.string,href:i.default.string}),l(p,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})};export{q as default};
