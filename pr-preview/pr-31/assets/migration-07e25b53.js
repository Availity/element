import{j as n,a as t,F as a}from"./jsx-runtime-670450c2.js";import{M as c}from"./chunk-PCJTTTQV-f7c5d3e0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as l}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./react-18-0a3f08e5.js";import"./_baseIsEqual-04a52134.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-34cf2b24.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./memoizerific-a8c4a000.js";import"./index-abcfcb28.js";import"./chunk-RDJSMFWU-e11cec2c.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-c6079acc.js";import"./extends-98964cd2.js";import"./inheritsLoose-d374ba88.js";import"./index-356e4a49.js";function O(r={}){const{wrapper:i}=Object.assign({},l(),r.components);return i?n(i,Object.assign({},r,{children:n(o,{})})):o();function o(){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},l(),r.components);return t(a,{children:[n(c,{title:"BS4 Migration/Getting Started"}),`
`,n(e.h2,{children:"Installation"}),`
`,n(e.p,{children:"To install the library in your project, you can use either NPM or Yarn:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npm install @availity/element
`})}),`
`,n(e.p,{children:"OR"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`yarn add @availity/element
`})}),`
`,n(e.h2,{children:"Usage"}),`
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
`,n(e.h2,{children:"Component Equivalents"}),`
`,n(e.p,{children:"Not all classes/components from Bootstrap/Reactstrap have a similar name or 1:1 equivalent in MUI. Listed below are some notable changes"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Bootstrap"}),n(e.th,{children:"MUI"}),n(e.th,{children:"Example Use"}),n(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"1"})]}),n(e.td,{children:n(e.code,{children:"Badge"})}),n(e.td,{children:"Counters"}),n(e.td,{children:"Small corner overlay of base element"})]}),t(e.tr,{children:[t(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"2"})]}),n(e.td,{children:n(e.code,{children:"Chip"})}),n(e.td,{children:"Status"}),n(e.td,{children:"Inline colored label/descriptor"})]})]})]})]})}}export{O as default};
//# sourceMappingURL=migration-07e25b53.js.map
