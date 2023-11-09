import{j as t,F as a,a as m}from"./jsx-runtime-390e5fc8.js";import{a as _}from"./index-570b25c1.js";import{A as i}from"./Alert-2a974084.js";import{C as y}from"./Collapse-d7c875a9.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4f46ff89.js";import"./Button-676c50e4.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-f1b77b46.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-e75628f1.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-f5561129.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de7b27e6.js";import"./LoadingButton-23ede12c.js";import"./extends-90dea224.js";import"./CircularProgress-924892c6.js";import"./index-c91bacb5.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-b52b22c3.js";import"./createSvgIcon-359b5f59.js";import"./Close-fd2201f8.js";import"./Paper-2d2ada67.js";const ce={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{children:"This text is inside the alert"}},s={render:e=>t(i,{severity:"info",...e})},r={render:e=>{const[b,n]=_.useState(!0);return t(y,{in:b,children:t(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>t(a,{children:S.map(e=>m(a,{children:[m(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),t("br",{})]}))})};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: AlertProps) => <Alert severity="info" {...args} />
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,h,A,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: AlertProps) => {
    const [visible, setVisible] = React.useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Alert onClose={onClose} {...args} />
      </Collapse>;
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"The `Collapse` component is a recommended way to handle visual dismissing of an alert.\nCheck out the Material UI docs for more information.",...(f=(A=r.parameters)==null?void 0:A.docs)==null?void 0:f.description}}};var v,g,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <>
    {severities.map(severity => <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>)}
  </>
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const de=["_Alert","_DismissableAlert","_Severities"];export{s as _Alert,r as _DismissableAlert,o as _Severities,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=Alert.stories-c054fcc0.js.map
