"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6775],{5318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8541:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(5773),a=r(808),s=(r(7378),r(5318)),i=["components"],o={id:"index",title:"Getting Started"},l=void 0,p={unversionedId:"index",id:"version-6.4.0/index",title:"Getting Started",description:"express-validator is a set of express.js middlewares that wraps",source:"@site/versioned_docs/version-6.4.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/6.4.0/",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.4.0/index.md",tags:[],version:"6.4.0",frontMatter:{id:"index",title:"Getting Started"},sidebar:"version-6.4.0/docs",next:{title:"Sanitization",permalink:"/docs/6.4.0/sanitization"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Basic guide",id:"basic-guide",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:u},m="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"express-validator is a set of ",(0,s.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"express.js")," middlewares that wraps\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chriso/validator.js"},"validator.js")," validator and sanitizer functions."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"Install it using npm (make sure that you have Node.js 6 or newer):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install --save express-validator\n")),(0,s.kt)("h2",{id:"basic-guide"},"Basic guide"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"It's recommended that you have basic knowledge of the express.js module before you go on with\nthis guide.")),(0,s.kt)("p",null,"Let's get started by writing a basic route to create a user in the database:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.post('/user', (req, res) => {\n  User.create({\n    username: req.body.username,\n    password: req.body.password\n  }).then(user => res.json(user));\n});\n")),(0,s.kt)("p",null,"Then, you'll want to make sure that you validate the input and report any errors before creating the user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ...rest of the initial code omitted for simplicity.\nconst { check, validationResult } = require('express-validator');\n\napp.post('/user', [\n  // username must be an email\n  check('username').isEmail(),\n  // password must be at least 5 chars long\n  check('password').isLength({ min: 5 })\n], (req, res) => {\n  // Finds the validation errors in this request and wraps them in an object with handy functions\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n\n  User.create({\n    username: req.body.username,\n    password: req.body.password\n  }).then(user => res.json(user));\n});\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Voila!")," Now, whenever a request that includes invalid ",(0,s.kt)("inlineCode",{parentName:"p"},"username")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," fields\nis submitted, your server will respond like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [{\n    "location": "body",\n    "msg": "Invalid value",\n    "param": "username"\n  }]\n}\n')),(0,s.kt)("p",null,"For all the available validators in express-validator (just like its options),\ntake a look at validator.js docs ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chriso/validator.js#validators"},"here"),"."),(0,s.kt)("h2",{id:"whats-next"},"What's next"),(0,s.kt)("p",null,"This completes the basic guide on getting started with express-validator.",(0,s.kt)("br",{parentName:"p"}),"\n","You might want to continue reading about some of the more advanced features available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/6.4.0/sanitization"},"Sanitization")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/6.4.0/custom-validators-sanitizers"},"Custom validators/sanitizers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/6.4.0/custom-error-messages"},"Custom error messages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/6.4.0/wildcards"},"Wildcards")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/6.4.0/schema-validation"},"Schema validation"))))}h.isMDXComponent=!0}}]);