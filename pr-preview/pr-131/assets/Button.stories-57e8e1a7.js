import{j as e,a as c}from"./jsx-runtime-390e5fc8.js";import{A as d,d as u}from"./index-f35eb24e.js";import{r as q}from"./index-570b25c1.js";import{B as A}from"./Button-6191b67f.js";import{G as t}from"./Grid-d51fec4b.js";import{B as T}from"./Box-7f261278.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-db7202c2.js";import"./styled-188025da.js";import"./generateUtilityClasses-f776b170.js";import"./_commonjsHelpers-042e6b4d.js";import"./ButtonBase-dcf5e891.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./useTheme-3a36d7a0.js";import"./extendSxProp-4d42c058.js";const L={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},r=q.forwardRef((n,_)=>e(A,{...n,...L,ref:_}));try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "tertiary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const oe={title:"Components/Button/Button",component:r,tags:["autodocs"]},i={render:({...n})=>e(r,{...n,children:"Button"}),args:{color:"primary",size:"medium"}},o={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:12,children:e(r,{color:"primary",children:"Primary"})}),e(t,{item:!0,xs:12,children:e(r,{color:"secondary",children:"Secondary"})}),e(t,{item:!0,xs:12,children:e(r,{color:"tertiary",children:"Tertiary"})})]})},a={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:12,children:e(r,{color:"tertiary",size:"small",children:"Small Button"})}),e(t,{item:!0,xs:12,children:e(r,{color:"secondary",size:"medium",children:"Medium Button"})}),e(t,{item:!0,xs:12,children:e(r,{color:"primary",size:"large",children:"Large Button"})})]})},s={render:()=>c(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"large",startIcon:e(d,{}),children:"Large"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"medium",startIcon:e(d,{}),children:"Medium"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"small",startIcon:e(d,{}),children:"Small"})}),e(t,{item:!0,xs:3}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"large",endIcon:e(u,{}),children:"Large"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"medium",endIcon:e(u,{}),children:"Medium"})}),e(t,{item:!0,xs:3,children:e(r,{color:"primary",size:"small",endIcon:e(u,{}),children:"Small"})}),e(t,{item:!0,xs:3})]})},l={render:()=>{const n={mr:1,mb:1};return c(T,{sx:{display:"flex",flexWrap:"wrap",mr:-1,mb:-1},children:[e(r,{color:"tertiary",sx:n,children:"Button 1"}),e(r,{color:"tertiary",sx:n,children:"Button 2"}),e(r,{color:"tertiary",sx:n,children:"Button 3"}),e(r,{color:"tertiary",sx:n,children:"Button 4"})]})}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    color: 'primary',
    size: 'medium'
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,y,B,x,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    </Grid>
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source},description:{story:"Availity approved button colors and variations",...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,G,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(G=a.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var S,z,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const ie=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon","_Groups"];export{i as _Button,a as _ButtonSizes,s as _ButtonWithIcon,o as _Colors,l as _Groups,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=Button.stories-57e8e1a7.js.map
