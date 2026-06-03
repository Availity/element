import{j as r,r as s}from"./iframe-BXngGBfv.js";import{b as m}from"./index-t-KnR81S.js";import{F as p}from"./Fade-CaBS8FWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZvN5iItO.js";import"./Tooltip-16k3P5ny.js";import"./useTheme-C0sMdU1B.js";import"./styled-Bawvqwj4.js";import"./memoTheme-By_0Hb9I.js";import"./useSlot-CrmQg2MJ.js";import"./mergeSlotProps-Brb8C4Ss.js";import"./useForkRef-BPuQGl16.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-DWqRGYei.js";import"./useControlled-XJJbW9AP.js";import"./useEventCallback-BS9kycBS.js";import"./getReactElementRef-BBa8qN_k.js";import"./Portal-71LMLhER.js";import"./utils-Co-MjcrY.js";import"./TransitionGroupContext-CO0Qzr5e.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Djma3IUa.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-B7Rw7xc_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CzabJsBp.js";import"./CircularProgress-CH7ElgU6.js";import"./Button-BjebpOto.js";import"./index-Cf4ih-NU.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BJuCOs7n.js";import"./Alert-BZ1DkV_K.js";import"./createSvgIcon-PKFeQm70.js";import"./Close-D0vvQXqp.js";import"./Paper-DbLV-z9R.js";import"./AlertTitle-BO4yRm31.js";import"./Typography-CV53WmLj.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
