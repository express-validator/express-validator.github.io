"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8921],{6656:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=a(4246),n=a(1670);const t={id:"custom-error-messages",title:"Custom Error Messages"},o=void 0,i={id:"custom-error-messages",title:"Custom Error Messages",description:"express-validator's default error message is a simple Invalid value.",source:"@site/versioned_docs/version-6.5.0/feature-error-messages.md",sourceDirName:".",slug:"/custom-error-messages",permalink:"/docs/6.5.0/custom-error-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.5.0/feature-error-messages.md",tags:[],version:"6.5.0",frontMatter:{id:"custom-error-messages",title:"Custom Error Messages"},sidebar:"docs",previous:{title:"Custom validators/sanitizers",permalink:"/docs/6.5.0/custom-validators-sanitizers"},next:{title:"Wildcards",permalink:"/docs/6.5.0/wildcards"}},l={},d=[{value:"Error message levels",id:"error-message-levels",level:2},{value:"Validator Level",id:"validator-level",level:3},{value:"Custom Validator Level",id:"custom-validator-level",level:3},{value:"Field Level",id:"field-level",level:3},{value:"Dynamic messages",id:"dynamic-messages",level:2}];function c(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["express-validator's default error message is a simple ",(0,r.jsx)(s.code,{children:"Invalid value"}),".",(0,r.jsx)(s.br,{}),"\n","That's enough to cover all fields without being too opinionated."]}),"\n",(0,r.jsx)(s.p,{children:"You can, however, specify meaningful error messages in a variety of ways."}),"\n",(0,r.jsx)(s.h2,{id:"error-message-levels",children:"Error message levels"}),"\n",(0,r.jsx)(s.h3,{id:"validator-level",children:"Validator Level"}),"\n",(0,r.jsxs)(s.p,{children:["When you want fine grained control over the error message of each validator,\nyou may specify them using the ",(0,r.jsxs)(s.a,{href:"/docs/6.5.0/validation-chain-api#withmessagemessage",children:[(0,r.jsx)(s.code,{children:".withMessage()"})," method"]}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const { check } = require('express-validator');\n\napp.post('/user', [\n  // ...some other validations...\n  check('password')\n    .isLength({ min: 5 }).withMessage('must be at least 5 chars long')\n    .matches(/\\d/).withMessage('must contain a number')\n], (req, res) => {\n  // Handle the request somehow\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["In the example above, if the password is less than 5 characters long, an error with the message\n",(0,r.jsx)(s.code,{children:"must be at least 5 chars long"})," will be reported.",(0,r.jsx)(s.br,{}),"\n","If it also doesn't contain a number, then an error with the message ",(0,r.jsx)(s.code,{children:"must contain a number"})," will be\nreported."]}),"\n",(0,r.jsx)(s.h3,{id:"custom-validator-level",children:"Custom Validator Level"}),"\n",(0,r.jsxs)(s.p,{children:["If you're using a custom validator, then it may very well throw or reject promises to indicate an invalid value.",(0,r.jsx)(s.br,{}),"\n","In these cases, the error gets reported with a message that's equal to what was thrown by the validator:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const { check } = require('express-validator');\n\napp.post('/user', [\n  check('email').custom(value => {\n    return User.findByEmail(value).then(user => {\n      if (user) {\n        return Promise.reject('E-mail already in use');\n      }\n    });\n  }),\n  check('password').custom((value, { req }) => {\n    if (value !== req.body.passwordConfirmation) {\n      throw new Error('Password confirmation is incorrect');\n    }\n  })\n], (req, res) => {\n  // Handle the request somehow\n});\n"})}),"\n",(0,r.jsx)(s.h3,{id:"field-level",children:"Field Level"}),"\n",(0,r.jsxs)(s.p,{children:["Messages can be specified at the field level by using the second parameter of the\n",(0,r.jsx)(s.a,{href:"/docs/6.5.0/check-api#checkfield-message",children:"validation middlewares"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"These messages are used as fallbacks when a validator doesn't specify its own message:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const { check } = require('express-validator');\n\napp.post('/user', [\n  // ...some other validations...\n  check('password', 'The password must be 5+ chars long and contain a number')\n    .not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password')\n    .isLength({ min: 5 })\n    .matches(/\\d/)\n], (req, res) => {\n  // Handle the request somehow\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["In the example above, when the ",(0,r.jsx)(s.code,{children:"password"})," field is shorter than 5 characters, or doesn't contain a number,\nit will be reported with the message ",(0,r.jsx)(s.code,{children:"The password must be 5+ chars long and contain a number"}),",\nas these validators didn't specify a message of their own."]}),"\n",(0,r.jsx)(s.h2,{id:"dynamic-messages",children:"Dynamic messages"}),"\n",(0,r.jsxs)(s.p,{children:["You can build dynamic validation messages by providing functions anywhere a validation message is supported.",(0,r.jsx)(s.br,{}),"\n","This is specially useful if you use a translation library to provide tailored messages:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// check(field, withMessage) and .withMessage() work the same\ncheck('something').isInt().withMessage((value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\ncheck('somethingElse', (value, { req, location, path }) => {\n  return req.translate('validation.message.path', { value, location, path });\n}),\n\n// oneOf is special though - it only receives the req object for now\noneOf([ someValidation, anotherValidation ], ({ req }) => {\n  return req.translate('validation.multiple_failures');\n});\n"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1670:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>o});var r=a(7378);const n={},t=r.createContext(n);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);