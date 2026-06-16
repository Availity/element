import{j as r,r as s}from"./iframe-DOPEDWVE.js";import{b as m}from"./index-CeX-MaSe.js";import{F as p}from"./Fade-DWzLIVc2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B920RZd2.js";import"./Tooltip-VtUuxwVh.js";import"./useTheme-D2iYqlAC.js";import"./styled-LPfbW-Wh.js";import"./memoTheme-8zILCmUA.js";import"./useSlot-C4qJPUpL.js";import"./mergeSlotProps-DNHO_T1K.js";import"./useForkRef-B1Lx8fl-.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CvyLGLNv.js";import"./useControlled-W_wjgM09.js";import"./useEventCallback-2DpT7fNb.js";import"./getReactElementRef-CylE0SZK.js";import"./Portal-CcIDLVWU.js";import"./utils-C1ZbFEVB.js";import"./TransitionGroupContext-GxBk2Ip_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DiHBVMXF.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52uYHTa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CQME6_xK.js";import"./CircularProgress-Bd2XmtNT.js";import"./Button-DHnc0sD-.js";import"./index-NHPSesC7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bt1sNrUf.js";import"./Alert-Dc8iX1lq.js";import"./createSvgIcon-URN63_Ch.js";import"./Close-Ca30N1zO.js";import"./Paper-e-gdlgr6.js";import"./AlertTitle-CvZapyDY.js";import"./Typography-D_VWbga9.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
