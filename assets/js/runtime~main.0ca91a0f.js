!function(){"use strict";var e,t,n,r,f,o={},c={};function u(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}u.m=o,u.c=c,e=[],u.O=function(t,n,r,f){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],f=e[d][2];for(var c=!0,a=0;a<n.length;a++)(!1&f||o>=f)&&Object.keys(u.O).every((function(e){return u.O[e](n[a])}))?n.splice(a--,1):(c=!1,f<o&&(o=f));if(c){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}f=f||0;for(var d=e.length;d>0&&e[d-1][2]>f;d--)e[d]=e[d-1];e[d]=[n,r,f]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);u.r(f);var o={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},u.d(f,o),f},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return"assets/js/"+({0:"8b62f0d7",53:"935f2afb",85:"1f391b9e",158:"5ff8b818",204:"297caa80",237:"1df93b7f",282:"7b648b95",330:"1288598c",414:"393be207",468:"f37a86dd",514:"1be78505",592:"621bf474",608:"9e4087bc",671:"0e384e19",777:"cb5a48d2",900:"1ef78706",918:"17896441",944:"f4f1c08f"}[e]||e)+"."+{0:"aa6e66d4",53:"4f90af45",75:"56cc41b8",85:"333902c1",158:"4e34fd88",204:"5f87299b",237:"2c77aff8",282:"5c4a8c43",330:"5791c54b",414:"9eaf71ec",468:"9d5e0f45",514:"356257fe",592:"633a9976",608:"68aea30a",671:"cbbd5349",777:"93d03c3c",829:"7c3b8ea6",900:"d5b55c01",918:"7cfb01bf",944:"c4ab9281"}[e]+".js"},u.miniCssF=function(e){return"assets/css/styles.65719382.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},f="website:",u.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var c,a;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var s=i[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==f+n){c=s;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",f+n),c.src=e),r[e]=[t];var b=function(t,n){c.onerror=c.onload=null,clearTimeout(l);var f=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(b.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=b.bind(null,c.onerror),c.onload=b.bind(null,c.onload),a&&document.head.appendChild(c)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/fg-api/",u.gca=function(e){return e={17896441:"918","8b62f0d7":"0","935f2afb":"53","1f391b9e":"85","5ff8b818":"158","297caa80":"204","1df93b7f":"237","7b648b95":"282","1288598c":"330","393be207":"414",f37a86dd:"468","1be78505":"514","621bf474":"592","9e4087bc":"608","0e384e19":"671",cb5a48d2:"777","1ef78706":"900",f4f1c08f:"944"}[e]||e,u.p+u.u(e)},function(){var e={303:0,532:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var f=new Promise((function(n,f){r=e[t]=[n,f]}));n.push(r[2]=f);var o=u.p+u.u(t),c=new Error;u.l(o,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var f=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+f+": "+o+")",c.name="ChunkLoadError",c.type=f,c.request=o,r[1](c)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,f,o=n[0],c=n[1],a=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(r in c)u.o(c,r)&&(u.m[r]=c[r]);if(a)var d=a(u)}for(t&&t(n);i<o.length;i++)f=o[i],u.o(e,f)&&e[f]&&e[f][0](),e[o[i]]=0;return u.O(d)},n=self.webpackChunkwebsite=self.webpackChunkwebsite||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();