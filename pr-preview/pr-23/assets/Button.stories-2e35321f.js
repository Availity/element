import{j as r,a as d}from"./jsx-runtime-58698645.js";import{A as c,a as s}from"./index-bee9cb18.js";import{B as e}from"./Button-1a3a9b6c.js";import{G as t}from"./Grid-78946470.js";import"./index-ccf6a75d.js";import"./faMagnifyingGlass-8ccf1391.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-f97c6cbd.js";import"./styled-a59e08e5.js";import"./useThemeProps-cd8be639.js";import"./extends-79cb841a.js";import"./Button-7a4eb1c2.js";import"./ButtonBase-e9bad826.js";import"./emotion-react.browser.esm-a2dfcabe.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-75c8d838.js";import"./extendSxProp-538a3ba9.js";const H={title:"Components/Button/Button",component:e,tags:["autodocs"]},o={render:({...A})=>r(e,{...A,children:"Button"}),args:{variant:"contained",color:"primary",size:"medium"}},n={render:()=>d(t,{container:!0,spacing:1,children:[r(t,{item:!0,xs:12,children:r(e,{color:"primary",children:"Primary"})}),r(t,{item:!0,xs:12,children:r(e,{color:"secondary",children:"Secondary"})}),r(t,{item:!0,xs:12,children:r(e,{color:"tertiary",children:"Tertiary"})}),r(t,{item:!0,xs:12,children:r(e,{color:"error",children:"Error"})}),r(t,{item:!0,xs:12,children:r(e,{color:"primary",variant:"outlined",children:"Primary Outlined"})}),r(t,{item:!0,xs:12,children:r(e,{color:"secondary",variant:"outlined",children:"Secondary Outlined"})})]})},i={render:()=>d(t,{container:!0,spacing:1,children:[r(t,{item:!0,xs:12,children:r(e,{color:"tertiary",size:"small",children:"Small Button"})}),r(t,{item:!0,xs:12,children:r(e,{color:"secondary",size:"medium",children:"Medium Button"})}),r(t,{item:!0,xs:12,children:r(e,{color:"primary",size:"large",children:"Large Button"})})]})},a={render:()=>d(t,{container:!0,spacing:1,children:[r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"large",startIcon:r(c,{}),children:"Large"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"medium",startIcon:r(c,{}),children:"Medium"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"small",startIcon:r(c,{}),children:"Small"})}),r(t,{xs:3}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"large",endIcon:r(s,{}),children:"Large"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"medium",endIcon:r(s,{}),children:"Medium"})}),r(t,{item:!0,xs:3,children:r(e,{color:"primary",size:"small",endIcon:r(s,{}),children:"Small"})}),r(t,{xs:3})]})};var m,l,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const J=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon"];export{o as _Button,i as _ButtonSizes,a as _ButtonWithIcon,n as _Colors,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Button.stories-2e35321f.js.map
