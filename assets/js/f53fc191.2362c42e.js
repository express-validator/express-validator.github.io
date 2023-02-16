"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3065],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7378),n=r(8944);const o={tabItem:"tabItem_wHwb"};function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},3930:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(5773),n=r(7378),o=r(8944),l=r(3457),i=r(3620),s=r(654),u=r(784),p=r(1819);function c(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,r,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,c=d(e),v=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:c})})),h=v[0],k=v[1],b=f({queryString:s,groupId:u}),y=b[0],g=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,p.Nk)(t),a=r[0],o=r[1],[a,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],q=w[1],E=function(){var e=null!=y?y:N;return m({value:e,tabValues:c})?e:null}();return(0,n.useLayoutEffect)((function(){E&&k(E)}),[E]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);k(e),g(e),q(e)}),[g,q,c]),tabValues:c}}var h=r(6457);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function b(e){var t=e.className,r=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==i&&(c(t),s(a))},m=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,n=p.indexOf(e.currentTarget)+1;r=null!=(a=p[n])?a:p[0];break;case"ArrowLeft":var o,l=p.indexOf(e.currentTarget)-1;r=null!=(o=p[l])?o:p[p.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,a=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var o=r.find((function(e){return e.props.value===a}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function g(e){var t=v(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,h.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},4177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=r(5773),n=r(808),o=(r(7378),r(5318)),l=r(3930),i=r(9798),s=["components"],u={id:"validation-result-api",title:"validationResult()"},p=void 0,c={unversionedId:"validation-result-api",id:"version-6.14.0/validation-result-api",title:"validationResult()",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.14.0/api-validation-result.mdx",sourceDirName:".",slug:"/validation-result-api",permalink:"/docs/6.14.0/validation-result-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.14.0/api-validation-result.mdx",tags:[],version:"6.14.0",frontMatter:{id:"validation-result-api",title:"validationResult()"},sidebar:"version-6.14.0/docs",previous:{title:"matchedData()",permalink:"/docs/6.14.0/matched-data-api"},next:{title:"FAQ",permalink:"/docs/6.14.0/faq"}},d={},m=[{value:"<code>validationResult(req)</code>",id:"validationresultreq",level:2},{value:"<code>.withDefaults(options)</code>",id:"withdefaultsoptions",level:3},{value:"<code>Result</code>",id:"result",level:2},{value:"<code>.isEmpty()</code>",id:"isempty",level:3},{value:"<code>.formatWith(formatter)</code>",id:"formatwithformatter",level:3},{value:"<code>.array([options])</code>",id:"arrayoptions",level:3},{value:"<code>.mapped()</code>",id:"mapped",level:3},{value:"<code>.throw()</code>",id:"throw",level:3}],f={toc:m},v="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)(v,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These methods are all available via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('express-validator')"),"."),(0,o.kt)("h2",{id:"validationresultreq"},(0,o.kt)("inlineCode",{parentName:"h2"},"validationResult(req)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"req"),": the express request object")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a ",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," object")),(0,o.kt)("p",null,"Extracts the validation errors from a request and makes them available in a ",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," object."),(0,o.kt)("p",null,"Each error returned by ",(0,o.kt)("a",{parentName:"p",href:"#array-options"},(0,o.kt)("inlineCode",{parentName:"a"},".array()"))," and ",(0,o.kt)("a",{parentName:"p",href:"#mapped"},(0,o.kt)("inlineCode",{parentName:"a"},".mapped()"))," methods\nhas the following format ",(0,o.kt)("em",{parentName:"p"},"by default"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "msg": "The error message",\n  "param": "param.name.with.index[0]",\n  "value": "param value",\n  // Location of the param that generated this error.\n  // It\'s either body, query, params, cookies or headers.\n  "location": "body",\n\n  // nestedErrors only exist when using the oneOf function\n  "nestedErrors": [{ ... }]\n}\n')),(0,o.kt)("h3",{id:"withdefaultsoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".withDefaults(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ formatter: error => error }"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a new ",(0,o.kt)("a",{parentName:"p",href:"#validationresultreq"},(0,o.kt)("inlineCode",{parentName:"a"},"validationResult"))," function, using the provided options")),(0,o.kt)("p",null,"Creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"validationResult()"),"-like function with default options passed to the generated\n",(0,o.kt)("a",{parentName:"p",href:"#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," instance."),(0,o.kt)("p",null,"Below is an example which sets a default error formatter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { validationResult } = require('express-validator');\n\nconst myValidationResult = validationResult.withDefaults({\n  formatter: error => {\n    return {\n      myLocation: error.location,\n    };\n  },\n});\n\napp.post('/create-user', yourValidationChains, (req, res) => {\n  // errors will be like [{ myLocation: 'body' }, { myLocation: 'query' }], etc\n  const errors = myValidationResult(req).array();\n});\n")),(0,o.kt)("h2",{id:"result"},(0,o.kt)("inlineCode",{parentName:"h2"},"Result")),(0,o.kt)("p",null,"An object that holds the current state of validation errors in a request and allows access to it in\na variety of ways."),(0,o.kt)("h3",{id:"isempty"},(0,o.kt)("inlineCode",{parentName:"h3"},".isEmpty()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a boolean indicating whether this result object contains no errors at all.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', yourValidationChains, (req, res) => {\n  const result = validationResult(req);\n  const hasErrors = !result.isEmpty();\n  // do something if hasErrors is true\n});\n")),(0,o.kt)("h3",{id:"formatwithformatter"},(0,o.kt)("inlineCode",{parentName:"h3"},".formatWith(formatter)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatter(error)"),": the function to use to format when returning errors.",(0,o.kt)("br",{parentName:"li"}),"The ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," argument is an object in the format of ",(0,o.kt)("inlineCode",{parentName:"li"},"{ location, msg, param, value, nestedErrors }"),", as described above.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," instance")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { validationResult } = require('express-validator');\napp.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n"))),(0,o.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { value validationResult, value ValidationError } from 'express-validator';\napp.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }: ValidationError) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n")))),(0,o.kt)("h3",{id:"arrayoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".array([options])")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ onlyFirstError: false }"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an array of validation errors.")),(0,o.kt)("p",null,"Gets all validation errors contained in this result object."),(0,o.kt)("p",null,"If the option ",(0,o.kt)("inlineCode",{parentName:"p"},"onlyFirstError")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then only the first\nerror for each field will be included."),(0,o.kt)("h3",{id:"mapped"},(0,o.kt)("inlineCode",{parentName:"h3"},".mapped()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," an object where the keys are the field names, and the values are the validation errors")),(0,o.kt)("p",null,"Gets the first validation error of each failed field in the form of an object."),(0,o.kt)("h3",{id:"throw"},(0,o.kt)("inlineCode",{parentName:"h3"},".throw()")),(0,o.kt)("p",null,"If this result object has errors, then this method will throw an exception\ndecorated with the same validation result API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  validationResult(req).throw();\n  // Oh look at ma' success! All validations passed!\n} catch (err) {\n  console.log(err.mapped()); // Oh noes!\n}\n")))}h.isMDXComponent=!0}}]);