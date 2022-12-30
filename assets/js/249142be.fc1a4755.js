"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6857],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(v,o(o({ref:t},u),{},{components:r})):a.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(5773),n=r(808),i=(r(7378),r(5318)),o=["components"],s={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},l=void 0,c={unversionedId:"custom-validators-sanitizers",id:"version-6.4.0/custom-validators-sanitizers",title:"Custom validators/sanitizers",description:"Although express-validator offers plenty of handy validators and sanitizers through its underlying",source:"@site/versioned_docs/version-6.4.0/feature-custom-validators-sanitizers.md",sourceDirName:".",slug:"/custom-validators-sanitizers",permalink:"/docs/6.4.0/custom-validators-sanitizers",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.4.0/feature-custom-validators-sanitizers.md",tags:[],version:"6.4.0",frontMatter:{id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},sidebar:"version-6.4.0/docs",previous:{title:"Sanitization",permalink:"/docs/6.4.0/sanitization"},next:{title:"Custom Error Messages",permalink:"/docs/6.4.0/custom-error-messages"}},u={},p=[{value:"Custom validator",id:"custom-validator",level:2},{value:"Example: checking if e-mail is in use",id:"example-checking-if-e-mail-is-in-use",level:3},{value:"Example: checking if password confirmation matches password",id:"example-checking-if-password-confirmation-matches-password",level:3},{value:"Custom sanitizers",id:"custom-sanitizers",level:2},{value:"Example: converting to MongoDB&#39;s ObjectID",id:"example-converting-to-mongodbs-objectid",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Although express-validator offers plenty of handy validators and sanitizers through its underlying\ndependency ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chriso/validator.js"},"validator.js"),", it doesn't always suffice when\nbuilding your application."),(0,i.kt)("p",null,"For these cases, you may consider writing a custom validator or a custom sanitizer."),(0,i.kt)("h2",{id:"custom-validator"},"Custom validator"),(0,i.kt)("p",null,"A custom validator may be implemented by using the chain method ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.4.0/validation-chain-api#customvalidator"},(0,i.kt)("inlineCode",{parentName:"a"},".custom()")),".\nIt takes a validator function."),(0,i.kt)("p",null,"Custom validators may return Promises to indicate an async validation (which will be awaited upon),\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"throw")," any value/reject a promise to ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.4.0/custom-error-messages#custom-validator-level"},"use a custom error message"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," if your custom validator returns a promise, it must reject to indicate that the field is invalid.")),(0,i.kt)("h3",{id:"example-checking-if-e-mail-is-in-use"},"Example: checking if e-mail is in use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { body } = require('express-validator');\n\napp.post('/user', body('email').custom(value => {\n  return User.findUserByEmail(value).then(user => {\n    if (user) {\n      return Promise.reject('E-mail already in use');\n    }\n  });\n}), (req, res) => {\n  // Handle the request\n});\n")),(0,i.kt)("h3",{id:"example-checking-if-password-confirmation-matches-password"},"Example: checking if password confirmation matches password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { body } = require('express-validator');\n\napp.post('/user', body('passwordConfirmation').custom((value, { req }) => {\n  if (value !== req.body.password) {\n    throw new Error('Password confirmation does not match password');\n  }\n  \n  // Indicates the success of this synchronous custom validator\n  return true;\n}), (req, res) => {\n  // Handle the request\n});\n")),(0,i.kt)("h2",{id:"custom-sanitizers"},"Custom sanitizers"),(0,i.kt)("p",null,"Custom sanitizers can be implemented by using the method ",(0,i.kt)("inlineCode",{parentName:"p"},".customSanitizer()"),", no matter if\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.4.0/validation-chain-api#customsanitizersanitizer"},"validation chain one")," or\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.4.0/sanitization-chain-api#customsanitizersanitizer"},"sanitization chain one"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Just like with the validators, you specify the sanitizer function, which ",(0,i.kt)("em",{parentName:"p"},"must")," be synchronous at the\nmoment."),(0,i.kt)("h3",{id:"example-converting-to-mongodbs-objectid"},"Example: converting to MongoDB's ObjectID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { param } = require('express-validator');\n\napp.post('/object/:id', param('id').customSanitizer(value => {\n  return ObjectId(value);\n}), (req, res) => {\n  // Handle the request\n});\n")))}d.isMDXComponent=!0}}]);