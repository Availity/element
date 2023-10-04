import{j as e,a as d}from"./jsx-runtime-390e5fc8.js";import{G as n,B as _}from"./index-17ab8ba2.js";import{A as c,e as u}from"./index-6c98e8c4.js";import{r as T}from"./index-570b25c1.js";import{B as A}from"./Button-b8d9193e.js";import"./Box-4ff12a56.js";import"./createTheme-cf9cd31a.js";import"./clsx.m-5a18bdae.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./extendSxProp-3c84bad0.js";import"./Container-bd153028.js";import"./styled-34470687.js";import"./useThemeProps-4eed9f55.js";import"./styled-4b92625c.js";import"./Grid2-a7e4c902.js";import"./isMuiElement-9a8390c4.js";import"./faCircleArrowRight-a219d0fc.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-544b53cd.js";import"./generateUtilityClasses-379cd6e3.js";import"./_commonjsHelpers-042e6b4d.js";import"./ButtonBase-c1676a07.js";import"./emotion-react.browser.esm-166e2a31.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";const L={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},r=T.forwardRef((t,q)=>e(A,{...t,...L,ref:q}));try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "tertiary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"contained"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"outlined" | "contained"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},iconOnly:{defaultValue:null,description:"Internal prop used by IconButton for contained variant.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Components/Button/Button",component:r,tags:["autodocs"]},i={render:({...t})=>e(r,{...t,children:"Button"}),args:{variant:"contained",color:"primary",size:"medium"}},o={render:()=>d(n,{container:!0,spacing:1,children:[e(n,{xs:12,children:e(r,{color:"primary",children:"Primary"})}),e(n,{xs:12,children:e(r,{color:"secondary",children:"Secondary"})}),e(n,{xs:12,children:e(r,{color:"tertiary",children:"Tertiary"})}),e(n,{xs:12,children:e(r,{color:"error",children:"Error"})}),e(n,{xs:12,children:e(r,{color:"primary",variant:"outlined",children:"Primary Outlined"})}),e(n,{xs:12,children:e(r,{color:"secondary",variant:"outlined",children:"Secondary Outlined"})})]})},a={render:()=>d(n,{container:!0,spacing:1,children:[e(n,{xs:12,children:e(r,{color:"tertiary",size:"small",children:"Small Button"})}),e(n,{xs:12,children:e(r,{color:"secondary",size:"medium",children:"Medium Button"})}),e(n,{xs:12,children:e(r,{color:"primary",size:"large",children:"Large Button"})})]})},s={render:()=>d(n,{container:!0,spacing:1,children:[e(n,{xs:3,children:e(r,{color:"primary",size:"large",startIcon:e(c,{}),children:"Large"})}),e(n,{xs:3,children:e(r,{color:"primary",size:"medium",startIcon:e(c,{}),children:"Medium"})}),e(n,{xs:3,children:e(r,{color:"primary",size:"small",startIcon:e(c,{}),children:"Small"})}),e(n,{xs:3}),e(n,{xs:3,children:e(r,{color:"primary",size:"large",endIcon:e(u,{}),children:"Large"})}),e(n,{xs:3,children:e(r,{color:"primary",size:"medium",endIcon:e(u,{}),children:"Medium"})}),e(n,{xs:3,children:e(r,{color:"primary",size:"small",endIcon:e(u,{}),children:"Small"})}),e(n,{xs:3})]})},l={render:()=>{const t={mr:1,mb:1};return d(_,{sx:{display:"flex",flexWrap:"wrap",mr:-1,mb:-1},children:[e(r,{color:"tertiary",sx:t,children:"Button 1"}),e(r,{color:"tertiary",sx:t,children:"Button 2"}),e(r,{color:"tertiary",sx:t,children:"Button 3"}),e(r,{color:"tertiary",sx:t,children:"Button 4"})]})}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <Grid xs={12}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid xs={12}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid xs={12}>
        <Button color="tertiary">Tertiary</Button>
      </Grid>
      <Grid xs={12}>
        <Button color="error">Error</Button>
      </Grid>
      <Grid xs={12}>
        <Button color="primary" variant="outlined">
          Primary Outlined
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button color="secondary" variant="outlined">
          Secondary Outlined
        </Button>
      </Grid>
    </Grid>
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source},description:{story:"Availity approved button colors and variations",...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,G,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid xs={12}>
        <Button color="tertiary" size="small">
          Small Button
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button color="secondary" size="medium">
          Medium Button
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button color="primary" size="large">
          Large Button
        </Button>
      </Grid>
    </Grid>
}`,...(I=(G=a.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var v,S,z;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid xs={3}>
        <Button color="primary" size="large" startIcon={<ArrowCircleLeftIcon />}>
          Large
        </Button>
      </Grid>
      <Grid xs={3}>
        <Button color="primary" size="medium" startIcon={<ArrowCircleLeftIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid xs={3}>
        <Button color="primary" size="small" startIcon={<ArrowCircleLeftIcon />}>
          Small
        </Button>
      </Grid>
      <Grid xs={3} />
      <Grid xs={3}>
        <Button color="primary" size="large" endIcon={<ArrowCircleRightIcon />}>
          Large
        </Button>
      </Grid>
      <Grid xs={3}>
        <Button color="primary" size="medium" endIcon={<ArrowCircleRightIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid xs={3}>
        <Button color="primary" size="small" endIcon={<ArrowCircleRightIcon />}>
          Small
        </Button>
      </Grid>
      <Grid xs={3} />
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
}`,...(C=(V=l.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const se=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon","_Groups"];export{i as _Button,a as _ButtonSizes,s as _ButtonWithIcon,o as _Colors,l as _Groups,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=Button.stories-411509db.js.map
