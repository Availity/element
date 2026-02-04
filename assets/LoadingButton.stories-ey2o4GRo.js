import{r as m,j as e}from"./iframe-uePoqqpz.js";import{G as o}from"./index-B2DDv_1u.js";import{c as s}from"./index-iuot5o8P.js";import{B as f}from"./Button-BeX4uEqy.js";import{C as h}from"./CircularProgress-JnYtC6I3.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DubY7n2i.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-B0G5TA-i.js";import"./useTheme-CLegm-7I.js";import"./styled-CfUCvIwx.js";import"./styled-HV0RCVZb.js";import"./isMuiElement-HClAlyu-.js";import"./Stack-arXlwEbk.js";import"./Container-BhCZsEOQ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzJHsKlT.js";import"./memoTheme-Dgj0sIK-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DvYvvCW7.js";import"./useTimeout-_NjN4_Sd.js";import"./TransitionGroupContext-CmeeQpCz.js";import"./useForkRef-BwAAUV5l.js";import"./useEventCallback-DlO0-RjJ.js";import"./isFocusVisible-B8k4qzLc.js";const g=e.jsx(h,{color:"inherit",size:16,"aria-label":"loading"}),t=m.forwardRef((n,l)=>{const{children:d,loading:r=!1,...a}=n,c=a.startIcon?"start":"end",u=a.startIcon||a.endIcon||r?{}:{padding:"0 .7rem"},p=a.startIcon?void 0:e.jsx("span",{style:r?{padding:"0 .7rem"}:{}});return e.jsx(f,{endIcon:p,loadingPosition:c,loading:r,disableRipple:!0,loadingIndicator:g,...a,ref:l,children:e.jsx("span",{style:u,children:d})})});try{t.displayName="LoadingButton",t.__docgenInfo={description:"",displayName:"LoadingButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "tertiary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"null"},description:"If `true`, the loading indicator is visible and the button is disabled.\nIf `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"The size of the component.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const D={title:"Components/Button/LoadingButton",component:t,tags:["autodocs"],args:{loading:!0,color:"primary"}},i={render:({...n})=>e.jsxs(o,{container:!0,spacing:1,children:[e.jsx(o,{size:{xs:12},children:e.jsx(t,{...n,children:"No Icon"})}),e.jsx(o,{size:{xs:12},children:e.jsx(t,{...n,startIcon:e.jsx(s,{}),children:"Start Icon"})}),e.jsx(o,{size:{xs:12},children:e.jsx(t,{...n,endIcon:e.jsx(s,{}),children:"End Icon"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const M=["_LoadingButton"];export{i as _LoadingButton,M as __namedExportsOrder,D as default};
