import{j as e,a as D,F as w}from"./jsx-runtime-390e5fc8.js";import{r as N}from"./index-570b25c1.js";import{M as P,A as T}from"./index-f767eb93.js";import{C as E}from"./Collapse-a679af60.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-52ae1682.js";import"./useThemeProps-09701b40.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-cde3b626.js";import"./SvgIcon-33a08535.js";import"./ButtonBase-d82e3f0a.js";import"./emotion-react.browser.esm-7b849601.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./index-338918c6.js";import"./Avatar-ac96a4a5.js";import"./utils-237e8b7d.js";import"./index-8a077077.js";import"./useTheme-a833130b.js";const r=({color:a="default",onDelete:m,...l})=>e(P,{color:a,onDelete:m,...l});try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{color:{defaultValue:{value:"default"},description:"The color of the component. Nondefault colors are only to be used with size `small`.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"'}},size:{defaultValue:null,description:"The size of the component. Size `small` is for statuses and inline counters.",name:"size",required:!1,type:{name:'"small" | "medium"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:`Callback fired when the delete icon is clicked.
If set, the delete icon will be shown.`,name:"onDelete",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const ae={title:"Components/Chip/Chip",component:r,tags:["autodocs"],args:{label:"Chip",size:"medium",color:"default"}},n={render:a=>e(r,{...a}),args:{label:"Chip"}},o={render:a=>{const[m,l]=N.useState(!0);return e(E,{in:m,children:e(r,{...a,onDelete:()=>{l(!1),setTimeout(()=>l(!0),1e3)}})})}},i={render:a=>e(r,{...a,avatar:e(T,{children:"A"})})},s={render:()=>D(w,{children:["Item 1 ",e(r,{color:"success",label:"Approved",size:"small"}),e("br",{}),"Item 2 ",e(r,{color:"info",label:"Info",size:"small"}),e("br",{}),"Item 3 ",e(r,{color:"warning",label:"Pending",size:"small"}),e("br",{}),"Item 4 ",e(r,{color:"error",label:"Declined",size:"small"}),e("br",{}),"Item 5 ",e(r,{color:"secondary",label:"Neutral",size:"small"}),e("br",{})]})},t={render:()=>D("div",{children:["Items ",e(r,{color:"error",label:"5",size:"small"})]})};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,y,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} avatar={<Avatar>A</Avatar>} />
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var g,v,I,z,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(q=(V=t.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"Inline counter styling is achieved by using size `small`. For counters that affix to the corner of an element see `Badge`.",...(A=(x=t.parameters)==null?void 0:x.docs)==null?void 0:A.description}}};const se=["_Chip","_RemovableChip","_Avatar","_Status","_InlineCounter"];export{i as _Avatar,n as _Chip,t as _InlineCounter,o as _RemovableChip,s as _Status,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=Chip.stories-cee171d7.js.map
