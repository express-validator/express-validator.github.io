"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5719],{3476:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=r(4246),a=r(1670),s=r(3930),i=r(9798);const o={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},l=void 0,u={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers",description:"Although express-validator offers plenty of handy validators and sanitizers through its underlying",source:"@site/versioned_docs/version-6.12.0/feature-custom-validators-sanitizers.md",sourceDirName:".",slug:"/custom-validators-sanitizers",permalink:"/docs/6.12.0/custom-validators-sanitizers",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.12.0/feature-custom-validators-sanitizers.md",tags:[],version:"6.12.0",frontMatter:{id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},sidebar:"docs",previous:{title:"Sanitization",permalink:"/docs/6.12.0/sanitization"},next:{title:"Custom Error Messages",permalink:"/docs/6.12.0/custom-error-messages"}},c={},d=[{value:"Custom validator",id:"custom-validator",level:2},{value:"Example: checking if e-mail is in use",id:"example-checking-if-e-mail-is-in-use",level:3},{value:"Example: checking if password confirmation matches password",id:"example-checking-if-password-confirmation-matches-password",level:3},{value:"Custom sanitizers",id:"custom-sanitizers",level:2},{value:"Example: converting to MongoDB&#39;s ObjectID",id:"example-converting-to-mongodbs-objectid",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Although express-validator offers plenty of handy validators and sanitizers through its underlying\ndependency ",(0,t.jsx)(n.a,{href:"https://github.com/validatorjs/validator.js",children:"validator.js"}),", it doesn't always suffice when\nbuilding your application."]}),"\n",(0,t.jsx)(n.p,{children:"For these cases, you may consider writing a custom validator or a custom sanitizer."}),"\n",(0,t.jsx)(n.h2,{id:"custom-validator",children:"Custom validator"}),"\n",(0,t.jsxs)(n.p,{children:["A custom validator may be implemented by using the chain method ",(0,t.jsx)(n.a,{href:"/docs/6.12.0/validation-chain-api#customvalidator",children:(0,t.jsx)(n.code,{children:".custom()"})}),".\nIt takes a validator function."]}),"\n",(0,t.jsxs)(n.p,{children:["Custom validators may return Promises to indicate an async validation (which will be awaited upon),\nor ",(0,t.jsx)(n.code,{children:"throw"})," any value/reject a promise to ",(0,t.jsx)(n.a,{href:"/docs/6.12.0/custom-error-messages#custom-validator-level",children:"use a custom error message"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," if your custom validator returns a promise, it must reject to indicate that the field is invalid."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-checking-if-e-mail-is-in-use",children:"Example: checking if e-mail is in use"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const { body } = require('express-validator');\n\napp.post(\n  '/user',\n  body('email').custom(value => {\n    return User.findUserByEmail(value).then(user => {\n      if (user) {\n        return Promise.reject('E-mail already in use');\n      }\n    });\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n"})})}),(0,t.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { body, CustomValidator } from 'express-validator';\n// This allows you to reuse the validator\nconst isValidUser: CustomValidator = value => {\n  return User.findUserByEmail(value).then(user => {\n    if (user) {\n      return Promise.reject('E-mail already in use');\n    }\n  });\n};\n\napp.post('/user', body('email').custom(isValidUser), (req, res) => {\n  // Handle the request\n});\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"example-checking-if-password-confirmation-matches-password",children:"Example: checking if password confirmation matches password"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const { body } = require('express-validator');\n\napp.post(\n  '/user',\n  body('passwordConfirmation').custom((value, { req }) => {\n    if (value !== req.body.password) {\n      throw new Error('Password confirmation does not match password');\n    }\n\n    // Indicates the success of this synchronous custom validator\n    return true;\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"custom-sanitizers",children:"Custom sanitizers"}),"\n",(0,t.jsxs)(n.p,{children:["Custom sanitizers can be implemented by using the method ",(0,t.jsx)(n.code,{children:".customSanitizer()"}),", no matter if\nthe ",(0,t.jsx)(n.a,{href:"/docs/6.12.0/validation-chain-api",children:"validation chain one"})," or\nthe ",(0,t.jsx)(n.a,{href:"/docs/6.12.0/sanitization-chain-api#customsanitizersanitizer",children:"sanitization chain one"}),".",(0,t.jsx)(n.br,{}),"\n","Just like with the validators, you specify the sanitizer function, which ",(0,t.jsx)(n.em,{children:"must"})," be synchronous at the\nmoment."]}),"\n",(0,t.jsx)(n.h3,{id:"example-converting-to-mongodbs-objectid",children:"Example: converting to MongoDB's ObjectID"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const { param } = require('express-validator');\n\napp.post(\n  '/object/:id',\n  param('id').customSanitizer(value => {\n    return ObjectId(value);\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n"})})}),(0,t.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { param } from 'express-validator';\n// This allows you to reuse the validator\nconst toObjectId: CustomSanitizer = value => {\n  return ObjectId(value);\n};\n\napp.post('/object/:id', param('id').customSanitizer(toObjectId), (req, res) => {\n  // Handle the request\n});\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},9798:(e,n,r)=>{r.d(n,{Z:()=>i});r(7378);var t=r(624);const a={tabItem:"tabItem_wHwb"};var s=r(4246);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},3930:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(7378),a=r(624),s=r(3457),i=r(3620),o=r(9834),l=r(654),u=r(784),c=r(1819);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function m(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function v(e){var n,r,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,v=m(e),f=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:v})})),b=f[0],g=f[1],x=p({queryString:u,groupId:d}),j=x[0],y=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),a=r[0],s=r[1],[a,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],z=w[1],q=function(){var e=null!=j?j:k;return h({value:e,tabValues:v})?e:null}();return(0,o.Z)((function(){q&&g(q)}),[q]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),z(e)}),[y,z,v]),tabValues:v}}var f=r(6457);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=r(4246);function x(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(u(n),i(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;r=null!=(s=l[i])?s:l[l.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},1670:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(7378);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);