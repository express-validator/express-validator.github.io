"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6064],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=a(5773),i=a(808),o=(a(7378),a(5318)),l=["components"],r={id:"validation-chain-api",title:"Validation Chain API"},s=void 0,d={unversionedId:"validation-chain-api",id:"version-6.14.0/validation-chain-api",title:"Validation Chain API",description:"The validation chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.14.0/api-validation-chain.md",sourceDirName:".",slug:"/validation-chain-api",permalink:"/docs/6.14.0/validation-chain-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.14.0/api-validation-chain.md",tags:[],version:"6.14.0",frontMatter:{id:"validation-chain-api",title:"Validation Chain API"},sidebar:"version-6.14.0/docs",previous:{title:"Validation middlewares",permalink:"/docs/6.14.0/check-api"},next:{title:"Sanitization middlewares",permalink:"/docs/6.14.0/filter-api"}},p={},u=[{value:"Standard validators",id:"standard-validators",level:2},{value:"Sanitization Chain API",id:"sanitization-chain-api",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.bail()</code>",id:"bail",level:3},{value:"<code>.custom(validator)</code>",id:"customvalidator",level:3},{value:"<code>.exists(options)</code>",id:"existsoptions",level:3},{value:"<code>.if(condition)</code>",id:"ifcondition",level:3},{value:"<code>.isArray(options)</code>",id:"isarrayoptions",level:3},{value:"<code>.isObject(options)</code>",id:"isobjectoptions",level:3},{value:"<code>.isString()</code>",id:"isstring",level:3},{value:"<code>.not()</code>",id:"not",level:3},{value:"<code>.notEmpty()</code>",id:"notempty",level:3},{value:"<code>.optional(options)</code>",id:"optionaloptions",level:3},{value:"<code>.run(req[, options])</code>",id:"runreq-options",level:3},{value:"<code>.withMessage(message)</code>",id:"withmessagemessage",level:3}],c={toc:u},m="wrapper";function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The validation chain is a middleware, and it ",(0,o.kt)("em",{parentName:"p"},"should")," be passed to an Express route handler."),(0,o.kt)("p",null,"You can add as many validators and sanitizers to a chain as you need.",(0,o.kt)("br",{parentName:"p"}),"\n","When the middleware runs, it will run each validator or sanitizer in the order they were specified;\nthis means if a sanitizer is specified before a validator, the validator will run with the sanitized\nvalue."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Chains are mutable. Every time you call one of its methods, you're adding more behavior to the same chain.",(0,o.kt)("br",{parentName:"p"}),"\n","Keep this in mind and note that you probably want to use a factory function when reusing some base chain.")),(0,o.kt)("h2",{id:"standard-validators"},"Standard validators"),(0,o.kt)("p",null,'All validators listed by validator.js are made available within a Validation Chain,\nand are called "standard validators" in express-validator.'),(0,o.kt)("p",null,"This means you can use any of those methods, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"isInt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isEmail"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"contains"),", etc."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"For a complete list of standard validators and their options"),",\nplease check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/validatorjs/validator.js#validators"},"validator.js' docs"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since validator.js only accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," as input, any value (including arrays and objects) that needs to be validated by a Standard Validator ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.14.0/faq#why-arrays-are-not-validatedsanitized-correctly"},"is first converted to such type"),".")),(0,o.kt)("h2",{id:"sanitization-chain-api"},"Sanitization Chain API"),(0,o.kt)("p",null,"A validation chain also is a subset of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.14.0/sanitization-chain-api"},"Sanitization Chain"),", meaning\nall standard sanitizers and its additional methods are available:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', [\n  // normalizeEmail() and toDate() are sanitizers, also available in the Sanitization Chain\n  check('email').normalizeEmail().isEmail(),\n  check('date-of-birth').isISO8601().toDate(),\n]);\n")),(0,o.kt)("h2",{id:"additional-methods"},"Additional methods"),(0,o.kt)("p",null,"In addition to the standard validators and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.14.0/sanitization-chain-api"},"Sanitization Chain API"),",\nthe following methods are also available within a Validation Chain:"),(0,o.kt)("h3",{id:"bail"},(0,o.kt)("inlineCode",{parentName:"h3"},".bail()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Stops running validations if any of the previous ones have failed.",(0,o.kt)("br",{parentName:"p"}),"\n","Useful to prevent a custom validator that touches a database or external API from running when you\nknow it will fail."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".bail()")," can be used multiple times in the same validation chain if needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', [\n  check('username')\n    .isEmail()\n    .bail()\n    // If username is not an email, checkBlacklistedDomain will never run\n    .custom(checkBlacklistedDomain)\n    .bail()\n    // If username is not an email or has a blacklisted domain, checkEmailExists will never run\n    .custom(checkEmailExists);\n]);\n")),(0,o.kt)("h3",{id:"customvalidator"},(0,o.kt)("inlineCode",{parentName:"h3"},".custom(validator)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"validator(value, { req, location, path })"),": the custom validator function.",(0,o.kt)("br",{parentName:"li"}),"Receives the value of the field being validated, as well as the express request, the location and the field path.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Adds a custom validator to the current validation chain.",(0,o.kt)("br",{parentName:"p"}),"\n","The custom validator may return a promise to indicate an async validation task."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If it's rejected, the field is considered invalid;"),(0,o.kt)("li",{parentName:"ul"},"If it's resolved, the field is considered valid ",(0,o.kt)("strong",{parentName:"li"},"regardless of the returned value"),".")),(0,o.kt)("p",null,"The custom validator may also throw JavaScript exceptions (eg ",(0,o.kt)("inlineCode",{parentName:"p"},"throw new Error()"),") and return falsy values to indicate the field is invalid."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post(\n  '/create-user',\n  check('password').exists(),\n  check(\n    'passwordConfirmation',\n    'passwordConfirmation field must have the same value as the password field',\n  )\n    .exists()\n    .custom((value, { req }) => value === req.body.password),\n  loginHandler,\n);\n")),(0,o.kt)("h3",{id:"existsoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".exists(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options to customize the behavior of exists.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Adds a validator to check for the existence of the current fields in the request.\nThis means the value of the fields may not be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"; all other values are acceptable."),(0,o.kt)("p",null,"You can customize this behavior by passing an object with the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checkNull"),": if ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", fields with ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," values will not exist"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checkFalsy"),": if ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", fields with falsy values (eg ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),", ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),") will also not exist")),(0,o.kt)("h3",{id:"ifcondition"},(0,o.kt)("inlineCode",{parentName:"h3"},".if(condition)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"condition"),": the condition for this Validation Chain to continue validating.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Adds a condition for deciding if validation should continue on a field or not."),(0,o.kt)("p",null,"The condition can be either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A custom validator-like function: ",(0,o.kt)("inlineCode",{parentName:"p"},"condition(value, { req, path, location })"),".\nReceives the value of the field being validated, as well as the express request, the location and the field path."),(0,o.kt)("p",{parentName:"li"},"If it returns truthy or a promise that resolves, the validation chain will continue\nrunning. If it returns falsy, a promise that rejects or if it throws, the validation chain will stop."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Async functions must return a resolved or rejected ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," because ",(0,o.kt)("inlineCode",{parentName:"p"},"truthy")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"falsy")," values won't stop the chain (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/issues/1028#issuecomment-830561518"},"#1028"),").")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A validation chain ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.14.0/check-api#check-field-message"},"created through ",(0,o.kt)("inlineCode",{parentName:"a"},"check()")," or similar functions"),"."),(0,o.kt)("p",{parentName:"li"},"If running that chain would produce errors, then the validation chain will stop."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"body('oldPassword')\n  // if the new password is provided...\n  .if((value, { req }) => req.body.newPassword)\n  // OR\n  .if(body('newPassword').exists())\n  // ...then the old password must be too...\n  .notEmpty()\n  // ...and they must not be equal.\n  .custom((value, { req }) => value !== req.body.newPassword);\n")),(0,o.kt)("h3",{id:"isarrayoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".isArray(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object which accepts the following options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"min"),": minimum array length."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max"),": maximum array length.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Adds a validator to check if a value is an array."),(0,o.kt)("h3",{id:"isobjectoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".isObject(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object which accepts the following options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"strict"),": If set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," the validation passes also for ",(0,o.kt)("inlineCode",{parentName:"li"},"array")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," types (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),").")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Adds a validator to check if a value is an object."),(0,o.kt)("h3",{id:"isstring"},(0,o.kt)("inlineCode",{parentName:"h3"},".isString()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Adds a validator to check if a value is a string."),(0,o.kt)("h3",{id:"not"},(0,o.kt)("inlineCode",{parentName:"h3"},".not()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Negates the result of the next validator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"check('weekday').not().isIn(['sunday', 'saturday']);\n")),(0,o.kt)("h3",{id:"notempty"},(0,o.kt)("inlineCode",{parentName:"h3"},".notEmpty()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Adds a validator to check if a value is not empty; that is, a string with a length of 1 or bigger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"check('username').notEmpty();\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is not intended to check that the length of an array is greater than zero, as ",(0,o.kt)("inlineCode",{parentName:"p"},".notEmpty()")," will only validate the first element of it.",(0,o.kt)("br",{parentName:"p"}),"\n","To require a minimum array length use ",(0,o.kt)("inlineCode",{parentName:"p"},".isArray({ min: 1 })"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// weekdays: ['sunday', 'monday']\ncheck('weekdays').notEmpty(); // Passes validation\n\n// names: ['', 'John']\ncheck('names').notEmpty(); // Does not pass validation because names[0] is empty.\n"))),(0,o.kt)("h3",{id:"optionaloptions"},(0,o.kt)("inlineCode",{parentName:"h3"},".optional(options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options to customize the behaviour of optional.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Marks the current validation chain as optional.",(0,o.kt)("br",{parentName:"p"}),"\n","This is useful to remove values that are not essential to your business and that would cause validation failures in case they were not provided in the request."),(0,o.kt)("p",null,"By default, fields with ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," values will be ignored from the validation."),(0,o.kt)("p",null,"You can customize this behavior by passing an object with the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nullable"),": if ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", fields with ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," values will be considered optional"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checkFalsy"),": if ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", fields with falsy values (eg ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),", ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),") will also be considered optional")),(0,o.kt)("h3",{id:"runreq-options"},(0,o.kt)("inlineCode",{parentName:"h3"},".run(req[, options])")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"req"),": the current express request to validate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ",(0,o.kt)("em",{parentName:"li"},"(optional)"),": an object of options to customize how the chain will be run:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dryRun"),": defines whether errors and sanitizations won't be persisted to ",(0,o.kt)("inlineCode",{parentName:"li"},"req"),". Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," a promise for a ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.14.0/validation-result-api#result"},(0,o.kt)("inlineCode",{parentName:"a"},"Result"))," that resolves when the validation chain ran.")),(0,o.kt)("p",null,"Runs the current validation chain in an imperative way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', async (req, res, next) => {\n  await check('email').isEmail().run(req);\n  await check('password').isLength({ min: 6 }).run(req);\n\n  const result = validationResult(req);\n  if (!result.isEmpty()) {\n    return res.status(400).json({ errors: result.array() });\n  }\n\n  // user can be created now!\n});\n")),(0,o.kt)("p",null,"You may also pass ",(0,o.kt)("inlineCode",{parentName:"p"},"dryRun")," option so that you can know if the request has any problems, without them\nbeing accounted among other request errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/api/*', async (req, res, next) => {\n  const tokenResult = await check('token')\n    .notEmpty()\n    .custom(checkMyTokenFormat)\n    .run(req, { dryRun: true });\n  if (tokenResult.isEmpty()) {\n    // The token looks good, so try to authenticate it\n    await req.authenticate();\n  } else {\n    // The token is not good, so proceed as an unauthenticated request.\n  }\n});\n\napp.post('/api/create-todo', async (req, res, next) => {\n  await check('text').notEmpty().run(req);\n  await check('done').isBoolean().run(req);\n\n  const result = validationResult(req);\n  if (!result.isEmpty()) {\n    // text and/or done have errors.\n    // Errors in the token as validated in the previous route are not accounted here.\n  }\n});\n")),(0,o.kt)("h3",{id:"withmessagemessage"},(0,o.kt)("inlineCode",{parentName:"h3"},".withMessage(message)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message"),": the error message to use for the previous validator")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,o.kt)("p",null,"Sets the error message for the previous validator.",(0,o.kt)("br",{parentName:"p"}),"\n","This will have precedence over errors thrown by a custom validator."),(0,o.kt)("p",null,"To build dynamic messages, see also ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.14.0/custom-error-messages#dynamic-messages"},"Dynamic Messages"),"."))}h.isMDXComponent=!0}}]);