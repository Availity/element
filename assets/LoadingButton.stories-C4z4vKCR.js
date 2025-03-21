import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{G as a}from"./index-Cyp_3NIz.js";import{c as s}from"./index-EBJ2OYCQ.js";import{r as g}from"./index-DcWiA9TO.js";import{L as b}from"./LoadingButton-9DxABi24.js";import{C as y}from"./CircularProgress-D8w9ZPs6.js";import"./Box-DWnb8VZB.js";import"./identifier-Dtqimryx.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./generateUtilityClass-CVWqFxsA.js";import"./useTheme-C2CrmYKc.js";import"./extendSxProp-B5AgUjQT.js";import"./Grid2-y9MPRr2u.js";import"./useTheme-DUkCvbx_.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./styled-vBjI3IQc.js";import"./styled-CF1hcdwO.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-BIK-1DKm.js";import"./Stack-BcsM4Vc0.js";import"./Container-Cqq8qXXg.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./memoTheme-D-rVhYRp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BAEbeAyH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DszduLV4.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./useForkRef-BVrIj09m.js";import"./isFocusVisible-B8k4qzLc.js";const I=e.jsx(y,{color:"inherit",size:16,"aria-label":"loading"}),t=g.forwardRef((n,u)=>{const{children:p,loading:r,...i}=n,m=i.startIcon?"start":"end",f=i.startIcon||i.endIcon||r?{}:{padding:"0 .7rem"},h=i.startIcon?void 0:e.jsx("span",{style:r?{padding:"0 .7rem"}:{}});return e.jsx(b,{endIcon:h,loadingPosition:m,loading:r,disableRipple:!0,loadingIndicator:I,...i,ref:u,children:e.jsx("span",{style:f,children:p})})});try{t.displayName="LoadingButton",t.__docgenInfo={description:"",displayName:"LoadingButton",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & { root?: string; label?: string; loading?: string; loadingIndicator?: string; loadingIndicatorCenter?: string; loadingIndicatorStart?: string; loadingIndicatorEnd?: string; endIconLoadingEnd?: string; startIconLoadingStart?: string; } & Partial<...>"}},color:{defaultValue:null,description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'OverridableStringUnion<"text" | "outlined" | "contained", ButtonPropsVariantOverrides>'}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},loading:{defaultValue:{value:`false
null`},description:"If `true`, the loading indicator is shown and the button becomes disabled.\nIf `true`, the loading indicator is visible and the button is disabled.\nIf `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'OverridableStringUnion<"small" | "medium" | "large", ButtonPropsSizeOverrides>'}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const ae={title:"Components/Button/LoadingButton",component:t,tags:["autodocs"],args:{loading:!0,color:"primary",variant:"contained"}},o={render:({...n})=>e.jsxs(a,{container:!0,spacing:1,children:[e.jsx(a,{size:{xs:12},children:e.jsx(t,{...n,children:"No Icon"})}),e.jsx(a,{size:{xs:12},children:e.jsx(t,{...n,startIcon:e.jsx(s,{}),children:"Start Icon"})}),e.jsx(a,{size:{xs:12},children:e.jsx(t,{...n,endIcon:e.jsx(s,{}),children:"End Icon"})})]})};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...args
  }: LoadingButtonProps) => <Grid container spacing={1}>
      <Grid size={{
      xs: 12
    }}>
        <LoadingButton {...args}>No Icon</LoadingButton>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <LoadingButton {...args} startIcon={<SearchIcon />}>
          Start Icon
        </LoadingButton>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <LoadingButton {...args} endIcon={<SearchIcon />}>
          End Icon
        </LoadingButton>
      </Grid>
    </Grid>
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const oe=["_LoadingButton"];export{o as _LoadingButton,oe as __namedExportsOrder,ae as default};
