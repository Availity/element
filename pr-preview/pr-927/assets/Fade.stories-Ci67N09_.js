import{j as r,r as s}from"./iframe-DDeFjhwT.js";import{b as m}from"./index-CSyFMWXb.js";import{F as p}from"./Fade-klYlUMvL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSwp3I03.js";import"./Tooltip-5o6beSBH.js";import"./useTheme-KKOLTJXa.js";import"./styled-PQjfDOgQ.js";import"./memoTheme-BKUl2Kw8.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Cm2RyAAI.js";import"./useControlled-BH5VVnvv.js";import"./useEventCallback-tCUa2-C3.js";import"./getReactElementRef-BeHDg4ji.js";import"./Portal-BqacPdFW.js";import"./utils-DshWixdw.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B4bgTElG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CurJhF0D.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D-CcOUqB.js";import"./CircularProgress-DZuzO0Uv.js";import"./Button-su8UM5h8.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./Alert-CQMGnc5I.js";import"./createSvgIcon-BxZGQxhE.js";import"./Close-CjaMKFHv.js";import"./Paper-igPbegtl.js";import"./AlertTitle-rdeForN8.js";import"./Typography-Be3kmzes.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
