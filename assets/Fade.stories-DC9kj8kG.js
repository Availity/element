import{j as r,r as s}from"./iframe-Bzxq4khQ.js";import{b as m}from"./index-DsDlPsDu.js";import{F as p}from"./Fade-DV9rGJYk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HZB2unx2.js";import"./Tooltip--PgUuozR.js";import"./useTheme-CLJ35KcV.js";import"./styled-BSgFKBik.js";import"./memoTheme-CkAjAg3h.js";import"./useSlot-cTDCwMnT.js";import"./mergeSlotProps-BP1q_mR2.js";import"./useForkRef-CyBmAmq2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D8n7EMSe.js";import"./useControlled-BxlFJ8nt.js";import"./useEventCallback-Zn8Kx7hu.js";import"./getReactElementRef-C4G1HZdF.js";import"./Portal-DrMzc0O0.js";import"./utils-BhtHTj_i.js";import"./TransitionGroupContext-4l5GgSIy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dxsb08A1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CbyRNbtW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-mnH_3Wha.js";import"./CircularProgress-OhY0Ky5x.js";import"./Button-COtcAXVl.js";import"./index-C1aSd5b5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DbWIKXvI.js";import"./Alert-DCVSEwDs.js";import"./createSvgIcon-Bd4vIYa-.js";import"./Close-C1tpug76.js";import"./Paper-i7wmImU7.js";import"./AlertTitle-tUAT_83t.js";import"./Typography-B9ybtieC.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
