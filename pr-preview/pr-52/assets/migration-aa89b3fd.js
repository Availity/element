import{j as n,a as t,F as l}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-09e21e68.js";import{M as a}from"./index-69e2dc1d.js";import{u as o}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-91f8d9df.js";import"../sb-preview/runtime.js";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./isNativeReflectConstruct-e378569d.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";function i(r){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},o(),r.components);return t(l,{children:[n(a,{title:"BS4 Migration/Getting Started"}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.p,{children:"To install the library in your project, you can use either NPM or Yarn:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npm install @availity/element
`})}),`
`,n(e.p,{children:"OR"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`yarn add @availity/element
`})}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,t(e.p,{children:["The ",n(e.a,{href:"./packages/element/",children:"@availity/element"})," package contains all of the components and hooks for the design system. We recommend using this package when you want to use multiple components."]}),`
`,n(e.p,{children:"To use the components in your project, you will need to import them first:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { Button, ThemeProvider } from '@availity/element';
`})}),`
`,t(e.p,{children:["Make sure all of the components you use are inside the ",n(e.code,{children:"ThemeProvider"})," component. We recommend placing it in your root ",n(e.code,{children:"index.{js|tsx}"})," file."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import { ThemePovider } from '@availity/element';

const App = () => {
  return <ThemeProvider>{/* Application code. Most likely a router. */}</ThemeProvider>;
};
`})}),`
`,n(e.h2,{id:"component-equivalents",children:"Component Equivalents"}),`
`,n(e.p,{children:"Not all classes/components from Bootstrap/Reactstrap have a similar name or 1:1 equivalent in MUI. Listed below are some notable changes"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Bootstrap"}),n(e.th,{children:"MUI"}),n(e.th,{children:"Example Use"}),n(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"1"})]}),n(e.td,{children:n(e.code,{children:"Badge"})}),n(e.td,{children:"Counters"}),n(e.td,{children:"Small corner overlay of base element"})]}),t(e.tr,{children:[t(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"2"})]}),n(e.td,{children:n(e.code,{children:"Chip"})}),n(e.td,{children:"Status"}),n(e.td,{children:"Inline colored label/descriptor"})]})]})]})]})}function C(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,Object.assign({},r,{children:n(i,r)})):i(r)}export{C as default};
//# sourceMappingURL=migration-aa89b3fd.js.map
