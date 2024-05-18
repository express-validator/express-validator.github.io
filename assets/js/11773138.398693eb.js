"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1239],{9473:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(4246),s=a(1670);const o={id:"schema-validation",title:"Schema Validation"},i=void 0,r={id:"schema-validation",title:"Schema Validation",description:"Schemas are a special, object-based way of defining validations or sanitizations on requests.",source:"@site/versioned_docs/version-5.3.0/feature-schema-validation.md",sourceDirName:".",slug:"/schema-validation",permalink:"/docs/5.3.0/schema-validation",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-5.3.0/feature-schema-validation.md",tags:[],version:"5.3.0",frontMatter:{id:"schema-validation",title:"Schema Validation"},sidebar:"docs",previous:{title:"Wildcards",permalink:"/docs/5.3.0/wildcards"},next:{title:"Whole Body Validation",permalink:"/docs/5.3.0/whole-body-validation"}},d={},l=[];function c(e){const n={br:"br",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Schemas are a special, object-based way of defining validations or sanitizations on requests.",(0,t.jsx)(n.br,{}),"\n","At the root-level, you specify the field paths as the keys, and an object as values -- which define\nthe error messages, locations and validations/sanitizations."]}),"\n",(0,t.jsx)(n.p,{children:"Its syntaxs looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const { checkSchema } = require('express-validator/check');\napp.put('/user/:id/password', checkSchema({\n  id: {\n    // The location of the field, can be one or more of body, cookies, headers, params or query.\n    // If omitted, all request locations will be checked\n    in: ['params', 'query'],\n    errorMessage: 'ID is wrong',\n    isInt: true,\n    // Sanitizers can go here as well\n    toInt: true\n  },\n  myCustomField: {\n    // Custom validators\n    custom: {\n      options: (value, { req, location, path }) => {\n        return value + req.body.foo + location + path;\n      }\n    },\n    // and sanitizers\n    customSanitizer: {\n      options: (value, { req, location, path }) => {\n        let sanitizedValue;\n\n        if (req.body.foo && location && path) {\n          sanitizedValue = parseInt(value);\n        } else {\n          sanitizedValue = 0;\n        }\n\n        return sanitizedValue;\n      }\n    },\n  },\n  password: {\n    isLength: {\n      errorMessage: 'Password should be at least 7 chars long',\n      // Multiple options would be expressed as an array\n      options: { min: 7 }\n    }\n  },\n  firstName: {\n    isUppercase: {\n      // To negate a validator\n      negated: true,\n    },\n    rtrim: {\n      // Options as an array\n      options: [' -'],\n    },\n  },\n  // Wildcards/dots for nested fields work as well\n  'addresses.*.postalCode': {\n    optional: true,\n    isPostalCode: true\n  }\n}), (req, res, next) => {\n  // handle the request as usual\n})\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1670:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var t=a(7378);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);