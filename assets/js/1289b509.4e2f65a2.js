"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1593],{5318:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),v=a,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||i;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},9798:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(7378),a=r(8944);const i="tabItem_wHwb";function o(e){var n=e.children,r=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},n)}},3930:(e,n,r)=>{r.d(n,{Z:()=>x});var t=r(5773),a=r(7378),i=r(8944),o=r(3457),s=r(3620),l=r(654),u=r(784),c=r(1819);function d(e){return function(e){var n,r;return null!=(n=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(r);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function v(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function f(e){var n,r,t,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,d=p(e),f=(0,a.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),h=f[0],b=f[1],y=m({queryString:l,groupId:u}),g=y[0],w=y[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,c.Nk)(n),t=r[0],i=r[1],[t,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),x=k[0],E=k[1],q=function(){var e=null!=g?g:x;return v({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){q&&b(q)}),[q]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!v({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),E(e)}),[w,E,d]),tabValues:d}}var h=r(6457);const b="tabList_J5MA",y="tabItem_l0OV";function g(e){var n=e.className,r=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,r=c.indexOf(n),t=u[r].value;t!==s&&(d(n),l(t))},v=function(e){var n,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var t,a=c.indexOf(e.currentTarget)+1;r=null!=(t=c[a])?t:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;r=null!=(i=c[o])?i:c[c.length-1]}null==(n=r)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n)},u.map((function(e){var n=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return c.push(e)},onKeyDown:v,onClick:p},o,{className:(0,i.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":s===n})}),null!=r?r:n)})))}function w(e){var n=e.lazy,r=e.children,t=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===t}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})})))}function k(e){var n=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b)},a.createElement(g,(0,t.Z)({},e,n)),a.createElement(w,(0,t.Z)({},e,n)))}function x(e){var n=(0,h.Z)();return a.createElement(k,(0,t.Z)({key:String(n)},e))}},2682:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>v});var t=r(5773),a=r(808),i=(r(7378),r(5318)),o=r(3930),s=r(9798),l=["components"],u={id:"running-imperatively",title:"Running validations imperatively"},c=void 0,d={unversionedId:"running-imperatively",id:"version-6.12.0/running-imperatively",title:"Running validations imperatively",description:"express-validator favors the declarative way of doing things that express middlewares bring.",source:"@site/versioned_docs/version-6.12.0/feature-running-imperatively.md",sourceDirName:".",slug:"/running-imperatively",permalink:"/docs/6.12.0/running-imperatively",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.12.0/feature-running-imperatively.md",tags:[],version:"6.12.0",frontMatter:{id:"running-imperatively",title:"Running validations imperatively"},sidebar:"version-6.12.0/docs",previous:{title:"Whole Body Validation",permalink:"/docs/6.12.0/whole-body-validation"},next:{title:"FAQ",permalink:"/docs/6.12.0/faq"}},p={},v=[{value:"Example: standardized validation error response",id:"example-standardized-validation-error-response",level:2},{value:"Example: validating with a condition",id:"example-validating-with-a-condition",level:2}],m={toc:v};function f(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"express-validator favors the declarative way of doing things that express middlewares bring.\nThis means most of the APIs ",(0,i.kt)("em",{parentName:"p"},"look and work better")," when simply passed into an express route handler."),(0,i.kt)("p",null,"You can, however, give control of running these validations to your own middleware/route handler.",(0,i.kt)("br",{parentName:"p"}),"\n","This is possible with the use of the declarative method ",(0,i.kt)("inlineCode",{parentName:"p"},"run(req)"),", available on\n",(0,i.kt)("a",{parentName:"p",href:"/docs/6.12.0/validation-chain-api#runreq-options"},"validation chain"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.12.0/sanitization-chain-api#runreq"},"sanitization chain"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.12.0/check-api#checkschemaschema"},(0,i.kt)("inlineCode",{parentName:"a"},"checkSchema"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.12.0/check-api#oneofvalidationchains-message"},(0,i.kt)("inlineCode",{parentName:"a"},"oneOf")),"."),(0,i.kt)("p",null,"Check the examples below to understand how this method can help you:"),(0,i.kt)("h2",{id:"example-standardized-validation-error-response"},"Example: standardized validation error response"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst { validationResult, ValidationChain } = require('express-validator');\n// can be reused by many routes\n\n// parallel processing\nconst validate = validations => {\n  return async (req, res, next) => {\n    await Promise.all(validations.map(validation => validation.run(req)));\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n\n// sequential processing, stops running validations chain if the previous one have failed.\nconst validate = validations => {\n  return async (req, res, next) => {\n    for (let validation of validations) {\n      const result = await validation.run(req);\n      if (result.errors.length) break;\n    }\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import express from 'express';\nimport { validationResult, ValidationChain } from 'express-validator';\n// can be reused by many routes\n\n// parallel processing\nconst validate = (validations: ValidationChain[]) => {\n  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {\n    await Promise.all(validations.map(validation => validation.run(req)));\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n\n// sequential processing, stops running validations chain if the previous one have failed.\nconst validate = (validations: ValidationChain[]) => {\n  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {\n    for (let validation of validations) {\n      const result = await validation.run(req);\n      if (result.errors.length) break;\n    }\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/api/create-user', validate([\n  body('email').isEmail(),\n  body('password').isLength({ min: 6 })\n]), async (req, res, next) => {\n  // request is guaranteed to not have any validation errors.\n  const user = await User.create({ ... });\n});\n")),(0,i.kt)("h2",{id:"example-validating-with-a-condition"},"Example: validating with a condition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post(\n  '/update-settings',\n  body('email').isEmail(),\n  body('password').optional().isLength({ min: 6 }),\n  async (req, res, next) => {\n    // if a password has been provided, then a confirmation must also be provided.\n    if (req.body.password) {\n      await body('passwordConfirmation')\n        .equals(req.body.password)\n        .withMessage('passwords do not match')\n        .run(req);\n    }\n\n    // Check the validation errors, and update the user's settings.\n  },\n);\n")))}f.isMDXComponent=!0}}]);