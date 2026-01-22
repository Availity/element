import{j as r,r as s}from"./iframe-P-I-t7s_.js";import{b as m}from"./index-C8xlsgIV.js";import{F as p}from"./Fade-CVC1eZsP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOqcfzn9.js";import"./Tooltip-kyKJtl96.js";import"./useTheme-BPf64W-X.js";import"./styled-DNi79hKI.js";import"./memoTheme-Bi3jfVWD.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Dzhca5Jx.js";import"./useControlled-Cqclzim-.js";import"./useEventCallback-DAYatbRK.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./Portal-_y01gIKP.js";import"./utils-DTqcJog-.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cx6Yk_v4.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BTlhtNIa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-P5TjO14T.js";import"./CircularProgress-BRuGXxty.js";import"./Button-xw2JRpr3.js";import"./index-C3cy06cM.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./Alert-y6fzeclH.js";import"./createSvgIcon-JwEd2gcS.js";import"./Close-BtLp18zk.js";import"./Paper-DMZ3Nhg0.js";import"./AlertTitle-H64rt6RT.js";import"./Typography-BFwAhjnY.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
