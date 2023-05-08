import{j as e,a as y}from"./jsx-runtime-670450c2.js";import{B as v,G as r}from"./Grid-289d750e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./useThemeProps-61ddb322.js";import"./extends-98964cd2.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./ButtonBase-6e404bf7.js";import"./emotion-react.browser.esm-5cb50a94.js";import"./inheritsLoose-d374ba88.js";import"./useForkRef-2e794f8b.js";import"./extendSxProp-c9fb18fe.js";const b={bgcolor:"tertiary.main",color:"black","&:focus, &:hover":{bgcolor:"tertiary.dark"},"&:active":{bgcolor:"tertiary.light"}},t=({color:n="secondary",variant:i="contained",...h})=>e(v,{color:n=="tertiary"?"secondary":n,variant:i,sx:n=="tertiary"&&i=="contained"?{...b}:void 0,disableRipple:!0,...h});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"tertiary"'}]}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"contained"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const E={title:"Components/Button/Button",component:t,tags:["autodocs"],args:{variant:"contained",color:"primary",size:"medium"}},o={render:({...n})=>e(t,{...n,children:"Button"})},a={render:()=>y(r,{container:!0,spacing:1,children:[e(r,{item:!0,xs:12,children:e(t,{color:"primary",children:"Primary"})}),e(r,{item:!0,xs:12,children:e(t,{color:"secondary",children:"Secondary"})}),e(r,{item:!0,xs:12,children:e(t,{color:"tertiary",children:"Tertiary"})}),e(r,{item:!0,xs:12,children:e(t,{color:"error",children:"Error"})}),e(r,{item:!0,xs:12,children:e(t,{color:"primary",variant:"outlined",children:"Primary Outlined"})}),e(r,{item:!0,xs:12,children:e(t,{color:"secondary",variant:"outlined",children:"Secondary Outlined"})})]})};var l,s,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,c,m,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <Button color="primary" variant="outlined">Primary Outlined</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="outlined">Secondary Outlined</Button>
      </Grid>
    </Grid>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Availity approved button colors and variations",...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.description}}};const N=["_Button","_Colors"];export{o as _Button,a as _Colors,N as __namedExportsOrder,E as default};
//# sourceMappingURL=Button.stories-4da44142.js.map
