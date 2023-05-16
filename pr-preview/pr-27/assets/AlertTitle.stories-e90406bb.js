import{j as r,a as T}from"./jsx-runtime-670450c2.js";import{r as f}from"./index-f1f749bf.js";import{A as h,C}from"./Alert-847a4ebb.js";import{g as x,a as b,s as v,u as M,b as S,_ as V,c as N,e as R}from"./useThemeProps-9d4ada4e.js";import{T as U}from"./Typography-67c3ed3c.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconButton-e3e622fb.js";import"./emotion-react.browser.esm-5cb50a94.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./inheritsLoose-d374ba88.js";import"./index-96c5f47c.js";import"./ButtonBase-997f0eeb.js";import"./extends-98964cd2.js";import"./useForkRef-2e794f8b.js";import"./SvgIcon-2c7f2328.js";import"./faExclamationCircle-878a3411.js";function j(e){return x("MuiAlertTitle",e)}b("MuiAlertTitle",["root"]);const w=["className"],I=e=>{const{classes:t}=e;return R({root:["root"]},j,t)},W=v(U,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),q=f.forwardRef(function(t,s){const i=M({props:t,name:"MuiAlertTitle"}),{className:g}=i,y=S(i,w),a=i,_=I(a);return r(W,V({gutterBottom:!0,component:"div",ownerState:a,ref:s,className:N(_.root,g)},y))}),D=q,o=({children:e,...t})=>r(D,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ee={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},l={render:e=>T(h,{severity:"info",children:[r(o,{...e}),"This text is inside the Alert"]})},n={render:e=>{const[t,s]=f.useState(!0);return r(C,{in:t,children:T(h,{severity:"info",onClose:()=>{s(!1),setTimeout(()=>s(!0),1e3)},children:[r(o,{...e}),"This text is inside the Alert"]})})}};var c,p,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,A;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(A=(u=n.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};const te=["_AlertTitle","_InDismissableAlert"];export{l as _AlertTitle,n as _InDismissableAlert,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=AlertTitle.stories-e90406bb.js.map
