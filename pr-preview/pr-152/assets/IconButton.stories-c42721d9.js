import{a as e,j as c}from"./jsx-runtime-a3bcee63.js";import{G as n}from"./index-6e8561aa.js";import{S as i}from"./index-8e81bbc6.js";import{r as C}from"./index-570b25c1.js";import{M as w}from"./Tooltip-cae7e212.js";import{M as k}from"./IconButton-3fd19b93.js";import"./Box-51bd3ea0.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./extendSxProp-b1abb964.js";import"./Container-3c3a93d6.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./styled-5c6c15e1.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./Stack-3fcb8940.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./generateUtilityClasses-b58f947a.js";import"./_commonjsHelpers-042e6b4d.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./Grow-8a00b99f.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./useEnhancedEffect-460150e6.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./useSlotProps-039d2b0a.js";import"./useEventCallback-e1b9edb9.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";const N={borderRadius:".25rem",border:1},t=C.forwardRef((o,b)=>{const{title:d,variant:V="text",sx:_,...q}=o,T={..._,...V==="outlined"&&N};return e(w,{title:d,children:e(k,{"aria-label":d,sx:{...T},...q,ref:b})})});try{t.displayName="IconButton",t.__docgenInfo={description:"",displayName:"IconButton",props:{children:{defaultValue:null,description:`The icon to display.
The content of the component.`,name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<IconButtonClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"Text for tooltip and aria-label",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:"'secondary'"},description:"The color of the component",name:"color",required:!1,type:{name:'"primary" | "secondary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium"'}}}}}catch{}const ze={title:"Components/Button/IconButton",component:t,tags:["autodocs"],args:{title:"title text"},parameters:{docs:{description:{component:"Icon only button with built-in tooltip"}}}},a={render:({...o})=>e(t,{...o,children:e(i,{})})},s={render:()=>c(n,{container:!0,spacing:1,children:[e(n,{xs:3,children:"Text"}),e(n,{xs:9,children:e(t,{title:"search",variant:"text",children:e(i,{})})}),e(n,{xs:3,children:"Outlined"}),e(n,{xs:9,children:e(t,{title:"search",variant:"outlined",children:e(i,{})})})]})},l={render:()=>c(n,{container:!0,spacing:1,children:[e(n,{xs:2,children:"Primary"}),e(n,{xs:2,children:e(t,{title:"search",variant:"text",color:"primary",children:e(i,{})})}),e(n,{xs:8,children:e(t,{title:"search",variant:"outlined",color:"primary",children:e(i,{})})}),e(n,{xs:2,children:"Secondary"}),e(n,{xs:2,children:e(t,{title:"search",variant:"text",color:"secondary",children:e(i,{})})}),e(n,{xs:8,children:e(t,{title:"search",variant:"outlined",color:"secondary",children:e(i,{})})})]})},r={render:()=>c(n,{container:!0,spacing:1,children:[e(n,{xs:4,children:"Small"}),e(n,{xs:8,children:"Medium"}),e(n,{xs:2,children:e(t,{title:"search",size:"small",children:e(i,{fontSize:"xsmall"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"xsmall"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"medium",children:e(i,{fontSize:"xsmall"})})}),e(n,{xs:6,children:e(t,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"xsmall"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"small",children:e(i,{fontSize:"small"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"small"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"medium",children:e(i,{fontSize:"small"})})}),e(n,{xs:6,children:e(t,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"small"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"small",children:e(i,{fontSize:"medium"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"medium"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"medium",children:e(i,{fontSize:"medium"})})}),e(n,{xs:6,children:e(t,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"medium"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"small",children:e(i,{fontSize:"large"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"large"})})}),e(n,{xs:2,children:e(t,{title:"search",size:"medium",children:e(i,{fontSize:"large"})})}),e(n,{xs:6,children:e(t,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"large"})})})]})};var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    ...args
  }: IconButtonProps) => <IconButton {...args}>
      <SearchIcon />
    </IconButton>
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,f,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid xs={3}>Text</Grid>
      <Grid xs={9}>
        <IconButton title="search" variant="text">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={3}>Outlined</Grid>
      <Grid xs={9}>
        <IconButton title="search" variant="outlined">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var I,S,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid xs={2}>Primary</Grid>
      <Grid xs={2}>
        <IconButton title="search" variant="text" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={2}>Secondary</Grid>
      <Grid xs={2}>
        <IconButton title="search" variant="text" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var G,y,B,v,g;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid xs={4}>Small</Grid>
      <Grid xs={8}>Medium</Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source},description:{story:"For additional sizes, specify `fontSize` on the child `Icon`",...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};const Ge=["_IconButton","_Variants","_Colors","_Sizes"];export{l as _Colors,a as _IconButton,r as _Sizes,s as _Variants,Ge as __namedExportsOrder,ze as default};
//# sourceMappingURL=IconButton.stories-c42721d9.js.map
