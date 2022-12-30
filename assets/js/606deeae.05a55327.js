"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2316],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(5773),r=n(808),i=(n(7378),n(5318)),o=["components"],s={id:"sanitization",title:"Sanitization"},l=void 0,p={unversionedId:"sanitization",id:"version-6.9.0/sanitization",title:"Sanitization",description:"Sometimes, receiving input in a HTTP request isn't only about making sure that",source:"@site/versioned_docs/version-6.9.0/feature-sanitization.md",sourceDirName:".",slug:"/sanitization",permalink:"/docs/6.9.0/sanitization",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.9.0/feature-sanitization.md",tags:[],version:"6.9.0",frontMatter:{id:"sanitization",title:"Sanitization"},sidebar:"version-6.9.0/docs",previous:{title:"Getting Started",permalink:"/docs/6.9.0/"},next:{title:"Custom validators/sanitizers",permalink:"/docs/6.9.0/custom-validators-sanitizers"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes, receiving input in a HTTP request isn't only about making sure that\nthe data is in the right format, but also that ",(0,i.kt)("strong",{parentName:"p"},"it is free of noise"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/chriso/validator.js#sanitizers"},"validator.js provides a handful of sanitizers"),"\nthat can be used to take care of the data that comes in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst { body } = require('express-validator');\n\nconst app = express();\napp.use(express.json());\n\napp.post(\n  '/comment',\n  body('email').isEmail().normalizeEmail(),\n  body('text').not().isEmpty().trim().escape(),\n  body('notifyOnReply').toBoolean(),\n  (req, res) => {\n    // Handle the request somehow\n  },\n);\n")),(0,i.kt)("p",null,"In the example above, we are validating ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," fields,\nso we may take advantage of the same chain to apply some sanitization,\nlike e-mail normalization (",(0,i.kt)("inlineCode",{parentName:"p"},"normalizeEmail"),") and trimming (",(0,i.kt)("inlineCode",{parentName:"p"},"trim"),")/HTML escaping (",(0,i.kt)("inlineCode",{parentName:"p"},"escape"),").",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"notifyOnReply")," field isn't validated, but it can still make use of the same ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," function\nto convert it to a JavaScript boolean."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," please note that sanitization mutates the request.\nThis means that if ",(0,i.kt)("inlineCode",{parentName:"p"},"req.body.text")," was sent with the value ",(0,i.kt)("inlineCode",{parentName:"p"}," Hello world :>)"),", after the sanitization\nits value will be ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello world :&gt;)"),".")))}d.isMDXComponent=!0}}]);