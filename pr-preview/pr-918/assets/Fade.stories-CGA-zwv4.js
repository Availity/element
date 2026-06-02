import{j as r,r as s}from"./iframe-CNKi_Ec9.js";import{b as m}from"./index-C0n2Ltk1.js";import{F as p}from"./Fade-B4qzam9p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B621nc9Z.js";import"./Tooltip-CJ_GLTq5.js";import"./useTheme-BKQS-hPu.js";import"./styled-CGPS0K8z.js";import"./memoTheme-DeusU9l_.js";import"./useSlot-6u895GGS.js";import"./mergeSlotProps-NHo9zqIM.js";import"./useForkRef-BcCxGyq_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-qmb5R95B.js";import"./useControlled-w5dFxqhC.js";import"./useEventCallback-Cws-zXFa.js";import"./getReactElementRef-8X4grM9z.js";import"./Portal-C3A-VfFU.js";import"./utils-SSfZp7cC.js";import"./TransitionGroupContext-BESWVVvg.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BIvI5Lxh.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CeXbiSrq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CiH38IXk.js";import"./CircularProgress-BrUNS0I2.js";import"./Button-CTbvABeh.js";import"./index-B_WSnka_.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DRZMbgGT.js";import"./Alert-BONBBDar.js";import"./createSvgIcon-DLBoSPlD.js";import"./Close-Dm6cDoM0.js";import"./Paper-B0v8-sA3.js";import"./AlertTitle-Cuap3Y82.js";import"./Typography-DIfLarQN.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
