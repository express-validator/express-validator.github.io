"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4756],{740:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(62540),t=n(43023);const i={id:"index",title:"Getting Started"},a=void 0,o={id:"index",title:"Getting Started",description:"express-validator is a set of express.js middlewares that wraps",source:"@site/versioned_docs/version-5.3.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/5.3.0/",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-5.3.0/index.md",tags:[],version:"5.3.0",frontMatter:{id:"index",title:"Getting Started"},sidebar:"docs",next:{title:"Sanitization",permalink:"/docs/5.3.0/sanitization"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Basic guide",id:"basic-guide",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["express-validator is a set of ",(0,r.jsx)(s.a,{href:"http://expressjs.com/",children:"express.js"})," middlewares that wraps\n",(0,r.jsx)(s.a,{href:"https://github.com/chriso/validator.js",children:"validator.js"})," validator and sanitizer functions."]}),"\n",(0,r.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(s.p,{children:"Install it using npm (make sure that you have Node.js 6 or newer):"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm install --save express-validator\n"})}),"\n",(0,r.jsx)(s.h2,{id:"basic-guide",children:"Basic guide"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"It's recommended that you have basic knowledge of the express.js module before you go on with\nthis guide."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Let's get started by writing a basic route to create a user in the database:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.post('/user', (req, res) => {\n  User.create({\n    username: req.body.username,\n    password: req.body.password\n  }).then(user => res.json(user));\n});\n"})}),"\n",(0,r.jsx)(s.p,{children:"Then, you'll want to make sure that you validate the input and report any errors before creating the user:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// ...rest of the initial code omitted for simplicity.\nconst { check, validationResult } = require('express-validator/check');\n\napp.post('/user', [\n  // username must be an email\n  check('username').isEmail(),\n  // password must be at least 5 chars long\n  check('password').isLength({ min: 5 })\n], (req, res) => {\n  // Finds the validation errors in this request and wraps them in an object with handy functions\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n\n  User.create({\n    username: req.body.username,\n    password: req.body.password\n  }).then(user => res.json(user));\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Voila!"})," Now, whenever a request that includes invalid ",(0,r.jsx)(s.code,{children:"username"})," or ",(0,r.jsx)(s.code,{children:"password"})," fields\nis submitted, your server will respond like this:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "errors": [{\n    "location": "body",\n    "msg": "Invalid value",\n    "param": "username"\n  }]\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["For all the available validators in express-validator (just like its options),\ntake a look at validator.js docs ",(0,r.jsx)(s.a,{href:"https://github.com/chriso/validator.js#validators",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsxs)(s.p,{children:["This completes the basic guide on getting started with express-validator.",(0,r.jsx)(s.br,{}),"\n","You might want to continue reading about some of the more advanced features available:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/5.3.0/sanitization",children:"Sanitization"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/5.3.0/custom-validators-sanitizers",children:"Custom validators/sanitizers"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/5.3.0/custom-error-messages",children:"Custom error messages"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/5.3.0/wildcards",children:"Wildcards"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/5.3.0/schema-validation",children:"Schema validation"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},43023:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var r=n(63696);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);