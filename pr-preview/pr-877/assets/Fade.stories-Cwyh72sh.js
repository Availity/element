import{j as r,r as s}from"./iframe-DV3He85V.js";import{b as m}from"./index-BrdVM3av.js";import{F as p}from"./Fade-BX6Wa8dQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfHLbFj4.js";import"./Tooltip-B-fI_KqI.js";import"./useTheme-SfRUUZiP.js";import"./styled-BUFH9864.js";import"./memoTheme-CqO710ep.js";import"./useSlot-D_lQT_km.js";import"./mergeSlotProps-BOgCOH-Y.js";import"./useForkRef-BjKAtTT0.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Ckthjz3O.js";import"./useControlled-Ccx6itka.js";import"./useEventCallback-DWs5MTmZ.js";import"./getReactElementRef-DFI1E4nz.js";import"./Portal-C_yGG6TD.js";import"./utils-Bwvx3eCn.js";import"./TransitionGroupContext-DIj-4TH7.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Da-PnXIN.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CvMV_1wy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CmkGGnOd.js";import"./CircularProgress-DhVft3f6.js";import"./Button-BaC_cxcf.js";import"./index-BjhlD0KS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BPrDg5y8.js";import"./Alert-Bs0jtQnM.js";import"./createSvgIcon-Dah6_HeO.js";import"./Close-K7FLhnUA.js";import"./Paper-Dqu7MPEo.js";import"./AlertTitle-BWmOJVPx.js";import"./Typography-CE44PW7B.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
