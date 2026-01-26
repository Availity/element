import{j as r,r as s}from"./iframe-B4F0UUz5.js";import{b as m}from"./index-Z4J8mmpj.js";import{F as p}from"./Fade-C5UM2BtN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJ27nWYv.js";import"./Tooltip-DyWobFm2.js";import"./useTheme-DkdpmsKL.js";import"./styled-bGWttyC6.js";import"./memoTheme-BKk2saex.js";import"./useSlot-oo8TP9Im.js";import"./mergeSlotProps-DT_q42Lx.js";import"./useForkRef-CjLG5x_H.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-BonZNUeG.js";import"./useControlled-BRFwdesD.js";import"./useEventCallback-BqH7MYZ-.js";import"./getReactElementRef-CApeICjD.js";import"./Portal-D8A5UmkR.js";import"./utils-BiHtS7y3.js";import"./TransitionGroupContext-fwmkieDY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C2ZAZv5Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CqGgnlnL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqWoj7oR.js";import"./CircularProgress-PmMulKWi.js";import"./Button-BurqBlBC.js";import"./index-Cr9n8cqt.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DM1sZoZa.js";import"./Alert-sCZbjfQa.js";import"./createSvgIcon-BXxeVrmm.js";import"./Close-9PuYUA0s.js";import"./Paper-BhZ60vFE.js";import"./AlertTitle-CPCHHgUG.js";import"./Typography-xEPHi5Wz.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
