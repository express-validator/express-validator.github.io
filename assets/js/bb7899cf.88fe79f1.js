"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3015],{53069:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=a(62540),t=a(43023);a(78296),a(22491);const r={title:"Customizing express-validator"},i=void 0,o={id:"guides/customizing",title:"Customizing express-validator",description:"If the application you're building is anything but a very simple one, you'll need validators,",source:"@site/versioned_docs/version-7.0.0/guides/customizing.md",sourceDirName:"guides",slug:"/guides/customizing",permalink:"/docs/7.0.0/guides/customizing",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-7.0.0/guides/customizing.md",tags:[],version:"7.0.0",frontMatter:{title:"Customizing express-validator"},sidebar:"docs",previous:{title:"Field Selection",permalink:"/docs/7.0.0/guides/field-selection"},next:{title:"Manually running validations",permalink:"/docs/7.0.0/guides/manually-running"}},l={},d=[{value:"Custom Validators and Sanitizers",id:"custom-validators-and-sanitizers",level:2},{value:"Implementing a custom validator",id:"implementing-a-custom-validator",level:3},{value:"Implementing a custom sanitizer",id:"implementing-a-custom-sanitizer",level:3},{value:"Error Messages",id:"error-messages",level:2},{value:"Validator-level message",id:"validator-level-message",level:3},{value:"Custom validator-level message",id:"custom-validator-level-message",level:3},{value:"Field-level message",id:"field-level-message",level:3},{value:"Other error messages",id:"other-error-messages",level:3},{value:"The <code>ExpressValidator</code> class",id:"the-expressvalidator-class",level:2},{value:"Typescript support",id:"typescript-support",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"If the application you're building is anything but a very simple one, you'll need validators,\nsanitizers and error messages beyond the ones built into express-validator sooner or later."}),"\n",(0,s.jsx)(n.p,{children:"That's why it has a number of ways in which it can be customized, some of which are introduced on this page."}),"\n",(0,s.jsx)(n.h2,{id:"custom-validators-and-sanitizers",children:"Custom Validators and Sanitizers"}),"\n",(0,s.jsx)(n.p,{children:"A classic need that express-validator can't fulfill for you, and that you might run into,\nis validating whether an e-mail address is in use or not when a user signing up."}),"\n",(0,s.jsx)(n.p,{children:"It's possible to do this in express-validator by implementing a custom validator."}),"\n",(0,s.jsx)(n.p,{children:"Custom validators are simple functions that receive the field value and some information about it,\nand have to return a value that will determine if the field is valid or not."}),"\n",(0,s.jsx)(n.p,{children:"Custom sanitizers are similar, except that they instead transform the value of the field."}),"\n",(0,s.jsx)(n.h3,{id:"implementing-a-custom-validator",children:"Implementing a custom validator"}),"\n",(0,s.jsx)(n.p,{children:"Custom validators must return a truthy value to indicate that the field is valid, or falsy to indicate it's invalid."}),"\n",(0,s.jsx)(n.p,{children:"Custom validators can be asynchronous, in which case it can return a promise. The returned promise is awaited on, and it must resolve in order for the field to be valid. If it rejects, the field is deemed invalid."}),"\n",(0,s.jsx)(n.p,{children:"If a custom validator throws, it's also considered invalid."}),"\n",(0,s.jsx)(n.p,{children:"For example, in order to check that an e-mail is not in use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"app.post(\n  '/create-user',\n  body('email').custom(async value => {\n    const user = await UserCollection.findUserByEmail(value);\n    if (user) {\n      throw new Error('E-mail already in use');\n    }\n  }),\n  (req, res) => {\n    // Handle the request\n  },\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or maybe you could also verify that the password matches the repeat:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"app.post(\n  '/create-user',\n  body('password').isLength({ min: 5 }),\n  body('passwordConfirmation').custom((value, { req }) => {\n    return value === req.body.password;\n  }),\n  (req, res) => {\n    // Handle request\n  },\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"implementing-a-custom-sanitizer",children:"Implementing a custom sanitizer"}),"\n",(0,s.jsx)(n.p,{children:"Custom sanitizers don't have many rules. Whatever the value that they return, is the value that the field will acquire."}),"\n",(0,s.jsx)(n.p,{children:"Custom sanitizers can also be asynchronous, so if they return a promise, the promise will be awaited on, and the resolved value is set on the field."}),"\n",(0,s.jsxs)(n.p,{children:["For example, suppose that you'd like to convert an ID from string to the ",(0,s.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/method/ObjectId/",children:"MongoDB ObjectId"})," format:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { param } from 'express-validator';\nimport { ObjectId } from 'mongodb';\n\napp.post(\n  '/user/:id',\n  param('id').customSanitizer(value => ObjectId(value)),\n  (req, res) => {\n    // req.params.id is an ObjectId now\n  },\n);\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["If you don't return from a custom sanitizer, your field will become ",(0,s.jsx)(n.code,{children:"undefined"}),"!"]})}),"\n",(0,s.jsx)(n.h2,{id:"error-messages",children:"Error Messages"}),"\n",(0,s.jsxs)(n.p,{children:["Whenever a field value is invalid, an error message is recorded for it.",(0,s.jsx)("br",{}),"\nThe default error message is ",(0,s.jsx)(n.code,{children:"Invalid value"}),", which is not descriptive at all of what the error is,\nso you might need to customize it. There are a few ways to do that:"]}),"\n",(0,s.jsx)(n.h3,{id:"validator-level-message",children:"Validator-level message"}),"\n",(0,s.jsxs)(n.p,{children:["A validator-level message applies only when the field fails a specific validator.\nThis can be done by using the ",(0,s.jsxs)(n.a,{href:"/docs/7.0.0/api/validation-chain#withmessage",children:[(0,s.jsx)(n.code,{children:".withMessage()"})," method"]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"body('email').isEmail().withMessage('Not a valid e-mail address');\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-validator-level-message",children:"Custom validator-level message"}),"\n",(0,s.jsx)(n.p,{children:"If a custom validator throws, the thrown value will be used as its error message."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"body('email')\n  .isEmail()\n  .custom(async value => {\n    const existingUser = await Users.findByEmail(value);\n    if (existingUser) {\n      // Will use the below as the error message\n      throw new Error('A user already exists with this e-mail address');\n    }\n  });\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Specifying a message using ",(0,s.jsx)(n.code,{children:".withMessage()"})," will have precedence over the thrown value from the\ncustom validator."]})}),"\n",(0,s.jsx)(n.h3,{id:"field-level-message",children:"Field-level message"}),"\n",(0,s.jsx)(n.p,{children:"A field-level message is set when you create the validation chain. It's used as a fallback message\nwhen a validator doesn't override its error message."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"body('json_string', 'Invalid json_string')\n  // No message specified for isJSON, so use the default \"Invalid json_string\"\n  .isJSON()\n  .isLength({ max: 100 })\n  // Overrides the default message when `isLength` fails\n  .withMessage('Max length is 100 bytes');\n"})}),"\n",(0,s.jsx)(n.h3,{id:"other-error-messages",children:"Other error messages"}),"\n",(0,s.jsx)(n.p,{children:"Some express-vaildator functions might create a different error type, and they offer a different way\nto specify an error message:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/7.0.0/api/check-exact",children:(0,s.jsx)(n.code,{children:"checkExact()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/7.0.0/api/one-of",children:(0,s.jsx)(n.code,{children:"oneOf()"})})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"the-expressvalidator-class",children:["The ",(0,s.jsx)(n.code,{children:"ExpressValidator"})," class"]}),"\n",(0,s.jsxs)(n.p,{children:["A useful way to reuse certain customizations is to use the ",(0,s.jsx)(n.code,{children:"ExpressValidator"})," class."]}),"\n",(0,s.jsxs)(n.p,{children:["It contains all the functions that you can import directly from express-validator:\n",(0,s.jsx)(n.code,{children:"body"}),", ",(0,s.jsx)(n.code,{children:"matchedData"}),", ",(0,s.jsx)(n.code,{children:"oneOf"}),", ",(0,s.jsx)(n.code,{children:"validationResult"}),", etc, but with customizations that you specify when\ninstantiating it.",(0,s.jsx)("br",{}),"\nFor example, ",(0,s.jsx)(n.a,{href:"#custom-validators-and-sanitizers",children:"custom validators, sanitizers"}),", or\n",(0,s.jsx)(n.a,{href:"/docs/7.0.0/api/validation-result#errorformatter",children:"error formatter"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { ExpressValidator } from 'express-validator';\n\nconst { body, validationResult } = new ExpressValidator(\n  {\n    isPostID: async value => {\n      // Verify if the value matches the post ID format\n    },\n  },\n  {\n    muteOffensiveWords: value => {\n      // Replace offensive words with ***\n    },\n  },\n);\n\napp.post(\n  '/forum/:post/comment',\n  param('post').isPostID(),\n  body('comment').muteOffensiveWords(),\n  (req, res) => {\n    const result = validationResult(req);\n    // Handle new post validation result\n  },\n);\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can check out the ",(0,s.jsxs)(n.a,{href:"/docs/7.0.0/api/express-validator",children:["full API of ",(0,s.jsx)(n.code,{children:"ExpressValidator"})]}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"typescript-support",children:"Typescript support"}),"\n",(0,s.jsxs)(n.p,{children:["A couple of custom types can be created matching exactly the type of your ",(0,s.jsx)(n.code,{children:"ExpressValidator"})," instance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { ExpressValidator, CustomValidationChain, CustomSchema } from 'express-validator';\n\nconst myExpressValidator = new ExpressValidator({ isEmailNotInUse });\nconst { body, checkSchema } = myExpressValidator;\n\ntype MyValidationChain = CustomValidationChain<typeof myExpressValidator>;\ntype MySchema = CustomSchema<typeof myExpressValidator>;\n\nconst createEmailChain = (): MyValidationChain => body('email').isEmail().isEmailNotInUse();\nconst signupSchema: MySchema = {\n  email: {\n    isEmail: true,\n    isEmailNotInUse: true,\n  },\n};\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},22491:(e,n,a)=>{a.d(n,{A:()=>i});a(63696);var s=a(11750);const t={tabItem:"tabItem_wHwb"};var r=a(62540);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:a,children:n})}},78296:(e,n,a)=>{a.d(n,{A:()=>w});var s=a(63696),t=a(11750),r=a(90766),i=a(49519),o=a(14395),l=a(35043),d=a(44544),u=a(48708);function c(e){var n,a;return null!=(n=null==(a=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function h(e){var n=e.values,a=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,d.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId,r=(0,i.W6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,s=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:a,groupId:t});return[(0,l.aZ)(o),(0,s.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function v(e){var n,a,t,r,i=e.defaultValue,l=e.queryString,d=void 0!==l&&l,c=e.groupId,v=h(e),f=(0,s.useState)((function(){return function(e){var n,a=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var t=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:v})})),g=f[0],x=f[1],b=p({queryString:d,groupId:c}),y=b[0],j=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,u.Dv)(n),t=a[0],r=a[1],[t,(0,s.useCallback)((function(e){n&&r.set(e)}),[n,r])]),I=w[0],E=w[1],V=function(){var e=null!=y?y:I;return m({value:e,tabValues:v})?e:null}();return(0,o.A)((function(){V&&x(V)}),[V]),{selectedValue:g,selectValue:(0,s.useCallback)((function(e){if(!m({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);x(e),j(e),E(e)}),[j,E,v]),tabValues:v}}var f=a(86681);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=a(62540);function b(e){var n=e.className,a=e.block,s=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],d=(0,r.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,a=l.indexOf(n),t=o[a].value;t!==s&&(d(n),i(t))},c=function(e){var n,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var s,t=l.indexOf(e.currentTarget)+1;a=null!=(s=l[t])?s:l[0];break;case"ArrowLeft":var r,i=l.indexOf(e.currentTarget)-1;a=null!=(r=l[i])?r:l[l.length-1]}null==(n=a)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:o.map((function(e){var n=e.value,a=e.label,r=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return l.push(e)},onKeyDown:c,onClick:u},r,{className:(0,t.A)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=a?a:n}),n)}))})}function y(e){var n=e.lazy,a=e.children,t=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=r.find((function(e){return e.props.value===t}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function j(e){var n=v(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,x.jsx)(b,Object.assign({},e,n)),(0,x.jsx)(y,Object.assign({},e,n))]})}function w(e){var n=(0,f.A)();return(0,x.jsx)(j,Object.assign({},e,{children:c(e.children)}),String(n))}},43023:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var s=a(63696);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);