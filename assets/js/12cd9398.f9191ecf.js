"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5838],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(5773),o=a(808),r=(a(7378),a(5318)),i=["components"],l={id:"matched-data-api",title:"matchedData()"},s=void 0,d={unversionedId:"matched-data-api",id:"version-6.14.0/matched-data-api",title:"matchedData()",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.14.0/api-matched-data.md",sourceDirName:".",slug:"/matched-data-api",permalink:"/docs/6.14.0/matched-data-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.14.0/api-matched-data.md",tags:[],version:"6.14.0",frontMatter:{id:"matched-data-api",title:"matchedData()"},sidebar:"version-6.14.0/docs",previous:{title:"Sanitization Chain API",permalink:"/docs/6.14.0/sanitization-chain-api"},next:{title:"validationResult()",permalink:"/docs/6.14.0/validation-result-api"}},p={},c=[{value:"<code>matchedData(req[, options])</code>",id:"matcheddatareq-options",level:2},{value:"Examples",id:"examples",level:2},{value:"Gathering data from multiple locations",id:"gathering-data-from-multiple-locations",level:3},{value:"Including optional data",id:"including-optional-data",level:3}],u={toc:c},m="wrapper";function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These methods are all available via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('express-validator')"),"."),(0,r.kt)("h2",{id:"matcheddatareq-options"},(0,r.kt)("inlineCode",{parentName:"h2"},"matchedData(req[, options])")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req"),": the express request object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ",(0,r.kt)("em",{parentName:"li"},"(optional)"),": an object which accepts the following options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeOptionals"),": if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the returned value includes optional data. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onlyValidData"),": if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", the returned value includes data from fields\nthat didn't pass their validations. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locations"),": an array of locations to extract the data from. The acceptable values include\n",(0,r.kt)("inlineCode",{parentName:"li"},"body"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cookies"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"headers"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),", which means all locations.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," an object of data that express-validator has validated or sanitized.")),(0,r.kt)("p",null,"Extracts data validated or sanitized by express-validator from the request and builds\nan object with them. Nested paths and wildcards are properly handled as well.",(0,r.kt)("br",{parentName:"p"}),"\n","See examples below."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"gathering-data-from-multiple-locations"},"Gathering data from multiple locations"),(0,r.kt)("p",null,"If data you validated or sanitized is spread across various request locations\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"req.query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"req.params"),", etc), then ",(0,r.kt)("inlineCode",{parentName:"p"},"matchedData")," will gather it properly.\nYou can also customize which locations you want the data from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Suppose the request looks like this:\n// req.query = { from: '2017-01-12' }\n// req.body = { to: '2017-31-12' }\n\napp.post('/room-availability', check(['from', 'to']).isISO8601(), (req, res, next) => {\n  const queryData = matchedData(req, { locations: ['query'] });\n  const bodyData = matchedData(req, { locations: ['body'] });\n  const allData = matchedData(req);\n  console.log(queryData); // { from: '2017-01-12' }\n  console.log(bodyData);  // { to: '2017-31-12' }\n  console.log(allData);   // { from: '2017-01-12', to: '2017-31-12' }\n});\n")),(0,r.kt)("h3",{id:"including-optional-data"},"Including optional data"),(0,r.kt)("p",null,"You may want to have ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.14.0/validation-chain-api#optionaloptions"},"optional values")," among the required ones."),(0,r.kt)("p",null,"If they are not included, some databases might understand that you don't want to update those values,\nso it's useful to set them to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or an empty string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Suppose the request looks like this:\n// req.body = { name: 'John Doe', bio: '' }\n\napp.post(\n  '/update-user',\n  check('name').not().isEmpty(),\n  check('bio').optional({ checkFalsy: true }).escape(),\n  (req, res, next) => {\n    const requiredData = matchedData(req, { includeOptionals: false });\n    const allData = matchedData(req, { includeOptionals: true });\n    console.log(requiredData); // { name: 'John Doe' }\n    console.log(allData);      // { name: 'John Doe', bio: '' }\n  },\n);\n")))}h.isMDXComponent=!0}}]);