import{j as r,r as s}from"./iframe-6QlsuZks.js";import{b as m}from"./index-CoSdfn8Z.js";import{F as p}from"./Fade-BumTlQbr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bu7ksarN.js";import"./Tooltip-Obr4DBw0.js";import"./useTheme-CgDfdbfy.js";import"./styled-DGzk_rgf.js";import"./memoTheme-B9sQlNky.js";import"./useSlot-DzncR7P9.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useForkRef-B_RCYMsy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CoBmWaVy.js";import"./useControlled-D8gQq48B.js";import"./useEventCallback-H76OWquH.js";import"./getReactElementRef-CeFrpTOn.js";import"./Portal-DtF3r0WZ.js";import"./utils-DDHdHaR3.js";import"./TransitionGroupContext-BfrWwv51.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-XhtNc6mu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52xOams.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqANlMe2.js";import"./CircularProgress-BzseWMqn.js";import"./Button-Ck8mL0PX.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-o3xhyLw5.js";import"./Alert-Ds5ZG5Ug.js";import"./createSvgIcon-suRscvHS.js";import"./Close-DFnKTLyr.js";import"./Paper-CDdLas_Y.js";import"./AlertTitle-SeCTzYnf.js";import"./Typography-BiVk-Xpu.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
