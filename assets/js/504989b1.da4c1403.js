"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[791],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4609:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={sidebar_position:1},s="Billing",c={unversionedId:"billingx/billing",id:"billingx/billing",title:"Billing",description:"In this section we will explain Nexus billing.",source:"@site/docs/billingx/billing.md",sourceDirName:"billingx",slug:"/billingx/billing",permalink:"/fg-api/docs/billingx/billing",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/billingx/billing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rest API",permalink:"/fg-api/docs/integrations/rest-api"},next:{title:"Glossary",permalink:"/fg-api/docs/misc/glossary"}},u=[{value:"Resources",id:"resources",children:[],level:2},{value:"Services",id:"services",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"How do we calculate daily consumption?",id:"how-do-we-calculate-daily-consumption",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"billing"},"Billing"),(0,o.kt)("p",null,"In this section we will explain Nexus billing."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bandwidth: bandwidth consumed by each request."),(0,o.kt)("li",{parentName:"ul"},"Requests: calls to different services."),(0,o.kt)("li",{parentName:"ul"},"Storage: storage used both in files by the ",(0,o.kt)("a",{parentName:"li",href:"/fg-api/docs/services/storage"},"Storage Service")," and in records in our databases."),(0,o.kt)("li",{parentName:"ul"},"Store fee: fee charged for sales made within the blockchain ",(0,o.kt)("a",{parentName:"li",href:"/fg-api/docs/services/store"},"Store Service"),".")),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("p",null,"The services are provided with a resource reservation system on demand."),(0,o.kt)("p",null,"Based on how projects are used, the Nexus system reserves resources so your project can work."),(0,o.kt)("p",null,"The total of the resources reserved is registered day by day. The costs are applied to the sum of the records since the last payment made."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-do-we-calculate-daily-consumption"},"How do we calculate daily consumption?"),(0,o.kt)("p",null,"For the calculation to be independent of the number of days in the month, we use the following formula:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Precise daily cost (PDC) = (Total monthly cost of all projects) * 12 / 365\n")),(0,o.kt)("p",null,"Then, we get a number with a lot of decimals."),(0,o.kt)("p",null,"To round up the value, we use this last formula:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Final daily cost (FDC) = Round(PDC * (10 ^ 8)) / (10 ^ 8)\n")),(0,o.kt)("p",null,"For example, if the monthly cost of all your projects is 2.5 dollars:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PDC = 2.5 * 12 / 365 = 0.08219178082191780821917808219178\nFDC = Round(PDC * 10 ^ 8) / (10 ^ 8) = 8219178 / (10 ^ 8) = 0.08219178\n\nFinal daily cost = 0.08219178\n")),(0,o.kt)("p",null,"At the end of the month, the monthly cost of each project is obtained by adding the consumption measured on each day. Then each project's total is rounded to two decimal places, and added, to determine the total cost of the invoice."))}p.isMDXComponent=!0}}]);