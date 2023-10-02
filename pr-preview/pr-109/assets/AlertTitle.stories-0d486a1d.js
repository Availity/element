import{j as s,a as A}from"./jsx-runtime-390e5fc8.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-d1b5dfea.js";import{b as x,g as _,s as v,c as b,a as S}from"./styled-52ae1682.js";import{c as M}from"./useThemeProps-09701b40.js";import{M as V}from"./Typography-fc5866ec.js";import{C as w}from"./Collapse-a679af60.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1df17b3b.js";import"./Button-04ac7f3f.js";import"./ButtonBase-d82e3f0a.js";import"./emotion-react.browser.esm-7b849601.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-863be512.js";import"./useTheme-a833130b.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-163bc2ac.js";import"./isHostComponent-73d6e646.js";import"./utils-237e8b7d.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-01452f88.js";import"./LoadingButton-ef204a6f.js";import"./index-aa24eefe.js";import"./faCircleArrowRight-b395df24.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-33a08535.js";import"./createSvgIcon-cde3b626.js";import"./Close-38943527.js";import"./Paper-f833d12a.js";import"./extendSxProp-5906c526.js";function R(e){return x("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return S({root:["root"]},R,t)},q=v(V,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=T.forwardRef(function(t,r){const n=M({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return s(q,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:b(C.root,y),...g})}),N=I,o=({children:e,...t})=>s(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const Ae={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=T.useState(!0);return s(w,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Te=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,Te as __namedExportsOrder,Ae as default};
//# sourceMappingURL=AlertTitle.stories-0d486a1d.js.map
