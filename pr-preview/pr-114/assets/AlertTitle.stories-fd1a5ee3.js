import{j as s,a as A}from"./jsx-runtime-390e5fc8.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-b62d7afb.js";import{c as x}from"./clsx.m-fb33c42b.js";import{g as _,s as v,c as b}from"./styled-fc2b35f5.js";import{u as S}from"./useThemeProps-5f33a28c.js";import{g as M}from"./generateUtilityClasses-8a827d83.js";import{M as V}from"./Typography-bf8f4457.js";import{C as w}from"./Collapse-e15e164f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2dd44fd1.js";import"./Button-4ab2863e.js";import"./ButtonBase-654f8a82.js";import"./emotion-react.browser.esm-325397be.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-528bd356.js";import"./useTheme-117bd4f5.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./utils-c4e5670c.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-5b7e7002.js";import"./LoadingButton-7e27a20e.js";import"./index-77e680bf.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-102d705b.js";import"./createSvgIcon-fa525e7b.js";import"./Close-2b6f6dcb.js";import"./Paper-c73104d0.js";import"./extendSxProp-fa3ab054.js";function R(e){return _("MuiAlertTitle",e)}M("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return b({root:["root"]},R,t)},q=v(V,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=T.forwardRef(function(t,r){const n=S({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return s(q,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:x(C.root,y),...g})}),N=I,o=({children:e,...t})=>s(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ye={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=T.useState(!0);return s(w,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ge=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,ge as __namedExportsOrder,ye as default};
//# sourceMappingURL=AlertTitle.stories-fd1a5ee3.js.map
