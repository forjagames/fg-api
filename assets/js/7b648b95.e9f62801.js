"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8334],{1820:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(4848),n=t(8453);const r={sidebar_position:2},c="Restrictions",o={id:"credentials/restrictions",title:"Restrictions",description:"The Restrictions feature allows you to control access to your Credentials by applying rules.",source:"@site/docs/credentials/restrictions.md",sourceDirName:"credentials",slug:"/credentials/restrictions",permalink:"/fg-api/docs/credentials/restrictions",draft:!1,unlisted:!1,editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/credentials/restrictions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Credential",permalink:"/fg-api/docs/credentials/credential"},next:{title:"Services",permalink:"/fg-api/docs/services/intro"}},l={},d=[{value:"Restriction types",id:"restriction-types",level:2},{value:"API Restriction",id:"api-restriction",level:3},{value:"Request Origin Restriction",id:"request-origin-restriction",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"restrictions",children:"Restrictions"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Restrictions"})," feature allows you to control access to your ",(0,s.jsx)(i.a,{href:"/fg-api/docs/credentials/credential",children:"Credentials"})," by applying rules."]}),"\n",(0,s.jsx)(i.p,{children:"Applying restrictions helps you to enhance the security of your credentials and allows you to control their usage more effectively."}),"\n",(0,s.jsx)(i.h2,{id:"restriction-types",children:"Restriction types"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"API"}),"\n",(0,s.jsx)(i.li,{children:"Request Origin"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"api-restriction",children:"API Restriction"}),"\n",(0,s.jsx)(i.p,{children:"With the API Restriction, you can limit the access of a credential to specific services."}),"\n",(0,s.jsx)(i.p,{children:"You can add one or multiple services to the restriction."}),"\n",(0,s.jsxs)(i.p,{children:["Possible values: ",(0,s.jsx)(i.code,{children:"credential"}),", ",(0,s.jsx)(i.code,{children:"identity"}),", ",(0,s.jsx)(i.code,{children:"logger"}),", ",(0,s.jsx)(i.code,{children:"leaderboards"}),", ",(0,s.jsx)(i.code,{children:"store"}),", ",(0,s.jsx)(i.code,{children:"storage"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Example 1: Allow access to only the Identity service (comma-separated, without spaces)."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"identity\n"})}),"\n",(0,s.jsx)(i.p,{children:"Example 2: Credentials, Identity, Logger, and Leaderboard."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"credential,identity,logger,leaderboards\n"})}),"\n",(0,s.jsx)(i.h3,{id:"request-origin-restriction",children:"Request Origin Restriction"}),"\n",(0,s.jsx)(i.p,{children:"With the Request Origin Restriction feature, you can specify from which origins (addresses) the credential will accept requests."}),"\n",(0,s.jsxs)(i.p,{children:["Additionally, you have the flexibility to use ",(0,s.jsx)(i.a,{href:"/fg-api/docs/misc/glossary#wildcard",children:"wildcards"})," in the addresses, allowing for more versatile configurations.\nFor example, instead of specifying ",(0,s.jsx)(i.code,{children:"http-classic.itch.zone"}),", you can use wildcards such as ",(0,s.jsx)(i.code,{children:"*.itch.zone"})," to broaden the scope of accepted origins."]}),"\n",(0,s.jsx)(i.p,{children:"Example 1: Itch.io"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"v6p9d9t4.ssl.hwcdn.net,html-classic.itch.zone\n"})}),"\n",(0,s.jsx)(i.p,{children:"Example 2: Itch.io (using wildcards)"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"*.ssl.hwcdn.net,*.itch.zone\n"})}),"\n",(0,s.jsx)(i.p,{children:"Example 3: Specific IP and Localhost"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"192.168.1.15,127.0.0.1,localhost\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>o});var s=t(6540);const n={},r=s.createContext(n);function c(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);