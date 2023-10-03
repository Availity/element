import{j as t,F as a,a as m}from"./jsx-runtime-390e5fc8.js";import{a as _}from"./index-570b25c1.js";import{A as i}from"./Alert-9a620652.js";import{C as y}from"./Collapse-3af29b60.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-df90da3e.js";import"./Button-03854916.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-d0245a8f.js";import"./useThemeProps-bb804320.js";import"./generateUtilityClasses-145aac4e.js";import"./ButtonBase-ae02db0a.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d34c04c4.js";import"./useTheme-108b79b5.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./utils-78dc3aa5.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-8720a92d.js";import"./LoadingButton-5b331dfb.js";import"./index-74bc51e6.js";import"./faCircleArrowRight-a712a312.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-6af4d5b9.js";import"./createSvgIcon-ab70d8ae.js";import"./Close-82c4c884.js";import"./Paper-582e0bbf.js";const ae={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{children:"This text is inside the alert"}},s={render:e=>t(i,{severity:"info",...e})},r={render:e=>{const[b,n]=_.useState(!0);return t(y,{in:b,children:t(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>t(a,{children:S.map(e=>m(a,{children:[m(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),t("br",{})]}))})};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const me=["_Alert","_DismissableAlert","_Severities"];export{s as _Alert,r as _DismissableAlert,o as _Severities,me as __namedExportsOrder,ae as default};
//# sourceMappingURL=Alert.stories-aca6de67.js.map
