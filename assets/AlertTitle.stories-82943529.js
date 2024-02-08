import{a as s,j as A}from"./jsx-runtime-a3bcee63.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-b29edfc5.js";import{b as x,_ as C}from"./createTheme-3fee607a.js";import{c as v}from"./clsx-b831246b.js";import{g as b,s as S,c as M}from"./styled-523cb007.js";import{u as V}from"./useThemeProps-98dc6282.js";import{g as w}from"./generateUtilityClasses-b58f947a.js";import{M as N}from"./Typography-f453bb5c.js";import{C as R}from"./Collapse-f17f633e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5efdcb36.js";import"./Button-af0ca45f.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-91ad21bd.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-8a00b99f.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./index-53288845.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./createSvgIcon-ca656bec.js";import"./Close-41aa9caa.js";import"./Paper-389d56e7.js";import"./extendSxProp-b1abb964.js";function U(e){return b("MuiAlertTitle",e)}w("MuiAlertTitle",["root"]);const j=["className"],q=e=>{const{classes:t}=e;return M({root:["root"]},U,t)},I=S(N,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),P=T.forwardRef(function(t,r){const i=V({props:t,name:"MuiAlertTitle"}),{className:y}=i,g=x(i,j),a=i,_=q(a);return s(I,C({gutterBottom:!0,component:"div",ownerState:a,ref:r,className:v(_.root,y)},g))}),W=P,o=({children:e,...t})=>s(W,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const Ve={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},l={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},n={render:e=>{const[t,r]=T.useState(!0);return s(R,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
}`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const we=["_AlertTitle","_InDismissableAlert"];export{l as _AlertTitle,n as _InDismissableAlert,we as __namedExportsOrder,Ve as default};
//# sourceMappingURL=AlertTitle.stories-82943529.js.map
