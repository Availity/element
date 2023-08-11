import{j as e,a as w,F as D}from"./jsx-runtime-91a467a5.js";import{r as N}from"./index-8db94870.js";import{M as P}from"./Chip-ad77e750.js";import{C as T}from"./Collapse-e3547aef.js";import{A as E}from"./Avatar-9f76a182.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-a84420af.js";import"./useThemeProps-2498ecc2.js";import"./extends-bab83b91.js";import"./createSvgIcon-6dc812c4.js";import"./SvgIcon-aa084682.js";import"./ButtonBase-3eb7f77d.js";import"./emotion-react.browser.esm-8a1b3cc7.js";import"./inheritsLoose-8349f581.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./utils-50b22590.js";import"./index-8ce4a492.js";import"./useTheme-fc3bf0b8.js";const r=({color:a="default",onDelete:l,...n})=>e(P,{color:a,onClick:l,onDelete:l,...n});try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{color:{defaultValue:{value:"default"},description:"The color of the component. Nondefault colors are only to be used with size `small`.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"'}},size:{defaultValue:null,description:"The size of the component. Size `small` is for statuses and inline counters.",name:"size",required:!1,type:{name:'"small" | "medium"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:`Callback fired when the delete icon is clicked.
If set, the delete icon will be shown.`,name:"onDelete",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const re={title:"Components/Chip/Chip",component:r,tags:["autodocs"],args:{label:"Chip",size:"medium",color:"default"}},o={render:a=>e(r,{...a}),args:{label:"Chip"}},i={render:a=>{const[l,n]=N.useState(!0);return e(T,{in:l,children:e(r,{...a,onDelete:()=>{n(!1),setTimeout(()=>n(!0),1e3)}})})}},m={render:a=>e(r,{...a,avatar:e(E,{children:"A"})})},s={render:()=>w(D,{children:["Item 1 ",e(r,{color:"success",label:"Approved",size:"small"}),e("br",{}),"Item 2 ",e(r,{color:"info",label:"Info",size:"small"}),e("br",{}),"Item 3 ",e(r,{color:"warning",label:"Pending",size:"small"}),e("br",{}),"Item 4 ",e(r,{color:"error",label:"Declined",size:"small"}),e("br",{}),"Item 5 ",e(r,{color:"secondary",label:"Neutral",size:"small"}),e("br",{})]})},t={render:()=>w("div",{children:["Items ",e(r,{color:"error",label:"5",size:"small"})]})};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,f,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: ChipProps) => {
    const [visible, setVisible] = useState(true);
    const onDelete = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Chip {...args} onDelete={onDelete} />
      </Collapse>;
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,C,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} avatar={<Avatar>A</Avatar>} />
}`,...(y=(C=m.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var g,v,I,z,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <>
      Item 1 <Chip color="success" label="Approved" size="small" />
      <br />
      Item 2 <Chip color="info" label="Info" size="small" />
      <br />
      Item 3 <Chip color="warning" label="Pending" size="small" />
      <br />
      Item 4 <Chip color="error" label="Declined" size="small" />
      <br />
      Item 5 <Chip color="secondary" label="Neutral" size="small" />
      <br />
    </>
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source},description:{story:"Status styling is achieved by using size `small`",...(_=(z=s.parameters)==null?void 0:z.docs)==null?void 0:_.description}}};var S,V,q,x,A;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div>
      Items <Chip color="error" label="5" size="small" />
    </div>
}`,...(q=(V=t.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"Inline counter styling is achieved by using size `small`. For counters that affix to the corner of an element see `Badge`.",...(A=(x=t.parameters)==null?void 0:x.docs)==null?void 0:A.description}}};const ae=["_Chip","_RemovableChip","_Avatar","_Status","_InlineCounter"];export{m as _Avatar,o as _Chip,t as _InlineCounter,i as _RemovableChip,s as _Status,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=Chip.stories-6f8782d2.js.map
