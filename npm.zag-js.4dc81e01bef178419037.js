"use strict";(self.webpackChunkonemain_ui_exercise=self.webpackChunkonemain_ui_exercise||[]).push([[358],{"Cr+B":(e,t,n)=>{n.d(t,{Yy:()=>w});var o=()=>"undefined"!=typeof document,i=!1,d=null,r=!1,u=!1,a=new Set;function c(e,t){a.forEach((n=>n(e,t)))}var s="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function p(e){var t;r=!0,(t=e).metaKey||!s&&t.altKey||t.ctrlKey||"Control"===t.key||"Shift"===t.key||"Meta"===t.key||(d="keyboard",c("keyboard",e))}function f(e){if(d="pointer","mousedown"===e.type||"pointerdown"===e.type){r=!0;const t=e.composedPath?e.composedPath()[0]:e.target;let n=!1;try{n=t.matches(":focus-visible")}catch{}if(n)return;c("pointer",e)}}function m(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||0===t.detail&&!t.pointerType)&&(r=!0,d="virtual")}function v(e){e.target!==window&&e.target!==document&&(r||u||(d="virtual",c("virtual",e)),r=!1,u=!1)}function l(){r=!1,u=!0}function y(){return"pointer"!==d}function w(e){(function(){if(!o()||i)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...t){r=!0,e.apply(this,t)},document.addEventListener("keydown",p,!0),document.addEventListener("keyup",p,!0),document.addEventListener("click",m,!0),window.addEventListener("focus",v,!0),window.addEventListener("blur",l,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",f,!0),document.addEventListener("pointermove",f,!0),document.addEventListener("pointerup",f,!0)):(document.addEventListener("mousedown",f,!0),document.addEventListener("mousemove",f,!0),document.addEventListener("mouseup",f,!0)),i=!0})(),e(y());const t=()=>e(y());return a.add(t),()=>{a.delete(t)}}}}]);
//# sourceMappingURL=npm.zag-js.4dc81e01bef178419037.js.map