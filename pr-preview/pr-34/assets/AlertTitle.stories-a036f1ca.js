import{j as r,a as T}from"./jsx-runtime-670450c2.js";import{r as A}from"./index-f1f749bf.js";import{A as h,C as x}from"./Alert-f2cb0c19.js";import{g as C,a as v,s as b,b as S,e as V,_ as w,f as M,h as N}from"./useThemeProps-62bf9113.js";import{T as R}from"./Typography-5b026e8e.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-react.browser.esm-c7b55d13.js";import"./emotion-element-6a883da9.browser.esm-627c11b2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./inheritsLoose-d374ba88.js";import"./index-96c5f47c.js";import"./ButtonBase-1f60c7b2.js";import"./extends-98964cd2.js";import"./useForkRef-d38d61a7.js";import"./useIsFocusVisible-c743303e.js";import"./index-5b47ba72.js";import"./faExternalLink-f56dc5bd.js";import"./faExclamationCircle-878a3411.js";function U(e){return C("MuiAlertTitle",e)}v("MuiAlertTitle",["root"]);const j=["className"],q=e=>{const{classes:t}=e;return N({root:["root"]},U,t)},I=b(R,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),P=A.forwardRef(function(t,s){const i=S({props:t,name:"MuiAlertTitle"}),{className:y}=i,g=V(i,j),a=i,_=q(a);return r(I,w({gutterBottom:!0,component:"div",ownerState:a,ref:s,className:M(_.root,y)},g))}),W=P,o=({children:e,...t})=>r(W,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const te={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},l={render:e=>T(h,{severity:"info",children:[r(o,{...e}),"This text is inside the Alert"]})},n={render:e=>{const[t,s]=A.useState(!0);return r(x,{in:t,children:T(h,{severity:"info",onClose:()=>{s(!1),setTimeout(()=>s(!0),1e3)},children:[r(o,{...e}),"This text is inside the Alert"]})})}};var p,c,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const se=["_AlertTitle","_InDismissableAlert"];export{l as _AlertTitle,n as _InDismissableAlert,se as __namedExportsOrder,te as default};
//# sourceMappingURL=AlertTitle.stories-a036f1ca.js.map
