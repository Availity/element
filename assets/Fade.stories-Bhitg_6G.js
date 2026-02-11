import{j as r,r as s}from"./iframe-D1NCSytB.js";import{b as m}from"./index-BHKKiktW.js";import{F as p}from"./Fade-D-LTijLB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPnk7Q5j.js";import"./Tooltip-C79jCpae.js";import"./useTheme-D3cMIjr1.js";import"./styled-BbCZmQsA.js";import"./memoTheme-DOGX_B28.js";import"./useSlot-D1NHtjkn.js";import"./mergeSlotProps-DlDajhlR.js";import"./useForkRef-BpGj9yaf.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Bh_i1JKi.js";import"./useControlled-Czfb1u9c.js";import"./useEventCallback-C8LcGziW.js";import"./getReactElementRef-D8NIfLKv.js";import"./Portal-DSDwhvGd.js";import"./utils-DI3cRngQ.js";import"./TransitionGroupContext-BkHkrwff.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-WTXiNqL0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cqago1eB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BAUCY_Oi.js";import"./CircularProgress-DKmuW22e.js";import"./Button-Dci9Exp7.js";import"./index-BYdlpT-l.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B4wc5_NU.js";import"./Alert-CIQx55o5.js";import"./createSvgIcon-BJL25Yge.js";import"./Close-BqXB_R2P.js";import"./Paper-CBE46eXP.js";import"./AlertTitle-C19raiIS.js";import"./Typography-BWjvtf8i.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
