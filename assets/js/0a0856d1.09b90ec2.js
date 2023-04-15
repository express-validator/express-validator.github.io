"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6697],{5318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),v=n,f=p["".concat(l,".").concat(v)]||p[v]||u[v]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(5773),n=r(808),i=(r(7378),r(5318)),o=["components"],s={id:"faq",title:"FAQ"},l=void 0,c={unversionedId:"faq",id:"version-6.11.0/faq",title:"FAQ",description:"Why arrays are not validated/sanitized correctly?",source:"@site/versioned_docs/version-6.11.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/6.11.0/faq",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.11.0/faq.md",tags:[],version:"6.11.0",frontMatter:{id:"faq",title:"FAQ"},sidebar:"version-6.11.0/docs",previous:{title:"Running validations imperatively",permalink:"/docs/6.11.0/running-imperatively"},next:{title:"Migration from v5 to v6",permalink:"/docs/6.11.0/migration-v5-to-v6"}},d={},p=[{value:"Why arrays are not validated/sanitized correctly?",id:"why-arrays-are-not-validatedsanitized-correctly",level:2},{value:"Example:",id:"example",level:3},{value:"Referenced issues:",id:"referenced-issues",level:3}],u={toc:p};function v(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-arrays-are-not-validatedsanitized-correctly"},"Why arrays are not validated/sanitized correctly?"),(0,i.kt)("p",null,"When using ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.11.0/validation-chain-api#standard-validators"},"Standard validators")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.11.0/sanitization-chain-api#standard-sanitizers"},"Standard sanitizers")," from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/validatorjs/validator.js"},"validator.js")," the value is transformed to ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," using this function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function toString(value: any, deep = true): string {\n  if (Array.isArray(value) && value.length && deep) {\n    return toString(value[0], false);\n  } else if (value instanceof Date) {\n    return value.toISOString();\n  } else if (value && typeof value === 'object' && value.toString) {\n    if (typeof value.toString !== 'function') {\n      return Object.getPrototypeOf(value).toString.call(value);\n    }\n    return value.toString();\n  } else if (value == null || (isNaN(value) && !value.length)) {\n    return '';\n  }\n\n  return String(value);\n}\n")),(0,i.kt)("p",null,"As we can see above, when validating or sanitizing an ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," only the first element of it is processed."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.11.0/wildcards"},"wildcards")," to validate/sanitize all the values of the array.")),(0,i.kt)("h3",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// weekdays: ['sunday', 100]\nbody('weekdays').isString(); // Passes validation\nbody('weekdays.*').isString(); // Does not pass validation\n")),(0,i.kt)("p",null,"In this example the first chain processes only the first element of the array and the validation erroneously passes.\nIn the second one, instead, all the elements are validated and the chain correctly returns an error."),(0,i.kt)("h3",{id:"referenced-issues"},"Referenced issues:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/issues/791"},"#791"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/issues/883"},"#883"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/issues/931"},"#931"))))}v.isMDXComponent=!0}}]);