"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8369],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(5773),a=n(808),r=(n(7378),n(5318)),o=["components"],l={id:"filter-api",title:"Sanitization middlewares"},s=void 0,d={unversionedId:"filter-api",id:"version-6.11.0/filter-api",title:"Sanitization middlewares",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.11.0/api-filter.md",sourceDirName:".",slug:"/filter-api",permalink:"/docs/6.11.0/filter-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.11.0/api-filter.md",tags:[],version:"6.11.0",frontMatter:{id:"filter-api",title:"Sanitization middlewares"},sidebar:"version-6.11.0/docs",previous:{title:"Validation Chain API",permalink:"/docs/6.11.0/validation-chain-api"},next:{title:"Sanitization Chain API",permalink:"/docs/6.11.0/sanitization-chain-api"}},p={},c=[{value:"<code>sanitize(fields)</code>",id:"sanitizefields",level:2},{value:"<code>sanitizeBody(fields)</code>",id:"sanitizebodyfields",level:2},{value:"<code>sanitizeCookie(fields)</code>",id:"sanitizecookiefields",level:2},{value:"<code>sanitizeParam(fields)</code>",id:"sanitizeparamfields",level:2},{value:"<code>sanitizeQuery(fields)</code>",id:"sanitizequeryfields",level:2},{value:"<code>buildSanitizeFunction(locations)</code>",id:"buildsanitizefunctionlocations",level:2}],u={toc:c},m="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These methods are all available via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('express-validator')"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These sanitization-only middlewares have been deprecated, as ",(0,r.kt)("strong",{parentName:"p"},"the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/6.11.0/check-api"},"validation middlewares"),"\noffer the same functionality"),", and much more.\nThey will be removed eventually.")),(0,r.kt)("h2",{id:"sanitizefields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitize(fields)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field"),": a string or an array of strings of field names to validate against.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/sanitization-chain-api"},"Sanitization Chain"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/check-api#checkfields-message"},"Prefer using ",(0,r.kt)("inlineCode",{parentName:"a"},"check()")," instead"),". This function has been deprecated.")),(0,r.kt)("p",null,"Creates a sanitization chain for one or more fields. They may be located in any of the following request objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.body")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.cookies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.params")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.query"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," ",(0,r.kt)("inlineCode",{parentName:"em"},"req.headers")," is ",(0,r.kt)("strong",{parentName:"em"},"not")," supported at the moment.")),(0,r.kt)("p",null,"If any of the fields are present in more than one location, then all instances of that field value will be sanitized."),(0,r.kt)("h2",{id:"sanitizebodyfields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeBody(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/check-api#bodyfields-message"},"Prefer using ",(0,r.kt)("inlineCode",{parentName:"a"},"body()")," instead"),". This function has been deprecated.")),(0,r.kt)("h2",{id:"sanitizecookiefields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeCookie(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.cookies"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/check-api#cookiefields-message"},"Prefer using ",(0,r.kt)("inlineCode",{parentName:"a"},"cookie()")," instead"),". This function has been deprecated.")),(0,r.kt)("h2",{id:"sanitizeparamfields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeParam(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.params"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/check-api#paramfields-message"},"Prefer using ",(0,r.kt)("inlineCode",{parentName:"a"},"param()")," instead"),". This function has been deprecated.")),(0,r.kt)("h2",{id:"sanitizequeryfields"},(0,r.kt)("inlineCode",{parentName:"h2"},"sanitizeQuery(fields)")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitize(fields)"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.query"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/check-api#queryfields-message"},"Prefer using ",(0,r.kt)("inlineCode",{parentName:"a"},"query()")," instead"),". This function has been deprecated.")),(0,r.kt)("h2",{id:"buildsanitizefunctionlocations"},(0,r.kt)("inlineCode",{parentName:"h2"},"buildSanitizeFunction(locations)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locations"),": an array of request locations to gather data from.",(0,r.kt)("br",{parentName:"li"}),"May include any of ",(0,r.kt)("inlineCode",{parentName:"li"},"body"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cookies"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a variant of ",(0,r.kt)("a",{parentName:"p",href:"#sanitizefields"},(0,r.kt)("inlineCode",{parentName:"a"},"sanitize()"))," sanitizing the given request locations.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/6.11.0/check-api#buildcheckfunctionlocations"},"Prefer using ",(0,r.kt)("inlineCode",{parentName:"a"},"buildCheckFunction()")," instead"),". This function has been deprecated.")),(0,r.kt)("p",null,"Creates a variant of ",(0,r.kt)("a",{parentName:"p",href:"#sanitizefields"},(0,r.kt)("inlineCode",{parentName:"a"},"sanitize()"))," that sanitizes the given request locations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { buildSanitizeFunction } = require('express-validator');\nconst sanitizeBodyAndQuery = buildSanitizeFunction(['body', 'query']);\n\napp.put(\n  '/update-product',\n  // id being either in req.body or req.query will be converted to int\n  sanitizeBodyAndQuery('id').toInt(),\n  productUpdateHandler,\n);\n")))}k.isMDXComponent=!0}}]);