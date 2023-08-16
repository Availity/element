import{j as n,a as i,F as c}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-0e53ebd4.js";import{M as a}from"./index-cca0c0c0.js";import{M as d}from"./index-cd651495.js";import{B as h,C as p}from"./index-64f3c907.js";import"./index-398e3a69.js";import"./index-93d0de92.js";import"./index-fe410b9c.js";import{T as t}from"./index-d69dd2a1.js";import{u as l}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-69eaf53c.js";import"../sb-preview/runtime.js";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./isNativeReflectConstruct-e378569d.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-247857dd.js";import"./styled-838f2411.js";import"./useThemeProps-ac6a164c.js";import"./index-61f39d05.js";import"./Badge-f2ecc77a.js";import"./useSlotProps-8f208bee.js";import"./useForkRef-2674f3de.js";import"./Chip-22ff5d20.js";import"./createSvgIcon-802be96d.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./useIsFocusVisible-bbf13f29.js";import"./Button-e016c6ed.js";import"./Tooltip-98269e07.js";import"./useTheme-c349195b.js";import"./ownerDocument-613eb639.js";import"./useId-fd294ee9.js";import"./utils-038da973.js";import"./IconButton-58eb99ee.js";import"./Box-473e99f8.js";import"./extendSxProp-d07c2917.js";import"./FormLabel-f4a5774d.js";import"./CircularProgress-76852e3f.js";import"./Paper-25f4f657.js";import"./Link-b1ab97a7.js";import"./Typography-e8ebf3ff.js";import"./LoadingButton-65968ff9.js";import"./index-9681c8ff.js";import"./index-a9eb109e.js";import"./GlobalStyles-6909ed97.js";function r(o){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},l(),o.components);return i(c,{children:[n(a,{title:"BS4 Migration/Getting Started"}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.p,{children:"To install the library in your project, you can use either NPM or Yarn:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npm install @availity/element
`})}),`
`,n(e.p,{children:"OR"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`yarn add @availity/element
`})}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,i(e.p,{children:["The ",n(e.a,{href:"https://availity.github.io/element/?path=/docs/element--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"@availity/element"})," package contains all of the components and hooks for the design system. We recommend using this package when you want to use multiple components."]}),`
`,n(e.p,{children:"To use the components in your project, you will need to import them first:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { Button, ThemeProvider } from '@availity/element';
`})}),`
`,i(e.p,{children:["Make sure all of the components you use are inside the ",n(e.code,{children:"ThemeProvider"})," component. We recommend placing it in your root ",n(e.code,{children:"index.{js|tsx}"})," file."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import { ThemeProvider } from '@availity/element';

const App = () => {
  return <ThemeProvider>{/* Application code. Most likely a router. */}</ThemeProvider>;
};
`})}),`
`,n(e.h2,{id:"pattern-differences",children:"Pattern Differences"}),`
`,n(e.h3,{id:"composition-and-custom-components",children:"Composition and Custom Components"}),`
`,i(e.p,{children:["There are a few gotchas when creating components. This is a brief overview taken from the ",n(e.a,{href:"https://mui.com/material-ui/guides/composition",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mui Composition Docs"}),". Visit the Mui docs for more details and code examples."]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Refs (most common issue so far)",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["When using a custom component for ",n(e.code,{children:"children"})," or ",n(e.code,{children:"component"})," make sure it can take a ref. This means for function components to wrap it in a ",n(e.code,{children:"forwardRef"}),"."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Wrapping Components that have ",n(e.code,{children:"muiName"})," property",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["If you're wrapping a component that has the ",n(e.code,{children:"muiName"})," property, be sure to also assign it to the wrapped component."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Using the ",n(e.code,{children:"component"})," property to replace the root element",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"avoid inline functions and pass a static component instead"}),`
`,n(e.li,{children:"be aware of prop name collisions when prop forwarding"}),`
`,n(e.li,{children:"with Typescript: the type of the props should be used with type arguments"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"common-props",children:"Common Props"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"tag"}),": While Reactstrap uses ",n(e.code,{children:"tag"})," to change the root element, Mui uses ",n(e.code,{children:"component"}),". See ",n(e.a,{href:"#composition-and-custom-components",children:"Composition"})," notes above."]}),`
`,i(e.li,{children:[n(e.code,{children:"pill"}),"/",n(e.code,{children:"outline"}),"/etc: Different styling variations are now contained within the ",n(e.code,{children:"variant"})," prop."]}),`
`]}),`
`,n(e.h3,{id:"component-equivalents",children:"Component Equivalents"}),`
`,n(e.p,{children:"Not all classes/components from Bootstrap/Reactstrap have a similar name or 1:1 equivalent in MUI. Listed below are some notable changes"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Bootstrap"}),n(e.th,{children:"MUI"}),n(e.th,{children:"Description"}),n(e.th,{children:"Example Use"}),n(e.th,{align:"center",children:"Sample"})]})}),i(e.tbody,{children:[i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"1"})]}),n(e.td,{children:n(e.code,{children:"Badge"})}),n(e.td,{children:"Small corner overlay of base element"}),n(e.td,{children:"Counters"}),n(e.td,{align:"center",children:n(t,{children:n(h,{color:"primary",badgeContent:"5",variant:"dot",children:n(d,{fontSize:"large"})})})})]}),i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"2"})]}),n(e.td,{children:n(e.code,{children:"Chip"})}),n(e.td,{children:"Inline colored label/descriptor"}),n(e.td,{children:"Status"}),n(e.td,{align:"center",children:n(t,{children:n(p,{color:"warning",label:"Pending",size:"small"})})})]})]})]})]})}function ue(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}export{ue as default};
//# sourceMappingURL=migration-ad7eeb62.js.map
