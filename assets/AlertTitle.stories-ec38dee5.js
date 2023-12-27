import{a as s,j as A}from"./jsx-runtime-a3bcee63.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-341ffe0b.js";import{b as x,_ as C}from"./createTheme-bcd1d157.js";import{c as v}from"./clsx-7dc4e18d.js";import{g as b,s as S,c as M}from"./styled-7846e708.js";import{u as V}from"./useThemeProps-018254e6.js";import{g as w}from"./generateUtilityClasses-70c60a0e.js";import{M as N}from"./Typography-f61e077a.js";import{C as R}from"./Collapse-ec3d9136.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5496e90f.js";import"./Button-d84dd9a0.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-c716d13a.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-f4be827f.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./index-cb4dbded.js";import"./faCircleArrowRight-e7789e56.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-951d7748.js";import"./createSvgIcon-60c2b2ae.js";import"./Close-6aa862f8.js";import"./Paper-722ac472.js";import"./extendSxProp-9115426f.js";function U(e){return b("MuiAlertTitle",e)}w("MuiAlertTitle",["root"]);const j=["className"],q=e=>{const{classes:t}=e;return M({root:["root"]},U,t)},I=S(N,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),P=T.forwardRef(function(t,r){const i=V({props:t,name:"MuiAlertTitle"}),{className:y}=i,g=x(i,j),a=i,_=q(a);return s(I,C({gutterBottom:!0,component:"div",ownerState:a,ref:r,className:v(_.root,y)},g))}),W=P,o=({children:e,...t})=>s(W,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const Me={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},l={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},n={render:e=>{const[t,r]=T.useState(!0);return s(R,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Ve=["_AlertTitle","_InDismissableAlert"];export{l as _AlertTitle,n as _InDismissableAlert,Ve as __namedExportsOrder,Me as default};
//# sourceMappingURL=AlertTitle.stories-ec38dee5.js.map