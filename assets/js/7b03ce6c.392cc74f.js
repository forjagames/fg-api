"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[645],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=i,A=u["".concat(l,".").concat(c)]||u[c]||f[c]||a;return r?n.createElement(A,o(o({ref:t},d),{},{components:r})):n.createElement(A,o({ref:t},d))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1384:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:3},l="Files Explorer",p={unversionedId:"storage/files-explorer",id:"storage/files-explorer",title:"Files Explorer",description:"Explorer is a tool for browsing the storage service's drives, manage files and backups.",source:"@site/docs/storage/files-explorer.md",sourceDirName:"storage",slug:"/storage/files-explorer",permalink:"/fg-api/docs/storage/files-explorer",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/storage/files-explorer.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Kevin DB Documentation",permalink:"/fg-api/docs/storage/kevin-db"},next:{title:"Files storage: Add or edit permissions",permalink:"/fg-api/docs/storage/files-add-edit-permissions"}},d=[{value:"Sections",id:"sections",children:[{value:"Navigation <em>Section</em>",id:"navigation-section",children:[{value:"Items",id:"items",children:[],level:4},{value:"Moving files",id:"moving-files",children:[],level:4}],level:3},{value:"Security <em>Section</em>",id:"security-section",children:[],level:3}],level:2}],f={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"files-explorer"},"Files Explorer"),(0,a.kt)("p",null,"Explorer is a tool for browsing the ",(0,a.kt)("a",{parentName:"p",href:"/fg-api/docs/services/storage"},"storage service"),"'s drives, manage files and backups."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sections",src:r(918).Z})),(0,a.kt)("h2",{id:"sections"},"Sections"),(0,a.kt)("h3",{id:"navigation-section"},"Navigation ",(0,a.kt)("em",{parentName:"h3"},"Section")),(0,a.kt)("p",null,"It has an action bar that allows you to upload files and create directories. Below there is a navigation bar, and at the end the files and directories."),(0,a.kt)("p",null,"You can download the files, duplicate them, copy, move or delete them. "),(0,a.kt)("p",null,"There is no recycle bin, so editing and deleting files cannot be undone."),(0,a.kt)("h4",{id:"items"},"Items"),(0,a.kt)("p",null,"In this section, you will find a list of files and directories. "),(0,a.kt)("p",null,"Directories are represented by folders, and each folder has a button with three vertical dots on the right side. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(5335).Z})),(0,a.kt)("p",null,"By clicking on this button, a menu will appear with various options such as Download, Move, Rename, Delete, and more."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(3241).Z})),(0,a.kt)("p",null,"Similarly, for files, the menu will open automatically when clicked. This intuitive feature allows you to easily manage your files and directories within the platform, providing you with a seamless experience for organizing and handling your data."),(0,a.kt)("h4",{id:"moving-files"},"Moving files"),(0,a.kt)("p",null,"To move your files, simply select the file and choose the `Move`` option from the file menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(1177).Z})),(0,a.kt)("p",null,"When prompted for the new path, enter the desired destination for the file."),(0,a.kt)("p",null,"For example, if you want to move a directory from the path ",(0,a.kt)("inlineCode",{parentName:"p"},"images/image.png")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"images/hd/image.png"),", you can enter ",(0,a.kt)("inlineCode",{parentName:"p"},"images/")," in the new path option."),(0,a.kt)("p",null,"By including a slash at the end, the filename will remain unchanged. If you wish to change the filename as well, you can use a new filename like ",(0,a.kt)("inlineCode",{parentName:"p"},"images/hd/landscape.png"),"."),(0,a.kt)("h3",{id:"security-section"},"Security ",(0,a.kt)("em",{parentName:"h3"},"Section")),(0,a.kt)("p",null,"It allows you to manage permissions for credentials and users.\nPermissions will allow or restrict end users to perform actions on files and folders."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fg-api/docs/storage/files-add-edit-permissions"},"How to add or edit permissions")))}u.isMDXComponent=!0},5335:function(e,t,r){t.Z=r.p+"assets/images/folder_menu-251eecc9353f383afb0d297660bd5285.png"},3241:function(e,t,r){t.Z=r.p+"assets/images/folder_menu_expanded-9134b7e555b7e15e28486587362079b7.png"},1177:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAAD/CAYAAACpfPA5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABjDSURBVHhe7d37j1zlfcdx/oXEl1+wnUCAxVfw3WDsBgK4JLSiIYAAE2HXLQQTisrNXCQbg8CxucSAceKAQBEiICi0pECFxEUgoFySVoGoCWkIgqQJCRKEhEtCwun5nPp7+t1nv7M76z0zu8/Me6SXdudcnvOcs/P9zPOcGfBe06dPL1qZNm0aAHRVlEXSMqyiRiayvffeG0ALUc1MZFEmhWEV7TwRRH8EAGMT1dpEkObShA+r6OIC6IyoBsdLmktDwiraqduiiwigu6La7DafTYPCKtq4m6ILBmB8RbXaTRMqrKILBGBiiWq3G4aEVbRRk2bMmFF85jOfKQ444AAAPUI1rdqOar5JdVhFK5ukk4lOFEBv6EZgdSWsGFEBvU01HtV+k/aKFjYtOjkAvSWq/SZ1PKx0Yy46MQC9pdM34TsWVv5ThOjEAPQWX/NRJoxVR8LKd1qiEwPQW9K6j7JhLBoNq7SzJjoxAL0lqn2JsmJPNBZWUSdNdGIAektU+ybKjNHaa2BgoGhX1MFW9t9//1q0HkBv2dOaj7Im0nZYRQeJ+A7vSccB5GkstR9lTqqtsIoaj0SdlWhbAL0lqn2Jto1E2eONGFZRo5GokybaHkBviWrfRNtHogwyjYRV1Dkv2gdAb4lq34v2SUUZZIYNq6ixSNQxs99++4X7AOgtqvUoA0y0TyTKImkZVlEjkahTHmEF9IeRwkqi/SJRJoVhFe3cStQho84TVkB/sHqPssBE+7WS5tKYwirqjEdYAf2jnbCSaN9ImktDwiraqZWoI8Y6TlgB/cHXfJQJJtq3FZ9NexxWUSeM77RE+wPoLWndR9lgov0jPpsaD6u0wxLtD6C3RLUfZYRE+0d8Ng0Kq2jjSHRwiTrL/9IY6A+q9SgDoqyQqI3IHodVdFCTdlKdJ6yA/mD1nuZAlBUmaidFWAFoVNfCKtooFR3MSztJWAH9Y0/CSqK2Uo2GVdpB6VZYPfPMM4U9fvOb3xTr1q0Lt5Pvfve7xccff1xt+/vf/7644IILwu361U9+8pPq2uinX75jx47ij3/8Y0W/+3UTyRVXXFG88sorxZ/+9KfqPPTzjTfeKLZt2xZuj+a0CiuJMsNEbaVGFVbRQUzUOet4t8Pqo48+Knbt2hVud/TRRxevvvrq7i0Jq0jOYbVz587iww8/rPqfPrRc66P90Axf81EmRNlhova8joWV77RE7TXJh5UeP/zhD4v58+cP2e7aa68d9GImrIbKNaxOPPHE4he/+EXV9zfffLO45JJLquVf+cpXil/+8pfV8p///OfF8ccfP2RfNCOt+zQXouwwUXteHVbRSi9q3KQdkrTTUZtNsrB6//33q5HVb3/72+K8884bst3jjz9eb6fpQRRWKkS92G0a8d577xVPPPFEVQxa74tC0w0fihaGf/7zn4s777yzXq4piApFbWoK+rvf/a7qy+c///l6m4id169+9avirrvuKt56661qf7Xzs5/9rDj//POLq6++uuqPloumwV//+tcHtaM+3nbbbcWvf/3r+rx0DZ5++un6vO65555qefpQv3X89DFSaDXRd/1t9DfSuocffrj40Y9+VF/Dd955p7j99tvrbTdv3lydkx733XdfvVwefPDBajlvTp2V1n2UDVGGmKhNr+Nhte+++4ZtNskKQ/cm9ILXi1n3pvw2uo+ldQqSF198sSq29MV7//3318WcPl577bXiy1/+crXdo48+Wi1TwZxzzjn1/rbch6UKp1WbKr7hAsvOS33WOaUPBcC77767+9n/P3T8iy++uG7nySefrPf/wx/+UBW1Pf/pT39a9eGOO+6orof1VT/1XOs1dbZ9RL+//fbbxXXXXTeov14Tfbew0kPtpA/9DW+99dYhx061+nuhWap1X/tRNkQZYqI2vRHDKmrURJ0R3+FuhpUC5amnnqp+T4f8Kka94PWCfeSRR6ptfFhdeeWV9Tvzj3/842rEoRHJvffeW43WVHB60WvbrVu3Fh988EFV0FYsuh+m4+th09DLLrusKj7t++yzzxYrV66slj/wwAPVvsPdXxM7L22rPmt/9eull16qluuhKY6mOtr+29/+dtWmHhpNaJlC00Lhueeeq9rw26Z9aGoa2ETffVj5qd2WLVuq66qHRmY2OkzpmOqrzl9/A702ou3QjHbCSqIsMVG7pqfCSlMOTSM0ddN0TNMyrVdAKED0eOGFF+opjw+raFSU7qv2NbpSCCoM9dCxtd2GDRuq6Z0C0aaANv3QKOLMM8+s2zzllFPq+yi2f8TO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"},918:function(e,t,r){t.Z=r.p+"assets/images/storage_files_explorer-256ed21216eda315828dfffd7c2e43f7.png"}}]);