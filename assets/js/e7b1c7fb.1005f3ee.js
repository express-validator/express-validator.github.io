"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3514],{1239:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var s=n(4246),a=n(1670);const t={id:"validation-chain-api",title:"Validation Chain API"},l=void 0,o={id:"validation-chain-api",title:"Validation Chain API",description:"The validation chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.0.0/api-validation-chain.md",sourceDirName:".",slug:"/validation-chain-api",permalink:"/docs/6.0.0/validation-chain-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.0.0/api-validation-chain.md",tags:[],version:"6.0.0",frontMatter:{id:"validation-chain-api",title:"Validation Chain API"},sidebar:"api",previous:{title:"Validation middlewares",permalink:"/docs/6.0.0/check-api"},next:{title:"Sanitization middlewares",permalink:"/docs/6.0.0/filter-api"}},d={},r=[{value:"Standard validators",id:"standard-validators",level:2},{value:"Sanitization Chain API",id:"sanitization-chain-api",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.custom(validator)</code>",id:"customvalidator",level:3},{value:"<code>.exists(options)</code>",id:"existsoptions",level:3},{value:"<code>.isArray()</code>",id:"isarray",level:3},{value:"<code>.isString()</code>",id:"isstring",level:3},{value:"<code>.not()</code>",id:"not",level:3},{value:"<code>.optional(options)</code>",id:"optionaloptions",level:3},{value:"<code>.run(req)</code>",id:"runreq",level:3},{value:"<code>.withMessage(message)</code>",id:"withmessagemessage",level:3}];function c(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["The validation chain is a middleware, and it ",(0,s.jsx)(i.em,{children:"should"})," be passed to an Express route handler."]}),"\n",(0,s.jsxs)(i.p,{children:["You can add as many validators and sanitizers to a chain as you need.",(0,s.jsx)(i.br,{}),"\n","When the middleware runs, it will run each validator or sanitizer in the order they were specified;\nthis means if a sanitizer is specified before a validator, the validator will run with the sanitized\nvalue."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," Chains are mutable. Every time you call one of its methods, you're adding more behavior to the same chain.",(0,s.jsx)(i.br,{}),"\n","Keep this in mind and note that you probably want to use a factory function when reusing some base chain."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"standard-validators",children:"Standard validators"}),"\n",(0,s.jsx)(i.p,{children:'All validators listed by validator.js are made available within a Validation Chain,\nand are called "standard validators" in express-validator.'}),"\n",(0,s.jsxs)(i.p,{children:["This means you can use any of those methods, e.g. ",(0,s.jsx)(i.code,{children:"isInt"}),", ",(0,s.jsx)(i.code,{children:"isEmail"}),", ",(0,s.jsx)(i.code,{children:"contains"}),", etc."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"For a complete list of standard validators and their options"}),",\nplease check ",(0,s.jsx)(i.a,{href:"https://github.com/chriso/validator.js#validators",children:"validator.js' docs"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"sanitization-chain-api",children:"Sanitization Chain API"}),"\n",(0,s.jsxs)(i.p,{children:["A validation chain also is a subset of the ",(0,s.jsx)(i.a,{href:"/docs/6.0.0/sanitization-chain-api",children:"Sanitization Chain"}),", meaning\nall standard sanitizers and its additional methods are available:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"app.post('/create-user', [\n  // normalizeEmail() and toDate() are sanitizers, also available in the Sanitization Chain\n  check('email').normalizeEmail().isEmail(),\n  check('date-of-birth').isISO8601().toDate()\n]);\n"})}),"\n",(0,s.jsx)(i.h2,{id:"additional-methods",children:"Additional methods"}),"\n",(0,s.jsxs)(i.p,{children:["In addition to the standard validators and the ",(0,s.jsx)(i.a,{href:"/docs/6.0.0/sanitization-chain-api",children:"Sanitization Chain API"}),",\nthe following methods are also available within a Validation Chain:"]}),"\n",(0,s.jsx)(i.h3,{id:"customvalidator",children:(0,s.jsx)(i.code,{children:".custom(validator)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"validator(value, { req, location, path })"}),": the custom validator function.",(0,s.jsx)(i.br,{}),"\n","Receives the value of the field being validated, as well as the express request, the location and the field path."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Adds a custom validator to the current validation chain.",(0,s.jsx)(i.br,{}),"\n","The custom validator may return a promise to indicate an async validation task. In case it's rejected, the field is considered invalid."]}),"\n",(0,s.jsxs)(i.p,{children:["The custom validator may also throw JavaScript exceptions (eg ",(0,s.jsx)(i.code,{children:"throw new Error()"}),") and return falsy values to indicate the field is invalid."]}),"\n",(0,s.jsx)(i.p,{children:"Example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"app.post('/create-user', [\n  check('password').exists(),\n  check('passwordConfirmation', 'passwordConfirmation field must have the same value as the password field')\n    .exists()\n    .custom((value, { req }) => value === req.body.password)\n], loginHandler);\n"})}),"\n",(0,s.jsx)(i.h3,{id:"existsoptions",children:(0,s.jsx)(i.code,{children:".exists(options)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"options"})," ",(0,s.jsx)(i.em,{children:"(optional)"}),": an object of options to customize the behavior of exists."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Adds a validator to check for the existence of the current fields in the request.\nThis means the value of the fields may not be ",(0,s.jsx)(i.code,{children:"undefined"}),"; all other values are acceptable."]}),"\n",(0,s.jsx)(i.p,{children:"You can customize this behavior by passing an object with the following options:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"checkNull"}),": if ",(0,s.jsx)(i.code,{children:"true"}),", fields with ",(0,s.jsx)(i.code,{children:"null"})," values will not exist"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"checkFalsy"}),": if ",(0,s.jsx)(i.code,{children:"true"}),", fields with falsy values (eg ",(0,s.jsx)(i.code,{children:'""'}),", ",(0,s.jsx)(i.code,{children:"0"}),", ",(0,s.jsx)(i.code,{children:"false"}),", ",(0,s.jsx)(i.code,{children:"null"}),") will also not exist"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"isarray",children:(0,s.jsx)(i.code,{children:".isArray()"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Adds a validator to check if a value is an array."}),"\n",(0,s.jsx)(i.h3,{id:"isstring",children:(0,s.jsx)(i.code,{children:".isString()"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Adds a validator to check if a value is a string."}),"\n",(0,s.jsx)(i.h3,{id:"not",children:(0,s.jsx)(i.code,{children:".not()"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Negates the result of the next validator."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"check('weekday').not().isIn(['sunday', 'saturday'])\n"})}),"\n",(0,s.jsx)(i.h3,{id:"optionaloptions",children:(0,s.jsx)(i.code,{children:".optional(options)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"options"})," ",(0,s.jsx)(i.em,{children:"(optional)"}),": an object of options to customize the behaviour of optional."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Marks the current validation chain as optional.",(0,s.jsx)(i.br,{}),"\n","This is useful to remove values that are not essential to your busines and that would cause validation failures in case they were not provided in the request."]}),"\n",(0,s.jsxs)(i.p,{children:["By default, fields with ",(0,s.jsx)(i.code,{children:"undefined"})," values will be ignored from the validation."]}),"\n",(0,s.jsx)(i.p,{children:"You can customize this behavior by passing an object with the following options:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"nullable"}),": if ",(0,s.jsx)(i.code,{children:"true"}),", fields with ",(0,s.jsx)(i.code,{children:"null"})," values will be considered optional"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"checkFalsy"}),": if ",(0,s.jsx)(i.code,{children:"true"}),", fields with falsy values (eg ",(0,s.jsx)(i.code,{children:'""'}),", ",(0,s.jsx)(i.code,{children:"0"}),", ",(0,s.jsx)(i.code,{children:"false"}),", ",(0,s.jsx)(i.code,{children:"null"}),") will also be considered optional"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"runreq",children:(0,s.jsx)(i.code,{children:".run(req)"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," a promise that resolves when the validation chain ran."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Runs the current validation chain in an imperative way."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"app.post('/create-user', async (req, res, next) => {\n  await check('email').isEmail().run(req);\n  await check('password').isLength({ min: 6 }).run(req);\n\n  const result = validationResult(req);\n  if (!result.isEmpty()) {\n    return res.status(400).json({ errors: result.array() });\n  }\n\n  // user can be created now!\n});\n"})}),"\n",(0,s.jsx)(i.h3,{id:"withmessagemessage",children:(0,s.jsx)(i.code,{children:".withMessage(message)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"message"}),": the error message to use for the previous validator"]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Sets the error message for the previous validator.",(0,s.jsx)(i.br,{}),"\n","This will have precedence over errors thrown by a custom validator."]}),"\n",(0,s.jsxs)(i.p,{children:["To build dynamic messages, see also ",(0,s.jsx)(i.a,{href:"/docs/6.0.0/custom-error-messages#dynamic-messages",children:"Dynamic Messages"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1670:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>l});var s=n(7378);const a={},t=s.createContext(a);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);