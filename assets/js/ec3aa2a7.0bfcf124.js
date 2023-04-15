"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8890],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=["components"],s={id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},l=void 0,c={unversionedId:"custom-validators-sanitizers",id:"version-6.9.0/custom-validators-sanitizers",title:"Custom validators/sanitizers",description:"Although express-validator offers plenty of handy validators and sanitizers through its underlying",source:"@site/versioned_docs/version-6.9.0/feature-custom-validators-sanitizers.md",sourceDirName:".",slug:"/custom-validators-sanitizers",permalink:"/docs/6.9.0/custom-validators-sanitizers",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.9.0/feature-custom-validators-sanitizers.md",tags:[],version:"6.9.0",frontMatter:{id:"custom-validators-sanitizers",title:"Custom validators/sanitizers"},sidebar:"version-6.9.0/docs",previous:{title:"Sanitization",permalink:"/docs/6.9.0/sanitization"},next:{title:"Custom Error Messages",permalink:"/docs/6.9.0/custom-error-messages"}},u={},p=[{value:"Custom validator",id:"custom-validator",level:2},{value:"Example: checking if e-mail is in use",id:"example-checking-if-e-mail-is-in-use",level:3},{value:"Example: checking if password confirmation matches password",id:"example-checking-if-password-confirmation-matches-password",level:3},{value:"Custom sanitizers",id:"custom-sanitizers",level:2},{value:"Example: converting to MongoDB&#39;s ObjectID",id:"example-converting-to-mongodbs-objectid",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Although express-validator offers plenty of handy validators and sanitizers through its underlying\ndependency ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chriso/validator.js"},"validator.js"),", it doesn't always suffice when\nbuilding your application."),(0,i.kt)("p",null,"For these cases, you may consider writing a custom validator or a custom sanitizer."),(0,i.kt)("h2",{id:"custom-validator"},"Custom validator"),(0,i.kt)("p",null,"A custom validator may be implemented by using the chain method ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.9.0/validation-chain-api#customvalidator"},(0,i.kt)("inlineCode",{parentName:"a"},".custom()")),".\nIt takes a validator function."),(0,i.kt)("p",null,"Custom validators may return Promises to indicate an async validation (which will be awaited upon),\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"throw")," any value/reject a promise to ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.9.0/custom-error-messages#custom-validator-level"},"use a custom error message"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," if your custom validator returns a promise, it must reject to indicate that the field is invalid.")),(0,i.kt)("h3",{id:"example-checking-if-e-mail-is-in-use"},"Example: checking if e-mail is in use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { body } = require('express-validator');\n\napp.post(\n  '/user',\n  body('email').custom(value => {\n    return User.findUserByEmail(value).then(user => {\n      if (user) {\n        return Promise.reject('E-mail already in use');\n      }\n    });\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n")),(0,i.kt)("h3",{id:"example-checking-if-password-confirmation-matches-password"},"Example: checking if password confirmation matches password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { body } = require('express-validator');\n\napp.post(\n  '/user',\n  body('passwordConfirmation').custom((value, { req }) => {\n    if (value !== req.body.password) {\n      throw new Error('Password confirmation does not match password');\n    }\n\n    // Indicates the success of this synchronous custom validator\n    return true;\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n")),(0,i.kt)("h2",{id:"custom-sanitizers"},"Custom sanitizers"),(0,i.kt)("p",null,"Custom sanitizers can be implemented by using the method ",(0,i.kt)("inlineCode",{parentName:"p"},".customSanitizer()"),", no matter if\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.9.0/validation-chain-api#customsanitizersanitizer"},"validation chain one")," or\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.9.0/sanitization-chain-api#customsanitizersanitizer"},"sanitization chain one"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Just like with the validators, you specify the sanitizer function, which ",(0,i.kt)("em",{parentName:"p"},"must")," be synchronous at the\nmoment."),(0,i.kt)("h3",{id:"example-converting-to-mongodbs-objectid"},"Example: converting to MongoDB's ObjectID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { param } = require('express-validator');\n\napp.post(\n  '/object/:id',\n  param('id').customSanitizer(value => {\n    return ObjectId(value);\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n")))}d.isMDXComponent=!0}}]);