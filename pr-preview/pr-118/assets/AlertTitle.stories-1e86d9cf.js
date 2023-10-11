import{j as s,a as A}from"./jsx-runtime-390e5fc8.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-2ea58591.js";import{e as x,b as C}from"./createTheme-b02e766d.js";import{c as v}from"./clsx-43049957.js";import{g as b,s as S,a as M}from"./styled-69a32198.js";import{u as V}from"./useThemeProps-ac7867ed.js";import{g as w}from"./generateUtilityClasses-b06d554b.js";import{M as N}from"./Typography-72ef0a36.js";import{C as R}from"./Collapse-39592553.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-bc19b086.js";import"./Button-48a9b380.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-9ef5363d.js";import"./useTheme-a234fe30.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-c5009eb1.js";import"./utils-a53b28cc.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-329b8fa1.js";import"./LoadingButton-8f26fe8a.js";import"./extends-90dea224.js";import"./index-25d48f71.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-667e6608.js";import"./createSvgIcon-5dca4d92.js";import"./Close-dfa46add.js";import"./Paper-f1647d6d.js";import"./extendSxProp-b0ad88fc.js";function U(e){return b("MuiAlertTitle",e)}w("MuiAlertTitle",["root"]);const j=["className"],q=e=>{const{classes:t}=e;return M({root:["root"]},U,t)},I=S(N,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),P=T.forwardRef(function(t,r){const i=V({props:t,name:"MuiAlertTitle"}),{className:y}=i,g=x(i,j),a=i,_=q(a);return s(I,C({gutterBottom:!0,component:"div",ownerState:a,ref:r,className:v(_.root,y)},g))}),W=P,o=({children:e,...t})=>s(W,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const Ce={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},l={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},n={render:e=>{const[t,r]=T.useState(!0);return s(R,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ve=["_AlertTitle","_InDismissableAlert"];export{l as _AlertTitle,n as _InDismissableAlert,ve as __namedExportsOrder,Ce as default};
//# sourceMappingURL=AlertTitle.stories-1e86d9cf.js.map
