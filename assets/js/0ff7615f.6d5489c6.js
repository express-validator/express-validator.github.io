"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8915],{5318:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4063:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(5773),a=t(808),o=(t(7378),t(5318)),s=["components"],l={id:"wildcards",title:"Wildcards"},i=void 0,c={unversionedId:"wildcards",id:"version-6.11.0/wildcards",title:"Wildcards",description:"Sometimes you will want to apply the same rules to all items of an array or all keys of some object.",source:"@site/versioned_docs/version-6.11.0/feature-wildcards.md",sourceDirName:".",slug:"/wildcards",permalink:"/docs/6.11.0/wildcards",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.11.0/feature-wildcards.md",tags:[],version:"6.11.0",frontMatter:{id:"wildcards",title:"Wildcards"},sidebar:"version-6.11.0/docs",previous:{title:"Custom Error Messages",permalink:"/docs/6.11.0/custom-error-messages"},next:{title:"Schema Validation",permalink:"/docs/6.11.0/schema-validation"}},d={},p=[],u={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you will want to apply the same rules to all items of an array or all keys of some object.",(0,o.kt)("br",{parentName:"p"}),"\n","That's what the ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," character -- also known as a wildcard -- is for."),(0,o.kt)("p",null,"For example, imagine you want to validate that all addresses have a valid postal code,\nand that the number of each address is sanitized as an integer."),(0,o.kt)("p",null,"We can do this with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst { check } = require('express-validator');\n\nconst app = express();\napp.use(express.json());\n\napp.post(\n  '/addresses',\n  check('addresses.*.postalCode').isPostalCode(),\n  check('addresses.*.number').toInt(),\n  (req, res) => {\n    // Handle the request\n  },\n);\n")),(0,o.kt)("p",null,"This will handle cases where you send an array of addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses": [\n    { "postalCode": "2010", "number": "500" },\n    { "postalCode": "", "number": "501" }\n  ]\n}\n')),(0,o.kt)("p",null,"...or even cases where you want a predefined set of addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses": {\n    "home": { "postalCode": "", "number": "501" },\n    "work": { "postalCode": "2010", "number": "500" }\n  }\n}\n')))}m.isMDXComponent=!0}}]);