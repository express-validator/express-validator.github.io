"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9952],{5691:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(4246),t=r(1670),i=r(3930),s=r(9798);const o={id:"running-imperatively",title:"Running validations imperatively"},l=void 0,u={id:"running-imperatively",title:"Running validations imperatively",description:"express-validator favors the declarative way of doing things that express middlewares bring.",source:"@site/versioned_docs/version-6.10.0/feature-running-imperatively.md",sourceDirName:".",slug:"/running-imperatively",permalink:"/docs/6.10.0/running-imperatively",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.10.0/feature-running-imperatively.md",tags:[],version:"6.10.0",frontMatter:{id:"running-imperatively",title:"Running validations imperatively"},sidebar:"docs",previous:{title:"Whole Body Validation",permalink:"/docs/6.10.0/whole-body-validation"},next:{title:"FAQ",permalink:"/docs/6.10.0/faq"}},d={},c=[{value:"Example: standardized validation error response",id:"example-standardized-validation-error-response",level:2},{value:"Example: validating with a condition",id:"example-validating-with-a-condition",level:2}];function p(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["express-validator favors the declarative way of doing things that express middlewares bring.\nThis means most of the APIs ",(0,a.jsx)(n.em,{children:"look and work better"})," when simply passed into an express route handler."]}),"\n",(0,a.jsxs)(n.p,{children:["You can, however, give control of running these validations to your own middleware/route handler.",(0,a.jsx)(n.br,{}),"\n","This is possible with the use of the declarative method ",(0,a.jsx)(n.code,{children:"run(req)"}),", available on\n",(0,a.jsx)(n.a,{href:"/docs/6.10.0/validation-chain-api#runreq-options",children:"validation chain"}),", ",(0,a.jsx)(n.a,{href:"/docs/6.10.0/sanitization-chain-api#runreq",children:"sanitization chain"}),", ",(0,a.jsx)(n.a,{href:"/docs/6.10.0/check-api#checkschemaschema",children:(0,a.jsx)(n.code,{children:"checkSchema"})})," and ",(0,a.jsx)(n.a,{href:"/docs/6.10.0/check-api#oneofvalidationchains-message",children:(0,a.jsx)(n.code,{children:"oneOf"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Check the examples below to understand how this method can help you:"}),"\n",(0,a.jsx)(n.h2,{id:"example-standardized-validation-error-response",children:"Example: standardized validation error response"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const express = require('express');\nconst { validateResult, ValidationChain } = require('express-validator');\n// can be reused by many routes\n\n// parallel processing\nconst validate = validations => {\n  return async (req, res, next) => {\n    await Promise.all(validations.map(validation => validation.run(req)));\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n\n// sequential processing, stops running validations chain if the previous one have failed.\nconst validate = validations => {\n  return async (req, res, next) => {\n    for (let validation of validations) {\n      const result = await validation.run(req);\n      if (result.errors.length) break;\n    }\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n"})})}),(0,a.jsx)(s.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import express from 'express';\nimport { validateResult, ValidationChain } from 'express-validator';\n// can be reused by many routes\n\n// parallel processing\nconst validate = (validations: ValidationChain[]) => {\n  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {\n    await Promise.all(validations.map(validation => validation.run(req)));\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n\n// sequential processing, stops running validations chain if the previous one have failed.\nconst validate = (validations: ValidationChain[]) => {\n  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {\n    for (let validation of validations) {\n      const result = await validation.run(req);\n      if (result.errors.length) break;\n    }\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"app.post('/api/create-user', validate([\n  body('email').isEmail(),\n  body('password').isLength({ min: 6 })\n]), async (req, res, next) => {\n  // request is guaranteed to not have any validation errors.\n  const user = await User.create({ ... });\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-validating-with-a-condition",children:"Example: validating with a condition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"app.post(\n  '/update-settings',\n  body('email').isEmail(),\n  body('password').optional().isLength({ min: 6 }),\n  async (req, res, next) => {\n    // if a password has been provided, then a confirmation must also be provided.\n    if (req.body.password) {\n      await body('passwordConfirmation')\n        .equals(req.body.password)\n        .withMessage('passwords do not match')\n        .run(req);\n    }\n\n    // Check the validation errors, and update the user's settings.\n  },\n);\n"})})]})}function v(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9798:(e,n,r)=>{r.d(n,{Z:()=>s});r(7378);var a=r(624);const t={tabItem:"tabItem_wHwb"};var i=r(4246);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,s),hidden:r,children:n})}},3930:(e,n,r)=>{r.d(n,{Z:()=>j});var a=r(7378),t=r(624),i=r(3457),s=r(3620),o=r(9834),l=r(654),u=r(784),d=r(1819);function c(e){var n,r;return null!=(n=null==(r=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function p(e){var n=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function v(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function f(e){var n,r,t,i,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,f=p(e),m=(0,a.useState)((function(){return function(e){var n,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:f})})),b=m[0],x=m[1],g=h({queryString:u,groupId:c}),y=g[0],w=g[1],j=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,d.Nk)(n),t=r[0],i=r[1],[t,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),q=j[0],k=j[1],V=function(){var e=null!=y?y:q;return v({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){V&&x(V)}),[V]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!v({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),k(e)}),[w,k,f]),tabValues:f}}var m=r(6457);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=r(4246);function g(e){var n=e.className,r=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==a&&(u(n),s(t))},c=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,t=l.indexOf(e.currentTarget)+1;r=null!=(a=l[t])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;r=null!=(i=l[s])?i:l[l.length-1]}null==(n=r)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:c,onClick:d},i,{className:(0,t.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)}))})}function y(e){var n=e.lazy,r=e.children,t=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===t}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function w(e){var n=f(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,Object.assign({},e,n)),(0,x.jsx)(y,Object.assign({},e,n))]})}function j(e){var n=(0,m.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:c(e.children)}),String(n))}},1670:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var a=r(7378);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);