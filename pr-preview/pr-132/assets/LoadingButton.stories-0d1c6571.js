import{j as e,a as g}from"./jsx-runtime-390e5fc8.js";import{S as s}from"./index-a07a0c42.js";import{r as y}from"./index-570b25c1.js";import{M as b}from"./LoadingButton-d30fce51.js";import{C as I}from"./CircularProgress-c55bac56.js";import{G as o}from"./Grid-e557fe35.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-285a8f6c.js";import"./styled-78cd751f.js";import"./generateUtilityClasses-2915a045.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./Button-bf5d864a.js";import"./ButtonBase-da7ceb67.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./useId-6f4bfce0.js";import"./useTheme-b3699c65.js";import"./extendSxProp-4d42c058.js";const v=e(I,{color:"inherit",size:16,"aria-label":"loading"}),n=y.forwardRef((t,u)=>{const{children:p,loading:r,...a}=t,m=a.startIcon?"start":"end",f=a.startIcon||a.endIcon||r?{}:{padding:"0 .7rem"},h=a.startIcon?void 0:e("span",{style:r?{padding:"0 .7rem"}:{}});return e(b,{endIcon:h,loadingPosition:m,loading:r,disableRipple:!0,loadingIndicator:v,...a,ref:u,children:e("span",{style:f,children:p})})});try{n.displayName="LoadingButton",n.__docgenInfo={description:"",displayName:"LoadingButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & { root?: string; loading?: string; loadingIndicator?: string; loadingIndicatorCenter?: string; loadingIndicatorStart?: string; loadingIndicatorEnd?: string; endIconLoadingEnd?: string; startIconLoadingStart?: string; } & Partial<...>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"If `true`, the loading indicator is shown and the button becomes disabled.",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"Components/Button/LoadingButton",component:n,tags:["autodocs"],args:{loading:!0,color:"primary",variant:"contained"}},i={render:({...t})=>g(o,{container:!0,spacing:1,children:[e(o,{item:!0,xs:12,children:e(n,{...t,children:"No Icon"})}),e(o,{item:!0,xs:12,children:e(n,{...t,startIcon:e(s,{}),loadingPosition:"start",children:"Start Icon"})}),e(o,{item:!0,xs:12,children:e(n,{...t,endIcon:e(s,{}),children:"End Icon"})})]})};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...args
  }: LoadingButtonProps) => <Grid container spacing={1}>
        <Grid item xs={12}>
          <LoadingButton {...args}>No Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} startIcon={<SearchIcon />} loadingPosition='start'>Start Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} endIcon={<SearchIcon />}>End Icon</LoadingButton>
        </Grid>
      </Grid>
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Q=["_LoadingButton"];export{i as _LoadingButton,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=LoadingButton.stories-0d1c6571.js.map
