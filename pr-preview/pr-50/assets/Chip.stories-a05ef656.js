import{j as r,a as c,F as K}from"./jsx-runtime-91a467a5.js";import{r as y}from"./index-8db94870.js";import{M as ee}from"./Chip-0b8ed958.js";import{C as re}from"./Collapse-3c56dfef.js";import{a as ae,g as te,s as z,c as oe,b as se}from"./styled-bba98ac3.js";import{e as le}from"./useThemeProps-b0aa0aaa.js";import{c as ne}from"./createSvgIcon-0bc185d1.js";import"./_commonjsHelpers-042e6b4d.js";import"./ButtonBase-6445d2f8.js";import"./emotion-react.browser.esm-982bbbe9.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./utils-32789d4c.js";import"./index-8ce4a492.js";import"./useTheme-5a2b1f44.js";import"./SvgIcon-50e8eca1.js";const ie=ne(r("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ce(e){return ae("MuiAvatar",e)}te("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const de=e=>{const{classes:a,variant:t,colorDefault:s}=e;return se({root:["root",t,s&&"colorDefault"],img:["img"],fallback:["fallback"]},ce,a)},pe=z("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(({theme:e,ownerState:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",...a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},...a.variant==="square"&&{borderRadius:0},...a.colorDefault&&{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}}})),ue=z("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),me=z(ie,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function fe({crossOrigin:e,referrerPolicy:a,src:t,srcSet:s}){const[n,i]=y.useState(!1);return y.useEffect(()=>{if(!t&&!s)return;i(!1);let d=!0;const l=new Image;return l.onload=()=>{d&&i("loaded")},l.onerror=()=>{d&&i("error")},l.crossOrigin=e,l.referrerPolicy=a,l.src=t,s&&(l.srcset=s),()=>{d=!1}},[e,a,t,s]),n}const he=y.forwardRef(function(a,t){const s=le({props:a,name:"MuiAvatar"}),{alt:n,children:i,className:d,component:l="div",imgProps:A,sizes:Q,src:C,srcSet:I,variant:W="circular",...Y}=s;let p=null;const Z=fe({...A,src:C,srcSet:I}),_=C||I,w=_&&Z!=="error",f={...s,colorDefault:!w,component:l,variant:W},S=de(f);return w?p=r(ue,{alt:n,src:C,srcSet:I,sizes:Q,ownerState:f,className:S.img,...A}):i!=null?p=i:_&&n?p=n[0]:p=r(me,{ownerState:f,className:S.fallback}),r(pe,{as:l,ownerState:f,className:oe(S.root,d),ref:t,...Y,children:p})}),ve=he,o=({color:e="default",onDelete:a,...t})=>r(ee,{color:e,onClick:a,onDelete:a,...t});try{o.displayName="Chip",o.__docgenInfo={description:"",displayName:"Chip",props:{color:{defaultValue:{value:"default"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"'}},size:{defaultValue:null,description:"The size of the component. Size `small` is for statuses and inline counters.",name:"size",required:!1,type:{name:'"small" | "medium"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'filled'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"filled" | "outlined"'}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:`Callback fired when the delete icon is clicked.
If set, the delete icon will be shown.`,name:"onDelete",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const Me={title:"Components/Chip/Chip",component:o,tags:["autodocs"],args:{label:"Chip",size:"medium",color:"default"}},h={render:e=>r(o,{...e}),args:{label:"Chip"}},v={render:e=>{const[a,t]=y.useState(!0);return r(re,{in:a,children:r(o,{...e,onDelete:()=>{t(!1),setTimeout(()=>t(!0),1e3)}})})}},g={render:e=>r(o,{...e,avatar:r(ve,{children:"A"})})},u={render:()=>c(K,{children:["Item 1 ",r(o,{color:"success",label:"Approved",size:"small"}),r("br",{}),"Item 2 ",r(o,{color:"info",label:"Info",size:"small"}),r("br",{}),"Item 3 ",r(o,{color:"warning",label:"Pending",size:"small"}),r("br",{}),"Item 4 ",r(o,{color:"error",label:"Declined",size:"small"}),r("br",{}),"Item 5 ",r(o,{color:"secondary",label:"Neutral",size:"small"}),r("br",{})]})},m={render:()=>c("div",{children:["Items ",r(o,{color:"error",label:"5",size:"small"})]})},b={render:()=>c(K,{children:[c("h1",{children:["H1 ",r(o,{color:"info",label:"Info"})]}),c("h2",{children:["H2 ",r(o,{color:"info",label:"Info"})]}),c("div",{children:["Body ",r(o,{color:"info",label:"Info"})]})]})};var x,D,R;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip'
  }
}`,...(R=(D=h.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,q,k;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(q=v.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var P,T,N;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} avatar={<Avatar>A</Avatar>} />
}`,...(N=(T=g.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var M,F,E,H,j;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(F=u.parameters)==null?void 0:F.docs)==null?void 0:E.source},description:{story:"Status styling is achieved by using size `small`",...(j=(H=u.parameters)==null?void 0:H.docs)==null?void 0:j.description}}};var B,U,L,O,J;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div>
      Items <Chip color="error" label="5" size="small" />
    </div>
}`,...(L=(U=m.parameters)==null?void 0:U.docs)==null?void 0:L.source},description:{story:"Inline counter styling is achieved by using size `small`. For counters that affix to the corner of an element see `Badge`.",...(J=(O=m.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};var X,$,G;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    </>
}`,...(G=($=b.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const Fe=["_Chip","_RemovableChip","_Avatar","_Status","_InlineCounter","_Typography"];export{g as _Avatar,h as _Chip,m as _InlineCounter,v as _RemovableChip,u as _Status,b as _Typography,Fe as __namedExportsOrder,Me as default};
//# sourceMappingURL=Chip.stories-a05ef656.js.map
