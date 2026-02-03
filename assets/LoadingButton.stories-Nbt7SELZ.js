import{r as m,j as e}from"./iframe-CsWHXpAl.js";import{G as o}from"./index-D6jmlPGV.js";import{c as s}from"./index-CAQ8YrHX.js";import{B as f}from"./Button-CA2GH-94.js";import{C as h}from"./CircularProgress-DpaflDra.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D0gDoyzH.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-ht3QhPkQ.js";import"./useTheme-p1ELRF_q.js";import"./styled-DAuJ6HDN.js";import"./styled-7ngSg1XE.js";import"./isMuiElement-Bn1OwKtz.js";import"./Stack-Cd9e6_04.js";import"./Container-B-ZE-anm.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-rO9Zrjko.js";import"./memoTheme-D1WvXAYX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bidr6pNA.js";import"./useTimeout-MBLSaU9x.js";import"./TransitionGroupContext-C2wcbRoz.js";import"./useForkRef-C-HgPgYg.js";import"./useEventCallback-ByFiieHy.js";import"./isFocusVisible-B8k4qzLc.js";const g=e.jsx(h,{color:"inherit",size:16,"aria-label":"loading"}),t=m.forwardRef((n,l)=>{const{children:d,loading:r=!1,...a}=n,c=a.startIcon?"start":"end",u=a.startIcon||a.endIcon||r?{}:{padding:"0 .7rem"},p=a.startIcon?void 0:e.jsx("span",{style:r?{padding:"0 .7rem"}:{}});return e.jsx(f,{endIcon:p,loadingPosition:c,loading:r,disableRipple:!0,loadingIndicator:g,...a,ref:l,children:e.jsx("span",{style:u,children:d})})});try{t.displayName="LoadingButton",t.__docgenInfo={description:"",displayName:"LoadingButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "tertiary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"The size of the component.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},loading:{defaultValue:{value:"null"},description:"If `true`, the loading indicator is visible and the button is disabled.\nIf `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).",name:"loading",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
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
