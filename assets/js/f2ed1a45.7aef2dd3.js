"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1e3],{571:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=n(4246),a=n(1670);const t={id:"validation-chain-api",title:"Validation Chain API"},o=void 0,r={id:"validation-chain-api",title:"Validation Chain API",description:"Any of the validation and sanitization methods listed by validator.js are made available in all validation chains created by express-validator, as long as we're supporting the most up-to-date validator version.",source:"@site/versioned_docs/version-5.2.0/api-validation-chain.md",sourceDirName:".",slug:"/validation-chain-api",permalink:"/docs/5.2.0/validation-chain-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-5.2.0/api-validation-chain.md",tags:[],version:"5.2.0",frontMatter:{id:"validation-chain-api",title:"Validation Chain API"},sidebar:"api",previous:{title:"Sanitization Chain API",permalink:"/docs/5.2.0/sanitization-chain-api"},next:{title:"Validation Result API",permalink:"/docs/5.2.0/validation-result-api"}},l={},d=[{value:"<code>.custom(validator)</code>",id:"customvalidator",level:2},{value:"<code>.customSanitizer(sanitizer)</code>",id:"customsanitizersanitizer",level:2},{value:"<code>.exists()</code>",id:"exists",level:2},{value:"<code>.isArray()</code>",id:"isarray",level:2},{value:"<code>.isString()</code>",id:"isstring",level:2},{value:"<code>.not()</code>",id:"not",level:2},{value:"<code>.optional(options)</code>",id:"optionaloptions",level:2},{value:"<code>.withMessage(message)</code>",id:"withmessagemessage",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Any of the validation and sanitization methods listed by ",(0,s.jsx)(i.a,{href:"https://github.com/chriso/validator.js",children:"validator.js"})," are made available in all validation chains created by express-validator, as long as we're supporting the most up-to-date validator version.",(0,s.jsx)(i.br,{}),"\n","If you use any of the sanitizers together with validators, the validated value is the sanitized one."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," Chains are mutable. Every time you call one of its methods, you're adding more behavior to the same chain.",(0,s.jsx)(i.br,{}),"\n","Keep this in mind and note that you probably want to use a factory function when reusing some chain base."]}),"\n",(0,s.jsx)(i.p,{children:"Additionally, the following methods are also available:"}),"\n",(0,s.jsx)(i.h2,{id:"customvalidator",children:(0,s.jsx)(i.code,{children:".custom(validator)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"validator(value, { req, location, path })"}),": the custom validator function.",(0,s.jsx)(i.br,{}),"\n","Receives the value of the field being validated, as well as the express request, the location and the field path."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Adds a custom validator to the current validation chain.",(0,s.jsx)(i.br,{}),"\n","The custom validator may return a promise to indicate an async validation task. In case it's rejected, the field is considered invalid."]}),"\n",(0,s.jsxs)(i.p,{children:["The custom validator may also throw JavaScript exceptions (eg ",(0,s.jsx)(i.code,{children:"throw new Error()"}),") and return falsy values to indicate the field is invalid."]}),"\n",(0,s.jsx)(i.p,{children:"Example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"app.post('/create-user', [\n \xa0check('password').exists(),\n \xa0check('passwordConfirmation', 'passwordConfirmation field must have the same value as the password field')\n    .exists()\n    .custom((value, { req }) => value === req.body.password)\n], loginHandler);\n"})}),"\n",(0,s.jsx)(i.h2,{id:"customsanitizersanitizer",children:(0,s.jsx)(i.code,{children:".customSanitizer(sanitizer)"})}),"\n",(0,s.jsxs)(i.p,{children:["Same as ",(0,s.jsxs)(i.a,{href:"#customsanitizersanitizer",children:[(0,s.jsx)(i.code,{children:".customSanitizer"})," from the Sanitization Chain"]}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"exists",children:(0,s.jsx)(i.code,{children:".exists()"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Adds a validator to check for the existence of the current fields in the request.\nThis means the value of the fields may not be ",(0,s.jsx)(i.code,{children:"undefined"}),"; all other values are acceptable."]}),"\n",(0,s.jsx)(i.h2,{id:"isarray",children:(0,s.jsx)(i.code,{children:".isArray()"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Adds a validator to check if a value is an array."}),"\n",(0,s.jsx)(i.h2,{id:"isstring",children:(0,s.jsx)(i.code,{children:".isString()"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Adds a validator to check if a value is a string."}),"\n",(0,s.jsx)(i.h2,{id:"not",children:(0,s.jsx)(i.code,{children:".not()"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Negates the result of the next validator."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"check('weekday').not().isIn(['sunday', 'saturday'])\n"})}),"\n",(0,s.jsx)(i.h2,{id:"optionaloptions",children:(0,s.jsx)(i.code,{children:".optional(options)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"options"})," ",(0,s.jsx)(i.em,{children:"(optional)"}),": an object of options to customize the behaviour of optional."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Marks the current validation chain as optional.",(0,s.jsx)(i.br,{}),"\n","This is useful to remove values that are not essential to your busines and that would cause validation failures in case they were not provided in the request."]}),"\n",(0,s.jsxs)(i.p,{children:["By default, fields with ",(0,s.jsx)(i.code,{children:"undefined"})," values will be ignored from the validation."]}),"\n",(0,s.jsx)(i.p,{children:"You can customize this behavior by passing an object with the following options:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"nullable"}),": if ",(0,s.jsx)(i.code,{children:"true"}),", fields with ",(0,s.jsx)(i.code,{children:"null"})," values will be considered optional"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"checkFalsy"}),": if ",(0,s.jsx)(i.code,{children:"true"}),", fields with falsy values (eg ",(0,s.jsx)(i.code,{children:'""'}),", ",(0,s.jsx)(i.code,{children:"0"}),", ",(0,s.jsx)(i.code,{children:"false"}),", ",(0,s.jsx)(i.code,{children:"null"}),") will also be considered optional"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"withmessagemessage",children:(0,s.jsx)(i.code,{children:".withMessage(message)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"message"}),": the error message to use for the previous validator"]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Sets the error message for the previous validator.",(0,s.jsx)(i.br,{}),"\n","This will have precedence over errors thrown by a custom validator."]}),"\n",(0,s.jsxs)(i.p,{children:["To build dynamic messages, see also ",(0,s.jsx)(i.a,{href:"/docs/5.2.0/custom-error-messages#dynamic-messages",children:"Dynamic Messages"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1670:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var s=n(7378);const a={},t=s.createContext(a);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);