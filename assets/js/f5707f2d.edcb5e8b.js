"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9677],{49840:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(24246),a=i(71670);const s={id:"sanitization-chain-api",title:"Sanitization Chain API"},r=void 0,o={id:"sanitization-chain-api",title:"Sanitization Chain API",description:"The sanitization chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.1.0/api-sanitization-chain.md",sourceDirName:".",slug:"/sanitization-chain-api",permalink:"/docs/6.1.0/sanitization-chain-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.1.0/api-sanitization-chain.md",tags:[],version:"6.1.0",frontMatter:{id:"sanitization-chain-api",title:"Sanitization Chain API"},sidebar:"api",previous:{title:"Sanitization middlewares",permalink:"/docs/6.1.0/filter-api"},next:{title:"matchedData()",permalink:"/docs/6.1.0/matched-data-api"}},d={},c=[{value:"Standard sanitizers",id:"standard-sanitizers",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.customSanitizer(sanitizer)</code>",id:"customsanitizersanitizer",level:3},{value:"<code>.run(req)</code>",id:"runreq",level:3},{value:"<code>.toArray()</code>",id:"toarray",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The sanitization chain is a middleware, and it ",(0,t.jsx)(n.em,{children:"should"})," be passed to an Express route handler."]}),"\n",(0,t.jsx)(n.p,{children:"You can add as many sanitizers to a chain as you need.\nWhen the middleware runs, it will modify each field in place, applying each of the sanitizers in the order they were specified:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.get('/', sanitizeBody('trimMe').trim(), (req, res, next) => {\n  // If req.body.trimMe was originally \"  something \",\n  // its sanitized value will be \"something\"\n  console.log(req.body.trimMe);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"standard-sanitizers",children:"Standard sanitizers"}),"\n",(0,t.jsx)(n.p,{children:'All sanitizers listed by validator.js are made available within a Sanitization Chain,\nand are called "standard sanitizers" in express-validator.'}),"\n",(0,t.jsxs)(n.p,{children:["This means you can use any of those methods, e.g. ",(0,t.jsx)(n.code,{children:"normalizeEmail"}),", ",(0,t.jsx)(n.code,{children:"trim"}),", ",(0,t.jsx)(n.code,{children:"toInt"}),", etc."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For a complete list of standard sanitizers and their options"}),",\nplease check ",(0,t.jsx)(n.a,{href:"https://github.com/chriso/validator.js#sanitizers",children:"validator.js' docs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-methods",children:"Additional methods"}),"\n",(0,t.jsx)(n.p,{children:"In addition to the standard sanitizers, the following methods are also available within a Sanitization Chain:"}),"\n",(0,t.jsx)(n.h3,{id:"customsanitizersanitizer",children:(0,t.jsx)(n.code,{children:".customSanitizer(sanitizer)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sanitizer(value, { req, location, path })"}),": the custom sanitizer function.\nReceives the value of the field being sanitized, as well as the express request, the location and the field path."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Adds a custom sanitizer to the current sanitization chain. It must synchronously return the new value."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.get('/object/:id', sanitizeParam('id').customSanitizer((value, { req }) => {\n  return req.query.type === 'user' ? ObjectId(value) : Number(value);\n}), objectHandler)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"runreq",children:(0,t.jsx)(n.code,{children:".run(req)"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Returns:"})," a promise that resolves when the sanitization chain ran."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Runs the current sanitization chain in an imperative way."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.post('/create-post', async (req, res, next) => {\n  // BEFORE:\n  // req.body.content = ' hey your forum is amazing! <script>runEvilFunction();<\/script>    ';\n  await sanitize('content').escape().trim().run(req);\n\n  // AFTER:\n  // req.body.content = 'hey your forum is amazing! &lt;script&gt;runEvilFunction();&lt;/script&gt;';\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"toarray",children:(0,t.jsx)(n.code,{children:".toArray()"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Returns:"})," the current sanitization chain instance"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Converts the value to an array. ",(0,t.jsx)(n.code,{children:"undefined"})," will result in an empty array."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.post('/', [body('checkboxes').toArray()], (req, res, next) => {\n  // ['foo', 'bar]  => ['foo', 'bar']\n  // 'foo'          => ['foo']\n  // undefined      => []\n  console.log(req.body.checkboxes);\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(27378);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);