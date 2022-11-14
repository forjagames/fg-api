"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[780],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8847:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:6},s="Storage",p={unversionedId:"services/storage",id:"services/storage",title:"Storage",description:"The Storage Service provides you with different tools to store information.",source:"@site/docs/services/storage.md",sourceDirName:"services",slug:"/services/storage",permalink:"/fg-api/docs/services/storage",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/services/storage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Store",permalink:"/fg-api/docs/services/store"},next:{title:"Explorer",permalink:"/fg-api/docs/storage/explorer"}},u=[{value:"Storage Engines",id:"storage-engines",children:[{value:"1. Key Value Identity-Integrated DB",id:"1-key-value-identity-integrated-db",children:[{value:"Route structure",id:"route-structure",children:[],level:4},{value:"Structure:",id:"structure",children:[],level:4}],level:3},{value:"2. Key Value Simple DB",id:"2-key-value-simple-db",children:[],level:3},{value:"3. File Storage",id:"3-file-storage",children:[],level:3}],level:2},{value:"Dashboard",id:"dashboard",children:[{value:"Navigation Bar",id:"navigation-bar",children:[],level:3},{value:"Overview <em>Area</em>",id:"overview-area",children:[],level:3},{value:"Storage Engines <em>Area</em>",id:"storage-engines-area",children:[],level:3}],level:2},{value:"Explorer",id:"explorer",children:[],level:2}],d={toc:u};function c(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"storage"},"Storage"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage Service")," provides you with different tools to store information."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT: We are developing this service. It will be available very soon.")),(0,i.kt)("h2",{id:"storage-engines"},"Storage Engines"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"KevinDB (Key Value Identity-Integrated DB)"),(0,i.kt)("li",{parentName:"ol"},"KevsimDB (Key Value Simple DB)"),(0,i.kt)("li",{parentName:"ol"},"File Storage")),(0,i.kt)("h3",{id:"1-key-value-identity-integrated-db"},"1. Key Value Identity-Integrated DB"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fg-api/docs/storage/kevin-db"},"Official docs")),(0,i.kt)("p",null,"This non-relational database engine allows data to be stored as key-value tuples."),(0,i.kt)("p",null,"The advantage of this engine is that it allows managing multiple users, and it has a solid route structure that allows you to play with access, reading and writing permissions, depending on the type of user."),(0,i.kt)("h4",{id:"route-structure"},"Route structure"),(0,i.kt)("p",null,"The routes are integrated with ",(0,i.kt)("a",{parentName:"p",href:"/fg-api/docs/services/identity"},"Identity Service"),".\nExamples of keys for user ID ABC123:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Private routes:\n\nABC123/Private/Settings/fullscreen\nABC123/Private/Settings/in-game-name\nABC123/Private/Settings/language\n\nShared routes:\n\nABC123/Shared/$global/user-status\nABC123/Shared/$admin/user-location\nABC123/Shared/XYZ456/chat\n\nTemporal routes:\n\nABC123/(Connection ID)/$me/message-draft\nABC123/(Connection ID)/$me/match-start-date\n")),(0,i.kt)("h4",{id:"structure"},"Structure:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: You will find this updated structure in the official KevinDB documentation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private"),": only the user can write and read. ",(0,i.kt)("em",{parentName:"li"},"Useful for storing user settings"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ReadOnly"),": the admin can write and read. The user can only read. ",(0,i.kt)("em",{parentName:"li"},"Useful for configuring game variables, for example, factors that affect the calculation of RPG game formulas through multiplication, to achieve a better balance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared/","[Target]"),": user can write and read. Other users can read.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"$global"),": all users can read."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"$admin"),": all admins can read."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[User ID]"),": only the specific ",(0,i.kt)("inlineCode",{parentName:"li"},"User ID")," can read."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Temp/","[Connection ID]","/","[Target]"),": only the user can write and read. All the data is deleted when connection closes. This folder don't accept big keys.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"$me"),": only the creator can read and write."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"$global"),": all users can read."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"$admin"),": all admins can read."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[User ID]"),": only the specific ",(0,i.kt)("inlineCode",{parentName:"li"},"User ID")," can read.")))),(0,i.kt)("h3",{id:"2-key-value-simple-db"},"2. Key Value Simple DB"),(0,i.kt)("p",null,"This engine is being developed."),(0,i.kt)("h3",{id:"3-file-storage"},"3. File Storage"),(0,i.kt)("p",null,"This engine is being developed."),(0,i.kt)("h2",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sections",src:a(536).Z})),(0,i.kt)("h3",{id:"navigation-bar"},"Navigation Bar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Back button (top-left)"),": Returns to the project page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Help icon (top-right)"),": Opens this documentation.")),(0,i.kt)("h3",{id:"overview-area"},"Overview ",(0,i.kt)("em",{parentName:"h3"},"Area")),(0,i.kt)("p",null,"It shows four boxes with useful information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first indicates the total number of databases in the project."),(0,i.kt)("li",{parentName:"ul"},"The second shows the number of rows or values currently stored in the databases."),(0,i.kt)("li",{parentName:"ul"},"The third shows the occupied size in Megabytes."),(0,i.kt)("li",{parentName:"ul"},"The last one shows a summary of the last requests.")),(0,i.kt)("h3",{id:"storage-engines-area"},"Storage Engines ",(0,i.kt)("em",{parentName:"h3"},"Area")),(0,i.kt)("p",null,"The engines are divided into three tabs with their own names.\nIn the image we appreciate the view when choosing the first tab, that is, the KevinDB tab.\nInside it we can see an action bar, and a table with the existing databases for this engine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action bar"),": Allows you to create a new database and manage backups.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sections",src:a(4223).Z})),(0,i.kt)("p",null,"The new database name must be a slug.\n",(0,i.kt)("em",{parentName:"p"},"A URL slug is the part of the URL after the last backslash. For example, the article you\u2019re reading now has a URL that looks like this:"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://forjagames.github.io/fg-api/docs/dashboard/new-database"),".\n",(0,i.kt)("em",{parentName:"p"},"the slug would be ",(0,i.kt)("inlineCode",{parentName:"em"},"new-database"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DBs Table"),": Shows the metadata of the databases. By clicking on each row, a menu is displayed that will allow us to perform a series of actions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sections",src:a(8965).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Menu items"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Explorer (new window)"),": Opens the ",(0,i.kt)("a",{parentName:"li",href:"/fg-api/docs/storage/explorer"},"Explorer")," in a new window."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Explorer"),": Opens the ",(0,i.kt)("a",{parentName:"li",href:"/fg-api/docs/storage/explorer"},"Explorer"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Edit"),": Allows you to rename the database."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Copy UUID"),": Copies the UUID of the database to the clipboard."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Delete"),": Deletes the database permanently."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cancel"),": Close the menu without performing any action.")))),(0,i.kt)("h2",{id:"explorer"},"Explorer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fg-api/docs/storage/explorer"},"Explorer")," is a tool for browsing the service's databases, query rows, view and modify data, manage users, manage groups, and manage backups."))}c.isMDXComponent=!0},536:function(e,t,a){t.Z=a.p+"assets/images/storage_dashboard_2-0ca87a2880fb3836f9427f1a4e805ff6.png"},8965:function(e,t,a){t.Z=a.p+"assets/images/storage_menu-e405d2994aa96763ffeceddc201a666d.png"},4223:function(e,t,a){t.Z=a.p+"assets/images/storage_new_db-f502502347b121b8b4ee108d2db438f2.png"}}]);