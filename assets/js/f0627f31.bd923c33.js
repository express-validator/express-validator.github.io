"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2625],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(5773),a=r(808),o=(r(7378),r(5318)),i=["components"],l={id:"validation-result-api",title:"Validation Result API"},s=void 0,p={unversionedId:"validation-result-api",id:"version-5.2.0/validation-result-api",title:"Validation Result API",description:"This is an unified API for dealing with errors, both in legacy and check APIs.",source:"@site/versioned_docs/version-5.2.0/api-validation-result.md",sourceDirName:".",slug:"/validation-result-api",permalink:"/docs/5.2.0/validation-result-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-5.2.0/api-validation-result.md",tags:[],version:"5.2.0",frontMatter:{id:"validation-result-api",title:"Validation Result API"},sidebar:"api",previous:{title:"Validation Chain API",permalink:"/docs/5.2.0/validation-chain-api"},next:{title:"Legacy API",permalink:"/docs/5.2.0/legacy-api"}},u={},d=[{value:"<code>.isEmpty()</code>",id:"isempty",level:2},{value:"<code>.formatWith(formatter)</code>",id:"formatwithformatter",level:2},{value:"<code>.array([options])</code>",id:"arrayoptions",level:2},{value:"<code>.mapped()</code>",id:"mapped",level:2},{value:"<code>.throw()</code>",id:"throw",level:2},{value:"<code>.withDefaults(options)</code>",id:"withdefaultsoptions",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an unified API for dealing with errors, both in legacy and check APIs."),(0,o.kt)("p",null,"Each error returned by ",(0,o.kt)("inlineCode",{parentName:"p"},".array()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".mapped()")," methods have the following format by default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "msg": "The error message",\n  "param": "param.name.with.index[0]",\n  "value": "param value",\n  // Location of the param that generated this error.\n  // It\'s either body, query, params, cookies or headers.\n  "location": "body",\n\n  // nestedErrors only exist when using the oneOf function\n  "nestedErrors": [{ ... }]\n}\n')),(0,o.kt)("h2",{id:"isempty"},(0,o.kt)("inlineCode",{parentName:"h2"},".isEmpty()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a boolean indicating whether this result object contains no errors at all.")),(0,o.kt)("h2",{id:"formatwithformatter"},(0,o.kt)("inlineCode",{parentName:"h2"},".formatWith(formatter)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatter(error)"),": the function to use to format when returning errors.",(0,o.kt)("br",{parentName:"li"}),"The ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," argument is an object in the format of ",(0,o.kt)("inlineCode",{parentName:"li"},"{ location, msg, param, value, nestedErrors }"),", as described above.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," this validation result instance")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n")),(0,o.kt)("h2",{id:"arrayoptions"},(0,o.kt)("inlineCode",{parentName:"h2"},".array([options])")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ onlyFirstError: false }"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an array of validation errors.")))),(0,o.kt)("p",null,"Gets all validation errors contained in this result object."),(0,o.kt)("p",null,"If the option ",(0,o.kt)("inlineCode",{parentName:"p"},"onlyFirstError")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then only the first\nerror for each field will be included."),(0,o.kt)("h2",{id:"mapped"},(0,o.kt)("inlineCode",{parentName:"h2"},".mapped()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an object where the keys are the field names, and the values are the validation errors")),(0,o.kt)("p",null,"Gets the first validation error of each failed field in the form of an object."),(0,o.kt)("h2",{id:"throw"},(0,o.kt)("inlineCode",{parentName:"h2"},".throw()")),(0,o.kt)("p",null,"If this result object has errors, then this method will throw an exception\ndecorated with the same validation result API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  validationResult(req).throw();\n  // Oh look at ma' success! All validations passed!\n} catch (err) {\n  console.log(err.mapped()); // Oh noes!\n}\n")),(0,o.kt)("h2",{id:"withdefaultsoptions"},(0,o.kt)("inlineCode",{parentName:"h2"},".withDefaults(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ formatter: error => error }"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a new ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.2.0/check-api#validationresultreq"},(0,o.kt)("inlineCode",{parentName:"a"},"validationResult"))," function is returned, using the provided options")))),(0,o.kt)("p",null,"This is useful when you have a consistent set of options you would like to use for all validation results throughout your application."),(0,o.kt)("p",null,"Below is an example which sets a default error formatter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const { validationResult } = require('express-validator/check');\n\nconst result = validationResult.withDefaults({\n    formatter: (error) => {\n        return {\n            myLocation: error.location,\n        };\n    }\n});\n\nmodule.exports = result;\n")))}m.isMDXComponent=!0}}]);