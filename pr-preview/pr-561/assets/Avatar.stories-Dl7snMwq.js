import{j as r}from"./jsx-runtime-CcL-W3nW.js";import{e as w,r as E}from"./index-DcWiA9TO.js";import{d as L}from"./index-C5soOJ6z.js";import{U as M,m as C}from"./index--IoBtPgS.js";import{A as H}from"./Avatar-BK8S1iy9.js";import{G as s}from"./Grid2-CanCOREk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-uZUcOW5W.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-BS-p1eoC.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./createSvgIcon-IUeEQzFc.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./styled-C36SNKZX.js";import"./extendSxProp-BKaoT_Qt.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-YZ7_EcgO.js";const c={xs:{width:18,height:18,fontSize:"caption.fontSize"},s:{width:24,height:24,fontSize:"caption.fontSize"},m:{width:40,height:40,fontSize:"h5.fontSize",fontWeight:"fontWeightBold"},l:{width:80,height:80,fontSize:"h3.fontSize",fontWeight:"fontWeightBold"},xl:{width:140,height:140,fontSize:"h1.fontSize",fontWeight:"fontWeightBold"}},U=(e,a)=>e.split(" ").length>1&&a!=="xs"?`${e.split(" ")[0][0]}${e.split(" ")[1][0]}`:e.charAt(0),W=(e,a)=>typeof e=="string"?U(e,a).toUpperCase():e,t=({children:e,size:a="xl",src:m,sx:V,...b})=>{const[q,p]=w.useState();return E.useEffect(()=>{(async()=>{if(m)p(m);else{const I=(await L.getApplication("AVATAR")).data.settings[0].avatar;p(I)}})()},[m]),r.jsx(H,{...b,variant:"circular",src:e?void 0:q,sx:{...V,...c[a]||c.xl},children:e?W(e,a):r.jsx(M,{})})};try{t.displayName="Avatar",t.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xl"},description:"The size of the component.",name:"size",required:!1,type:{name:'"m" | "s" | "xs" | "l" | "xl"'}},children:{defaultValue:null,description:"Used to render icon or text elements inside the Avatar if `src` is not set.\nThis can be an element, or just a string.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AvatarClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<AvatarSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ img?: SlotProps<ElementType<ImgHTMLAttributes<HTMLImageElement>, keyof IntrinsicElements>, {}, AvatarOwnProps>; }"}},src:{defaultValue:null,description:"The `src` attribute for the `img` element.",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element.",name:"alt",required:!1,type:{name:"string"}},sizes:{defaultValue:null,description:"The `sizes` attribute for the `img` element.",name:"sizes",required:!1,type:{name:"string"}},srcSet:{defaultValue:null,description:"The `srcSet` attribute for the `img` element.\nUse this attribute for responsive image display.",name:"srcSet",required:!1,type:{name:"string"}},imgProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.\nIt can be used to listen for the loading error event.\n@deprecated Use `slotProps.img` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"imgProps",required:!1,type:{name:"ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme>; }"}}}}}catch{}const ze={title:"Components/Avatar/Avatar",component:t,argTypes:{size:{options:["xs","s","m","l","xl"]}},tags:["autodocs"]},i={render:e=>r.jsx(t,{...e})},n={render:e=>r.jsx(t,{...e}),args:{children:"John Doe"}},o={render:e=>r.jsx(t,{...e}),args:{src:"https://avatars.githubusercontent.com/u/329985?s=100",alt:"Orange circle with interlocking AV logo"}},l={render:e=>r.jsx(t,{...e,children:r.jsx(C,{})})},d={render:e=>r.jsxs(s,{container:!0,spacing:1,children:[r.jsx(s,{size:{xs:2},children:"XSmall"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"xs"})}),r.jsx(s,{size:{xs:2},children:"Small"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"s"})}),r.jsx(s,{size:{xs:2},children:"Medium"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"m"})}),r.jsx(s,{size:{xs:2},children:"Large"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"l"})}),r.jsx(s,{size:{xs:2},children:"XLarge"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"xl"})})]}),args:{children:"John Doe"},parameters:{controls:{include:"children"}}};var u,g,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    children: 'John Doe'
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,A,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/329985?s=100',
    alt: 'Orange circle with interlocking AV logo'
  }
}`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var y,j,G;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args}>
      <HomeIcon />
    </Avatar>
}`,...(G=(j=l.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var T,_,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Grid container spacing={1}>
      <Grid size={{
      xs: 2
    }}>XSmall</Grid>
      <Grid size={{
      xs: 10
    }}>
        <Avatar {...args} size="xs" />
      </Grid>
      <Grid size={{
      xs: 2
    }}>Small</Grid>
      <Grid size={{
      xs: 10
    }}>
        <Avatar {...args} size="s" />
      </Grid>
      <Grid size={{
      xs: 2
    }}>Medium</Grid>
      <Grid size={{
      xs: 10
    }}>
        <Avatar {...args} size="m" />
      </Grid>
      <Grid size={{
      xs: 2
    }}>Large</Grid>
      <Grid size={{
      xs: 10
    }}>
        <Avatar {...args} size="l" />
      </Grid>
      <Grid size={{
      xs: 2
    }}>XLarge</Grid>
      <Grid size={{
      xs: 10
    }}>
        <Avatar {...args} size="xl" />
      </Grid>
    </Grid>,
  args: {
    children: 'John Doe'
  },
  parameters: {
    controls: {
      include: 'children'
    }
  }
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const Ae=["_Avatar","_TextAvatar","_CustomSrcAvatar","_IconAvatar","_Sizes"];export{i as _Avatar,o as _CustomSrcAvatar,l as _IconAvatar,d as _Sizes,n as _TextAvatar,Ae as __namedExportsOrder,ze as default};
