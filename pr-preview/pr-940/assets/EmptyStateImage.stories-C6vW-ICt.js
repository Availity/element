import{j as t}from"./iframe-ClyInPD8.js";import{B as n,S as s}from"./index-zd_NREJJ.js";import{T as p}from"./index-BS5Ax9ph.js";import{E as o,a as m}from"./EmptyStateImage-DZD7Z45z.js";import{S as i}from"./MuiSystemProperties-CtLr4Jcz.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-eNTJbR1-.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-CgIe3-7e.js";import"./useTheme-Cf-PtNfg.js";import"./isMuiElement-Bh35qceP.js";import"./styled-XkY1prTM.js";import"./styled-D7PoFJCi.js";import"./Stack-nuzf0IeA.js";import"./Container-DALlxZP3.js";import"./Typography-D3903seB.js";import"./memoTheme-CULMZTzm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const A={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:i}}}},e={render:r=>t.jsx(n,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},c=Object.keys(m),a={render:()=>t.jsx(s,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:c.map(r=>t.jsxs(n,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(p,{children:r}),t.jsx(o,{variant:r})]},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
