import{e as I,r as C,j as r}from"./iframe-DKPLEfLw.js";import{d as E}from"./index-zNtTlnyx.js";import{U as O,o as U}from"./index-WRElMkUo.js";import{A as L}from"./Avatar-KQYKQ4AH.js";import{G as s}from"./Grid-Bc7_QC4M.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D0RdvGWv.js";import"./___vite-browser-external_commonjs-proxy-C7XsORAh.js";import"./index-BZbS_W-l.js";import"./_toKey-CghGTOo7.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-FjAnPN_Y.js";import"./memoTheme-DCtqnaOZ.js";import"./styled-DmVvl1cy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSvgIcon-vtaDbQWp.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BBFL5x5N.js";import"./useTheme-9F3p9Qod.js";import"./styled-Wz6Z4Uga.js";import"./isMuiElement-Bob4bJgN.js";const m={xs:{width:18,height:18,fontSize:"caption.fontSize"},s:{width:24,height:24,fontSize:"caption.fontSize"},m:{width:40,height:40,fontSize:"h5.fontSize",fontWeight:"fontWeightBold"},l:{width:80,height:80,fontSize:"h3.fontSize",fontWeight:"fontWeightBold"},xl:{width:140,height:140,fontSize:"h1.fontSize",fontWeight:"fontWeightBold"}},M=(e,a)=>e.split(" ").length>1&&a!=="xs"?`${e.split(" ")[0][0]}${e.split(" ")[1][0]}`:e.charAt(0),W=(e,a)=>typeof e=="string"?M(e,a).toUpperCase():e,t=({children:e,size:a="xl",src:c,sx:V,...b})=>{const[q,p]=I.useState();return C.useEffect(()=>{(async()=>{if(c)p(c);else{const w=(await E.getApplication("AVATAR")).data.settings[0].avatar;p(w)}})()},[c]),r.jsx(L,{...b,variant:"circular",src:e?void 0:q,sx:{...V,...m[a]||m.xl},children:e?W(e,a):r.jsx(O,{})})};try{t.displayName="Avatar",t.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xl"},description:"The size of the component.",name:"size",required:!1,type:{name:'"s" | "m" | "xs" | "l" | "xl"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AvatarClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"Used to render icon or text elements inside the Avatar if `src` is not set.\nThis can be an element, or just a string.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<AvatarSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", AvatarRootSlotPropsOverrides, AvatarOwnProps>; img?: SlotProps<"img", AvatarImgSlotPropsOverrides, AvatarOwnProps>; fallback?: SlotProps<...>; }'}},src:{defaultValue:null,description:"The `src` attribute for the `img` element.",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element.",name:"alt",required:!1,type:{name:"string"}},sizes:{defaultValue:null,description:"The `sizes` attribute for the `img` element.",name:"sizes",required:!1,type:{name:"string"}},imgProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.\nIt can be used to listen for the loading error event.\n@deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"imgProps",required:!1,type:{name:"ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme>; }"}},srcSet:{defaultValue:null,description:"The `srcSet` attribute for the `img` element.\nUse this attribute for responsive image display.",name:"srcSet",required:!1,type:{name:"string"}}}}}catch{}const ue={title:"Components/Avatar/Avatar",component:t,argTypes:{size:{options:["xs","s","m","l","xl"]}},tags:["autodocs"]},i={render:e=>r.jsx(t,{...e})},o={render:e=>r.jsx(t,{...e}),args:{children:"John Doe"}},n={render:e=>r.jsx(t,{...e}),args:{src:"https://avatars.githubusercontent.com/u/329985?s=100",alt:"Orange circle with interlocking AV logo"}},l={render:e=>r.jsx(t,{...e,children:r.jsx(U,{})})},d={render:e=>r.jsxs(s,{container:!0,spacing:1,children:[r.jsx(s,{size:{xs:2},children:"XSmall"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"xs"})}),r.jsx(s,{size:{xs:2},children:"Small"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"s"})}),r.jsx(s,{size:{xs:2},children:"Medium"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"m"})}),r.jsx(s,{size:{xs:2},children:"Large"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"l"})}),r.jsx(s,{size:{xs:2},children:"XLarge"}),r.jsx(s,{size:{xs:10},children:r.jsx(t,{...e,size:"xl"})})]}),args:{children:"John Doe"},parameters:{controls:{include:"children"}}};var u,g,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    children: 'John Doe'
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var A,z,S;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/329985?s=100',
    alt: 'Orange circle with interlocking AV logo'
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var y,j,G;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args}>
      <HomeIcon />
    </Avatar>
}`,...(G=(j=l.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var P,_,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const ge=["_Avatar","_TextAvatar","_CustomSrcAvatar","_IconAvatar","_Sizes"];export{i as _Avatar,n as _CustomSrcAvatar,l as _IconAvatar,d as _Sizes,o as _TextAvatar,ge as __namedExportsOrder,ue as default};
