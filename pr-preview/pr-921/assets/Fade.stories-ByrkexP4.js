import{j as r,r as s}from"./iframe-C9_PxSGQ.js";import{b as m}from"./index-CyXu8Co-.js";import{F as p}from"./Fade-BLrbHvJ9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ButV5MJr.js";import"./Tooltip-FRBJUwm-.js";import"./useTheme-BHbpGC30.js";import"./styled-B-vqXkzy.js";import"./memoTheme-BxvcW3UF.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BMn8x6pQ.js";import"./useControlled-BGxEnoNZ.js";import"./useEventCallback-DieoYw-U.js";import"./getReactElementRef-on-DwLqm.js";import"./Portal-Ct4gHjrk.js";import"./utils-8dHd4F9E.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDX3RUX-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BjLNslZW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-k4M9aDLt.js";import"./CircularProgress-vDDdOi_d.js";import"./Button-DtK3QmjS.js";import"./index-Ddg0Heb3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-FGOQRPT3.js";import"./Alert-CHDB4Z-1.js";import"./createSvgIcon-DoDU4gSx.js";import"./Close-B3zopXB2.js";import"./Paper-DGceIsLw.js";import"./AlertTitle-DlX4lgRk.js";import"./Typography-B7ymJCK8.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
