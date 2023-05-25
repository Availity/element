import{j as r,a as T}from"./jsx-runtime-91a467a5.js";import{r as A}from"./index-8db94870.js";import{A as h,C as x}from"./Alert-d91ea012.js";import{a as _,g as v,s as b,c as S,b as V}from"./styled-83dce9db.js";import{u as w}from"./useThemeProps-bbf3a6ab.js";import{T as M}from"./Typography-e9116b86.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-543594d3.js";import"./ButtonBase-31edf4e9.js";import"./emotion-react.browser.esm-b298e083.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./index-8ce4a492.js";import"./index-a181615a.js";import"./faMagnifyingGlass-816a2eda.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-f1c7c68e.js";import"./createSvgIcon-2ab2ba44.js";import"./Paper-a679b040.js";import"./IconButton-52188c55.js";import"./extendSxProp-762405d5.js";function R(e){return _("MuiAlertTitle",e)}v("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return V({root:["root"]},R,t)},q=b(M,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=A.forwardRef(function(t,s){const n=w({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return r(q,{gutterBottom:!0,component:"div",ownerState:a,ref:s,className:S(C.root,y),...g})}),N=I,o=({children:e,...t})=>r(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const re={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>T(h,{severity:"info",children:[r(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,s]=A.useState(!0);return r(x,{in:t,children:T(h,{severity:"info",onClose:()=>{s(!1),setTimeout(()=>s(!0),1e3)},children:[r(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const oe=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=AlertTitle.stories-c84d1d04.js.map
