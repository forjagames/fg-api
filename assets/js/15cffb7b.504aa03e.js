"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6667:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:7},o="Account And Payments Settings",s={unversionedId:"dashboard/settings",id:"dashboard/settings",title:"Account And Payments Settings",description:"The settings page allows users to configure his account and the payment methods.",source:"@site/docs/dashboard/settings.md",sourceDirName:"dashboard",slug:"/dashboard/settings",permalink:"/fg-api/docs/dashboard/settings",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/dashboard/settings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Billing",permalink:"/fg-api/docs/dashboard/billing"},next:{title:"Add New Team Member - Project",permalink:"/fg-api/docs/dashboard/project_add-team-member"}},c=[{value:"How to open the settings page?",id:"how-to-open-the-settings-page",children:[],level:2},{value:"Edit profile",id:"edit-profile",children:[],level:2},{value:"Change password",id:"change-password",children:[],level:2},{value:"Payments settings",id:"payments-settings",children:[{value:"Automatically Pay with Account Credit",id:"automatically-pay-with-account-credit",children:[],level:3}],level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"account-and-payments-settings"},"Account And Payments Settings"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"settings page")," allows users to configure his account and the payment methods."),(0,i.kt)("h2",{id:"how-to-open-the-settings-page"},"How to open the settings page?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sections",src:n(1259).Z})),(0,i.kt)("h1",{id:"settings-page"},"Settings page"),(0,i.kt)("h2",{id:"edit-profile"},"Edit profile"),(0,i.kt)("p",null,"In this section you can edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"account information"),", and you can link ",(0,i.kt)("a",{parentName:"p",href:"/fg-api/docs/misc/glossary#Wallet"},"wallets")," to your account."),(0,i.kt)("h2",{id:"change-password"},"Change password"),(0,i.kt)("p",null,"In this section you can change your password."),(0,i.kt)("h2",{id:"payments-settings"},"Payments settings"),(0,i.kt)("p",null,"In this section you can setup your payment methods."),(0,i.kt)("h1",{id:"payment-settings"},"Payment Settings"),(0,i.kt)("h3",{id:"automatically-pay-with-account-credit"},"Automatically Pay with Account Credit"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Automatically Pay with Account Credit")," option streamlines the payment process for your projects. When this feature is enabled, Nexus will automatically settle invoices at the end of the billing cycle using the available account credit. This ensures a seamless and hassle-free payment experience, especially if your account has sufficient credit to cover the incurred charges."),(0,i.kt)("p",null,"Here's how it works:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enabled"),": When this option is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled"),", Nexus will automatically deduct the necessary funds from your account credit to settle outstanding invoices. This includes charges associated with your selected plan as well as any additional fees that may arise from exceeding the usage limits of your plan. If the account credit is insufficient to cover the total charges, Nexus will prioritize other configured payment methods, ensuring uninterrupted service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Disabled"),": Setting this option to ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," means that automatic payments using account credit will be disabled. However, keep in mind that other configured automatic payment methods, such as subscription payments through PayPal, will continue to operate as usual. In such cases, charges beyond your plan's limits will be automatically billed using the selected payment method, while the account credit remains untouched."))),(0,i.kt)("p",null,"It's important to monitor your account credit balance and configure additional payment methods as needed to ensure uninterrupted service, especially if your usage may result in charges beyond the plan's limits. This feature provides flexibility and convenience in managing your project's financial aspects."),(0,i.kt)("p",null,"Feel free to enable or disable this option based on your preferences and project requirements."))}d.isMDXComponent=!0},1259:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account_settings_menu-a82e59b4422adfd98bb7dc7a2b25fb33.png"}}]);