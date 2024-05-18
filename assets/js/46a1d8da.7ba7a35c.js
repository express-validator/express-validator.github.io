"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6749],{6279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=t(4246),r=t(1670),s=t(3930),i=t(9798);const o={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},l=void 0,u={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers",description:"Although express-validator offers plenty of handy validators and sanitizers through its underlying",source:"@site/versioned_docs/version-6.15.0/feature-custom-validators-sanitizers.mdx",sourceDirName:".",slug:"/custom-validators-sanitizers",permalink:"/docs/6.15.0/custom-validators-sanitizers",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.15.0/feature-custom-validators-sanitizers.mdx",tags:[],version:"6.15.0",frontMatter:{id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},sidebar:"docs",previous:{title:"Sanitization",permalink:"/docs/6.15.0/sanitization"},next:{title:"Custom Error Messages",permalink:"/docs/6.15.0/custom-error-messages"}},c={},d=[{value:"Custom validator",id:"custom-validator",level:2},{value:"Example: checking if e-mail is in use",id:"example-checking-if-e-mail-is-in-use",level:3},{value:"Example: checking if password confirmation matches password",id:"example-checking-if-password-confirmation-matches-password",level:3},{value:"Custom sanitizers",id:"custom-sanitizers",level:2},{value:"Example: converting to MongoDB&#39;s ObjectID",id:"example-converting-to-mongodbs-objectid",level:3}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Although express-validator offers plenty of handy validators and sanitizers through its underlying\ndependency ",(0,a.jsx)(n.a,{href:"https://github.com/validatorjs/validator.js",children:"validator.js"}),", it doesn't always suffice when\nbuilding your application."]}),"\n",(0,a.jsx)(n.p,{children:"For these cases, you may consider writing a custom validator or a custom sanitizer."}),"\n",(0,a.jsx)(n.h2,{id:"custom-validator",children:"Custom validator"}),"\n",(0,a.jsxs)(n.p,{children:["A custom validator may be implemented by using the chain method ",(0,a.jsx)(n.a,{href:"/docs/6.15.0/validation-chain-api#customvalidator",children:(0,a.jsx)(n.code,{children:".custom()"})}),".\nIt takes a validator function."]}),"\n",(0,a.jsxs)(n.p,{children:["Custom validators may return Promises to indicate an async validation (which will be awaited upon),\nor ",(0,a.jsx)(n.code,{children:"throw"})," any value/reject a promise to ",(0,a.jsx)(n.a,{href:"/docs/6.15.0/custom-error-messages#custom-validator-level",children:"use a custom error message"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"If your custom validator returns a promise, it must reject to indicate that the field is invalid."})}),"\n",(0,a.jsx)(n.h3,{id:"example-checking-if-e-mail-is-in-use",children:"Example: checking if e-mail is in use"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { body } = require('express-validator');\n\napp.post(\n  '/user',\n  body('email').custom(value => {\n    return User.findUserByEmail(value).then(user => {\n      if (user) {\n        return Promise.reject('E-mail already in use');\n      }\n    });\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { body, CustomValidator } from 'express-validator';\n// This allows you to reuse the validator\nconst isValidUser: CustomValidator = value => {\n  return User.findUserByEmail(value).then(user => {\n    if (user) {\n      return Promise.reject('E-mail already in use');\n    }\n  });\n};\n\napp.post('/user', body('email').custom(isValidUser), (req, res) => {\n  // Handle the request\n});\n"})})})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," In the example above, validation might fail even due to issues with fetching User information. The implications of accessing the data layer during validation should be carefully considered."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-checking-if-password-confirmation-matches-password",children:"Example: checking if password confirmation matches password"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { body } = require('express-validator');\n\napp.post(\n  '/user',\n  body('password').isLength({ min: 5 }),\n  body('passwordConfirmation').custom((value, { req }) => {\n    if (value !== req.body.password) {\n      throw new Error('Password confirmation does not match password');\n    }\n\n    // Indicates the success of this synchronous custom validator\n    return true;\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"custom-sanitizers",children:"Custom sanitizers"}),"\n",(0,a.jsxs)(n.p,{children:["Custom sanitizers can be implemented by using the method ",(0,a.jsx)(n.code,{children:".customSanitizer()"}),", no matter if\nthe ",(0,a.jsx)(n.a,{href:"/docs/6.15.0/validation-chain-api",children:"validation chain one"})," or\nthe ",(0,a.jsx)(n.a,{href:"/docs/6.15.0/sanitization-chain-api#customsanitizersanitizer",children:"sanitization chain one"}),".\nJust like with the validators, you specify the sanitizer function, which ",(0,a.jsx)(n.em,{children:"must"})," be synchronous at the\nmoment."]}),"\n",(0,a.jsx)(n.h3,{id:"example-converting-to-mongodbs-objectid",children:"Example: converting to MongoDB's ObjectID"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { param } = require('express-validator');\n\napp.post(\n  '/object/:id',\n  param('id').customSanitizer(value => {\n    return ObjectId(value);\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { value param } from 'express-validator';\n// This allows you to reuse the validator\nconst toObjectId: CustomSanitizer = value => {\n  return ObjectId(value);\n};\n\napp.post('/object/:id', param('id').customSanitizer(toObjectId), (req, res) => {\n  // Handle the request\n});\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9798:(e,n,t)=>{t.d(n,{Z:()=>i});t(7378);var a=t(624);const r={tabItem:"tabItem_wHwb"};var s=t(4246);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},3930:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7378),r=t(624),s=t(3457),i=t(3620),o=t(9834),l=t(654),u=t(784),c=t(1819);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function v(e){var n,t,r,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,v=m(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:v})})),b=f[0],g=f[1],x=p({queryString:u,groupId:d}),j=x[0],y=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],z=w[1],q=function(){var e=null!=j?j:k;return h({value:e,tabValues:v})?e:null}();return(0,o.Z)((function(){q&&g(q)}),[q]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),z(e)}),[y,z,v]),tabValues:v}}var f=t(6457);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=t(4246);function x(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(u(n),i(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},1670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(7378);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);