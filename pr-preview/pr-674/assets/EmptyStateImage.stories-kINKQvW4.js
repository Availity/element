import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{B as d,S as g}from"./index-BObrA9Y-.js";import{T as x}from"./index-yTp6TMTk.js";import{E as o,a as l}from"./EmptyStateImage-BFeCvF00.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Box-BAeL439g.js";import"./createTheme-CKCRSfxM.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./generateUtilityClass-Bqc1qv72.js";import"./useTheme-BUEqHFQV.js";import"./extendSxProp-BKaoT_Qt.js";import"./Grid2-CanCOREk.js";import"./useTheme-ChS1Y5Lw.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./styled-C36SNKZX.js";import"./styled-Dbr85gFc.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-YZ7_EcgO.js";import"./Stack-C5Zrd0Q6.js";import"./Container-nY1JXDIQ.js";import"./Typography-Cng4iL4p.js";import"./index-D-S2KyN4.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./memoTheme-DvanvhnP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const J={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,p,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
