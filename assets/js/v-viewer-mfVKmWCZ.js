import{V as $}from"./viewerjs-Cl12M8Wx.js";import{h as R,r as q,w as T,n as M,d as gt,a as mt,o as ht,b as jt,e as wt,f as Ot,g as _t}from"./@vue-BVdG3p0Z.js";var $t=typeof global=="object"&&global&&global.Object===Object&&global;const tt=$t;var At=typeof self=="object"&&self&&self.Object===Object&&self,xt=tt||At||Function("return this")();const E=xt;var Tt=E.Symbol;const S=Tt;var et=Object.prototype,Mt=et.hasOwnProperty,St=et.toString,O=S?S.toStringTag:void 0;function Vt(t){var e=Mt.call(t,O),n=t[O];try{t[O]=void 0;var r=!0}catch{}var o=St.call(t);return r&&(e?t[O]=n:delete t[O]),o}var Et=Object.prototype,Pt=Et.toString;function Dt(t){return Pt.call(t)}var Ut="[object Null]",Ft="[object Undefined]",N=S?S.toStringTag:void 0;function P(t){return t==null?t===void 0?Ft:Ut:N&&N in Object(t)?Vt(t):Dt(t)}function D(t){return t!=null&&typeof t=="object"}var It="[object Symbol]";function Ct(t){return typeof t=="symbol"||D(t)&&P(t)==It}var kt=Array.isArray;const Bt=kt;var Wt=/\s/;function Lt(t){for(var e=t.length;e--&&Wt.test(t.charAt(e)););return e}var Rt=/^\s+/;function qt(t){return t&&t.slice(0,Lt(t)+1).replace(Rt,"")}function g(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var z=NaN,Nt=/^[-+]0x[0-9a-f]+$/i,zt=/^0b[01]+$/i,Ht=/^0o[0-7]+$/i,Gt=parseInt;function H(t){if(typeof t=="number")return t;if(Ct(t))return z;if(g(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=g(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=qt(t);var n=zt.test(t);return n||Ht.test(t)?Gt(t.slice(2),n?2:8):Nt.test(t)?z:+t}function nt(t){return t}var Jt="[object AsyncFunction]",Kt="[object Function]",Qt="[object GeneratorFunction]",Xt="[object Proxy]";function rt(t){if(!g(t))return!1;var e=P(t);return e==Kt||e==Qt||e==Jt||e==Xt}var Yt=E["__core-js_shared__"];const I=Yt;var G=function(){var t=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Zt(t){return!!G&&G in t}var te=Function.prototype,ee=te.toString;function ne(t){if(t!=null){try{return ee.call(t)}catch{}try{return t+""}catch{}}return""}var re=/[\\^$.*+?()[\]{}|]/g,oe=/^\[object .+?Constructor\]$/,ue=Function.prototype,ie=Object.prototype,ae=ue.toString,ce=ie.hasOwnProperty,fe=RegExp("^"+ae.call(ce).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function se(t){if(!g(t)||Zt(t))return!1;var e=rt(t)?fe:oe;return e.test(ne(t))}function le(t,e){return t==null?void 0:t[e]}function de(t,e){var n=le(t,e);return se(n)?n:void 0}function pe(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var ve=800,be=16,ye=Date.now;function ge(t){var e=0,n=0;return function(){var r=ye(),o=be-(r-n);if(n=r,o>0){if(++e>=ve)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function me(t){return function(){return t}}var he=function(){try{var t=de(Object,"defineProperty");return t({},"",{}),t}catch{}}();const V=he;var je=V?function(t,e){return V(t,"toString",{configurable:!0,enumerable:!1,value:me(e),writable:!0})}:nt;const we=je;var Oe=ge(we);const _e=Oe;var $e=9007199254740991,Ae=/^(?:0|[1-9]\d*)$/;function ot(t,e){var n=typeof t;return e=e??$e,!!e&&(n=="number"||n!="symbol"&&Ae.test(t))&&t>-1&&t%1==0&&t<e}function ut(t,e,n){e=="__proto__"&&V?V(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function B(t,e){return t===e||t!==t&&e!==e}var xe=Object.prototype,Te=xe.hasOwnProperty;function it(t,e,n){var r=t[e];(!(Te.call(t,e)&&B(r,n))||n===void 0&&!(e in t))&&ut(t,e,n)}function Me(t,e,n,r){var o=!n;n||(n={});for(var c=-1,f=e.length;++c<f;){var i=e[c],d=void 0;d===void 0&&(d=t[i]),o?ut(n,i,d):it(n,i,d)}return n}var J=Math.max;function Se(t,e,n){return e=J(e===void 0?t.length-1:e,0),function(){for(var r=arguments,o=-1,c=J(r.length-e,0),f=Array(c);++o<c;)f[o]=r[e+o];o=-1;for(var i=Array(e+1);++o<e;)i[o]=r[o];return i[e]=n(f),pe(t,this,i)}}function at(t,e){return _e(Se(t,e,nt),t+"")}var Ve=9007199254740991;function ct(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Ve}function U(t){return t!=null&&ct(t.length)&&!rt(t)}function ft(t,e,n){if(!g(n))return!1;var r=typeof e;return(r=="number"?U(n)&&ot(e,n.length):r=="string"&&e in n)?B(n[e],t):!1}function Ee(t){return at(function(e,n){var r=-1,o=n.length,c=o>1?n[o-1]:void 0,f=o>2?n[2]:void 0;for(c=t.length>3&&typeof c=="function"?(o--,c):void 0,f&&ft(n[0],n[1],f)&&(c=o<3?void 0:c,o=1),e=Object(e);++r<o;){var i=n[r];i&&t(e,i,r,c)}return e})}var Pe=Object.prototype;function W(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Pe;return t===n}function De(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Ue="[object Arguments]";function K(t){return D(t)&&P(t)==Ue}var st=Object.prototype,Fe=st.hasOwnProperty,Ie=st.propertyIsEnumerable,Ce=K(function(){return arguments}())?K:function(t){return D(t)&&Fe.call(t,"callee")&&!Ie.call(t,"callee")};const ke=Ce;function Be(){return!1}var lt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Q=lt&&typeof module=="object"&&module&&!module.nodeType&&module,We=Q&&Q.exports===lt,X=We?E.Buffer:void 0,Le=X?X.isBuffer:void 0,Re=Le||Be;const qe=Re;var Ne="[object Arguments]",ze="[object Array]",He="[object Boolean]",Ge="[object Date]",Je="[object Error]",Ke="[object Function]",Qe="[object Map]",Xe="[object Number]",Ye="[object Object]",Ze="[object RegExp]",tn="[object Set]",en="[object String]",nn="[object WeakMap]",rn="[object ArrayBuffer]",on="[object DataView]",un="[object Float32Array]",an="[object Float64Array]",cn="[object Int8Array]",fn="[object Int16Array]",sn="[object Int32Array]",ln="[object Uint8Array]",dn="[object Uint8ClampedArray]",pn="[object Uint16Array]",vn="[object Uint32Array]",s={};s[un]=s[an]=s[cn]=s[fn]=s[sn]=s[ln]=s[dn]=s[pn]=s[vn]=!0;s[Ne]=s[ze]=s[rn]=s[He]=s[on]=s[Ge]=s[Je]=s[Ke]=s[Qe]=s[Xe]=s[Ye]=s[Ze]=s[tn]=s[en]=s[nn]=!1;function bn(t){return D(t)&&ct(t.length)&&!!s[P(t)]}function yn(t){return function(e){return t(e)}}var dt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_=dt&&typeof module=="object"&&module&&!module.nodeType&&module,gn=_&&_.exports===dt,C=gn&&tt.process,mn=function(){try{var t=_&&_.require&&_.require("util").types;return t||C&&C.binding&&C.binding("util")}catch{}}();const Y=mn;var Z=Y&&Y.isTypedArray,hn=Z?yn(Z):bn;const jn=hn;var wn=Object.prototype,On=wn.hasOwnProperty;function pt(t,e){var n=Bt(t),r=!n&&ke(t),o=!n&&!r&&qe(t),c=!n&&!r&&!o&&jn(t),f=n||r||o||c,i=f?De(t.length,String):[],d=i.length;for(var a in t)(e||On.call(t,a))&&!(f&&(a=="length"||o&&(a=="offset"||a=="parent")||c&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||ot(a,d)))&&i.push(a);return i}function _n(t,e){return function(n){return t(e(n))}}var $n=_n(Object.keys,Object);const An=$n;var xn=Object.prototype,Tn=xn.hasOwnProperty;function Mn(t){if(!W(t))return An(t);var e=[];for(var n in Object(t))Tn.call(t,n)&&n!="constructor"&&e.push(n);return e}function Sn(t){return U(t)?pt(t):Mn(t)}var Vn=Object.prototype,En=Vn.hasOwnProperty,Pn=Ee(function(t,e){if(W(e)||U(e)){Me(e,Sn(e),t);return}for(var n in e)En.call(e,n)&&it(t,n,e[n])});const Dn=Pn;function Un(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var Fn=Object.prototype,In=Fn.hasOwnProperty;function Cn(t){if(!g(t))return Un(t);var e=W(t),n=[];for(var r in t)r=="constructor"&&(e||!In.call(t,r))||n.push(r);return n}function kn(t){return U(t)?pt(t,!0):Cn(t)}var Bn=function(){return E.Date.now()};const k=Bn;var Wn="Expected a function",Ln=Math.max,Rn=Math.min;function qn(t,e,n){var r,o,c,f,i,d,a=0,u=!1,l=!1,v=!0;if(typeof t!="function")throw new TypeError(Wn);e=H(e)||0,g(n)&&(u=!!n.leading,l="maxWait"in n,c=l?Ln(H(n.maxWait)||0,e):c,v="trailing"in n?!!n.trailing:v);function b(p){var y=r,w=o;return r=o=void 0,a=p,f=t.apply(w,y),f}function m(p){return a=p,i=setTimeout(h,e),u?b(p):f}function j(p){var y=p-d,w=p-a,L=e-y;return l?Rn(L,c-w):L}function A(p){var y=p-d,w=p-a;return d===void 0||y>=e||y<0||l&&w>=c}function h(){var p=k();if(A(p))return x(p);i=setTimeout(h,j(p))}function x(p){return i=void 0,v&&r?b(p):(r=o=void 0,f)}function bt(){i!==void 0&&clearTimeout(i),a=0,r=d=o=i=void 0}function yt(){return i===void 0?f:x(k())}function F(){var p=k(),y=A(p);if(r=arguments,o=this,d=p,y){if(i===void 0)return m(d);if(l)return clearTimeout(i),i=setTimeout(h,e),b(d)}return i===void 0&&(i=setTimeout(h,e)),f}return F.cancel=bt,F.flush=yt,F}var vt=Object.prototype,Nn=vt.hasOwnProperty,zn=at(function(t,e){t=Object(t);var n=-1,r=e.length,o=r>2?e[2]:void 0;for(o&&ft(e[0],e[1],o)&&(r=1);++n<r;)for(var c=e[n],f=kn(c),i=-1,d=f.length;++i<d;){var a=f[i],u=t[a];(u===void 0||B(u,vt[a])&&!Nn.call(t,a))&&(t[a]=c[a])}return t});const Hn=zn,Gn=({images:t=[],options:e})=>{e=Dn(e,{inline:!1});const n=document.createElement("div"),r=R("div",{style:{display:"none"},class:["__viewer-token"]},t.map(i=>R("img",typeof i=="string"?{src:i}:i)));q(r,n);const o=n.firstElementChild;document.body.appendChild(o);const c=new $(o,e),f=c.destroy.bind(c);return c.destroy=function(){return f(),q(null,n),c},c.show(),o.addEventListener("hidden",function(){this.viewer===c&&c.destroy()}),c},Jn=({name:t="viewer",debug:e=!1}={})=>{async function n(u,l,v=!1,b=!1){await M(),!(b&&!r(u))&&(v||!u[`$${t}`]?(f(u),u[`$${t}`]=new $(u,l),a("Viewer created")):(u[`$${t}`].update(),a("Viewer updated")))}function r(u){const l=u.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g),v=l?l.join(""):void 0;return u.__viewerImageDiffCache===v?(a("Element change detected, but image(s) has not changed"),!1):(a("Image change detected"),u.__viewerImageDiffCache=v,!0)}function o(u,l,v,b){i(u);const m=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(!m){a("Observer not supported");return}const j=new m(h=>{h.forEach(x=>{a(`Viewer mutation:${x.type}`),v(u,l,b,!0)})}),A={attributes:!0,childList:!0,characterData:!0,subtree:!0};j.observe(u,A),u.__viewerMutationObserver=j,a("Observer created")}function c(u,l,v,b){u.__viewerUnwatch=T(()=>l.value,(m,j)=>{a("Change detected by watcher: ",l.value),b(u,m,!0,!1)},{deep:!0}),a("Watcher created, expression: ",l.value)}function f(u){!u[`$${t}`]||(u[`$${t}`].destroy(),delete u[`$${t}`],a("Viewer destroyed"))}function i(u){!u.__viewerMutationObserver||(u.__viewerMutationObserver.disconnect(),delete u.__viewerMutationObserver,a("observer destroyed"))}function d(u){!u.__viewerUnwatch||(u.__viewerUnwatch(),delete u.__viewerUnwatch,a("Watcher destroyed"))}function a(...u){e&&console.log(...u)}return{mounted(u,l,v){a("Viewer bind");const b=qn(n,50);b(u,l.value),c(u,l,v,b),l.modifiers.static||o(u,l.value,b,l.modifiers.rebuild)},unmounted(u){a("Viewer unbind"),i(u),d(u),f(u)}}},Kn=gt({name:"Viewer",props:{images:{type:Array,default:()=>[]},rebuild:{type:Boolean,default:!1},trigger:{type:Object,default:null},options:{type:Object,default:()=>null}},emits:["inited"],setup(t,{emit:e}){let n;const r=mt();function o(){n=new $(r.value,t.options),e("inited",n)}function c(){n&&n.destroy()}function f(){c(),o()}function i(){n?(n.update(),e("inited",n)):o()}function d(){t.rebuild?f():i()}const a={deep:!0};return T(()=>t.images,()=>{M(()=>{d()})},a),T(()=>t.trigger,()=>{M(()=>{d()})},a),T(()=>t.options,()=>{M(()=>{f()})},a),ht(()=>o()),jt(()=>c()),{root:r,createViewer:o,rebuildViewer:f,updateViewer:i,destroyViewer:c}}}),Qn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n},Xn={ref:"root"};function Yn(t,e,n,r,o,c){return wt(),Ot("div",Xn,[_t(t.$slots,"default",{images:t.images,options:t.options})],512)}const Zn=Qn(Kn,[["render",Yn]]),nr={install(t,{name:e="viewer",debug:n=!1,defaultOptions:r}={}){r&&$.setDefaults(r),t.config.globalProperties[`$${e}Api`]=Gn,t.component(e,Hn(Zn,{name:e})),t.directive(e,Jn({name:e,debug:n}))},setDefaults(t){$.setDefaults(t)}};export{nr as r};