import{j as t}from"./iframe-DTy-Hi1D.js";import{B as n,S as s}from"./index-zuOxgOiJ.js";import{T as p}from"./index-B3nHNvBt.js";import{E as o,a as m}from"./EmptyStateImage-htLgJoeQ.js";import{S as i}from"./MuiSystemProperties-CtLr4Jcz.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BiTKfYdJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-9G99kq7Q.js";import"./useTheme-D2uWiRt2.js";import"./isMuiElement-BqP85GjQ.js";import"./styled-CiCMHiUo.js";import"./styled-aP0uaM-i.js";import"./Stack-D5xuPFAT.js";import"./Container-CKdO9iiE.js";import"./Typography-BE1U26X8.js";import"./memoTheme-BG1xBytH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const A={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:i}}}},e={render:r=>t.jsx(n,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},c=Object.keys(m),a={render:()=>t.jsx(s,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:c.map(r=>t.jsxs(n,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(p,{children:r}),t.jsx(o,{variant:r})]},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
