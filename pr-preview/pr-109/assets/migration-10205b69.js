import{j as n,a as i,F as d}from"./jsx-runtime-390e5fc8.js";import"./chunk-PCJTTTQV-d0a5c3fb.js";import{M as c}from"./index-caacc0e8.js";import"./index-1df17b3b.js";import{M as a}from"./index-aa24eefe.js";import{B as h,C as m}from"./index-d101c77a.js";import"./index-d3ecc606.js";import"./index-447aebb9.js";import"./index-cb4f412a.js";import{T as t}from"./index-cd1b723b.js";import{u as l}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-3dbc8396.js";import"../sb-preview/runtime.js";import"./react-18-b9b6ed02.js";import"./index-8a077077.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-04ac7f3f.js";import"./styled-52ae1682.js";import"./useThemeProps-09701b40.js";import"./ButtonBase-d82e3f0a.js";import"./emotion-react.browser.esm-7b849601.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-863be512.js";import"./useTheme-a833130b.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-163bc2ac.js";import"./isHostComponent-73d6e646.js";import"./utils-237e8b7d.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-01452f88.js";import"./LoadingButton-ef204a6f.js";import"./faCircleArrowRight-b395df24.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-33a08535.js";import"./index-338918c6.js";import"./Badge-235707d5.js";import"./Chip-34bd22fd.js";import"./createSvgIcon-cde3b626.js";import"./Paper-f833d12a.js";import"./FormLabel-49db2e23.js";import"./utils-3d35716f.js";import"./FormHelperText-0da16220.js";import"./Link-a52e3cb5.js";import"./Typography-fc5866ec.js";import"./extendSxProp-5906c526.js";import"./index-9681c8ff.js";import"./Box-f536527f.js";import"./FormControlLabel-eb87f144.js";import"./OutlinedInput-7e88b918.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-0835ee04.js";import"./index-3531c15b.js";function r(o){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",strong:"strong",h4:"h4"},l(),o.components);return i(d,{children:[n(c,{title:"BS4 Migration/Getting Started"}),`
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
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Bootstrap"}),n(e.th,{children:"MUI"}),n(e.th,{children:"Description"}),n(e.th,{children:"Example Use"}),n(e.th,{align:"center",children:"Sample"})]})}),i(e.tbody,{children:[i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"1"})]}),n(e.td,{children:n(e.code,{children:"Badge"})}),n(e.td,{children:"Small corner overlay of base element"}),n(e.td,{children:"Counters"}),n(e.td,{align:"center",children:n(t,{children:n(h,{color:"primary",badgeContent:"5",variant:"dot",children:n(a,{fontSize:"large"})})})})]}),i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"2"})]}),n(e.td,{children:n(e.code,{children:"Chip"})}),n(e.td,{children:"Inline colored label/descriptor"}),n(e.td,{children:"Status"}),n(e.td,{align:"center",children:n(t,{children:n(m,{color:"warning",label:"Pending",size:"small"})})})]})]})]}),`
`,n(e.h2,{id:"migration-strategy",children:"Migration Strategy"}),`
`,n(e.h3,{id:"drop-in-components-and-the-migration-theme",children:"Drop-in Components and the Migration Theme"}),`
`,n(e.p,{children:"To help break up the work needed for migration, we have created a bootstrap migration theme. The migration theme should allow you to slowly start replacing components without disrupting your design until you are ready to upgrade to the new theme."}),`
`,i(e.p,{children:["The migration theme is accessible by passing ",n(e.code,{children:"theme='legacyBS'"})," to the ",n(e.code,{children:"ThemeProvider"})]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:[n(e.strong,{children:"NOTE"}),`
Be careful not to deviate from the provided Mui migration styles. Otherwise it may cause issues once you have finished migration and switch to the new Mui theme.`]}),`
`]}),`
`,n(e.h4,{id:"recommended-early-component-swaps",children:"Recommended Early Component Swaps"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["layout (",n(e.code,{children:"Box"}),", ",n(e.code,{children:"Grid"}),", ",n(e.code,{children:"Container"}),")"]}),`
`,n(e.li,{children:"button?"}),`
`,n(e.li,{children:"table"}),`
`,n(e.li,{children:"menu"}),`
`,n(e.li,{children:"list (excluding list-group)"}),`
`]}),`
`,n(e.h3,{id:"form",children:"Form"}),`
`,i(e.p,{children:["Where you're coming from will determine your strategy for form migration. We have moved away from ",n(e.code,{children:"formik"})," (used by ",n(e.code,{children:"@availity/form"}),") in favor of ",n(e.code,{children:"react-hook-forms"}),". We have also provided the base components to utilize with your own logic/libraries."]}),`
`,n(e.p,{children:"See the Form migration docs for more information."}),`
`,n(e.h3,{id:"components-without-a-drop-in-option",children:"Components Without a Drop-in Option"}),`
`,n(e.p,{children:"There are many bootstrap elements and other design guidelines that will not be making it into the new Mui theme. These components we recommend saving for last so the changes will be introduced as you are switching to the new theme."}),`
`,n(e.h4,{id:"required-ux-changes",children:"Required UX changes"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["list-group",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"does not exist in Mui. UX to provide new design guidelines for how to change this component."}),`
`]}),`
`]}),`
`]})]})}function be(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}export{be as default};
//# sourceMappingURL=migration-10205b69.js.map
