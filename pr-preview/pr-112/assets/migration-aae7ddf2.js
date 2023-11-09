import{j as i,a as n,F as d}from"./jsx-runtime-390e5fc8.js";import"./chunk-PCJTTTQV-32ea81b9.js";import{M as c}from"./index-292b2f09.js";import"./index-4f46ff89.js";import{M as a}from"./index-c91bacb5.js";import"./index-e0fd6ed7.js";import{B as h}from"./index-ed5ca834.js";import"./index-6c4f7381.js";import{C as m}from"./index-7b2a929f.js";import"./index-0e99cbbb.js";import"./index-b905a91a.js";import"./index-0733667c.js";import"./index-a3280e79.js";import{T as r}from"./index-e95fda27.js";import{u as l}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-463a7320.js";import"../sb-preview/runtime.js";import"./react-18-b9b6ed02.js";import"./index-8a077077.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-676c50e4.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-f1b77b46.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-e75628f1.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-f5561129.js";import"./utils-1ac07bae.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de7b27e6.js";import"./LoadingButton-23ede12c.js";import"./extends-90dea224.js";import"./CircularProgress-924892c6.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-b52b22c3.js";import"./index-fd483b67.js";import"./Avatar-e0c05330.js";import"./createSvgIcon-359b5f59.js";import"./Badge-e640f991.js";import"./Checkbox-de5c3cff.js";import"./utils-3d35716f.js";import"./TablePagination-133ab834.js";import"./TableCell-e489d0cc.js";import"./KeyboardArrowRight-0ba4b66f.js";import"./PaginationItem-92e6625e.js";import"./Select-1e6b8376.js";import"./react-is.production.min-a192e302.js";import"./Menu-a816b978.js";import"./Modal-dc5a21fa.js";import"./Backdrop-68fb5a34.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-2d2ada67.js";import"./debounce-517eeb3c.js";import"./OutlinedInput-5c4aca78.js";import"./GlobalStyles-bc6ce36c.js";import"./MenuItem-2927656e.js";import"./dividerClasses-b19abef8.js";import"./TableRow-a1c1dbfb.js";import"./TableContainer-52da86d1.js";import"./Pagination-b8ffebd7.js";import"./Box-ca2a0b09.js";import"./extendSxProp-9115426f.js";import"./TableSortLabel-f6cd2259.js";import"./Link-0fc2a91d.js";import"./Typography-8f39b1cb.js";import"./Chip-fcd9692c.js";import"./TextField-4a018d74.js";import"./FormLabel-26dfe09c.js";import"./isMuiElement-6907f060.js";import"./FormHelperText-eb61de0b.js";import"./index-9681c8ff.js";import"./FormControlLabel-eda9707b.js";import"./Stack-caeba03e.js";import"./styled-11d1647d.js";import"./Divider-7fb78c99.js";import"./index-1df734f8.js";import"./LocalizationProvider-01292d3a.js";function t(o){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",strong:"strong",h4:"h4"},l(),o.components);return n(d,{children:[i(c,{title:"BS4 Migration/Getting Started"}),`
`,i(e.h2,{id:"installation",children:"Installation"}),`
`,i(e.p,{children:"To install the library in your project, you can use either NPM or Yarn:"}),`
`,i(e.pre,{children:i(e.code,{className:"language-sh",children:`npm install @availity/element
`})}),`
`,i(e.p,{children:"OR"}),`
`,i(e.pre,{children:i(e.code,{className:"language-sh",children:`yarn add @availity/element
`})}),`
`,i(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.p,{children:["The ",i(e.a,{href:"https://availity.github.io/element/?path=/docs/element--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"@availity/element"})," package contains all of the components and hooks for the design system. We recommend using this package when you want to use multiple components."]}),`
`,i(e.p,{children:"To use the components in your project, you will need to import them first:"}),`
`,i(e.pre,{children:i(e.code,{className:"language-tsx",children:`import { Button, ThemeProvider } from '@availity/element';
`})}),`
`,n(e.p,{children:["Make sure all of the components you use are inside the ",i(e.code,{children:"ThemeProvider"})," component. We recommend placing it in your root ",i(e.code,{children:"index.{js|tsx}"})," file."]}),`
`,i(e.pre,{children:i(e.code,{className:"language-jsx",children:`import { ThemeProvider } from '@availity/element';

const App = () => {
  return <ThemeProvider>{/* Application code. Most likely a router. */}</ThemeProvider>;
};
`})}),`
`,i(e.h2,{id:"pattern-differences",children:"Pattern Differences"}),`
`,i(e.h3,{id:"composition-and-custom-components",children:"Composition and Custom Components"}),`
`,n(e.p,{children:["There are a few gotchas when creating components. This is a brief overview taken from the ",i(e.a,{href:"https://mui.com/material-ui/guides/composition",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mui Composition Docs"}),". Visit the Mui docs for more details and code examples."]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Refs (most common issue so far)",`
`,n(e.ul,{children:[`
`,n(e.li,{children:["When using a custom component for ",i(e.code,{children:"children"})," or ",i(e.code,{children:"component"})," make sure it can take a ref. This means for function components to wrap it in a ",i(e.code,{children:"forwardRef"}),"."]}),`
`]}),`
`]}),`
`,n(e.li,{children:["Wrapping Components that have ",i(e.code,{children:"muiName"})," property",`
`,n(e.ul,{children:[`
`,n(e.li,{children:["If you're wrapping a component that has the ",i(e.code,{children:"muiName"})," property, be sure to also assign it to the wrapped component."]}),`
`]}),`
`]}),`
`,n(e.li,{children:["Using the ",i(e.code,{children:"component"})," property to replace the root element",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"avoid inline functions and pass a static component instead"}),`
`,i(e.li,{children:"be aware of prop name collisions when prop forwarding"}),`
`,i(e.li,{children:"with Typescript: the type of the props should be used with type arguments"}),`
`]}),`
`]}),`
`]}),`
`,i(e.h3,{id:"common-props",children:"Common Props"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[i(e.code,{children:"tag"}),": While Reactstrap uses ",i(e.code,{children:"tag"})," to change the root element, Mui uses ",i(e.code,{children:"component"}),". See ",i(e.a,{href:"#composition-and-custom-components",children:"Composition"})," notes above."]}),`
`,n(e.li,{children:[i(e.code,{children:"pill"}),"/",i(e.code,{children:"outline"}),"/etc: Different styling variations are now contained within the ",i(e.code,{children:"variant"})," prop."]}),`
`]}),`
`,i(e.h3,{id:"component-equivalents",children:"Component Equivalents"}),`
`,i(e.p,{children:"Not all classes/components from Bootstrap/Reactstrap have a similar name or 1:1 equivalent in MUI. Listed below are some notable changes"}),`
`,n(e.table,{children:[i(e.thead,{children:n(e.tr,{children:[i(e.th,{children:"Bootstrap"}),i(e.th,{children:"MUI"}),i(e.th,{children:"Description"}),i(e.th,{children:"Example Use"}),i(e.th,{align:"center",children:"Sample"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:[i(e.code,{children:"Badge"}),i("sup",{children:"1"})]}),i(e.td,{children:i(e.code,{children:"Badge"})}),i(e.td,{children:"Small corner overlay of base element"}),i(e.td,{children:"Counters"}),i(e.td,{align:"center",children:i(r,{children:i(h,{color:"primary",badgeContent:"5",variant:"dot",children:i(a,{fontSize:"large"})})})})]}),n(e.tr,{children:[n(e.td,{children:[i(e.code,{children:"Badge"}),i("sup",{children:"2"})]}),i(e.td,{children:i(e.code,{children:"Chip"})}),i(e.td,{children:"Inline colored label/descriptor"}),i(e.td,{children:"Status"}),i(e.td,{align:"center",children:i(r,{children:i(m,{color:"warning",label:"Pending",size:"small"})})})]}),n(e.tr,{children:[n(e.td,{children:[i(e.code,{children:"Column"}),"/",i(e.code,{children:"Row"})]}),i(e.td,{children:i(e.code,{children:"Grid"})}),i(e.td,{children:"Horizontal and Vertical layout"}),i(e.td,{}),i(e.td,{align:"center"})]})]})]}),`
`,i(e.h2,{id:"migration-strategy",children:"Migration Strategy"}),`
`,i(e.h3,{id:"drop-in-components-and-the-migration-theme",children:"Drop-in Components and the Migration Theme"}),`
`,i(e.p,{children:"To help break up the work needed for migration, we have created a bootstrap migration theme. The migration theme should allow you to slowly start replacing components without disrupting your design until you are ready to upgrade to the new theme."}),`
`,n(e.p,{children:["The migration theme is accessible by passing ",i(e.code,{children:"theme='legacyBS'"})," to the ",i(e.code,{children:"ThemeProvider"})]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[i(e.strong,{children:"NOTE"}),`
Be careful not to deviate from the provided Mui migration styles. Otherwise it may cause issues once you have finished migration and switch to the new Mui theme.`]}),`
`]}),`
`,i(e.h4,{id:"recommended-early-component-swaps",children:"Recommended Early Component Swaps"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["layout (",i(e.code,{children:"Box"}),", ",i(e.code,{children:"Grid"}),", ",i(e.code,{children:"Container"}),")"]}),`
`,i(e.li,{children:"button?"}),`
`,i(e.li,{children:"table"}),`
`,i(e.li,{children:"menu"}),`
`,i(e.li,{children:"list (excluding list-group)"}),`
`]}),`
`,i(e.h3,{id:"form",children:"Form"}),`
`,n(e.p,{children:["Where you're coming from will determine your strategy for form migration. We have moved away from ",i(e.code,{children:"formik"})," (used by ",i(e.code,{children:"@availity/form"}),") in favor of ",i(e.code,{children:"react-hook-forms"}),". We have also provided the base components to utilize with your own logic/libraries."]}),`
`,i(e.p,{children:"See the Form migration docs for more information."}),`
`,i(e.h3,{id:"components-without-a-drop-in-option",children:"Components Without a Drop-in Option"}),`
`,i(e.p,{children:"There are many bootstrap elements and other design guidelines that will not be making it into the new Mui theme. These components we recommend saving for last so the changes will be introduced as you are switching to the new theme."}),`
`,i(e.h4,{id:"required-ux-changes",children:"Required UX changes"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["list-group",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"does not exist in Mui. UX to provide new design guidelines for how to change this component."}),`
`]}),`
`]}),`
`]})]})}function ii(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?i(e,Object.assign({},o,{children:i(t,o)})):t(o)}export{ii as default};
//# sourceMappingURL=migration-aae7ddf2.js.map
