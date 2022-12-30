"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7596],{5318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),y=o,m=p["".concat(s,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(5773),o=r(808),a=(r(7378),r(5318)),i=["components"],l={id:"whole-body-validation",title:"Whole Body Validation"},s=void 0,d={unversionedId:"whole-body-validation",id:"version-6.11.0/whole-body-validation",title:"Whole Body Validation",description:"Sometimes you need to validate a request whose body is a string, an array, or even a number!",source:"@site/versioned_docs/version-6.11.0/feature-whole-body-validation.md",sourceDirName:".",slug:"/whole-body-validation",permalink:"/docs/6.11.0/whole-body-validation",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.11.0/feature-whole-body-validation.md",tags:[],version:"6.11.0",frontMatter:{id:"whole-body-validation",title:"Whole Body Validation"},sidebar:"version-6.11.0/docs",previous:{title:"Schema Validation",permalink:"/docs/6.11.0/schema-validation"},next:{title:"Running validations imperatively",permalink:"/docs/6.11.0/running-imperatively"}},c={},p=[],u={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes you need to validate a request whose body is a string, an array, or even a number!\nThat's why you can omit the field to validate, and check ",(0,a.kt)("inlineCode",{parentName:"p"},"req.body")," directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const bodyParser = require('body-parser');\nconst express = require('express');\nconst { body } = require('express-validator');\n\nconst app = express();\n\n// Will handle text/plain requests\napp.use(bodyParser.text());\n\napp.post('/recover-password', body().isEmail(), (req, res) => {\n  // Assume the validity of the request was already checked\n  User.recoverPassword(req.body).then(() => {\n    res.send('Password recovered!');\n  });\n});\n")),(0,a.kt)("p",null,"This setup should be able to handle the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"POST /recover-password HTTP/1.1\nHost: localhost:3000\nContent-Type: text/plain\n\nmy@email.com\n")))}y.isMDXComponent=!0}}]);