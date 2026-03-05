import{j as r,r as s}from"./iframe-Wk3enkn_.js";import{b as m}from"./index-dnYz-uNV.js";import{F as p}from"./Fade-CxXiFCgw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pyii_x3t.js";import"./Tooltip-BR4Ffd1U.js";import"./useTheme-CmRoqaFD.js";import"./styled-BmTYHnh6.js";import"./memoTheme-Caj5A1s7.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BCOPmfCQ.js";import"./useControlled-2F9gTxQc.js";import"./useEventCallback-B7JQiyR1.js";import"./getReactElementRef-Cnge9CgM.js";import"./Portal-CCkMzpr1.js";import"./utils-tb6sxdlZ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BfCrVpCA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6xLK3w0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Qsi_pa_1.js";import"./CircularProgress-n4f4P4WA.js";import"./Button-C074Gfa_.js";import"./index-a2BAU8hi.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C-x4Imun.js";import"./Alert-LfikkVN3.js";import"./createSvgIcon-q6AyRDli.js";import"./Close-BJPW9EZ5.js";import"./Paper-BtZlLsyY.js";import"./AlertTitle-46WSsgI5.js";import"./Typography-CLtqYzwP.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
