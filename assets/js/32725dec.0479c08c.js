"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9252],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(5773),i=a(808),l=(a(7378),a(5318)),o=["components"],r={id:"validation-chain-api",title:"Validation Chain API"},s=void 0,d={unversionedId:"validation-chain-api",id:"version-6.2.0/validation-chain-api",title:"Validation Chain API",description:"The validation chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.2.0/api-validation-chain.md",sourceDirName:".",slug:"/validation-chain-api",permalink:"/docs/6.2.0/validation-chain-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.2.0/api-validation-chain.md",tags:[],version:"6.2.0",frontMatter:{id:"validation-chain-api",title:"Validation Chain API"},sidebar:"api",previous:{title:"Validation middlewares",permalink:"/docs/6.2.0/check-api"},next:{title:"Sanitization middlewares",permalink:"/docs/6.2.0/filter-api"}},p={},c=[{value:"Standard validators",id:"standard-validators",level:2},{value:"Sanitization Chain API",id:"sanitization-chain-api",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.bail()</code>",id:"bail",level:3},{value:"<code>.custom(validator)</code>",id:"customvalidator",level:3},{value:"<code>.exists(options)</code>",id:"existsoptions",level:3},{value:"<code>.if(condition)</code>",id:"ifcondition",level:3},{value:"<code>.isArray(options)</code>",id:"isarrayoptions",level:3},{value:"<code>.isString()</code>",id:"isstring",level:3},{value:"<code>.not()</code>",id:"not",level:3},{value:"<code>.optional(options)</code>",id:"optionaloptions",level:3},{value:"<code>.run(req)</code>",id:"runreq",level:3},{value:"<code>.withMessage(message)</code>",id:"withmessagemessage",level:3}],u={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The validation chain is a middleware, and it ",(0,l.kt)("em",{parentName:"p"},"should")," be passed to an Express route handler."),(0,l.kt)("p",null,"You can add as many validators and sanitizers to a chain as you need.",(0,l.kt)("br",{parentName:"p"}),"\n","When the middleware runs, it will run each validator or sanitizer in the order they were specified;\nthis means if a sanitizer is specified before a validator, the validator will run with the sanitized\nvalue."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Chains are mutable. Every time you call one of its methods, you're adding more behavior to the same chain.",(0,l.kt)("br",{parentName:"p"}),"\n","Keep this in mind and note that you probably want to use a factory function when reusing some base chain.")),(0,l.kt)("h2",{id:"standard-validators"},"Standard validators"),(0,l.kt)("p",null,'All validators listed by validator.js are made available within a Validation Chain,\nand are called "standard validators" in express-validator.'),(0,l.kt)("p",null,"This means you can use any of those methods, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"isInt"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"isEmail"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"contains"),", etc."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"For a complete list of standard validators and their options"),",\nplease check ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chriso/validator.js#validators"},"validator.js' docs"),".")),(0,l.kt)("h2",{id:"sanitization-chain-api"},"Sanitization Chain API"),(0,l.kt)("p",null,"A validation chain also is a subset of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/6.2.0/sanitization-chain-api"},"Sanitization Chain"),", meaning\nall standard sanitizers and its additional methods are available:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', [\n  // normalizeEmail() and toDate() are sanitizers, also available in the Sanitization Chain\n  check('email').normalizeEmail().isEmail(),\n  check('date-of-birth').isISO8601().toDate()\n]);\n")),(0,l.kt)("h2",{id:"additional-methods"},"Additional methods"),(0,l.kt)("p",null,"In addition to the standard validators and the ",(0,l.kt)("a",{parentName:"p",href:"/docs/6.2.0/sanitization-chain-api"},"Sanitization Chain API"),",\nthe following methods are also available within a Validation Chain:"),(0,l.kt)("h3",{id:"bail"},(0,l.kt)("inlineCode",{parentName:"h3"},".bail()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,l.kt)("p",null,"Stops running validations if any of the previous ones have failed.",(0,l.kt)("br",{parentName:"p"}),"\n","Useful to prevent a custom validator that touches a database or external API from running when you\nknow it will fail."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".bail()")," can be used multiple times in the same validation chain if needed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', [\n  check('username')\n    .isEmail()\n    .bail()\n    // If username is not an email, checkBlacklistedDomain will never run\n    .custom(checkBlacklistedDomain)\n    .bail()\n    // If username is not an email or has a blacklisted domain, checkEmailExists will never run\n    .custom(checkEmailExists);\n]);\n")),(0,l.kt)("h3",{id:"customvalidator"},(0,l.kt)("inlineCode",{parentName:"h3"},".custom(validator)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"validator(value, { req, location, path })"),": the custom validator function.",(0,l.kt)("br",{parentName:"li"}),"Receives the value of the field being validated, as well as the express request, the location and the field path.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")))),(0,l.kt)("p",null,"Adds a custom validator to the current validation chain.",(0,l.kt)("br",{parentName:"p"}),"\n","The custom validator may return a promise to indicate an async validation task. In case it's rejected, the field is considered invalid."),(0,l.kt)("p",null,"The custom validator may also throw JavaScript exceptions (eg ",(0,l.kt)("inlineCode",{parentName:"p"},"throw new Error()"),") and return falsy values to indicate the field is invalid."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', [\n  check('password').exists(),\n  check('passwordConfirmation', 'passwordConfirmation field must have the same value as the password field')\n    .exists()\n    .custom((value, { req }) => value === req.body.password)\n], loginHandler);\n")),(0,l.kt)("h3",{id:"existsoptions"},(0,l.kt)("inlineCode",{parentName:"h3"},".exists(options)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ",(0,l.kt)("em",{parentName:"li"},"(optional)"),": an object of options to customize the behavior of exists.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")))),(0,l.kt)("p",null,"Adds a validator to check for the existence of the current fields in the request.\nThis means the value of the fields may not be ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"; all other values are acceptable."),(0,l.kt)("p",null,"You can customize this behavior by passing an object with the following options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkNull"),": if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", fields with ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," values will not exist"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkFalsy"),": if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", fields with falsy values (eg ",(0,l.kt)("inlineCode",{parentName:"li"},'""'),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),") will also not exist")),(0,l.kt)("h3",{id:"ifcondition"},(0,l.kt)("inlineCode",{parentName:"h3"},".if(condition)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"condition"),": the condition for this Validation Chain to continue validating.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")))),(0,l.kt)("p",null,"Adds a condition for deciding if validation should continue on a field or not."),(0,l.kt)("p",null,"The condition can be either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A custom validator-like function: ",(0,l.kt)("inlineCode",{parentName:"p"},"condition(value, { req, path, location })"),".\nReceives the value of the field being validated, as well as the express request, the location and the field path."),(0,l.kt)("p",{parentName:"li"},"  If it returns truthy or a promise that resolves, the validation chain will continue\nrunning. If it returns falsy, a promise that rejects or if it throws, the validation chain will stop.  ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A validation chain ",(0,l.kt)("a",{parentName:"p",href:"/docs/6.2.0/check-api#check-field-message"},"created through ",(0,l.kt)("inlineCode",{parentName:"a"},"check()")," or similar functions"),"."),(0,l.kt)("p",{parentName:"li"},"If running that chain would produce errors, then the validation chain will stop."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"body('oldPassword')\n  // if the new password is provided...\n  .if((value, { req }) => req.body.newPassword)\n  // OR\n  .if(body('newPassword').exists())\n  // ...then the old password must be too...\n  .not().empty()\n  // ...and they must not be equal.\n  .custom((value, { req }) => value !== req.body.newPassword)\n")),(0,l.kt)("h3",{id:"isarrayoptions"},(0,l.kt)("inlineCode",{parentName:"h3"},".isArray(options)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ",(0,l.kt)("em",{parentName:"li"},"(optional)"),": an object which accepts the following options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"min"),": minimum array length."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max"),": maximum array length.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")))))),(0,l.kt)("p",null,"Adds a validator to check if a value is an array."),(0,l.kt)("h3",{id:"isstring"},(0,l.kt)("inlineCode",{parentName:"h3"},".isString()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,l.kt)("p",null,"Adds a validator to check if a value is a string."),(0,l.kt)("h3",{id:"not"},(0,l.kt)("inlineCode",{parentName:"h3"},".not()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")),(0,l.kt)("p",null,"Negates the result of the next validator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"check('weekday').not().isIn(['sunday', 'saturday'])\n")),(0,l.kt)("h3",{id:"optionaloptions"},(0,l.kt)("inlineCode",{parentName:"h3"},".optional(options)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ",(0,l.kt)("em",{parentName:"li"},"(optional)"),": an object of options to customize the behaviour of optional.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")))),(0,l.kt)("p",null,"Marks the current validation chain as optional.",(0,l.kt)("br",{parentName:"p"}),"\n","This is useful to remove values that are not essential to your business and that would cause validation failures in case they were not provided in the request."),(0,l.kt)("p",null,"By default, fields with ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," values will be ignored from the validation."),(0,l.kt)("p",null,"You can customize this behavior by passing an object with the following options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nullable"),": if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", fields with ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," values will be considered optional"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkFalsy"),": if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", fields with falsy values (eg ",(0,l.kt)("inlineCode",{parentName:"li"},'""'),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),") will also be considered optional")),(0,l.kt)("h3",{id:"runreq"},(0,l.kt)("inlineCode",{parentName:"h3"},".run(req)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," a promise that resolves when the validation chain ran.")),(0,l.kt)("p",null,"Runs the current validation chain in an imperative way."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/create-user', async (req, res, next) => {\n  await check('email').isEmail().run(req);\n  await check('password').isLength({ min: 6 }).run(req);\n\n  const result = validationResult(req);\n  if (!result.isEmpty()) {\n    return res.status(400).json({ errors: result.array() });\n  }\n\n  // user can be created now!\n});\n")),(0,l.kt)("h3",{id:"withmessagemessage"},(0,l.kt)("inlineCode",{parentName:"h3"},".withMessage(message)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message"),": the error message to use for the previous validator",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Returns:")," the current validation chain instance")))),(0,l.kt)("p",null,"Sets the error message for the previous validator.",(0,l.kt)("br",{parentName:"p"}),"\n","This will have precedence over errors thrown by a custom validator."),(0,l.kt)("p",null,"To build dynamic messages, see also ",(0,l.kt)("a",{parentName:"p",href:"/docs/6.2.0/custom-error-messages#dynamic-messages"},"Dynamic Messages"),"."))}m.isMDXComponent=!0}}]);