import{j as r,r as s}from"./iframe-Cwe65xm_.js";import{b as m}from"./index-CT_sbubU.js";import{F as p}from"./Fade-DVmn_b9B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B70TfKNL.js";import"./Tooltip-DXMour_H.js";import"./useTheme-ClD_legM.js";import"./styled-DQU8Bodb.js";import"./memoTheme-JTO0J2AE.js";import"./useSlot-DT6vlKow.js";import"./mergeSlotProps-DptD_Py-.js";import"./useForkRef-B3dE_Xi9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-B979BKpc.js";import"./useControlled-B5htf0na.js";import"./useEventCallback-Cus8kDUU.js";import"./getReactElementRef-BO3eeWP1.js";import"./Portal-MprWoh0y.js";import"./utils-E62tsqSg.js";import"./TransitionGroupContext-DfpprYK4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHdu95RH.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLwVH8iN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2MrdNo3.js";import"./CircularProgress-Gl2vZfvX.js";import"./Button-BPlwCXwF.js";import"./index-Dwd1T5KI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVcTXB35.js";import"./Alert-DiTiGzju.js";import"./createSvgIcon-BCdDg_61.js";import"./Close-CDWcnhUE.js";import"./Paper-BllScWLN.js";import"./AlertTitle-DvFB2Trt.js";import"./Typography-CwzEaEbc.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
