"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4661],{33141:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=t(62540),a=t(43023),s=t(78296),i=t(22491);const o={id:"index",title:"express-validator"},l=void 0,u={id:"index",title:"express-validator",description:"Overview",source:"@site/versioned_docs/version-7.2.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/express-validator/express-validator/edit/master/docs/versioned_docs/version-7.2.0/index.md",tags:[],version:"7.2.0",frontMatter:{id:"index",title:"express-validator"},sidebar:"docs",next:{title:"Guides",permalink:"/docs/category/guides"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Support",id:"support",level:2},{value:"Installation",id:"installation",level:2}];function h(e){const r={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(r.p,{children:["express-validator is a set of ",(0,n.jsx)(r.a,{href:"http://expressjs.com/",children:"express.js"})," middlewares that wraps the\nextensive collection of validators and sanitizers offered by ",(0,n.jsx)(r.a,{href:"https://github.com/validatorjs/validator.js",children:"validator.js"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"It allows you to combine them in many ways so that you can validate and sanitize your express requests,\nand offers tools to determine if the request is valid or not, which data was matched according to\nyour validators, and so on."}),"\n",(0,n.jsx)(r.h2,{id:"support",children:"Support"}),"\n",(0,n.jsxs)(r.p,{children:["This version of express-validator requires that your application is running on ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v14.x/api/",children:"Node.js 14+"}),".",(0,n.jsx)(r.br,{}),"\n","It's also verified to work with ",(0,n.jsx)(r.a,{href:"https://expressjs.com/en/4x/api.html",children:"express.js 4.x"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Note that, despite the name, express-validator might work with libraries that aren't express.js.\nThe main requirement is that the HTTP server library you're using models its HTTP request object\nsimilarly to express.js, and contains these properties:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"req.body"}),": the body of the HTTP request. Can be any value, however objects, arrays\nand other JavaScript primitives work better."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"req.cookies"}),": the ",(0,n.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie",children:[(0,n.jsx)(r.code,{children:"Cookie"})," header"]}),"\nparsed as an object from cookie name to its value."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"req.headers"}),": the headers sent along with the HTTP request."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"req.params"}),": an object from name to value.",(0,n.jsx)(r.br,{}),"\n","In express.js, ",(0,n.jsx)(r.a,{href:"https://expressjs.com/en/guide/routing.html",children:"this is parsed from the request path and matched with route definition path"}),",\nbut it can really be anything meaningful coming from the HTTP request."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"req.query"}),": the portion after the ",(0,n.jsx)(r.code,{children:"?"})," in the HTTP request's path, parsed as an object from\nquery parameter name to value."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["One example library that works out of the box with express-validator is ",(0,n.jsx)(r.a,{href:"http://restify.com/",children:"Restify"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.p,{children:"express-validator is on the npm registry! Install it using your favorite Node.js package manager:"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"npm",label:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm install express-validator\n"})})}),(0,n.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"yarn add express-validator\n"})})}),(0,n.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"pnpm add express-validator\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},22491:(e,r,t)=>{t.d(r,{A:()=>i});t(63696);var n=t(11750);const a={tabItem:"tabItem_wHwb"};var s=t(62540);function i(e){var r=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:r})}},78296:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(63696),a=t(11750),s=t(90766),i=t(49519),o=t(14395),l=t(35043),u=t(44544),c=t(48708);function d(e){var r,t;return null!=(r=null==(t=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function h(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(t);return function(e){var r=(0,u.X)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId,s=(0,i.W6)(),o=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,n.useCallback)((function(e){if(o){var r=new URLSearchParams(s.location.search);r.set(o,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}}),[o,s])]}function f(e){var r,t,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,f=h(e),m=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),b=m[0],x=m[1],j=v({queryString:u,groupId:d}),g=j[0],y=j[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Dv)(r),a=t[0],s=t[1],[a,(0,n.useCallback)((function(e){r&&s.set(e)}),[r,s])]),T=w[0],q=w[1],k=function(){var e=null!=g?g:T;return p({value:e,tabValues:f})?e:null}();return(0,o.A)((function(){k&&x(k)}),[k]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),q(e)}),[y,q,f]),tabValues:f}}var m=t(86681);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=t(62540);function j(e){var r=e.className,t=e.block,n=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,t=l.indexOf(r),a=o[t].value;a!==n&&(u(r),i(a))},d=function(e){var r,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,a=l.indexOf(e.currentTarget)+1;t=null!=(n=l[a])?n:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(r=t)||r.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:o.map((function(e){var r=e.value,t=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.A)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===r}),children:null!=t?t:r}),r)}))})}function g(e){var r=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var i=s.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function y(e){var r=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,Object.assign({},e,r)),(0,x.jsx)(g,Object.assign({},e,r))]})}function w(e){var r=(0,m.A)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(r))}},43023:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(63696);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);