import{j as r,r as l}from"./iframe-XJ8rUARQ.js";import{b as u}from"./index-Bl9PxhG8.js";import{F as d}from"./Fade-7aiRsYlH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bfg0IfXb.js";import"./Tooltip-CFosmsmO.js";import"./useTheme-DdE3jScQ.js";import"./styled-DH1bohWY.js";import"./memoTheme-q27Lu1jJ.js";import"./useSlot-BQnc1wiW.js";import"./mergeSlotProps-B1UYo6hf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k_WY5UDV.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CHPWgY-X.js";import"./useControlled-XnLwGYQ0.js";import"./useEventCallback-BDPMWXz1.js";import"./getReactElementRef-CA2jWjUI.js";import"./Portal-xufODOBH.js";import"./utils-Bu5_zceD.js";import"./TransitionGroupContext-BLsjMo91.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ClBThUbu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CSeSeZKT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CgzYzVmi.js";import"./CircularProgress-DHokMmGN.js";import"./Button-jNyCdmKh.js";import"./index-Bic9pcsq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-gs9ZPknn.js";import"./Alert-CCB8Vw27.js";import"./createSvgIcon-CZFbIjHx.js";import"./Close-Dw_-z5X-.js";import"./Paper-BItyqzia.js";import"./AlertTitle-DK99yBB5.js";import"./Typography-DLCURa9h.js";const i=e=>r.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},timeout:{defaultValue:{value:`{
enter: theme.transitions.duration.enteringScreen,
exit: theme.transitions.duration.leavingScreen,
}`},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.`,name:"timeout",required:!1,type:{name:"number | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }"}}}}}catch{}const Z={title:"Components/Transitions/Fade",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},t={render:e=>{const[m,n]=l.useState(!0),p=()=>{n(!1),setTimeout(()=>n(!0),1e3)};return r.jsx(i,{in:m,...e,children:r.jsx("div",{children:r.jsx(u,{onClose:p,children:"Dismissable Alert"})})})}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const ee=["_Fade"];export{t as _Fade,ee as __namedExportsOrder,Z as default};
