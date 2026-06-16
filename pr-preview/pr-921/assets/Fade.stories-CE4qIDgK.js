import{j as r,r as s}from"./iframe-D__S4UWJ.js";import{b as m}from"./index-C97hzXYs.js";import{F as p}from"./Fade-BYuTC5N7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSzUZNdV.js";import"./Tooltip-CiiYXVhS.js";import"./useTheme-CFaiP_LB.js";import"./styled-D9hsOvpf.js";import"./memoTheme-BV959hj8.js";import"./useSlot-O8ollNDw.js";import"./mergeSlotProps-D3BIdMsf.js";import"./useForkRef-BqPQmHw4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-92omNL17.js";import"./useControlled-jwoPGZ3a.js";import"./useEventCallback-DJS3GGm_.js";import"./getReactElementRef-CXYGkVyS.js";import"./Portal-DQUO7uTD.js";import"./utils-qh6k9bbM.js";import"./TransitionGroupContext-y7HMp-IG.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwqG8d0v.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CNhmLG-N.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ci_mfbwX.js";import"./CircularProgress-haj7VCd3.js";import"./Button-CFqvl5Id.js";import"./index-DhycCYh-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-XbFZbbsX.js";import"./Alert-Ba7KcuDU.js";import"./createSvgIcon-CjZPmBcj.js";import"./Close-j7BAIMlS.js";import"./Paper-Cbe2-SWa.js";import"./AlertTitle-CObgtCPu.js";import"./Typography-jktlZrXz.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
