import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{B as d,S as g}from"./index-Cyp_3NIz.js";import{T as x}from"./index-BtPDELIe.js";import{E as o,a as l}from"./EmptyStateImage-CAffIHD7.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Box-DWnb8VZB.js";import"./identifier-Dtqimryx.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./generateUtilityClass-CVWqFxsA.js";import"./useTheme-C2CrmYKc.js";import"./extendSxProp-B5AgUjQT.js";import"./Grid2-y9MPRr2u.js";import"./useTheme-DUkCvbx_.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./styled-vBjI3IQc.js";import"./styled-CF1hcdwO.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-BIK-1DKm.js";import"./Stack-BcsM4Vc0.js";import"./Container-Cqq8qXXg.js";import"./Typography-CvSvtD2a.js";import"./index-f0Aa_BgU.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./memoTheme-D-rVhYRp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const J={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,p,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
