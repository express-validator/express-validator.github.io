"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5375],{5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(5773),n=a(808),s=(a(7378),a(5318)),o=["components"],i={id:"custom-error-messages",title:"Custom Error Messages"},l=void 0,c={unversionedId:"custom-error-messages",id:"custom-error-messages",title:"Custom Error Messages",description:"express-validator's default error message is a simple Invalid value.",source:"@site/../docs/feature-error-messages.md",sourceDirName:".",slug:"/custom-error-messages",permalink:"/docs/next/custom-error-messages",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/../docs/feature-error-messages.md",tags:[],version:"current",frontMatter:{id:"custom-error-messages",title:"Custom Error Messages"},sidebar:"docs",previous:{title:"Custom validators/sanitizers",permalink:"/docs/next/custom-validators-sanitizers"},next:{title:"Wildcards",permalink:"/docs/next/wildcards"}},m={},p=[{value:"Error message levels",id:"error-message-levels",level:2},{value:"Validator Level",id:"validator-level",level:3},{value:"Custom Validator Level",id:"custom-validator-level",level:3},{value:"Field Level",id:"field-level",level:3},{value:"Dynamic messages",id:"dynamic-messages",level:2},{value:"Complex errors",id:"complex-errors",level:2}],u={toc:p},d="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"express-validator's default error message is a simple ",(0,s.kt)("inlineCode",{parentName:"p"},"Invalid value"),".",(0,s.kt)("br",{parentName:"p"}),"\n","That's enough to cover all fields without being too opinionated."),(0,s.kt)("p",null,"You can, however, specify meaningful error messages in a variety of ways."),(0,s.kt)("h2",{id:"error-message-levels"},"Error message levels"),(0,s.kt)("h3",{id:"validator-level"},"Validator Level"),(0,s.kt)("p",null,"When you want fine grained control over the error message of each validator,\nyou may specify them using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/validation-chain-api#withmessagemessage"},(0,s.kt)("inlineCode",{parentName:"a"},".withMessage()")," method"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post(\n  '/user',\n  // ...some other validations...\n  check('password')\n    .isLength({ min: 5 })\n    .withMessage('must be at least 5 chars long')\n    .matches(/\\d/)\n    .withMessage('must contain a number'),\n  (req, res) => {\n    // Handle the request somehow\n  },\n);\n")),(0,s.kt)("p",null,"In the example above, if the password is less than 5 characters long, an error with the message\n",(0,s.kt)("inlineCode",{parentName:"p"},"must be at least 5 chars long")," will be reported.",(0,s.kt)("br",{parentName:"p"}),"\n","If it also doesn't contain a number, then an error with the message ",(0,s.kt)("inlineCode",{parentName:"p"},"must contain a number")," will be\nreported."),(0,s.kt)("h3",{id:"custom-validator-level"},"Custom Validator Level"),(0,s.kt)("p",null,"If you're using a custom validator, then it may very well throw or reject promises to indicate an invalid value.",(0,s.kt)("br",{parentName:"p"}),"\n","In these cases, the error gets reported with a message that's equal to what was thrown by the validator:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post(\n  '/user',\n  check('email').custom(value => {\n    return User.findByEmail(value).then(user => {\n      if (user) {\n        return Promise.reject('E-mail already in use');\n      }\n    });\n  }),\n  check('password').custom((value, { req }) => {\n    if (value !== req.body.passwordConfirmation) {\n      throw new Error('Password confirmation is incorrect');\n    }\n  }),\n  (req, res) => {\n    // Handle the request somehow\n  },\n);\n")),(0,s.kt)("p",null,"You may still use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/validation-chain-api#withmessagemessage"},(0,s.kt)("inlineCode",{parentName:"a"},".withMessage()")," method")," to\noverride any message obtained from the custom validator with a custom message that is more appropriate\nto the route's context."),(0,s.kt)("p",null,"This is especially useful if you wish to reuse a custom validator function across several routes\nthroughout the application."),(0,s.kt)("h3",{id:"field-level"},"Field Level"),(0,s.kt)("p",null,"Messages can be specified at the field level by using the second parameter of the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/next/check-api#check-field-message"},"validation middlewares"),"."),(0,s.kt)("p",null,"These messages are used as fallbacks when a validator doesn't specify its own message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post(\n  '/user',\n  // ...some other validations...\n  check('password', 'The password must be 5+ chars long and contain a number')\n    .not()\n    .isIn(['123', 'password', 'god'])\n    .withMessage('Do not use a common word as the password')\n    .isLength({ min: 5 })\n    .matches(/\\d/),\n  (req, res) => {\n    // Handle the request somehow\n  },\n);\n")),(0,s.kt)("p",null,"In the example above, when the ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," field is shorter than 5 characters, or doesn't contain a number,\nit will be reported with the message ",(0,s.kt)("inlineCode",{parentName:"p"},"The password must be 5+ chars long and contain a number"),",\nas these validators didn't specify a message of their own."),(0,s.kt)("h2",{id:"dynamic-messages"},"Dynamic messages"),(0,s.kt)("p",null,"You can build dynamic validation messages by providing functions anywhere a validation message is supported.",(0,s.kt)("br",{parentName:"p"}),"\n","This is specially useful if you use a translation library to provide tailored messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// check(field, withMessage) and .withMessage() work the same\ncheck('something').isInt().withMessage((value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\ncheck('somethingElse', (value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\n\n// oneOf is special though - it only receives the req object for now\noneOf([someValidation, anotherValidation], ({ req }) => {\n  return req.translate('validation.multiple_failures');\n});\n")),(0,s.kt)("h2",{id:"complex-errors"},"Complex errors"),(0,s.kt)("p",null,"Error messages can be more complex types than a simple ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),".",(0,s.kt)("br",{parentName:"p"}),"\n","For example you can provide an object with multiple properties:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// check(field, withMessage) and .withMessage() work the same\ncheck('email').isEmail().withMessage({\n  message: 'Not an email',\n  errorCode: 1,\n})\n")))}h.isMDXComponent=!0}}]);