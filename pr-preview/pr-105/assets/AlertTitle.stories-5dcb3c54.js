import{j as s,a as A}from"./jsx-runtime-390e5fc8.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-91beab1c.js";import{b as x,g as _,s as v,c as b,a as S}from"./styled-2191822d.js";import{c as M}from"./useThemeProps-66ab754c.js";import{M as V}from"./Typography-8314e3e3.js";import{C as w}from"./Collapse-f799128c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d51ee930.js";import"./Button-fce9389c.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Tooltip-e09bffc1.js";import"./useTheme-c775f3da.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-38dd38c0.js";import"./utils-aacfec48.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-130e3844.js";import"./LoadingButton-25a551fc.js";import"./index-91a95a3a.js";import"./faCircleArrowRight-32490c46.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-644454bc.js";import"./createSvgIcon-cafa5f0c.js";import"./Close-dea21bc6.js";import"./Paper-576c7647.js";import"./extendSxProp-564f0963.js";function R(e){return x("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const U=e=>{const{classes:t}=e;return S({root:["root"]},R,t)},q=v(V,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=T.forwardRef(function(t,r){const n=M({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=U(a);return s(q,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:b(C.root,y),...g})}),N=I,o=({children:e,...t})=>s(N,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ue={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=T.useState(!0);return s(w,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const fe=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,fe as __namedExportsOrder,ue as default};
//# sourceMappingURL=AlertTitle.stories-5dcb3c54.js.map
