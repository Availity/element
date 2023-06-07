import{j as e,a as n,F as T}from"./jsx-runtime-91a467a5.js";import{r as D}from"./index-8db94870.js";import{M as k}from"./Chip-0b8ed958.js";import{C as E}from"./Collapse-3c56dfef.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-bba98ac3.js";import"./useThemeProps-b0aa0aaa.js";import"./extends-bab83b91.js";import"./createSvgIcon-0bc185d1.js";import"./SvgIcon-50e8eca1.js";import"./ButtonBase-6445d2f8.js";import"./emotion-react.browser.esm-982bbbe9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./utils-32789d4c.js";import"./index-8ce4a492.js";import"./useTheme-5a2b1f44.js";const l=({color:a="default",...o})=>e(k,{color:a,...o});try{l.displayName="Chip",l.__docgenInfo={description:"",displayName:"Chip",props:{color:{defaultValue:{value:"default"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component. Size `small` is for statuses and inline counters.\nThe size of the component.",name:"size",required:!1,type:{name:'"small" | "medium"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'filled'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"filled" | "outlined"'}},icon:{defaultValue:null,description:"Icon element.",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},clickable:{defaultValue:null,description:`If \`true\`, the chip will appear clickable, and will raise when pressed,
even if the onClick prop is not defined.
If \`false\`, the chip will not appear clickable, even if onClick prop is defined.
This can be used, for example,
along with the component prop to indicate an anchor Chip is clickable.
Note: this controls the UI and does not affect the onClick event.`,name:"clickable",required:!1,type:{name:"boolean"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:`Callback fired when the delete icon is clicked.
If set, the delete icon will be shown.`,name:"onDelete",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const $={title:"Components/Chip/Chip",component:l,tags:["autodocs"]},i={render:a=>e(l,{...a}),args:{label:"Chip"}},s={render:()=>{const[a,o]=D.useState(!0);return e(E,{in:a,children:e(l,{onDelete:()=>{o(!1),setTimeout(()=>o(!0),1e3)},label:"Chip"})})}},r={render:()=>n(T,{children:["Item 1 ",e(l,{color:"success",label:"Approved",size:"small"}),e("br",{}),"Item 2 ",e(l,{color:"info",label:"Info",size:"small"}),e("br",{}),"Item 3 ",e(l,{color:"warning",label:"Pending",size:"small"}),e("br",{}),"Item 4 ",e(l,{color:"error",label:"Declined",size:"small"}),e("br",{}),"Item 5 ",e(l,{color:"secondary",label:"Neutral",size:"small"}),e("br",{})]})},t={render:()=>n("div",{children:["Items ",e(l,{color:"error",label:"5",size:"small"})]})},c={render:()=>n(T,{children:[n("h1",{children:["H1 ",e(l,{color:"info",label:"Info"})]}),n("h2",{children:["H2 ",e(l,{color:"info",label:"Info"})]}),n("div",{children:["Body ",e(l,{color:"info",label:"Info"})]}),n("small",{children:["Small ",e(l,{color:"info",label:"Info"})]})]})};var d,p,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip'
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    const onDelete = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Chip onDelete={onDelete} label="Chip" />
      </Collapse>;
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,y,C,v,I;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source},description:{story:"Status styling is achieved by using size `small`",...(I=(v=r.parameters)==null?void 0:v.docs)==null?void 0:I.description}}};var g,S,z,V,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div>
      Items <Chip color="error" label="5" size="small" />
    </div>
}`,...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:"Inline counter styling is achieved by using size `small`. For counters that affix to the corner of an element see `Badge`.",...(_=(V=t.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var w,q,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <>
      <h1>
        H1 <Chip color="info" label="Info" />
      </h1>
      <h2>
        H2 <Chip color="info" label="Info" />
      </h2>
      <div>
        Body <Chip color="info" label="Info" />
      </div>
      <small>
        Small <Chip color="info" label="Info" />
      </small>
    </>
}`,...(x=(q=c.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};const ee=["_Chip","_RemovableChip","_Status","_InlineCounter","_RelativeSizes"];export{i as _Chip,t as _InlineCounter,c as _RelativeSizes,s as _RemovableChip,r as _Status,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Chip.stories-2fbd2426.js.map
