import{j as r,r as s}from"./iframe-DPnTQG0G.js";import{b as m}from"./index-xpBzcFAp.js";import{F as p}from"./Fade-Bvo7Nuzl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7O5cvxg.js";import"./IconButton-DddGcaV5.js";import"./memoTheme-CMfgY8Ge.js";import"./styled-B3r2fqeJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-C2F6Y1bD.js";import"./useTimeout-CUwsoYp8.js";import"./TransitionGroupContext-BMEataXp.js";import"./useForkRef-B-MdRiiy.js";import"./useEventCallback-jzoMkJU2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BvBmh-xb.js";import"./Tooltip-oUWx7pT_.js";import"./useTheme-DIidgVEY.js";import"./useSlot-CA9InCnB.js";import"./mergeSlotProps-BoQagQxu.js";import"./useControlled-DDdRMWyJ.js";import"./getReactElementRef-Bl_fL_Lc.js";import"./Portal-DFXYbKgm.js";import"./utils-BzkU8P15.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTR8zjwb.js";import"./Button-D8f966mF.js";import"./index-DyrAPJez.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BFzjjt5D.js";import"./Alert-B_hWHIp6.js";import"./createSvgIcon-o5Z7wc8L.js";import"./Close-Bho1xGhu.js";import"./Paper-CfCnRjNa.js";import"./AlertTitle-B8-vl0cN.js";import"./Typography-BE3nbQ7X.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
