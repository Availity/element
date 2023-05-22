import{j as r,a as T}from"./jsx-runtime-58698645.js";import{r as A}from"./index-ccf6a75d.js";import{A as h,C as x}from"./Alert-d89450a3.js";import{g as _,a as v,s as b,c as S,b as V}from"./styled-3764f409.js";import{u as w}from"./useThemeProps-44863aa4.js";import{T as M}from"./Typography-b65533c9.js";import"./utils-55201ddf.js";import"./SvgIcon-240e8298.js";import"./ButtonBase-08892c78.js";import"./emotion-react.browser.esm-ec178fa7.js";import"./extends-79cb841a.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-75c8d838.js";import"./useIsFocusVisible-b5db2834.js";import"./index-8d7a8128.js";import"./index-03fcf278.js";import"./faExternalLink-8ccf1391.js";import"./faExclamationCircle-878a3411.js";import"./Paper-15612802.js";import"./extendSxProp-ae64963e.js";function R(e){return _("MuiAlertTitle",e)}v("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return V({root:["root"]},R,t)},q=b(M,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=A.forwardRef(function(t,s){const n=w({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return r(q,{gutterBottom:!0,component:"div",ownerState:a,ref:s,className:S(C.root,y),...g})}),N=I,o=({children:e,...t})=>r(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const te={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>T(h,{severity:"info",children:[r(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,s]=A.useState(!0);return r(x,{in:t,children:T(h,{severity:"info",onClose:()=>{s(!1),setTimeout(()=>s(!0),1e3)},children:[r(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const se=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,se as __namedExportsOrder,te as default};
//# sourceMappingURL=AlertTitle.stories-3b9ca713.js.map
