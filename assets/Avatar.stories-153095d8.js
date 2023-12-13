import{j as s}from"./jsx-runtime-91a467a5.js";import{t}from"./index-bd37c415.js";import{A as S}from"./Avatar-d80d7308.js";import{H as x}from"./index-8291511e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-34296409.js";import"./useThemeProps-71202f59.js";import"./extends-bab83b91.js";import"./createSvgIcon-9aaaaed1.js";import"./SvgIcon-c690cbc0.js";import"./faMagnifyingGlass-d219cdaa.js";import"./faCircleArrowRight-d415119f.js";const l={xs:{width:18,height:18,fontSize:t.fontSizesCaption},s:{width:24,height:24,fontSize:t.fontSizesCaption},m:{width:40,height:40,fontSize:t.fontSizesH5,fontWeight:t.fontWeightsBold},l:{width:80,height:80,fontSize:t.fontSizesH3,fontWeight:t.fontWeightsBold},xl:{width:140,height:140,fontSize:t.fontSizesH1,fontWeight:t.fontWeightsBold}},z=(e,r)=>e.split(" ").length>1&&r!=="xs"?`${e.split(" ")[0][0]}${e.split(" ")[1][0]}`:e.charAt(0),_=(e,r)=>typeof e=="string"?z(e,r).toUpperCase():e,a=({children:e,size:r="xl",sx:y,...A})=>s(S,{...A,variant:"circular",sx:{...y,...l[r]||l.xl},children:_(e,r)});try{a.displayName="Avatar",a.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xl"},description:"The size of the component.",name:"size",required:!1,type:{name:'"s" | "m" | "xs" | "l" | "xl"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AvatarClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"Used to render icon or text elements inside the Avatar if `src` is not set.\nThis can be an element, or just a string.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},alt:{defaultValue:null,description:"Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element.",name:"alt",required:!1,type:{name:"string"}},imgProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.\nIt can be used to listen for the loading error event.",name:"imgProps",required:!1,type:{name:"ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme>; }"}},sizes:{defaultValue:null,description:"The `sizes` attribute for the `img` element.",name:"sizes",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The `src` attribute for the `img` element.",name:"src",required:!1,type:{name:"string"}},srcSet:{defaultValue:null,description:"The `srcSet` attribute for the `img` element.\nUse this attribute for responsive image display.",name:"srcSet",required:!1,type:{name:"string"}}}}}catch{}const E={title:"Components/Avatar/Avatar",component:a,argTypes:{size:{options:["xs","s","m","l","xl"]}},tags:["autodocs"]},n={render:e=>s(a,{...e}),args:{children:"John Doe"}},i={render:e=>s(a,{...e}),args:{src:"https://avatars.githubusercontent.com/u/329985?s=100"}},o={render:e=>s(a,{...e,children:s(x,{})})};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    children: 'John Doe'
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,u,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/329985?s=100'
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,g,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <Avatar {...args}>
      <HomeIcon />
    </Avatar>
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const L=["_Avatar","_ImageAvatar","_IconAvatar"];export{n as _Avatar,o as _IconAvatar,i as _ImageAvatar,L as __namedExportsOrder,E as default};
//# sourceMappingURL=Avatar.stories-153095d8.js.map