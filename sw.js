if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),a={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>a[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/append_android-BgT80phP.css",revision:null},{url:"assets/css/append_darwin-zgRYuEjA.css",revision:null},{url:"assets/css/append_linux_vibrancy-COiZq8MS.css",revision:null},{url:"assets/css/append_linux-Dc-O5BIY.css",revision:null},{url:"assets/css/append_new-CEpljkTN.css",revision:null},{url:"assets/css/append_vibrancy-CsfEEuCM.css",revision:null},{url:"assets/css/append_win32-CQeNEjvl.css",revision:null},{url:"assets/css/main-DoWd1f7F.css",revision:null},{url:"assets/css/viewerjs-LQya4_Sc.css",revision:null},{url:"assets/css/vue3-bcui-D7pNTs0y.css",revision:null},{url:"assets/js/@fortawesome-DqJ9mTaX.js",revision:null},{url:"assets/js/@intlify-ChCEAseu.js",revision:null},{url:"assets/js/@stapxs-Av0aUqI6.js",revision:null},{url:"assets/js/@vue-D152I8w5.js",revision:null},{url:"assets/js/animejs-BNELU3II.js",revision:null},{url:"assets/js/axios-DB5SRndK.js",revision:null},{url:"assets/js/browser-image-compression-BzWLnoYn.js",revision:null},{url:"assets/js/clipboard-Dj2tY2T2.js",revision:null},{url:"assets/js/cssfilter-BjxKUPhv.js",revision:null},{url:"assets/js/detect-browser-ClY_l-h2.js",revision:null},{url:"assets/js/js-file-downloader-2iKIQ4_W.js",revision:null},{url:"assets/js/jsonpath-qiAZZT2e.js",revision:null},{url:"assets/js/main-cvMLWOBL.js",revision:null},{url:"assets/js/pofile-Bo26nNGM.js",revision:null},{url:"assets/js/rollup-plugin-node-polyfills-CZQjtHVe.js",revision:null},{url:"assets/js/semver-BSn730C1.js",revision:null},{url:"assets/js/spacingjs-Bfd_UwgF.js",revision:null},{url:"assets/js/tiny-pinyin-DxXvS-lr.js",revision:null},{url:"assets/js/uuid-C_lTrkZC.js",revision:null},{url:"assets/js/v-viewer-CuFKEnP4.js",revision:null},{url:"assets/js/vconsole-uZY_0U67.js",revision:null},{url:"assets/js/viewerjs-BV9ZP1np.js",revision:null},{url:"assets/js/vue-clipboard2-3HAv75or.js",revision:null},{url:"assets/js/vue-i18n-BxkTp08S.js",revision:null},{url:"assets/js/vue-l0sNRNKZ.js",revision:null},{url:"assets/js/vue3-bcui-DvQ2-t7H.js",revision:null},{url:"assets/js/vue3-danmaku-C4w1o-iM.js",revision:null},{url:"assets/js/xss-BkrKr5I6.js",revision:null},{url:"bcui/css/color-dark.css",revision:"db9b72f87e05656a1c48d344e97d9b97"},{url:"bcui/css/color-light.css",revision:"2283cd9950a772ad3fd2bb1feaf9317a"},{url:"bcui/css/prism-dark.css",revision:"6465e75d7c644a90c1dadd0f304540dc"},{url:"bcui/css/prism-light.css",revision:"1210d00d6d360df6e379e9b7ff4275f2"},{url:"bcui/css/style.css",revision:"a67002a2f63ee476b4724a122957e6c8"},{url:"bcui/js/auto-theme.js",revision:"38af66f11e1f79172f36245d7f0beedf"},{url:"bcui/js/main.js",revision:"9253e08e4704365ee7fbda09a32a575d"},{url:"css/append-dark.css",revision:"deea76f92bc7d14583cbf1b18a59b28b"},{url:"css/append-light.css",revision:"6885efee7d39f7deaafdd89f9986b4d5"},{url:"index.html",revision:"bbe70d6b7bb3e13f8a4e71b33576bb61"},{url:"js/amap.js",revision:"78ce99822d41bbb16bb9a6d5c7408bcd"},{url:"registerSW.js",revision:"0b61540ec03ec4d87ed878501adb9557"},{url:"manifest.webmanifest",revision:"58d964ee6be0757eea51526f9e51b952"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
