import{a as e,j as g}from"./jsx-runtime-a3bcee63.js";import{G as o}from"./index-6e8561aa.js";import{S as s}from"./index-53288845.js";import{r as y}from"./index-570b25c1.js";import{M as b}from"./LoadingButton-1ec35b70.js";import{M as I}from"./CircularProgress-96ade162.js";import"./Box-51bd3ea0.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./extendSxProp-b1abb964.js";import"./Container-3c3a93d6.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./styled-5c6c15e1.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./Stack-3fcb8940.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./generateUtilityClasses-b58f947a.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./Button-af0ca45f.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useId-6f4bfce0.js";const v=e(I,{color:"inherit",size:16,"aria-label":"loading"}),t=y.forwardRef((n,u)=>{const{children:p,loading:r,...a}=n,m=a.startIcon?"start":"end",f=a.startIcon||a.endIcon||r?{}:{padding:"0 .7rem"},h=a.startIcon?void 0:e("span",{style:r?{padding:"0 .7rem"}:{}});return e(b,{endIcon:h,loadingPosition:m,loading:r,disableRipple:!0,loadingIndicator:v,...a,ref:u,children:e("span",{style:f,children:p})})});try{t.displayName="LoadingButton",t.__docgenInfo={description:"",displayName:"LoadingButton",props:{variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},color:{defaultValue:null,description:"The color of the component.",name:"color",required:!1,type:{name:'"error" | "primary" | "secondary"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & { root?: string; loading?: string; loadingIndicator?: string; loadingIndicatorCenter?: string; loadingIndicatorStart?: string; loadingIndicatorEnd?: string; endIconLoadingEnd?: string; startIconLoadingStart?: string; } & Partial<...>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"If `true`, the loading indicator is shown and the button becomes disabled.",name:"loading",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const ee={title:"Components/Button/LoadingButton",component:t,tags:["autodocs"],args:{loading:!0,color:"primary",variant:"contained"}},i={render:({...n})=>g(o,{container:!0,spacing:1,children:[e(o,{xs:12,children:e(t,{...n,children:"No Icon"})}),e(o,{xs:12,children:e(t,{...n,startIcon:e(s,{}),children:"Start Icon"})}),e(o,{xs:12,children:e(t,{...n,endIcon:e(s,{}),children:"End Icon"})})]})};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...args
  }: LoadingButtonProps) => <Grid container spacing={1}>
      <Grid xs={12}>
        <LoadingButton {...args}>No Icon</LoadingButton>
      </Grid>
      <Grid xs={12}>
        <LoadingButton {...args} startIcon={<SearchIcon />}>
          Start Icon
        </LoadingButton>
      </Grid>
      <Grid xs={12}>
        <LoadingButton {...args} endIcon={<SearchIcon />}>
          End Icon
        </LoadingButton>
      </Grid>
    </Grid>
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ne=["_LoadingButton"];export{i as _LoadingButton,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=LoadingButton.stories-3bdbb1c3.js.map
