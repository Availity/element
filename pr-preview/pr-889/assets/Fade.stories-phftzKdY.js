import{j as r,r as s}from"./iframe-DRsKaZoV.js";import{b as m}from"./index-BXQtZvQb.js";import{F as p}from"./Fade-CW38gb4g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2IJrd5x.js";import"./Tooltip-BkcHQcF9.js";import"./useTheme-C1O811uL.js";import"./styled-DO91FIEC.js";import"./memoTheme-olSsBjA8.js";import"./useSlot-DNM0KLoM.js";import"./mergeSlotProps-BURl53KS.js";import"./useForkRef-LQtjIIgV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-C--q8J9W.js";import"./useControlled-kFa1Yq00.js";import"./useEventCallback-Bu60zwDR.js";import"./getReactElementRef-BQu0zR55.js";import"./Portal-D6re67WF.js";import"./utils-DcRyR5pI.js";import"./TransitionGroupContext-BL3wvAVn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3Llr-h-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DtO7gEQ8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CTgQ_by3.js";import"./CircularProgress-CYts75uW.js";import"./Button-CfQxP6eB.js";import"./index-BpFZIt2g.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Dpxjd7uT.js";import"./Alert-ZoU9nbGa.js";import"./createSvgIcon-DdCwdPBR.js";import"./Close-GYMp_htT.js";import"./Paper-Ddpt-3Cp.js";import"./AlertTitle-CRCGSusa.js";import"./Typography-DeM8j2MH.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
