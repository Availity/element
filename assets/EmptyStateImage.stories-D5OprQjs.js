import{j as t}from"./iframe-DF1q2aaL.js";import{B as d,S as g}from"./index-DCToeNHS.js";import{T as x}from"./index-Q8RjvuCg.js";import{E as o,a as l}from"./EmptyStateImage-9Slf9cf5.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./preload-helper-Dp1pzeXC.js";import"./Box-CIJZFnEp.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-BQHRv1eX.js";import"./useTheme-C0GFliqz.js";import"./styled-PDED6P24.js";import"./styled-CFEXa4qH.js";import"./isMuiElement-Q-8wUiYz.js";import"./Stack--jn-4dia.js";import"./Container-CTcWCZH6.js";import"./Typography-cWmdXt40.js";import"./memoTheme-BD6H9365.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const P={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,s,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
