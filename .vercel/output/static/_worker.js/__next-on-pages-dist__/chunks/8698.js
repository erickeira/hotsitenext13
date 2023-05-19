var lr=(or,Fe,Ft)=>{"use strict";var Re=Ft(7294);function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x=null,w=0;function s(e,t){if(t.length!==0)if(512<t.length)0<w&&(e.enqueue(new Uint8Array(x.buffer,0,w)),x=new Uint8Array(512),w=0),e.enqueue(t);else{var n=x.length-w;n<t.length&&(n===0?e.enqueue(x):(x.set(t.subarray(0,n),w),e.enqueue(x),t=t.subarray(n)),x=new Uint8Array(512),w=0),x.set(t,w),w+=t.length}}function m(e,t){return s(e,t),!0}function Te(e){x&&0<w&&(e.enqueue(new Uint8Array(x.buffer,0,w)),x=null,w=0)}var Pe=new TextEncoder;function p(e){return Pe.encode(e)}function i(e){return Pe.encode(e)}function _e(e,t){typeof e.error=="function"?e.error(t):e.close()}var S=Object.prototype.hasOwnProperty,Rt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ie={},Me={};function Be(e){return!!S.call(Me,e)||!S.call(Ie,e)&&(Rt.test(e)?Me[e]=!0:(Ie[e]=!0,!1))}function k(e,t,n,r,a,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){y[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];y[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){y[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){y[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){y[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){y[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){y[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){y[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){y[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(le,ue);y[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(le,ue);y[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(le,ue);y[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){y[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){y[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});var q={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tt=["Webkit","ms","Moz","O"];Object.keys(q).forEach(function(e){Tt.forEach(function(t){q[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=q[e]})});var Pt=/["'&<>]/;function v(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=Pt.exec(e);if(t){var n,r="",a=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}var _t=/([A-Z])/g,It=/^ms-/,ie=Array.isArray,Mt=i("<script>"),Bt=i("<\/script>"),Dt=i('<script src="'),zt=i('<script type="module" src="'),De=i('" async=""><\/script>'),Lt=/(<\/|<)(s)(cript)/gi;function Vt(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function At(e,t,n,r,a){e=e===void 0?"":e,t=t===void 0?Mt:i('<script nonce="'+v(t)+'">');var o=[];if(n!==void 0&&o.push(t,p((""+n).replace(Lt,Vt)),Bt),r!==void 0)for(n=0;n<r.length;n++)o.push(Dt,p(v(r[n])),De);if(a!==void 0)for(r=0;r<a.length;r++)o.push(zt,p(v(a[r])),De);return{bootstrapChunks:o,startInlineScript:t,placeholderPrefix:i(e+"P:"),segmentPrefix:i(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function R(e,t){return{insertionMode:e,selectedValue:t}}function Nt(e){return R(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function Ot(e,t,n){switch(t){case"select":return R(1,n.value!=null?n.value:n.defaultValue);case"svg":return R(2,null);case"math":return R(3,null);case"foreignObject":return R(1,null);case"table":return R(4,null);case"thead":case"tbody":case"tfoot":return R(5,null);case"colgroup":return R(7,null);case"tr":return R(6,null)}return 4<=e.insertionMode||e.insertionMode===0?R(1,null):e}var se=i("<!-- -->");function ze(e,t,n,r){return t===""?r:(r&&e.push(se),e.push(p(v(t))),!0)}var Le=new Map,$t=i(' style="'),Ve=i(":"),jt=i(";");function Ae(e,t,n){if(typeof n!="object")throw Error(f(62));for(var r in t=!0,n)if(S.call(n,r)){var a=n[r];if(a!=null&&typeof a!="boolean"&&a!==""){if(r.indexOf("--")===0){var o=p(v(r));a=p(v((""+a).trim()))}else{o=r;var l=Le.get(o);l!==void 0||(l=i(v(o.replace(_t,"-$1").toLowerCase().replace(It,"-ms-"))),Le.set(o,l)),o=l,a=typeof a=="number"?a===0||S.call(q,r)?p(""+a):p(a+"px"):p(v((""+a).trim()))}t?(t=!1,e.push($t,o,Ve,a)):e.push(jt,o,Ve,a)}}t||e.push(D)}var I=i(" "),V=i('="'),D=i('"'),Ne=i('=""');function C(e,t,n,r){switch(n){case"style":Ae(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if((t=y.hasOwnProperty(n)?y[n]:null)!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=p(t.attributeName),t.type){case 3:r&&e.push(I,n,Ne);break;case 4:r===!0?e.push(I,n,Ne):r!==!1&&e.push(I,n,V,p(v(r)),D);break;case 5:isNaN(r)||e.push(I,n,V,p(v(r)),D);break;case 6:!isNaN(r)&&1<=r&&e.push(I,n,V,p(v(r)),D);break;default:t.sanitizeURL&&(r=""+r),e.push(I,n,V,p(v(r)),D)}}else if(Be(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if((t=n.toLowerCase().slice(0,5))!=="data-"&&t!=="aria-")return}e.push(I,p(n),V,p(v(r)),D)}}}var M=i(">"),Oe=i("/>");function H(e,t,n){if(t!=null){if(n!=null)throw Error(f(60));if(typeof t!="object"||!("__html"in t))throw Error(f(61));(t=t.__html)!=null&&e.push(p(""+t))}}function qt(e){var t="";return Re.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var ce=i(' selected=""');function de(e,t,n,r){e.push(T(n));var a,o=n=null;for(a in t)if(S.call(t,a)){var l=t[a];if(l!=null)switch(a){case"children":n=l;break;case"dangerouslySetInnerHTML":o=l;break;default:C(e,r,a,l)}}return e.push(M),H(e,o,n),typeof n=="string"?(e.push(p(v(n))),null):n}var fe=i(`
`),Ht=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,$e=new Map;function T(e){var t=$e.get(e);if(t===void 0){if(!Ht.test(e))throw Error(f(65,e));t=i("<"+e),$e.set(e,t)}return t}var Ut=i("<!DOCTYPE html>");function Wt(e,t,n,r,a){switch(t){case"select":e.push(T("select"));var o=null,l=null;for(h in n)if(S.call(n,h)){var u=n[h];if(u!=null)switch(h){case"children":o=u;break;case"dangerouslySetInnerHTML":l=u;break;case"defaultValue":case"value":break;default:C(e,r,h,u)}}return e.push(M),H(e,l,o),o;case"option":l=a.selectedValue,e.push(T("option"));var c=u=null,d=null,h=null;for(o in n)if(S.call(n,o)){var g=n[o];if(g!=null)switch(o){case"children":u=g;break;case"selected":d=g;break;case"dangerouslySetInnerHTML":h=g;break;case"value":c=g;default:C(e,r,o,g)}}if(l!=null)if(n=c!==null?""+c:qt(u),ie(l)){for(r=0;r<l.length;r++)if(""+l[r]===n){e.push(ce);break}}else""+l===n&&e.push(ce);else d&&e.push(ce);return e.push(M),H(e,h,u),u;case"textarea":for(u in e.push(T("textarea")),h=l=o=null,n)if(S.call(n,u)&&(c=n[u])!=null)switch(u){case"children":h=c;break;case"value":o=c;break;case"defaultValue":l=c;break;case"dangerouslySetInnerHTML":throw Error(f(91));default:C(e,r,u,c)}if(o===null&&l!==null&&(o=l),e.push(M),h!=null){if(o!=null)throw Error(f(92));if(ie(h)&&1<h.length)throw Error(f(93));o=""+h}return typeof o=="string"&&o[0]===`
`&&e.push(fe),o!==null&&e.push(p(v(""+o))),null;case"input":for(l in e.push(T("input")),c=h=u=o=null,n)if(S.call(n,l)&&(d=n[l])!=null)switch(l){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,"input"));case"defaultChecked":c=d;break;case"defaultValue":u=d;break;case"checked":h=d;break;case"value":o=d;break;default:C(e,r,l,d)}return h!==null?C(e,r,"checked",h):c!==null&&C(e,r,"checked",c),o!==null?C(e,r,"value",o):u!==null&&C(e,r,"value",u),e.push(Oe),null;case"menuitem":for(var F in e.push(T("menuitem")),n)if(S.call(n,F)&&(o=n[F])!=null)switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(f(400));default:C(e,r,F,o)}return e.push(M),null;case"title":for(g in e.push(T("title")),o=null,n)if(S.call(n,g)&&(l=n[g])!=null)switch(g){case"children":o=l;break;case"dangerouslySetInnerHTML":throw Error(f(434));default:C(e,r,g,l)}return e.push(M),o;case"listing":case"pre":for(c in e.push(T(t)),l=o=null,n)if(S.call(n,c)&&(u=n[c])!=null)switch(c){case"children":o=u;break;case"dangerouslySetInnerHTML":l=u;break;default:C(e,r,c,u)}if(e.push(M),l!=null){if(o!=null)throw Error(f(60));if(typeof l!="object"||!("__html"in l))throw Error(f(61));(n=l.__html)!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(fe,p(n)):e.push(p(""+n)))}return typeof o=="string"&&o[0]===`
`&&e.push(fe),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":for(var _ in e.push(T(t)),n)if(S.call(n,_)&&(o=n[_])!=null)switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,t));default:C(e,r,_,o)}return e.push(Oe),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return de(e,n,t,r);case"html":return a.insertionMode===0&&e.push(Ut),de(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return de(e,n,t,r);for(d in e.push(T(t)),l=o=null,n)if(S.call(n,d)&&(u=n[d])!=null)switch(d){case"children":o=u;break;case"dangerouslySetInnerHTML":l=u;break;case"style":Ae(e,r,u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Be(d)&&typeof u!="function"&&typeof u!="symbol"&&e.push(I,p(d),V,p(v(u)),D)}return e.push(M),H(e,l,o),o}}var Zt=i("</"),Xt=i(">"),Gt=i('<template id="'),Jt=i('"></template>'),Yt=i("<!--$-->"),Kt=i('<!--$?--><template id="'),Qt=i('"></template>'),en=i("<!--$!-->"),tn=i("<!--/$-->"),nn=i("<template"),rn=i('"'),an=i(' data-dgst="');i(' data-msg="'),i(' data-stck="');var on=i("></template>");function je(e,t,n){if(s(e,Kt),n===null)throw Error(f(395));return s(e,n),m(e,Qt)}var ln=i('<div hidden id="'),un=i('">'),sn=i("</div>"),cn=i('<svg aria-hidden="true" style="display:none" id="'),dn=i('">'),fn=i("</svg>"),pn=i('<math aria-hidden="true" style="display:none" id="'),hn=i('">'),gn=i("</math>"),mn=i('<table hidden id="'),bn=i('">'),yn=i("</table>"),vn=i('<table hidden><tbody id="'),kn=i('">'),Sn=i("</tbody></table>"),xn=i('<table hidden><tr id="'),wn=i('">'),Cn=i("</tr></table>"),En=i('<table hidden><colgroup id="'),Fn=i('">'),Rn=i("</colgroup></table>");function Tn(e,t,n,r){switch(n.insertionMode){case 0:case 1:return s(e,ln),s(e,t.segmentPrefix),s(e,p(r.toString(16))),m(e,un);case 2:return s(e,cn),s(e,t.segmentPrefix),s(e,p(r.toString(16))),m(e,dn);case 3:return s(e,pn),s(e,t.segmentPrefix),s(e,p(r.toString(16))),m(e,hn);case 4:return s(e,mn),s(e,t.segmentPrefix),s(e,p(r.toString(16))),m(e,bn);case 5:return s(e,vn),s(e,t.segmentPrefix),s(e,p(r.toString(16))),m(e,kn);case 6:return s(e,xn),s(e,t.segmentPrefix),s(e,p(r.toString(16))),m(e,wn);case 7:return s(e,En),s(e,t.segmentPrefix),s(e,p(r.toString(16))),m(e,Fn);default:throw Error(f(397))}}function Pn(e,t){switch(t.insertionMode){case 0:case 1:return m(e,sn);case 2:return m(e,fn);case 3:return m(e,gn);case 4:return m(e,yn);case 5:return m(e,Sn);case 6:return m(e,Cn);case 7:return m(e,Rn);default:throw Error(f(397))}}var _n=i('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),In=i('$RS("'),Mn=i('","'),Bn=i('")<\/script>'),Dn=i('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),zn=i('$RC("'),Ln=i('","'),Vn=i('")<\/script>'),An=i('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Nn=i('$RX("'),On=i('"'),$n=i(")<\/script>"),pe=i(","),jn=/[<\u2028\u2029]/g;function he(e){return JSON.stringify(e).replace(jn,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var A=Object.assign,qn=Symbol.for("react.element"),qe=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),Ue=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Ze=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),Hn=Symbol.for("react.scope"),Un=Symbol.for("react.debug_trace_mode"),Wn=Symbol.for("react.legacy_hidden"),Zn=Symbol.for("react.default_value"),Qe=Symbol.iterator;function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case qe:return"Portal";case We:return"Profiler";case Ue:return"StrictMode";case Je:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xe:return(e.displayName||"Context")+".Consumer";case Ze:return(e._context.displayName||"Context")+".Provider";case Ge:var t=e.render;return(e=e.displayName)||(e=(e=t.displayName||t.name||"")!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return(t=e.displayName||null)!==null?t:me(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var et={};function tt(e,t){if(!(e=e.contextTypes))return et;var n,r={};for(n in e)r[n]=t[n];return r}var z=null;function U(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(f(401))}else{if(n===null)throw Error(f(401));U(e,n)}t.context._currentValue=t.value}}function nt(e){e.context._currentValue=e.parentValue,(e=e.parent)!==null&&nt(e)}function rt(e){var t=e.parent;t!==null&&rt(t),e.context._currentValue=e.value}function at(e,t){if(e.context._currentValue=e.parentValue,(e=e.parent)===null)throw Error(f(402));e.depth===t.depth?U(e,t):at(e,t)}function ot(e,t){var n=t.parent;if(n===null)throw Error(f(402));e.depth===n.depth?U(e,n):ot(e,n),t.context._currentValue=t.value}function W(e){var t=z;t!==e&&(t===null?rt(e):e===null?nt(t):t.depth===e.depth?U(t,e):t.depth>e.depth?at(t,e):ot(t,e),z=e)}var lt={isMounted:function(){return!1},enqueueSetState:function(e,t){(e=e._reactInternals).queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){(e=e._reactInternals).replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function ut(e,t,n,r){var a=e.state!==void 0?e.state:null;e.updater=lt,e.props=n,e.state=a;var o={queue:[],replace:!1};e._reactInternals=o;var l=t.contextType;if(e.context=typeof l=="object"&&l!==null?l._currentValue:r,typeof(l=t.getDerivedStateFromProps)=="function"&&(a=(l=l(n,a))==null?a:A({},a,l),e.state=a),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&lt.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,l=o.replace,o.queue=null,o.replace=!1,l&&t.length===1)e.state=t[0];else{for(o=l?t[0]:e.state,a=!0,l=l?1:0;l<t.length;l++){var u=t[l];(u=typeof u=="function"?u.call(e,o,n,r):u)!=null&&(a?(a=!1,o=A({},o,u)):A(o,u))}e.state=o}else o.queue=null}var Xn={id:1,overflow:""};function be(e,t,n){var r=e.id;e=e.overflow;var a=32-Z(r)-1;r&=~(1<<a),n+=1;var o=32-Z(t)+a;if(30<o){var l=a-a%5;return o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,{id:1<<32-Z(t)+a|n<<a|r,overflow:o+e}}return{id:1<<o|n<<a|r,overflow:e}}var Z=Math.clz32?Math.clz32:Yn,Gn=Math.log,Jn=Math.LN2;function Yn(e){return(e>>>=0)==0?32:31-(Gn(e)/Jn|0)|0}function Kn(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}var Qn=typeof Object.is=="function"?Object.is:Kn,P=null,ye=null,X=null,b=null,N=!1,G=!1,O=0,B=null,J=0;function L(){if(P===null)throw Error(f(321));return P}function it(){if(0<J)throw Error(f(312));return{memoizedState:null,queue:null,next:null}}function ve(){return b===null?X===null?(N=!1,X=b=it()):(N=!0,b=X):b.next===null?(N=!1,b=b.next=it()):(N=!0,b=b.next),b}function ke(){ye=P=null,G=!1,X=null,J=0,b=B=null}function st(e,t){return typeof t=="function"?t(e):t}function ct(e,t,n){if(P=L(),b=ve(),N){var r=b.queue;if(t=r.dispatch,B!==null&&(n=B.get(r))!==void 0){B.delete(r),r=b.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return b.memoizedState=r,[r,t]}return[b.memoizedState,t]}return e=e===st?typeof t=="function"?t():t:n!==void 0?n(t):t,b.memoizedState=e,e=(e=b.queue={last:null,dispatch:null}).dispatch=er.bind(null,P,e),[b.memoizedState,e]}function dt(e,t){if(P=L(),b=ve(),t=t===void 0?null:t,b!==null){var n=b.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var a=0;a<r.length&&a<t.length;a++)if(!Qn(t[a],r[a])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),b.memoizedState=[e,t],e}function er(e,t,n){if(25<=J)throw Error(f(301));if(e===P)if(G=!0,e={action:n,next:null},B===null&&(B=new Map),(n=B.get(t))===void 0)B.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function tr(){throw Error(f(394))}function Y(){}var ft={readContext:function(e){return e._currentValue},useContext:function(e){return L(),e._currentValue},useMemo:dt,useReducer:ct,useRef:function(e){P=L();var t=(b=ve()).memoizedState;return t===null?(e={current:e},b.memoizedState=e):t},useState:function(e){return ct(st,e)},useInsertionEffect:Y,useLayoutEffect:function(){},useCallback:function(e,t){return dt(function(){return e},t)},useImperativeHandle:Y,useEffect:Y,useDebugValue:Y,useDeferredValue:function(e){return L(),e},useTransition:function(){return L(),[!1,tr]},useId:function(){var e=ye.treeContext,t=e.overflow;e=((e=e.id)&~(1<<32-Z(e)-1)).toString(32)+t;var n=K;if(n===null)throw Error(f(404));return t=O++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return L(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(f(407));return n()}},K=null,Se=Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function nr(e){return console.error(e),null}function $(){}function rr(e,t,n,r,a,o,l,u,c){var d=[],h=new Set;return(n=Q(t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:h,pingedTasks:d,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?nr:a,onAllReady:o===void 0?$:o,onShellReady:l===void 0?$:l,onShellError:u===void 0?$:u,onFatalError:c===void 0?$:c},0,null,n,!1,!1)).parentFlushed=!0,d.push(e=xe(t,e,null,n,h,et,null,Xn)),t}function xe(e,t,n,r,a,o,l,u){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var c={node:t,ping:function(){var d=e.pingedTasks;d.push(c),d.length===1&&vt(e)},blockedBoundary:n,blockedSegment:r,abortSet:a,legacyContext:o,context:l,treeContext:u};return a.add(c),c}function Q(e,t,n,r,a,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:a,textEmbedded:o}}function j(e,t){if((e=e.onError(t))!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ee(e,t){var n=e.onShellError;n(t),(n=e.onFatalError)(t),e.destination!==null?(e.status=2,_e(e.destination,t)):(e.status=1,e.fatalError=t)}function pt(e,t,n,r,a){for(P={},ye=t,O=0,e=n(r,a);G;)G=!1,O=0,J+=1,b=null,e=n(r,a);return ke(),e}function ht(e,t,n,r){var a=n.render(),o=r.childContextTypes;if(o!=null){var l=t.legacyContext;if(typeof n.getChildContext!="function")r=l;else{for(var u in n=n.getChildContext())if(!(u in o))throw Error(f(108,me(r)||"Unknown",u));r=A({},l,n)}t.legacyContext=r,E(e,t,a),t.legacyContext=l}else E(e,t,a)}function gt(e,t){if(e&&e.defaultProps)for(var n in t=A({},t),e=e.defaultProps)t[n]===void 0&&(t[n]=e[n]);return t}function we(e,t,n,r,a){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){a=tt(n,t.legacyContext);var o=n.contextType;ut(o=new n(r,typeof o=="object"&&o!==null?o._currentValue:a),n,r,a),ht(e,t,o,n)}else{o=tt(n,t.legacyContext);var l=O!==0;if(typeof(a=pt(e,t,n,r,o))=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)ut(a,n,r,o),ht(e,t,a,n);else if(l){r=t.treeContext,t.treeContext=be(r,1,0);try{E(e,t,a)}finally{t.treeContext=r}}else E(e,t,a)}else if(typeof n=="string"){switch(o=Wt((a=t.blockedSegment).chunks,n,r,e.responseState,a.formatContext),a.lastPushedText=!1,l=a.formatContext,a.formatContext=Ot(l,n,r),Ce(e,t,o),a.formatContext=l,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push(Zt,p(n),Xt)}a.lastPushedText=!1}else{switch(n){case Wn:case Un:case Ue:case We:case He:case Ye:E(e,t,r.children);return;case Hn:throw Error(f(343));case Je:e:{n=t.blockedBoundary,a=t.blockedSegment,o=r.fallback,r=r.children;var u={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:l=new Set,errorDigest:null},c=Q(e,a.chunks.length,u,a.formatContext,!1,!1);a.children.push(c),a.lastPushedText=!1;var d=Q(e,0,null,a.formatContext,!1,!1);d.parentFlushed=!0,t.blockedBoundary=u,t.blockedSegment=d;try{if(Ce(e,t,r),d.lastPushedText&&d.textEmbedded&&d.chunks.push(se),d.status=1,te(u,d),u.pendingTasks===0)break e}catch(h){d.status=4,u.forceClientRender=!0,u.errorDigest=j(e,h)}finally{t.blockedBoundary=n,t.blockedSegment=a}t=xe(e,o,n,c,l,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ge:if(r=pt(e,t,n.render,r,a),O!==0){n=t.treeContext,t.treeContext=be(n,1,0);try{E(e,t,r)}finally{t.treeContext=n}}else E(e,t,r);return;case Ke:r=gt(n=n.type,r),we(e,t,n,r,a);return;case Ze:if(a=r.children,n=n._context,r=r.value,o=n._currentValue,n._currentValue=r,z=r={parent:l=z,depth:l===null?0:l.depth+1,context:n,parentValue:o,value:r},t.context=r,E(e,t,a),(e=z)===null)throw Error(f(403));r=e.parentValue,e.context._currentValue=r===Zn?e.context._defaultValue:r,e=z=e.parent,t.context=e;return;case Xe:r=(r=r.children)(n._currentValue),E(e,t,r);return;case ge:r=gt(n=(a=n._init)(n._payload),r),we(e,t,n,r,void 0);return}throw Error(f(130,n==null?n:typeof n,""))}}function E(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case qn:we(e,t,n.type,n.props,n.ref);return;case qe:throw Error(f(257));case ge:var r=n._init;E(e,t,n=r(n._payload));return}if(ie(n)){mt(e,t,n);return}if((r=n===null||typeof n!="object"?null:typeof(r=Qe&&n[Qe]||n["@@iterator"])=="function"?r:null)&&(r=r.call(n))){if(!(n=r.next()).done){var a=[];do a.push(n.value),n=r.next();while(!n.done);mt(e,t,a)}return}throw Error(f(31,(e=Object.prototype.toString.call(n))==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment).lastPushedText=ze(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText):typeof n=="number"&&((r=t.blockedSegment).lastPushedText=ze(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function mt(e,t,n){for(var r=n.length,a=0;a<r;a++){var o=t.treeContext;t.treeContext=be(o,r,a);try{Ce(e,t,n[a])}finally{t.treeContext=o}}}function Ce(e,t,n){var r=t.blockedSegment.formatContext,a=t.legacyContext,o=t.context;try{return E(e,t,n)}catch(c){if(ke(),typeof c=="object"&&c!==null&&typeof c.then=="function"){n=c;var l=t.blockedSegment,u=Q(e,l.chunks.length,null,l.formatContext,l.lastPushedText,!0);l.children.push(u),l.lastPushedText=!1,e=xe(e,t.node,t.blockedBoundary,u,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=a,t.context=o,W(o)}else throw t.blockedSegment.formatContext=r,t.legacyContext=a,t.context=o,W(o),c}}function ar(e){var t=e.blockedBoundary;(e=e.blockedSegment).status=3,yt(this,t,e)}function bt(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(f(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(a){return bt(a,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady)())}function te(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&te(e,n)}else e.completedSegments.push(t)}function yt(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(f(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=$,(t=e.onShellReady)())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&te(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(ar,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(te(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady)()}function vt(e){if(e.status!==2){var t=z,n=Se.current;Se.current=ft;var r=K;K=e.responseState;try{var a,o=e.pingedTasks;for(a=0;a<o.length;a++){var l=o[a],u=l.blockedSegment;if(u.status===0){W(l.context);try{E(e,l,l.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(se),l.abortSet.delete(l),u.status=1,yt(e,l.blockedBoundary,u)}catch(g){if(ke(),typeof g=="object"&&g!==null&&typeof g.then=="function"){var c=l.ping;g.then(c,c)}else{l.abortSet.delete(l),u.status=4;var d=l.blockedBoundary,h=j(e,g);d===null?ee(e,g):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&e.clientRenderedBoundaries.push(d))),e.allPendingTasks--,e.allPendingTasks===0&&(0,e.onAllReady)()}}finally{}}}o.splice(0,a),e.destination!==null&&Ee(e,e.destination)}catch(g){j(e,g),ee(e,g)}finally{K=r,Se.current=n,n===ft&&W(t)}}}function ne(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,s(t,Gt),s(t,e.placeholderPrefix),s(t,e=p(r.toString(16))),m(t,Jt);case 1:n.status=2;var a=!0;r=n.chunks;var o=0;n=n.children;for(var l=0;l<n.length;l++){for(a=n[l];o<a.index;o++)s(t,r[o]);a=re(e,t,a)}for(;o<r.length-1;o++)s(t,r[o]);return o<r.length&&(a=m(t,r[o])),a;default:throw Error(f(390))}}function re(e,t,n){var r=n.boundary;if(r===null)return ne(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,m(t,en),s(t,nn),r&&(s(t,an),s(t,p(v(r))),s(t,rn)),m(t,on),ne(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var a=e.responseState,o=a.nextSuspenseID++;a=i(a.boundaryPrefix+o.toString(16)),r=r.id=a,je(t,e.responseState,r),ne(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),je(t,e.responseState,r.id),ne(e,t,n);else{if(m(t,Yt),(n=r.completedSegments).length!==1)throw Error(f(391));re(e,t,n[0])}return m(t,tn)}function kt(e,t,n){return Tn(t,e.responseState,n.formatContext,n.id),re(e,t,n),Pn(t,n.formatContext)}function St(e,t,n){for(var r=n.completedSegments,a=0;a<r.length;a++)xt(e,t,n,r[a]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,s(t,e.startInlineScript),e.sentCompleteBoundaryFunction?s(t,zn):(e.sentCompleteBoundaryFunction=!0,s(t,Dn)),r===null)throw Error(f(395));return n=p(n.toString(16)),s(t,r),s(t,Ln),s(t,e.segmentPrefix),s(t,n),m(t,Vn)}function xt(e,t,n,r){if(r.status===2)return!0;var a=r.id;if(a===-1){if((r.id=n.rootSegmentID)===-1)throw Error(f(392));return kt(e,t,r)}return kt(e,t,r),s(t,(e=e.responseState).startInlineScript),e.sentCompleteSegmentFunction?s(t,In):(e.sentCompleteSegmentFunction=!0,s(t,_n)),s(t,e.segmentPrefix),s(t,a=p(a.toString(16))),s(t,Mn),s(t,e.placeholderPrefix),s(t,a),m(t,Bn)}function Ee(e,t){x=new Uint8Array(512),w=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){re(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)s(t,r[n]);n<r.length&&m(t,r[n])}var a,o=e.clientRenderedBoundaries;for(a=0;a<o.length;a++){var l=o[a];r=t;var u=e.responseState,c=l.id,d=l.errorDigest,h=l.errorMessage,g=l.errorComponentStack;if(s(r,u.startInlineScript),u.sentClientRenderFunction?s(r,Nn):(u.sentClientRenderFunction=!0,s(r,An)),c===null)throw Error(f(395));if(s(r,c),s(r,On),(d||h||g)&&(s(r,pe),s(r,p(he(d||"")))),(h||g)&&(s(r,pe),s(r,p(he(h||"")))),g&&(s(r,pe),s(r,p(he(g)))),!m(r,$n)){e.destination=null,a++,o.splice(0,a);return}}o.splice(0,a);var F=e.completedBoundaries;for(a=0;a<F.length;a++)if(!St(e,t,F[a])){e.destination=null,a++,F.splice(0,a);return}F.splice(0,a),Te(t),x=new Uint8Array(512),w=0;var _=e.partialBoundaries;for(a=0;a<_.length;a++){var Ct=_[a];e:{o=e,l=t;var ae=Ct.completedSegments;for(u=0;u<ae.length;u++)if(!xt(o,l,Ct,ae[u])){u++,ae.splice(0,u);var Et=!1;break e}ae.splice(0,u),Et=!0}if(!Et){e.destination=null,a++,_.splice(0,a);return}}_.splice(0,a);var oe=e.completedBoundaries;for(a=0;a<oe.length;a++)if(!St(e,t,oe[a])){e.destination=null,a++,oe.splice(0,a);return}oe.splice(0,a)}finally{Te(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function wt(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return bt(r,e,t)}),n.clear(),e.destination!==null&&Ee(e,e.destination)}catch(r){j(e,r),ee(e,r)}}Fe.renderToReadableStream=function(e,t){return new Promise(function(n,r){var a,o,l=new Promise(function(h,g){o=h,a=g}),u=rr(e,At(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),Nt(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,o,function(){var h=new ReadableStream({type:"bytes",pull:function(g){if(u.status===1)u.status=2,_e(g,u.fatalError);else if(u.status!==2&&u.destination===null){u.destination=g;try{Ee(u,g)}catch(F){j(u,F),ee(u,F)}}},cancel:function(){wt(u)}},{highWaterMark:0});h.allReady=l,n(h)},function(h){l.catch(function(){}),r(h)},a);if(t&&t.signal){var c=t.signal,d=function(){wt(u,c.reason),c.removeEventListener("abort",d)};c.addEventListener("abort",d)}vt(u)})},Fe.version="18.2.0"};export{lr as default};
/**
* @license React
* react-dom-server.browser.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/