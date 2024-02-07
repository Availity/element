import{j as a,a as S}from"./jsx-runtime-390e5fc8.js";import{E as o}from"./EmptyStateImage-ca09a25e.js";import{S as u}from"./MuiSystemProperties-d2f46158.js";import{S as x,B as m}from"./index-2e56001d.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-523cb007.js";import"./clsx-b831246b.js";import"./createTheme-3fee607a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./Box-df8a6414.js";import"./extendSxProp-b1abb964.js";import"./Container-9c6f17e6.js";import"./styled-5c6c15e1.js";import"./Grid2-1c150904.js";import"./isMuiElement-6907f060.js";import"./Stack-ded40119.js";const D={title:"Components/EmptyState/EmptyStateImage",component:o,tags:["autodocs"],args:{variant:"NoSearchFound"},parameters:{docs:{controls:{exclude:u}}}},t={render:s=>a(o,{...s})},r={render:()=>a(x,{direction:"row",spacing:2,flexWrap:"wrap",children:["PageNotFound","ContentLoading","Error","NoData","NoSearchFound"].map(e=>S(m,{textAlign:"center",children:[a(m,{children:e}),a(o,{variant:e})]},e))})};var n,p,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: EmptyStateImageProps) => <EmptyStateImage {...args} />
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const variants: EmptyStateImageProps['variant'][] = ['PageNotFound', 'ContentLoading', 'Error', 'NoData', 'NoSearchFound'];
    return <Stack direction="row" spacing={2} flexWrap="wrap">
        {variants.map(variant => <Box textAlign="center" key={variant}>
            <Box>{variant}</Box>
            <EmptyStateImage variant={variant} />
          </Box>)}
      </Stack>;
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const W=["_EmptyStateImage","_variants"];export{t as _EmptyStateImage,W as __namedExportsOrder,r as _variants,D as default};
//# sourceMappingURL=EmptyStateImage.stories-6ec2b8c2.js.map
