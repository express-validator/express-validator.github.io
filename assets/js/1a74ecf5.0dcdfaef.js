"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6296],{7461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(4246),s=n(1670);const a={id:"sanitization",title:"Sanitization"},o=void 0,r={id:"sanitization",title:"Sanitization",description:"Sometimes, receiving input in a HTTP request isn't only about making sure that",source:"@site/versioned_docs/version-6.3.0/feature-sanitization.md",sourceDirName:".",slug:"/sanitization",permalink:"/docs/6.3.0/sanitization",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.3.0/feature-sanitization.md",tags:[],version:"6.3.0",frontMatter:{id:"sanitization",title:"Sanitization"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/6.3.0/"},next:{title:"Custom validators/sanitizers",permalink:"/docs/6.3.0/custom-validators-sanitizers"}},d={},c=[];function l(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Sometimes, receiving input in a HTTP request isn't only about making sure that\nthe data is in the right format, but also that ",(0,i.jsx)(t.strong,{children:"it is free of noise"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/chriso/validator.js#sanitizers",children:"validator.js provides a handful of sanitizers"}),"\nthat can be used to take care of the data that comes in."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const express = require('express');\nconst { body } = require('express-validator');\nconst { sanitizeBody } = require('express-validator');\n\nconst app = express();\napp.use(express.json());\n\napp.post('/comment', [\n  body('email')\n    .isEmail()\n    .normalizeEmail(),\n  body('text')\n    .not().isEmpty()\n    .trim()\n    .escape(),\n  sanitizeBody('notifyOnReply').toBoolean()\n], (req, res) => {\n  // Handle the request somehow\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the example above, we are validating ",(0,i.jsx)(t.code,{children:"email"})," and ",(0,i.jsx)(t.code,{children:"text"})," fields,\nso we may take advantage of the same chain to apply some sanitization,\nlike e-mail normalization and trimming/HTML escaping.",(0,i.jsx)(t.br,{}),"\n","And because the ",(0,i.jsx)(t.code,{children:"notifyOnReply"})," field isn't validated, we may use ",(0,i.jsx)(t.code,{children:"sanitizeBody"})," function\nfrom the ",(0,i.jsx)(t.a,{href:"/docs/6.3.0/filter-api",children:"sanitization middlewares"})," to convert it to a JavaScript boolean."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Important:"})," please note that sanitization mutates the request.\nThis means that if ",(0,i.jsx)(t.code,{children:"req.body.text"})," was sent with the value ",(0,i.jsx)(t.code,{children:"   Hello world :>)"}),", after the sanitization\nits value will be ",(0,i.jsx)(t.code,{children:"Hello world :&gt;)"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1670:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(7378);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);