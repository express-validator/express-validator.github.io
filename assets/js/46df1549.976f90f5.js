"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3212],{2097:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(4246),a=n(1670),s=n(3930),o=n(9798);const i={id:"validation-result-api",title:"validationResult()"},l=void 0,c={id:"validation-result-api",title:"validationResult()",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.12.0/api-validation-result.md",sourceDirName:".",slug:"/validation-result-api",permalink:"/docs/6.12.0/validation-result-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.12.0/api-validation-result.md",tags:[],version:"6.12.0",frontMatter:{id:"validation-result-api",title:"validationResult()"},sidebar:"api",previous:{title:"matchedData()",permalink:"/docs/6.12.0/matched-data-api"}},u={},d=[{value:"<code>validationResult(req)</code>",id:"validationresultreq",level:2},{value:"<code>.withDefaults(options)</code>",id:"withdefaultsoptions",level:3},{value:"<code>Result</code>",id:"result",level:2},{value:"<code>.isEmpty()</code>",id:"isempty",level:3},{value:"<code>.formatWith(formatter)</code>",id:"formatwithformatter",level:3},{value:"<code>.array([options])</code>",id:"arrayoptions",level:3},{value:"<code>.mapped()</code>",id:"mapped",level:3},{value:"<code>.throw()</code>",id:"throw",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["These methods are all available via ",(0,t.jsx)(r.code,{children:"require('express-validator')"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"validationresultreq",children:(0,t.jsx)(r.code,{children:"validationResult(req)"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"req"}),": the express request object"]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Returns:"})," a ",(0,t.jsx)(r.a,{href:"#result",children:(0,t.jsx)(r.code,{children:"Result"})})," object"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Extracts the validation errors from a request and makes them available in a ",(0,t.jsx)(r.a,{href:"#result",children:(0,t.jsx)(r.code,{children:"Result"})})," object."]}),"\n",(0,t.jsxs)(r.p,{children:["Each error returned by ",(0,t.jsx)(r.a,{href:"#array-options",children:(0,t.jsx)(r.code,{children:".array()"})})," and ",(0,t.jsx)(r.a,{href:"#mapped",children:(0,t.jsx)(r.code,{children:".mapped()"})})," methods\nhas the following format ",(0,t.jsx)(r.em,{children:"by default"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'{\n  "msg": "The error message",\n  "param": "param.name.with.index[0]",\n  "value": "param value",\n  // Location of the param that generated this error.\n  // It\'s either body, query, params, cookies or headers.\n  "location": "body",\n\n  // nestedErrors only exist when using the oneOf function\n  "nestedErrors": [{ ... }]\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"withdefaultsoptions",children:(0,t.jsx)(r.code,{children:".withDefaults(options)"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"options"})," ",(0,t.jsx)(r.em,{children:"(optional)"}),": an object of options. Defaults to ",(0,t.jsx)(r.code,{children:"{ formatter: error => error }"})]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Returns:"})," a new ",(0,t.jsx)(r.a,{href:"#validationresultreq",children:(0,t.jsx)(r.code,{children:"validationResult"})})," function, using the provided options"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Creates a new ",(0,t.jsx)(r.code,{children:"validationResult()"}),"-like function with default options passed to the generated\n",(0,t.jsx)(r.a,{href:"#result",children:(0,t.jsx)(r.code,{children:"Result"})})," instance."]}),"\n",(0,t.jsx)(r.p,{children:"Below is an example which sets a default error formatter:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const { validationResult } = require('express-validator');\n\nconst myValidationResult = validationResult.withDefaults({\n  formatter: error => {\n    return {\n      myLocation: error.location,\n    };\n  },\n});\n\napp.post('/create-user', yourValidationChains, (req, res) => {\n  // errors will be like [{ myLocation: 'body' }, { myLocation: 'query' }], etc\n  const errors = myValidationResult(req).array();\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"result",children:(0,t.jsx)(r.code,{children:"Result"})}),"\n",(0,t.jsx)(r.p,{children:"An object that holds the current state of validation errors in a request and allows access to it in\na variety of ways."}),"\n",(0,t.jsx)(r.h3,{id:"isempty",children:(0,t.jsx)(r.code,{children:".isEmpty()"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Returns:"})," a boolean indicating whether this result object contains no errors at all."]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"app.post('/create-user', yourValidationChains, (req, res) => {\n  const result = validationResult(req);\n  const hasErrors = !result.isEmpty();\n  // do something if hasErrors is true\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"formatwithformatter",children:(0,t.jsx)(r.code,{children:".formatWith(formatter)"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"formatter(error)"}),": the function to use to format when returning errors.",(0,t.jsx)(r.br,{}),"\n","The ",(0,t.jsx)(r.code,{children:"error"})," argument is an object in the format of ",(0,t.jsx)(r.code,{children:"{ location, msg, param, value, nestedErrors }"}),", as described above."]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Returns:"})," a new ",(0,t.jsx)(r.code,{children:"Result"})," instance"]}),"\n"]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const { validationResult } = require('express-validator');\napp.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n"})})}),(0,t.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"import { validationResult, ValidationError } from 'express-validator';\napp.post('/create-user', yourValidationChains, (req, res, next) => {\n  const errorFormatter = ({ location, msg, param, value, nestedErrors }: ValidationError) => {\n    // Build your resulting errors however you want! String, object, whatever - it works!\n    return `${location}[${param}]: ${msg}`;\n  };\n  const result = validationResult(req).formatWith(errorFormatter);\n  if (!result.isEmpty()) {\n    // Response will contain something like\n    // { errors: [ \"body[password]: must be at least 10 chars long\" ] }\n    return res.json({ errors: result.array() });\n  }\n\n  // Handle your request as if no errors happened\n});\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"arrayoptions",children:(0,t.jsx)(r.code,{children:".array([options])"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"options"})," ",(0,t.jsx)(r.em,{children:"(optional)"}),": an object of options. Defaults to ",(0,t.jsx)(r.code,{children:"{ onlyFirstError: false }"})]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Returns:"})," an array of validation errors."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Gets all validation errors contained in this result object."}),"\n",(0,t.jsxs)(r.p,{children:["If the option ",(0,t.jsx)(r.code,{children:"onlyFirstError"})," is set to ",(0,t.jsx)(r.code,{children:"true"}),", then only the first\nerror for each field will be included."]}),"\n",(0,t.jsx)(r.h3,{id:"mapped",children:(0,t.jsx)(r.code,{children:".mapped()"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Returns:"})," an object where the keys are the field names, and the values are the validation errors"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Gets the first validation error of each failed field in the form of an object."}),"\n",(0,t.jsx)(r.h3,{id:"throw",children:(0,t.jsx)(r.code,{children:".throw()"})}),"\n",(0,t.jsx)(r.p,{children:"If this result object has errors, then this method will throw an exception\ndecorated with the same validation result API."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"try {\n  validationResult(req).throw();\n  // Oh look at ma' success! All validations passed!\n} catch (err) {\n  console.log(err.mapped()); // Oh noes!\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9798:(e,r,n)=>{n.d(r,{Z:()=>o});n(7378);var t=n(624);const a={tabItem:"tabItem_wHwb"};var s=n(4246);function o(e){var r=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:n,children:r})}},3930:(e,r,n)=>{n.d(r,{Z:()=>w});var t=n(7378),a=n(624),s=n(3457),o=n(3620),i=n(9834),l=n(654),c=n(784),u=n(1819);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,s=(0,o.k6)(),i=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,t.useCallback)((function(e){if(i){var r=new URLSearchParams(s.location.search);r.set(i,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}}),[i,s])]}function v(e){var r,n,a,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,v=h(e),f=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:v})})),j=f[0],x=f[1],b=m({queryString:c,groupId:d}),y=b[0],g=b[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(r),a=n[0],s=n[1],[a,(0,t.useCallback)((function(e){r&&s.set(e)}),[r,s])]),q=w[0],k=w[1],R=function(){var e=null!=y?y:q;return p({value:e,tabValues:v})?e:null}();return(0,i.Z)((function(){R&&x(R)}),[R]),{selectedValue:j,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);x(e),g(e),k(e)}),[g,k,v]),tabValues:v}}var f=n(6457);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=n(4246);function b(e){var r=e.className,n=e.block,t=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(c(r),o(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;n=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;n=null!=(s=l[o])?s:l[l.length-1]}null==(r=n)||r.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((function(e){var r=e.value,n=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function y(e){var r=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var o=s.find((function(e){return e.props.value===a}));return o?(0,t.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function g(e){var r=v(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(b,Object.assign({},e,r)),(0,x.jsx)(y,Object.assign({},e,r))]})}function w(e){var r=(0,f.Z)();return(0,x.jsx)(g,Object.assign({},e,{children:d(e.children)}),String(r))}},1670:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(7378);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);