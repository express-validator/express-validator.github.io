"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9111],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7378),a=r(8944);const s="tabItem_wHwb";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},3337:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(5773),a=r(7378),s=r(8944),o=r(6457),i=r(784),l=r(9947),u=r(3457);const p="tabList_J5MA",d="tabItem_l0OV";function c(e){var t,r,o=e.lazy,c=e.block,m=e.defaultValue,v=e.values,b=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:h[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,l.U)(),w=x.tabGroupChoices,j=x.setTabGroupChoices,N=(0,a.useState)(g),T=N[0],O=N[1],E=[],q=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=w[b];null!=I&&I!==T&&y.some((function(e){return e.value===I}))&&O(I)}var S=function(e){var t=e.currentTarget,r=E.indexOf(t),n=y[r].value;n!==T&&(q(t),O(n),null!=b&&j(b,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var n,a=E.indexOf(e.currentTarget)+1;r=null!=(n=E[a])?n:E[0];break;case"ArrowLeft":var s,o=E.indexOf(e.currentTarget)-1;r=null!=(s=E[o])?s:E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onClick:S},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},8695:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=r(5773),a=r(808),s=(r(7378),r(5318)),o=r(3337),i=r(9798),l=["components"],u={id:"index",title:"Getting Started"},p=void 0,d={unversionedId:"index",id:"index",title:"Getting Started",description:"express-validator is a set of express.js middlewares that wraps",source:"@site/../docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/../docs/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started"},sidebar:"docs",next:{title:"Sanitization",permalink:"/docs/next/sanitization"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"Basic guide",id:"basic-guide",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],v={toc:m};function b(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"express-validator is a set of ",(0,s.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"express.js")," middlewares that wraps\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/validatorjs/validator.js"},"validator.js")," validator and sanitizer functions."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"Install it using npm (make sure that you have Node.js 8 or newer):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install --save express-validator\n")),(0,s.kt)("h2",{id:"basic-guide"},"Basic guide"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"It's recommended that you have basic knowledge of the express.js module before you go on with\nthis guide.")),(0,s.kt)("p",null,"Let's get started by writing a basic route to create a user in the database:"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.post('/user', (req, res) => {\n  User.create({\n    username: req.body.username,\n    password: req.body.password,\n  }).then(user => res.json(user));\n});\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import express from 'express';\nconst app = express();\n\napp.use(express.json());\napp.post('/user', (req: express.Request, res: express.Response) => {\n  User.create({\n    username: req.body.username,\n    password: req.body.password,\n  }).then(user => res.json(user));\n});\n")))),(0,s.kt)("p",null,"Then, you'll want to make sure that you validate the input and report any errors before creating the user:"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ...rest of the initial code omitted for simplicity.\nconst { body, validationResult } = require('express-validator');\n\napp.post(\n  '/user',\n  // username must be an email\n  body('username').isEmail(),\n  // password must be at least 5 chars long\n  body('password').isLength({ min: 5 }),\n  (req, res) => {\n    // Finds the validation errors in this request and wraps them in an object with handy functions\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n      return res.status(400).json({ errors: errors.array() });\n    }\n\n    User.create({\n      username: req.body.username,\n      password: req.body.password,\n    }).then(user => res.json(user));\n  },\n);\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...rest of the initial code omitted for simplicity.\nimport { value body, value validationResult } from 'express-validator';\n\napp.post(\n  '/user',\n  // username must be an email\n  body('username').isEmail(),\n  // password must be at least 5 chars long\n  body('password').isLength({ min: 5 }),\n  (req: express.Request, res: express.Response) => {\n    // Finds the validation errors in this request and wraps them in an object with handy functions\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n      return res.status(400).json({ errors: errors.array() });\n    }\n\n    User.create({\n      username: req.body.username,\n      password: req.body.password,\n    }).then(user => res.json(user));\n  },\n);\n")))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Voila!")," Now, whenever a request that includes invalid ",(0,s.kt)("inlineCode",{parentName:"p"},"username")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," fields\nis submitted, your server will respond like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "location": "body",\n      "msg": "Invalid value",\n      "param": "username"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"For all the available validators in express-validator (just like its options),\ntake a look at validator.js docs ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/validatorjs/validator.js#validators"},"here"),"."),(0,s.kt)("h2",{id:"whats-next"},"What's next"),(0,s.kt)("p",null,"This completes the basic guide on getting started with express-validator.",(0,s.kt)("br",{parentName:"p"}),"\n","You might want to continue reading about some of the more advanced features available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/sanitization"},"Sanitization")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/custom-validators-sanitizers"},"Custom validators/sanitizers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/custom-error-messages"},"Custom error messages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/wildcards"},"Wildcards")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/schema-validation"},"Schema validation"))))}b.isMDXComponent=!0}}]);