import{j as r,a as d}from"./jsx-runtime-91a467a5.js";import{A as c,a as s}from"./index-708258a2.js";import{B as t}from"./Button-3bac3c35.js";import{G as n}from"./Grid-358e3c71.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./faMagnifyingGlass-b0a29d74.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-9883e960.js";import"./styled-66459c09.js";import"./useThemeProps-c9f65ede.js";import"./extends-bab83b91.js";import"./Button-402397fc.js";import"./ButtonBase-766307d7.js";import"./emotion-react.browser.esm-aee3ac11.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./extendSxProp-c4e9793e.js";const K={title:"Components/Button/Button",component:t,tags:["autodocs"]},i={render:({...A})=>r(t,{...A,children:"Button"}),args:{variant:"contained",color:"primary",size:"medium"}},e={render:()=>d(n,{container:!0,spacing:1,children:[r(n,{item:!0,xs:12,children:r(t,{color:"primary",children:"Primary"})}),r(n,{item:!0,xs:12,children:r(t,{color:"secondary",children:"Secondary"})}),r(n,{item:!0,xs:12,children:r(t,{color:"tertiary",children:"Tertiary"})}),r(n,{item:!0,xs:12,children:r(t,{color:"error",children:"Error"})}),r(n,{item:!0,xs:12,children:r(t,{color:"primary",variant:"outlined",children:"Primary Outlined"})}),r(n,{item:!0,xs:12,children:r(t,{color:"secondary",variant:"outlined",children:"Secondary Outlined"})})]})},o={render:()=>d(n,{container:!0,spacing:1,children:[r(n,{item:!0,xs:12,children:r(t,{color:"tertiary",size:"small",children:"Small Button"})}),r(n,{item:!0,xs:12,children:r(t,{color:"secondary",size:"medium",children:"Medium Button"})}),r(n,{item:!0,xs:12,children:r(t,{color:"primary",size:"large",children:"Large Button"})})]})},a={render:()=>d(n,{container:!0,spacing:1,children:[r(n,{item:!0,xs:3,children:r(t,{color:"primary",size:"large",startIcon:r(c,{}),children:"Large"})}),r(n,{item:!0,xs:3,children:r(t,{color:"primary",size:"medium",startIcon:r(c,{}),children:"Medium"})}),r(n,{item:!0,xs:3,children:r(t,{color:"primary",size:"small",startIcon:r(c,{}),children:"Small"})}),r(n,{item:!0,xs:3}),r(n,{item:!0,xs:3,children:r(t,{color:"primary",size:"large",endIcon:r(s,{}),children:"Large"})}),r(n,{item:!0,xs:3,children:r(t,{color:"primary",size:"medium",endIcon:r(s,{}),children:"Medium"})}),r(n,{item:!0,xs:3,children:r(t,{color:"primary",size:"small",endIcon:r(s,{}),children:"Small"})}),r(n,{item:!0,xs:3})]})};var m,l,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium'
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,B,y,h,G;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(B=e.parameters)==null?void 0:B.docs)==null?void 0:y.source},description:{story:"Availity approved button colors and variations",...(G=(h=e.parameters)==null?void 0:h.docs)==null?void 0:G.description}}};var x,g,z;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=(g=o.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var I,S,C;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const N=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon"];export{i as _Button,o as _ButtonSizes,a as _ButtonWithIcon,e as _Colors,N as __namedExportsOrder,K as default};
//# sourceMappingURL=Button.stories-dc689c2d.js.map