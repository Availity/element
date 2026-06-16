import{j as r}from"./iframe-3dkTY0jX.js";import{G as o,B as m}from"./index-DIxClpYS.js";import{A as d,e as l}from"./index-CuTsacvC.js";import{B as n}from"./Button-Dt5POQlk.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-8YbrThzE.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-CLckDB5v.js";import"./useTheme-DqSWHq5v.js";import"./isMuiElement-Bd2bXImB.js";import"./styled-BLuOjd1d.js";import"./styled-DpUmhVNm.js";import"./Stack-C6U2vEDQ.js";import"./Container-DbHjUNkP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-iH6sJxt7.js";import"./memoTheme-ClYOyAcO.js";import"./Button-llKR0QUB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CGwtNBxW.js";import"./useTimeout-C1Q0-pFI.js";import"./TransitionGroupContext-CenxJGkC.js";import"./useForkRef-D98SVFOp.js";import"./useEventCallback-DqxbtF2b.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BLVqZX76.js";const k={title:"Components/Button/Button",component:n,tags:["autodocs"]},s={render:({...t})=>r.jsx(n,{...t,children:"Button"}),args:{color:"primary",size:"large"}},e={render:()=>r.jsxs(o,{container:!0,spacing:1,children:[r.jsx(o,{size:{xs:12},children:r.jsx(n,{color:"primary",children:"Primary"})}),r.jsx(o,{size:{xs:12},children:r.jsx(n,{color:"secondary",children:"Secondary"})}),r.jsx(o,{size:{xs:12},children:r.jsx(n,{color:"tertiary",children:"Tertiary"})})]})},i={render:()=>r.jsxs(o,{container:!0,spacing:1,children:[r.jsx(o,{size:{xs:12},children:r.jsx(n,{color:"tertiary",size:"small",children:"Small Button"})}),r.jsx(o,{size:{xs:12},children:r.jsx(n,{color:"secondary",size:"medium",children:"Medium Button"})}),r.jsx(o,{size:{xs:12},children:r.jsx(n,{color:"primary",size:"large",children:"Large Button"})})]})},c={render:()=>r.jsxs(o,{container:!0,spacing:1,children:[r.jsx(o,{size:{xs:3},children:r.jsx(n,{color:"primary",size:"large",startIcon:r.jsx(d,{}),children:"Large"})}),r.jsx(o,{size:{xs:3},children:r.jsx(n,{color:"primary",size:"medium",startIcon:r.jsx(d,{}),children:"Medium"})}),r.jsx(o,{size:{xs:3},children:r.jsx(n,{color:"primary",size:"small",startIcon:r.jsx(d,{}),children:"Small"})}),r.jsx(o,{size:{xs:3}}),r.jsx(o,{size:{xs:3},children:r.jsx(n,{color:"primary",size:"large",endIcon:r.jsx(l,{}),children:"Large"})}),r.jsx(o,{size:{xs:3},children:r.jsx(n,{color:"primary",size:"medium",endIcon:r.jsx(l,{}),children:"Medium"})}),r.jsx(o,{size:{xs:3},children:r.jsx(n,{color:"primary",size:"small",endIcon:r.jsx(l,{}),children:"Small"})}),r.jsx(o,{size:{xs:3}})]})},a={render:()=>{const t={mr:1,mb:1};return r.jsxs(m,{sx:{display:"flex",flexWrap:"wrap",mr:-1,mb:-1},children:[r.jsx(n,{color:"tertiary",sx:t,children:"Button 1"}),r.jsx(n,{color:"tertiary",sx:t,children:"Button 2"}),r.jsx(n,{color:"tertiary",sx:t,children:"Button 3"}),r.jsx(n,{color:"tertiary",sx:t,children:"Button 4"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    color: 'primary',
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 12
    }}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="tertiary">Tertiary</Button>
      </Grid>
    </Grid>
}`,...e.parameters?.docs?.source},description:{story:"Availity approved button colors and variations",...e.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 12
    }}>
        <Button color="tertiary" size="small">
          Small Button
        </Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="secondary" size="medium">
          Medium Button
        </Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="primary" size="large">
          Large Button
        </Button>
      </Grid>
    </Grid>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="large" startIcon={<ArrowCircleLeftIcon />}>
          Large
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="medium" startIcon={<ArrowCircleLeftIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="small" startIcon={<ArrowCircleLeftIcon />}>
          Small
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }} />
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="large" endIcon={<ArrowCircleRightIcon />}>
          Large
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="medium" endIcon={<ArrowCircleRightIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="small" endIcon={<ArrowCircleRightIcon />}>
          Small
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }} />
    </Grid>
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const q=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon","_DisconnectedButtonGroup"];export{s as _Button,i as _ButtonSizes,c as _ButtonWithIcon,e as _Colors,a as _DisconnectedButtonGroup,q as __namedExportsOrder,k as default};
