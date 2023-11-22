"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3174:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4},i="Settings - Project",c={unversionedId:"dashboard/project_settings",id:"dashboard/project_settings",title:"Settings - Project",description:"The project settings page allows you to configure, enable, disable, or delete the project.",source:"@site/docs/dashboard/project_settings.md",sourceDirName:"dashboard",slug:"/dashboard/project_settings",permalink:"/fg-api/docs/dashboard/project_settings",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/dashboard/project_settings.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Project Dashboard",permalink:"/fg-api/docs/dashboard/project"},next:{title:"Add New Credential - Project",permalink:"/fg-api/docs/dashboard/project_add-new-credential"}},s=[{value:"Payment Settings Section",id:"payment-settings-section",children:[{value:"Automatically Pay with Account Credit",id:"automatically-pay-with-account-credit",children:[],level:3}],level:2},{value:"Danger Zone Section",id:"danger-zone-section",children:[{value:"Activating/Deactivating Projects",id:"activatingdeactivating-projects",children:[],level:3},{value:"Deleting Projects",id:"deleting-projects",children:[],level:3}],level:2}],l={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"settings---project"},"Settings - Project"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"project settings page")," allows you to configure, enable, disable, or delete the project."),(0,a.kt)("p",null,"You can access ",(0,a.kt)("inlineCode",{parentName:"p"},"project settings page")," using the menu on the ",(0,a.kt)("a",{parentName:"p",href:"/fg-api/docs/dashboard/project"},"project dashboard"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sections",src:n(4273).Z})),(0,a.kt)("h2",{id:"payment-settings-section"},"Payment Settings Section"),(0,a.kt)("h3",{id:"automatically-pay-with-account-credit"},"Automatically Pay with Account Credit"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Automatically Pay with Account Credit")," option streamlines the payment process for your projects. When this feature is enabled, Nexus will automatically settle invoices at the end of the billing cycle using the available account credit. This ensures a seamless and hassle-free payment experience, especially if your account has sufficient credit to cover the incurred charges."),(0,a.kt)("p",null,"Here's how it works:\nEnabled: When this option is ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled"),", Nexus will automatically deduct the necessary funds from your account credit to settle outstanding invoices. If the account credit is insufficient to cover the charges, Nexus will resort to other configured payment methods to complete the transaction."),(0,a.kt)("p",null,"Disabled: Setting this option to ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," means that automatic payments using account credit will be disabled. However, keep in mind that other configured automatic payment methods, such as subscription payments through PayPal, will continue to operate as usual. In such cases, you'll still benefit from the convenience of automatic payments, just not using the account credit."),(0,a.kt)("p",null,"It's important to monitor your account credit balance and configure additional payment methods as needed to ensure uninterrupted service. This feature provides flexibility and convenience in managing your project's financial aspects."),(0,a.kt)("h2",{id:"danger-zone-section"},"Danger Zone Section"),(0,a.kt)("h3",{id:"activatingdeactivating-projects"},"Activating/Deactivating Projects"),(0,a.kt)("p",null,"You have the option to deactivate your projects, which can be useful for reducing costs when you are not actively using them or for stopping services in case of an emergency. When you deactivate a project, client access is blocked and any requests pointing to the disabled project will be rejected. It's important to note that deactivation is not the same as deleting a project, as you can reactivate the project later if needed."),(0,a.kt)("h3",{id:"deleting-projects"},"Deleting Projects"),(0,a.kt)("p",null,"Deleting a project is a permanent action and cannot be undone. When you delete a project, all data associated with it, including files, settings, and configurations, will be permanently deleted from our system. Therefore, it's important to make sure that you really want to delete the project before proceeding."),(0,a.kt)("p",null,"If you delete a project by mistake, there's no way to recover it, so it's essential to be careful when choosing to delete a project. We recommend that you double-check that you have backed up any necessary data before deleting a project."),(0,a.kt)("p",null,"If you're sure that you want to proceed with deleting a project, you can do so by accessing the project's settings and selecting the \"Delete project\" option. Once you confirm the deletion, the project will be removed from our system, and all data associated with it will be permanently deleted."))}p.isMDXComponent=!0},4273:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project_settings-fc952efd4a371f15e8c3fcf6b28289fe.png"}}]);