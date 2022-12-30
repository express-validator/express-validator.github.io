"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1400],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],s={id:"migration-v5-to-v6",title:"Migration from v5 to v6"},l=void 0,p={unversionedId:"migration-v5-to-v6",id:"version-6.11.0/migration-v5-to-v6",title:"Migration from v5 to v6",description:"Starting with v6, the approach for doing validations is more declarative and, in turn, some of the APIs we had in v5 require some changes.",source:"@site/versioned_docs/version-6.11.0/migration-v5-to-v6.md",sourceDirName:".",slug:"/migration-v5-to-v6",permalink:"/docs/6.11.0/migration-v5-to-v6",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.11.0/migration-v5-to-v6.md",tags:[],version:"6.11.0",frontMatter:{id:"migration-v5-to-v6",title:"Migration from v5 to v6"},sidebar:"version-6.11.0/docs",previous:{title:"FAQ",permalink:"/docs/6.11.0/faq"}},c={},d=[{value:"Sample code using v5.3.1",id:"sample-code-using-v531",level:2},{value:"Sample code using v6+",id:"sample-code-using-v6",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting with v6, the approach for doing validations is more declarative and, in turn, some of the APIs we had in v5 require some changes."),(0,o.kt)("p",null,"The purpose of this documentation is to show how to migrate your existing express-validator code from v5 to v6 through sample codes. With the understanding that there is a more declarative way of doing the validations in v6+, the only requirement in the sample codes we set for is to keep the similar programmatical approach in both versions, so that we are comparing apples to apples."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"For a complete list of breaking changes and new features in 6.0.0"),",\nplease check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/releases/tag/v6.0.0"},"its release notes"),".")),(0,o.kt)("h2",{id:"sample-code-using-v531"},"Sample code using v5.3.1"),(0,o.kt)("p",null,"Say we want to leverage this library in a more ",(0,o.kt)("em",{parentName:"p"},"programmatic")," way: A POST request handler takes a JSON object in the request's body and responds based on if the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"greetings"))," attribute is found in the JSON object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst bodyParser = require('body-parser');\nconst expressValidator = require('express-validator');\n\nconst app = express();\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: false }));\napp.use(expressValidator());\n\napp.post('/', (req, res) => {\n  console.info(`checking request body: ${JSON.stringify(req.body)}`);\n  req.checkBody('greetings').isLength({ min: 1 });\n\n  const validationResults = req.validationErrors();\n  console.info(`validation results: ${JSON.stringify(validationResults)}`);\n\n  if (!validationResults || validationResults.length < 1) {\n    req.sanitizeBody('greetings').escape().trim();\n    res.send(`checking done, hello: ${req.body['greetings']}`);\n  } else {\n    res.send(`checking done, error: ${JSON.stringify(validationResults)}`);\n  }\n});\n\napp.listen(3000, () => {\n  console.info('app listening at port 3000');\n});\n")),(0,o.kt)("p",null,"For example, we want to make our v5 code to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/blob/master/docs/api-check.md"},(0,o.kt)("inlineCode",{parentName:"a"},"check"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/blob/master/docs/api-validation-result.md"},(0,o.kt)("inlineCode",{parentName:"a"},"validationResult"))," functions in v6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change from\n",(0,o.kt)("inlineCode",{parentName:"li"},"const expressValidator = require('express-validator')")," to\n",(0,o.kt)("inlineCode",{parentName:"li"},"const {check, validationResult} = require('express-validator')")),(0,o.kt)("li",{parentName:"ol"},"Remove ",(0,o.kt)("inlineCode",{parentName:"li"},"app.use(expressValidator())")),(0,o.kt)("li",{parentName:"ol"},"Change from\n",(0,o.kt)("inlineCode",{parentName:"li"},"req.checkBody('greetings').isLength({min: 1})")," to\n",(0,o.kt)("inlineCode",{parentName:"li"},"await check('greetings').notEmpty().run(req)")),(0,o.kt)("li",{parentName:"ol"},"Change from\n",(0,o.kt)("inlineCode",{parentName:"li"},"const validationResults = req.validationErrors()")," to\n",(0,o.kt)("inlineCode",{parentName:"li"},"const validationResults = validationResult(req)")),(0,o.kt)("li",{parentName:"ol"},"Change from\n",(0,o.kt)("inlineCode",{parentName:"li"},"req.sanitizeBody('greetings').escape().trim()")," to\n",(0,o.kt)("inlineCode",{parentName:"li"},"await check('greetings').trim().escape().run(req)"))),(0,o.kt)("h2",{id:"sample-code-using-v6"},"Sample code using v6+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst bodyParser = require('body-parser');\nconst { check, validationResult } = require('express-validator');\n\nconst app = express();\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: false }));\n\napp.post('/', async (req, res) => {\n  console.info(`checking request body: ${JSON.stringify(req.body)}`);\n  await check('greetings').notEmpty().run(req);\n\n  const validationResults = validationResult(req);\n  console.info(\n    `validation results: ${JSON.stringify(\n      validationResults,\n    )}, is empty? ${validationResults.isEmpty()}`,\n  );\n\n  if (validationResults.isEmpty()) {\n    await check('greetings').trim().escape().run(req);\n    res.send(`checking done, hello: ${req.body['greetings']}`);\n  } else {\n    res.send(`checking done, error: ${JSON.stringify(validationResults.array())}`);\n  }\n});\n\napp.listen(3000, () => {\n  console.info('app listening at port 3000');\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The complete diff between the two versions of the example: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shwei/express-validator-migrate-5-to-6/blob/main/v5_to_v6.diff"},"https://github.com/shwei/express-validator-migrate-5-to-6/blob/main/v5_to_v6.diff"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To see the sample codes in action I created the project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shwei/express-validator-migrate-5-to-6"},"express-validator-migrate-5-to-6"),".")))}u.isMDXComponent=!0}}]);