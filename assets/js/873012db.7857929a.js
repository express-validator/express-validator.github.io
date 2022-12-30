"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7772],{5318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||s;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=r(5773),n=r(808),s=(r(7378),r(5318)),o=["components"],i={id:"custom-error-messages",title:"Custom Error Messages"},l=void 0,c={unversionedId:"custom-error-messages",id:"version-6.2.0/custom-error-messages",title:"Custom Error Messages",description:"express-validator's default error message is a simple Invalid value.",source:"@site/versioned_docs/version-6.2.0/feature-error-messages.md",sourceDirName:".",slug:"/custom-error-messages",permalink:"/docs/6.2.0/custom-error-messages",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.2.0/feature-error-messages.md",tags:[],version:"6.2.0",frontMatter:{id:"custom-error-messages",title:"Custom Error Messages"},sidebar:"version-6.2.0/docs",previous:{title:"Custom validators/sanitizers",permalink:"/docs/6.2.0/custom-validators-sanitizers"},next:{title:"Wildcards",permalink:"/docs/6.2.0/wildcards"}},d={},m=[{value:"Error message levels",id:"error-message-levels",level:2},{value:"Validator Level",id:"validator-level",level:3},{value:"Custom Validator Level",id:"custom-validator-level",level:3},{value:"Field Level",id:"field-level",level:3},{value:"Dynamic messages",id:"dynamic-messages",level:2}],p={toc:m};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"express-validator's default error message is a simple ",(0,s.kt)("inlineCode",{parentName:"p"},"Invalid value"),".",(0,s.kt)("br",{parentName:"p"}),"\n","That's enough to cover all fields without being too opinionated."),(0,s.kt)("p",null,"You can, however, specify meaningful error messages in a variety of ways."),(0,s.kt)("h2",{id:"error-message-levels"},"Error message levels"),(0,s.kt)("h3",{id:"validator-level"},"Validator Level"),(0,s.kt)("p",null,"When you want fine grained control over the error message of each validator,\nyou may specify them using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/6.2.0/validation-chain-api#withmessagemessage"},(0,s.kt)("inlineCode",{parentName:"a"},".withMessage()")," method"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post('/user', [\n  // ...some other validations...\n  check('password')\n    .isLength({ min: 5 }).withMessage('must be at least 5 chars long')\n    .matches(/\\d/).withMessage('must contain a number')\n], (req, res) => {\n  // Handle the request somehow\n});\n")),(0,s.kt)("p",null,"In the example above, if the password is less than 5 characters long, an error with the message\n",(0,s.kt)("inlineCode",{parentName:"p"},"must be at least 5 chars long")," will be reported.",(0,s.kt)("br",{parentName:"p"}),"\n","If it also doesn't contain a number, then an error with the message ",(0,s.kt)("inlineCode",{parentName:"p"},"must contain a number")," will be\nreported."),(0,s.kt)("h3",{id:"custom-validator-level"},"Custom Validator Level"),(0,s.kt)("p",null,"If you're using a custom validator, then it may very well throw or reject promises to indicate an invalid value.",(0,s.kt)("br",{parentName:"p"}),"\n","In these cases, the error gets reported with a message that's equal to what was thrown by the validator:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post('/user', [\n  check('email').custom(value => {\n    return User.findByEmail(value).then(user => {\n      if (user) {\n        return Promise.reject('E-mail already in use');\n      }\n    });\n  }),\n  check('password').custom((value, { req }) => {\n    if (value !== req.body.passwordConfirmation) {\n      throw new Error('Password confirmation is incorrect');\n    }\n  })\n], (req, res) => {\n  // Handle the request somehow\n});\n")),(0,s.kt)("h3",{id:"field-level"},"Field Level"),(0,s.kt)("p",null,"Messages can be specified at the field level by using the second parameter of the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/6.2.0/check-api#check-field-message"},"validation middlewares"),"."),(0,s.kt)("p",null,"These messages are used as fall backs when a validator doesn't specify its own message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\n\napp.post('/user', [\n  // ...some other validations...\n  check('password', 'The password must be 5+ chars long and contain a number')\n    .not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password')\n    .isLength({ min: 5 })\n    .matches(/\\d/)\n], (req, res) => {\n  // Handle the request somehow\n});\n")),(0,s.kt)("p",null,"In the example above, when the ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," field is shorter than 5 characters, or doesn't contain a number,\nit will be reported with the message ",(0,s.kt)("inlineCode",{parentName:"p"},"The password must be 5+ chars long and contain a number"),",\nas these validators didn't specify a message of their own."),(0,s.kt)("h2",{id:"dynamic-messages"},"Dynamic messages"),(0,s.kt)("p",null,"You can build dynamic validation messages by providing functions anywhere a validation message is supported.",(0,s.kt)("br",{parentName:"p"}),"\n","This is specially useful if you use a translation library to provide tailored messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// check(field, withMessage) and .withMessage() work the same\ncheck('something').isInt().withMessage((value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\ncheck('somethingElse', (value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\n\n// oneOf is special though - it only receives the req object for now\noneOf([ someValidation, anotherValidation ], ({ req }) => {\n  return req.translate('validation.multiple_failures');\n});\n")))}u.isMDXComponent=!0}}]);