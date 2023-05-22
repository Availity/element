import{j as r,a as f}from"./jsx-runtime-670450c2.js";import{r as A}from"./index-f1f749bf.js";import{A as h,C as x}from"./Alert-30153505.js";import{g as C,a as v,s as b,u as S,b as V,_ as w,c as M,e as N}from"./useThemeProps-601b945a.js";import{T as R}from"./Typography-954846e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-8ecb89ea.js";import"./emotion-react.browser.esm-5cb50a94.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./inheritsLoose-d374ba88.js";import"./index-96c5f47c.js";import"./ButtonBase-09e0211d.js";import"./extends-98964cd2.js";import"./useForkRef-2e794f8b.js";import"./index-00b5c9ce.js";import"./faMagnifyingGlass-8ccf1391.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-f528eb28.js";import"./Paper-5962e01e.js";import"./IconButton-a4e20278.js";import"./extendSxProp-e7bb663c.js";function U(e){return C("MuiAlertTitle",e)}v("MuiAlertTitle",["root"]);const j=["className"],q=e=>{const{classes:t}=e;return N({root:["root"]},U,t)},I=b(R,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),P=A.forwardRef(function(t,s){const i=S({props:t,name:"MuiAlertTitle"}),{className:y}=i,g=V(i,j),a=i,_=q(a);return r(I,w({gutterBottom:!0,component:"div",ownerState:a,ref:s,className:M(_.root,y)},g))}),W=P,o=({children:e,...t})=>r(W,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ie={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},l={render:e=>f(h,{severity:"info",children:[r(o,{...e}),"This text is inside the Alert"]})},n={render:e=>{const[t,s]=A.useState(!0);return r(x,{in:t,children:f(h,{severity:"info",onClose:()=>{s(!1),setTimeout(()=>s(!0),1e3)},children:[r(o,{...e}),"This text is inside the Alert"]})})}};var p,c,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,T;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(T=(u=n.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const le=["_AlertTitle","_InDismissableAlert"];export{l as _AlertTitle,n as _InDismissableAlert,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=AlertTitle.stories-93c772c7.js.map
