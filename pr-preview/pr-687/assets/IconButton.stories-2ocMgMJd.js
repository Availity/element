import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{G as n}from"./index-Cyp_3NIz.js";import{c as i}from"./index-0eQTE8wr.js";import{r as C}from"./index-DcWiA9TO.js";import{T as _}from"./Tooltip-CiiaKkqp.js";import{I as w}from"./IconButton-Caxu-qgA.js";import"./Box-DWnb8VZB.js";import"./identifier-Dtqimryx.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./generateUtilityClass-CVWqFxsA.js";import"./useTheme-C2CrmYKc.js";import"./extendSxProp-B5AgUjQT.js";import"./Grid2-y9MPRr2u.js";import"./useTheme-DUkCvbx_.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./styled-vBjI3IQc.js";import"./styled-CF1hcdwO.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-BIK-1DKm.js";import"./Stack-BcsM4Vc0.js";import"./Container-Cqq8qXXg.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./memoTheme-D-rVhYRp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-nos-0K8U.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DbVRbsLs.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./CircularProgress-D8w9ZPs6.js";const k={borderRadius:".25rem",border:1},t=C.forwardRef((s,v)=>{const{title:c,variant:S="text",sx:B,size:V="medium",...T}=s,q={...B,...S==="outlined"&&k};return e.jsx(_,{title:c,children:e.jsx(w,{"aria-label":c,sx:{...q},...T,ref:v,size:V})})});try{t.displayName="IconButton",t.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:{value:"'text'"},description:"The variant to use",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},color:{defaultValue:{value:"'secondary'"},description:"The color of the component",name:"color",required:!1,type:{name:'"primary" | "secondary"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<IconButtonClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:`The icon to display.
The content of the component.`,name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},title:{defaultValue:null,description:"Text for tooltip and aria-label",name:"title",required:!1,type:{name:"string"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},loading:{defaultValue:{value:"null"},description:"If `true`, the loading indicator is visible and the button is disabled.\nIf `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).",name:"loading",required:!1,type:{name:"boolean"}},loadingIndicator:{defaultValue:{value:'<CircularProgress color="inherit" size={16} />'},description:'Element placed before the children if the button is in loading state.\nThe node should contain an element with `role="progressbar"` with an accessible name.\nBy default, it renders a `CircularProgress` that is labeled by the button itself.',name:"loadingIndicator",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium"'}}}}}catch{}const Te={title:"Components/Button/IconButton",component:t,tags:["autodocs"],args:{title:"title text"},argTypes:{size:{table:{disable:!0}}}},o={render:({...s})=>e.jsx(t,{...s,children:e.jsx(i,{})})},a={render:()=>e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{size:{xs:3},children:"Text"}),e.jsx(n,{size:{xs:9},children:e.jsx(t,{title:"search",variant:"text",children:e.jsx(i,{})})}),e.jsx(n,{size:{xs:3},children:"Outlined"}),e.jsx(n,{size:{xs:9},children:e.jsx(t,{title:"search",variant:"outlined",children:e.jsx(i,{})})})]})},l={render:()=>e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{size:{xs:2},children:"Primary"}),e.jsx(n,{size:{xs:2},children:e.jsx(t,{title:"search",variant:"text",color:"primary",children:e.jsx(i,{})})}),e.jsx(n,{size:{xs:8},children:e.jsx(t,{title:"search",variant:"outlined",color:"primary",children:e.jsx(i,{})})}),e.jsx(n,{size:{xs:2},children:"Secondary"}),e.jsx(n,{size:{xs:2},children:e.jsx(t,{title:"search",variant:"text",color:"secondary",children:e.jsx(i,{})})}),e.jsx(n,{size:{xs:8},children:e.jsx(t,{title:"search",variant:"outlined",color:"secondary",children:e.jsx(i,{})})})]})},r={render:()=>e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{size:{xs:2},children:"xsmall icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(t,{title:"search",children:e.jsx(i,{fontSize:"xsmall"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(t,{title:"search",variant:"outlined",children:e.jsx(i,{fontSize:"xsmall"})})}),e.jsx(n,{size:{xs:2},children:"small icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(t,{title:"search",children:e.jsx(i,{fontSize:"small"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(t,{title:"search",variant:"outlined",children:e.jsx(i,{fontSize:"small"})})}),e.jsx(n,{size:{xs:2},children:"medium icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(t,{title:"search",children:e.jsx(i,{fontSize:"medium"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(t,{title:"search",variant:"outlined",children:e.jsx(i,{fontSize:"medium"})})}),e.jsx(n,{size:{xs:2},children:"large icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(t,{title:"search",children:e.jsx(i,{fontSize:"large"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(t,{title:"search",variant:"outlined",children:e.jsx(i,{fontSize:"large"})})})]})};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    ...args
  }: IconButtonProps) => <IconButton {...args}>
      <SearchIcon />
    </IconButton>
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 3
    }}>Text</Grid>
      <Grid size={{
      xs: 9
    }}>
        <IconButton title="search" variant="text">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 3
    }}>Outlined</Grid>
      <Grid size={{
      xs: 9
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,I,z;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 2
    }}>Primary</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search" variant="text" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>Secondary</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search" variant="text" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...(z=(I=l.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var y,g,j,G,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 2
    }}>xsmall icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>small icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>medium icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>large icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
}`,...(j=(g=r.parameters)==null?void 0:g.docs)==null?void 0:j.source},description:{story:"For additional sizes, specify `fontSize` on the child `Icon`",...(b=(G=r.parameters)==null?void 0:G.docs)==null?void 0:b.description}}};const qe=["_IconButton","_Variants","_Colors","_Sizes"];export{l as _Colors,o as _IconButton,r as _Sizes,a as _Variants,qe as __namedExportsOrder,Te as default};
