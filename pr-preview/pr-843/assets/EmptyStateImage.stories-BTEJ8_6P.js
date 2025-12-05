import{j as t}from"./iframe-DKPLEfLw.js";import{B as d,S as g}from"./index-Dn59n-rN.js";import{T as x}from"./index-B_gHUUTW.js";import{E as o,a as l}from"./EmptyStateImage-DT9ZMtb1.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./preload-helper-Dp1pzeXC.js";import"./Box-CZdlnD3e.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-Bc7_QC4M.js";import"./useTheme-9F3p9Qod.js";import"./styled-Wz6Z4Uga.js";import"./styled-DmVvl1cy.js";import"./isMuiElement-Bob4bJgN.js";import"./Stack-ClwGR_Ch.js";import"./Container-DJ1Q8iJN.js";import"./Typography-BTTsir7-.js";import"./memoTheme-DCtqnaOZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const P={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,s,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,i,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const W=["_EmptyStateImage","_variants"];export{e as _EmptyStateImage,W as __namedExportsOrder,a as _variants,P as default};
