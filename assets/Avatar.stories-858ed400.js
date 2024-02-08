import{a as s}from"./jsx-runtime-a3bcee63.js";import{t}from"./index-676fb896.js";import{M as S}from"./Avatar-a58ed318.js";import{f as x}from"./index-53288845.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./generateUtilityClasses-b58f947a.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";const l={xs:{width:18,height:18,fontSize:t.fontSizesCaption},s:{width:24,height:24,fontSize:t.fontSizesCaption},m:{width:40,height:40,fontSize:t.fontSizesH5,fontWeight:t.fontWeightsBold},l:{width:80,height:80,fontSize:t.fontSizesH3,fontWeight:t.fontWeightsBold},xl:{width:140,height:140,fontSize:t.fontSizesH1,fontWeight:t.fontWeightsBold}},z=(e,r)=>e.split(" ").length>1&&r!=="xs"?`${e.split(" ")[0][0]}${e.split(" ")[1][0]}`:e.charAt(0),_=(e,r)=>typeof e=="string"?z(e,r).toUpperCase():e,a=({children:e,size:r="xl",sx:y,...A})=>s(S,{...A,variant:"circular",sx:{...y,...l[r]||l.xl},children:_(e,r)});try{a.displayName="Avatar",a.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xl"},description:"The size of the component.",name:"size",required:!1,type:{name:'"m" | "s" | "xs" | "l" | "xl"'}},children:{defaultValue:null,description:"Used to render icon or text elements inside the Avatar if `src` is not set.\nThis can be an element, or just a string.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AvatarClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},alt:{defaultValue:null,description:"Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element.",name:"alt",required:!1,type:{name:"string"}},sizes:{defaultValue:null,description:"The `sizes` attribute for the `img` element.",name:"sizes",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The `src` attribute for the `img` element.",name:"src",required:!1,type:{name:"string"}},srcSet:{defaultValue:null,description:"The `srcSet` attribute for the `img` element.\nUse this attribute for responsive image display.",name:"srcSet",required:!1,type:{name:"string"}},imgProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.\nIt can be used to listen for the loading error event.",name:"imgProps",required:!1,type:{name:"ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme>; }"}}}}}catch{}const k={title:"Components/Avatar/Avatar",component:a,argTypes:{size:{options:["xs","s","m","l","xl"]}},tags:["autodocs"]},n={render:e=>s(a,{...e}),args:{children:"John Doe"}},i={render:e=>s(a,{...e}),args:{src:"https://avatars.githubusercontent.com/u/329985?s=100",alt:"Orange circle with interlocking AV logo"}},o={render:e=>s(a,{...e,children:s(x,{})})};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    children: 'John Doe'
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/329985?s=100',
    alt: 'Orange circle with interlocking AV logo'
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args}>
      <HomeIcon />
    </Avatar>
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const B=["_Avatar","_ImageAvatar","_IconAvatar"];export{n as _Avatar,o as _IconAvatar,i as _ImageAvatar,B as __namedExportsOrder,k as default};
//# sourceMappingURL=Avatar.stories-858ed400.js.map
