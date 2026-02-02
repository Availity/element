import{j as r,r as s}from"./iframe-rhK9tIc4.js";import{b as m}from"./index-NR9LI-eO.js";import{F as p}from"./Fade-BMyKZOEO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-QneIm0.js";import"./Tooltip-DiEqfW-N.js";import"./useTheme-BXOJLFox.js";import"./styled-CBQFiEom.js";import"./memoTheme-IQ7acCr3.js";import"./useSlot-Ss2ummcO.js";import"./mergeSlotProps-C1tzmMCQ.js";import"./useForkRef-DQY4LT_f.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-D0IbZg6d.js";import"./useControlled-CseZ_aCu.js";import"./useEventCallback-Ds2BvoNa.js";import"./getReactElementRef-D1xzuExO.js";import"./Portal-D-ZKSgVP.js";import"./utils-Doe2UH4J.js";import"./TransitionGroupContext-uy7bHgBz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CU-sXxN2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BVic3zsX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C62hOKjf.js";import"./CircularProgress-BoTRikuG.js";import"./Button-KJ_PCDyl.js";import"./index-DRr7OjqP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DzAUVQ7n.js";import"./Alert-DKLCSaSQ.js";import"./createSvgIcon-C0bXOuHF.js";import"./Close-BqvVGatI.js";import"./Paper-lILei8Mh.js";import"./AlertTitle-CFzRj1Ih.js";import"./Typography-DyqU0saw.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
