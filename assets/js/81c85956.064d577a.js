"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4567],{26163:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=n(24246),a=n(71670);const t={id:"wildcards",title:"Wildcards"},o=void 0,d={id:"wildcards",title:"Wildcards",description:"Sometimes you will want to apply the same rules to all items of an array or all keys of some object.",source:"@site/versioned_docs/version-5.3.0/feature-wildcards.md",sourceDirName:".",slug:"/wildcards",permalink:"/docs/5.3.0/wildcards",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-5.3.0/feature-wildcards.md",tags:[],version:"5.3.0",frontMatter:{id:"wildcards",title:"Wildcards"},sidebar:"docs",previous:{title:"Custom Error Messages",permalink:"/docs/5.3.0/custom-error-messages"},next:{title:"Schema Validation",permalink:"/docs/5.3.0/schema-validation"}},i={},c=[];function l(e){const s={br:"br",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Sometimes you will want to apply the same rules to all items of an array or all keys of some object.",(0,r.jsx)(s.br,{}),"\n","That's what the ",(0,r.jsx)(s.code,{children:"*"})," character - also known as a wildcard -- is for."]}),"\n",(0,r.jsx)(s.p,{children:"For example, imagine you want to validate that all addresses have a valid postal code,\nand that the number of each address is sanitized as an integer number."}),"\n",(0,r.jsx)(s.p,{children:"We can do this with the following code:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const express = require('express');\nconst { check } = require('express-validator/check');\nconst { sanitize } = require('express-validator/filter');\n\nconst app = express();\napp.use(express.json());\n\napp.post('/addresses', [\n  check('addresses.*.postalCode').isPostalCode(),\n  sanitize('addresses.*.number').toInt()\n], (req, res) => {\n  // Handle the request\n});\n"})}),"\n",(0,r.jsx)(s.p,{children:"This will handle cases where you send an array of addresses:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "addresses": [\n    { "postalCode": "2010", "number": "500" },\n    { "postalCode": "", "number": "501" },\n  ]\n}\n'})}),"\n",(0,r.jsx)(s.p,{children:"...or even cases where you want a predefined set of addresses:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "addresses": {\n    "home": { "postalCode": "", "number": "501" },\n    "work": { "postalCode": "2010", "number": "500" }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71670:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>o});var r=n(27378);const a={},t=r.createContext(a);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);