import{j as s,a as A}from"./jsx-runtime-390e5fc8.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-8c55e65d.js";import{c as x}from"./clsx.m-5a18bdae.js";import{g as _,s as v,c as b}from"./styled-34470687.js";import{u as S}from"./useThemeProps-4eed9f55.js";import{g as M}from"./generateUtilityClasses-379cd6e3.js";import{M as V}from"./Typography-b4b82de0.js";import{C as w}from"./Collapse-dfb40602.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ab2511e5.js";import"./Button-b8d9193e.js";import"./ButtonBase-c1676a07.js";import"./emotion-react.browser.esm-166e2a31.js";import"./createTheme-cf9cd31a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-cf9f79a8.js";import"./useTheme-75b14aeb.js";import"./Grow-16063720.js";import"./index-8a077077.js";import"./utils-7964d339.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-5f03bd16.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-899bd586.js";import"./LoadingButton-f3d81a39.js";import"./index-6c98e8c4.js";import"./faCircleArrowRight-a219d0fc.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-544b53cd.js";import"./createSvgIcon-d58a77bd.js";import"./Close-41d6a998.js";import"./Paper-bff53714.js";import"./extendSxProp-3c84bad0.js";function R(e){return _("MuiAlertTitle",e)}M("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return b({root:["root"]},R,t)},q=v(V,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=T.forwardRef(function(t,r){const n=S({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return s(q,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:x(C.root,y),...g})}),N=I,o=({children:e,...t})=>s(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ge={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=T.useState(!0);return s(w,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Ce=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,Ce as __namedExportsOrder,ge as default};
//# sourceMappingURL=AlertTitle.stories-33dbbd05.js.map
