import{j as r,a as d}from"./jsx-runtime-670450c2.js";import{A as c,a as s}from"./index-00b5c9ce.js";import{B as e}from"./Button-485e1ad5.js";import{G as t}from"./Grid-2910eff8.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./faMagnifyingGlass-8ccf1391.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-f528eb28.js";import"./useThemeProps-601b945a.js";import"./extends-98964cd2.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Button-9a097d75.js";import"./ButtonBase-09e0211d.js";import"./emotion-react.browser.esm-5cb50a94.js";import"./inheritsLoose-d374ba88.js";import"./useForkRef-2e794f8b.js";import"./extendSxProp-e7bb663c.js";const J={title:"Components/Button/Button",component:e,tags:["autodocs"]},o={render:({...A})=>r(e,{...A,children:"Button"}),args:{variant:"contained",color:"primary",size:"medium"}},n={render:()=>d(t,{container:!0,spacing:1,children:[r(t,{item:!0,xs:12,children:r(e,{color:"primary",children:"Primary"})}),r(t,{item:!0,xs:12,children:r(e,{color:"secondary",children:"Secondary"})}),r(t,{item:!0,xs:12,children:r(e,{color:"tertiary",children:"Tertiary"})}),r(t,{item:!0,xs:12,children:r(e,{color:"error",children:"Error"})}),r(t,{item:!0,xs:12,children:r(e,{color:"primary",variant:"outlined",children:"Primary Outlined"})}),r(t,{item:!0,xs:12,children:r(e,{color:"secondary",variant:"outlined",children:"Secondary Outlined"})})]})},i={render:()=>d(t,{container:!0,spacing:1,children:[r(t,{item:!0,xs:12,children:r(e,{color:"tertiary",size:"small",children:"Small Button"})}),r(t,{item:!0,xs:12,children:r(e,{color:"secondary",size:"medium",children:"Medium Button"})}),r(t,{item:!0,xs:12,children:r(e,{color:"primary",size:"large",children:"Large Button"})})]})},a={render:()=>d(t,{container:!0,spacing:1,children:[r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"large",startIcon:r(c,{}),children:"Large"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"medium",startIcon:r(c,{}),children:"Medium"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"small",startIcon:r(c,{}),children:"Small"})}),r(t,{xs:3}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"large",endIcon:r(s,{}),children:"Large"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"medium",endIcon:r(s,{}),children:"Medium"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"small",endIcon:r(s,{}),children:"Small"})}),r(t,{xs:3})]})};var m,l,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium'
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,B,y,h,G;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(B=n.parameters)==null?void 0:B.docs)==null?void 0:y.source},description:{story:"Availity approved button colors and variations",...(G=(h=n.parameters)==null?void 0:h.docs)==null?void 0:G.description}}};var x,g,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button color="tertiary" size="small">Small Button</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" size="medium">Medium Button</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" size="large">Large Button</Button>
      </Grid>
    </Grid>
}`,...(z=(g=i.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var I,S,C;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={3}>
        <Button color="primary" size="large" startIcon={<ArrowCircleLeftIcon />}>Large</Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="medium" startIcon={<ArrowCircleLeftIcon />}>Medium</Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="small" startIcon={<ArrowCircleLeftIcon />}>Small</Button>
      </Grid>
      <Grid xs={3} />
      <Grid item xs={3}>
        <Button color="primary" size="large" endIcon={<ArrowCircleRightIcon />}>Large</Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="medium" endIcon={<ArrowCircleRightIcon />}>Medium</Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="small" endIcon={<ArrowCircleRightIcon />}>Small</Button>
      </Grid>
      <Grid xs={3} />
    </Grid>
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const K=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon"];export{o as _Button,i as _ButtonSizes,a as _ButtonWithIcon,n as _Colors,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Button.stories-b50f5024.js.map
