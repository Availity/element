import{j as r,r as s}from"./iframe-B3XSEB2p.js";import{b as m}from"./index-BIN8VLeI.js";import{F as p}from"./Fade-BhRChvyZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDo5zO46.js";import"./Tooltip-CpMdDorm.js";import"./useTheme-Gs2b_SoM.js";import"./styled-BKJUYYzH.js";import"./memoTheme-zFBVIAxJ.js";import"./useSlot-fXCwMtx-.js";import"./mergeSlotProps-BUA7aXyy.js";import"./useForkRef-BFyiqj42.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-DjubHrAv.js";import"./useControlled-BnIqSLBp.js";import"./useEventCallback-Dfz_oY_W.js";import"./getReactElementRef-m4HA6qqR.js";import"./Portal-DeOXpMrf.js";import"./utils-CMJMNufc.js";import"./TransitionGroupContext-bUHI8Opa.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BnXi_Ts5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ML2PMq2-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CV7JyDx9.js";import"./CircularProgress-C6blXItT.js";import"./Button-Cx7ia3Qx.js";import"./index-CAS_Ehni.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BW4di25g.js";import"./Alert-DSZ5ewUo.js";import"./createSvgIcon-DXiAxkxb.js";import"./Close-C9YG2uHw.js";import"./Paper-CGKnoNLB.js";import"./AlertTitle-B8FxlLEb.js";import"./Typography-BStgzFan.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
