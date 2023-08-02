import{j as r,a as d}from"./jsx-runtime-91a467a5.js";import{A as m,a as l}from"./index-1bba38c1.js";import{B as t}from"./Button-cba69d3b.js";import{G as o}from"./Grid-c603fb62.js";import{B as v}from"./Box-21ea2d5d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./faMagnifyingGlass-2576db7f.js";import"./faCircleArrowRight-14f512c4.js";import"./SvgIcon-6bda5215.js";import"./styled-e83a4d6b.js";import"./useThemeProps-2be0b178.js";import"./extends-bab83b91.js";import"./Button-91e81b21.js";import"./ButtonBase-43bbae14.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./useTheme-4b6e7437.js";import"./extendSxProp-f7e67a44.js";const Z={title:"Components/Button/Button",component:t,tags:["autodocs"]},i={render:({...n})=>r(t,{...n,children:"Button"}),args:{variant:"contained",color:"primary",size:"medium"}},e={render:()=>d(o,{container:!0,spacing:1,children:[r(o,{item:!0,xs:12,children:r(t,{color:"primary",children:"Primary"})}),r(o,{item:!0,xs:12,children:r(t,{color:"secondary",children:"Secondary"})}),r(o,{item:!0,xs:12,children:r(t,{color:"tertiary",children:"Tertiary"})}),r(o,{item:!0,xs:12,children:r(t,{color:"error",children:"Error"})}),r(o,{item:!0,xs:12,children:r(t,{color:"primary",variant:"outlined",children:"Primary Outlined"})}),r(o,{item:!0,xs:12,children:r(t,{color:"secondary",variant:"outlined",children:"Secondary Outlined"})})]})},s={render:()=>d(o,{container:!0,spacing:1,children:[r(o,{item:!0,xs:12,children:r(t,{color:"tertiary",size:"small",children:"Small Button"})}),r(o,{item:!0,xs:12,children:r(t,{color:"secondary",size:"medium",children:"Medium Button"})}),r(o,{item:!0,xs:12,children:r(t,{color:"primary",size:"large",children:"Large Button"})})]})},a={render:()=>d(o,{container:!0,spacing:1,children:[r(o,{item:!0,xs:3,children:r(t,{color:"primary",size:"large",startIcon:r(m,{}),children:"Large"})}),r(o,{item:!0,xs:3,children:r(t,{color:"primary",size:"medium",startIcon:r(m,{}),children:"Medium"})}),r(o,{item:!0,xs:3,children:r(t,{color:"primary",size:"small",startIcon:r(m,{}),children:"Small"})}),r(o,{item:!0,xs:3}),r(o,{item:!0,xs:3,children:r(t,{color:"primary",size:"large",endIcon:r(l,{}),children:"Large"})}),r(o,{item:!0,xs:3,children:r(t,{color:"primary",size:"medium",endIcon:r(l,{}),children:"Medium"})}),r(o,{item:!0,xs:3,children:r(t,{color:"primary",size:"small",endIcon:r(l,{}),children:"Small"})}),r(o,{item:!0,xs:3})]})},c={render:()=>{const n={mr:1,mb:1};return d(v,{sx:{display:"flex",flexWrap:"wrap",mr:-1,mb:-1},children:[r(t,{color:"tertiary",sx:n,children:"Button 1"}),r(t,{color:"tertiary",sx:n,children:"Button 2"}),r(t,{color:"tertiary",sx:n,children:"Button 3"}),r(t,{color:"tertiary",sx:n,children:"Button 4"})]})}};var u,p,B;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium'
  }
}`,...(B=(p=i.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var y,x,h,G,g;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"Availity approved button colors and variations",...(g=(G=e.parameters)==null?void 0:G.docs)==null?void 0:g.description}}};var S,z,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(z=s.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var f,_,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(_=a.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var w,A,L;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const $=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon","_Groups"];export{i as _Button,s as _ButtonSizes,a as _ButtonWithIcon,e as _Colors,c as _Groups,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Button.stories-ee5c16d1.js.map
