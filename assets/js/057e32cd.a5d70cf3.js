"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7510],{9806:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var s=i(24246),a=i(71670),c=i(75857);const t={title:"checkSchema",toc_max_heading_level:4},l="checkSchema()",r={id:"api/check-schema",title:"checkSchema",description:"checkSchema()",source:"@site/../docs/api/check-schema.md",sourceDirName:"api",slug:"/api/check-schema",permalink:"/docs/next/api/check-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/../docs/api/check-schema.md",tags:[],version:"current",frontMatter:{title:"checkSchema",toc_max_heading_level:4},sidebar:"api",previous:{title:"checkExact",permalink:"/docs/next/api/check-exact"},next:{title:"oneOf",permalink:"/docs/next/api/one-of"}},d={},o=[{value:"<code>checkSchema()</code>",id:"checkschema",level:2},{value:"Manually running <code>checkSchema()</code>",id:"manually-running",level:3},{value:"<code>Schema</code>",id:"schema",level:2},{value:"Built-in Validators",id:"built-in-validators",level:3},{value:"<code>options</code>",id:"validator-options",level:4},{value:"<code>bail</code>",id:"bail",level:4},{value:"<code>if</code>",id:"if",level:4},{value:"<code>negated</code>",id:"negated",level:4},{value:"<code>errorMessage</code>",id:"validator-errormessage",level:4},{value:"Built-in Sanitizers",id:"built-in-sanitizers",level:3},{value:"<code>options</code>",id:"sanitizer-options",level:4},{value:"Field schema modifiers",id:"field-schema-modifiers",level:3},{value:"<code>in</code>",id:"in",level:4},{value:"<code>errorMessage</code>",id:"field-errormessage",level:4},{value:"<code>optional</code>",id:"optional",level:4},{value:"Custom validators/sanitizers",id:"custom-validators",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"checkschema",children:(0,s.jsx)(n.code,{children:"checkSchema()"})}),"\n",(0,s.jsx)(n.h2,{id:"checkschema",children:(0,s.jsx)(n.code,{children:"checkSchema()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema(schema: Schema, defaultLocations?: Location[]): ValidationChain[] & ContextRunner\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a list of ",(0,s.jsx)(n.a,{href:"/docs/next/api/validation-chain",children:"validation chains"})," based on the provided ",(0,s.jsx)(n.a,{href:"#schema",children:(0,s.jsx)(n.code,{children:"schema"})}),",\nwhich can then be passed to an express.js route for validation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"app.post(\n  '/signup',\n  checkSchema({\n    email: { isEmail: true },\n    password: { isLength: { options: { min: 8 } } },\n  }),\n  (req, res) => {\n    // Handle request\n  },\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, all specified fields are validated in all request locations (all of ",(0,s.jsx)(n.code,{children:"body"}),", ",(0,s.jsx)(n.code,{children:"cookies"}),", ",(0,s.jsx)(n.code,{children:"headers"}),", ",(0,s.jsx)(n.code,{children:"params"})," and ",(0,s.jsx)(n.code,{children:"query"}),").",(0,s.jsx)(n.br,{}),"\n","This list can be changed by specifying the ",(0,s.jsx)(n.code,{children:"defaultLocations"})," parameter. For example, to validate fields by default in ",(0,s.jsx)(n.code,{children:"body"})," and ",(0,s.jsx)(n.code,{children:"query"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema(schema, ['body', 'query']);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also fine tune the locations checked for each field by setting the ",(0,s.jsxs)(n.a,{href:"#in",children:[(0,s.jsx)(n.code,{children:"in"})," property"]}),", which takes precedence over the ",(0,s.jsx)(n.code,{children:"defaultLocations"})," parameter."]}),"\n",(0,s.jsxs)(n.h3,{id:"manually-running",children:["Manually running ",(0,s.jsx)(n.code,{children:"checkSchema()"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"checkSchema()"})," returns a middleware, which makes it ideal to pass to an express.js route.\nBut since it also implements the ",(0,s.jsx)(n.a,{href:"/docs/next/api/misc#contextrunner",children:(0,s.jsx)(n.code,{children:"ContextRunner"})})," interface,\nyou can also run it manually, if you wish."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"app.post('/signup', async (req, res) => {\n  const result = await checkSchema({\n    email: { isEmail: true },\n    password: { isLength: { options: { min: 8 } } },\n  }).run(req);\n\n  if (!result.isEmpty()) {\n    console.log('Failed validation');\n  }\n});\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/next/guides/manually-running",children:'"Manually running validations" guide'})," to learn more."]})}),"\n",(0,s.jsx)(n.h2,{id:"schema",children:(0,s.jsx)(n.code,{children:"Schema"})}),"\n",(0,s.jsxs)(n.p,{children:["The schema is a simple object from ",(0,s.jsx)(n.a,{href:"/docs/next/guides/field-selection",children:"field paths"})," to field schemas. The field paths define which fields get selected for validation, and the schema defines how those fields get validated."]}),"\n",(0,s.jsx)(n.p,{children:"A field schema is an object whose keys can be a mix of one or more of"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#built-in-validators",children:"built-in validators"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#built-in-sanitizers",children:"built-in sanitizers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#field-schema-modifiers",children:"field modifiers"})}),"\n",(0,s.jsxs)(n.li,{children:["or any other name, meaning it's either a ",(0,s.jsx)(n.a,{href:"#custom-validators",children:"custom validator or custom sanitizer"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the object keys are none of the above, then it has to be a ",(0,s.jsx)(n.a,{href:"#custom-schema",children:"custom schema"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"built-in-validators",children:"Built-in Validators"}),"\n",(0,s.jsxs)(n.p,{children:["Any of the ",(0,s.jsx)(n.a,{href:"/docs/next/api/validation-chain#built-in-validators",children:"built-in validators"})," can be used in a field schema."]}),"\n",(0,s.jsxs)(n.p,{children:["If the built-in validator is set to ",(0,s.jsx)(n.code,{children:"true"}),", then it's turned on without any options:"]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  email: { isEmail: true },\n  password: { notEmpty: true },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('email').isEmail();\ncheck('password').notEmpty();\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The value may also be an object, in which case the validator is turned on with additional configurations:"}),"\n",(0,s.jsx)(n.h4,{id:"validator-options",children:(0,s.jsx)(n.code,{children:"options"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets the options of the validator. If there are multiple options, then ",(0,s.jsx)(n.code,{children:"options"})," must be an array.\nOtherwise, you can pass the value directly."]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  phone: {\n    isMobilePhone: {\n      options: ['any', { strictMode: true }],\n    },\n  },\n  password: {\n    isLength: {\n      options: { min: 8 },\n    },\n  },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('phone').isMobilePhone('any', {\n  strictMode: true,\n});\ncheck('password').isLength({ min: 8 });\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["If the only option to be passed to the validator is an array, then it must be wrapped in another array.\nThis is usually the case of ",(0,s.jsx)(n.code,{children:"isIn"}),"; for example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  weekend: {\n    // \ud83d\udc4e Translates to `isIn('saturday', 'sunday')`\n    isIn: { options: ['saturday', 'sunday'] },\n    // \ud83d\udc4d Translates to `isIn(['saturday', 'sunday'])`\n    isIn: { options: [['saturday', 'sunday']] },\n  },\n});\n"})})]}),"\n",(0,s.jsx)(n.h4,{id:"bail",children:(0,s.jsx)(n.code,{children:"bail"})}),"\n",(0,s.jsxs)(n.p,{children:["Stop running the validation chain if the current validator (or any of the previous validators) failed.\nEquivalent to using ",(0,s.jsxs)(n.a,{href:"/docs/next/api/validation-chain#bail",children:[(0,s.jsx)(n.code,{children:".bail()"})," on a validation chain"]}),"."]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  email: {\n    // isEmail is run first. If the email isn't valid, then the\n    // custom validator `checkEmailNotInUse` won't run\n    isEmail: { bail: true },\n    custom: { options: checkEmailNotInUse },\n  },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('email').isEmail().bail().custom(checkEmailNotInUse);\n"})})})]}),"\n",(0,s.jsx)(n.h4,{id:"if",children:(0,s.jsx)(n.code,{children:"if"})}),"\n",(0,s.jsxs)(n.p,{children:["Adds a condition on whether the field's validators should continue running.\nEquivalent to using ",(0,s.jsxs)(n.a,{href:"/docs/next/api/validation-chain#if",children:[(0,s.jsx)(n.code,{children:".if()"})," on a validation chain"]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"if"})," is applied ",(0,s.jsx)(n.em,{children:"before"})," the current validator. This means that if its condition isn't met,\nthen that validator and following validators won't run."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  newPassword: {\n    exists: {\n      // With a custom validator\n      if: (value, { req }) => !!req.body.oldPassword,\n\n      // With a validation chain\n      if: body('oldPassword').notEmpty(),\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"negated",children:(0,s.jsx)(n.code,{children:"negated"})}),"\n",(0,s.jsxs)(n.p,{children:["Negates the validator. Equivalent to using ",(0,s.jsxs)(n.a,{href:"/docs/next/api/validation-chain#not",children:[(0,s.jsx)(n.code,{children:".not()"})," on a validation chain"]}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  password: {\n    // Check if password is not empty\n    isEmpty: { negated: true },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"validator-errormessage",children:(0,s.jsx)(n.code,{children:"errorMessage"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets the error message for a validator.\nEquivalent to using ",(0,s.jsxs)(n.a,{href:"/docs/next/api/validation-chain#withmessage",children:[(0,s.jsx)(n.code,{children:".withMessage()"})," on a validation chain"]}),"."]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  email: {\n    isEmail: {\n      errorMessage: 'Must be a valid e-mail address',\n    },\n  },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('email').isEmail().withMessage('Must be a valid e-mail address');\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"built-in-sanitizers",children:"Built-in Sanitizers"}),"\n",(0,s.jsxs)(n.p,{children:["Any of the ",(0,s.jsx)(n.a,{href:"/docs/next/api/validation-chain#built-in-sanitizers",children:"built-in sanitizers"})," can be used in a field schema."]}),"\n",(0,s.jsxs)(n.p,{children:["If the built-in sanitizer is set to ",(0,s.jsx)(n.code,{children:"true"}),", then it's turned on without any options:"]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  query: { trim: true },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('query').trim();\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The value may also be an object, in which case the sanitizer is turned on with additional configurations:"}),"\n",(0,s.jsx)(n.h4,{id:"sanitizer-options",children:(0,s.jsx)(n.code,{children:"options"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets the options of the sanitizer. If there are multiple options, then ",(0,s.jsx)(n.code,{children:"options"})," must be an array.\nOtherwise, you can pass the value directly."]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  email: {\n    normalizeEmail: {\n      options: { gmail_remove_subaddress: true },\n    },\n  },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('email').normalizeEmail({\n  gmail_remove_subaddress: true,\n});\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"field-schema-modifiers",children:"Field schema modifiers"}),"\n",(0,s.jsx)(n.p,{children:"The following properties can be specified in the schema of a field to modify its general behavior:"}),"\n",(0,s.jsx)(n.h4,{id:"in",children:(0,s.jsx)(n.code,{children:"in"})}),"\n",(0,s.jsx)(n.p,{children:"Defines the location(s) in which to validate the field.\nTo validate that a field exists in either the body or in the query string, the following schema can be written:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  field: {\n    in: ['body', 'query'],\n    exists: true,\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"field-errormessage",children:(0,s.jsx)(n.code,{children:"errorMessage"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets the default error message for the field's validators.",(0,s.jsx)(n.br,{}),"\n","Used when a validator doesn't specify ",(0,s.jsxs)(n.a,{href:"#validator-errormessage",children:[(0,s.jsx)(n.code,{children:"errorMessage"})," in its own configurations"]}),"."]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  password: {\n    errorMessage: 'The password must be at least 8 characters, and must contain a symbol',\n    isLength: { options: { min: 8 } },\n    matches: { options: /[-_$#]/ },\n  },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('password', 'The password must be at least 8 characters, and must contain a symbol')\n  .isLength({ min: 8 })\n  .matches(/[-_$#]/);\n"})})})]}),"\n",(0,s.jsx)(n.h4,{id:"optional",children:(0,s.jsx)(n.code,{children:"optional"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets the optional modifier on the field. Equivalent to using ",(0,s.jsxs)(n.a,{href:"/docs/next/api/validation-chain#optional",children:[(0,s.jsx)(n.code,{children:".optional()"})," on a validation chain"]}),"."]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  query: {\n    optional: true,\n    isLength: { options: { min: 3 } },\n  },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('query').optional().isLength({ min: 3 });\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"custom-validators",children:"Custom validators/sanitizers"}),"\n",(0,s.jsxs)(n.p,{children:["There are two ways of defining custom validators or sanitizers using ",(0,s.jsx)(n.code,{children:"checkSchema()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The first way is to set ",(0,s.jsx)(n.code,{children:"custom"})," or ",(0,s.jsx)(n.code,{children:"customSanitizer"})," in a field's schema.\nThese work exactly like any other ",(0,s.jsx)(n.a,{href:"#built-in-validators",children:"validator"})," or ",(0,s.jsx)(n.a,{href:"#built-in-sanitizers",children:"sanitizer"})," in the schema:"]}),"\n",(0,s.jsxs)(c.$L,{children:[(0,s.jsx)(c.Y$,{title:"checkSchema() usage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  email: {\n    custom: {\n      options: checkIfEmailExists,\n      bail: true,\n    },\n    customSanitizer: {\n      options: removeEmailAttribute,\n    },\n  },\n});\n"})})}),(0,s.jsx)(c.Y$,{title:"Validation chain equivalent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"check('email').custom(checkIfEmailExists).bail().customSanitizer(removeEmailAttribute);\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["While this works fine, it's only possible to set a single custom validator/sanitizer when using schemas.\nThe reason for this is simple:\n",(0,s.jsx)(n.strong,{children:"objects in JavaScript cannot have duplicated keys"})," (well, they can, but only the last one will apply)."]}),"\n",(0,s.jsxs)(n.p,{children:["For this reason, it's possible to use multiple custom validators/sanitizers in ",(0,s.jsx)(n.code,{children:"checkSchema()"})," by\nsetting in the field schema a key which isn't any of the ",(0,s.jsx)(n.a,{href:"#built-in-validators",children:"built-in validators"}),",\n",(0,s.jsx)(n.a,{href:"#built-in-sanitizers",children:"sanitizers"})," or ",(0,s.jsx)(n.a,{href:"#field-schema-modifiers",children:"modifiers"}),".",(0,s.jsx)(n.br,{}),"\n","These keys must be an object with a single ",(0,s.jsx)(n.code,{children:"custom"})," or ",(0,s.jsx)(n.code,{children:"customSanitizer"})," function."]}),"\n",(0,s.jsx)(n.p,{children:"The previous example can be rewritten like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"checkSchema({\n  email: {\n    emailNotInUse: {\n      custom: checkEmailNotInUse,\n      bail: true,\n    },\n    removeEmailAttribute: {\n      customSanitizer: removeEmailAttribute,\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The name of the custom validator/sanitizer is not used by ",(0,s.jsx)(n.code,{children:"checkSchema()"}),".\nDifferent schemas can make use of the same custom name without clash."]})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},75857:(e,n,i)=>{i.d(n,{Kv:()=>r,Y$:()=>t,$L:()=>c,yV:()=>l});i(27378);const s={example:"example_yN0T",exampleTitle:"exampleTitle_uU28"};var a=i(24246),c=function(e){var n=e.children;return(0,a.jsx)("div",{className:s.example,children:n})},t=function(e){var n=e.title,i=e.children;return(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{className:s.exampleTitle,children:n}),i]})};function l(e){var n=e.children;return(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{className:s.exampleTitle,children:"Usage example"}),n]})}function r(e){var n=e.children;return(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{className:s.exampleTitle,children:"Error example"}),n]})}},71670:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var s=i(27378);const a={},c=s.createContext(a);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);