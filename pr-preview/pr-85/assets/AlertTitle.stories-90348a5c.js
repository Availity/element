import{j as s,a as T}from"./jsx-runtime-91a467a5.js";import{r as A}from"./index-8db94870.js";import{A as h}from"./Alert-73e131cb.js";import{b as x,g as _,s as v,c as b,a as S}from"./styled-a84420af.js";import{c as V}from"./useThemeProps-2498ecc2.js";import{T as w}from"./Typography-a32bf19b.js";import{C as M}from"./Collapse-e3547aef.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-17968c62.js";import"./faCircleArrowRight-202cb008.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-aa084682.js";import"./createSvgIcon-6dc812c4.js";import"./Close-f2696c27.js";import"./Paper-2db66439.js";import"./IconButton-cff60f92.js";import"./ButtonBase-3eb7f77d.js";import"./emotion-react.browser.esm-8a1b3cc7.js";import"./extends-bab83b91.js";import"./inheritsLoose-8349f581.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./extendSxProp-8578bd86.js";import"./utils-50b22590.js";import"./index-8ce4a492.js";import"./useTheme-fc3bf0b8.js";function R(e){return x("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const q=e=>{const{classes:t}=e;return S({root:["root"]},R,t)},N=v(w,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),U=A.forwardRef(function(t,r){const n=V({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=q(a);return s(N,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:b(C.root,y),...g})}),j=U,o=({children:e,...t})=>s(j,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const le={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>T(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=A.useState(!0);return s(M,{in:t,children:T(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ne=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,ne as __namedExportsOrder,le as default};
//# sourceMappingURL=AlertTitle.stories-90348a5c.js.map
