"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9724],{9570:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(4848),r=i(8453);const s={sidebar_position:1},a="Credential",c={id:"credentials/credential",title:"Credential",description:"The Credentials are crucial for facilitating the interaction between your application (or game) and the API.",source:"@site/docs/credentials/credential.md",sourceDirName:"credentials",slug:"/credentials/credential",permalink:"/fg-api/docs/credentials/credential",draft:!1,unlisted:!1,editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/credentials/credential.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Leave Project (as Team Member) - Project",permalink:"/fg-api/docs/dashboard/project_leave-project"},next:{title:"Restrictions",permalink:"/fg-api/docs/credentials/restrictions"}},o={},l=[{value:"Key, Secret, and Alias",id:"key-secret-and-alias",level:2},{value:"Security",id:"security",level:2},{value:"Actions",id:"actions",level:2},{value:"Save alias",id:"save-alias",level:3},{value:"Regenerate secret",id:"regenerate-secret",level:3},{value:"Delete",id:"delete",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"credential",children:"Credential"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Credentials"})," are crucial for facilitating the interaction between your application (or game) and the ",(0,n.jsx)(t.code,{children:"API"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The first step to using the API is to access it from your app (or game) using the key and secret of your credential."}),"\n",(0,n.jsx)(t.p,{children:"Each project can have up to 3 credentials."}),"\n",(0,n.jsx)(t.h2,{id:"key-secret-and-alias",children:"Key, Secret, and Alias"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Key"})," is the unique identifier of your credential and cannot be changed."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Secret"})," serves as a password for the credential. This value can be changed by the administrator, but you will need to update your game with the new secret in order to restore the access to the ",(0,n.jsx)(t.code,{children:"API"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Alias"})," is an optional field, visible only on this Portal. It provides a user-friendly name to identify your credentials. In the future, the alias will be utilized to generate friendlier URLs."]}),"\n",(0,n.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(t.p,{children:["To enhace the security of your ",(0,n.jsx)(t.code,{children:"Credentials"}),", you can use the ",(0,n.jsx)(t.a,{href:"/fg-api/docs/credentials/restrictions",children:"Restrictions"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Restrictions allow you to apply access rules to your credentials."}),"\n",(0,n.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(t.h3,{id:"save-alias",children:"Save alias"}),"\n",(0,n.jsx)(t.p,{children:"This option enables you to modify the alias of the credentials. Changing the alias has no impact on the functionality; it is purely a visual change."}),"\n",(0,n.jsx)(t.h3,{id:"regenerate-secret",children:"Regenerate secret"}),"\n",(0,n.jsx)(t.p,{children:"It is recommended to use this option if you suspect someone else has your secret or if you have lost it.\nWhen you generate a new secret, the old one will no longer work. This implies that you must update the secret for any applications using this credential."}),"\n",(0,n.jsx)(t.h3,{id:"delete",children:"Delete"}),"\n",(0,n.jsx)(t.p,{children:"This action permanently deletes the credential."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var n=i(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);