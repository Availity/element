import{j as r,a as T}from"./jsx-runtime-390e5fc8.js";import{r as A}from"./index-570b25c1.js";import{A as h}from"./Alert-458906da.js";import{b as x,g as _,s as v,c as b,a as S}from"./styled-46700abb.js";import{c as V}from"./useThemeProps-a0bcf1fa.js";import{T as w}from"./Typography-e84bcf2e.js";import{C as M}from"./Collapse-f5cc7b84.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c3fc5b9b.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-5897cc2b.js";import"./createSvgIcon-ddb735eb.js";import"./Close-7b1f55b3.js";import"./Paper-9691a1f7.js";import"./IconButton-249e9fb9.js";import"./ButtonBase-aeff0912.js";import"./emotion-react.browser.esm-dc94dc3c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./extendSxProp-00384f26.js";import"./utils-2678d3f4.js";import"./index-8a077077.js";import"./useTheme-d6ae80b7.js";function R(e){return x("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return S({root:["root"]},R,t)},q=v(w,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=A.forwardRef(function(t,s){const n=V({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return r(q,{gutterBottom:!0,component:"div",ownerState:a,ref:s,className:b(C.root,y),...g})}),N=I,o=({children:e,...t})=>r(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ie={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>T(h,{severity:"info",children:[r(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,s]=A.useState(!0);return r(M,{in:t,children:T(h,{severity:"info",onClose:()=>{s(!1),setTimeout(()=>s(!0),1e3)},children:[r(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const le=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=AlertTitle.stories-9b392de4.js.map
