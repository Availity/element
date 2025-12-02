import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as d,S as g}from"./index-DWvMPRyT.js";import{T as x}from"./index-7dkkVNWZ.js";import{E as o,a as l}from"./EmptyStateImage-DBcFC85w.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./index-BSuoOqEd.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Box-BAprLmuU.js";import"./identifier-DhnHujDJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-C_c7PR3o.js";import"./extendSxProp-plByhdXY.js";import"./Grid-BrQtrDmH.js";import"./useTheme-DG5qVMsu.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./styled-BN1MHGNr.js";import"./styled-9znMky1q.js";import"./isMuiElement-CsRUsG_W.js";import"./useThemeProps-DxTj-Mj7.js";import"./Stack-C-7_RWLD.js";import"./Container-BRT0GL3j.js";import"./Typography-CHtEfMke.js";import"./index-DtRw77fL.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./memoTheme-BwIkkReu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const J={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,p,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
