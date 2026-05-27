import{j as r,r as s}from"./iframe-C99277Jn.js";import{b as m}from"./index-N22BVfFz.js";import{F as p}from"./Fade-DTvpgJPw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLVZqh54.js";import"./Tooltip-1HJoGAor.js";import"./useTheme-rB5ljihk.js";import"./styled-BSyyF-nm.js";import"./memoTheme-BcCvxPZB.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Dw4BvZaa.js";import"./useControlled-DV2QdfFp.js";import"./useEventCallback-BvtgHlfy.js";import"./getReactElementRef-Bs67iJIN.js";import"./Portal-rCUOv2ZO.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CQi1oJfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-GExIkIsQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B6dKL5Sm.js";import"./CircularProgress-DWs2PQSt.js";import"./Button-D7NhHobB.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BaWfF9je.js";import"./Alert-BakFFxZ8.js";import"./createSvgIcon-Cab5rVDr.js";import"./Close-DOd84hl1.js";import"./Paper-YQNMXe3n.js";import"./AlertTitle-CyxVbuXY.js";import"./Typography-ZltxThzN.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
