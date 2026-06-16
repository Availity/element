import{j as r,r as s}from"./iframe-Cyg9aVcX.js";import{b as m}from"./index-BgWZK982.js";import{F as p}from"./Fade-BlsC_kbX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-h-exa6rv.js";import"./Tooltip-B872xQRW.js";import"./useTheme-CzQvHrc-.js";import"./styled-Bd0VbO2U.js";import"./memoTheme-jifZnr2J.js";import"./useSlot-BxXD7OXK.js";import"./mergeSlotProps-cvNGDztE.js";import"./useForkRef-DU61cGWF.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D6StvTbU.js";import"./useControlled-LzVIFy4V.js";import"./useEventCallback-C8dig9Cp.js";import"./getReactElementRef-CtSLxyS5.js";import"./Portal-CbV_9_tw.js";import"./utils-B1U3sbvV.js";import"./TransitionGroupContext-Bf2CmkMl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3SvR_Jp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_0lSByq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BvuHtZ4U.js";import"./CircularProgress-DgTEISy3.js";import"./Button-BmGuU9Jv.js";import"./index-PRHxF3E5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-yyAmYjGv.js";import"./Alert-_xnyJqtg.js";import"./createSvgIcon-C4GbkCiK.js";import"./Close-kBPtxZgV.js";import"./Paper-CQzqH1w0.js";import"./AlertTitle-YpxCiLv7.js";import"./Typography-fPTXF0ua.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
