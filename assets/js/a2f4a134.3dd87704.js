"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8562],{23048:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=a(24246),r=a(71670);const t={id:"running-imperatively",title:"Running validations imperatively"},s=void 0,o={id:"running-imperatively",title:"Running validations imperatively",description:"express-validator favors the declarative way of doing things that express middlewares bring.",source:"@site/versioned_docs/version-6.0.0/feature-running-imperatively.md",sourceDirName:".",slug:"/running-imperatively",permalink:"/docs/6.0.0/running-imperatively",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.0.0/feature-running-imperatively.md",tags:[],version:"6.0.0",frontMatter:{id:"running-imperatively",title:"Running validations imperatively"},sidebar:"docs",previous:{title:"Whole Body Validation",permalink:"/docs/6.0.0/whole-body-validation"}},d={},l=[{value:"Example: standardized validation error response",id:"example-standardized-validation-error-response",level:2},{value:"Example: validating with a condition",id:"example-validating-with-a-condition",level:2}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["express-validator favors the declarative way of doing things that express middlewares bring.\nThis means most of the APIs ",(0,i.jsx)(n.em,{children:"look and work better"})," when simply passed into an express route handler."]}),"\n",(0,i.jsxs)(n.p,{children:["You can, however, give control of running these validations to your own middleware/route handler.",(0,i.jsx)(n.br,{}),"\n","This is possible with the use of the declarative method ",(0,i.jsx)(n.code,{children:"run(req)"}),", available on both\n",(0,i.jsx)(n.a,{href:"/docs/6.0.0/validation-chain-api#runreq",children:"validation chain"})," and ",(0,i.jsx)(n.a,{href:"/docs/6.0.0/sanitization-chain-api#runreq",children:"sanitization chains"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Check the examples below to understand how this method can help you:"}),"\n",(0,i.jsx)(n.h2,{id:"example-standardized-validation-error-response",children:"Example: standardized validation error response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// can be reused by many routes\nconst validate = validations => {\n  return async (req, res, next) => {\n    await Promise.all(validations.map(validation => validation.run(req)));\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(400).json({ errors: errors.array() });\n  };\n};\n\napp.post('/api/create-user', validate([\n  body('email').isEmail(),\n  body('password').isLength({ min: 6 })\n]), async (req, res, next) => {\n  // request is guaranteed to not have any validation errors.\n  const user = await User.create({ ... });\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-validating-with-a-condition",children:"Example: validating with a condition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"app.post('/update-settings', [\n  body('email').isEmail(),\n  body('password').optional().isLength({ min: 6 })\n], async (req, res, next) => {\n  // if a password has been provided, then a confirmation must also be provided.\n  if (req.body.password) {\n    await body('passwordConfirmation')\n      .equals(req.body.password).withMessage('passwords do not match')\n      .run(req);\n  }\n\n  // Check the validation errors, and update the user's settings.\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},71670:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var i=a(27378);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);