import{j as s,a as A}from"./jsx-runtime-390e5fc8.js";import{r as T}from"./index-570b25c1.js";import{A as h}from"./Alert-2b5686e2.js";import{b as x,_ as C}from"./createTheme-e6b56ddb.js";import{c as v}from"./clsx-8416b751.js";import{g as b,s as S,c as M}from"./styled-188025da.js";import{u as V}from"./useThemeProps-db7202c2.js";import{g as w}from"./generateUtilityClasses-f776b170.js";import{M as N}from"./Typography-a571125c.js";import{C as R}from"./Collapse-3f165411.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-49af8d8b.js";import"./Button-9af3d166.js";import"./ButtonBase-6040f690.js";import"./emotion-react.browser.esm-69a15469.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d9214433.js";import"./useTheme-3a36d7a0.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-1710581f.js";import"./utils-df51f77d.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-15cd5b0a.js";import"./LoadingButton-2cbf4819.js";import"./extends-90dea224.js";import"./index-f35eb24e.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./createSvgIcon-e4b87ef5.js";import"./Close-ab7ad129.js";import"./Paper-4c319fed.js";import"./extendSxProp-4d42c058.js";function U(e){return b("MuiAlertTitle",e)}w("MuiAlertTitle",["root"]);const j=["className"],q=e=>{const{classes:t}=e;return M({root:["root"]},U,t)},I=S(N,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),P=T.forwardRef(function(t,r){const i=V({props:t,name:"MuiAlertTitle"}),{className:y}=i,g=x(i,j),a=i,_=q(a);return s(I,C({gutterBottom:!0,component:"div",ownerState:a,ref:r,className:v(_.root,y)},g))}),W=P,o=({children:e,...t})=>s(W,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const Ce={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},l={render:e=>A(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},n={render:e=>{const[t,r]=T.useState(!0);return s(R,{in:t,children:A(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
//# sourceMappingURL=AlertTitle.stories-4d7a5403.js.map
