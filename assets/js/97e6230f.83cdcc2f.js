"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6760],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7378),a=n(8944);const s="tabItem_wHwb";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n},t)}},3930:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(5773),a=n(7378),s=n(8944),l=n(3457),i=n(3620),o=n(654),p=n(784),u=n(1819);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function g(e){var t,n,r,s,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,p=e.groupId,d=c(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),v=g[0],f=g[1],y=m({queryString:o,groupId:p}),b=y[0],x=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),w=k[0],N=k[1],q=function(){var e=null!=b?b:w;return h({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){q&&f(q)}),[q]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);f(e),x(e),N(e)}),[x,N,d]),tabValues:d}}var v=n(6457);const f="tabList_J5MA",y="tabItem_l0OV";function b(e){var t=e.className,n=e.block,i=e.selectedValue,o=e.selectValue,p=e.tabValues,u=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),r=p[n].value;r!==i&&(d(t),o(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var s,l=u.indexOf(e.currentTarget)-1;n=null!=(s=u[l])?s:u[u.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:h,onClick:c},l,{className:(0,s.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=g(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",f)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(x,(0,r.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},5335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var r=n(5773),a=n(808),s=(n(7378),n(5318)),l=n(3930),i=n(9798),o=n(6989),p=["components"],u={title:"Getting Started"},d=void 0,c={unversionedId:"guides/getting-started",id:"guides/getting-started",title:"Getting Started",description:"One of the best ways to learn something is by example!",source:"@site/../docs/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/docs/next/guides/getting-started",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/../docs/guides/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/next/category/guides"},next:{title:"The Validation Chain",permalink:"/docs/next/guides/validation-chain"}},h={},m=[{value:"Set up",id:"set-up",level:2},{value:"Adding a validator",id:"adding-a-validator",level:2},{value:"Handling validation errors",id:"handling-validation-errors",level:2},{value:"Sanitizing inputs",id:"sanitizing-inputs",level:2},{value:"Accessing validated data",id:"accessing-validated-data",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],g={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One of the best ways to learn something is by example!\nSo let's roll the sleeves up and get some coding happening."),(0,s.kt)("h2",{id:"set-up"},"Set up"),(0,s.kt)("p",null,"The first thing that one needs is a express.js application running.\nLet's implement one that says hi to someone; for this, create a new file using your favorite language\nand add the following code:"),(0,s.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},"const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.get('/hello', (req, res) => {\n  res.send(`Hello, ${req.query.person}!`);\n});\n\napp.listen(3000);\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts" showLineNumbers',title:'"index.ts"',showLineNumbers:!0},"import * as express from 'express';\nconst app = express();\n\napp.use(express.json());\napp.get('/hello', (req, res) => {\n  res.send(`Hello, ${req.query.person}!`);\n});\n\napp.listen(3000);\n")))),(0,s.kt)("p",null,"Now run this file by executing ",(0,s.kt)("inlineCode",{parentName:"p"},"node index.js")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node index.ts")," on your terminal.",(0,s.kt)("br",null),"\nThe HTTP server should be running, and you can open ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:3000/hello?person=John"},"http://localhost:3000/hello?person=John"),"\nto salute John!"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can use ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-dev"},"node-dev")," or ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-node-dev"},"ts-node-dev"),"\nto run your application instead.\nThese automatically restart the application whenever a file is changed, so you don't have to do this yourself!")),(0,s.kt)("h2",{id:"adding-a-validator"},"Adding a validator"),(0,s.kt)("p",null,"So the application is working, but there are problems with it. Most notably, you don't want to\nsay hey when the person's name is not set.",(0,s.kt)("br",{parentName:"p"}),"\n","For example, going to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:3000/hello"},"http://localhost:3000/hello"),' will print "Hello, undefined!".'),(0,s.kt)("p",null,"That's where express-validator comes in handy: let's add a ",(0,s.kt)("strong",{parentName:"p"},"validator")," that checks that the ",(0,s.kt)("inlineCode",{parentName:"p"},"person"),"\nquery string cannot be empty, with the intuitively named validator ",(0,s.kt)("inlineCode",{parentName:"p"},"notEmpty"),":"),(0,s.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},"const express = require('express');\n// highlight-next-line\nconst { query } = require('express-validator');\nconst app = express();\n\napp.use(express.json());\n// highlight-next-line\napp.get('/hello', query('person').notEmpty(), (req, res) => {\n  res.send(`Hello, ${req.query.person}!`);\n});\n\napp.listen(3000);\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts" showLineNumbers',title:'"index.ts"',showLineNumbers:!0},"import * as express from 'express';\n// highlight-next-line\nimport { query } from 'express-validator';\nconst app = express();\n\napp.use(express.json());\n// highlight-next-line\napp.get('/hello', query('person').notEmpty(), (req, res) => {\n  res.send(`Hello, ${req.query.person}!`);\n});\n\napp.listen(3000);\n")))),(0,s.kt)("p",null,"Now, restart your application, and go to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:3000/hello"},"http://localhost:3000/hello"),' again.\nHmm, it still prints "Hello, undefined!"... why?'),(0,s.kt)("h2",{id:"handling-validation-errors"},"Handling validation errors"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"express-validator validators do not report validation errors to users automatically"),".",(0,s.kt)("br",{parentName:"p"}),"\n","The reason for this is simple: as you add more validators, or for more fields,\nhow do you want to collect the errors?\nDo you want a list of all errors, only one per field, only one overall...?"),(0,s.kt)("p",null,"So the next obvious step is to change the above code again, this time verifying the validation result\nwith the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/validation-result"},(0,s.kt)("inlineCode",{parentName:"a"},"validationResult")," function"),":"),(0,s.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},"const express = require('express');\n// highlight-next-line\nconst { query, validationResult } = require('express-validator');\nconst app = express();\n\napp.use(express.json());\napp.get('/hello', query('person').notEmpty(), (req, res) => {\n  // highlight-start\n  const result = validationResult(req);\n  if (result.isEmpty()) {\n    return res.send(`Hello, ${req.query.person}!`);\n  }\n\n  res.send({ errors: result.array() });\n  // highlight-end\n});\n\napp.listen(3000);\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts" showLineNumbers',title:'"index.ts"',showLineNumbers:!0},"import * as express from 'express';\n// highlight-next-line\nimport { query, validationResult } from 'express-validator';\nconst app = express();\n\napp.use(express.json());\napp.get('/hello', query('person').notEmpty(), (req, res) => {\n  // highlight-start\n  const result = validationResult(req);\n  if (result.isEmpty()) {\n    return res.send(`Hello, ${req.query.person}!`);\n  }\n\n  res.send({ errors: result.array() });\n  // highlight-end\n});\n\napp.listen(3000);\n")))),(0,s.kt)("p",null,"Now if you access ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:3000/hello"},"http://localhost:3000/hello")," again, what you'll see\nis the following JSON content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "location": "query",\n      "msg": "Invalid value",\n      "path": "person",\n      "type": "field"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Now, what this is telling us is that"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"there's been exactly one error in this request;"),(0,s.kt)("li",{parentName:"ul"},"the error is in a field (",(0,s.kt)("inlineCode",{parentName:"li"},'type: "field"'),");"),(0,s.kt)("li",{parentName:"ul"},"this field is called ",(0,s.kt)("inlineCode",{parentName:"li"},"person"),";"),(0,s.kt)("li",{parentName:"ul"},"it's located in the query string (",(0,s.kt)("inlineCode",{parentName:"li"},'location: "query"'),");"),(0,s.kt)("li",{parentName:"ul"},"the error message that was given was ",(0,s.kt)("inlineCode",{parentName:"li"},"Invalid value"),".")),(0,s.kt)("p",null,"This is a better scenario, but it can still be improved. Let's continue."),(0,s.kt)("h2",{id:"sanitizing-inputs"},"Sanitizing inputs"),(0,s.kt)("p",null,"While the user can no longer send empty person names, it can still inject HTML into your page!\nThis is known as the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"Cross-Site Scripting vulnerability (XSS)"),"."),(0,s.kt)("p",null,"Let's see how it works. Go to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:3000/hello?person=%3Cb%3EJohn%3C/b%3E"},(0,s.kt)(o.Z,{values:{query:"<b>John</b>"},mdxType:"Interpolate"},"http://localhost:3000/hello?person={query}")),',\nand you should see "Hello, ',(0,s.kt)("b",null,"John"),'!".'),(0,s.kt)("p",null,"While this example is fine, an attacker could change the ",(0,s.kt)("inlineCode",{parentName:"p"},"person")," query string to a ",(0,s.kt)("inlineCode",{parentName:"p"},"<script>")," tag\nwhich loads its own JavaScript that could be harmful."),(0,s.kt)("p",null,"In this scenario, one way to mitigate the issue with express-validator is to use a ",(0,s.kt)("strong",{parentName:"p"},"sanitizer"),",\nmost specifically ",(0,s.kt)("inlineCode",{parentName:"p"},"escape"),", which transforms special HTML characters with others that can be represented\nas text."),(0,s.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},"const express = require('express');\nconst { query, validationResult } = require('express-validator');\nconst app = express();\n\napp.use(express.json());\n// highlight-next-line\napp.get('/hello', query('person').notEmpty().escape(), (req, res) => {\n  const result = validationResult(req);\n  if (result.isEmpty()) {\n    return res.send(`Hello, ${req.query.person}!`);\n  }\n\n  res.send({ errors: result.array() });\n});\n\napp.listen(3000);\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts" showLineNumbers',title:'"index.ts"',showLineNumbers:!0},"import * as express from 'express';\nimport { query, validationResult } from 'express-validator';\nconst app = express();\n\napp.use(express.json());\n// highlight-next-line\napp.get('/hello', query('person').notEmpty().escape(), (req, res) => {\n  const result = validationResult(req);\n  if (result.isEmpty()) {\n    return res.send(`Hello, ${req.query.person}!`);\n  }\n\n  res.send({ errors: result.array() });\n});\n\napp.listen(3000);\n")))),(0,s.kt)("p",null,"Now, if you restart the server and refresh the page, what you'll see is \"Hello, ","<","b",">","John","<","/b",">",'!".\nOur example page is no longer vulnerable to XSS!'),(0,s.kt)("h2",{id:"accessing-validated-data"},"Accessing validated data"),(0,s.kt)("p",null,"This application is pretty simple, but as you start growing it, it might become quite repetitive to\ntype ",(0,s.kt)("inlineCode",{parentName:"p"},"req.body.fieldName1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"req.body.fieldName2"),", and so on."),(0,s.kt)("p",null,"To help with this, you can use ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/matched-data"},(0,s.kt)("inlineCode",{parentName:"a"},"matchedData()")),", which automatically collects\nall data that express-validator has validated and/or sanitized:"),(0,s.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},"const express = require('express');\n// highlight-next-line\nconst { query, matchedData, validationResult } = require('express-validator');\nconst app = express();\n\napp.use(express.json());\napp.get('/hello', query('person').notEmpty().escape(), (req, res) => {\n  const result = validationResult(req);\n  if (result.isEmpty()) {\n    // highlight-next-line\n    const data = matchedData(req);\n    // highlight-next-line\n    return res.send(`Hello, ${data.person}!`);\n  }\n\n  res.send({ errors: result.array() });\n});\n\napp.listen(3000);\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts" showLineNumbers',title:'"index.ts"',showLineNumbers:!0},"import * as express from 'express';\n// highlight-next-line\nimport { query, matchedData, validationResult } from 'express-validator';\nconst app = express();\n\napp.use(express.json());\napp.get('/hello', query('person').notEmpty().escape(), (req, res) => {\n  const result = validationResult(req);\n  if (result.isEmpty()) {\n    // highlight-next-line\n    const data = matchedData(req);\n    // highlight-next-line\n    return res.send(`Hello, ${data.person}!`);\n  }\n\n  res.send({ errors: result.array() });\n});\n\napp.listen(3000);\n")))),(0,s.kt)("h2",{id:"whats-next"},"What's next?"),(0,s.kt)("p",null,"These steps conclude the basic guide on getting started with express-validator.",(0,s.kt)("br",null),"\nYou might want to continue reading about the other available features:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Learn about ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/guides/validation-chain"},"the validation chain")),(0,s.kt)("li",{parentName:"ul"},"Master the ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/guides/field-selection"},"field selection")),(0,s.kt)("li",{parentName:"ul"},"Deeply ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/guides/customizing"},"customize express-validator"))))}v.isMDXComponent=!0}}]);