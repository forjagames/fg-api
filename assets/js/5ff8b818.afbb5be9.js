"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[158],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7408:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l="Identity",c={unversionedId:"services/identity",id:"services/identity",title:"Identity",description:"The Identity Service allows your users to authenticate their accounts through different mechanisms.",source:"@site/docs/services/identity.md",sourceDirName:"services",slug:"/services/identity",permalink:"/fg-api/docs/services/identity",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/services/identity.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/fg-api/docs/services/intro"},next:{title:"Logger",permalink:"/fg-api/docs/services/logger"}},u=[{value:"Set up using Portal",id:"set-up-using-portal",children:[{value:"Login modes",id:"login-modes",children:[],level:3},{value:"Settings",id:"settings",children:[],level:3},{value:"Front-End",id:"front-end",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"identity"},"Identity"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Identity Service")," allows your users to authenticate their accounts through different mechanisms."),(0,o.kt)("h2",{id:"set-up-using-portal"},"Set up using Portal"),(0,o.kt)("h3",{id:"login-modes"},"Login modes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Closeable window mode."),(0,o.kt)("li",{parentName:"ul"},"Redirect mode.")),(0,o.kt)("h3",{id:"settings"},"Settings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"E-mail Authentication"),": Login with an e-mail address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wallet Authentication"),": Login with a ",(0,o.kt)("a",{parentName:"li",href:"/fg-api/docs/misc/glossary"},"Metamask")," wallet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Success URL"),": Return URL for successfull cases. It's required if you are working in redirect mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fail URL"),": Return URL for unsuccessfull cases. It's required if you are working in redirect mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sign Up"),": Shows or hides the sign up option."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sign Up URL")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": Allows you to use a custom sign up URL. It only works in redirect mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Guest Accounts"),": Automatically creates an (unconfirmed) account if it doesn't exists and signs in to it. It only works if Sign UP is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terms URL"),": Your project terms & conditions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Privacy URL"),": Your project privacy policy.")),(0,o.kt)("h3",{id:"front-end"},"Front-End"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Open Page"),": Opens the login website. In order to view your ",(0,o.kt)("inlineCode",{parentName:"li"},"identity page"),", you need to select a credential and use your credential secret."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customize Style"),": It allows you to change the style of your ",(0,o.kt)("inlineCode",{parentName:"li"},"identity page"),", by writing css code.")),(0,o.kt)("p",null,"Customized style example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@import url(https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap);\nbody,\nhtml {\n  background-color: #191919!important;\n  font-family: 'Yusei Magic',sans-serif\n}\n* {\n  font-family: 'Yusei Magic',sans-serif\n}\n#terms-text a,\n#terms-text span,\nh3,\nlabel {\n  color: #ecdbba!important;\n  text-shadow: 1px 1px 2px #000\n}\nbutton {\n  text-shadow: 1px 1px 2px #000;\n  transition: all .3s ease-in-out\n}\nbutton.bg-transparent {\n  text-shadow: unset\n}\n#pages-container > div:first-child {\n  background-color: #2d4263!important;\n  box-shadow: 0 0 10px 2px #fff\n}\n.text-red-600 {\n  color: #c84b31\n}\n.bg-yellow-600 {\n  background-color: #de834d!important\n}\n.bg-blue-600 {\n  background-color: #406882!important\n}\n.bg-gray-500 {\n  background-color: #6b7280!important\n}\nbutton:hover {\n  opacity: .8\n}\n")))}d.isMDXComponent=!0}}]);