"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1754],{8639:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(4848),s=i(8453);const a={},r="Getting Started",o={id:"integrations/javascript-browser-sdk/intro",title:"Getting Started",description:"The text of this page has been extracted from https://github.com/forjagames/fg-api/tree/main/libs/js-browser. We recommend that you use this link for an up-to-date reference.",source:"@site/docs/integrations/javascript-browser-sdk/intro.md",sourceDirName:"integrations/javascript-browser-sdk",slug:"/integrations/javascript-browser-sdk/intro",permalink:"/fg-api/docs/integrations/javascript-browser-sdk/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/forjagames/fg-api/edit/main/docs/website/docs/integrations/javascript-browser-sdk/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rest API",permalink:"/fg-api/docs/integrations/rest-api"},next:{title:"Getting Started",permalink:"/fg-api/docs/integrations/typescript-sdk/intro"}},c={},l=[{value:"Setup",id:"setup",level:2},{value:"Setup (using CDN)",id:"setup-using-cdn",level:2},{value:"Development library (latest version)",id:"development-library-latest-version",level:3},{value:"Specific version",id:"specific-version",level:3},{value:"Version v0.0.1 with integrity check",id:"version-v001-with-integrity-check",level:3},{value:"Getting Started (vanilla javascript)",id:"getting-started-vanilla-javascript",level:2},{value:"Step 1. Initialize the Engine.",id:"step-1-initialize-the-engine",level:3},{value:"Step 2. Subscribe to the initialization callback.",id:"step-2-subscribe-to-the-initialization-callback",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["The text of this page has been extracted from ",(0,t.jsx)(n.a,{href:"https://github.com/forjagames/fg-api/tree/main/libs/js-browser",children:"https://github.com/forjagames/fg-api/tree/main/libs/js-browser"}),". We recommend that you use this link for an up-to-date reference."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["Download ",(0,t.jsx)(n.code,{children:"fg-api.js"})," or ",(0,t.jsx)(n.code,{children:"fg-api.min.js"})," and use it into your website."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="./fg-api.min.js"><\/script>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"setup-using-cdn",children:"Setup (using CDN)"}),"\n",(0,t.jsx)(n.p,{children:"If you want to use a CDN, you have the next options:"}),"\n",(0,t.jsx)(n.h3,{id:"development-library-latest-version",children:"Development library (latest version)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/gh/forjagames/fg-api@latest/libs/js-browser/fg-api.min.js"><\/script>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"specific-version",children:"Specific version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/gh/forjagames/fg-api@v0.0.1/libs/js-browser/fg-api.min.js"><\/script>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"version-v001-with-integrity-check",children:"Version v0.0.1 with integrity check"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/gh/forjagames/fg-api@0.0.1/libs/js-browser/fg-api.min.js" integrity="sha256-vUljAo1ZGXwlnal9PAOUEYPCJk1lSxVtRDB6VvjVz4E=" crossorigin="anonymous"><\/script>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-vanilla-javascript",children:"Getting Started (vanilla javascript)"}),"\n",(0,t.jsx)(n.p,{children:"We encourage you to run the code on a new javascript file."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-initialize-the-engine",children:"Step 1. Initialize the Engine."}),"\n",(0,t.jsxs)(n.p,{children:["The first step is to initialize the API. To do this, once you have done the Setup, you will have access to the global class called ",(0,t.jsx)(n.code,{children:"fgApi"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["So, you need to call the ",(0,t.jsx)(n.code,{children:"initialize"})," method, and fill it with your project credentials."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const promise = fgApi.initialize('PUBLIC KEY', 'SECRET');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"initialize"})," method can also take additional parameters."]}),"\n",(0,t.jsx)(n.p,{children:"Alternative:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"//  @param publicKey: string\n//  @param secret: string\n//  @param requestDriver: 'fetch' | 'axios'\n\nconst promise = fgApi.initialize('PUBLIC KEY', 'SECRET', { requestDriver: 'fetch' });\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-subscribe-to-the-initialization-callback",children:"Step 2. Subscribe to the initialization callback."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"promise.then(() => {\n  \n  //  Here you can call all services\n\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'promise.then(async () => {\n  \n  //  Logger service\n\n  var logSession = new fgApi.LogSession();\n\n  logSession.initialize();\n  logSession.info("Log initialized");\n\n  //  Identity service\n\n  var identityManager = new fgApi.getInstance().getIdentitySessionManager();\n  \n  /**\n   * You can call this function after click on a "login" button.\n   * */\n  function loginClick() {\n    identityManager.openLoginWindow().then(async function () {\n      //  Read user information\n      const { user } = await identityManager.api.getLoggedProfile([\'email\']);\n\n      //  Log\n      console.log(\'User data\', user);\n      logSession.info(\'Login success\');\n\n    }).catch(err => {\n      //  Log the error\n      console.error(err);\n      logSession.error(\'Login failed\');\n    });\n  }\n\n  /**\n   * You can call this function after click on a "logout" button.\n   * */\n  function logoutClick() {\n    identityManager.logout().finally(() => {\n      //  Log\n      console.log(\'Logged out\');\n      logSession.info(\'Logged out\');\n    });\n  }\n\n  /**\n   * You can call this function after click on a "view profile" button.\n   * */\n  function showProfileClick() {\n    if (identityManager.isLoggedIn) {\n      identityManager.api.openProfileWindow();\n    }\n  }\n\n  /**\n   * You can call this function after click on a "change password" button.\n   * */\n  function changePasswordClick() {\n    if (identityManager.isLoggedIn) {\n      identityManager.api.openChangePasswordWindow();\n    }\n  }\n\n  //  Leaderboards service\n\n  /**\n   * You can call this function after click on a "show highscores" button.\n   * */\n  async function listLeaderboards() {\n    const leaderboardAPI = await fgApi.getInstance().getLeaderboard();\n    const tables = await leaderboardAPI.listBoards();\n    return tables;\n  }\n\n  //  Store service\n\n  /**\n   * You can call this function after click on a "open store" button.\n   * */\n  async function listProjectProducts() {\n    /** @type {FgStoreAPI} */\n    const storeAPI = await fgApi.getInstance().getStore();\n    const projectProducts = await storeAPI.listProducts();\n    return projectProducts;\n  }\n});\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);