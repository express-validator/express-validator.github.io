"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5394],{69242:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(62540),r=s(43023);const i={title:"Miscellaneous"},o=void 0,c={id:"api/misc",title:"Miscellaneous",description:"buildCheckFunction()",source:"@site/versioned_docs/version-7.0.0/api/misc.md",sourceDirName:"api",slug:"/api/misc",permalink:"/docs/7.0.0/api/misc",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-7.0.0/api/misc.md",tags:[],version:"7.0.0",frontMatter:{title:"Miscellaneous"},sidebar:"api",previous:{title:"Errors and Validation Results",permalink:"/docs/7.0.0/api/validation-result"}},a={},d=[{value:"<code>buildCheckFunction()</code>",id:"buildcheckfunction",level:2},{value:"TypeScript types",id:"typescript-types",level:2},{value:"<code>ContextRunner</code>",id:"contextrunner",level:3},{value:"<code>Location</code>",id:"location",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"buildcheckfunction",children:(0,t.jsx)(n.code,{children:"buildCheckFunction()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { buildCheckFunction } from 'express-validator';\nbuildCheckFunction(locations: Location[]): (\n  fields?: string | string[],\n  message?: FieldMessageFactory | ErrorMessage,\n) => ValidationChain\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Creates a variant of the ",(0,t.jsxs)(n.a,{href:"/docs/7.0.0/api/check",children:[(0,t.jsx)(n.code,{children:"check()"})," function"]})," that checks only the given ",(0,t.jsx)(n.a,{href:"#location",children:"request locations"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const bodyOrQuery = buildCheckFunction(['body', 'query']);\napp.put(\n  '/update-product',\n  // id must be either in req.body or req.query, and must be an UUID\n  bodyOrQuery('id').isUUID(),\n  productUpdateHandler,\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"typescript-types",children:"TypeScript types"}),"\n",(0,t.jsx)(n.h3,{id:"contextrunner",children:(0,t.jsx)(n.code,{children:"ContextRunner"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ContextRunner {\n  run(req: Request, options?: { dryRun: boolean }): Promise<Result>;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Interface implemented by all middlewares which run some sort of validation/sanitization."}),"\n",(0,t.jsxs)(n.p,{children:["Returns a promise for a ",(0,t.jsx)(n.a,{href:"/docs/7.0.0/api/validation-result#result",children:(0,t.jsx)(n.code,{children:"Result"})})," exclusive to that validation\nchain/middleware."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { check } from 'express-validator';\napp.post('/recover-password', (req, res) => {\n  const result = await check('username').notEmpty().run(req);\n  if (!result.isEmpty()) {\n    return res.send('Something is wrong with the username.');\n  }\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, the validation and sanitization results are persisted back into ",(0,t.jsx)(n.code,{children:"req"}),", which means that"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["calling ",(0,t.jsx)(n.code,{children:"validationResult(req)"})," will include the results for this validation"]}),"\n",(0,t.jsxs)(n.li,{children:["a sanitized field wil be updated on the request, such as ",(0,t.jsx)(n.code,{children:"body('message').trim()"})," will update ",(0,t.jsx)(n.code,{children:"req.body.message"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This behavior can be changed by setting ",(0,t.jsx)(n.code,{children:"options.dryRun"})," to ",(0,t.jsx)(n.code,{children:"true"}),", which will simply run the validations\nand return the result."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { check } from 'express-validator';\napp.post('/login', (req, res) => {\n  const usernameResult = await check('username').notEmpty().run(req, { dryRun: true });\n  const passwordResult = await check('password').notEmpty().run(req, { dryRun: false });\n  const result = validationResult(req);\n  // `result` won't include errors from `usernameResult`,\n  // but will include those from `passwordResult`\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"location",children:(0,t.jsx)(n.code,{children:"Location"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Location = 'body' | 'cookies' | 'headers' | 'params' | 'query';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents one of the request locations: ",(0,t.jsx)(n.code,{children:"req.body"}),", ",(0,t.jsx)(n.code,{children:"req.cookies"}),", ",(0,t.jsx)(n.code,{children:"req.headers"}),", ",(0,t.jsx)(n.code,{children:"req.params"})," and\n",(0,t.jsx)(n.code,{children:"req.query"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(63696);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);