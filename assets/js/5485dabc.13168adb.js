"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8174],{5318:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=t(5773),r=t(808),o=(t(7378),t(5318)),i=["components"],s={id:"schema-validation",title:"Schema Validation"},l=void 0,c={unversionedId:"schema-validation",id:"version-6.9.0/schema-validation",title:"Schema Validation",description:"Schemas are a special, object-based way of defining validations or sanitizations on requests.",source:"@site/versioned_docs/version-6.9.0/feature-schema-validation.md",sourceDirName:".",slug:"/schema-validation",permalink:"/docs/6.9.0/schema-validation",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.9.0/feature-schema-validation.md",tags:[],version:"6.9.0",frontMatter:{id:"schema-validation",title:"Schema Validation"},sidebar:"version-6.9.0/docs",previous:{title:"Wildcards",permalink:"/docs/6.9.0/wildcards"},next:{title:"Whole Body Validation",permalink:"/docs/6.9.0/whole-body-validation"}},d={},p=[],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Schemas are a special, object-based way of defining validations or sanitizations on requests.",(0,o.kt)("br",{parentName:"p"}),"\n","At the root-level, you specify field paths as keys, and objects as values -- which define\nthe error messages, locations and validations/sanitizations."),(0,o.kt)("p",null,"Its syntax looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { checkSchema } = require('express-validator');\napp.put(\n  '/user/:id/password',\n  checkSchema({\n    id: {\n      // The location of the field, can be one or more of body, cookies, headers, params or query.\n      // If omitted, all request locations will be checked\n      in: ['params', 'query'],\n      errorMessage: 'ID is wrong',\n      isInt: true,\n      // Sanitizers can go here as well\n      toInt: true,\n    },\n    myCustomField: {\n      // Custom validators\n      custom: {\n        options: (value, { req, location, path }) => {\n          return value + req.body.foo + location + path;\n        },\n      },\n      // and sanitizers\n      customSanitizer: {\n        options: (value, { req, location, path }) => {\n          let sanitizedValue;\n\n          if (req.body.foo && location && path) {\n            sanitizedValue = parseInt(value);\n          } else {\n            sanitizedValue = 0;\n          }\n\n          return sanitizedValue;\n        },\n      },\n    },\n    password: {\n      isLength: {\n        errorMessage: 'Password should be at least 7 chars long',\n        // Multiple options would be expressed as an array\n        options: { min: 7 },\n      },\n    },\n    firstName: {\n      isUppercase: {\n        // To negate a validator\n        negated: true,\n      },\n      rtrim: {\n        // Options as an array\n        options: [' -'],\n      },\n    },\n    // Support bail functionality in schemas\n    email: {\n      isEmail: {\n        bail: true,\n      },\n    },\n    // Wildcards/dots for nested fields work as well\n    'addresses.*.postalCode': {\n      // Make this field optional when undefined or null\n      optional: { options: { nullable: true } },\n      isPostalCode: true,\n    },\n  }),\n  (req, res, next) => {\n    // handle the request as usual\n  },\n);\n")))}m.isMDXComponent=!0}}]);