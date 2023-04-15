"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8940],{5318:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>h});var t=n(7378);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?t.createElement(h,l(l({ref:a},d),{},{components:n})):t.createElement(h,l({ref:a},d))}));function h(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9448:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=n(5773),i=n(808),r=(n(7378),n(5318)),l=["components"],o={id:"check-api",title:"Validation middlewares"},s=void 0,c={unversionedId:"check-api",id:"version-6.11.0/check-api",title:"Validation middlewares",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.11.0/api-check.md",sourceDirName:".",slug:"/check-api",permalink:"/docs/6.11.0/check-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.11.0/api-check.md",tags:[],version:"6.11.0",frontMatter:{id:"check-api",title:"Validation middlewares"},sidebar:"api",next:{title:"Validation Chain API",permalink:"/docs/6.11.0/validation-chain-api"}},d={},p=[{value:"<code>check([field, message])</code>",id:"checkfield-message",level:2},{value:"<code>body([fields, message])</code>",id:"bodyfields-message",level:2},{value:"<code>cookie([fields, message])</code>",id:"cookiefields-message",level:2},{value:"<code>header([fields, message])</code>",id:"headerfields-message",level:2},{value:"<code>param([fields, message])</code>",id:"paramfields-message",level:2},{value:"<code>query([fields, message])</code>",id:"queryfields-message",level:2},{value:"<code>checkSchema(schema)</code>",id:"checkschemaschema",level:2},{value:"<code>oneOf(validationChains[, message])</code>",id:"oneofvalidationchains-message",level:2},{value:"<code>buildCheckFunction(locations)</code>",id:"buildcheckfunctionlocations",level:2}],m={toc:p};function u(e){var a=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These methods are all available via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('express-validator')"),"."),(0,r.kt)("h2",{id:"checkfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"check([field, message])")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field")," ",(0,r.kt)("em",{parentName:"li"},"(optional)"),": a string or an array of strings of field names to validate against."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," ",(0,r.kt)("em",{parentName:"li"},"(optional)"),": an error message to use when failed validators don't specify a message. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"Invalid value"),"; see also ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.11.0/custom-error-messages#dynamic-messages"},"Dynamic Messages"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/validation-chain-api"},"Validation Chain"))),(0,r.kt)("p",null,"Creates a validation chain for one or more fields. They may be located in any of the following request objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.body")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.cookies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.headers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.params")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.query"))),(0,r.kt)("p",null,"If any of the fields are present in more than one location, then all instances of that field value must pass the validation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," is omitted, then the whole request location will be validated.\nThis is only useful for ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body"),", though; see ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/whole-body-validation"},"Whole Body Validation")," for examples."),(0,r.kt)("p",null,"The validators will always be executed serially for the same field.",(0,r.kt)("br",{parentName:"p"}),"\n","This means that if the chain targets more than one field, those will run in parallel, but each of their validators are serial."),(0,r.kt)("h2",{id:"bodyfields-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"body([fields, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"check([fields, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body"),"."),(0,r.kt)("h2",{id:"cookiefields-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"cookie([fields, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"check([fields, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.cookies"),"."),(0,r.kt)("h2",{id:"headerfields-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"header([fields, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"check([fields, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.headers"),"."),(0,r.kt)("h2",{id:"paramfields-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"param([fields, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"check([fields, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.params"),"."),(0,r.kt)("h2",{id:"queryfields-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"query([fields, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"check([fields, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.query"),"."),(0,r.kt)("h2",{id:"checkschemaschema"},(0,r.kt)("inlineCode",{parentName:"h2"},"checkSchema(schema)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema"),": the schema to validate. Must comply with the format described in ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.11.0/schema-validation"},"Schema Validation"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," an array of validation chains and ",(0,r.kt)("inlineCode",{parentName:"p"},"{ run: (req) => Promise<unknown[]> }"))),(0,r.kt)("h2",{id:"oneofvalidationchains-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"oneOf(validationChains[, message])")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validationChains"),": an array of ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.11.0/validation-chain-api"},"validation chains")," created with ",(0,r.kt)("inlineCode",{parentName:"li"},"check()")," or any of its variations,\nor an array of arrays containing validation chains."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," ",(0,r.kt)("em",{parentName:"li"},"(optional)"),": an error message to use when all chains failed. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"Invalid value(s)"),"; see also ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.11.0/custom-error-messages#dynamic-messages"},"Dynamic Messages"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a middleware instance and ",(0,r.kt)("inlineCode",{parentName:"p"},"{ run: (req) => Promise<Result> }"))),(0,r.kt)("p",null,"Creates a middleware instance that will ensure at least one of the given chains passes the validation.",(0,r.kt)("br",{parentName:"p"}),"\n","If none of the given chains passes, an error will be pushed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"_error")," pseudo-field,\nusing the given ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),", and the errors of each chain will be made available under a key ",(0,r.kt)("inlineCode",{parentName:"p"},"nestedErrors"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { check, oneOf, validationResult } = require('express-validator');\napp.post('/start-freelancing', oneOf([\n  check('programming_language').isIn(['javascript', 'java', 'php']),\n  check('design_tools').isIn(['canva', 'photoshop', 'gimp'])\n]), (req, res, next) => {\n  try {\n    validationResult(req).throw();\n\n    // yay! we're good to start selling our skilled services :)))\n    res.json(...);\n  } catch (err) {\n    // Oh noes. This user doesn't have enough skills for this...\n    res.status(400).json(...);\n  }\n});\n")),(0,r.kt)("p",null,"If an item of the array is an array containing validation chains, then all of those must pass in order for this\ngroup be considered valid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This protected route must be accessed either by passing both username + password,\n// or by passing an access token\napp.post(\n  '/protected/route',\n  oneOf([\n    [check('username').exists(), check('password').exists()],\n    check('access_token').exists()\n  ]),\n  someRouteHandler,\n);\n")),(0,r.kt)("p",null,"The execution of those validation chains are made in parallel,\nwhile the execution within a chain still respects the rule defined in the ",(0,r.kt)("a",{parentName:"p",href:"#check-field-message"},(0,r.kt)("inlineCode",{parentName:"a"},"check()")," function"),"."),(0,r.kt)("h2",{id:"buildcheckfunctionlocations"},(0,r.kt)("inlineCode",{parentName:"h2"},"buildCheckFunction(locations)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locations"),": an array of request locations to gather data from.",(0,r.kt)("br",{parentName:"li"}),"May include any of ",(0,r.kt)("inlineCode",{parentName:"li"},"body"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cookies"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"headers"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a variant of ",(0,r.kt)("a",{parentName:"p",href:"#check-field-message"},(0,r.kt)("inlineCode",{parentName:"a"},"check()"))," checking the given request locations.")),(0,r.kt)("p",null,"Creates a variant of ",(0,r.kt)("a",{parentName:"p",href:"#check-field-message"},(0,r.kt)("inlineCode",{parentName:"a"},"check()"))," that checks the given request locations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { buildCheckFunction } = require('express-validator');\nconst checkBodyAndQuery = buildCheckFunction(['body', 'query']);\n\napp.put(\n  '/update-product',\n  // id must be either in req.body or req.query, and must be an UUID\n  checkBodyAndQuery('id').isUUID(),\n  productUpdateHandler,\n);\n")))}u.isMDXComponent=!0}}]);