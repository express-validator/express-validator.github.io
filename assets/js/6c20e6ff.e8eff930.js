"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[985],{8207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(4246),o=r(1670);const s={title:"Architecture"},i=void 0,a={id:"architecture",title:"Architecture",description:"How express-validator works",source:"@site/versioned_docs/version-7.0.0/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-7.0.0/architecture.md",tags:[],version:"7.0.0",frontMatter:{title:"Architecture"}},c={},d=[{value:"How express-validator works",id:"how-express-validator-works",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"how-express-validator-works",children:"How express-validator works"}),"\n",(0,n.jsxs)(t.p,{children:["In express.js terminology, ",(0,n.jsx)(t.strong,{children:"middlewares"})," are functions that receive the request (",(0,n.jsx)(t.code,{children:"req"}),") and\nresponse (",(0,n.jsx)(t.code,{children:"res"}),") objects of an incoming HTTP request. Middlewares can respond to the request,\nor pass control over to the next registered middleware."]}),"\n",(0,n.jsx)(t.p,{children:"express-validator is implemented mostly as a bunch of middleware functions, which will read the request\nand verify if it's valid or not according to the specification you declared for each field.\nAny invalid fields are then recorded internally, and validation errors can be forwarded back to the\nuser for them to fix up their request and try again."}),"\n",(0,n.jsxs)(t.p,{children:["Since it comes with many built-in validators and sanitizers, the style of specifying\nthe validations as middlewares confers express-validator a somewhat\n",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Declarative_programming",children:"declarative programming style"}),".\nYou usually don't tell it ",(0,n.jsx)(t.em,{children:"when"})," the validations are meant to run, though you can have control over\nthat if you wish."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1670:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(7378);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);