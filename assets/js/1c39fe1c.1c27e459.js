"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2728],{66483:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var s=n(62540),t=n(43023),a=n(78296),i=n(22491);const o={id:"index",title:"Getting Started"},l=void 0,u={id:"index",title:"Getting Started",description:"express-validator is a set of express.js middlewares that wraps",source:"@site/versioned_docs/version-6.12.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/6.12.0/",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.12.0/index.md",tags:[],version:"6.12.0",frontMatter:{id:"index",title:"Getting Started"},sidebar:"docs",next:{title:"Sanitization",permalink:"/docs/6.12.0/sanitization"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Basic guide",id:"basic-guide",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["express-validator is a set of ",(0,s.jsx)(r.a,{href:"http://expressjs.com/",children:"express.js"})," middlewares that wraps\n",(0,s.jsx)(r.a,{href:"https://github.com/validatorjs/validator.js",children:"validator.js"})," validator and sanitizer functions."]}),"\n",(0,s.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(r.p,{children:"Install it using npm (make sure that you have Node.js 8 or newer):"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"npm install --save express-validator\n"})}),"\n",(0,s.jsx)(r.h2,{id:"basic-guide",children:"Basic guide"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"It's recommended that you have basic knowledge of the express.js module before you go on with\nthis guide."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Let's get started by writing a basic route to create a user in the database:"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.post('/user', (req, res) => {\n  User.create({\n    username: req.body.username,\n    password: req.body.password,\n  }).then(user => res.json(user));\n});\n"})})}),(0,s.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"import express from 'express';\nconst app = express();\n\napp.use(express.json());\napp.post('/user', (req: express.Request, res: express.Response) => {\n  User.create({\n    username: req.body.username,\n    password: req.body.password,\n  }).then(user => res.json(user));\n});\n"})})})]}),"\n",(0,s.jsx)(r.p,{children:"Then, you'll want to make sure that you validate the input and report any errors before creating the user:"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// ...rest of the initial code omitted for simplicity.\nconst { body, validationResult } = require('express-validator');\n\napp.post(\n  '/user',\n  // username must be an email\n  body('username').isEmail(),\n  // password must be at least 5 chars long\n  body('password').isLength({ min: 5 }),\n  (req, res) => {\n    // Finds the validation errors in this request and wraps them in an object with handy functions\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n      return res.status(400).json({ errors: errors.array() });\n    }\n\n    User.create({\n      username: req.body.username,\n      password: req.body.password,\n    }).then(user => res.json(user));\n  },\n);\n"})})}),(0,s.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// ...rest of the initial code omitted for simplicity.\nimport { body, validationResult } from 'express-validator';\n\napp.post(\n  '/user',\n  // username must be an email\n  body('username').isEmail(),\n  // password must be at least 5 chars long\n  body('password').isLength({ min: 5 }),\n  (req: express.Request, res: express.Response) => {\n    // Finds the validation errors in this request and wraps them in an object with handy functions\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n      return res.status(400).json({ errors: errors.array() });\n    }\n\n    User.create({\n      username: req.body.username,\n      password: req.body.password,\n    }).then(user => res.json(user));\n  },\n);\n"})})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Voila!"})," Now, whenever a request that includes invalid ",(0,s.jsx)(r.code,{children:"username"})," or ",(0,s.jsx)(r.code,{children:"password"})," fields\nis submitted, your server will respond like this:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "errors": [\n    {\n      "location": "body",\n      "msg": "Invalid value",\n      "param": "username"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["For all the available validators in express-validator (just like its options),\ntake a look at validator.js docs ",(0,s.jsx)(r.a,{href:"https://github.com/validatorjs/validator.js#validators",children:"here"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsxs)(r.p,{children:["This completes the basic guide on getting started with express-validator.",(0,s.jsx)(r.br,{}),"\n","You might want to continue reading about some of the more advanced features available:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/6.12.0/sanitization",children:"Sanitization"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/6.12.0/custom-validators-sanitizers",children:"Custom validators/sanitizers"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/6.12.0/custom-error-messages",children:"Custom error messages"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/6.12.0/wildcards",children:"Wildcards"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/6.12.0/schema-validation",children:"Schema validation"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},22491:(e,r,n)=>{n.d(r,{A:()=>i});n(63696);var s=n(11750);const t={tabItem:"tabItem_wHwb"};var a=n(62540);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:n,children:r})}},78296:(e,r,n)=>{n.d(r,{A:()=>w});var s=n(63696),t=n(11750),a=n(90766),i=n(49519),o=n(14395),l=n(35043),u=n(44544),d=n(48708);function c(e){var r,n;return null!=(r=null==(n=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,s.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,u.X)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId,a=(0,i.W6)(),o=function(e){var r=e.queryString,n=void 0!==r&&r,s=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,s.useCallback)((function(e){if(o){var r=new URLSearchParams(a.location.search);r.set(o,e),a.replace(Object.assign({},a.location,{search:r.toString()}))}}),[o,a])]}function v(e){var r,n,t,a,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,v=h(e),f=(0,s.useState)((function(){return function(e){var r,n=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var t=null!=(r=s.find((function(e){return e.default})))?r:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:v})})),b=f[0],x=f[1],j=m({queryString:u,groupId:c}),g=j[0],y=j[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,d.Dv)(r),t=n[0],a=n[1],[t,(0,s.useCallback)((function(e){r&&a.set(e)}),[r,a])]),q=w[0],k=w[1],I=function(){var e=null!=g?g:q;return p({value:e,tabValues:v})?e:null}();return(0,o.A)((function(){I&&x(I)}),[I]),{selectedValue:b,selectValue:(0,s.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),k(e)}),[y,k,v]),tabValues:v}}var f=n(86681);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=n(62540);function j(e){var r=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,a.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,n=l.indexOf(r),t=o[n].value;t!==s&&(u(r),i(t))},c=function(e){var r,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,t=l.indexOf(e.currentTarget)+1;n=null!=(s=l[t])?s:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!=(a=l[i])?a:l[l.length-1]}null==(r=n)||r.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:o.map((function(e){var r=e.value,n=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:function(e){return l.push(e)},onKeyDown:c,onClick:d},a,{className:(0,t.A)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===r}),children:null!=n?n:r}),r)}))})}function g(e){var r=e.lazy,n=e.children,t=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=a.find((function(e){return e.props.value===t}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,r){return(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})}))})}function y(e){var r=v(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,Object.assign({},e,r)),(0,x.jsx)(g,Object.assign({},e,r))]})}function w(e){var r=(0,f.A)();return(0,x.jsx)(y,Object.assign({},e,{children:c(e.children)}),String(r))}},43023:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var s=n(63696);const t={},a=s.createContext(t);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);