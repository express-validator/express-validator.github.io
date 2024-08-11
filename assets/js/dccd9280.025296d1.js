"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6039],{9132:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=r(24246),s=r(71670),o=r(75857);const i={title:"oneOf"},t="oneOf()",d={id:"api/one-of",title:"oneOf",description:"oneOf()",source:"@site/versioned_docs/version-7.2.0/api/one-of.md",sourceDirName:"api",slug:"/api/one-of",permalink:"/docs/api/one-of",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-7.2.0/api/one-of.md",tags:[],version:"7.2.0",frontMatter:{title:"oneOf"},sidebar:"api",previous:{title:"checkSchema",permalink:"/docs/api/check-schema"},next:{title:"ValidationChain",permalink:"/docs/api/validation-chain"}},l={},c=[{value:"<code>oneOf()</code>",id:"oneof-1",level:2},{value:"Example: List of validation chains",id:"example-list-of-validation-chains",level:3},{value:"Example: Grouped validation chains",id:"example-grouped-validation-chains",level:3},{value:"Error types",id:"error-types",level:2},{value:"<code>grouped</code>",id:"error-type-grouped",level:3},{value:"<code>least_errored</code>",id:"error-type-least-errored",level:3},{value:"<code>flat</code>",id:"error-type-flat",level:3},{value:"<code>AlternativeMessageFactory</code>",id:"alternativemessagefactory",level:2},{value:"<code>GroupedAlternativeMessageFactory</code>",id:"groupedalternativemessagefactory",level:2}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"oneof",children:(0,a.jsx)(n.code,{children:"oneOf()"})}),"\n",(0,a.jsx)(n.h2,{id:"oneof-1",children:(0,a.jsx)(n.code,{children:"oneOf()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"oneOf(\n  chains: (ValidationChain | ValidationChain[])[],\n  options?: { message?: any, errorType?: 'grouped' | 'least_errored' | 'flat' }\n): Middleware & ContextRunner\n"})}),"\n",(0,a.jsx)(n.p,{children:"Creates a middleware to ensure that at least one of the given validation chain groups are valid."}),"\n",(0,a.jsxs)(n.p,{children:["If none of the validation chain groups are valid, a validation error is added to the request.\nThe error that is added depends on the ",(0,a.jsx)(n.code,{children:"errorType"})," option, though; check out ",(0,a.jsx)(n.a,{href:"#error-types",children:"error types"}),"\nto understand how it works."]}),"\n",(0,a.jsx)(n.h3,{id:"example-list-of-validation-chains",children:"Example: List of validation chains"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"oneOf()"})," can take a list of validation chains.\nIn the following example, if either the e-mail or the phone number pass validation but the other one\ndoesn't, there won't be validation errors:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { body, oneOf } from 'express-validator';\n\napp.post(\n  '/contact-us',\n  body('message').notEmpty(),\n  oneOf([body('phone_number').isMobilePhone(), body('email').isEmail()], {\n    message: 'At least one valid contact method must be provided',\n  }),\n  (req, res) => {\n    // Handle request\n  },\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-grouped-validation-chains",children:"Example: Grouped validation chains"}),"\n",(0,a.jsx)(n.p,{children:"It's also possible to have groups of validation chains be validated as a unit.\nThis is helpful if you have a bunch of fields that work together be a single alternative."}),"\n",(0,a.jsx)(n.p,{children:"In the following example, all of the credit card fields must pass, otherwise the user needs to provide\na valid Paypal account or an Ethereum wallet to have a payment method in their account:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { body, oneOf } from 'express-validator';\n\napp.post(\n  '/add-payment-method',\n  oneOf(\n    [\n      body('eth_wallet').isEthereumAddress(),\n      body('paypal').isEmail(),\n      [\n        body('credit_card.number').isCreditCard(),\n        body('credit_card.expiry').isDate(),\n        body('credit_card.cvv').isNumeric(),\n      ],\n    ],\n    { message: 'At least one valid refund method must be provided' },\n  ),\n  (req, res) => {\n    // Handle request\n  },\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"error-types",children:"Error types"}),"\n",(0,a.jsxs)(n.p,{children:["Following are the possible values for ",(0,a.jsx)(n.code,{children:"oneOf()"}),"'s ",(0,a.jsx)(n.code,{children:"options.errorType"}),", and their behavior.\nIf one is not provided, it defaults to ",(0,a.jsx)(n.code,{children:"grouped"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"error-type-grouped",children:(0,a.jsx)(n.code,{children:"grouped"})}),"\n",(0,a.jsxs)(n.p,{children:["Sets ",(0,a.jsx)(n.code,{children:"oneOf()"})," to add a\n",(0,a.jsxs)(n.a,{href:"/docs/api/validation-result#groupedalternativevalidationerror",children:[(0,a.jsx)(n.code,{children:"GroupedAlternativeValidationError"})," error"]}),"\nwhen none of the validation chain groups are valid.",(0,a.jsx)(n.br,{}),"\n","The error's ",(0,a.jsx)(n.code,{children:"nestedErrors"})," property includes all errors from every validation chain passed to ",(0,a.jsx)(n.code,{children:"oneOf()"}),",\ngrouped by their respective validation chain groups."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"options.message"})," is a function, then it must be a ",(0,a.jsx)(n.a,{href:"#groupedalternativemessagefactory",children:(0,a.jsx)(n.code,{children:"GroupedAlternativeMessageFactory"})}),"."]}),"\n",(0,a.jsxs)(o.$L,{children:[(0,a.jsx)(o.yV,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"oneOf(\n  [\n    body('phone_number').isMobilePhone(),\n    body('email').isEmail(), //\n  ],\n  {\n    errorType: 'grouped',\n  },\n);\n"})})}),(0,a.jsx)(o.Kv,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "alternative_grouped",\n  "msg": "Invalid value(s)",\n  "nestedErrors": [\n    [{ "type": "field", "path": "phone_number" /* etc */ }],\n    [{ "type": "field", "path": "email" /* etc */ }]\n  ]\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"error-type-least-errored",children:(0,a.jsx)(n.code,{children:"least_errored"})}),"\n",(0,a.jsxs)(n.p,{children:["Sets ",(0,a.jsx)(n.code,{children:"oneOf()"})," to add a\n",(0,a.jsxs)(n.a,{href:"/docs/api/validation-result#groupedalternativevalidationerror",children:[(0,a.jsx)(n.code,{children:"AlternativeValidationError"})," error"]}),"\nwhen none of the validation chain groups are valid.",(0,a.jsx)(n.br,{}),"\n","The error's ",(0,a.jsx)(n.code,{children:"nestedErrors"})," property includes all errors from the validation chain group that had the\nleast errors."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"options.message"})," is a function, then it must be an ",(0,a.jsx)(n.a,{href:"#alternativemessagefactory",children:(0,a.jsx)(n.code,{children:"AlternativeMessageFactory"})}),"."]}),"\n",(0,a.jsxs)(o.$L,{children:[(0,a.jsx)(o.yV,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"oneOf(\n  [\n    body('eth_wallet').isEthereumAddress(),\n    body('paypal').isEmail(),\n    [\n      body('credit_card.number').isCreditCard(),\n      body('credit_card.expiry').isDate(),\n      body('credit_card.cvv').isNumeric(),\n    ],\n  ],\n  { errorType: 'least_errored' },\n);\n"})})}),(0,a.jsx)(o.Kv,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "alternative",\n  "msg": "Invalid value(s)",\n  "nestedErrors": [\n    {\n      "type": "field",\n      "path": "eth_wallet" /* etc */\n    }\n  ]\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"error-type-flat",children:(0,a.jsx)(n.code,{children:"flat"})}),"\n",(0,a.jsxs)(n.p,{children:["Sets ",(0,a.jsx)(n.code,{children:"oneOf()"})," to add a\n",(0,a.jsxs)(n.a,{href:"/docs/api/validation-result#groupedalternativevalidationerror",children:[(0,a.jsx)(n.code,{children:"AlternativeValidationError"})," error"]}),"\nwhen none of the validation chain groups are valid.",(0,a.jsx)(n.br,{}),"\n","The error's ",(0,a.jsx)(n.code,{children:"nestedErrors"})," property is a list of all errors from every validation chains passed to\n",(0,a.jsx)(n.code,{children:"oneOf()"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"options.message"})," is a function, then it must be an ",(0,a.jsx)(n.a,{href:"#alternativemessagefactory",children:(0,a.jsx)(n.code,{children:"AlternativeMessageFactory"})}),"."]}),"\n",(0,a.jsxs)(o.$L,{children:[(0,a.jsx)(o.yV,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"oneOf(\n  [\n    body('eth_wallet').isEthereumAddress(),\n    body('paypal').isEmail(),\n    [\n      body('credit_card.number').isCreditCard(),\n      body('credit_card.expiry').isDate(),\n      body('credit_card.cvv').isNumeric(),\n    ],\n  ],\n  { errorType: 'flat' },\n);\n"})})}),(0,a.jsx)(o.Kv,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "alternative",\n  "msg": "Invalid value(s)",\n  "nestedErrors": [\n    { "type": "field", "path": "eth_wallet" /* etc */ },\n    { "type": "field", "path": "paypal" /* etc */ }\n    // ...and so on for other fields\n  ]\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"alternativemessagefactory",children:(0,a.jsx)(n.code,{children:"AlternativeMessageFactory"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type AlternativeMessageFactory = (\n  nestedErrors: FieldValidationError[],\n  options: { req: Request },\n) => any;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The message factory type used when the ",(0,a.jsx)(n.code,{children:"oneOf()"})," error type is ",(0,a.jsx)(n.a,{href:"#error-type-least-errored",children:(0,a.jsx)(n.code,{children:"least_errored"})}),"\nor ",(0,a.jsx)(n.a,{href:"#error-type-flat",children:(0,a.jsx)(n.code,{children:"flat"})}),"."]}),"\n",(0,a.jsxs)(o.$L,{children:[(0,a.jsx)(o.yV,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"oneOf(\n  [\n    body('phone_number').isMobilePhone(),\n    body('email').isEmail(), //\n  ],\n  {\n    errorType: 'flat',\n    message: nestedErrors => {\n      const count = nestedErrors.length;\n      return `There have been ${count} errors`;\n    },\n  },\n);\n"})})}),(0,a.jsx)(o.Kv,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "alternative",\n  "msg": "There have been 2 errors",\n  "nestedErrors": [\n    { "type": "field", "path": "phone_number" /* etc */ },\n    { "type": "field", "path": "email" /* etc */ }\n  ]\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"groupedalternativemessagefactory",children:(0,a.jsx)(n.code,{children:"GroupedAlternativeMessageFactory"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type AlternativeMessageFactory = (\n  nestedErrors: FieldValidationError[][],\n  options: { req: Request },\n) => any;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The message factory type used when the ",(0,a.jsx)(n.code,{children:"oneOf()"})," ",(0,a.jsxs)(n.a,{href:"#error-type-grouped",children:["error type is ",(0,a.jsx)(n.code,{children:"grouped"})]}),"."]}),"\n",(0,a.jsxs)(o.$L,{children:[(0,a.jsx)(o.yV,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"oneOf(\n  [\n    body('phone_number').isMobilePhone(),\n    body('email').isEmail(), //\n  ],\n  {\n    errorType: 'grouped',\n    message: nestedErrors => {\n      const count = nestedErrors.reduce((total, group) => total + group.length, 0);\n      return `There have been ${count} errors`;\n    },\n  },\n);\n"})})}),(0,a.jsx)(o.Kv,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "alternative_grouped",\n  "msg": "There have been 2 errors",\n  "nestedErrors": [\n    [{ "type": "field", "path": "phone_number" /* etc */ }],\n    [{ "type": "field", "path": "email" /* etc */ }]\n  ]\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},75857:(e,n,r)=>{r.d(n,{Kv:()=>d,Y$:()=>i,$L:()=>o,yV:()=>t});r(27378);const a={example:"example_yN0T",exampleTitle:"exampleTitle_uU28"};var s=r(24246),o=function(e){var n=e.children;return(0,s.jsx)("div",{className:a.example,children:n})},i=function(e){var n=e.title,r=e.children;return(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{className:a.exampleTitle,children:n}),r]})};function t(e){var n=e.children;return(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{className:a.exampleTitle,children:"Usage example"}),n]})}function d(e){var n=e.children;return(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{className:a.exampleTitle,children:"Error example"}),n]})}},71670:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>i});var a=r(27378);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);