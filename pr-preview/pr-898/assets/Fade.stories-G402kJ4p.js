import{j as r,r as s}from"./iframe-N02SuUfm.js";import{b as m}from"./index-uq_T1LPK.js";import{F as p}from"./Fade-CDLQakVW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvsDSmAk.js";import"./Tooltip-CQFd6bN6.js";import"./useTheme-CBomFZYP.js";import"./styled-uecMoX7Y.js";import"./memoTheme-DMlCkTbp.js";import"./useSlot-CYr36xh7.js";import"./mergeSlotProps-BGDsmNTV.js";import"./useForkRef-C8fPM8y1.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CejRPUTA.js";import"./useControlled-RyKq5As7.js";import"./useEventCallback-CZlMSRL0.js";import"./getReactElementRef-DLbY8hGf.js";import"./Portal-BvewvNxS.js";import"./utils-CJrkpLOG.js";import"./TransitionGroupContext-DaLiAsRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDT4gqxX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cq9St4jZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cit_CnSx.js";import"./CircularProgress-DkicU_0c.js";import"./Button-I7Afgrab.js";import"./index-lxra371Y.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BTj78AGP.js";import"./Alert-qQ2Kx2L4.js";import"./createSvgIcon-quS1Xx-W.js";import"./Close-H4HIKQVs.js";import"./Paper-BzTjV2sZ.js";import"./AlertTitle-D3zzQPBG.js";import"./Typography-DFwTx7H5.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
