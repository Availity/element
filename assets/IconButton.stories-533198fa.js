import{j as e,a as c}from"./jsx-runtime-390e5fc8.js";import{S as i}from"./index-a97b9a56.js";import{r as C}from"./index-570b25c1.js";import{M as w}from"./Tooltip-d34c04c4.js";import{M as k}from"./IconButton-8720a92d.js";import{G as t}from"./Grid-631b4085.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-6af4d5b9.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-bb804320.js";import"./styled-d0245a8f.js";import"./generateUtilityClasses-145aac4e.js";import"./_commonjsHelpers-042e6b4d.js";import"./useTheme-108b79b5.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./ButtonBase-ae02db0a.js";import"./emotion-react.browser.esm-325397be.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./utils-78dc3aa5.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./extendSxProp-fa3ab054.js";const N={borderRadius:".25rem",border:1},n=C.forwardRef((o,b)=>{const{title:d,variant:V="text",sx:_,...q}=o,T={..._,...V==="outlined"&&N};return e(w,{title:d,children:e(k,{"aria-label":d,sx:{...T},...q,ref:b})})});try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<IconButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:`The icon to display.
The content of the component.`,name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"'secondary'"},description:"The color of the component",name:"color",required:!1,type:{name:'"primary" | "secondary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},title:{defaultValue:null,description:"Text for tooltip and aria-label",name:"title",required:!1,type:{name:"string"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium"'}}}}}catch{}const de={title:"Components/Button/IconButton",component:n,tags:["autodocs"],args:{title:"title text"},parameters:{docs:{description:{component:"Icon only button with built-in tooltip"}}}},a={render:({...o})=>e(n,{...o,children:e(i,{})})},s={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:3,children:"Text"}),e(t,{item:!0,xs:9,children:e(n,{title:"search",variant:"text",children:e(i,{})})}),e(t,{item:!0,xs:3,children:"Outlined"}),e(t,{item:!0,xs:9,children:e(n,{title:"search",variant:"outlined",children:e(i,{})})})]})},l={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:2,children:"Primary"}),e(t,{item:!0,xs:2,children:e(n,{title:"search",variant:"text",color:"primary",children:e(i,{})})}),e(t,{item:!0,xs:8,children:e(n,{title:"search",variant:"outlined",color:"primary",children:e(i,{})})}),e(t,{item:!0,xs:2,children:"Secondary"}),e(t,{item:!0,xs:2,children:e(n,{title:"search",variant:"text",color:"secondary",children:e(i,{})})}),e(t,{item:!0,xs:8,children:e(n,{title:"search",variant:"outlined",color:"secondary",children:e(i,{})})})]})},r={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:4,children:"Small"}),e(t,{item:!0,xs:8,children:"Medium"}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",children:e(i,{fontSize:"xsmall"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"xsmall"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"medium",children:e(i,{fontSize:"xsmall"})})}),e(t,{item:!0,xs:6,children:e(n,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"xsmall"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",children:e(i,{fontSize:"small"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"small"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"medium",children:e(i,{fontSize:"small"})})}),e(t,{item:!0,xs:6,children:e(n,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"small"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",children:e(i,{fontSize:"medium"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"medium"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"medium",children:e(i,{fontSize:"medium"})})}),e(t,{item:!0,xs:6,children:e(n,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"medium"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",children:e(i,{fontSize:"large"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"small",variant:"outlined",children:e(i,{fontSize:"large"})})}),e(t,{item:!0,xs:2,children:e(n,{title:"search",size:"medium",children:e(i,{fontSize:"large"})})}),e(t,{item:!0,xs:6,children:e(n,{title:"search",size:"medium",variant:"outlined",children:e(i,{fontSize:"large"})})})]})};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...args
  }: IconButtonProps) => <IconButton {...args}>
      <SearchIcon />
    </IconButton>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var p,f,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={3}>
        Text
      </Grid>
      <Grid item xs={9}>
        <IconButton title="search" variant="text">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        Outlined
      </Grid>
      <Grid item xs={9}>
        <IconButton title="search" variant="outlined">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var I,S,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={2}>
        Primary
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" variant="text" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8}>
        <IconButton title="search" variant="outlined" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        Secondary
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" variant="text" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8}>
        <IconButton title="search" variant="outlined" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var G,y,B,v,g;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={4}>
        Small
      </Grid>
      <Grid item xs={8}>
        Medium
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="small" variant="outlined">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton title="search" size="medium">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton title="search" size="medium" variant="outlined">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source},description:{story:"For additional sizes, specify `fontSize` on the child `Icon`",...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};const me=["_IconButton","_Variants","_Colors","_Sizes"];export{l as _Colors,a as _IconButton,r as _Sizes,s as _Variants,me as __namedExportsOrder,de as default};
//# sourceMappingURL=IconButton.stories-533198fa.js.map