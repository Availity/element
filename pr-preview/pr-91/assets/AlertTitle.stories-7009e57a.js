import{j as s,a as T}from"./jsx-runtime-91a467a5.js";import{r as A}from"./index-8db94870.js";import{A as h}from"./Alert-7083a594.js";import{b as x,g as _,s as v,c as b,a as S}from"./styled-657e2aa7.js";import{c as V}from"./useThemeProps-ad7d4b8c.js";import{T as w}from"./Typography-b1d35567.js";import{C as M}from"./Collapse-c4eb4a62.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-93ed4815.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-c3c5be0b.js";import"./createSvgIcon-fedf70c8.js";import"./Close-3accadea.js";import"./Paper-8c39f6b3.js";import"./IconButton-86149d8f.js";import"./ButtonBase-920b2988.js";import"./emotion-react.browser.esm-a6af08ad.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./extendSxProp-1ec1a8c1.js";import"./utils-d62d1ea6.js";import"./index-8ce4a492.js";import"./useTheme-92c76a56.js";function R(e){return x("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const q=e=>{const{classes:t}=e;return S({root:["root"]},R,t)},N=v(w,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),U=A.forwardRef(function(t,r){const n=V({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=q(a);return s(N,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:b(C.root,y),...g})}),j=U,o=({children:e,...t})=>s(j,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ne={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>T(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=A.useState(!0);return s(M,{in:t,children:T(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Alert severity="info" onClose={onClose}>
          <AlertTitle {...args} />
          This text is inside the Alert
        </Alert>
      </Collapse>;
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ae=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,ae as __namedExportsOrder,ne as default};
//# sourceMappingURL=AlertTitle.stories-7009e57a.js.map
