"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[777],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6465:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:3},l="Logger",c={unversionedId:"services/logger",id:"services/logger",title:"Logger",description:"The Logger Service allows you to collect information about the project.",source:"@site/docs/services/logger.md",sourceDirName:"services",slug:"/services/logger",permalink:"/fg-api/docs/services/logger",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/services/logger.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Identity",permalink:"/fg-api/docs/services/identity"},next:{title:"Leaderboard",permalink:"/fg-api/docs/services/leaderboard"}},p=[{value:"Logs and sessions",id:"logs-and-sessions",children:[],level:2},{value:"Log levels",id:"log-levels",children:[],level:2},{value:"Session lifetime",id:"session-lifetime",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logger"},"Logger"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger Service")," allows you to collect information about the project."),(0,i.kt)("h2",{id:"logs-and-sessions"},"Logs and sessions"),(0,i.kt)("p",null,"Logs are grouped into ",(0,i.kt)("inlineCode",{parentName:"p"},"sessions"),". To add logs, you must first create a new session. We recommend creating a new session when starting the game or application, and closing the session before stopping the application or game."),(0,i.kt)("h2",{id:"log-levels"},"Log levels"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"log level")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"log severity")," is a piece of information telling how important a given log message is. It is a way of distinguishing log events from each other. Severity of all levels is assumed to be numerically ascending from most important to least important."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Error = 0\nWarn = 1\nInfo = 2\nHttp = 3\nVerbose = 4\nDebug = 5\nSilly = 6\n")),(0,i.kt)("h2",{id:"session-lifetime"},"Session lifetime"),(0,i.kt)("p",null,"After being created, Log sessions have a maximum life of 90 days. After this time, the session is finished.\nHowever, if a session does not receive a log for at least 3 days, it will automatically be finished.\nFinished sessions are not deleted, allowing you to analize the logs. Only empty finished sessions will be automatically deleted.\nYou as administrator have the power to delete finished sessions."))}d.isMDXComponent=!0}}]);