"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4804],{8787:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(4246),n=i(1670);const a={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},o=void 0,r={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers",description:"Although express-validator offers plenty of handy validators and sanitizers through its underlying",source:"@site/versioned_docs/version-6.3.0/feature-custom-validators-sanitizers.md",sourceDirName:".",slug:"/custom-validators-sanitizers",permalink:"/docs/6.3.0/custom-validators-sanitizers",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.3.0/feature-custom-validators-sanitizers.md",tags:[],version:"6.3.0",frontMatter:{id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},sidebar:"docs",previous:{title:"Sanitization",permalink:"/docs/6.3.0/sanitization"},next:{title:"Custom Error Messages",permalink:"/docs/6.3.0/custom-error-messages"}},c={},d=[{value:"Custom validator",id:"custom-validator",level:2},{value:"Example: checking if e-mail is in use",id:"example-checking-if-e-mail-is-in-use",level:3},{value:"Example: checking if password confirmation matches password",id:"example-checking-if-password-confirmation-matches-password",level:3},{value:"Custom sanitizers",id:"custom-sanitizers",level:2},{value:"Example: converting to MongoDB&#39;s ObjectID",id:"example-converting-to-mongodbs-objectid",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Although express-validator offers plenty of handy validators and sanitizers through its underlying\ndependency ",(0,t.jsx)(s.a,{href:"https://github.com/chriso/validator.js",children:"validator.js"}),", it doesn't always suffices when\nbuilding your application."]}),"\n",(0,t.jsx)(s.p,{children:"For these cases, you may consider writing a custom validator or a custom sanitizer."}),"\n",(0,t.jsx)(s.h2,{id:"custom-validator",children:"Custom validator"}),"\n",(0,t.jsxs)(s.p,{children:["A custom validator may be implemented by using the chain method ",(0,t.jsx)(s.a,{href:"/docs/6.3.0/validation-chain-api#customvalidator",children:(0,t.jsx)(s.code,{children:".custom()"})}),".\nIt takes a validator function."]}),"\n",(0,t.jsxs)(s.p,{children:["Custom validators may return Promises to indicate an async validation (which will be awaited upon),\nor ",(0,t.jsx)(s.code,{children:"throw"})," any value/reject a promise to ",(0,t.jsx)(s.a,{href:"/docs/6.3.0/custom-error-messages#custom-validator-level",children:"use a custom error message"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," if your custom validator returns a promise, it must reject to indicate that the field is invalid."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"example-checking-if-e-mail-is-in-use",children:"Example: checking if e-mail is in use"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const { body } = require('express-validator');\n\napp.post('/user', body('email').custom(value => {\n  return User.findUserByEmail(value).then(user => {\n    if (user) {\n      return Promise.reject('E-mail already in use');\n    }\n  });\n}), (req, res) => {\n  // Handle the request\n});\n"})}),"\n",(0,t.jsx)(s.h3,{id:"example-checking-if-password-confirmation-matches-password",children:"Example: checking if password confirmation matches password"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const { body } = require('express-validator');\n\napp.post('/user', body('passwordConfirmation').custom((value, { req }) => {\n  if (value !== req.body.password) {\n    throw new Error('Password confirmation does not match password');\n  }\n  \n  // Indicates the success of this synchronous custom validator\n  return true;\n}), (req, res) => {\n  // Handle the request\n});\n"})}),"\n",(0,t.jsx)(s.h2,{id:"custom-sanitizers",children:"Custom sanitizers"}),"\n",(0,t.jsxs)(s.p,{children:["Custom sanitizers can be implemented by using the method ",(0,t.jsx)(s.code,{children:".customSanitizer()"}),", no matter if\nthe ",(0,t.jsx)(s.a,{href:"/docs/6.3.0/validation-chain-api",children:"validation chain one"})," or\nthe ",(0,t.jsx)(s.a,{href:"/docs/6.3.0/sanitization-chain-api#customsanitizersanitizer",children:"sanitization chain one"}),".",(0,t.jsx)(s.br,{}),"\n","Just like with the validators, you specify the sanitizer function, which ",(0,t.jsx)(s.em,{children:"must"})," be synchronous at the\nmoment."]}),"\n",(0,t.jsx)(s.h3,{id:"example-converting-to-mongodbs-objectid",children:"Example: converting to MongoDB's ObjectID"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const { sanitizeParam } = require('express-validator');\n\napp.post('/object/:id', sanitizeParam('id').customSanitizer(value => {\n  return ObjectId(value);\n}), (req, res) => {\n  // Handle the request\n});\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1670:(e,s,i)=>{i.d(s,{Z:()=>r,a:()=>o});var t=i(7378);const n={},a=t.createContext(n);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);