"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8551],{7187:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var t=s(4246),i=s(1670);const a={title:"Field Selection"},d=void 0,r={id:"guides/field-selection",title:"Field Selection",description:"In express-validator, a field is any value that is either validated or sanitized.",source:"@site/../docs/guides/field-selection.md",sourceDirName:"guides",slug:"/guides/field-selection",permalink:"/docs/next/guides/field-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/../docs/guides/field-selection.md",tags:[],version:"current",frontMatter:{title:"Field Selection"},sidebar:"docs",previous:{title:"The Validation Chain",permalink:"/docs/next/guides/validation-chain"},next:{title:"Customizing express-validator",permalink:"/docs/next/guides/customizing"}},l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Whole-body selection",id:"whole-body-selection",level:2},{value:"Advanced features",id:"advanced-features",level:2},{value:"Wildcards",id:"wildcards",level:3},{value:"Globstars",id:"globstars",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In express-validator, a field is any value that is either validated or sanitized.",(0,t.jsx)(n.br,{}),"\n","It can be a simple value such as a string or a number, to a more complex array or object value."]}),"\n",(0,t.jsx)(n.p,{children:"Pretty much every function or value returned by express-validator reference fields in some way.\nFor this reason, it's important to understand the field path syntax both for when selecting fields\nfor validation, and when accessing the validation errors or validated data."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:"The path of a field is always a string, which resembles how you'd reference it with pure JavaScript."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Each word-like sequence of characters is a ",(0,t.jsx)(n.strong,{children:"segment"}),". Segments are like properties of a JavaScript object."]}),"\n",(0,t.jsxs)(n.li,{children:["Fields nested under objects can be selected by separating two segments with a ",(0,t.jsx)(n.code,{children:"."})]}),"\n",(0,t.jsx)(n.li,{children:"Array indices can be selected by wrapping them in square brackets"}),"\n",(0,t.jsxs)(n.li,{children:["Segments with special characters such as ",(0,t.jsx)(n.code,{children:"."})," can be selected by wrapping in square brackets and double quotes"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, suppose that ",(0,t.jsx)(n.code,{children:"req.body"})," looks like the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "John McExpress",\n  "addresses": {\n    "work": {\n      "country": "express-validator land"\n    }\n  },\n  "siblings": [{ "name": "Maria von Validator" }],\n  "websites": {\n    "www.example.com": { "dns": "1.2.3.4" }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The following table represents what each path would select in the above object:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Path"}),(0,t.jsx)(n.th,{children:"Selected value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"John McExpress"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"addresses.work.country"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"express-validator land"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"siblings"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'[{ "name": "Maria von Validator" }]'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"siblings[0]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{ "name": "Maria von Validator" }'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"siblings[0].name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"Maria von Validator"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"siblings.name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'websites["www.example.com"]'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{ "dns": "1.2.3.4" }'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"websites.www.example.com"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"whole-body-selection",children:"Whole-body selection"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes a request's body is not an object or an array, but you still want to select it\nfor validation/sanitization."}),"\n",(0,t.jsx)(n.p,{children:"This can be done by omitting the field path, or by using an empty string. Both yield the same result:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.post(\n  '/recover-password',\n  // These are equivalent.\n  body().isEmail(),\n  body('').isEmail(),\n  (req, res) => {\n    // Handle request\n  },\n);\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It's possible to select the whole ",(0,t.jsx)(n.code,{children:"req.cookies"}),", ",(0,t.jsx)(n.code,{children:"req.params"})," and etc too, though it's probably\nnot as useful or common as it'd be with ",(0,t.jsx)(n.code,{children:"req.body"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-features",children:"Advanced features"}),"\n",(0,t.jsx)(n.h3,{id:"wildcards",children:"Wildcards"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes you will want to apply the same rules to all items of an array, or all keys of an object.\nThat's what the ",(0,t.jsx)(n.code,{children:"*"}),", also known as the wildcard, is for.",(0,t.jsx)(n.br,{}),"\n","The wildcard can be used in place of any segment, which will correctly select all indices of the\narray or keys of the object it's located in."]}),"\n",(0,t.jsxs)(n.p,{children:["Each matched field is returned as a different instance; that is, it's validated or sanitized\nindependently from the others.",(0,t.jsx)(n.br,{}),"\n","If the array or object that the wildcard is placed in is empty, then nothing is validated."]}),"\n",(0,t.jsx)(n.p,{children:"Let's imagine that the endpoint for updating a user's profile accepts their addresses and siblings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "addresses": {\n    "home": { "number": 35 },\n    "work": { "number": 501 }\n  },\n  "siblings": [{ "name": "Maria von Validator" }, { "name": "Checky McCheckFace" }]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In order to validate that the address numbers are all integers, and that the name of the siblings\nare set, you could have the following validation chains:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.post(\n  '/update-user',\n  body('addresses.*.number').isInt(),\n  body('siblings.*.name').notEmpty(),\n  (req, res) => {\n    // Handle request\n  },\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"globstars",children:"Globstars"}),"\n",(0,t.jsxs)(n.p,{children:["Globstars extend ",(0,t.jsx)(n.a,{href:"#wildcards",children:"wildcards"})," to an infinitely deep level.",(0,t.jsx)(n.br,{}),"\n","They can be used when you have an unknown level of nested fields, and want to validate/sanitize all\nof them the same way."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, imagine that your endpoint handles the update of a company's organizational chart.",(0,t.jsx)(n.br,{}),"\n","The structure is recursive, so it looks roughly like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Team name",\n  "teams": [{ "name": "Subteam name", "teams": [] }]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this scenario, a team is inside another team that is inside another team, and so on."}),"\n",(0,t.jsxs)(n.p,{children:["You can use a globstar (",(0,t.jsx)(n.code,{children:"**"}),") to target any field, no matter how deep it is in the request.",(0,t.jsx)(n.br,{}),"\n","The following example checks that all fields called ",(0,t.jsx)(n.code,{children:"name"}),", including the one at the root of the ",(0,t.jsx)(n.code,{children:"req.body"}),", are set:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.put('/update-chart', body('**.name').notEmpty(), (req, res) => {\n  // Handle request\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>d});var t=s(7378);const i={},a=t.createContext(i);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);