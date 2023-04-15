"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7700],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(5773),r=a(808),i=(a(7378),a(5318)),o=["components"],l={title:"Migration from v5 to v6",toc_max_heading_level:4},s=void 0,d={unversionedId:"migration-v5-to-v6",id:"version-6.12.0/migration-v5-to-v6",title:"Migration from v5 to v6",description:"The migration process from express-validator v5.x.x to v6.x.x is manual.",source:"@site/versioned_docs/version-6.12.0/migration-v5-to-v6.md",sourceDirName:".",slug:"/migration-v5-to-v6",permalink:"/docs/6.12.0/migration-v5-to-v6",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.12.0/migration-v5-to-v6.md",tags:[],version:"6.12.0",frontMatter:{title:"Migration from v5 to v6",toc_max_heading_level:4},sidebar:"version-6.12.0/docs",previous:{title:"FAQ",permalink:"/docs/6.12.0/faq"}},p={},m=[{value:"Support",id:"support",level:2},{value:"From legacy to check API",id:"from-legacy-to-check-api",level:2},{value:"express.js application set up",id:"expressjs-application-set-up",level:3},{value:"Route handlers",id:"route-handlers",level:3},{value:"Validations/sanitizations chains",id:"validationssanitizations-chains",level:4},{value:"Custom validators/sanitizers",id:"custom-validatorssanitizers",level:4},{value:"Validation errors",id:"validation-errors",level:4},{value:"Deprecations",id:"deprecations",level:2},{value:"Other breaking changes",id:"other-breaking-changes",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The migration process from express-validator v5.x.x to v6.x.x is manual.\nYou'll need to follow these steps after you've upgraded the package on your project."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Node 6 is no longer supported. You'll need to upgrade to Node 8 or newer."),(0,i.kt)("h2",{id:"from-legacy-to-check-api"},"From legacy to check API"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These steps are only necessary if your project has been using the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/5.3.0/legacy-api"},"legacy express-validator API"),"."),(0,i.kt)("p",{parentName:"admonition"},"If you are already using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.12.0/check-api"},"check APIs"),", then you shouldn't need to do anything\nunder this section.")),(0,i.kt)("h3",{id:"expressjs-application-set-up"},"express.js application set up"),(0,i.kt)("p",null,"express-validator is no longer a single middleware that you add to the request.\nYou'll need to remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.use(expressValidator())")," line(s) from your express.js application set up."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If your application passes options to ",(0,i.kt)("inlineCode",{parentName:"p"},"expressValidator()"),", please read about\n",(0,i.kt)("a",{parentName:"p",href:"#custom-validatorssanitizers"},"custom validators/sanitizers")," and ",(0,i.kt)("a",{parentName:"p",href:"#validation-errors"},"validation errors"),".")),(0,i.kt)("h3",{id:"route-handlers"},"Route handlers"),(0,i.kt)("h4",{id:"validationssanitizations-chains"},"Validations/sanitizations chains"),(0,i.kt)("p",null,"It's necessary to make a couple of changes to how the validations/sanitizations are written."),(0,i.kt)("p",null,"You'll need to replace the following snippets all around your codebase:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"From"),(0,i.kt)("th",{parentName:"tr",align:null},"To"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.check(field)"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"req.assert(field)"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"req.validate(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await check(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.checkBody(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await body(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.checkCookies(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await cookie(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.checkHeaders(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await header(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.checkParams(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await param(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.checkQuery(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await query(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.sanitize(field)"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"req.filter(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await sanitize(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.sanitizeBody(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await sanitizeBody(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.sanitizeCookies(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await sanitizeCookie(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.sanitizeHeaders(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await sanitizeHeader(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.sanitizeParams(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await sanitizeParam(field)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.sanitizeQuery(field)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await sanitizeQuery(field)"))))),(0,i.kt)("p",null,"Additionally, you'll also have to append ",(0,i.kt)("inlineCode",{parentName:"p"},".run(req)")," to the end of those chains."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"+ const { body, sanitizeBody } = require('express-validator');\n\napp.post('/contact-us', (req, res) => {\n- req.checkBody('email').isEmail();\n+ await body('email').isEmail().run(req);\n\n- req.sanitizeBody('message')\n+ await sanitizeBody('message')\n  .escape()\n- .trim();\n+ .trim()\n+ .run(req);\n});\n")),(0,i.kt)("h4",{id:"custom-validatorssanitizers"},"Custom validators/sanitizers"),(0,i.kt)("p",null,"Custom validators and sanitizers are no longer defined in the base express-validator middleware,\nwhich used to make them available to every validation chain."),(0,i.kt)("p",null,"You'll need to wrap their definition in each chain in ",(0,i.kt)("inlineCode",{parentName:"p"},".custom()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".customSanitizer()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- const expressValidator = require('express-validator');\n+ const { body, sanitize } = require('express-validator');\n\nconst isEmailNotInUse = async value => { /* check if email is not taken by other user */ };\nconst muteOffensiveWords = value => { /* replace offensive words with *** */ };\n\n- app.use(expressValidator({\n-  customValidators: { isEmailNotInUse },\n-  customSanitizers: { muteOffensiveWords }\n- }));\n\napp.use('/sign-up', (req, res) => {\n- req.checkBody('email').isEmailNotInUse();\n+ await body('email').custom(isEmailNotInUse).run(req);\n});\n\napp.use('/contact-us', (req, res) => {\n- req.sanitize('message').muteOffensiveWords();\n+ await sanitize('message').customSanitizer(muteOffensiveWords).run(req);\n});\n")),(0,i.kt)("h4",{id:"validation-errors"},"Validation errors"),(0,i.kt)("p",null,"You'll need to replace the following snippets in your codebase:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"From"),(0,i.kt)("th",{parentName:"tr",align:null},"To"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.validationErrors()"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"await req.asyncValidationErrors()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validationResult(req).array()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.validationErrors(true)"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"await req.asyncValidationErrors(true)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validationResult(req).mapped()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"req.getValidationResult()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validationResult(req)"))))),(0,i.kt)("p",null,"If your express-validator middleware used to define an ",(0,i.kt)("inlineCode",{parentName:"p"},"errorFormatter")," option, you can create a custom\n",(0,i.kt)("inlineCode",{parentName:"p"},"validationResult")," function that defines it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- const expressValidator = require('express-validator');\n+ const { body, validationResult } = require('express-validator');\n\nconst errorFormatter = (param, msg, value) => { /* return something */ };\n\n- app.use(expressValidator({\n-  errorFormatter\n- }));\n+ const myValidationResult = validationResult.withDefaults({ formatter: errorFormatter });\n\napp.use('/sign-up', (req, res) => {\n- req.checkBody('email').isEmailNotInUse();\n+ await body('email').custom(isEmailNotInUse).run(req);\n\n- const errors = req.validationErrors();\n+ const errors = myValidationResult(req).array();\n});\n")),(0,i.kt)("h2",{id:"deprecations"},"Deprecations"),(0,i.kt)("p",null,"Importing from ",(0,i.kt)("inlineCode",{parentName:"p"},"express-validator/check")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"express-validator/filter")," is now deprecated,\nand will log a warning message to your application's console."),(0,i.kt)("p",null,"You should now be able to simply import everything from ",(0,i.kt)("inlineCode",{parentName:"p"},"express-validator"),"."),(0,i.kt)("h2",{id:"other-breaking-changes"},"Other breaking changes"),(0,i.kt)("p",null,"Please check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/express-validator/express-validator/releases/tag/v6.0.0"},"express-validator v6.0.0 release notes"),"\nto learn about other breaking changes."))}c.isMDXComponent=!0}}]);