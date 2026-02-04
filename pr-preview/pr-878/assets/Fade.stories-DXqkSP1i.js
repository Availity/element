import{j as r,r as s}from"./iframe-Cdk6lpWs.js";import{b as m}from"./index-b9tC0pFc.js";import{F as p}from"./Fade-B5dkP1J3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CywYuil6.js";import"./Tooltip-BgHK4L6p.js";import"./useTheme-OiEjV3So.js";import"./styled-Da4jwHSl.js";import"./memoTheme-Dnmlp1j3.js";import"./useSlot-D-PxlIN3.js";import"./mergeSlotProps-DMc6LXK-.js";import"./useForkRef-BBp7hlnJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CIy7F0jL.js";import"./useControlled-QHn5S2wL.js";import"./useEventCallback-vVwk_Y3I.js";import"./getReactElementRef-ABpHVkKM.js";import"./Portal-Ci08Bzea.js";import"./utils-DiARjLYz.js";import"./TransitionGroupContext-DcA7Ut_f.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CRphJa0r.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-2-tk2V1a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CJIyK2Pl.js";import"./CircularProgress-CILK_PUp.js";import"./Button-CkMj2wnd.js";import"./index-3GTxF1kd.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BMF15TUB.js";import"./Alert-pJDeBaA5.js";import"./createSvgIcon-1kVfY1hj.js";import"./Close-DI06AlJO.js";import"./Paper-CO31t9g6.js";import"./AlertTitle-CoSVW4wi.js";import"./Typography-BiMhXRVd.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
