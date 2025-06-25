import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{B as d,S as g}from"./index-DmY_4rvh.js";import{T as x}from"./index-ClMemn8c.js";import{E as o,a as l}from"./EmptyStateImage-COLAH2by.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Box-BU2WakPM.js";import"./identifier-CHUoN9pF.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./generateUtilityClass-GxznSYtt.js";import"./useTheme-CVByJb8R.js";import"./extendSxProp-BZnzVrgj.js";import"./Grid2-BbvvmKhh.js";import"./useTheme-BGaXYmwe.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./styled-CsKbBpC_.js";import"./styled-FZfCzBz5.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-BNBLMFIr.js";import"./Stack-2ILcP_1D.js";import"./Container-DvcsWH8C.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./memoTheme-BLrvrRyo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const K={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const M=["_EmptyStateImage","_variants"];export{e as _EmptyStateImage,M as __namedExportsOrder,a as _variants,K as default};
