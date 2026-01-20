import{j as r,r as s}from"./iframe-DDdys5VZ.js";import{b as m}from"./index-CBPoD4av.js";import{F as p}from"./Fade-Ci7jieLM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Do6uxBxf.js";import"./Tooltip-BrywaEgo.js";import"./useTheme-3S67f5Cb.js";import"./styled-hFTqa5AW.js";import"./memoTheme-Cxx5qwbm.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-DZwXI9W9.js";import"./useControlled-DPgR13iz.js";import"./useEventCallback-Cc8SLIyn.js";import"./getReactElementRef-KKwdvyjG.js";import"./Portal-CIlqDXrO.js";import"./utils-CF4In8Xa.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMLU_yM0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOaXfSEH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DZVI88h8.js";import"./CircularProgress-CD5GaXFj.js";import"./Button-uXds9IdN.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./Alert-Dkq1iShR.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./Close-D4KUM2AM.js";import"./Paper-BNuTBhMB.js";import"./AlertTitle-DWmwafwU.js";import"./Typography-CZtxpkXF.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
