"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3479],{89300:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var a=i(24246),s=i(71670);const t={id:"sanitization-chain-api",title:"Sanitization Chain API"},r=void 0,o={id:"sanitization-chain-api",title:"Sanitization Chain API",description:"The sanitization chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.9.0/api-sanitization-chain.md",sourceDirName:".",slug:"/sanitization-chain-api",permalink:"/docs/6.9.0/sanitization-chain-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.9.0/api-sanitization-chain.md",tags:[],version:"6.9.0",frontMatter:{id:"sanitization-chain-api",title:"Sanitization Chain API"},sidebar:"api",previous:{title:"Sanitization middlewares",permalink:"/docs/6.9.0/filter-api"},next:{title:"matchedData()",permalink:"/docs/6.9.0/matched-data-api"}},l={},d=[{value:"Standard sanitizers",id:"standard-sanitizers",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.customSanitizer(sanitizer)</code>",id:"customsanitizersanitizer",level:3},{value:"<code>.default(default_value)</code>",id:"defaultdefault_value",level:3},{value:"<code>.replace(values_to_replace, new_value)</code>",id:"replacevalues_to_replace-new_value",level:3},{value:"<code>.run(req)</code>",id:"runreq",level:3},{value:"<code>.toArray()</code>",id:"toarray",level:3},{value:"<code>.toLowerCase()</code>",id:"tolowercase",level:3},{value:"<code>.toUpperCase()</code>",id:"touppercase",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The sanitization chain is a middleware, and it ",(0,a.jsx)(n.em,{children:"should"})," be passed to an Express route handler."]}),"\n",(0,a.jsx)(n.p,{children:"You can add as many sanitizers to a chain as you need.\nWhen the middleware runs, it will modify each field in place, applying each of the sanitizers in the order they were specified:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { body } = require('express-validator');\napp.get('/', body('trimMe').trim(), (req, res, next) => {\n  // If req.body.trimMe was originally \"  something \",\n  // its sanitized value will be \"something\"\n  console.log(req.body.trimMe);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"standard-sanitizers",children:"Standard sanitizers"}),"\n",(0,a.jsx)(n.p,{children:'All sanitizers listed by validator.js are made available within a Sanitization Chain,\nand are called "standard sanitizers" in express-validator.'}),"\n",(0,a.jsxs)(n.p,{children:["This means you can use any of those methods, e.g. ",(0,a.jsx)(n.code,{children:"normalizeEmail"}),", ",(0,a.jsx)(n.code,{children:"trim"}),", ",(0,a.jsx)(n.code,{children:"toInt"}),", etc."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"For a complete list of standard sanitizers and their options"}),",\nplease check ",(0,a.jsx)(n.a,{href:"https://github.com/chriso/validator.js#sanitizers",children:"validator.js' docs"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"additional-methods",children:"Additional methods"}),"\n",(0,a.jsx)(n.p,{children:"In addition to the standard sanitizers, the following methods are also available within a Sanitization Chain:"}),"\n",(0,a.jsx)(n.h3,{id:"customsanitizersanitizer",children:(0,a.jsx)(n.code,{children:".customSanitizer(sanitizer)"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sanitizer(value, { req, location, path })"}),": the custom sanitizer function.\nReceives the value of the field being sanitized, as well as the express request, the location and the field path."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Adds a custom sanitizer to the current sanitization chain. It must synchronously return the new value."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { param } = require('express-validator');\napp.get(\n  '/object/:id',\n  param('id').customSanitizer((value, { req }) => {\n    return req.query.type === 'user' ? ObjectId(value) : Number(value);\n  }),\n  objectHandler,\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"defaultdefault_value",children:(0,a.jsx)(n.code,{children:".default(default_value)"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Replaces the current value with a default one if the current value is included in ",(0,a.jsx)(n.code,{children:"['', null, undefined, NaN]"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"app.post('/', body('username').default('foo'), (req, res, next) => {\n  // 'bar'     => 'bar'\n  // ''        => 'foo'\n  // undefined => 'foo'\n  // null      => 'foo'\n  // NaN       => 'foo'\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"replacevalues_to_replace-new_value",children:(0,a.jsx)(n.code,{children:".replace(values_to_replace, new_value)"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Replaces the current value with a new one if the current value is included in a given Array."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"app.post('/', body('username').replace(['bar', 'BAR'], 'foo'), (req, res, next) => {\n  // 'bar_' => 'bar_'\n  // 'bar'  => 'foo'\n  // 'BAR'  => 'foo'\n  console.log(req.body.username);\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"runreq",children:(0,a.jsx)(n.code,{children:".run(req)"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Returns:"})," a promise that resolves when the sanitization chain ran."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Runs the current sanitization chain in an imperative way."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { check } = require('express-validator');\napp.post('/create-post', async (req, res, next) => {\n  // BEFORE:\n  // req.body.content = ' hey your forum is amazing! <script>runEvilFunction();<\/script>    ';\n  await check('content').escape().trim().run(req);\n\n  // AFTER:\n  // req.body.content = 'hey your forum is amazing! &lt;script&gt;runEvilFunction();&lt;/script&gt;';\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"toarray",children:(0,a.jsx)(n.code,{children:".toArray()"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Converts the value to an array. ",(0,a.jsx)(n.code,{children:"undefined"})," will result in an empty array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"app.post('/', [body('checkboxes').toArray()], (req, res, next) => {\n  // ['foo', 'bar]  => ['foo', 'bar']\n  // 'foo'          => ['foo']\n  // undefined      => []\n  console.log(req.body.checkboxes);\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"tolowercase",children:(0,a.jsx)(n.code,{children:".toLowerCase()"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Converts the value to lower case. Non string value will return itself."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"app.post('/', [body('username').toLowerCase()], (req, res, next) => {\n  // 'Foo'      => 'foo'\n  // undefined  => undefined\n  // null       => null\n  console.log(req.body.username);\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"touppercase",children:(0,a.jsx)(n.code,{children:".toUpperCase()"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Converts the value to upper case. Non string value will return itself."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"app.post('/', [body('username').toUpperCase()], (req, res, next) => {\n  // 'Foo'      => 'FOO'\n  // undefined  => undefined\n  // null       => null\n  console.log(req.body.username);\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var a=i(27378);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);