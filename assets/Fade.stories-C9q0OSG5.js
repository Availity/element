import{j as r,r as s}from"./iframe-uePoqqpz.js";import{b as m}from"./index-CIuAo_gl.js";import{F as p}from"./Fade-C63bziq-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRQPm386.js";import"./Tooltip-CBI98mGf.js";import"./useTheme-CLegm-7I.js";import"./styled-HV0RCVZb.js";import"./memoTheme-Dgj0sIK-.js";import"./useSlot-dwhecRhc.js";import"./mergeSlotProps-BA0TfUKM.js";import"./useForkRef-BwAAUV5l.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-_NjN4_Sd.js";import"./useControlled-CiVZLVlp.js";import"./useEventCallback-DlO0-RjJ.js";import"./getReactElementRef-C3-m1DFV.js";import"./Portal-qmW-7K1L.js";import"./utils-BMnAKpwa.js";import"./TransitionGroupContext-CmeeQpCz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D5l61s2T.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Ikh-V53z.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DvYvvCW7.js";import"./CircularProgress-JnYtC6I3.js";import"./Button-BeX4uEqy.js";import"./index-iuot5o8P.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzJHsKlT.js";import"./Alert-BBCUYvYq.js";import"./createSvgIcon-CMty7C1j.js";import"./Close-B9UNSdso.js";import"./Paper-DEbfATBV.js";import"./AlertTitle-BiDNUnvZ.js";import"./Typography-CCivflCu.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
