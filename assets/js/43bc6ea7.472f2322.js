"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8806],{7795:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var s=n(4246),d=n(1670);const t={id:"filter-api",title:"Sanitization middlewares"},a=void 0,r={id:"filter-api",title:"Sanitization middlewares",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.3.0/api-filter.md",sourceDirName:".",slug:"/filter-api",permalink:"/docs/6.3.0/filter-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.3.0/api-filter.md",tags:[],version:"6.3.0",frontMatter:{id:"filter-api",title:"Sanitization middlewares"},sidebar:"api",previous:{title:"Validation Chain API",permalink:"/docs/6.3.0/validation-chain-api"},next:{title:"Sanitization Chain API",permalink:"/docs/6.3.0/sanitization-chain-api"}},l={},o=[{value:"<code>sanitize(fields)</code>",id:"sanitizefields",level:2},{value:"<code>sanitizeBody(fields)</code>",id:"sanitizebodyfields",level:2},{value:"<code>sanitizeCookie(fields)</code>",id:"sanitizecookiefields",level:2},{value:"<code>sanitizeParam(fields)</code>",id:"sanitizeparamfields",level:2},{value:"<code>sanitizeQuery(fields)</code>",id:"sanitizequeryfields",level:2},{value:"<code>buildSanitizeFunction(locations)</code>",id:"buildsanitizefunctionlocations",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["These methods are all available via ",(0,s.jsx)(i.code,{children:"require('express-validator')"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"sanitizefields",children:(0,s.jsx)(i.code,{children:"sanitize(fields)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"field"}),": a string or an array of strings of field names to validate against."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," a ",(0,s.jsx)(i.a,{href:"/docs/6.3.0/sanitization-chain-api",children:"Sanitization Chain"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Creates a sanitization chain for one or more fields. They may be located in any of the following request objects:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"req.body"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"req.cookies"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"req.params"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"req.query"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.em,{children:["* ",(0,s.jsx)(i.code,{children:"req.headers"})," is ",(0,s.jsx)(i.strong,{children:"not"})," supported at the moment."]})}),"\n",(0,s.jsx)(i.p,{children:"If any of the fields are present in more than one location, then all instances of that field value will be sanitized."}),"\n",(0,s.jsx)(i.h2,{id:"sanitizebodyfields",children:(0,s.jsx)(i.code,{children:"sanitizeBody(fields)"})}),"\n",(0,s.jsxs)(i.p,{children:["Same as ",(0,s.jsx)(i.code,{children:"sanitize(fields)"}),", but only sanitizing ",(0,s.jsx)(i.code,{children:"req.body"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"sanitizecookiefields",children:(0,s.jsx)(i.code,{children:"sanitizeCookie(fields)"})}),"\n",(0,s.jsxs)(i.p,{children:["Same as ",(0,s.jsx)(i.code,{children:"sanitize(fields)"}),", but only sanitizing ",(0,s.jsx)(i.code,{children:"req.cookies"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"sanitizeparamfields",children:(0,s.jsx)(i.code,{children:"sanitizeParam(fields)"})}),"\n",(0,s.jsxs)(i.p,{children:["Same as ",(0,s.jsx)(i.code,{children:"sanitize(fields)"}),", but only sanitizing ",(0,s.jsx)(i.code,{children:"req.params"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"sanitizequeryfields",children:(0,s.jsx)(i.code,{children:"sanitizeQuery(fields)"})}),"\n",(0,s.jsxs)(i.p,{children:["Same as ",(0,s.jsx)(i.code,{children:"sanitize(fields)"}),", but only sanitizing ",(0,s.jsx)(i.code,{children:"req.query"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"buildsanitizefunctionlocations",children:(0,s.jsx)(i.code,{children:"buildSanitizeFunction(locations)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"locations"}),": an array of request locations to gather data from.",(0,s.jsx)(i.br,{}),"\n","May include any of ",(0,s.jsx)(i.code,{children:"body"}),", ",(0,s.jsx)(i.code,{children:"cookies"}),", ",(0,s.jsx)(i.code,{children:"params"})," or ",(0,s.jsx)(i.code,{children:"query"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Returns:"})," a variant of ",(0,s.jsx)(i.a,{href:"#sanitizefields",children:(0,s.jsx)(i.code,{children:"sanitize()"})})," sanitizing the given request locations."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Creates a variant of ",(0,s.jsx)(i.a,{href:"#sanitizefields",children:(0,s.jsx)(i.code,{children:"sanitize()"})})," that sanitizes the given request locations."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const { buildSanitizeFunction } = require('express-validator');\nconst sanitizeBodyAndQuery = buildSanitizeFunction(['body', 'query']);\n\napp.put('/update-product', [\n  // id being either in req.body or req.query will be converted to int\n  sanitizeBodyAndQuery('id').toInt()\n], productUpdateHandler)\n"})})]})}function h(e={}){const{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1670:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>a});var s=n(7378);const d={},t=s.createContext(d);function a(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);