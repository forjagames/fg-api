"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[468],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3997:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Credential",c={unversionedId:"credentials/credential",id:"credentials/credential",title:"Credential",description:"The Credentials allows the interaction between your application (or game) and the API.",source:"@site/docs/credentials/credential.md",sourceDirName:"credentials",slug:"/credentials/credential",permalink:"/fg-api/docs/credentials/credential",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/credentials/credential.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"General Settings",permalink:"/fg-api/docs/dashboard/settings"},next:{title:"Restrictions",permalink:"/fg-api/docs/credentials/restrictions"}},u=[{value:"Key, Secret and Alias",id:"key-secret-and-alias",children:[],level:2},{value:"Security",id:"security",children:[],level:2},{value:"Actions",id:"actions",children:[{value:"Save alias",id:"save-alias",children:[],level:3},{value:"Regenerate secret",id:"regenerate-secret",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"credential"},"Credential"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Credentials")," allows the interaction between your application (or game) and the ",(0,a.kt)("inlineCode",{parentName:"p"},"API"),"."),(0,a.kt)("p",null,"The first step to use the API is to access from the app (or game) using the key and secret of your credential."),(0,a.kt)("p",null,"You can have up to 3 credentials per project."),(0,a.kt)("h2",{id:"key-secret-and-alias"},"Key, Secret and Alias"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," is the identifier of your credential. This value cannot be changed."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," is like a password. This value can be changed by the administrator, but you will need to update your game with the new secret in order to restore the access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"API"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Alias")," is an optional field. It is only visibile on this Portal. It is useful to identify your credentials with a friendly name. In the future, the alias will be used to generate friendlier URLs."),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"To increase the security of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Credentials"),", you can use the ",(0,a.kt)("a",{parentName:"p",href:"/fg-api/docs/credentials/restrictions"},"Restrictions"),"."),(0,a.kt)("p",null,"The Restrictions will limit access to your credentials by applying rules."),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("h3",{id:"save-alias"},"Save alias"),(0,a.kt)("p",null,"This option allows you to change the alias of the credentials. The change will not affect the use of the service, it is simply a visual change."),(0,a.kt)("h3",{id:"regenerate-secret"},"Regenerate secret"),(0,a.kt)("p",null,"It is recommended to use this option in case you suspect someone else has your secret, or in case you have lost it.\nIf you generate a new secret, the old one will stop working forever. This implies that you must update the secret of the application that is using this credential."),(0,a.kt)("h3",{id:"delete"},"Delete"),(0,a.kt)("p",null,"This action deletes the credential permanently."))}p.isMDXComponent=!0}}]);