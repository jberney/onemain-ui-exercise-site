"use strict";(self.webpackChunkonemain_ui_exercise=self.webpackChunkonemain_ui_exercise||[]).push([[267],{J4hT:(t,e,n)=>{n.d(e,{i:()=>Z});var o=n("Istr"),r=n("82gj"),s=n("eZKA");const a=.001,i=.01,u=10,c=.05,l=1;const f=12;function p(t,e){return t*Math.sqrt(1-e*e)}const d=["duration","bounce"],h=["stiffness","damping","mass"];function m(t,e){return e.some((e=>void 0!==t[e]))}function v(t){var{from:e=0,to:n=1,restSpeed:v=2,restDelta:g}=t,M=(0,o.Tt)(t,["from","to","restSpeed","restDelta"]);const b={done:!1,value:e};let{stiffness:j,damping:x,mass:w,velocity:O,duration:T,isResolvedFromDuration:A}=function(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!m(t,h)&&m(t,d)){const n=function({duration:t=800,bounce:e=.25,velocity:n=0,mass:o=1}){let d,h;(0,r.$)(t<=1e3*u,"Spring duration must be 10 seconds or less");let m=1-e;m=(0,s.q)(c,l,m),t=(0,s.q)(i,u,t/1e3),m<1?(d=e=>{const o=e*m,r=o*t,s=o-n,i=p(e,m),u=Math.exp(-r);return a-s/i*u},h=e=>{const o=e*m*t,r=o*n+n,s=Math.pow(m,2)*Math.pow(e,2)*t,i=Math.exp(-o),u=p(Math.pow(e,2),m);return(-d(e)+a>0?-1:1)*((r-s)*i)/u}):(d=e=>Math.exp(-e*t)*((e-n)*t+1)-a,h=e=>Math.exp(-e*t)*(t*t*(n-e)));const v=function(t,e,n){let o=n;for(let n=1;n<f;n++)o-=t(o)/e(o);return o}(d,h,5/t);if(t*=1e3,isNaN(v))return{stiffness:100,damping:10,duration:t};{const e=Math.pow(v,2)*o;return{stiffness:e,damping:2*m*Math.sqrt(o*e),duration:t}}}(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}(M),S=y,q=y;function D(){const t=O?-O/1e3:0,o=n-e,r=x/(2*Math.sqrt(j*w)),s=Math.sqrt(j/w)/1e3;if(void 0===g&&(g=Math.min(Math.abs(n-e)/100,.4)),r<1){const e=p(s,r);S=a=>{const i=Math.exp(-r*s*a);return n-i*((t+r*s*o)/e*Math.sin(e*a)+o*Math.cos(e*a))},q=n=>{const a=Math.exp(-r*s*n);return r*s*a*(Math.sin(e*n)*(t+r*s*o)/e+o*Math.cos(e*n))-a*(Math.cos(e*n)*(t+r*s*o)-e*o*Math.sin(e*n))}}else if(1===r)S=e=>n-Math.exp(-s*e)*(o+(t+s*o)*e);else{const e=s*Math.sqrt(r*r-1);S=a=>{const i=Math.exp(-r*s*a),u=Math.min(e*a,300);return n-i*((t+r*s*o)*Math.sinh(u)+e*o*Math.cosh(u))/e}}}return D(),{next:t=>{const e=S(t);if(A)b.done=t>=T;else{const o=1e3*q(t),r=Math.abs(o)<=v,s=Math.abs(n-e)<=g;b.done=r&&s}return b.value=b.done?n:e,b},flipTarget:()=>{O=-O,[e,n]=[n,e],D()}}}v.needsInterpolation=(t,e)=>"string"==typeof t||"string"==typeof e;const y=t=>0;var g=n("JeBA"),M=n("QlcQ"),b=n("3Igj"),j=n("6d6S"),x=n("l0UI");function w(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function O({hue:t,saturation:e,lightness:n,alpha:o}){t/=360,n/=100;let r=0,s=0,a=0;if(e/=100){const o=n<.5?n*(1+e):n+e-n*e,i=2*n-o;r=w(i,o,t+1/3),s=w(i,o,t),a=w(i,o,t-1/3)}else r=s=a=n;return{red:Math.round(255*r),green:Math.round(255*s),blue:Math.round(255*a),alpha:o}}const T=(t,e,n)=>{const o=t*t,r=e*e;return Math.sqrt(Math.max(0,n*(r-o)+o))},A=[b.u,j.B,x.V],S=t=>A.find((e=>e.test(t))),q=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,D=(t,e)=>{let n=S(t),o=S(e);(0,r.V)(!!n,q(t)),(0,r.V)(!!o,q(e));let s=n.parse(t),a=o.parse(e);n===x.V&&(s=O(s),n=j.B),o===x.V&&(a=O(a),o=j.B);const i=Object.assign({},s);return t=>{for(const e in i)"alpha"!==e&&(i[e]=T(s[e],a[e],t));return i.alpha=(0,M.j)(s.alpha,a.alpha,t),n.transform(i)}};var N=n("YXVj"),B=n("uX0q"),C=n("hbNO"),R=n("jGS1");function z(t,e){return(0,C.T)(t)?n=>(0,M.j)(t,e,n):N.y.test(t)?D(t,e):k(t,e)}const F=(t,e)=>{const n=[...t],o=n.length,r=t.map(((t,n)=>z(t,e[n])));return t=>{for(let e=0;e<o;e++)n[e]=r[e](t);return n}},U=(t,e)=>{const n=Object.assign(Object.assign({},t),e),o={};for(const r in n)void 0!==t[r]&&void 0!==e[r]&&(o[r]=z(t[r],e[r]));return t=>{for(const e in o)n[e]=o[e](t);return n}};function V(t){const e=B.f.parse(t),n=e.length;let o=0,r=0,s=0;for(let t=0;t<n;t++)o||"number"==typeof e[t]?o++:void 0!==e[t].hue?s++:r++;return{parsed:e,numNumbers:o,numRGB:r,numHSL:s}}const k=(t,e)=>{const n=B.f.createTransformer(e),o=V(t),s=V(e);return o.numHSL===s.numHSL&&o.numRGB===s.numRGB&&o.numNumbers>=s.numNumbers?(0,R.F)(F(o.parsed,s.parsed),n):((0,r.$)(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),n=>`${n>0?e:t}`)},I=(t,e)=>n=>(0,M.j)(t,e,n);function G(t,e,{clamp:n=!0,ease:o,mixer:a}={}){const i=t.length;(0,r.V)(i===e.length,"Both input and output ranges must be the same length"),(0,r.V)(!o||!Array.isArray(o)||o.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[i-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const u=function(t,e,n){const o=[],r=n||("number"==typeof(s=t[0])?I:"string"==typeof s?N.y.test(s)?D:k:Array.isArray(s)?F:"object"==typeof s?U:void 0);var s;const a=t.length-1;for(let n=0;n<a;n++){let s=r(t[n],t[n+1]);if(e){const t=Array.isArray(e)?e[n]:e;s=(0,R.F)(t,s)}o.push(s)}return o}(e,o,a),c=2===i?function([t,e],[n]){return o=>n((0,g.q)(t,e,o))}(t,u):function(t,e){const n=t.length,o=n-1;return r=>{let s=0,a=!1;if(r<=t[0]?a=!0:r>=t[o]&&(s=o-1,a=!0),!a){let e=1;for(;e<n&&!(t[e]>r||e===o);e++);s=e-1}const i=(0,g.q)(t[s],t[s+1],r);return e[s](i)}}(t,u);return n?e=>c((0,s.q)(t[0],t[i-1],e)):c}var $=n("Nzsf");function P(t,e){return t.map((()=>e||$.am)).splice(0,t.length-1)}function H({from:t=0,to:e=1,ease:n,offset:o,duration:r=300}){const s={done:!1,value:t},a=Array.isArray(e)?e:[t,e],i=function(t,e){return t.map((t=>t*e))}(o&&o.length===a.length?o:function(t){const e=t.length;return t.map(((t,n)=>0!==n?n/(e-1):0))}(a),r);function u(){return G(i,a,{ease:Array.isArray(n)?n:P(a,n)})}let c=u();return{next:t=>(s.value=c(t),s.done=t>=r,s),flipTarget:()=>{a.reverse(),c=u()}}}const J={keyframes:H,spring:v,decay:function({velocity:t=0,from:e=0,power:n=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:s}){const a={done:!1,value:e};let i=n*t;const u=e+i,c=void 0===s?u:s(u);return c!==u&&(i=c-e),{next:t=>{const e=-i*Math.exp(-t/o);return a.done=!(e>r||e<-r),a.value=a.done?c:c+e,a},flipTarget:()=>{}}}};var K=n("/1j8");function L(t,e,n=0){return t-e-n}const Q=t=>{const e=({delta:e})=>t(e);return{start:()=>K.Ay.update(e,!0),stop:()=>K.eO.update(e)}};function Z(t){var e,n,{from:r,autoplay:s=!0,driver:a=Q,elapsed:i=0,repeat:u=0,repeatType:c="loop",repeatDelay:l=0,onPlay:f,onStop:p,onComplete:d,onRepeat:h,onUpdate:m}=t,y=(0,o.Tt)(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let g,M,b,{to:j}=y,x=0,w=y.duration,O=!1,T=!0;const A=function(t){if(Array.isArray(t.to))return H;if(J[t.type])return J[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?H:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?v:H}(y);(null===(n=(e=A).needsInterpolation)||void 0===n?void 0:n.call(e,r,j))&&(b=G([0,100],[r,j],{clamp:!1}),r=0,j=100);const S=A(Object.assign(Object.assign({},y),{from:r,to:j}));return s&&(null==f||f(),g=a((function(t){if(T||(t=-t),i+=t,!O){const t=S.next(Math.max(0,i));M=t.value,b&&(M=b(M)),O=T?t.done:i<=0}null==m||m(M),O&&(0===x&&(null!=w||(w=i)),x<u?function(t,e,n,o){return o?t>=e+n:t<=-n}(i,w,l,T)&&(x++,"reverse"===c?(T=x%2==0,i=function(t,e,n=0,o=!0){return o?L(e+-t,e,n):e-(t-e)+n}(i,w,l,T)):(i=L(i,w,l),"mirror"===c&&S.flipTarget()),O=!1,h&&h()):(g.stop(),d&&d()))})),g.start()),{stop:()=>{null==p||p(),g.stop()}}}},GHbL:(t,e,n)=>{n.d(e,{B:()=>a});var o=n("J4hT"),r=n("rOze"),s=n("/1j8");function a({from:t=0,velocity:e=0,min:n,max:a,power:i=.8,timeConstant:u=750,bounceStiffness:c=500,bounceDamping:l=10,restDelta:f=1,modifyTarget:p,driver:d,onUpdate:h,onComplete:m,onStop:v}){let y;function g(t){return void 0!==n&&t<n||void 0!==a&&t>a}function M(t){return void 0===n?a:void 0===a||Math.abs(n-t)<Math.abs(a-t)?n:a}function b(t){null==y||y.stop(),y=(0,o.i)(Object.assign(Object.assign({},t),{driver:d,onUpdate:e=>{var n;null==h||h(e),null===(n=t.onUpdate)||void 0===n||n.call(t,e)},onComplete:m,onStop:v}))}function j(t){b(Object.assign({type:"spring",stiffness:c,damping:l,restDelta:f},t))}if(g(t))j({from:t,velocity:e,to:M(t)});else{let o=i*e+t;void 0!==p&&(o=p(o));const a=M(o),c=a===n?-1:1;let l,d;const h=t=>{l=d,d=t,e=(0,r.f)(t-l,(0,s.KK)().delta),(1===c&&t>a||-1===c&&t<a)&&j({from:t,to:a,velocity:e})};b({type:"decay",from:t,velocity:e,timeConstant:u,power:i,restDelta:f,modifyTarget:p,onUpdate:g(o)?h:void 0})}return{stop:()=>null==y?void 0:y.stop()}}},"I4l+":(t,e,n)=>{n.d(e,{A:()=>m});var o=n("Nzsf");const r=(t,e)=>1-3*e+3*t,s=(t,e)=>3*e-6*t,a=t=>3*t,i=(t,e,n)=>((r(e,n)*t+s(e,n))*t+a(e))*t,u=(t,e,n)=>3*r(e,n)*t*t+2*s(e,n)*t+a(e),c=1e-7,l=10,f=8,p=.001,d=11,h=1/(d-1);function m(t,e,n,r){if(t===e&&n===r)return o.sn;const s=new Float32Array(d);for(let e=0;e<d;++e)s[e]=i(e*h,t,n);return o=>0===o||1===o?o:i(function(e){let o=0,r=1;const a=d-1;for(;r!==a&&s[r]<=e;++r)o+=h;--r;const m=o+(e-s[r])/(s[r+1]-s[r])*h,v=u(m,t,n);return v>=p?function(t,e,n,o){for(let r=0;r<f;++r){const r=u(e,n,o);if(0===r)return e;e-=(i(e,n,o)-t)/r}return e}(e,m,t,n):0===v?m:function(t,e,n,o,r){let s,a,u=0;do{a=e+(n-e)/2,s=i(a,o,r)-t,s>0?n=a:e=a}while(Math.abs(s)>c&&++u<l);return a}(e,o,o+h,t,n)}(o),e,r)}},Nzsf:(t,e,n)=>{n.d(e,{bt:()=>v,dg:()=>d,ZZ:()=>m,Sz:()=>h,ip:()=>g,wm:()=>M,Te:()=>y,po:()=>l,tn:()=>p,yT:()=>f,a6:()=>i,am:()=>c,vT:()=>u,sn:()=>a});const o=t=>e=>1-t(1-e),r=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,s=t=>e=>e*e*((t+1)*e-t),a=t=>t,i=(2,t=>Math.pow(t,2));const u=o(i),c=r(i),l=t=>1-Math.sin(Math.acos(t)),f=o(l),p=r(f),d=s(1.525),h=o(d),m=r(d),v=(t=>{const e=s(1.525);return t=>(t*=2)<1?.5*e(t):.5*(2-Math.pow(2,-10*(t-1)))})(),y=t=>{if(1===t||0===t)return t;const e=t*t;return t<.36363636363636365?7.5625*e:t<.7272727272727273?9.075*e-9.9*t+3.4:t<.9?12.066481994459833*e-19.63545706371191*t+8.898060941828255:10.8*t*t-20.52*t+10.72},g=o(y),M=t=>t<.5?.5*(1-y(1-2*t)):.5*y(2*t-1)+.5},eZKA:(t,e,n)=>{n.d(e,{q:()=>o});const o=(t,e,n)=>Math.min(Math.max(n,t),e)},Saur:(t,e,n)=>{n.d(e,{I:()=>i});const o=t=>t.hasOwnProperty("x")&&t.hasOwnProperty("y"),r=t=>o(t)&&t.hasOwnProperty("z");var s=n("hbNO");const a=(t,e)=>Math.abs(t-e);function i(t,e){if((0,s.T)(t)&&(0,s.T)(e))return a(t,e);if(o(t)&&o(e)){const n=a(t.x,e.x),o=a(t.y,e.y),s=r(t)&&r(e)?a(t.z,e.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2)+Math.pow(s,2))}}},hbNO:(t,e,n)=>{n.d(e,{T:()=>o});const o=t=>"number"==typeof t},QlcQ:(t,e,n)=>{n.d(e,{j:()=>o});const o=(t,e,n)=>-n*t+n*e+t},jGS1:(t,e,n)=>{n.d(e,{F:()=>r});const o=(t,e)=>n=>e(t(n)),r=(...t)=>t.reduce(o)},JeBA:(t,e,n)=>{n.d(e,{q:()=>o});const o=(t,e,n)=>{const o=e-t;return 0===o?1:(n-t)/o}},rOze:(t,e,n)=>{function o(t,e){return e?t*(1e3/e):0}n.d(e,{f:()=>o})}}]);
//# sourceMappingURL=npm.popmotion.3f9f22aa12c40a408a97.js.map