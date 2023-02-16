"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[103],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(5773),r=n(808),i=(n(7378),n(5318)),o=["components"],l={id:"sanitization-chain-api",title:"Sanitization Chain API"},s=void 0,u={unversionedId:"sanitization-chain-api",id:"version-6.10.0/sanitization-chain-api",title:"Sanitization Chain API",description:"The sanitization chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.10.0/api-sanitization-chain.md",sourceDirName:".",slug:"/sanitization-chain-api",permalink:"/docs/6.10.0/sanitization-chain-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.10.0/api-sanitization-chain.md",tags:[],version:"6.10.0",frontMatter:{id:"sanitization-chain-api",title:"Sanitization Chain API"},sidebar:"version-6.10.0/docs",previous:{title:"Sanitization middlewares",permalink:"/docs/6.10.0/filter-api"},next:{title:"matchedData()",permalink:"/docs/6.10.0/matched-data-api"}},p={},c=[{value:"Standard sanitizers",id:"standard-sanitizers",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.customSanitizer(sanitizer)</code>",id:"customsanitizersanitizer",level:3},{value:"<code>.default(default_value)</code>",id:"defaultdefault_value",level:3},{value:"<code>.replace(values_to_replace, new_value)</code>",id:"replacevalues_to_replace-new_value",level:3},{value:"<code>.run(req)</code>",id:"runreq",level:3},{value:"<code>.toArray()</code>",id:"toarray",level:3},{value:"<code>.toLowerCase()</code>",id:"tolowercase",level:3},{value:"<code>.toUpperCase()</code>",id:"touppercase",level:3}],d={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The sanitization chain is a middleware, and it ",(0,i.kt)("em",{parentName:"p"},"should")," be passed to an Express route handler."),(0,i.kt)("p",null,"You can add as many sanitizers to a chain as you need.\nWhen the middleware runs, it will modify each field in place, applying each of the sanitizers in the order they were specified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { body } = require('express-validator');\napp.get('/', body('trimMe').trim(), (req, res, next) => {\n  // If req.body.trimMe was originally \"  something \",\n  // its sanitized value will be \"something\"\n  console.log(req.body.trimMe);\n});\n")),(0,i.kt)("h2",{id:"standard-sanitizers"},"Standard sanitizers"),(0,i.kt)("p",null,'All sanitizers listed by validator.js are made available within a Sanitization Chain,\nand are called "standard sanitizers" in express-validator.'),(0,i.kt)("p",null,"This means you can use any of those methods, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"normalizeEmail"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"trim"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"toInt"),", etc."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"For a complete list of standard sanitizers and their options"),",\nplease check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/validatorjs/validator.js#sanitizers"},"validator.js' docs"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Since validator.js only accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," as input, any value (including arrays and objects) that needs to be sanitized by a Standard Sanitizer ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.10.0/faq#why-arrays-are-not-validatedsanitized-correctly"},"is first converted to such type"),".")),(0,i.kt)("h2",{id:"additional-methods"},"Additional methods"),(0,i.kt)("p",null,"In addition to the standard sanitizers, the following methods are also available within a Sanitization Chain:"),(0,i.kt)("h3",{id:"customsanitizersanitizer"},(0,i.kt)("inlineCode",{parentName:"h3"},".customSanitizer(sanitizer)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sanitizer(value, { req, location, path })"),": the custom sanitizer function.\nReceives the value of the field being sanitized, as well as the express request, the location and the field path.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")),(0,i.kt)("p",null,"Adds a custom sanitizer to the current sanitization chain. It must synchronously return the new value."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { param } = require('express-validator');\napp.get(\n  '/object/:id',\n  param('id').customSanitizer((value, { req }) => {\n    return req.query.type === 'user' ? ObjectId(value) : Number(value);\n  }),\n  objectHandler,\n);\n")),(0,i.kt)("h3",{id:"defaultdefault_value"},(0,i.kt)("inlineCode",{parentName:"h3"},".default(default_value)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")),(0,i.kt)("p",null,"Replaces the current value with a default one if the current value is included in ",(0,i.kt)("inlineCode",{parentName:"p"},"['', null, undefined, NaN]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', body('username').default('foo'), (req, res, next) => {\n  // 'bar'     => 'bar'\n  // ''        => 'foo'\n  // undefined => 'foo'\n  // null      => 'foo'\n  // NaN       => 'foo'\n});\n")),(0,i.kt)("h3",{id:"replacevalues_to_replace-new_value"},(0,i.kt)("inlineCode",{parentName:"h3"},".replace(values_to_replace, new_value)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")),(0,i.kt)("p",null,"Replaces the current value with a new one if the current value is included in a given Array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', body('username').replace(['bar', 'BAR'], 'foo'), (req, res, next) => {\n  // 'bar_' => 'bar_'\n  // 'bar'  => 'foo'\n  // 'BAR'  => 'foo'\n  console.log(req.body.username);\n});\n")),(0,i.kt)("h3",{id:"runreq"},(0,i.kt)("inlineCode",{parentName:"h3"},".run(req)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Returns:")," a promise that resolves when the sanitization chain ran.")),(0,i.kt)("p",null,"Runs the current sanitization chain in an imperative way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\napp.post('/create-post', async (req, res, next) => {\n  // BEFORE:\n  // req.body.content = ' hey your forum is amazing! <script>runEvilFunction();<\/script>    ';\n  await check('content').escape().trim().run(req);\n\n  // AFTER:\n  // req.body.content = 'hey your forum is amazing! &lt;script&gt;runEvilFunction();&lt;/script&gt;';\n});\n")),(0,i.kt)("h3",{id:"toarray"},(0,i.kt)("inlineCode",{parentName:"h3"},".toArray()")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")),(0,i.kt)("p",null,"Converts the value to an array. ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," will result in an empty array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', [body('checkboxes').toArray()], (req, res, next) => {\n  // ['foo', 'bar]  => ['foo', 'bar']\n  // 'foo'          => ['foo']\n  // undefined      => []\n  console.log(req.body.checkboxes);\n});\n")),(0,i.kt)("h3",{id:"tolowercase"},(0,i.kt)("inlineCode",{parentName:"h3"},".toLowerCase()")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")),(0,i.kt)("p",null,"Converts the value to lower case. Non string value will return itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', [body('username').toLowerCase()], (req, res, next) => {\n  // 'Foo'      => 'foo'\n  // undefined  => undefined\n  // null       => null\n  console.log(req.body.username);\n});\n")),(0,i.kt)("h3",{id:"touppercase"},(0,i.kt)("inlineCode",{parentName:"h3"},".toUpperCase()")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")),(0,i.kt)("p",null,"Converts the value to upper case. Non string value will return itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', [body('username').toUpperCase()], (req, res, next) => {\n  // 'Foo'      => 'FOO'\n  // undefined  => undefined\n  // null       => null\n  console.log(req.body.username);\n});\n")))}h.isMDXComponent=!0}}]);