"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9943],{29209:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=o(24246),s=o(71670);const a={id:"whole-body-validation",title:"Whole Body Validation"},r=void 0,i={id:"whole-body-validation",title:"Whole Body Validation",description:"Sometimes you need to validate a request whose body is a string, an array, or even a number!",source:"@site/versioned_docs/version-6.15.0/feature-whole-body-validation.md",sourceDirName:".",slug:"/whole-body-validation",permalink:"/docs/6.15.0/whole-body-validation",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.15.0/feature-whole-body-validation.md",tags:[],version:"6.15.0",frontMatter:{id:"whole-body-validation",title:"Whole Body Validation"},sidebar:"docs",previous:{title:"Schema Validation",permalink:"/docs/6.15.0/schema-validation"},next:{title:"Running validations imperatively",permalink:"/docs/6.15.0/running-imperatively"}},d={},l=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Sometimes you need to validate a request whose body is a string, an array, or even a number!\nThat's why you can omit the field to validate, and check ",(0,t.jsx)(n.code,{children:"req.body"})," directly:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const bodyParser = require('body-parser');\nconst express = require('express');\nconst { body } = require('express-validator');\n\nconst app = express();\n\n// Will handle text/plain requests\napp.use(bodyParser.text());\n\napp.post('/recover-password', body().isEmail(), (req, res) => {\n  // Assume the validity of the request was already checked\n  User.recoverPassword(req.body).then(() => {\n    res.send('Password recovered!');\n  });\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"This setup should be able to handle the following request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"POST /recover-password HTTP/1.1\nHost: localhost:3000\nContent-Type: text/plain\n\nmy@email.com\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>r});var t=o(27378);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);