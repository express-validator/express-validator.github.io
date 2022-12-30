"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7716],{5318:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(7378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(i),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5141:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=i(5773),a=i(808),r=(i(7378),i(5318)),o=["components"],l={id:"filter-api",title:"Sanitization middlewares"},s=void 0,d={unversionedId:"filter-api",id:"version-6.0.0/filter-api",title:"Sanitization middlewares",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.0.0/api-filter.md",sourceDirName:".",slug:"/filter-api",permalink:"/docs/6.0.0/filter-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.0.0/api-filter.md",tags:[],version:"6.0.0",frontMatter:{id:"filter-api",title:"Sanitization middlewares"},sidebar:"version-6.0.0/docs",previous:{title:"Validation Chain API",permalink:"/docs/6.0.0/validation-chain-api"},next:{title:"Sanitization Chain API",permalink:"/docs/6.0.0/sanitization-chain-api"}},p={},u=[{value:"<code>sanitize(fields)</code>",id:"sanitizefields",level:2},{value:"<code>sanitizeBody(fields)</code>",id:"sanitizebodyfields",level:2},{value:"<code>sanitizeCookie(fields)</code>",id:"sanitizecookiefields",level:2},{value:"<code>sanitizeParam(fields)</code>",id:"sanitizeparamfields",level:2},{value:"<code>sanitizeQuery(fields)</code>",id:"sanitizequeryfields",level:2},{value:"<code>buildSanitizeFunction(locations)</code>",id:"buildsanitizefunctionlocations",level:2}],c={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These methods are all available via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('express-validator')"),"."),(0,r.kt)("h2",{id:"sanitizefields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitize(fields)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field"),": a string or an array of strings of field names to validate against.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0.0/sanitization-chain-api"},"Sanitization Chain"))))),(0,r.kt)("p",null,"Creates a sanitization chain for one or more fields. They may be located in any of the following request objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.body")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.cookies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.params")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.query"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"* ",(0,r.kt)("inlineCode",{parentName:"em"},"req.headers")," is ",(0,r.kt)("strong",{parentName:"em"},"not")," supported at the moment.")),(0,r.kt)("p",null,"If any of the fields are present in more than one location, then all instances of that field value will be sanitized."),(0,r.kt)("h2",{id:"sanitizebodyfields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeBody(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body"),"."),(0,r.kt)("h2",{id:"sanitizecookiefields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeCookie(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.cookies"),"."),(0,r.kt)("h2",{id:"sanitizeparamfields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeParam(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.params"),"."),(0,r.kt)("h2",{id:"sanitizequeryfields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeQuery(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.query"),"."),(0,r.kt)("h2",{id:"buildsanitizefunctionlocations"},(0,r.kt)("inlineCode",{parentName:"h2"},"buildSanitizeFunction(locations)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locations"),": an array of request locations to gather data from.",(0,r.kt)("br",{parentName:"li"}),"May include any of ",(0,r.kt)("inlineCode",{parentName:"li"},"body"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cookies"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),".",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a variant of ",(0,r.kt)("a",{parentName:"p",href:"#sanitizefields"},(0,r.kt)("inlineCode",{parentName:"a"},"sanitize()"))," sanitizing the given request locations.")))),(0,r.kt)("p",null,"Creates a variant of ",(0,r.kt)("a",{parentName:"p",href:"#sanitizefields"},(0,r.kt)("inlineCode",{parentName:"a"},"sanitize()"))," that sanitizes the given request locations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { buildSanitizeFunction } = require('express-validator');\nconst sanitizeBodyAndQuery = buildSanitizeFunction(['body', 'query']);\n\napp.put('/update-product', [\n  // id being either in req.body or req.query will be converted to int\n  sanitizeBodyAndQuery('id').toInt()\n], productUpdateHandler)\n")))}m.isMDXComponent=!0}}]);