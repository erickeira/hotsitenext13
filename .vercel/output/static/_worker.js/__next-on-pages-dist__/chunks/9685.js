var g=(E,e,d)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resetState=l,e.log=f,e.handleBlur=u,e.handleFocus=c,e.markForFocusLater=v,e.returnFocus=m,e.popWithoutFocus=h,e.setupScopedFocus=p,e.teardownScopedFocus=w;var s=a(d(7845));function a(n){return n&&n.__esModule?n:{default:n}}var t=[],o=null,r=!1;function l(){t=[]}function f(){}function u(){r=!0}function c(){r&&(r=!1,o&&setTimeout(function(){o.contains(document.activeElement)||((0,s.default)(o)[0]||o).focus()},0))}function v(){t.push(document.activeElement)}function m(){var n=arguments.length>0&&arguments[0]!==void 0&&arguments[0],i=null;try{t.length!==0&&(i=t.pop()).focus({preventScroll:n});return}catch{console.warn(["You tried to return focus to",i,"but it is not in the DOM anymore"].join(" "))}}function h(){t.length>0&&t.pop()}function p(n){o=n,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))}function w(){o=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))}};export{g as default};