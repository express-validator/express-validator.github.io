"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[355],{4258:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var s=i(4246),a=i(1670);const t={id:"validation-chain-api",title:"Validation Chain API"},l=void 0,o={id:"validation-chain-api",title:"Validation Chain API",description:"The validation chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.4.0/api-validation-chain.md",sourceDirName:".",slug:"/validation-chain-api",permalink:"/docs/6.4.0/validation-chain-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.4.0/api-validation-chain.md",tags:[],version:"6.4.0",frontMatter:{id:"validation-chain-api",title:"Validation Chain API"},sidebar:"api",previous:{title:"Validation middlewares",permalink:"/docs/6.4.0/check-api"},next:{title:"Sanitization middlewares",permalink:"/docs/6.4.0/filter-api"}},d={},r=[{value:"Standard validators",id:"standard-validators",level:2},{value:"Sanitization Chain API",id:"sanitization-chain-api",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.bail()</code>",id:"bail",level:3},{value:"<code>.custom(validator)</code>",id:"customvalidator",level:3},{value:"<code>.exists(options)</code>",id:"existsoptions",level:3},{value:"<code>.if(condition)</code>",id:"ifcondition",level:3},{value:"<code>.isArray(options)</code>",id:"isarrayoptions",level:3},{value:"<code>.isString()</code>",id:"isstring",level:3},{value:"<code>.not()</code>",id:"not",level:3},{value:"<code>.notEmpty()</code>",id:"notempty",level:3},{value:"<code>.optional(options)</code>",id:"optionaloptions",level:3},{value:"<code>.run(req)</code>",id:"runreq",level:3},{value:"<code>.withMessage(message)</code>",id:"withmessagemessage",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The validation chain is a middleware, and it ",(0,s.jsx)(n.em,{children:"should"})," be passed to an Express route handler."]}),"\n",(0,s.jsxs)(n.p,{children:["You can add as many validators and sanitizers to a chain as you need.",(0,s.jsx)(n.br,{}),"\n","When the middleware runs, it will run each validator or sanitizer in the order they were specified;\nthis means if a sanitizer is specified before a validator, the validator will run with the sanitized\nvalue."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Chains are mutable. Every time you call one of its methods, you're adding more behavior to the same chain.",(0,s.jsx)(n.br,{}),"\n","Keep this in mind and note that you probably want to use a factory function when reusing some base chain."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"standard-validators",children:"Standard validators"}),"\n",(0,s.jsx)(n.p,{children:'All validators listed by validator.js are made available within a Validation Chain,\nand are called "standard validators" in express-validator.'}),"\n",(0,s.jsxs)(n.p,{children:["This means you can use any of those methods, e.g. ",(0,s.jsx)(n.code,{children:"isInt"}),", ",(0,s.jsx)(n.code,{children:"isEmail"}),", ",(0,s.jsx)(n.code,{children:"contains"}),", etc."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For a complete list of standard validators and their options"}),",\nplease check ",(0,s.jsx)(n.a,{href:"https://github.com/chriso/validator.js#validators",children:"validator.js' docs"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sanitization-chain-api",children:"Sanitization Chain API"}),"\n",(0,s.jsxs)(n.p,{children:["A validation chain also is a subset of the ",(0,s.jsx)(n.a,{href:"/docs/6.4.0/sanitization-chain-api",children:"Sanitization Chain"}),", meaning\nall standard sanitizers and its additional methods are available:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"app.post('/create-user', [\n  // normalizeEmail() and toDate() are sanitizers, also available in the Sanitization Chain\n  check('email').normalizeEmail().isEmail(),\n  check('date-of-birth').isISO8601().toDate()\n]);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"additional-methods",children:"Additional methods"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the standard validators and the ",(0,s.jsx)(n.a,{href:"/docs/6.4.0/sanitization-chain-api",children:"Sanitization Chain API"}),",\nthe following methods are also available within a Validation Chain:"]}),"\n",(0,s.jsx)(n.h3,{id:"bail",children:(0,s.jsx)(n.code,{children:".bail()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Stops running validations if any of the previous ones have failed.",(0,s.jsx)(n.br,{}),"\n","Useful to prevent a custom validator that touches a database or external API from running when you\nknow it will fail."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".bail()"})," can be used multiple times in the same validation chain if needed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"app.post('/', [\n  check('username')\n    .isEmail()\n    .bail()\n    // If username is not an email, checkBlacklistedDomain will never run\n    .custom(checkBlacklistedDomain)\n    .bail()\n    // If username is not an email or has a blacklisted domain, checkEmailExists will never run\n    .custom(checkEmailExists);\n]);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"customvalidator",children:(0,s.jsx)(n.code,{children:".custom(validator)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator(value, { req, location, path })"}),": the custom validator function.",(0,s.jsx)(n.br,{}),"\n","Receives the value of the field being validated, as well as the express request, the location and the field path."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adds a custom validator to the current validation chain.",(0,s.jsx)(n.br,{}),"\n","The custom validator may return a promise to indicate an async validation task."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If it's rejected, the field is considered invalid;"}),"\n",(0,s.jsxs)(n.li,{children:["If it's resolved, the field is considered valid ",(0,s.jsx)(n.strong,{children:"regardless of the returned value"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The custom validator may also throw JavaScript exceptions (eg ",(0,s.jsx)(n.code,{children:"throw new Error()"}),") and return falsy values to indicate the field is invalid."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"app.post('/create-user', [\n  check('password').exists(),\n  check('passwordConfirmation', 'passwordConfirmation field must have the same value as the password field')\n    .exists()\n    .custom((value, { req }) => value === req.body.password)\n], loginHandler);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"existsoptions",children:(0,s.jsx)(n.code,{children:".exists(options)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," ",(0,s.jsx)(n.em,{children:"(optional)"}),": an object of options to customize the behavior of exists."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adds a validator to check for the existence of the current fields in the request.\nThis means the value of the fields may not be ",(0,s.jsx)(n.code,{children:"undefined"}),"; all other values are acceptable."]}),"\n",(0,s.jsx)(n.p,{children:"You can customize this behavior by passing an object with the following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"checkNull"}),": if ",(0,s.jsx)(n.code,{children:"true"}),", fields with ",(0,s.jsx)(n.code,{children:"null"})," values will not exist"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"checkFalsy"}),": if ",(0,s.jsx)(n.code,{children:"true"}),", fields with falsy values (eg ",(0,s.jsx)(n.code,{children:'""'}),", ",(0,s.jsx)(n.code,{children:"0"}),", ",(0,s.jsx)(n.code,{children:"false"}),", ",(0,s.jsx)(n.code,{children:"null"}),") will also not exist"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ifcondition",children:(0,s.jsx)(n.code,{children:".if(condition)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"condition"}),": the condition for this Validation Chain to continue validating."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Adds a condition for deciding if validation should continue on a field or not."}),"\n",(0,s.jsx)(n.p,{children:"The condition can be either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A custom validator-like function: ",(0,s.jsx)(n.code,{children:"condition(value, { req, path, location })"}),".\nReceives the value of the field being validated, as well as the express request, the location and the field path."]}),"\n",(0,s.jsx)(n.p,{children:"If it returns truthy or a promise that resolves, the validation chain will continue\nrunning. If it returns falsy, a promise that rejects or if it throws, the validation chain will stop."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A validation chain ",(0,s.jsxs)(n.a,{href:"/docs/6.4.0/check-api#checkfield-message",children:["created through ",(0,s.jsx)(n.code,{children:"check()"})," or similar functions"]}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If running that chain would produce errors, then the validation chain will stop."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"body('oldPassword')\n  // if the new password is provided...\n  .if((value, { req }) => req.body.newPassword)\n  // OR\n  .if(body('newPassword').exists())\n  // ...then the old password must be too...\n  .not().empty()\n  // ...and they must not be equal.\n  .custom((value, { req }) => value !== req.body.newPassword)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"isarrayoptions",children:(0,s.jsx)(n.code,{children:".isArray(options)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," ",(0,s.jsx)(n.em,{children:"(optional)"}),": an object which accepts the following options:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"min"}),": minimum array length."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max"}),": maximum array length."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Adds a validator to check if a value is an array."}),"\n",(0,s.jsx)(n.h3,{id:"isstring",children:(0,s.jsx)(n.code,{children:".isString()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Adds a validator to check if a value is a string."}),"\n",(0,s.jsx)(n.h3,{id:"not",children:(0,s.jsx)(n.code,{children:".not()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Negates the result of the next validator."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"check('weekday').not().isIn(['sunday', 'saturday'])\n"})}),"\n",(0,s.jsx)(n.h3,{id:"notempty",children:(0,s.jsx)(n.code,{children:".notEmpty()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Adds a validator to check if a value is not empty; that is, a string with a length of 1 or bigger."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"check('username').notEmpty()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"optionaloptions",children:(0,s.jsx)(n.code,{children:".optional(options)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," ",(0,s.jsx)(n.em,{children:"(optional)"}),": an object of options to customize the behaviour of optional."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Marks the current validation chain as optional.",(0,s.jsx)(n.br,{}),"\n","This is useful to remove values that are not essential to your business and that would cause validation failures in case they were not provided in the request."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, fields with ",(0,s.jsx)(n.code,{children:"undefined"})," values will be ignored from the validation."]}),"\n",(0,s.jsx)(n.p,{children:"You can customize this behavior by passing an object with the following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nullable"}),": if ",(0,s.jsx)(n.code,{children:"true"}),", fields with ",(0,s.jsx)(n.code,{children:"null"})," values will be considered optional"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"checkFalsy"}),": if ",(0,s.jsx)(n.code,{children:"true"}),", fields with falsy values (eg ",(0,s.jsx)(n.code,{children:'""'}),", ",(0,s.jsx)(n.code,{children:"0"}),", ",(0,s.jsx)(n.code,{children:"false"}),", ",(0,s.jsx)(n.code,{children:"null"}),") will also be considered optional"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"runreq",children:(0,s.jsx)(n.code,{children:".run(req)"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," a promise that resolves when the validation chain ran."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Runs the current validation chain in an imperative way."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"app.post('/create-user', async (req, res, next) => {\n  await check('email').isEmail().run(req);\n  await check('password').isLength({ min: 6 }).run(req);\n\n  const result = validationResult(req);\n  if (!result.isEmpty()) {\n    return res.status(400).json({ errors: result.array() });\n  }\n\n  // user can be created now!\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"withmessagemessage",children:(0,s.jsx)(n.code,{children:".withMessage(message)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"}),": the error message to use for the previous validator"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Returns:"})," the current validation chain instance"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sets the error message for the previous validator.",(0,s.jsx)(n.br,{}),"\n","This will have precedence over errors thrown by a custom validator."]}),"\n",(0,s.jsxs)(n.p,{children:["To build dynamic messages, see also ",(0,s.jsx)(n.a,{href:"/docs/6.4.0/custom-error-messages#dynamic-messages",children:"Dynamic Messages"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1670:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(7378);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);