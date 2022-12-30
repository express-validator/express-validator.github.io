"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[668],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(5773),i=n(808),r=(n(7378),n(5318)),o=["components"],s={id:"sanitization-chain-api",title:"Sanitization Chain API"},l=void 0,c={unversionedId:"sanitization-chain-api",id:"version-6.5.0/sanitization-chain-api",title:"Sanitization Chain API",description:"The sanitization chain is a middleware, and it should be passed to an Express route handler.",source:"@site/versioned_docs/version-6.5.0/api-sanitization-chain.md",sourceDirName:".",slug:"/sanitization-chain-api",permalink:"/docs/6.5.0/sanitization-chain-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.5.0/api-sanitization-chain.md",tags:[],version:"6.5.0",frontMatter:{id:"sanitization-chain-api",title:"Sanitization Chain API"},sidebar:"version-6.5.0/docs",previous:{title:"Sanitization middlewares",permalink:"/docs/6.5.0/filter-api"},next:{title:"matchedData()",permalink:"/docs/6.5.0/matched-data-api"}},p={},d=[{value:"Standard sanitizers",id:"standard-sanitizers",level:2},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>.customSanitizer(sanitizer)</code>",id:"customsanitizersanitizer",level:3},{value:"<code>.run(req)</code>",id:"runreq",level:3},{value:"<code>.toArray()</code>",id:"toarray",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The sanitization chain is a middleware, and it ",(0,r.kt)("em",{parentName:"p"},"should")," be passed to an Express route handler."),(0,r.kt)("p",null,"You can add as many sanitizers to a chain as you need.\nWhen the middleware runs, it will modify each field in place, applying each of the sanitizers in the order they were specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { body } = require('express-validator');\napp.get('/', body('trimMe').trim(), (req, res, next) => {\n  // If req.body.trimMe was originally \"  something \",\n  // its sanitized value will be \"something\"\n  console.log(req.body.trimMe);\n});\n")),(0,r.kt)("h2",{id:"standard-sanitizers"},"Standard sanitizers"),(0,r.kt)("p",null,'All sanitizers listed by validator.js are made available within a Sanitization Chain,\nand are called "standard sanitizers" in express-validator.'),(0,r.kt)("p",null,"This means you can use any of those methods, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"normalizeEmail"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trim"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"toInt"),", etc."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"For a complete list of standard sanitizers and their options"),",\nplease check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chriso/validator.js#sanitizers"},"validator.js' docs"),".")),(0,r.kt)("h2",{id:"additional-methods"},"Additional methods"),(0,r.kt)("p",null,"In addition to the standard sanitizers, the following methods are also available within a Sanitization Chain:"),(0,r.kt)("h3",{id:"customsanitizersanitizer"},(0,r.kt)("inlineCode",{parentName:"h3"},".customSanitizer(sanitizer)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sanitizer(value, { req, location, path })"),": the custom sanitizer function.\nReceives the value of the field being sanitized, as well as the express request, the location and the field path.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")))),(0,r.kt)("p",null,"Adds a custom sanitizer to the current sanitization chain. It must synchronously return the new value."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { param } = require('express-validator');\napp.get('/object/:id', param('id').customSanitizer((value, { req }) => {\n  return req.query.type === 'user' ? ObjectId(value) : Number(value);\n}), objectHandler)\n")),(0,r.kt)("h3",{id:"runreq"},(0,r.kt)("inlineCode",{parentName:"h3"},".run(req)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a promise that resolves when the sanitization chain ran.")),(0,r.kt)("p",null,"Runs the current sanitization chain in an imperative way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { check } = require('express-validator');\napp.post('/create-post', async (req, res, next) => {\n  // BEFORE:\n  // req.body.content = ' hey your forum is amazing! <script>runEvilFunction();<\/script>    ';\n  await check('content').escape().trim().run(req);\n\n  // AFTER:\n  // req.body.content = 'hey your forum is amazing! &lt;script&gt;runEvilFunction();&lt;/script&gt;';\n});\n")),(0,r.kt)("h3",{id:"toarray"},(0,r.kt)("inlineCode",{parentName:"h3"},".toArray()")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," the current sanitization chain instance")),(0,r.kt)("p",null,"Converts the value to an array. ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," will result in an empty array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', [body('checkboxes').toArray()], (req, res, next) => {\n  // ['foo', 'bar]  => ['foo', 'bar']\n  // 'foo'          => ['foo']\n  // undefined      => []\n  console.log(req.body.checkboxes);\n});\n")))}m.isMDXComponent=!0}}]);