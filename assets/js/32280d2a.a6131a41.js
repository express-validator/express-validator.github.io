"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7073],{7604:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>d,default:()=>t,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var i=n(4246),a=n(1670);const c={id:"check-api",title:"Validation middlewares"},d=void 0,l={id:"check-api",title:"Validation middlewares",description:"These methods are all available via require('express-validator').",source:"@site/versioned_docs/version-6.3.0/api-check.md",sourceDirName:".",slug:"/check-api",permalink:"/docs/6.3.0/check-api",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-6.3.0/api-check.md",tags:[],version:"6.3.0",frontMatter:{id:"check-api",title:"Validation middlewares"},sidebar:"api",next:{title:"Validation Chain API",permalink:"/docs/6.3.0/validation-chain-api"}},r={},o=[{value:"<code>check([field, message])</code>",id:"checkfield-message",level:2},{value:"<code>body([fields, message])</code>",id:"bodyfields-message",level:2},{value:"<code>cookie([fields, message])</code>",id:"cookiefields-message",level:2},{value:"<code>header([fields, message])</code>",id:"headerfields-message",level:2},{value:"<code>param([fields, message])</code>",id:"paramfields-message",level:2},{value:"<code>query([fields, message])</code>",id:"queryfields-message",level:2},{value:"<code>checkSchema(schema)</code>",id:"checkschemaschema",level:2},{value:"<code>oneOf(validationChains[, message])</code>",id:"oneofvalidationchains-message",level:2},{value:"<code>buildCheckFunction(locations)</code>",id:"buildcheckfunctionlocations",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["These methods are all available via ",(0,i.jsx)(s.code,{children:"require('express-validator')"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"checkfield-message",children:(0,i.jsx)(s.code,{children:"check([field, message])"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"field"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),": a string or an array of strings of field names to validate against."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"message"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),": an error message to use when failed validators don't specify a message. Defaults to ",(0,i.jsx)(s.code,{children:"Invalid value"}),"; see also ",(0,i.jsx)(s.a,{href:"/docs/6.3.0/custom-error-messages#dynamic-messages",children:"Dynamic Messages"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Returns:"})," a ",(0,i.jsx)(s.a,{href:"/docs/6.3.0/validation-chain-api",children:"Validation Chain"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Creates a validation chain for one or more fields. They may be located in any of the following request objects:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"req.body"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"req.cookies"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"req.headers"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"req.params"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"req.query"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If any of the fields are present in more than one location, then all instances of that field value must pass the validation."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," If ",(0,i.jsx)(s.code,{children:"fields"})," is omitted, then the whole request location will be validated.\nThis is only useful for ",(0,i.jsx)(s.code,{children:"req.body"}),", though; see ",(0,i.jsx)(s.a,{href:"/docs/6.3.0/whole-body-validation",children:"Whole Body Validation"})," for examples."]}),"\n",(0,i.jsxs)(s.p,{children:["The validators will always be executed serially for the same field.",(0,i.jsx)(s.br,{}),"\n","This means that if the chain targets more than one field, those will run in parallel, but each of their validators are serial."]}),"\n",(0,i.jsx)(s.h2,{id:"bodyfields-message",children:(0,i.jsx)(s.code,{children:"body([fields, message])"})}),"\n",(0,i.jsxs)(s.p,{children:["Same as ",(0,i.jsx)(s.code,{children:"check([fields, message])"}),", but only checking ",(0,i.jsx)(s.code,{children:"req.body"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"cookiefields-message",children:(0,i.jsx)(s.code,{children:"cookie([fields, message])"})}),"\n",(0,i.jsxs)(s.p,{children:["Same as ",(0,i.jsx)(s.code,{children:"check([fields, message])"}),", but only checking ",(0,i.jsx)(s.code,{children:"req.cookies"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"headerfields-message",children:(0,i.jsx)(s.code,{children:"header([fields, message])"})}),"\n",(0,i.jsxs)(s.p,{children:["Same as ",(0,i.jsx)(s.code,{children:"check([fields, message])"}),", but only checking ",(0,i.jsx)(s.code,{children:"req.headers"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"paramfields-message",children:(0,i.jsx)(s.code,{children:"param([fields, message])"})}),"\n",(0,i.jsxs)(s.p,{children:["Same as ",(0,i.jsx)(s.code,{children:"check([fields, message])"}),", but only checking ",(0,i.jsx)(s.code,{children:"req.params"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"queryfields-message",children:(0,i.jsx)(s.code,{children:"query([fields, message])"})}),"\n",(0,i.jsxs)(s.p,{children:["Same as ",(0,i.jsx)(s.code,{children:"check([fields, message])"}),", but only checking ",(0,i.jsx)(s.code,{children:"req.query"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"checkschemaschema",children:(0,i.jsx)(s.code,{children:"checkSchema(schema)"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"schema"}),": the schema to validate. Must comply with the format described in ",(0,i.jsx)(s.a,{href:"/docs/6.3.0/schema-validation",children:"Schema Validation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Returns:"})," an array of validation chains"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"oneofvalidationchains-message",children:(0,i.jsx)(s.code,{children:"oneOf(validationChains[, message])"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"validationChains"}),": an array of ",(0,i.jsx)(s.a,{href:"/docs/6.3.0/validation-chain-api",children:"validation chains"})," created with ",(0,i.jsx)(s.code,{children:"check()"})," or any of its variations,\nor an array of arrays containing validation chains."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"message"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),": an error message to use when all chains failed. Defaults to ",(0,i.jsx)(s.code,{children:"Invalid value(s)"}),"; see also ",(0,i.jsx)(s.a,{href:"/docs/6.3.0/custom-error-messages#dynamic-messages",children:"Dynamic Messages"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Returns:"})," a middleware instance"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Creates a middleware instance that will ensure at least one of the given chains passes the validation.",(0,i.jsx)(s.br,{}),"\n","If none of the given chains passes, an error will be pushed to the ",(0,i.jsx)(s.code,{children:"_error"})," pseudo-field,\nusing the given ",(0,i.jsx)(s.code,{children:"message"}),", and the errors of each chain will be made available under a key ",(0,i.jsx)(s.code,{children:"nestedErrors"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const { check, oneOf, validationResult } = require('express-validator');\napp.post('/start-freelancing', oneOf([\n  check('programming_language').isIn(['javascript', 'java', 'php']),\n  check('design_tools').isIn(['canva', 'photoshop', 'gimp'])\n]), (req, res, next) => {\n  try {\n    validationResult(req).throw();\n\n    // yay! we're good to start selling our skilled services :)))\n    res.json(...);\n  } catch (err) {\n    // Oh noes. This user doesn't have enough skills for this...\n    res.status(400).json(...);\n  }\n});\n"})}),"\n",(0,i.jsx)(s.p,{children:"If an item of the array is an array containing validation chains, then all of those must pass in order for this\ngroup be considered valid:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// This protected route must be accessed either by passing both username + password,\n// or by passing an access token\napp.post('/protected/route', oneOf([\n  [\n    check('username').exists(),\n    check('password').exists()\n  ],\n  check('access_token').exists()\n]), someRouteHandler);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The execution of those validation chains are made in parallel,\nwhile the execution within a chain still respects the rule defined in the ",(0,i.jsxs)(s.a,{href:"#check-field-message",children:[(0,i.jsx)(s.code,{children:"check()"})," function"]}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"buildcheckfunctionlocations",children:(0,i.jsx)(s.code,{children:"buildCheckFunction(locations)"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"locations"}),": an array of request locations to gather data from.",(0,i.jsx)(s.br,{}),"\n","May include any of ",(0,i.jsx)(s.code,{children:"body"}),", ",(0,i.jsx)(s.code,{children:"cookies"}),", ",(0,i.jsx)(s.code,{children:"headers"}),", ",(0,i.jsx)(s.code,{children:"params"})," or ",(0,i.jsx)(s.code,{children:"query"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Returns:"})," a variant of ",(0,i.jsx)(s.a,{href:"#check-field-message",children:(0,i.jsx)(s.code,{children:"check()"})})," checking the given request locations."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Creates a variant of ",(0,i.jsx)(s.a,{href:"#check-field-message",children:(0,i.jsx)(s.code,{children:"check()"})})," that checks the given request locations."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const { buildCheckFunction } = require('express-validator');\nconst checkBodyAndQuery = buildCheckFunction(['body', 'query']);\n\napp.put('/update-product', [\n  // id must be either in req.body or req.query, and must be an UUID\n  checkBodyAndQuery('id').isUUID()\n], productUpdateHandler)\n"})})]})}function t(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1670:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>d});var i=n(7378);const a={},c=i.createContext(a);function d(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);