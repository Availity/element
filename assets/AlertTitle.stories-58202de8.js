import{j as s,a as T}from"./jsx-runtime-91a467a5.js";import{r as A}from"./index-8db94870.js";import{A as h}from"./Alert-b2a53d6f.js";import{a as x,g as _,s as v,c as b,b as S}from"./styled-838f2411.js";import{u as V}from"./useThemeProps-ac6a164c.js";import{T as w}from"./Typography-e8ebf3ff.js";import{C as M}from"./Collapse-d37ba7cc.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-cd651495.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-247857dd.js";import"./createSvgIcon-802be96d.js";import"./Close-f3879550.js";import"./Paper-25f4f657.js";import"./IconButton-58eb99ee.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./extendSxProp-d07c2917.js";import"./utils-038da973.js";import"./index-8ce4a492.js";import"./useTheme-c349195b.js";function R(e){return x("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const q=e=>{const{classes:t}=e;return S({root:["root"]},R,t)},N=v(w,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),U=A.forwardRef(function(t,r){const n=V({props:t,name:"MuiAlertTitle"}),{className:y,...g}=n,a=n,C=q(a);return s(N,{gutterBottom:!0,component:"div",ownerState:a,ref:r,className:b(C.root,y),...g})}),j=U,o=({children:e,...t})=>s(j,{...t,children:e});try{o.displayName="AlertTitle",o.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ne={title:"Components/Alert/AlertTitle",component:o,tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},i={render:e=>T(h,{severity:"info",children:[s(o,{...e}),"This text is inside the Alert"]})},l={render:e=>{const[t,r]=A.useState(!0);return s(M,{in:t,children:T(h,{severity:"info",onClose:()=>{r(!1),setTimeout(()=>r(!0),1e3)},children:[s(o,{...e}),"This text is inside the Alert"]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ae=["_AlertTitle","_InDismissableAlert"];export{i as _AlertTitle,l as _InDismissableAlert,ae as __namedExportsOrder,ne as default};
//# sourceMappingURL=AlertTitle.stories-58202de8.js.map
