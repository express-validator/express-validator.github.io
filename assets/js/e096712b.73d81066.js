"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5752],{5318:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>h});var a=t(7378);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=n,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return t?a.createElement(h,o(o({ref:r},m),{},{components:t})):a.createElement(h,o({ref:r},m))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9741:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(5773),n=t(808),s=(t(7378),t(5318)),o=["components"],i={id:"custom-error-messages",title:"Custom Error Messages"},l=void 0,c={unversionedId:"custom-error-messages",id:"version-6.10.0/custom-error-messages",title:"Custom Error Messages",description:"express-validator's default error message is a simple Invalid value.",source:"@site/versioned_docs/version-6.10.0/feature-error-messages.md",sourceDirName:".",slug:"/custom-error-messages",permalink:"/docs/6.10.0/custom-error-messages",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.10.0/feature-error-messages.md",tags:[],version:"6.10.0",frontMatter:{id:"custom-error-messages",title:"Custom Error Messages"},sidebar:"version-6.10.0/docs",previous:{title:"Custom validators/sanitizers",permalink:"/docs/6.10.0/custom-validators-sanitizers"},next:{title:"Wildcards",permalink:"/docs/6.10.0/wildcards"}},m={},p=[{value:"Error message levels",id:"error-message-levels",level:2},{value:"Validator Level",id:"validator-level",level:3},{value:"Custom Validator Level",id:"custom-validator-level",level:3},{value:"Field Level",id:"field-level",level:3},{value:"Dynamic messages",id:"dynamic-messages",level:2},{value:"Complex errors",id:"complex-errors",level:2}],d={toc:p};function u(e){var r=e.components,t=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"express-validator's default error message is a simple ",(0,s.kt)("inlineCode",{parentName:"p"},"Invalid value"),".",(0,s.kt)("br",{parentName:"p"}),"\n","That's enough to cover all fields without being too opinionated."),(0,s.kt)("p",null,"You can, however, specify meaningful error messages in a variety of ways."),(0,s.kt)("h2",{id:"error-message-levels"},"Error message levels"),(0,s.kt)("h3",{id:"validator-level"},"Validator Level"),(0,s.kt)("p",null,"When you want fine grained control over the error message of each validator,\nyou may specify them using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/6.10.0/validation-chain-api#withmessagemessage"},(0,s.kt)("inlineCode",{parentName:"a"},".withMessage()")," method"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post(\n  '/user',\n  // ...some other validations...\n  check('password')\n    .isLength({ min: 5 })\n    .withMessage('must be at least 5 chars long')\n    .matches(/\\d/)\n    .withMessage('must contain a number'),\n  (req, res) => {\n    // Handle the request somehow\n  },\n);\n")),(0,s.kt)("p",null,"In the example above, if the password is less than 5 characters long, an error with the message\n",(0,s.kt)("inlineCode",{parentName:"p"},"must be at least 5 chars long")," will be reported.",(0,s.kt)("br",{parentName:"p"}),"\n","If it also doesn't contain a number, then an error with the message ",(0,s.kt)("inlineCode",{parentName:"p"},"must contain a number")," will be\nreported."),(0,s.kt)("h3",{id:"custom-validator-level"},"Custom Validator Level"),(0,s.kt)("p",null,"If you're using a custom validator, then it may very well throw or reject promises to indicate an invalid value.",(0,s.kt)("br",{parentName:"p"}),"\n","In these cases, the error gets reported with a message that's equal to what was thrown by the validator:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post(\n  '/user',\n  check('email').custom(value => {\n    return User.findByEmail(value).then(user => {\n      if (user) {\n        return Promise.reject('E-mail already in use');\n      }\n    });\n  }),\n  check('password').custom((value, { req }) => {\n    if (value !== req.body.passwordConfirmation) {\n      throw new Error('Password confirmation is incorrect');\n    }\n  }),\n  (req, res) => {\n    // Handle the request somehow\n  },\n);\n")),(0,s.kt)("h3",{id:"field-level"},"Field Level"),(0,s.kt)("p",null,"Messages can be specified at the field level by using the second parameter of the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/6.10.0/check-api#check-field-message"},"validation middlewares"),"."),(0,s.kt)("p",null,"These messages are used as fallbacks when a validator doesn't specify its own message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post(\n  '/user',\n  // ...some other validations...\n  check('password', 'The password must be 5+ chars long and contain a number')\n    .not()\n    .isIn(['123', 'password', 'god'])\n    .withMessage('Do not use a common word as the password')\n    .isLength({ min: 5 })\n    .matches(/\\d/),\n  (req, res) => {\n    // Handle the request somehow\n  },\n);\n")),(0,s.kt)("p",null,"In the example above, when the ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," field is shorter than 5 characters, or doesn't contain a number,\nit will be reported with the message ",(0,s.kt)("inlineCode",{parentName:"p"},"The password must be 5+ chars long and contain a number"),",\nas these validators didn't specify a message of their own."),(0,s.kt)("h2",{id:"dynamic-messages"},"Dynamic messages"),(0,s.kt)("p",null,"You can build dynamic validation messages by providing functions anywhere a validation message is supported.",(0,s.kt)("br",{parentName:"p"}),"\n","This is specially useful if you use a translation library to provide tailored messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// check(field, withMessage) and .withMessage() work the same\ncheck('something').isInt().withMessage((value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\ncheck('somethingElse', (value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\n\n// oneOf is special though - it only receives the req object for now\noneOf([someValidation, anotherValidation], ({ req }) => {\n  return req.translate('validation.multiple_failures');\n});\n")),(0,s.kt)("h2",{id:"complex-errors"},"Complex errors"),(0,s.kt)("p",null,"Error messages can be more complex types than a simple ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),".",(0,s.kt)("br",{parentName:"p"}),"\n","For example you can provide an object with multiple properties:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// check(field, withMessage) and .withMessage() work the same\ncheck('email').isEmail().withMessage({\n  message: 'Not an email',\n  errorCode: 1,\n})\n")))}u.isMDXComponent=!0}}]);