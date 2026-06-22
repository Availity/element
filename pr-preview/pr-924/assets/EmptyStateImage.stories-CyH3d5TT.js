import{j as t}from"./iframe-B3KH45W1.js";import{B as n}from"./Box-C881z6QE.js";import{S as s}from"./Stack-tWcBAM6L.js";import{T as p}from"./Typography-k07kEcGa.js";import{E as o,a as m}from"./EmptyStateImage-CyBxTbbo.js";import{S as i}from"./MuiSystemProperties-CtLr4Jcz.js";import"./preload-helper-Dab_6GC_.js";import"./Box-B9pOgzbW.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Stack-D4A7CmlM.js";import"./styled-B89GBRvi.js";import"./styled-CG3DpTjV.js";import"./Typography-D3qZBRmm.js";import"./memoTheme-DWwRHojM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const _={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:i}}}},e={render:r=>t.jsx(n,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},c=Object.keys(m),a={render:()=>t.jsx(s,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:c.map(r=>t.jsxs(n,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(p,{children:r}),t.jsx(o,{variant:r})]},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const w=["_EmptyStateImage","_variants"];export{e as _EmptyStateImage,w as __namedExportsOrder,a as _variants,_ as default};
