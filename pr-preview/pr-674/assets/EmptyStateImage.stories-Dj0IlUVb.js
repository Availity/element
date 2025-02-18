import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{B as d,S as g}from"./index-Dnj5y9bu.js";import{T as x}from"./index-Bssefeeu.js";import{E as o,a as l}from"./EmptyStateImage-CYGRAybr.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Box-DR5TX31P.js";import"./identifier-CenlGZaM.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./generateUtilityClass-DELP8s2G.js";import"./useTheme-DwYC2ms6.js";import"./extendSxProp-w61GJfY-.js";import"./Grid2-CHb9J3Cd.js";import"./useTheme-Cf-RAc4Y.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./styled-CIC6PLSI.js";import"./styled-wZqJTO_n.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-BAwiOWAz.js";import"./Stack-BPYMGdgv.js";import"./Container-7wpQgvnn.js";import"./Typography-Dw3TlP36.js";import"./index-BKNdG2lN.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./memoTheme-CIpOTVoB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const J={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,p,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var m,i,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const K=["_EmptyStateImage","_variants"];export{e as _EmptyStateImage,K as __namedExportsOrder,a as _variants,J as default};
