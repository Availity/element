import{j as s,F as a,a as m}from"./jsx-runtime-91a467a5.js";import{R as _}from"./index-8db94870.js";import{A as i}from"./Alert-783b464a.js";import{C as y}from"./Collapse-9aa326b0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-bc648821.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-2cc6257a.js";import"./styled-3f92ccfd.js";import"./useThemeProps-e4a8cdbc.js";import"./extends-bab83b91.js";import"./createSvgIcon-ac09799d.js";import"./Close-ebe952a1.js";import"./Paper-f5e9bc79.js";import"./IconButton-87076761.js";import"./ButtonBase-984984ab.js";import"./emotion-react.browser.esm-638d3fdc.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./utils-cd6c7dfd.js";import"./index-8ce4a492.js";import"./useTheme-9732e621.js";const X={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{children:"This text is inside the alert"}},t={render:e=>s(i,{severity:"info",...e})},r={render:e=>{const[b,n]=_.useState(!0);return s(y,{in:b,children:s(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>s(a,{children:S.map(e=>m(a,{children:[m(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),s("br",{})]}))})};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: AlertProps) => <Alert severity="info" {...args} />
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,h,A,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const Y=["_Alert","_DismissableAlert","_Severities"];export{t as _Alert,r as _DismissableAlert,o as _Severities,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Alert.stories-ea6642b6.js.map
