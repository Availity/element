import{j as e}from"./iframe-B3KH45W1.js";import{P as t}from"./Paper-sb54ma1Z.js";import{S as s}from"./MuiSystemProperties-CtLr4Jcz.js";import{G as n}from"./Grid-BlezGjUJ.js";import"./preload-helper-Dab_6GC_.js";import"./Paper-BJPkQ8DM.js";import"./useTheme-Ds4SDsFm.js";import"./styled-B89GBRvi.js";import"./memoTheme-DWwRHojM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Grid-CXe_6B0b.js";import"./isMuiElement-BGMciLL0.js";import"./styled-CG3DpTjV.js";const P={title:"Components/Layout/Grid",component:n,tags:["autodocs"],parameters:{docs:{controls:{exclude:s},description:{component:`The grid system is implemented with the \`Grid\` component:

+ It uses CSS Flexbox (rather than CSS Grid) for high flexibility.
+ The grid is always a flex item. Use the \`container\` prop to add a flex container.
+ Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
+ There are five default grid breakpoints: xs, sm, md, lg, and xl.
+ You can give integer values for each breakpoint, to indicate how many of the 1 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints.
+ It uses negative margins and padding to create gaps between children, which behave similarly to the \`gap\` CSS property.
+ It does not support row spanning. Children elements cannot span multiple rows. We recommend using CSS Grid if you need this functionality.
+ It does not automatically place children. It will try to fit the children one by one, and if there is not enough space, the rest of the children will start on the next line, and so on. If you need auto-placement, we recommend using CSS Grid instead.

> As a CSS utility, the \`Grid\` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.`}},canvas:{controls:{exclude:s}}}},i={render:({children:r,container:o,spacing:a,...d})=>e.jsxs(n,{container:o,spacing:a,...d,children:[e.jsx(n,{size:{xs:8},children:e.jsx(t,{children:r})}),e.jsx(n,{size:{xs:4},children:e.jsx(t,{children:r})}),e.jsx(n,{size:{xs:4},children:e.jsx(t,{children:r})}),e.jsx(n,{size:{xs:8},children:e.jsx(t,{children:r})})]}),args:{children:"Grid Item",container:!0,spacing:2}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    container,
    spacing,
    ...args
  }: GridProps) => <Grid container={container} spacing={spacing} {...args}>
      <Grid size={{
      xs: 8
    }}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid size={{
      xs: 4
    }}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid size={{
      xs: 4
    }}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <Paper>{children}</Paper>
      </Grid>
    </Grid>,
  args: {
    children: 'Grid Item',
    container: true,
    spacing: 2
  }
}`,...i.parameters?.docs?.source}}};const j=["_Grid"];export{i as _Grid,j as __namedExportsOrder,P as default};
