"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return a?i.createElement(g,n(n({ref:t},m),{},{components:a})):i.createElement(g,n({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,n=new Array(r);n[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,n[1]=o;for(var p=2;p<r;p++)n[p]=a[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6465:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=a(7462),l=(a(7294),a(3905));const r={sidebar_position:3},n="Logger and Metrics",o={unversionedId:"services/logger",id:"services/logger",title:"Logger and Metrics",description:"Logger",source:"@site/docs/services/logger.md",sourceDirName:"services",slug:"/services/logger",permalink:"/fg-api/docs/services/logger",editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/services/logger.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Identity",permalink:"/fg-api/docs/services/identity"},next:{title:"Leaderboard",permalink:"/fg-api/docs/services/leaderboard"}},s=[{value:"Logger",id:"logger",children:[{value:"Logs and sessions",id:"logs-and-sessions",children:[],level:3},{value:"Log levels",id:"log-levels",children:[],level:3},{value:"Session lifetime",id:"session-lifetime",children:[],level:3}],level:2},{value:"Metrics",id:"metrics",children:[{value:"Metric Properties",id:"metric-properties",children:[],level:3},{value:"Metric Types",id:"metric-types",children:[{value:"Accumulators",id:"accumulators",children:[],level:4},{value:"Counters",id:"counters",children:[],level:4},{value:"Springs",id:"springs",children:[],level:4}],level:3},{value:"Common Use-Cases",id:"common-use-cases",children:[{value:"Users by Version",id:"users-by-version",children:[],level:4},{value:"Total Times Played",id:"total-times-played",children:[],level:4},{value:"Total Times Played per Version",id:"total-times-played-per-version",children:[],level:4},{value:"Total Accesses to a Specific Level",id:"total-accesses-to-a-specific-level",children:[],level:4},{value:"Total Game Time",id:"total-game-time",children:[],level:4},{value:"Total Game Time per Version",id:"total-game-time-per-version",children:[],level:4},{value:"Total Game Time per Level",id:"total-game-time-per-level",children:[],level:4},{value:"Total Game Time per Level per User",id:"total-game-time-per-level-per-user",children:[],level:4}],level:3}],level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"logger-and-metrics"},"Logger and Metrics"),(0,l.kt)("h2",{id:"logger"},"Logger"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Logger Service")," allows you to collect information about the project."),(0,l.kt)("h3",{id:"logs-and-sessions"},"Logs and sessions"),(0,l.kt)("p",null,"Logs are grouped into ",(0,l.kt)("inlineCode",{parentName:"p"},"sessions"),". To add logs, you must first create a new session. We recommend creating a new session when starting the game or application, and closing the session before stopping the application or game."),(0,l.kt)("h3",{id:"log-levels"},"Log levels"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"log level")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"log severity")," is a piece of information telling how important a given log message is. It is a way of distinguishing log events from each other. Severity of all levels is assumed to be numerically ascending from most important to least important."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Error = 0\nWarn = 1\nInfo = 2\nHttp = 3\nVerbose = 4\nDebug = 5\nSilly = 6\n")),(0,l.kt)("h3",{id:"session-lifetime"},"Session lifetime"),(0,l.kt)("p",null,"After being created, Log sessions have a maximum life of ",(0,l.kt)("inlineCode",{parentName:"p"},"90 days"),". After this time, the session is finished."),(0,l.kt)("p",null,"However, if a session does not receive a log for at least ",(0,l.kt)("inlineCode",{parentName:"p"},"3 days"),", it will automatically be finished."),(0,l.kt)("p",null,"Finished sessions will be stored for a duration of ",(0,l.kt)("inlineCode",{parentName:"p"},"one year")," from the session's end date, allowing you to analyze the logs. After this period, the finished sessions will be automatically removed.\nAs an administrator, you can manually delete completed sessions."),(0,l.kt)("h2",{id:"metrics"},"Metrics"),(0,l.kt)("p",null,"Metrics are fundamental entities that enable the measurement of various actions of your projects."),(0,l.kt)("h3",{id:"metric-properties"},"Metric Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Indicates the type of the metric."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible (default: no):")," Determines if the metric can be subdivided into smaller components based on tags."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable (default: no):")," Specifies whether the metric supports division by identifiers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Maximum Value (default: no limits):")," Sets the upper limit for metric values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accepts Negative Values? (default: no):")," Defines whether the metric can incorporate negative values.")),(0,l.kt)("h3",{id:"metric-types"},"Metric Types"),(0,l.kt)("h4",{id:"accumulators"},"Accumulators"),(0,l.kt)("p",null,"Metrics falling under this category only accept value increments. Accumulators can only increment values by 1."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Total number of individuals who have won the game."),(0,l.kt)("h4",{id:"counters"},"Counters"),(0,l.kt)("p",null,"Metrics in this category allow both value additions and subtractions."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Count of users within level 5."),(0,l.kt)("h4",{id:"springs"},"Springs"),(0,l.kt)("p",null,"These metrics incorporate a time-sensitive element. If a specific time window elapses without an update, the metric value is automatically subtracted."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Count of identified users actively engaging with the game."),(0,l.kt)("h3",{id:"common-use-cases"},"Common Use-Cases"),(0,l.kt)("h4",{id:"users-by-version"},"Users by Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Counter."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," Yes (version number)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," Yes (user ID).")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Tracking user distribution across different software versions."),(0,l.kt)("h4",{id:"total-times-played"},"Total Times Played"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Accumulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," No."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," No.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Recording the overall frequency of gameplay sessions."),(0,l.kt)("h4",{id:"total-times-played-per-version"},"Total Times Played per Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Accumulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," Yes (version number)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," No.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Analyzing gameplay frequency based on software version."),(0,l.kt)("h4",{id:"total-accesses-to-a-specific-level"},"Total Accesses to a Specific Level"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Accumulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," Yes (level ID)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," No.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Monitoring the engagement with a particular game level."),(0,l.kt)("h4",{id:"total-game-time"},"Total Game Time"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Accumulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," No."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," No.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Capturing the overall duration of gameplay."),(0,l.kt)("h4",{id:"total-game-time-per-version"},"Total Game Time per Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Accumulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," Yes (version number)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," No.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Analyzing total gameplay duration based on software version."),(0,l.kt)("h4",{id:"total-game-time-per-level"},"Total Game Time per Level"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Accumulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," Yes (level ID)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," No.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Examining total gameplay duration for each game level."),(0,l.kt)("h4",{id:"total-game-time-per-level-per-user"},"Total Game Time per Level per User"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type:")," Accumulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divisible:")," Yes (level ID)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Identifiable:")," Yes (user ID).")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")," Detailed analysis of individual user gameplay duration across different game levels."))}u.isMDXComponent=!0}}]);