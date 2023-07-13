import{j as n,a as i,F as a}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-83041c60.js";import{M as d}from"./index-aeb5cc6d.js";import{c as h}from"./index-1f2edb05.js";import"./index-89747e8d.js";import{M as p}from"./Badge-fb5c3fb5.js";import"./index-fcd155c5.js";import"./index-0ea4270a.js";import{M as m}from"./Chip-8e419b25.js";import{T as t}from"./index-38fed64b.js";import{u as c}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-7e552c08.js";import"../sb-preview/runtime.js";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./isNativeReflectConstruct-e378569d.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./faMagnifyingGlass-2576db7f.js";import"./faCircleArrowRight-c530ef6d.js";import"./SvgIcon-63a7a9ef.js";import"./styled-48536e78.js";import"./useThemeProps-4e8cc45e.js";import"./index-bd37c415.js";import"./Paper-f9d84c2d.js";import"./useSlotProps-e755ff0f.js";import"./useForkRef-2674f3de.js";import"./Link-37452212.js";import"./Typography-c2535165.js";import"./extendSxProp-70e72958.js";import"./useIsFocusVisible-bbf13f29.js";import"./Button-0b23b338.js";import"./ButtonBase-71b73842.js";import"./emotion-react.browser.esm-94564128.js";import"./LoadingButton-eb9e2a59.js";import"./useId-fd294ee9.js";import"./Tooltip-e8b6626b.js";import"./useTheme-a8520578.js";import"./Grow-b15871a4.js";import"./utils-e3b45a21.js";import"./IconButton-b3f5181d.js";import"./createSvgIcon-a18730f7.js";import"./index-9b47f3b2.js";import"./GlobalStyles-2df33680.js";var s=({children:r,color:e="error",...o})=>n(p,{color:e,...o,children:r}),u=({color:r="default",onDelete:e,...o})=>n(m,{color:r,onClick:e,onDelete:e,...o});function l(r){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},c(),r.components);return i(a,{children:[n(d,{title:"BS4 Migration/Getting Started"}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.p,{children:"To install the library in your project, you can use either NPM or Yarn:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npm install @availity/element
`})}),`
`,n(e.p,{children:"OR"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`yarn add @availity/element
`})}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,i(e.p,{children:["The ",n(e.a,{href:"./packages/element/",children:"@availity/element"})," package contains all of the components and hooks for the design system. We recommend using this package when you want to use multiple components."]}),`
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
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Bootstrap"}),n(e.th,{children:"MUI"}),n(e.th,{children:"Description"}),n(e.th,{children:"Example Use"}),n(e.th,{align:"center",children:"Sample"})]})}),i(e.tbody,{children:[i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"1"})]}),n(e.td,{children:n(e.code,{children:"Badge"})}),n(e.td,{children:"Small corner overlay of base element"}),n(e.td,{children:"Counters"}),n(e.td,{align:"center",children:n(t,{children:n(s,{color:"primary",badgeContent:"5",variant:"dot",children:n(h,{fontSize:"large"})})})})]}),i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"2"})]}),n(e.td,{children:n(e.code,{children:"Chip"})}),n(e.td,{children:"Inline colored label/descriptor"}),n(e.td,{children:"Status"}),n(e.td,{align:"center",children:n(t,{children:n(u,{color:"warning",label:"Pending",size:"small"})})})]})]})]})]})}function me(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?n(e,Object.assign({},r,{children:n(l,r)})):l(r)}export{me as default};
//# sourceMappingURL=migration-00b08e02.js.map
