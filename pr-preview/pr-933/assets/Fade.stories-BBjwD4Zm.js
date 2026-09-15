import{j as r,r as s}from"./iframe-_ZTccD58.js";import{b as m}from"./index-DpUctnWl.js";import{F as p}from"./Fade-U1zsu3gd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLaYSOpi.js";import"./IconButton-DaIXPvFu.js";import"./memoTheme-BuxtMmS2.js";import"./styled-DxUGJNed.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-CPTcrrxt.js";import"./useTimeout-COBvC2JW.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./useForkRef-BH960YuM.js";import"./useEventCallback-Bsg7GzMN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DP4XdEyk.js";import"./Tooltip-BlJXya1q.js";import"./useTheme-CbKlvc9V.js";import"./useSlot-Y1vfiROK.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useControlled-h9lrVQtL.js";import"./getReactElementRef-CKHPMftD.js";import"./Portal-D40QliBd.js";import"./utils-CGytJ6bP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-93kC9vNJ.js";import"./Button-DpAEBbkn.js";import"./index-D2g-Snq2.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B7LeHXNQ.js";import"./Alert-DFAJ7AfX.js";import"./createSvgIcon-CPBwa84_.js";import"./Close-DDepYFWR.js";import"./Paper-TFiwEfzG.js";import"./AlertTitle-jNDr8fVA.js";import"./Typography-BQev244I.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
