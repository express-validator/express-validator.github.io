"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[283],{5706:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var n=t(4246),o=t(1670);const s={id:"matched-data-api",title:"matchedData()"},i=void 0,l={id:"matched-data-api",title:"matchedData()",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.1.0/api-matched-data.md",sourceDirName:".",slug:"/matched-data-api",permalink:"/docs/6.1.0/matched-data-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.1.0/api-matched-data.md",tags:[],version:"6.1.0",frontMatter:{id:"matched-data-api",title:"matchedData()"},sidebar:"api",previous:{title:"Sanitization Chain API",permalink:"/docs/6.1.0/sanitization-chain-api"},next:{title:"validationResult()",permalink:"/docs/6.1.0/validation-result-api"}},d={},r=[{value:"<code>matchedData(req[, options])</code>",id:"matcheddatareq-options",level:2},{value:"Examples",id:"examples",level:2},{value:"Gathering data from multiple locations",id:"gathering-data-from-multiple-locations",level:3},{value:"Including optional data",id:"including-optional-data",level:3}];function c(e){const a={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["These methods are all available via ",(0,n.jsx)(a.code,{children:"require('express-validator')"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"matcheddatareq-options",children:(0,n.jsx)(a.code,{children:"matchedData(req[, options])"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"req"}),": the express request object."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"options"})," ",(0,n.jsx)(a.em,{children:"(optional)"}),": an object which accepts the following options:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"includeOptionals"}),": if set to ",(0,n.jsx)(a.code,{children:"true"}),", the returned value includes optional data. Defaults to ",(0,n.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"onlyValidData"}),": if set to ",(0,n.jsx)(a.code,{children:"false"}),", the returned value includes data from fields\nthat didn't pass their validations. Defaults to ",(0,n.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"locations"}),": an array of locations to extract the data from. The acceptable values include\n",(0,n.jsx)(a.code,{children:"body"}),", ",(0,n.jsx)(a.code,{children:"cookies"}),", ",(0,n.jsx)(a.code,{children:"headers"}),", ",(0,n.jsx)(a.code,{children:"params"})," and ",(0,n.jsx)(a.code,{children:"query"}),". Defaults to ",(0,n.jsx)(a.code,{children:"undefined"}),", which means all locations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"Returns:"})," an object of data that express-validator has validated or sanitized."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Extracts data validated or sanitized by express-validator from the request and builds\nan object with them. Nested paths and wildcards are properly handled as well.",(0,n.jsx)(a.br,{}),"\n","See examples below."]}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(a.h3,{id:"gathering-data-from-multiple-locations",children:"Gathering data from multiple locations"}),"\n",(0,n.jsxs)(a.p,{children:["If data you validated or sanitized is spread across various request locations\n(e.g. ",(0,n.jsx)(a.code,{children:"req.body"}),", ",(0,n.jsx)(a.code,{children:"req.query"}),", ",(0,n.jsx)(a.code,{children:"req.params"}),", etc), then ",(0,n.jsx)(a.code,{children:"matchedData"})," will gather it properly.\nYou can also customize which locations you want the data from."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"// Suppose the request looks like this:\n// req.query = { from: '2017-01-12' }\n// req.body = { to: '2017-31-12' }\n\napp.post('/room-availability', check(['from', 'to']).isISO8601(), (req, res, next) => {\n  const queryData = matchedData(req, { locations: ['query'] });\n  const bodyData = matchedData(req, { locations: ['body'] });\n  const allData = matchedData(req);\n  console.log(queryData); // { from: '2017-01-12' }\n  console.log(bodyData);  // { to: '2017-31-12' }\n  console.log(allData);   // { from: '2017-01-12', to: '2017-31-12' }\n});\n"})}),"\n",(0,n.jsx)(a.h3,{id:"including-optional-data",children:"Including optional data"}),"\n",(0,n.jsxs)(a.p,{children:["You may want to have ",(0,n.jsx)(a.a,{href:"/docs/6.1.0/validation-chain-api#optionaloptions",children:"optional values"})," among the required ones."]}),"\n",(0,n.jsxs)(a.p,{children:["If they are not included, some databases might understand that you don't to update that value,\nso it's useful to set them to ",(0,n.jsx)(a.code,{children:"null"})," or an empty string."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"// Suppose the request looks like this:\n// req.body = { name: 'John Doe', bio: '' }\n\napp.post('/update-user', [\n  check('name').not().isEmpty(),\n  check('bio').optional({ checkFalsy: true }).escape(),\n], (req, res, next) => {\n  const requiredData = matchedData(req, { includeOptionals: false });\n  const allData = matchedData(req, { includeOptionals: true });\n  console.log(requiredData);  // { name: 'John Doe' }\n  console.log(allData);       // { name: 'John Doe', bio: '' }\n});\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1670:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>i});var n=t(7378);const o={},s=n.createContext(o);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);