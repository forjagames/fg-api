"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4609:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},l="Billing",a={unversionedId:"billingx/billing",id:"billingx/billing",title:"Billing",description:"In this section we will explain Nexus billing.",source:"@site/docs/billingx/billing.md",sourceDirName:"billingx",slug:"/billingx/billing",permalink:"/fg-api/docs/billingx/billing",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/billingx/billing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/fg-api/docs/integrations/javascript-sdk/intro"},next:{title:"Glossary",permalink:"/fg-api/docs/misc/glossary"}},s=[{value:"Resources",id:"resources",children:[],level:2},{value:"Services",id:"services",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"How do we calculate daily consumption?",id:"how-do-we-calculate-daily-consumption",children:[],level:3}],level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"billing"},"Billing"),(0,i.kt)("p",null,"In this section we will explain Nexus billing."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bandwidth: bandwidth consumed by each request."),(0,i.kt)("li",{parentName:"ul"},"Requests: calls to different services."),(0,i.kt)("li",{parentName:"ul"},"Storage: storage used both in files by the ",(0,i.kt)("a",{parentName:"li",href:"/fg-api/docs/services/storage"},"Storage Service")," and in records in our databases."),(0,i.kt)("li",{parentName:"ul"},"Store fee: fee charged for sales made within the blockchain ",(0,i.kt)("a",{parentName:"li",href:"/fg-api/docs/services/store"},"Store Service"),".")),(0,i.kt)("h2",{id:"services"},"Services"),(0,i.kt)("p",null,"The services are provided with a resource reservation system on demand."),(0,i.kt)("p",null,"Based on how projects are used, the Nexus system reserves resources so your project can work."),(0,i.kt)("p",null,"The total of the resources reserved is registered day by day. The costs are applied to the sum of the records since the last payment made."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"how-do-we-calculate-daily-consumption"},"How do we calculate daily consumption?"),(0,i.kt)("p",null,"For the calculation to be independent of the number of days in the month, we use the following formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Precise daily cost (PDC) = (Total monthly cost of all projects) * 12 / 365\n")),(0,i.kt)("p",null,"Then, we get a number with a lot of decimals."),(0,i.kt)("p",null,"To round up the value, we use this last formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Final daily cost (FDC) = Round(PDC * (10 ^ 8)) / (10 ^ 8)\n")),(0,i.kt)("p",null,"For example, if the monthly cost of all your projects is 2.5 dollars:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PDC = 2.5 * 12 / 365 = 0.08219178082191780821917808219178\nFDC = Round(PDC * 10 ^ 8) / (10 ^ 8) = 8219178 / (10 ^ 8) = 0.08219178\n\nFinal daily cost = 0.08219178\n")),(0,i.kt)("p",null,"At the end of the month, the monthly cost of each project is obtained by adding the consumption measured on each day. Then each project's total is rounded to two decimal places, and added, to determine the total cost of the invoice."))}d.isMDXComponent=!0}}]);