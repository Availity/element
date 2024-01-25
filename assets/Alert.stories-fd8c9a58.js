import{a as t,F as a,j as m}from"./jsx-runtime-a3bcee63.js";import{a as _}from"./index-570b25c1.js";import{A as i}from"./Alert-211d0e66.js";import{C as y}from"./Collapse-f17f633e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5efdcb36.js";import"./Button-af0ca45f.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-91ad21bd.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-8a00b99f.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./index-53288845.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./createSvgIcon-ca656bec.js";import"./Close-41aa9caa.js";import"./Paper-389d56e7.js";const ur={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{children:"This text is inside the alert"}},o={render:r=>t(i,{severity:"info",...r})},e={render:r=>{const[b,n]=_.useState(!0);return t(y,{in:b,children:t(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...r})})}},S=["info","success","warning","error"],s={render:()=>t(a,{children:S.map(r=>m(a,{children:[m(i,{severity:r,children:["This is a ",r," alert — check it out!"]},r),t("br",{})]}))})};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: AlertProps) => <Alert severity="info" {...args} />
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,h,A,f;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"The `Collapse` component is a recommended way to handle visual dismissing of an alert.\nCheck out the Material UI docs for more information.",...(f=(A=e.parameters)==null?void 0:A.docs)==null?void 0:f.description}}};var v,g,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <>
    {severities.map(severity => <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>)}
  </>
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const hr=["_Alert","_DismissableAlert","_Severities"];export{o as _Alert,e as _DismissableAlert,s as _Severities,hr as __namedExportsOrder,ur as default};
//# sourceMappingURL=Alert.stories-fd8c9a58.js.map
