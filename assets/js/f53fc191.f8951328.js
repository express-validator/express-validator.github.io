"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3065],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7378),n=r(8944);const o="tabItem_wHwb";function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},3337:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(5773),n=r(7378),o=r(8944),l=r(6457),i=r(784),s=r(9947),u=r(3457);const p="tabList_J5MA",d="tabItem_l0OV";function c(e){var t,r,l=e.lazy,c=e.block,m=e.defaultValue,h=e.values,v=e.groupId,f=e.className,k=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:k[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),w=g.tabGroupChoices,C=g.setTabGroupChoices,E=(0,n.useState)(N),q=E[0],j=E[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var R=w[v];null!=R&&R!==q&&b.some((function(e){return e.value===R}))&&j(R)}var T=function(e){var t=e.currentTarget,r=x.indexOf(t),a=b[r].value;a!==q&&(O(t),j(a),null!=v&&C(v,String(a)))},D=function(e){var t,r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":var a,n=x.indexOf(e.currentTarget)+1;r=null!=(a=x[n])?a:x[0];break;case"ArrowLeft":var o,l=x.indexOf(e.currentTarget)-1;r=null!=(o=x[l])?o:x[x.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onClick:T},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":q===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(k.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function m(e){var t=(0,l.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},4177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=r(5773),n=r(808),o=(r(7378),r(5318)),l=r(3337),i=r(9798),s=["components"],u={id:"validation-result-api",title:"validationResult()"},p=void 0,d={unversionedId:"validation-result-api",id:"version-6.14.0/validation-result-api",title:"validationResult()",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.14.0/api-validation-result.mdx",sourceDirName:".",slug:"/validation-result-api",permalink:"/docs/validation-result-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.14.0/api-validation-result.mdx",tags:[],version:"6.14.0",frontMatter:{id:"validation-result-api",title:"validationResult()"},sidebar:"version-6.14.0/docs",previous:{title:"matchedData()",permalink:"/docs/matched-data-api"},next:{title:"FAQ",permalink:"/docs/faq"}},c={},m=[{value:"<code>validationResult(req)</code>",id:"validationresultreq",level:2},{value:"<code>.withDefaults(options)</code>",id:"withdefaultsoptions",level:3},{value:"<code>Result</code>",id:"result",level:2},{value:"<code>.isEmpty()</code>",id:"isempty",level:3},{value:"<code>.formatWith(formatter)</code>",id:"formatwithformatter",level:3},{value:"<code>.array([options])</code>",id:"arrayoptions",level:3},{value:"<code>.mapped()</code>",id:"mapped",level:3},{value:"<code>.throw()</code>",id:"throw",level:3}],h={toc:m};function v(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These methods are all available via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('express-validator')"),"."),(0,o.kt)("h2",{id:"validationresultreq"},(0,o.kt)("inlineCode",{parentName:"h2"},"validationResult(req)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"req"),": the express request object")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a ",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," object")),(0,o.kt)("p",null,"Extracts the validation errors from a request and makes them available in a ",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," object."),(0,o.kt)("p",null,"Each error returned by ",(0,o.kt)("a",{parentName:"p",href:"#array-options"},(0,o.kt)("inlineCode",{parentName:"a"},".array()"))," and ",(0,o.kt)("a",{parentName:"p",href:"#mapped"},(0,o.kt)("inlineCode",{parentName:"a"},".mapped()"))," methods\nhas the following format ",(0,o.kt)("em",{parentName:"p"},"by default"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "msg": "The error message",\n  "param": "param.name.with.index[0]",\n  "value": "param value",\n  // Location of the param that generated this error.\n  // It\'s either body, query, params, cookies or headers.\n  "location": "body",\n\n  // nestedErrors only exist when using the oneOf function\n  "nestedErrors": [{ ... }]\n}\n')),(0,o.kt)("h3",{id:"withdefaultsoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".withDefaults(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ formatter: error => error }"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a new ",(0,o.kt)("a",{parentName:"p",href:"#validationresultreq"},(0,o.kt)("inlineCode",{parentName:"a"},"validationResult"))," function, using the provided options")),(0,o.kt)("p",null,"Creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"validationResult()"),"-like function with default options passed to the generated\n",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," instance."),(0,o.kt)("p",null,"Below is an example which sets a default error formatter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { validationResult } = require('express-validator');\n\nconst myValidationResult = validationResult.withDefaults({\n  formatter: error => {\n    return {\n      myLocation: error.location,\n    };\n  },\n});\n\napp.post('/create-user', yourValidationChains, (req, res) => {\n  // errors will be like [{ myLocation: 'body' }, { myLocation: 'query' }], etc\n  const errors = myValidationResult(req).array();\n});\n")),(0,o.kt)("h2",{id:"result"},(0,o.kt)("inlineCode",{parentName:"h2"},"Result")),(0,o.kt)("p",null,"An object that holds the current state of validation errors in a request and allows access to it in\na variety of ways."),(0,o.kt)("h3",{id:"isempty"},(0,o.kt)("inlineCode",{parentName:"h3"},".isEmpty()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a boolean indicating whether this result object contains no errors at all.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', yourValidationChains, (req, res) => {\n  const result = validationResult(req);\n  const hasErrors = !result.isEmpty();\n  // do something if hasErrors is true\n});\n")),(0,o.kt)("h3",{id:"formatwithformatter"},(0,o.kt)("inlineCode",{parentName:"h3"},".formatWith(formatter)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatter(error)"),": the function to use to format when returning errors.",(0,o.kt)("br",{parentName:"li"}),"The ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," argument is an object in the format of ",(0,o.kt)("inlineCode",{parentName:"li"},"{ location, msg, param, value, nestedErrors }"),", as described above.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," instance")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { validationResult } = require('express-validator');\napp.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n"))),(0,o.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { value validationResult, value ValidationError } from 'express-validator';\napp.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }: ValidationError) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n")))),(0,o.kt)("h3",{id:"arrayoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".array([options])")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ onlyFirstError: false }"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an array of validation errors.")),(0,o.kt)("p",null,"Gets all validation errors contained in this result object."),(0,o.kt)("p",null,"If the option ",(0,o.kt)("inlineCode",{parentName:"p"},"onlyFirstError")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then only the first\nerror for each field will be included."),(0,o.kt)("h3",{id:"mapped"},(0,o.kt)("inlineCode",{parentName:"h3"},".mapped()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an object where the keys are the field names, and the values are the validation errors")),(0,o.kt)("p",null,"Gets the first validation error of each failed field in the form of an object."),(0,o.kt)("h3",{id:"throw"},(0,o.kt)("inlineCode",{parentName:"h3"},".throw()")),(0,o.kt)("p",null,"If this result object has errors, then this method will throw an exception\ndecorated with the same validation result API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  validationResult(req).throw();\n  // Oh look at ma' success! All validations passed!\n} catch (err) {\n  console.log(err.mapped()); // Oh noes!\n}\n")))}v.isMDXComponent=!0}}]);