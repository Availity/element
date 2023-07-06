import{j as s,a as T}from"./jsx-runtime-91a467a5.js";import{r as A}from"./index-8db94870.js";import{A as h}from"./Alert-e656f96c.js";import{a as x,g as _,s as v,c as b,b as S}from"./styled-0cac7ee0.js";import{b as V}from"./useThemeProps-4a2bd4cc.js";import{T as w}from"./Typography-afb12d14.js";import{C as M}from"./Collapse-095509d4.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-acbbb2cc.js";import"./faMagnifyingGlass-d219cdaa.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-d811a5db.js";import"./createSvgIcon-6ae9e333.js";import"./Paper-4d20a8fa.js";import"./IconButton-35bf43eb.js";import"./ButtonBase-fa447215.js";import"./emotion-react.browser.esm-a9ca05bd.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./extendSxProp-b17911bf.js";import"./utils-8f907144.js";import"./index-8ce4a492.js";import"./useTheme-5d25d683.js";function R(e){return x("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return S({root:["root"]},R,t)},q=v(w,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=A.forwardRef(function(t,r){const n=V({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return s(q,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:b(C.root,y),...g})}),N=I,o=({children:e,...t})=>s(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const le={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>T(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=A.useState(!0);return s(M,{in:t,children:T(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
//# sourceMappingURL=AlertTitle.stories-ff225011.js.map
