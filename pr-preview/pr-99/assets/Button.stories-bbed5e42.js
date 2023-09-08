import{j as e,a as d}from"./jsx-runtime-390e5fc8.js";import{A as c,d as u}from"./index-91a95a3a.js";import{r as _}from"./index-570b25c1.js";import{B as T}from"./Button-fce9389c.js";import{G as t}from"./Grid-e31ff0b5.js";import{B as A}from"./Box-4c9f5af0.js";import"./faCircleArrowRight-32490c46.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-644454bc.js";import"./styled-2191822d.js";import"./useThemeProps-66ab754c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./_commonjsHelpers-042e6b4d.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useTheme-c775f3da.js";import"./extendSxProp-564f0963.js";const L={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},r=_.forwardRef((n,q)=>e(T,{...n,...L,ref:q}));try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "tertiary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"contained"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"outlined" | "contained"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},iconOnly:{defaultValue:null,description:"Internal prop used by IconButton for contained variant.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Button/Button",component:r,tags:["autodocs"]},i={render:({...n})=>e(r,{...n,children:"Button"}),args:{variant:"contained",color:"primary",size:"medium"}},o={render:()=>d(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:12,children:e(r,{color:"primary",children:"Primary"})}),e(t,{item:!0,xs:12,children:e(r,{color:"secondary",children:"Secondary"})}),e(t,{item:!0,xs:12,children:e(r,{color:"tertiary",children:"Tertiary"})}),e(t,{item:!0,xs:12,children:e(r,{color:"error",children:"Error"})}),e(t,{item:!0,xs:12,children:e(r,{color:"primary",variant:"outlined",children:"Primary Outlined"})}),e(t,{item:!0,xs:12,children:e(r,{color:"secondary",variant:"outlined",children:"Secondary Outlined"})})]})},a={render:()=>d(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:12,children:e(r,{color:"tertiary",size:"small",children:"Small Button"})}),e(t,{item:!0,xs:12,children:e(r,{color:"secondary",size:"medium",children:"Medium Button"})}),e(t,{item:!0,xs:12,children:e(r,{color:"primary",size:"large",children:"Large Button"})})]})},s={render:()=>d(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"large",startIcon:e(c,{}),children:"Large"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"medium",startIcon:e(c,{}),children:"Medium"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"small",startIcon:e(c,{}),children:"Small"})}),e(t,{item:!0,xs:3}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"large",endIcon:e(u,{}),children:"Large"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"medium",endIcon:e(u,{}),children:"Medium"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"small",endIcon:e(u,{}),children:"Small"})}),e(t,{item:!0,xs:3})]})},l={render:()=>{const n={mr:1,mb:1};return d(A,{sx:{display:"flex",flexWrap:"wrap",mr:-1,mb:-1},children:[e(r,{color:"tertiary",sx:n,children:"Button 1"}),e(r,{color:"tertiary",sx:n,children:"Button 2"}),e(r,{color:"tertiary",sx:n,children:"Button 3"}),e(r,{color:"tertiary",sx:n,children:"Button 4"})]})}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium'
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var y,f,B,x,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="tertiary">Tertiary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="error">Error</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" variant="outlined">
          Primary Outlined
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="outlined">
          Secondary Outlined
        </Button>
      </Grid>
    </Grid>
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source},description:{story:"Availity approved button colors and variations",...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,G,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button color="tertiary" size="small">
          Small Button
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" size="medium">
          Medium Button
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" size="large">
          Large Button
        </Button>
      </Grid>
    </Grid>
}`,...(I=(G=a.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var v,S,z;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={3}>
        <Button color="primary" size="large" startIcon={<ArrowCircleLeftIcon />}>
          Large
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="medium" startIcon={<ArrowCircleLeftIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="small" startIcon={<ArrowCircleLeftIcon />}>
          Small
        </Button>
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={3}>
        <Button color="primary" size="large" endIcon={<ArrowCircleRightIcon />}>
          Large
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="medium" endIcon={<ArrowCircleRightIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="small" endIcon={<ArrowCircleRightIcon />}>
          Small
        </Button>
      </Grid>
      <Grid item xs={3} />
    </Grid>
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,V,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const groupedButtonStyles = {
      mr: 1,
      mb: 1
    };
    return <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      mr: -1,
      mb: -1
    }}>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 1
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 2
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 3
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 4
        </Button>
      </Box>;
  }
}`,...(C=(V=l.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const ee=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon","_Groups"];export{i as _Button,a as _ButtonSizes,s as _ButtonWithIcon,o as _Colors,l as _Groups,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Button.stories-bbed5e42.js.map
