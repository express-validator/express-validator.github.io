"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6003],{5318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(5773),a=t(808),i=(t(7378),t(5318)),o=["components"],s={id:"running-imperatively",title:"Running validations imperatively"},l=void 0,d={unversionedId:"running-imperatively",id:"version-6.4.0/running-imperatively",title:"Running validations imperatively",description:"express-validator favors the declarative way of doing things that express middlewares bring.",source:"@site/versioned_docs/version-6.4.0/feature-running-imperatively.md",sourceDirName:".",slug:"/running-imperatively",permalink:"/docs/6.4.0/running-imperatively",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.4.0/feature-running-imperatively.md",tags:[],version:"6.4.0",frontMatter:{id:"running-imperatively",title:"Running validations imperatively"},sidebar:"version-6.4.0/docs",previous:{title:"Whole Body Validation",permalink:"/docs/6.4.0/whole-body-validation"},next:{title:"Validation middlewares",permalink:"/docs/6.4.0/check-api"}},p={},c=[{value:"Example: standardized validation error response",id:"example-standardized-validation-error-response",level:2},{value:"Example: validating with a condition",id:"example-validating-with-a-condition",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"express-validator favors the declarative way of doing things that express middlewares bring.\nThis means most of the APIs ",(0,i.kt)("em",{parentName:"p"},"look and work better")," when simply passed into an express route handler."),(0,i.kt)("p",null,"You can, however, give control of running these validations to your own middleware/route handler.",(0,i.kt)("br",{parentName:"p"}),"\n","This is possible with the use of the declarative method ",(0,i.kt)("inlineCode",{parentName:"p"},"run(req)"),", available on both\n",(0,i.kt)("a",{parentName:"p",href:"/docs/6.4.0/validation-chain-api#runreq"},"validation chain")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.4.0/sanitization-chain-api#runreq"},"sanitization chains"),"."),(0,i.kt)("p",null,"Check the examples below to understand how this method can help you:"),(0,i.kt)("h2",{id:"example-standardized-validation-error-response"},"Example: standardized validation error response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// can be reused by many routes\nconst validate = validations => {\n  return async (req, res, next) => {\n    await Promise.all(validations.map(validation => validation.run(req)));\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n\napp.post('/api/create-user', validate([\n  body('email').isEmail(),\n  body('password').isLength({ min: 6 })\n]), async (req, res, next) => {\n  // request is guaranteed to not have any validation errors.\n  const user = await User.create({ ... });\n});\n")),(0,i.kt)("h2",{id:"example-validating-with-a-condition"},"Example: validating with a condition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/update-settings', [\n  body('email').isEmail(),\n  body('password').optional().isLength({ min: 6 })\n], async (req, res, next) => {\n  // if a password has been provided, then a confirmation must also be provided.\n  if (req.body.password) {\n    await body('passwordConfirmation')\n      .equals(req.body.password).withMessage('passwords do not match')\n      .run(req);\n  }\n\n  // Check the validation errors, and update the user's settings.\n});\n")))}m.isMDXComponent=!0}}]);