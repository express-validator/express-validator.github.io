"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[410],{5318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(5773),r=a(808),i=(a(7378),a(5318)),o=["components"],s={title:"Schema validation"},c=void 0,l={unversionedId:"guides/schema-validation",id:"guides/schema-validation",title:"Schema validation",description:"What are schemas?",source:"@site/../docs/guides/schema-validation.md",sourceDirName:"guides",slug:"/guides/schema-validation",permalink:"/docs/next/guides/schema-validation",draft:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/../docs/guides/schema-validation.md",tags:[],version:"current",frontMatter:{title:"Schema validation"},sidebar:"docs",previous:{title:"Manually running validations",permalink:"/docs/next/guides/manually-running"},next:{title:"Migrating",permalink:"/docs/next/category/migrating"}},d={},u=[{value:"What are schemas?",id:"what-are-schemas",level:2},{value:"Specifying a schema",id:"specifying-a-schema",level:2},{value:"Using wildcards and globstars",id:"using-wildcards-and-globstars",level:3}],p={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-are-schemas"},"What are schemas?"),(0,i.kt)("p",null,"Schemas are an object-based way of defining validations or sanitizations on requests.\nThey offer exactly the same functionality as regular validation chains - in fact, under the hood,\nexpress-validator deals all in validation chains!"),(0,i.kt)("p",null,"If you don't like the idea of specifying your validations using JavaScript functions, and instead\nprefer an even more declarative approach, then schema validations might be the right express-validator\ntool for you."),(0,i.kt)("h2",{id:"specifying-a-schema"},"Specifying a schema"),(0,i.kt)("p",null,"Schemas are plain JavaScript objects that you pass to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check-schema"},(0,i.kt)("inlineCode",{parentName:"a"},"checkSchema()")," function"),",\nwhere you specify which fields to validate as the keys, and the schema of the field as the value."),(0,i.kt)("p",null,"In turn, the field schemas contain the validators, sanitizers, and any options to modify the behavior\nof the internal validation chain."),(0,i.kt)("p",null,"A basic example looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"checkSchema({\n  username: {\n    errorMessage: 'Invalid username',\n    isEmail: true,\n  },\n  password: {\n    isLength: {\n      options: { min: 8 },\n      errorMessage: 'Password should be at least 8 chars',\n    },\n  },\n});\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/check-schema#schema"},"full documentation")," to learn about all of the options.")),(0,i.kt)("h3",{id:"using-wildcards-and-globstars"},"Using wildcards and globstars"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/guides/field-selection#advanced-features"},"advanced field selection features")," are also available\nwhen using schemas."),(0,i.kt)("p",null,"It should be noted that in JavaScript it's not possible to directly use the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," character as an\nobject key though, so it must be wrapped in quotes for it to work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"checkSchema({\n  'addresses.*.street': {\n    notEmpty: true,\n  },\n  'addresses.*.number': {\n    isInt: true,\n  },\n});\n")))}h.isMDXComponent=!0}}]);