import{a as e,j as c}from"./jsx-runtime-a3bcee63.js";import{G as t,B as q}from"./index-d756ba90.js";import{A as d,e as u}from"./index-fe51f95b.js";import{r as A}from"./index-570b25c1.js";import{B as T}from"./Button-d84dd9a0.js";import"./Box-0b96d669.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./extendSxProp-9115426f.js";import"./Container-a1530f69.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./styled-11d1647d.js";import"./Grid2-c21e3f98.js";import"./isMuiElement-6907f060.js";import"./Stack-8a417692.js";import"./faCircleArrowRight-e7789e56.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-951d7748.js";import"./generateUtilityClasses-70c60a0e.js";import"./_commonjsHelpers-042e6b4d.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";const L={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},r=A.forwardRef((n,_)=>e(T,{...n,...L,ref:_}));try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "tertiary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const ce={title:"Components/Button/Button",component:r,tags:["autodocs"]},i={render:({...n})=>e(r,{...n,children:"Button"}),args:{color:"primary",size:"large"}},o={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{xs:12,children:e(r,{color:"primary",children:"Primary"})}),e(t,{xs:12,children:e(r,{color:"secondary",children:"Secondary"})}),e(t,{xs:12,children:e(r,{color:"tertiary",children:"Tertiary"})})]})},a={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{xs:12,children:e(r,{color:"tertiary",size:"small",children:"Small Button"})}),e(t,{xs:12,children:e(r,{color:"secondary",size:"medium",children:"Medium Button"})}),e(t,{xs:12,children:e(r,{color:"primary",size:"large",children:"Large Button"})})]})},s={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{xs:3,children:e(r,{color:"primary",size:"large",startIcon:e(d,{}),children:"Large"})}),e(t,{xs:3,children:e(r,{color:"primary",size:"medium",startIcon:e(d,{}),children:"Medium"})}),e(t,{xs:3,children:e(r,{color:"primary",size:"small",startIcon:e(d,{}),children:"Small"})}),e(t,{xs:3}),e(t,{xs:3,children:e(r,{color:"primary",size:"large",endIcon:e(u,{}),children:"Large"})}),e(t,{xs:3,children:e(r,{color:"primary",size:"medium",endIcon:e(u,{}),children:"Medium"})}),e(t,{xs:3,children:e(r,{color:"primary",size:"small",endIcon:e(u,{}),children:"Small"})}),e(t,{xs:3})]})},l={render:()=>{const n={mr:1,mb:1};return c(q,{sx:{display:"flex",flexWrap:"wrap",mr:-1,mb:-1},children:[e(r,{color:"tertiary",sx:n,children:"Button 1"}),e(r,{color:"tertiary",sx:n,children:"Button 2"}),e(r,{color:"tertiary",sx:n,children:"Button 3"}),e(r,{color:"tertiary",sx:n,children:"Button 4"})]})}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    color: 'primary',
    size: 'large'
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,y,B,x,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    </Grid>
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source},description:{story:"Availity approved button colors and variations",...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,G,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(G=a.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var S,z,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,v,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const de=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon","_Groups"];export{i as _Button,a as _ButtonSizes,s as _ButtonWithIcon,o as _Colors,l as _Groups,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=Button.stories-b3bb77e8.js.map
