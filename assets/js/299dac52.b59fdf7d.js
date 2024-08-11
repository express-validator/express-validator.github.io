"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1368],{47718:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=a(24246),t=a(71670),i=a(23930),s=a(39798);const o={title:"Manually running validations"},l=void 0,u={id:"guides/manually-running",title:"Manually running validations",description:"express-validator favors the declarative way of doing things that express middlewares bring.",source:"@site/versioned_docs/version-7.2.0/guides/manually-running.md",sourceDirName:"guides",slug:"/guides/manually-running",permalink:"/docs/guides/manually-running",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-7.2.0/guides/manually-running.md",tags:[],version:"7.2.0",frontMatter:{title:"Manually running validations"},sidebar:"docs",previous:{title:"Customizing express-validator",permalink:"/docs/guides/customizing"},next:{title:"Schema validation",permalink:"/docs/guides/schema-validation"}},c={},d=[{value:"Example: creating own validation runner",id:"example-creating-own-validation-runner",level:2},{value:"Example: validating with a condition",id:"example-validating-with-a-condition",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"express-validator favors the declarative way of doing things that express middlewares bring.\nThis means most of the APIs look and work better when simply passed into an express route handler."}),"\n",(0,r.jsx)(n.p,{children:"You can, however, take control of running these validations into your own middleware/route handler."}),"\n",(0,r.jsxs)(n.p,{children:["This is possible in express-validator functions which return an object which implements the\n",(0,r.jsx)(n.a,{href:"/docs/api/misc#contextrunner",children:(0,r.jsx)(n.code,{children:"ContextRunner"})}),", an interface implemented by all of\n",(0,r.jsx)(n.a,{href:"/docs/api/validation-chain",children:(0,r.jsx)(n.code,{children:"ValidationChain"})}),", ",(0,r.jsx)(n.a,{href:"/docs/api/check-exact",children:(0,r.jsx)(n.code,{children:"checkExact()"})}),",\n",(0,r.jsx)(n.a,{href:"/docs/api/check-schema",children:(0,r.jsx)(n.code,{children:"checkSchema()"})})," and ",(0,r.jsx)(n.a,{href:"/docs/api/one-of",children:(0,r.jsx)(n.code,{children:"oneOf"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Check the examples below to understand how this method can help you:"}),"\n",(0,r.jsx)(n.h2,{id:"example-creating-own-validation-runner",children:"Example: creating own validation runner"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const express = require('express');\nconst { validationResult } = require('express-validator');\n\n// can be reused by many routes\nconst validate = validations => {\n  return async (req, res, next) => {\n    // sequential processing, stops running validations chain if one fails.\n    for (const validation of validations) {\n      const result = await validation.run(req);\n      if (!result.isEmpty()) {\n        return res.status(400).json({ errors: result.array() });\n      }\n    }\n\n    next();\n  };\n};\n\napp.post('/signup', validate([\n  body('email').isEmail(),\n  body('password').isLength({ min: 6 })\n]), async (req, res, next) => {\n  // request is guaranteed to not have any validation errors.\n  const user = await User.create({ ... });\n});\n"})})}),(0,r.jsx)(s.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import express from 'express';\nimport { body, validationResult, ContextRunner } from 'express-validator';\n\n// can be reused by many routes\nconst validate = (validations: ContextRunner[]) => {\n  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {\n    // sequential processing, stops running validations chain if one fails.\n    for (const validation of validations) {\n      const result = await validation.run(req);\n      if (!result.isEmpty()) {\n        return res.status(400).json({ errors: result.array() });\n      }\n    }\n\n    next();\n  };\n};\n\napp.post('/signup', validate([\n  body('email').isEmail(),\n  body('password').isLength({ min: 6 })\n]), async (req, res, next) => {\n  // request is guaranteed to not have any validation errors.\n  const user = await User.create({ ... });\n});\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"example-validating-with-a-condition",children:"Example: validating with a condition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { body, matchedData } from 'express-validator';\napp.post(\n  '/update-settings',\n  body('email').isEmail(),\n  body('password').optional().isLength({ min: 6 }),\n  async (req, res, next) => {\n    // if a password has been provided, then a confirmation must also be provided.\n    const { password } = matchedData(req);\n    if (password) {\n      await body('passwordConfirmation')\n        .equals(password)\n        .withMessage('passwords do not match')\n        .run(req);\n    }\n\n    // Check the validation errors, and update the user's settings.\n  },\n);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This is only an example of how you could use the manual running of validations.\nYou should prefer creating conditional validation chains with the use of\n",(0,r.jsx)(n.a,{href:"/docs/api/validation-chain#if",children:(0,r.jsx)(n.code,{children:".if()"})})," instead."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},39798:(e,n,a)=>{a.d(n,{Z:()=>s});a(27378);var r=a(40624);const t={tabItem:"tabItem_wHwb"};var i=a(24246);function s(e){var n=e.children,a=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,s),hidden:a,children:n})}},23930:(e,n,a)=>{a.d(n,{Z:()=>j});var r=a(27378),t=a(40624),i=a(83457),s=a(3620),o=a(9834),l=a(30654),u=a(70784),c=a(71819);function d(e){var n,a;return null!=(n=null==(a=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function p(e){var n=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function f(e){var n,a,t,i,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,f=p(e),m=(0,r.useState)((function(){return function(e){var n,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var t=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:f})})),b=m[0],x=m[1],g=v({queryString:u,groupId:d}),y=g[0],w=g[1],j=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,c.Nk)(n),t=a[0],i=a[1],[t,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=j[0],q=j[1],E=function(){var e=null!=y?y:k;return h({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){E&&x(E)}),[E]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),q(e)}),[w,q,f]),tabValues:f}}var m=a(76457);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=a(24246);function g(e){var n=e.className,a=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,a=l.indexOf(n),t=o[a].value;t!==r&&(u(n),s(t))},d=function(e){var n,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,t=l.indexOf(e.currentTarget)+1;a=null!=(r=l[t])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;a=null!=(i=l[s])?i:l[l.length-1]}null==(n=a)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:o.map((function(e){var n=e.value,a=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},i,{className:(0,t.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=a?a:n}),n)}))})}function y(e){var n=e.lazy,a=e.children,t=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===t}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function w(e){var n=f(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,Object.assign({},e,n)),(0,x.jsx)(y,Object.assign({},e,n))]})}function j(e){var n=(0,m.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},71670:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var r=a(27378);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);