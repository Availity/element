import{j as r,r as s}from"./iframe-CsWHXpAl.js";import{b as m}from"./index-BUmZlOXZ.js";import{F as p}from"./Fade-CyNrIrid.js";import"./preload-helper-PPVm8Dsz.js";import"./index-vavqp1NI.js";import"./Tooltip-Bng6bCNf.js";import"./useTheme-p1ELRF_q.js";import"./styled-7ngSg1XE.js";import"./memoTheme-D1WvXAYX.js";import"./useSlot-C4woaFwW.js";import"./mergeSlotProps-BavqdjkP.js";import"./useForkRef-C-HgPgYg.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-MBLSaU9x.js";import"./useControlled-D3FoPl0A.js";import"./useEventCallback-ByFiieHy.js";import"./getReactElementRef-U9GKYTTT.js";import"./Portal-BnhBoGVi.js";import"./utils-DGzkDCaD.js";import"./TransitionGroupContext-C2wcbRoz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DAB-O9r_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BElkJFHg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bidr6pNA.js";import"./CircularProgress-DpaflDra.js";import"./Button-CA2GH-94.js";import"./index-CAQ8YrHX.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-rO9Zrjko.js";import"./Alert-BkIe32FZ.js";import"./createSvgIcon-vjDmBDLj.js";import"./Close-CzyEhyMz.js";import"./Paper-CRnRfyjj.js";import"./AlertTitle-BM5NhcdN.js";import"./Typography-BPpHVaiZ.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
