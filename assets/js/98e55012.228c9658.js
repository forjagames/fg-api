"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[503],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return r?i.createElement(f,s(s({ref:t},d),{},{components:r})):i.createElement(f,s({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2212:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],a={sidebar_position:4},l="Files storage: Add or edit permissions",p={unversionedId:"storage/files-add-edit-permissions",id:"storage/files-add-edit-permissions",title:"Files storage: Add or edit permissions",description:"Permissions will allow or restrict end users to perform actions on files and folders.",source:"@site/docs/storage/files-add-edit-permissions.md",sourceDirName:"storage",slug:"/storage/files-add-edit-permissions",permalink:"/fg-api/docs/storage/files-add-edit-permissions",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/storage/files-add-edit-permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Files Explorer",permalink:"/fg-api/docs/storage/files-explorer"},next:{title:"FG-Api CLI _[Deprecated]_",permalink:"/fg-api/docs/integrations/cli"}},d=[{value:"Form fields",id:"form-fields",children:[],level:2},{value:"Permission types",id:"permission-types",children:[],level:2}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"files-storage-add-or-edit-permissions"},"Files storage: Add or edit permissions"),(0,o.kt)("p",null,"Permissions will allow or restrict end users to perform actions on files and folders."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Main",src:r(1122).Z})),(0,o.kt)("h2",{id:"form-fields"},"Form fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Path"),": Path of the permission. It accepts ",(0,o.kt)("a",{parentName:"li",href:"/fg-api/docs/misc/glossary#wildcard"},"wildcards"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name"),": Name or description of the permission. This will help you to identify it easily."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": Permission type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Priority"),": Priority of the permission. Permissions work like hierarchies. All of them are linked. The priority is used to know in which position the permission should be, since permissions with higher priority can override those with lower priority. The higher the number, the higher the priority."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security"),": Restrictions and allowances that will apply to the permission (read, create, edit, delete).")),(0,o.kt)("h2",{id:"permission-types"},"Permission types"),(0,o.kt)("p",null,"Permission types are filters that are used when applying allowances and restrictions. They are combined with a ",(0,o.kt)("a",{parentName:"p",href:"/fg-api/docs/misc/glossary#wildcard"},"wildcard")," to determine which ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials")," the different permissions correspond to."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Credentials"),(0,o.kt)("li",{parentName:"ul"},"Users")))}m.isMDXComponent=!0},1122:function(e,t,r){t.Z=r.p+"assets/images/storage_permissions_add-ed3deb73737e41742aeef43ddbff72b4.png"}}]);