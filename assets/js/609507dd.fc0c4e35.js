"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2803],{5318:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>h});var n=t(7378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(h,o(o({ref:a},u),{},{components:t})):n.createElement(h,o({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9798:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7378),r=t(8944);const i="tabItem_wHwb";function o(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},a)}},3930:(e,a,t)=>{t.d(a,{Z:()=>C});var n=t(5773),r=t(7378),i=t(8944),o=t(3457),l=t(3620),s=t(654),c=t(784),u=t(1819);function d(e){return function(e){var a,t;return null!=(a=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function p(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:d(t);return function(e){var a=(0,c.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function h(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,i=(0,l.k6)(),o=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var a=new URLSearchParams(i.location.search);a.set(o,e),i.replace(Object.assign({},i.location,{search:a.toString()}))}}),[o,i])]}function k(e){var a,t,n,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,c=e.groupId,d=p(e),k=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),f=k[0],v=k[1],y=h({queryString:s,groupId:c}),g=y[0],N=y[1],b=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Nk)(a),n=t[0],i=t[1],[n,(0,r.useCallback)((function(e){a&&i.set(e)}),[a,i])]),C=b[0],x=b[1],E=function(){var e=null!=g?g:C;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),x(e)}),[N,x,d]),tabValues:d}}var f=t(6457);const v="tabList_J5MA",y="tabItem_l0OV";function g(e){var a=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var a=e.currentTarget,t=u.indexOf(a),n=c[t].value;n!==l&&(d(a),s(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;t=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;t=null!=(i=u[o])?i:u[u.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a)},c.map((function(e){var a=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:function(e){return u.push(e)},onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":l===a})}),null!=t?t:a)})))}function N(e){var a=e.lazy,t=e.children,n=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function b(e){var a=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v)},r.createElement(g,(0,n.Z)({},e,a)),r.createElement(N,(0,n.Z)({},e,a)))}function C(e){var a=(0,f.Z)();return r.createElement(b,(0,n.Z)({key:String(a)},e))}},546:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=t(5773),r=t(808),i=(t(7378),t(5318)),o=t(3930),l=t(9798),s=["components"],c={title:"ExpressValidator"},u="ExpressValidator",d={unversionedId:"api/express-validator",id:"api/express-validator",title:"ExpressValidator",description:"ExpressValidator",source:"@site/../docs/api/express-validator.md",sourceDirName:"api",slug:"/api/express-validator",permalink:"/docs/next/api/express-validator",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/../docs/api/express-validator.md",tags:[],version:"current",frontMatter:{title:"ExpressValidator"},sidebar:"api",previous:{title:"ValidationChain",permalink:"/docs/next/api/validation-chain"},next:{title:"matchedData",permalink:"/docs/next/api/matched-data"}},p={},m=[{value:"<code>ExpressValidator</code>",id:"expressvalidator",level:2},{value:"Usage",id:"usage",level:3},{value:"With custom validators only",id:"with-custom-validators-only",level:4},{value:"With custom sanitizers only",id:"with-custom-sanitizers-only",level:4},{value:"<code>.check()</code>",id:"check",level:3},{value:"<code>.body()</code>",id:"body",level:3},{value:"<code>.cookie()</code>",id:"cookie",level:3},{value:"<code>.header()</code>",id:"header",level:3},{value:"<code>.param()</code>",id:"param",level:3},{value:"<code>.query()</code>",id:"query",level:3},{value:"<code>.buildCheckFunction()</code>",id:"buildcheckfunction",level:3},{value:"<code>.checkExact()</code>",id:"checkexact",level:3},{value:"<code>.checkSchema()</code>",id:"checkschema",level:3},{value:"<code>.matchedData()</code>",id:"matcheddata",level:3},{value:"<code>.oneOf()</code>",id:"oneof",level:3},{value:"<code>.validationResult()</code>",id:"validationresult",level:3},{value:"<code>CustomSchema</code>",id:"customschema",level:2},{value:"<code>CustomValidationChain</code>",id:"customvalidationchain",level:2}],h={toc:m};function k(e){var a=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expressvalidator"},(0,i.kt)("inlineCode",{parentName:"h1"},"ExpressValidator")),(0,i.kt)("h2",{id:"expressvalidator"},(0,i.kt)("inlineCode",{parentName:"h2"},"ExpressValidator")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ExpressValidator } from 'express-validator';\nnew ExpressValidator(\n  customValidators?: Record<string, CustomValidator>,\n  customSanitizers?: Record<string, CustomSanitizer>,\n  options?: {\n    errorFormatter: ErrorFormatter<E>;\n  }\n);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," is a class which wraps the entire express-validator API, with some differences:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"you can specify custom validators and/or custom sanitizers that are always available in validation chains;"),(0,i.kt)("li",{parentName:"ol"},"you can specify options that apply by default to some functions.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customValidators")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"customSanitizers")," are objects from custom validator/sanitizer name to implementation.",(0,i.kt)("br",null),"\nSee examples in the ",(0,i.kt)("a",{parentName:"p",href:"#usage"},"usage section"),", and see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/guides/customizing#custom-validators-and-sanitizers"},'"Custom Validators and Sanitizers" guide'),"\nto learn more."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"options.errorFormatter")," is set, it's used as the default error formatter used by ",(0,i.kt)("a",{parentName:"p",href:"#validationresult"},(0,i.kt)("inlineCode",{parentName:"a"},".validationResult()")),"."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("h4",{id:"with-custom-validators-only"},"With custom validators only"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { body } = new ExpressValidator({\n  isEmailNotInUse: async value => {\n    const user = await Users.findByEmail(value);\n    if (user) {\n      throw new Error('E-mail already in use');\n    }\n  },\n});\n\napp.post('/signup', body('email').isEmailNotInUse(), (req, res) => {});\n")),(0,i.kt)("h4",{id:"with-custom-sanitizers-only"},"With custom sanitizers only"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { body } = new ExpressValidator({}, {\n  muteOffensiveWords: async value => {\n    for (const word of offensiveWords) {\n      value = value.replaceAll(new RegExp(`\\\\b${word}\\\\b`), word[0].padEnd(word.length, '*'));\n    }\n    return value;\n  },\n});\n\napp.post('/add-comment', body('comment').muteOffensiveWords(), (req, res) => {});\n")),(0,i.kt)("h3",{id:"check"},(0,i.kt)("inlineCode",{parentName:"h3"},".check()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"check(fields?: string | string[], message?: any): CustomValidationChain<T>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check#check"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"check()")," function"),", but returning a\n",(0,i.kt)("a",{parentName:"p",href:"#customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationChain"))," for that ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("h3",{id:"body"},(0,i.kt)("inlineCode",{parentName:"h3"},".body()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"body(fields?: string | string[], message?: any): CustomValidationChain<T>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check#body"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"body()")," function"),", but returning a\n",(0,i.kt)("a",{parentName:"p",href:"#customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationChain"))," for that ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("h3",{id:"cookie"},(0,i.kt)("inlineCode",{parentName:"h3"},".cookie()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"cookie(fields?: string | string[], message?: any): CustomValidationChain<T>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check#cookie"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"cookie()")," function"),", but returning a\n",(0,i.kt)("a",{parentName:"p",href:"#customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationChain"))," for that ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("h3",{id:"header"},(0,i.kt)("inlineCode",{parentName:"h3"},".header()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"header(fields?: string | string[], message?: any): CustomValidationChain<T>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check#header"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"header()")," function"),", but returning a\n",(0,i.kt)("a",{parentName:"p",href:"#customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationChain"))," for that ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("h3",{id:"param"},(0,i.kt)("inlineCode",{parentName:"h3"},".param()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"param(fields?: string | string[], message?: any): CustomValidationChain<T>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check#check"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"check()")," function"),", but returning a\n",(0,i.kt)("a",{parentName:"p",href:"#customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationChain"))," for that ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("h3",{id:"query"},(0,i.kt)("inlineCode",{parentName:"h3"},".query()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"query(fields?: string | string[], message?: any): CustomValidationChain<T>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check#query"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"query()")," function"),", but returning a\n",(0,i.kt)("a",{parentName:"p",href:"#customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationChain"))," for that ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("h3",{id:"buildcheckfunction"},(0,i.kt)("inlineCode",{parentName:"h3"},".buildCheckFunction()")),(0,i.kt)("h3",{id:"checkexact"},(0,i.kt)("inlineCode",{parentName:"h3"},".checkExact()")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check-exact#checkexact"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"checkExact()")," function"),".\nOnly present in ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," for convenience."),(0,i.kt)("h3",{id:"checkschema"},(0,i.kt)("inlineCode",{parentName:"h3"},".checkSchema()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"checkSchema(schema: CustomSchema<T>, defaultLocations?: Location[]): CustomValidationChain<T>[]\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check-schema#checkschema"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"checkSchema()")," function"),", but the schema can reference\nthe custom validators or sanitizers from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { checkSchema } = new ExpressValidator({ isEmailNotInUse });\napp.post(\n  '/signup',\n  checkSchema({\n    email: { isEmailNotInUse: true },\n  }),\n  (req, res) => {\n    // handle request\n  },\n);\n")),(0,i.kt)("h3",{id:"matcheddata"},(0,i.kt)("inlineCode",{parentName:"h3"},".matchedData()")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/matched-data"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"matchedData()")," function"),".\nOnly present in ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," for convenience."),(0,i.kt)("h3",{id:"oneof"},(0,i.kt)("inlineCode",{parentName:"h3"},".oneOf()")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/one-of"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"oneOf()")," function"),", but accepts ",(0,i.kt)("a",{parentName:"p",href:"#customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationChain"),"s"),"\ncreated from ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator"),"."),(0,i.kt)("h3",{id:"validationresult"},(0,i.kt)("inlineCode",{parentName:"h3"},".validationResult()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"validationResult(req): Result<E>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/validation-result#validationresult"},"standalone ",(0,i.kt)("inlineCode",{parentName:"a"},"validationResult()")," function"),",\nbut uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"options.errorFormatter")," passed in the constructor by default."),(0,i.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { ExpressValidator } = require('express-validator');\n\nconst { query, validationResult } = new ExpressValidator({}, {}, {\n  errorFormatter: error => error.msg,\n};\n\napp.post('/hello', query('person').notEmpty(), (req, res) => {\n  const result = validationResult(req);\n  const errors = result.array();\n  // => ['Invalid value', ... ]\n\n  const result2 = result.formatWith(error => `${error.msg}!!!`);\n  const errors2 = result2.array();\n  // => ['Invalid value!!!']\n});\n"))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Result, ExpressValidator } from 'express-validator';\n\nconst { query, validationResult } = new ExpressValidator({}, {}, {\n  errorFormatter: error => error.msg as string,\n};\n\napp.post('/hello', query('person').notEmpty(), (req, res) => {\n  const result: Result<string> = validationResult(req);\n  const errors = result.array();\n  // => ['Invalid value', ... ]\n\n  const result2: Result<string> = result.formatWith(error => `${error.msg}!!!`);\n  const errors2 = result2.array();\n  // => ['Invalid value!!!']\n});\n")))),(0,i.kt)("h2",{id:"customschema"},(0,i.kt)("inlineCode",{parentName:"h2"},"CustomSchema")),(0,i.kt)("p",null,"The type of a schema created through ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator"),"."),(0,i.kt)("p",null,"Has a single generic parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", which is the type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ExpressValidator, CustomSchema } from 'express-validator';\n\nconst myExpressValidator = new ExpressValidator({ isEmailNotInUse });\ntype MyCustomSchema = CustomSchema<typeof myExpressValidator>;\n\nconst schema: MyCustomSchema = {\n  email: { isEmailNotInUse: true },\n};\n")),(0,i.kt)("h2",{id:"customvalidationchain"},(0,i.kt)("inlineCode",{parentName:"h2"},"CustomValidationChain")),(0,i.kt)("p",null,"The type of a validation chain created through ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator"),"."),(0,i.kt)("p",null,"Has a single generic parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", which is the type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpressValidator")," instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ExpressValidator, CustomValidationChain } from 'express-validator';\n\nconst myExpressValidator = new ExpressValidator({ isEmailNotInUse });\ntype MyValidationChain = CustomValidationChain<typeof myExpressValidator>;\n\nconst chain: MyValidationChain = myExpressValidator.body('email').isEmailNotInUse();\n")))}k.isMDXComponent=!0}}]);