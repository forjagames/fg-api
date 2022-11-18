"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:2},s="Kevin DB Documentation",u={unversionedId:"storage/kevin-db",id:"storage/kevin-db",title:"Kevin DB Documentation",description:"KEVIN DB: Key Value Identity-Integrated Database",source:"@site/docs/storage/kevin-db.md",sourceDirName:"storage",slug:"/storage/kevin-db",permalink:"/fg-api/docs/storage/kevin-db",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/storage/kevin-db.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Explorer",permalink:"/fg-api/docs/storage/explorer"},next:{title:"FG-Api CLI _[Deprecated]_",permalink:"/fg-api/docs/integrations/cli"}},p=[{value:"<u>DB Definition</u>",id:"db-definition",children:[],level:2},{value:"<u>Users</u>",id:"users",children:[],level:2},{value:"<u>Keys</u>",id:"keys",children:[{value:"Format",id:"format",children:[],level:3},{value:"Key name",id:"key-name",children:[],level:3},{value:"System Routes",id:"system-routes",children:[],level:3},{value:"Special routes (Shared and Temp)",id:"special-routes-shared-and-temp",children:[],level:3},{value:"Special route Temp",id:"special-route-temp",children:[],level:3},{value:"Special user $global for routes",id:"special-user-global-for-routes",children:[{value:"System Routes for $global",id:"system-routes-for-global",children:[],level:4}],level:3}],level:2},{value:"<u>Values</u>",id:"values",children:[],level:2},{value:"<u>User permissions</u>",id:"user-permissions",children:[],level:2},{value:"<u>How it works?</u>",id:"how-it-works",children:[],level:2},{value:"<u>Operations</u>:",id:"operations",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kevin-db-documentation"},"Kevin DB Documentation"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"KEVIN DB: ",(0,l.kt)("strong",{parentName:"p"},"Ke"),"y ",(0,l.kt)("strong",{parentName:"p"},"V"),"alue ",(0,l.kt)("strong",{parentName:"p"},"I"),"dentity-I",(0,l.kt)("strong",{parentName:"p"},"n"),"tegrated ",(0,l.kt)("strong",{parentName:"p"},"D"),"ata",(0,l.kt)("strong",{parentName:"p"},"b"),"ase")),(0,l.kt)("small",null,"Revision: 1 | 2022-10-31, by Luciano R."),(0,l.kt)("p",null,"The DB is intended to store data from users."),(0,l.kt)("h2",{id:"db-definition"},(0,l.kt)("u",null,"DB Definition")),(0,l.kt)("p",null,"The DB is an entity. It needs the Project ID."),(0,l.kt)("h2",{id:"users"},(0,l.kt)("u",null,"Users")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"$global: All users."),(0,l.kt)("li",{parentName:"ul"},"$admin: Administrator credentials (example the Game Server)."),(0,l.kt)("li",{parentName:"ul"},"[User ID]",": User ID (from Identity Service).")),(0,l.kt)("h2",{id:"keys"},(0,l.kt)("u",null,"Keys")),(0,l.kt)("h3",{id:"format"},"Format"),(0,l.kt)("p",null,"The format of the keys is:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[User ID]/[System Route]/[Key name]")),(0,l.kt)("p",null,"If you want to store a bigger key, you need to use the size postfix ",(0,l.kt)("inlineCode",{parentName:"p"},".mk")," (Mega Key)."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[User ID]/[System Route]/[Key name].mk")),(0,l.kt)("h3",{id:"key-name"},"Key name"),(0,l.kt)("p",null,"The key name must be a slug. Its length cannot exceed 20 characters. Postfixes do not affect the length of the name."),(0,l.kt)("h3",{id:"system-routes"},"System Routes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Private"),": only the user can write and read. ",(0,l.kt)("em",{parentName:"li"},"Useful for storing user settings"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ReadOnly"),": the admin can write and read. The user can only read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shared/","[Target]"),": user can write and read. Other users can read.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"$global"),": all users can read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"$admin"),": all admins can read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[User ID]"),": only the specific ",(0,l.kt)("inlineCode",{parentName:"li"},"User ID")," can read."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Temp/","[Connection ID]","/","[Target]"),": only the user can write and read. All the data is deleted when connection closes. This route don't accept big keys.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"$me"),": only the creator can read and write."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"$global"),": all users can read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"$admin"),": all admins can read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[User ID]"),": only the specific ",(0,l.kt)("inlineCode",{parentName:"li"},"User ID")," can read.")))),(0,l.kt)("h3",{id:"special-routes-shared-and-temp"},"Special routes (Shared and Temp)"),(0,l.kt)("p",null,"The ","[Target]"," of route accept modifiers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Postfix ",(0,l.kt)("inlineCode",{parentName:"strong"},".awd")),": Admins can read, write and delete the key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Postfix ",(0,l.kt)("inlineCode",{parentName:"strong"},".ad")),": Admins can read and delete the key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Postfix ",(0,l.kt)("inlineCode",{parentName:"strong"},".aw")),": Admins can read and write the key.")),(0,l.kt)("h3",{id:"special-route-temp"},"Special route Temp"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"special-user-global-for-routes"},"Special user $global for routes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$global")," path is useful for sharing data and values between all users, ie, saving values globally."),(0,l.kt)("p",null,"The format of the keys is:\n",(0,l.kt)("inlineCode",{parentName:"p"},"$global/[System Route]/[Key name]")),(0,l.kt)("h4",{id:"system-routes-for-global"},"System Routes for $global"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ReadOnly"),": the admin can write and read. The user can only read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shared/","[Target]"),": admin can write and read. Other users can read.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"$global"),": all users can read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"$admin"),": all admins can read."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[User ID]"),": only the specific ",(0,l.kt)("inlineCode",{parentName:"li"},"User ID")," can read.")))),(0,l.kt)("h2",{id:"values"},(0,l.kt)("u",null,"Values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keys: The values are strings (max length: 255 bytes)."),(0,l.kt)("li",{parentName:"ul"},"Mega Keys: The values are strings (max length: 1 MB).")),(0,l.kt)("h2",{id:"user-permissions"},(0,l.kt)("u",null,"User permissions")),(0,l.kt)("p",null,"User permissions can be view, write, read, and delete. If you don't specify the permissions, they all will be ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," by default.\nYou can set permissions for specific routes, or you can use routes with wilcards.\nPermits are restrictive. In other words, if the user does not have permissions on a route, due to the structure defined above, they cannot be forced to have them. Permissions only serve to increase restrictions.\nIf you want to affect only the routes of the user that is calling the action, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"$me")," keyword."),(0,l.kt)("h2",{id:"how-it-works"},(0,l.kt)("u",null,"How it works?")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," connects to the DB using some credentials. "),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," sends requests through the DB session."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," closes the connection."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"System")," deletes the temp route.")),(0,l.kt)("h2",{id:"operations"},(0,l.kt)("u",null,"Operations"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Add ","[Key Path]"," = ","[Value]"),": Adds a value. If the key already exists, it fails."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Set ","[Key Path]"," = ","[Value]"),": Sets a value. If the key already exists, it overwrites it."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Get ","[Key Path]"),": Gets a value. If the key doesn't exists, returns null."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Del ","[Key Path]"),": Deletes the key. Returns true if the key existed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ren ","[Key Path]"," = ","[New name]"),": Rename the key within the same route."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Mv ","[Key Path]"," = ","[New Key Path]"),": Moves the key to another route. Fails if the origin key doesn't exists, or if the destination key already exists.")))}m.isMDXComponent=!0}}]);