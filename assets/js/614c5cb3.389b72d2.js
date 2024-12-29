"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[114],{69074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(62540),s=t(43023);const r={id:"faq",title:"FAQ"},i=void 0,o={id:"faq",title:"FAQ",description:"Why arrays are not validated/sanitized correctly?",source:"@site/versioned_docs/version-6.15.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/6.15.0/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.15.0/faq.md",tags:[],version:"6.15.0",frontMatter:{id:"faq",title:"FAQ"},sidebar:"docs",previous:{title:"Running validations imperatively",permalink:"/docs/6.15.0/running-imperatively"},next:{title:"Migration from v5 to v6",permalink:"/docs/6.15.0/migration-v5-to-v6"}},l={},d=[{value:"Why arrays are not validated/sanitized correctly?",id:"why-arrays-are-not-validatedsanitized-correctly",level:2},{value:"Example:",id:"example",level:3},{value:"Referenced issues:",id:"referenced-issues",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"why-arrays-are-not-validatedsanitized-correctly",children:"Why arrays are not validated/sanitized correctly?"}),"\n",(0,a.jsxs)(n.p,{children:["When using ",(0,a.jsx)(n.a,{href:"/docs/6.15.0/validation-chain-api#standard-validators",children:"Standard validators"})," and ",(0,a.jsx)(n.a,{href:"/docs/6.15.0/sanitization-chain-api#standard-sanitizers",children:"Standard sanitizers"})," from ",(0,a.jsx)(n.a,{href:"https://github.com/validatorjs/validator.js",children:"validator.js"})," the value is transformed to ",(0,a.jsx)(n.code,{children:"string"})," using this function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export function toString(value: any, deep = true): string {\n  if (Array.isArray(value) && value.length && deep) {\n    return toString(value[0], false);\n  } else if (value instanceof Date) {\n    return value.toISOString();\n  } else if (value && typeof value === 'object' && value.toString) {\n    if (typeof value.toString !== 'function') {\n      return Object.getPrototypeOf(value).toString.call(value);\n    }\n    return value.toString();\n  } else if (value == null || (isNaN(value) && !value.length)) {\n    return '';\n  }\n\n  return String(value);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As we can see above, when validating or sanitizing an ",(0,a.jsx)(n.code,{children:"array"})," only the first element of it is processed."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"/docs/6.15.0/wildcards",children:"wildcards"})," to validate/sanitize all the values of the array."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// weekdays: ['sunday', 100]\nbody('weekdays').isString(); // Passes validation\nbody('weekdays.*').isString(); // Does not pass validation\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this example the first chain processes only the first element of the array and the validation erroneously passes.\nIn the second one, instead, all the elements are validated and the chain correctly returns an error."}),"\n",(0,a.jsx)(n.h3,{id:"referenced-issues",children:"Referenced issues:"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/express-validator/express-validator/issues/791",children:"#791"}),", ",(0,a.jsx)(n.a,{href:"https://github.com/express-validator/express-validator/issues/883",children:"#883"}),", ",(0,a.jsx)(n.a,{href:"https://github.com/express-validator/express-validator/issues/931",children:"#931"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(63696);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);