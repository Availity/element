import{j as t}from"./iframe-TaNZkFdX.js";import{B as n,S as s}from"./index-BDHwWUp_.js";import{T as p}from"./index-CvI2ruD5.js";import{E as o,a as m}from"./EmptyStateImage-t_rX3q0s.js";import{S as i}from"./MuiSystemProperties-CtLr4Jcz.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-B6-W-G0J.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-CXWUeHQh.js";import"./useTheme-BwMLg3Cm.js";import"./isMuiElement-D3gl8ezB.js";import"./styled-Dk8RL2_h.js";import"./styled-B4LT_xKE.js";import"./Stack-CHbD9DWZ.js";import"./Container-Bw0hRcvj.js";import"./Typography-01frBhx_.js";import"./memoTheme-DWNFUNe8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const A={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:i}}}},e={render:r=>t.jsx(n,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},c=Object.keys(m),a={render:()=>t.jsx(s,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:c.map(r=>t.jsxs(n,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(p,{children:r}),t.jsx(o,{variant:r})]},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args: EmptyStateImageProps) => <Box sx={{
    backgroundColor: 'background.paper',
    padding: '2rem',
    width: {
      xs: '100%',
      md: '25%'
    },
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }}>
      <EmptyStateImage {...args} />
    </Box>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Stack direction="row" spacing={2} alignItems="flex-start" flexWrap="wrap" useFlexGap>
        {variants.map(variant => <Box textAlign="center" key={variant} sx={{
        backgroundColor: 'background.paper',
        padding: '3rem'
      }}>
            <Typography>{variant}</Typography>
            <EmptyStateImage variant={variant as keyof typeof EmptyStateImages} />
          </Box>)}
      </Stack>;
  }
}`,...a.parameters?.docs?.source}}};const T=["_EmptyStateImage","_variants"];export{e as _EmptyStateImage,T as __namedExportsOrder,a as _variants,A as default};
