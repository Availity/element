import{j as t}from"./iframe-BAio8bRO.js";import{B as n,S as s}from"./index-q0NfFQ9-.js";import{T as p}from"./index-CvE6eDwb.js";import{E as o,a as m}from"./EmptyStateImage-PSwDRea-.js";import{S as i}from"./MuiSystemProperties-CtLr4Jcz.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D9uuWVv-.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-t7gGqywk.js";import"./useTheme-BlST_Otk.js";import"./isMuiElement-AydbSc-U.js";import"./styled-EJoH7QSk.js";import"./styled-BVlyzXC0.js";import"./Stack-bN5r8_lU.js";import"./Container-CV_lDoo_.js";import"./Typography-BPUxSRI8.js";import"./memoTheme-B5Zw--p6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const A={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:i}}}},e={render:r=>t.jsx(n,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},c=Object.keys(m),a={render:()=>t.jsx(s,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:c.map(r=>t.jsxs(n,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(p,{children:r}),t.jsx(o,{variant:r})]},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
