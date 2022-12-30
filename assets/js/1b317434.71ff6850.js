"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2028],{5318:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var i=t(7378);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),d=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return i.createElement(s.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=n,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?i.createElement(k,l(l({ref:a},p),{},{components:t})):i.createElement(k,l({ref:a},p))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3280:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var i=t(5773),n=t(808),r=(t(7378),t(5318)),l=["components"],o={id:"legacy-api",title:"Legacy API"},s=void 0,d={unversionedId:"legacy-api",id:"version-5.3.0/legacy-api",title:"Legacy API",description:'The "legacy API" is the same API used by version 3 and older releases of express-validator.',source:"@site/versioned_docs/version-5.3.0/api-legacy.md",sourceDirName:".",slug:"/legacy-api",permalink:"/docs/5.3.0/legacy-api",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-5.3.0/api-legacy.md",tags:[],version:"5.3.0",frontMatter:{id:"legacy-api",title:"Legacy API"},sidebar:"version-5.3.0/docs",previous:{title:"Validation Result API",permalink:"/docs/5.3.0/validation-result-api"}},p={},m=[{value:"Setup",id:"setup",level:2},{value:"Middleware options",id:"middleware-options",level:2},{value:"Legacy Validation Chain",id:"legacy-validation-chain",level:2},{value:"<code>req.check(field[, message])</code>",id:"reqcheckfield-message",level:2},{value:"<code>req.checkBody(field[, message])</code>",id:"reqcheckbodyfield-message",level:2},{value:"<code>req.checkCookies(field[, message])</code>",id:"reqcheckcookiesfield-message",level:2},{value:"<code>req.checkHeaders(field[, message])</code>",id:"reqcheckheadersfield-message",level:2},{value:"<code>req.checkParams(field[, message])</code>",id:"reqcheckparamsfield-message",level:2},{value:"<code>req.checkQuery(field[, message])</code>",id:"reqcheckqueryfield-message",level:2},{value:"<code>req.sanitize(field)</code>",id:"reqsanitizefield",level:2},{value:"<code>req.sanitizeBody(field[, message])</code>",id:"reqsanitizebodyfield-message",level:2},{value:"<code>req.sanitizeCookies(field[, message])</code>",id:"reqsanitizecookiesfield-message",level:2},{value:"<code>req.sanitizeHeaders(field[, message])</code>",id:"reqsanitizeheadersfield-message",level:2},{value:"<code>req.sanitizeParams(field[, message])</code>",id:"reqsanitizeparamsfield-message",level:2},{value:"<code>req.sanitizeQuery(field[, message])</code>",id:"reqsanitizequeryfield-message",level:2},{value:"<code>req.getValidationResult()</code>",id:"reqgetvalidationresult",level:2},{value:"<code>req.asyncValidationErrors([mapped])</code>",id:"reqasyncvalidationerrorsmapped",level:2},{value:"<code>req.validationErrors([mapped])</code>",id:"reqvalidationerrorsmapped",level:2},{value:"Schema validation",id:"schema-validation",level:2}],c={toc:m};function u(e){var a=e.components,t=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'The "legacy API" is the same API used by version 3 and older releases of express-validator.'),(0,r.kt)("p",null,"It's based around setting a global middleware in your express app and decorating the request object with new methods."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API ",(0,r.kt)("strong",{parentName:"p"},"MUST NOT")," be used by new apps, since it may not receive new updates and can even be removed in a future major version.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You must mount the middleware in your app before you get access to the validation/sanitization methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const expressValidator = require('express-validator');\napp.use(expressValidator(middlewareOptions));\n")),(0,r.kt)("h2",{id:"middleware-options"},"Middleware options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"errorFormatter (param, msg, value, location)"),": a function that formats the error objects before returning them to your route handlers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customValidators"),": an object where you can specify custom validators.",(0,r.kt)("br",{parentName:"li"}),"The key will be the name of the validator, while the value is the validation function, receiving the value and any option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customSanitizers"),": an object where you can specify custom sanitizers.",(0,r.kt)("br",{parentName:"li"}),"The key will be the name of the sanitizer, while the value is the sanitization function, receiving the value and any option.")),(0,r.kt)("h2",{id:"legacy-validation-chain"},"Legacy Validation Chain"),(0,r.kt)("p",null,"The Legacy Validation Chain instances provides further functionality than the one provided by the base ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.3.0/validation-chain-api"},"Validation Chain")," objects.",(0,r.kt)("br",{parentName:"p"}),"\n","It also differs in that the legacy one is not a middleware ",(0,r.kt)("em",{parentName:"p"},"per se"),"."),(0,r.kt)("p",null,"Any custom validator specified in the middleware will be made available\nin instances of this validation chain."),(0,r.kt)("p",null,"Additionally, the following validators are also available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".notEmpty()"),": alias of ",(0,r.kt)("inlineCode",{parentName:"li"},".isLength({ min: 1 })")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".len()"),": alias of ",(0,r.kt)("inlineCode",{parentName:"li"},".isLength()"))),(0,r.kt)("h2",{id:"reqcheckfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.check(field[, message])")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field"),": the name of a single field to validate against."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," ",(0,r.kt)("em",{parentName:"li"},"(optional)"),": an error message to use when failed validators don't specify a message. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"Invalid value"),".",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a ",(0,r.kt)("a",{parentName:"p",href:"#legacy-validation-chain"},"legacy validation chain"))))),(0,r.kt)("p",null,"Creates a validation chain for one field. It may be located in any of the following request objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.params")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.body")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.headers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.cookies"))),(0,r.kt)("p",null,"If it's present in more than one location, then only the first one (following the above order) will be validated against."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This function is also aliased as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.assert()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"req.validate()"),".")),(0,r.kt)("h2",{id:"reqcheckbodyfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.checkBody(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.check(field[, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body"),"."),(0,r.kt)("h2",{id:"reqcheckcookiesfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.checkCookies(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.check(field[, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.cookies"),"."),(0,r.kt)("h2",{id:"reqcheckheadersfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.checkHeaders(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.check(field[, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.headers"),"."),(0,r.kt)("h2",{id:"reqcheckparamsfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.checkParams(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.check(field[, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.params"),"."),(0,r.kt)("h2",{id:"reqcheckqueryfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.checkQuery(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.check(field[, message])"),", but only checking ",(0,r.kt)("inlineCode",{parentName:"p"},"req.query"),"."),(0,r.kt)("h2",{id:"reqsanitizefield"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.sanitize(field)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a sanitizer chain")),(0,r.kt)("p",null,"Creates a sanitizer chain that, when any of the sanitization methods is used, the return value is the sanitized value.",(0,r.kt)("br",{parentName:"p"}),"\n","Also, the parameter is sanitized in-place; that is, in the below example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"req.body.comment")," will be updated to the sanitized value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const comment = req.sanitize('comment').trim();\nconsole.log(comment === req.body.comment);\n")),(0,r.kt)("p",null,"If the sanitized parameter is present in more than one location (eg ",(0,r.kt)("inlineCode",{parentName:"p"},"req.query.comment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body.comment"),"), the will all be sanitized."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This function is also aliased as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.filter()"),".")),(0,r.kt)("h2",{id:"reqsanitizebodyfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.sanitizeBody(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.sanitize(field[, message])"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body"),"."),(0,r.kt)("h2",{id:"reqsanitizecookiesfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.sanitizeCookies(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.sanitize(field[, message])"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.cookies"),"."),(0,r.kt)("h2",{id:"reqsanitizeheadersfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.sanitizeHeaders(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.sanitize(field[, message])"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.headers"),"."),(0,r.kt)("h2",{id:"reqsanitizeparamsfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.sanitizeParams(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.sanitize(field[, message])"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.params"),"."),(0,r.kt)("h2",{id:"reqsanitizequeryfield-message"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.sanitizeQuery(field[, message])")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.sanitize(field[, message])"),", but only sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"req.query"),"."),(0,r.kt)("h2",{id:"reqgetvalidationresult"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.getValidationResult()")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a promise for a ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.3.0/validation-result-api"},"Validation Result")," object")),(0,r.kt)("p",null,"Runs all validations and returns a validation result object for the errors gathered, for both sync and async validators."),(0,r.kt)("h2",{id:"reqasyncvalidationerrorsmapped"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.asyncValidationErrors([mapped])")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapped")," ",(0,r.kt)("em",{parentName:"li"},"(optional)"),": whether the result must be an object instead of an array. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," a promise which will resolve in case all validators passed, or reject with an array of errors or an object of errors (in case ",(0,r.kt)("inlineCode",{parentName:"p"},"mapped")," argument is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),").")))),(0,r.kt)("p",null,"Runs all validations and returns the errors gathered for all of them."),(0,r.kt)("h2",{id:"reqvalidationerrorsmapped"},(0,r.kt)("inlineCode",{parentName:"h2"},"req.validationErrors([mapped])")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapped")," ",(0,r.kt)("em",{parentName:"li"},"(optional)"),": whether the result must be an object instead of an array. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if no errors happened, an array of errors or an object of errors (in case ",(0,r.kt)("inlineCode",{parentName:"p"},"mapped")," argument is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),").")))),(0,r.kt)("p",null,"Runs all validations and returns the errors gathered ",(0,r.kt)("em",{parentName:"p"},"only")," for the completed validators.",(0,r.kt)("br",{parentName:"p"}),"\n","This probably means any async validator will not be completed by the time this method responds."),(0,r.kt)("h2",{id:"schema-validation"},"Schema validation"),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"req.check")," methods can do schema validation. The schema syntax is the same as described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.3.0/schema-validation"},"Schema Validation"),"."))}u.isMDXComponent=!0}}]);