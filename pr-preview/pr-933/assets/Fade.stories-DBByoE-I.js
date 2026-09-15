import{j as r,r as s}from"./iframe-BOySubGY.js";import{b as m}from"./index-BlA_GZw8.js";import{F as p}from"./Fade-MtnpW3KP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dHFlkqLk.js";import"./IconButton-D23BvDdt.js";import"./memoTheme-C-oySTID.js";import"./styled-XjKTZ5Ba.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-CriPZSS7.js";import"./useTimeout-D7rfSJNw.js";import"./TransitionGroupContext-DX1Xmw-6.js";import"./useForkRef-BEcBTcWu.js";import"./useEventCallback-De91DTs8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B5gdOPr_.js";import"./Tooltip-CVYQnSxv.js";import"./useTheme-BZyZpBhU.js";import"./useSlot-BgdUY7vI.js";import"./mergeSlotProps-A5qFZlFu.js";import"./useControlled-ZCAGuxBe.js";import"./getReactElementRef-ekrhOioo.js";import"./Portal-Bk70ZbQ1.js";import"./utils-MRT_IXkN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CORZ0NF7.js";import"./Button-DWb-ONsW.js";import"./index-Axa3knvz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZLHpFL-.js";import"./Alert-g1lguWxF.js";import"./createSvgIcon-CNdKwBrG.js";import"./Close-C8toxEW2.js";import"./Paper-DK-wycZj.js";import"./AlertTitle-BA0s0MII.js";import"./Typography-SY2Ud8Z5.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},timeout:{defaultValue:{value:`{
enter: theme.transitions.duration.enteringScreen,
exit: theme.transitions.duration.leavingScreen,
}`},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.`,name:"timeout",required:!1,type:{name:"number | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }"}}}}}catch{}const Q={title:"Components/Transitions/Fade",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},t={render:e=>{const[o,n]=s.useState(!0),a=()=>{n(!1),setTimeout(()=>n(!0),1e3)};return r.jsx(i,{in:o,...e,children:r.jsx("div",{children:r.jsx(m,{onClose:a,children:"Dismissable Alert"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: FadeProps) => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Fade in={visible} {...args}>
        <div>
          <Alert onClose={onClose}>Dismissable Alert</Alert>
        </div>
      </Fade>;
  }
}`,...t.parameters?.docs?.source}}};const U=["_Fade"];export{t as _Fade,U as __namedExportsOrder,Q as default};
