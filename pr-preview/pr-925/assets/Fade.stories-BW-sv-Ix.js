import{j as r,r as s}from"./iframe-BRP1PsTd.js";import{b as m}from"./index-DrLYyPSK.js";import{F as p}from"./Fade-ByvXngvB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsNnDr7w.js";import"./Tooltip-C5fygC3l.js";import"./useTheme-C-06SHWZ.js";import"./styled-kfJMXx_R.js";import"./memoTheme-Rx2ZtNd-.js";import"./useSlot-B51YQDxZ.js";import"./mergeSlotProps-B2RYlZua.js";import"./useForkRef-DUyCy24e.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-zBXF3kIc.js";import"./useControlled-8-M28gqE.js";import"./useEventCallback-BX14bO_3.js";import"./getReactElementRef-y-MSVziw.js";import"./Portal-CRr1uWpV.js";import"./utils-DtC8lP3P.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-fBG80Xpc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-4bUdPSIB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DI3KZvly.js";import"./CircularProgress-Dy9r_LoH.js";import"./Button-BSPls0mt.js";import"./index-C9qIB2Ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C0xh8SUy.js";import"./Alert-2L0ggmBZ.js";import"./createSvgIcon-DDgQnkKT.js";import"./Close-Bi4R9hIj.js";import"./Paper-Cw-zNh9i.js";import"./AlertTitle-CMXOC9cp.js";import"./Typography-BELI0wSd.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
