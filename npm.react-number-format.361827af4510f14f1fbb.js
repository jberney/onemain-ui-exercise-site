"use strict";(self.webpackChunkonemain_ui_exercise=self.webpackChunkonemain_ui_exercise||[]).push([[423],{aZ9c:(e,t,r)=>{r.d(t,{HG:()=>B,K9:()=>R});var n,a=r("q1tI");function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function o(){}function i(e){return!!(e||"").match(/\d/)}function l(e){return null==e}function c(e){return l(e)||function(e){return"number"==typeof e&&isNaN(e)}(e)||"number"==typeof e&&!isFinite(e)}function s(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function f(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function v(e,t,r){for(var n="",a=r?"0":"",u=0;u<=t-1;u++)n+=e[u]||a;return n}function d(e,t){return Array(t+1).join(e)}function g(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],u=n[1];if(!(u=Number(u)))return r+a;var o=1+u,i=(a=a.replace(".","")).length;return o<0?a="0."+d("0",Math.abs(o))+a:o>=i?a+=d("0",o-i):a=(a.substring(0,o)||"0")+"."+a.substring(o),r+a}function m(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=f(e),u=a.beforeDecimal,o=a.afterDecimal,i=a.hasNegation,l=parseFloat("0."+(o||"0")),c=(o.length<=t?"0."+o:l.toFixed(t)).split("."),s=u;return u&&Number(c[0])&&(s=u.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),c[0])),(i?"-":"")+s+(n?".":"")+v(c[1]||"",t,r)}function p(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}!function(e){e.event="event",e.props="prop"}(n||(n={}));var h,S,b,y=(h=function(e,t){for(var r=0,n=0,a=e.length,u=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[u-1-n]&&u-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:u-n}}},b=void 0,function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return S&&e.length===S.length&&e.every((function(e,t){return e===S[t]}))?b:(S=e,b=h.apply(void 0,e))});function w(e){return Math.max(e.selectionStart,e.selectionEnd)}function V(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function x(e,t){return void 0===e&&(e=" "),"string"==typeof e?e:e[t]||" "}function D(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function N(e,t,r,n){var a,u,o=e.length;if(a=t,0,u=o,t=Math.min(Math.max(a,0),u),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=o&&!r[t];)t++;t>o&&(t=r.lastIndexOf(!0))}return-1===t&&(t=o),t}function O(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,n=t.length;r<n;r++)t[r]=Boolean(i(e[r])||i(e[r-1]));return t}function C(e,t,r,n,u,i){void 0===i&&(i=o);var s=function(e){var t=(0,a.useRef)(e);t.current=e;var r=(0,a.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)}));return r.current}((function(e,t){var r,a;return c(e)?(a="",r=""):"number"==typeof e||t?(a="number"==typeof e?g(e):e,r=n(a)):(a=u(e,void 0),r=n(a)),{formattedValue:r,numAsString:a}})),f=(0,a.useState)((function(){return s(l(e)?t:e,r)})),v=f[0],d=f[1],m=e,p=r;l(e)&&(m=v.numAsString,p=!0);var h=s(m,p);return(0,a.useMemo)((function(){d(h)}),[h.formattedValue]),[v,function(e,t){e.formattedValue!==v.formattedValue&&d({formattedValue:e.formattedValue,numAsString:e.value}),i(e,t)}]}function E(e){return e.replace(/[^0-9]/g,"")}function I(e){return e}function j(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var l=e.customInput,c=e.renderText,s=e.getInputRef,f=e.format;void 0===f&&(f=I);var v=e.removeFormatting;void 0===v&&(v=E);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,h=e.isAllowed,S=e.onChange;void 0===S&&(S=o);var b=e.onKeyDown;void 0===b&&(b=o);var V=e.onMouseUp;void 0===V&&(V=o);var x=e.onFocus;void 0===x&&(x=o);var j=e.onBlur;void 0===j&&(j=o);var A=e.value,T=e.getCaretBoundary;void 0===T&&(T=O);var k=e.isValidInputCharacter;void 0===k&&(k=i);var B=e.isCharacterSame,R=u(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),F=C(A,d,Boolean(g),f,v,m),M=F[0],K=M.formattedValue,W=M.numAsString,L=F[1],P=(0,a.useRef)({formattedValue:K,numAsString:W}),G=function(e,t){P.current={formattedValue:e.formattedValue,numAsString:e.value},L(e,t)},U=(0,a.useState)(!1),$=U[0],_=U[1],Z=(0,a.useRef)(null),q=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)((function(){return _(!0),function(){clearTimeout(q.current.setCaretTimeout),clearTimeout(q.current.focusTimeout)}}),[]);var H=f,z=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},J=function(e,t,r){0===e.selectionStart&&e.selectionEnd===e.value.length||(p(e,t),q.current.setCaretTimeout=setTimeout((function(){e.value===r&&e.selectionStart!==t&&p(e,t)}),0))},Q=function(e,t,r){return N(e,t,T(e),r)},X=function(e,t,r){var n=T(t),a=function(e,t,r,n,a,u,o){void 0===o&&(o=D);var i=a.findIndex((function(e){return e})),l=e.slice(0,i);t||r.startsWith(l)||(t=l,r=l+r,n+=l.length);for(var c=r.length,s=e.length,f={},v=new Array(c),d=0;d<c;d++){v[d]=-1;for(var g=0,m=s;g<m;g++)if(o({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:d,formattedValueIndex:g})&&!0!==f[g]){v[d]=g,f[g]=!0;break}}for(var p=n;p<c&&(-1===v[p]||!u(r[p]));)p++;var h=p===c||-1===v[p]?s:v[p];for(p=n-1;p>0&&-1===v[p];)p--;var S=-1===p||-1===v[p]?0:v[p]+1;return S>h?h:n-S<h-n?S:h}(t,K,e,r,n,k,B);return N(t,a,n)};(0,a.useEffect)((function(){var e=P.current,t=e.formattedValue,r=e.numAsString;K===t||K===W&&t===r||G(z(K,W),{event:void 0,source:n.props})}),[K,W]);var Y=Z.current?w(Z.current):void 0;("undefined"!=typeof window?a.useLayoutEffect:a.useEffect)((function(){var e=Z.current;if(K!==P.current.formattedValue&&e){var t=X(P.current.formattedValue,K,Y);e.value=K,J(e,t,K)}}),[K]);var ee=!$||"undefined"==typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",te=Object.assign({inputMode:ee},R,{type:t,value:K,onChange:function(e){(function(e,t,r){var n=y(K,e),a=Object.assign(Object.assign({},n),{lastValue:K}),u=v(e,a),o=H(u);if(u=v(o,void 0),h&&!h(z(o,u))){var i=t.target,l=w(i),c=X(e,K,l);return i.value=K,J(i,c,K),!1}return function(e){var t=e.formattedValue;void 0===t&&(t="");var r,n=e.input,a=e.source,u=e.event,o=e.numAsString;if(n){var i=e.inputValue||n.value,l=w(n);n.value=t,void 0!==(r=X(i,t,l))&&J(n,r,t)}t!==K&&G(z(t,o),{event:u,source:a})}({formattedValue:o,numAsString:u,inputValue:e,event:t,source:r,input:t.target}),!0})(e.target.value,e,n.event)&&S(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,u=r.selectionEnd,o=r.value;if(void 0===o&&(o=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,o.length):"Delete"===n&&(t=a),void 0!==t&&a===u){var i=t;"ArrowLeft"===n||"ArrowRight"===n?(i=Q(o,t,"ArrowLeft"===n?"left":"right"))!==t&&e.preventDefault():"Delete"!==n||k(o[t])?"Backspace"!==n||k(o[t])||(i=Q(o,t,"left")):i=Q(o,t,"right"),i!==t&&J(r,i,o),e.isUnitTestRun&&J(r,i,o),b(e)}else b(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var u=Q(a,r);u!==r&&J(t,u,a)}V(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target,r=e.currentTarget;Z.current=t,q.current.focusTimeout=setTimeout((function(){var n=t.selectionStart,a=t.selectionEnd,u=t.value;void 0===u&&(u="");var o=Q(u,n);o===n||0===n&&a===u.length||J(t,o,u),x(Object.assign(Object.assign({},e),{currentTarget:r}))}),0)},onBlur:function(e){Z.current=null,clearTimeout(q.current.focusTimeout),clearTimeout(q.current.setCaretTimeout),j(e)}});if("text"===r)return c?a.createElement(a.Fragment,null,c(K,R)||null):a.createElement("span",Object.assign({},R,{ref:s}),K);if(l){var re=l;return a.createElement(re,Object.assign({},te,{ref:s}))}return a.createElement("input",Object.assign({},te,{ref:s}))}function A(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var u=t.suffix;void 0===u&&(u="");var o=t.allowNegative,i=t.thousandsGroupStyle;if(void 0===i&&(i="thousand"),""===e||"-"===e)return e;var l=T(t),c=l.thousandSeparator,s=l.decimalSeparator,d=0!==r&&-1!==e.indexOf(".")||r&&n,g=f(e,o),m=g.beforeDecimal,p=g.afterDecimal,h=g.addNegation;return void 0!==r&&(p=v(p,r,!!n)),c&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}(m,c,i)),a&&(m=a+m),u&&(p+=u),h&&(m="-"+m),m+(d&&s||"")+p}function T(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function k(e){e=function(e){var t=T(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;void 0===a&&(a="");var u=e.allowNegative;if(void 0===u&&(u=!0),r===n)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ");return a.startsWith("-")&&u&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+a+"\n      allowNegative: "+u+"\n    "),u=!1),Object.assign(Object.assign({},e),{allowNegative:u})}(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,a=e.allowLeadingZeros,v=e.onKeyDown;void 0===v&&(v=o);var d=e.onBlur;void 0===d&&(d=o);var h=e.thousandSeparator,S=e.decimalScale,b=e.fixedDecimalScale,w=e.prefix;void 0===w&&(w="");var x=e.defaultValue,D=e.value,N=e.valueIsNumericString,O=e.onValueChange,E=u(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),I=T(e),j=I.decimalSeparator,k=I.allowedDecimalSeparators,B=function(t){return A(t,e)},R=function(t,r){return function(e,t,r){var n;void 0===t&&(t=V(e));var a=r.allowNegative,u=r.prefix;void 0===u&&(u="");var o=r.suffix;void 0===o&&(o="");var l=r.decimalScale,c=t.from,v=t.to,d=v.start,g=v.end,m=T(r),p=m.allowedDecimalSeparators,h=m.decimalSeparator,S=e[g]===h;if(i(e)&&(e===u||e===o)&&""===t.lastValue)return e;if(g-d==1&&-1!==p.indexOf(e[d])){var b=0===l?"":h;e=e.substring(0,d)+b+e.substring(d+1,e.length)}var y=function(e,t,r){var n=!1,a=!1;u.startsWith("-")?n=!1:e.startsWith("--")?(n=!1,a=!0):o.startsWith("-")&&e.length===o.length?n=!1:"-"===e[0]&&(n=!0);var i=n?1:0;return a&&(i=2),i&&(e=e.substring(i),t-=i,r-=i),{value:e,start:t,end:r,hasNegation:n}},w=y(e,d,g),x=w.hasNegation;e=(n=w).value,d=n.start,g=n.end;var D=y(t.lastValue,c.start,c.end),N=D.start,O=D.end,C=D.value,E=e.substring(d,g);!(e.length&&C.length&&(N>C.length-o.length||O<u.length))||E&&o.startsWith(E)||(e=C);var I=0;e.startsWith(u)?I+=u.length:d<u.length&&(I=d),g-=I;var j=(e=e.substring(I)).length,A=e.length-o.length;e.endsWith(o)?j=A:(g>A||g>e.length-o.length)&&(j=g),e=e.substring(0,j),e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),u=n.test(e);return e=e.replace(/-/g,""),a&&!u&&t&&(e="-"+e),e}(x?"-"+e:e,a),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+s(e),"g")}(h))||[]).join("");var k=e.indexOf(h),B=f(e=e.replace(new RegExp(s(h),"g"),(function(e,t){return t===k?".":""})),a),R=B.beforeDecimal,F=B.afterDecimal,M=B.addNegation;return v.end-v.start<c.end-c.start&&""===R&&S&&!parseFloat(F)&&(e=M?"-":""),e}(t,r,e)},F=l(D)?x:D,M=null!=N?N:function(e,t,r){return""===e||!(null==t?void 0:t.match(/\d/))&&!(null==r?void 0:r.match(/\d/))&&"string"==typeof e&&!isNaN(Number(e))}(F,w,t);l(D)?l(x)||(M=M||"number"==typeof x):M=M||"number"==typeof D;var K=function(e){return c(e)?e:("number"==typeof e&&(e=g(e)),M&&"number"==typeof S?m(e,S,Boolean(b)):e)},W=C(K(D),K(x),Boolean(M),B,R,O),L=W[0],P=L.numAsString,G=L.formattedValue,U=W[1];return Object.assign(Object.assign({},E),{value:G,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===j||i(e)},isCharacterSame:function(e){var t=e.currentValue,r=e.lastValue,n=e.formattedValue,a=e.currentValueIndex,u=e.formattedValueIndex,o=t[a],i=n[u],l=y(r,t).to;return!!(a>=l.start&&a<l.end&&k&&k.includes(o)&&i===j)||o===i},onValueChange:U,format:B,removeFormatting:R,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var n=t.suffix;void 0===n&&(n="");var a=Array.from({length:e.length+1}).map((function(){return!0})),u="-"===e[0];a.fill(!1,0,r.length+(u?1:0));var o=e.length;return a.fill(!1,o-n.length+1,o+1),a}(t,e)},onKeyDown:function(e){var t=e.target,n=e.key,a=t.selectionStart,u=t.selectionEnd,o=t.value;if(void 0===o&&(o=""),a===u){"Backspace"===n&&"-"===o[0]&&a===w.length+1&&r&&p(t,1),S&&b&&("Backspace"===n&&o[a-1]===j?(p(t,a-1),e.preventDefault()):"Delete"===n&&o[a]===j&&e.preventDefault()),(null==k?void 0:k.includes(n))&&o[a]===j&&p(t,a+1);var i=!0===h?",":h;"Backspace"===n&&o[a-1]===i&&p(t,a-1),"Delete"===n&&o[a]===i&&p(t,a+1),v(e)}else v(e)},onBlur:function(t){var r=P;if(r.match(/\d/g)||(r=""),a||(r=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(r)),b&&S&&(r=m(r,S,b)),r!==P){var u=A(r,e);U({formattedValue:u,value:r,floatValue:parseFloat(r)},{event:t,source:n.event})}d(t)}})}function B(e){var t=k(e);return a.createElement(j,Object.assign({},t))}function R(e){var t=function(e){e.mask,e.allowEmptyFormatting;var t=e.format,r=e.inputMode;void 0===r&&(r="numeric");var n=e.onKeyDown;void 0===n&&(n=o);var a=e.patternChar;void 0===a&&(a="#");var c=e.value,s=e.defaultValue,f=e.valueIsNumericString,v=u(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);!function(e){var t=e.mask;if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}(e);var d=function(t){return function(e,t){var r=t.format,n=t.mask,a=t.patternChar;void 0===a&&(a="#");var u=Array.from({length:e.length+1}).map((function(){return!0})),o=0,i=-1,l={};r.split("").forEach((function(t,r){var u=void 0;t===a&&(o++,u=x(n,o-1),-1===i&&e[r]===u&&(i=r)),l[r]=u}));for(var c=function(t){return r[t]===a&&e[t]!==l[t]},s=0,f=u.length;s<f;s++)u[s]=s===i||c(s)||c(s-1);return u[r.indexOf(a)]=!0,u}(t,e)},g=l(c)?s:c,m=null!=f?f:function(e,t){return""===e||!((null==t?void 0:t.match(/\d/))||"string"!=typeof e||!e.match(/^\d+$/)&&""!==e)}(g,t),h=Object.assign(Object.assign({},e),{valueIsNumericString:m});return Object.assign(Object.assign({},v),{value:c,defaultValue:s,valueIsNumericString:m,inputMode:r,format:function(e){return function(e,t){var r=t.format,n=t.allowEmptyFormatting,a=t.mask,u=t.patternChar;if(void 0===u&&(u="#"),""===e&&!n)return"";for(var o=0,i=r.split(""),l=0,c=r.length;l<c;l++)r[l]===u&&(i[l]=e[o]||x(a,o),o+=1);return i.join("")}(e,h)},removeFormatting:function(e,t){return function(e,t,r){void 0===t&&(t=V(e));var n=r.format,a=r.patternChar;void 0===a&&(a="#");var u=t.from,o=t.to,l=t.lastValue;void 0===l&&(l="");var c=function(e){return n[e]===a},s=function(e,t){for(var r="",n=0;n<e.length;n++)c(t+n)&&i(e[n])&&(r+=e[n]);return r},f=function(e){return e.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return f(e);if(""===l&&e.length===n.length){for(var v="",d=0;d<e.length;d++)if(c(d))i(e[d])&&(v+=e[d]);else if(e[d]!==n[d])return f(e);return v}var g=l.substring(0,u.start),m=e.substring(o.start,o.end),p=l.substring(u.end);return""+s(g,0)+f(m)+s(p,u.end)}(e,t,h)},getCaretBoundary:d,onKeyDown:function(e){var r=e.key,u=e.target,o=u.selectionStart,i=u.selectionEnd,l=u.value;if(o===i){var c=o;if("Backspace"===r||"Delete"===r){var s="right";if("Backspace"===r){for(;c>0&&t[c-1]!==a;)c--;s="left"}else{for(var f=t.length;c<f&&t[c]!==a;)c++;s="right"}c=N(l,c,d(l),s)}else t[c]!==a&&"ArrowLeft"!==r&&"ArrowRight"!==r&&(c=N(l,c+1,d(l),"right"));c!==o&&p(u,c),n(e)}else n(e)}})}(e);return a.createElement(j,Object.assign({},t))}}}]);
//# sourceMappingURL=npm.react-number-format.361827af4510f14f1fbb.js.map