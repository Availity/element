import{j as n,a as i,F as d}from"./jsx-runtime-390e5fc8.js";import"./chunk-PCJTTTQV-8d391a0d.js";import{M as c}from"./index-6cddd813.js";import{M as a}from"./index-91a95a3a.js";import{B as h,C as m}from"./index-b7376d58.js";import"./index-3d8ed985.js";import"./index-2e2b4810.js";import"./index-e402bfbb.js";import{T as t}from"./index-ccc8a08a.js";import{u as l}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-0e01d8ea.js";import"../sb-preview/runtime.js";import"./react-18-b9b6ed02.js";import"./index-8a077077.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./faCircleArrowRight-32490c46.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-644454bc.js";import"./styled-2191822d.js";import"./useThemeProps-66ab754c.js";import"./index-338918c6.js";import"./Badge-4e5e02da.js";import"./useSlotProps-38dd38c0.js";import"./useForkRef-153a0a89.js";import"./Chip-17fa9859.js";import"./createSvgIcon-cafa5f0c.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./index-9681c8ff.js";import"./Box-4c9f5af0.js";import"./extendSxProp-564f0963.js";import"./FormControlLabel-fd7fbd69.js";import"./FormLabel-f2bb53c2.js";import"./Typography-8314e3e3.js";import"./Paper-576c7647.js";import"./Link-6cc3d459.js";import"./Button-fce9389c.js";import"./Tooltip-e09bffc1.js";import"./useTheme-c775f3da.js";import"./ownerDocument-613eb639.js";import"./utils-aacfec48.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-130e3844.js";import"./LoadingButton-25a551fc.js";import"./index-7216bfd2.js";import"./GlobalStyles-3f09bceb.js";function r(o){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",strong:"strong",h4:"h4"},l(),o.components);return i(d,{children:[n(c,{title:"BS4 Migration/Getting Started"}),`
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
`]})]})}function se(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}export{se as default};
//# sourceMappingURL=migration-3afc566a.js.map
