import{j as n,a as i,F as d}from"./jsx-runtime-390e5fc8.js";import"./chunk-PCJTTTQV-bdad20d1.js";import{M as c}from"./index-2cdaafcd.js";import"./index-49af8d8b.js";import{M as a}from"./index-f35eb24e.js";import{B as h}from"./index-e0cbc6db.js";import"./index-77c93b21.js";import{C as m}from"./index-d80280fa.js";import"./index-67c58611.js";import"./index-77af8b5f.js";import"./index-a52c6b7c.js";import{T as r}from"./index-ad0a2e8a.js";import{u as l}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-ad33c4ae.js";import"../sb-preview/runtime.js";import"./react-18-b9b6ed02.js";import"./index-8a077077.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-9af3d166.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./styled-188025da.js";import"./useThemeProps-db7202c2.js";import"./generateUtilityClasses-f776b170.js";import"./ButtonBase-6040f690.js";import"./emotion-react.browser.esm-69a15469.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d9214433.js";import"./useTheme-3a36d7a0.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-1710581f.js";import"./utils-df51f77d.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-15cd5b0a.js";import"./LoadingButton-2cbf4819.js";import"./extends-90dea224.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./index-86efc5f7.js";import"./Badge-f27db098.js";import"./Checkbox-b04c18ed.js";import"./utils-3d35716f.js";import"./createSvgIcon-e4b87ef5.js";import"./TextField-7928884c.js";import"./FormLabel-a07a3cea.js";import"./isMuiElement-6907f060.js";import"./Select-997ebd3a.js";import"./react-is.production.min-a192e302.js";import"./Menu-09429e3f.js";import"./Backdrop-e44d0c7e.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-4c319fed.js";import"./OutlinedInput-dc04b75a.js";import"./GlobalStyles-8a837dd0.js";import"./FormHelperText-ffbef46f.js";import"./Link-20859ed0.js";import"./Typography-a571125c.js";import"./extendSxProp-4d42c058.js";import"./Chip-35828233.js";import"./index-9681c8ff.js";import"./Box-7f261278.js";import"./FormControlLabel-0fb4668c.js";import"./Stack-aed56d46.js";import"./styled-4350ac6b.js";import"./Divider-e6df2ce9.js";import"./dividerClasses-d4e8510c.js";import"./index-2410d48c.js";function t(o){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",strong:"strong",h4:"h4"},l(),o.components);return i(d,{children:[n(c,{title:"BS4 Migration/Getting Started"}),`
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
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Bootstrap"}),n(e.th,{children:"MUI"}),n(e.th,{children:"Description"}),n(e.th,{children:"Example Use"}),n(e.th,{align:"center",children:"Sample"})]})}),i(e.tbody,{children:[i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"1"})]}),n(e.td,{children:n(e.code,{children:"Badge"})}),n(e.td,{children:"Small corner overlay of base element"}),n(e.td,{children:"Counters"}),n(e.td,{align:"center",children:n(r,{children:n(h,{color:"primary",badgeContent:"5",variant:"dot",children:n(a,{fontSize:"large"})})})})]}),i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Badge"}),n("sup",{children:"2"})]}),n(e.td,{children:n(e.code,{children:"Chip"})}),n(e.td,{children:"Inline colored label/descriptor"}),n(e.td,{children:"Status"}),n(e.td,{align:"center",children:n(r,{children:n(m,{color:"warning",label:"Pending",size:"small"})})})]}),i(e.tr,{children:[i(e.td,{children:[n(e.code,{children:"Column"}),"/",n(e.code,{children:"Row"})]}),n(e.td,{children:n(e.code,{children:"Grid"})}),n(e.td,{children:"Horizontal and Vertical layout"}),n(e.td,{}),n(e.td,{align:"center"})]})]})]}),`
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
`]})]})}function Ie(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(t,o)})):t(o)}export{Ie as default};
//# sourceMappingURL=migration-f0fad748.js.map
