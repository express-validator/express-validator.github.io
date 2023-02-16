"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8707],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=r(5773),n=r(808),o=(r(7378),r(5318)),i=["components"],l={id:"validation-result-api",title:"validationResult()"},s=void 0,p={unversionedId:"validation-result-api",id:"version-6.0.0/validation-result-api",title:"validationResult()",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.0.0/api-validation-result.md",sourceDirName:".",slug:"/validation-result-api",permalink:"/docs/6.0.0/validation-result-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.0.0/api-validation-result.md",tags:[],version:"6.0.0",frontMatter:{id:"validation-result-api",title:"validationResult()"},sidebar:"version-6.0.0/docs",previous:{title:"matchedData()",permalink:"/docs/6.0.0/matched-data-api"}},u={},d=[{value:"<code>validationResult(req)</code>",id:"validationresultreq",level:2},{value:"<code>.withDefaults(options)</code>",id:"withdefaultsoptions",level:3},{value:"<code>Result</code>",id:"result",level:2},{value:"<code>.isEmpty()</code>",id:"isempty",level:3},{value:"<code>.formatWith(formatter)</code>",id:"formatwithformatter",level:3},{value:"<code>.array([options])</code>",id:"arrayoptions",level:3},{value:"<code>.mapped()</code>",id:"mapped",level:3},{value:"<code>.throw()</code>",id:"throw",level:3}],m={toc:d},c="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These methods are all available via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('express-validator')"),"."),(0,o.kt)("h2",{id:"validationresultreq"},(0,o.kt)("inlineCode",{parentName:"h2"},"validationResult(req)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"req"),": the express request object",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a ",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," object")))),(0,o.kt)("p",null,"Extracts the validation errors from a request and makes them available in a ",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," object."),(0,o.kt)("p",null,"Each error returned by ",(0,o.kt)("a",{parentName:"p",href:"#array-options"},(0,o.kt)("inlineCode",{parentName:"a"},".array()"))," and ",(0,o.kt)("a",{parentName:"p",href:"#mapped"},(0,o.kt)("inlineCode",{parentName:"a"},".mapped()"))," methods\nhave the following format ",(0,o.kt)("em",{parentName:"p"},"by default"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "msg": "The error message",\n  "param": "param.name.with.index[0]",\n  "value": "param value",\n  // Location of the param that generated this error.\n  // It\'s either body, query, params, cookies or headers.\n  "location": "body",\n\n  // nestedErrors only exist when using the oneOf function\n  "nestedErrors": [{ ... }]\n}\n')),(0,o.kt)("h3",{id:"withdefaultsoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".withDefaults(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ formatter: error => error }"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a new ",(0,o.kt)("a",{parentName:"p",href:"#validationresultreq"},(0,o.kt)("inlineCode",{parentName:"a"},"validationResult"))," function, using the provided options")))),(0,o.kt)("p",null,"Creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"validationResult()"),"-like function with default options passed to the generated\n",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," instance."),(0,o.kt)("p",null,"Below is an example which sets a default error formatter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { validationResult } = require('express-validator');\n\nconst myValidationResult = validationResult.withDefaults({\n  formatter: (error) => {\n    return {\n      myLocation: error.location,\n    };\n  }\n});\n\napp.post('/create-user', yourValidationChains, (req, res) => {\n  // errors will be like [{ myLocation: 'body' }, { myLocation: 'query' }], etc\n  const errors = myValidationResult(req).array();\n});\n")),(0,o.kt)("h2",{id:"result"},(0,o.kt)("inlineCode",{parentName:"h2"},"Result")),(0,o.kt)("p",null,"An object that holds the current state of validation errors in a request and allows access to it in\na variety of ways."),(0,o.kt)("h3",{id:"isempty"},(0,o.kt)("inlineCode",{parentName:"h3"},".isEmpty()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a boolean indicating whether this result object contains no errors at all.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', yourValidationChains, (req, res) => {\n  const result = validationResult(req);\n  const hasErrors = !result.isEmpty();\n  // do something if hasErrors is true\n});\n")),(0,o.kt)("h3",{id:"formatwithformatter"},(0,o.kt)("inlineCode",{parentName:"h3"},".formatWith(formatter)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatter(error)"),": the function to use to format when returning errors.",(0,o.kt)("br",{parentName:"li"}),"The ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," argument is an object in the format of ",(0,o.kt)("inlineCode",{parentName:"li"},"{ location, msg, param, value, nestedErrors }"),", as described above.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," instance")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n")),(0,o.kt)("h3",{id:"arrayoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".array([options])")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ onlyFirstError: false }"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an array of validation errors.")))),(0,o.kt)("p",null,"Gets all validation errors contained in this result object."),(0,o.kt)("p",null,"If the option ",(0,o.kt)("inlineCode",{parentName:"p"},"onlyFirstError")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then only the first\nerror for each field will be included."),(0,o.kt)("h3",{id:"mapped"},(0,o.kt)("inlineCode",{parentName:"h3"},".mapped()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an object where the keys are the field names, and the values are the validation errors")),(0,o.kt)("p",null,"Gets the first validation error of each failed field in the form of an object."),(0,o.kt)("h3",{id:"throw"},(0,o.kt)("inlineCode",{parentName:"h3"},".throw()")),(0,o.kt)("p",null,"If this result object has errors, then this method will throw an exception\ndecorated with the same validation result API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  validationResult(req).throw();\n  // Oh look at ma' success! All validations passed!\n} catch (err) {\n  console.log(err.mapped()); // Oh noes!\n}\n")))}h.isMDXComponent=!0}}]);