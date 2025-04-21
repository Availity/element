import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{B as d,S as g}from"./index-CQspzllj.js";import{T as x}from"./index-DSF7aQ5o.js";import{E as o,a as l}from"./EmptyStateImage-BmxqB6Aq.js";import{S as u}from"./MuiSystemProperties-CtLr4Jcz.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Box-Dv31mJKI.js";import"./identifier-CudAVvBZ.js";import"./generateUtilityClasses-whvyra8-.js";import"./generateUtilityClass-BeVSWKCg.js";import"./useTheme-Ib01SJ3a.js";import"./extendSxProp-BY7TjwKM.js";import"./Grid2-JMPt1-k0.js";import"./useTheme-Cx1wRXKO.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./styled-Dbr83ACF.js";import"./styled-CKuRQFSa.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-Do5o_sjG.js";import"./Stack-qbqOHiMo.js";import"./Container-DVbvSSVb.js";import"./Typography-COSof5sR.js";import"./index-DfraP8LW.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./memoTheme-CpoNRPWX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const K={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},e={render:r=>t.jsx(d,{sx:{backgroundColor:"background.paper",padding:"2rem",width:{xs:"100%",md:"25%"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:t.jsx(o,{...r})})},y=Object.keys(l),a={render:()=>t.jsx(g,{direction:"row",spacing:2,alignItems:"flex-start",flexWrap:"wrap",useFlexGap:!0,children:y.map(r=>t.jsxs(d,{textAlign:"center",sx:{backgroundColor:"background.paper",padding:"3rem"},children:[t.jsx(x,{children:r}),t.jsx(o,{variant:r})]},r))})};var n,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
