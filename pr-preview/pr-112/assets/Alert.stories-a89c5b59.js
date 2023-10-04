import{j as t,F as a,a as m}from"./jsx-runtime-390e5fc8.js";import{a as _}from"./index-570b25c1.js";import{A as i}from"./Alert-8c55e65d.js";import{C as y}from"./Collapse-dfb40602.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ab2511e5.js";import"./Button-b8d9193e.js";import"./clsx.m-5a18bdae.js";import"./createTheme-cf9cd31a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-34470687.js";import"./useThemeProps-4eed9f55.js";import"./generateUtilityClasses-379cd6e3.js";import"./ButtonBase-c1676a07.js";import"./emotion-react.browser.esm-166e2a31.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-cf9f79a8.js";import"./useTheme-75b14aeb.js";import"./Grow-16063720.js";import"./index-8a077077.js";import"./utils-7964d339.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-5f03bd16.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-899bd586.js";import"./LoadingButton-f3d81a39.js";import"./index-6c98e8c4.js";import"./faCircleArrowRight-a219d0fc.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-544b53cd.js";import"./createSvgIcon-d58a77bd.js";import"./Close-41d6a998.js";import"./Paper-bff53714.js";const me={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{children:"This text is inside the alert"}},s={render:e=>t(i,{severity:"info",...e})},r={render:e=>{const[b,n]=_.useState(!0);return t(y,{in:b,children:t(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>t(a,{children:S.map(e=>m(a,{children:[m(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),t("br",{})]}))})};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const pe=["_Alert","_DismissableAlert","_Severities"];export{s as _Alert,r as _DismissableAlert,o as _Severities,pe as __namedExportsOrder,me as default};
//# sourceMappingURL=Alert.stories-a89c5b59.js.map
