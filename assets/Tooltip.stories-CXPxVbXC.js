import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{T as m}from"./Tooltip-CiiaKkqp.js";import{T as d}from"./TextField-BxbLM7nG.js";import{L as u}from"./Link-DYJ9uraP.js";import{B as c}from"./Button-DDPbJ3HZ.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useTheme-C2CrmYKc.js";import"./styled-CF1hcdwO.js";import"./memoTheme-D-rVhYRp.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./OutlinedInput-CQlxW3ax.js";import"./useFormControl-68oiojFJ.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-hLZ2S4VH.js";import"./Menu-Byu17A6t.js";import"./Popover-ChEuM7rO.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./FormLabel-98YPf6ct.js";import"./FormControl-BPSU2g7t.js";import"./isMuiElement-DAzOCCHH.js";import"./Typography-CvSvtD2a.js";import"./ButtonBase-DbVRbsLs.js";import"./CircularProgress-D8w9ZPs6.js";const r=e=>{const{children:p,dangerouslySetTransitionTimer:i,...s}=e;return t.jsx(m,{...s,TransitionProps:{timeout:i!==void 0?i:100},arrow:!0,children:p})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Tooltip reference element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",name:"title",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed.
@param event The event source of the callback.`,name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<Element, Event>) => void"}},onOpen:{defaultValue:null,description:`Callback fired when the component requests to be open.
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},placement:{defaultValue:{value:"'bottom'"},description:"Tooltip placement.",name:"placement",required:!1,type:{name:'"bottom" | "left" | "right" | "top" | "bottom-start" | "bottom-end" | "top-start" | "top-end" | "right-start" | "right-end" | "left-start" | "left-end"'}},describeChild:{defaultValue:{value:"false"},description:"Set to `true` if the `title` acts as an accessible description.\nBy default the `title` acts as an accessible label for the child.",name:"describeChild",required:!1,type:{name:"boolean"}},leaveDelay:{defaultValue:{value:"0"},description:"The number of milliseconds to wait before hiding the tooltip.\nThis prop won't impact the leave touch delay (`leaveTouchDelay`).",name:"leaveDelay",required:!1,type:{name:"number"}},dangerouslySetTransitionTimer:{defaultValue:{value:"100"},description:"Sets the duration in ms of the animation to hide/show tooltip.",name:"dangerouslySetTransitionTimer",required:!1,type:{name:"number"}}}}}catch{}const f=["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],h='"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"',y={title:{description:"Text that displays in the tooltip.",table:{type:{summary:"string"}},type:{required:!0}},children:{description:"Element that triggers the tooltip.",options:["span","button","link","text field"],control:{type:"select"},table:{type:{summary:"ReactElement<any, any>"}},type:{required:!0},mapping:{span:t.jsx("span",{children:"Hover me"}),button:t.jsx(c,{color:"secondary",variant:"contained",children:"Hover me"}),link:t.jsx(u,{href:"#",onClick:e=>e.preventDefault(),children:"Hover me"}),"text field":t.jsx(d,{label:"Hover me",variant:"outlined"})}},leaveDelay:{description:"Delay before the tooltip is hidden. (micro seconds)",control:{type:"number"},table:{type:{summary:"number"}},defaultValue:{summary:0}},placement:{description:"Where the container of the tooltip is aligned and placed.",options:f,control:{type:"select"},table:{type:{summary:h}},defaultValue:{summary:'"bottom"'}}},Ve={title:"Components/Tooltip/Tooltip",component:r,tags:["autodocs"],argTypes:y,args:{children:"button",title:"This is a tooltip"}},o={render:e=>t.jsx(r,{...e})};var n,a,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (props: TooltipProps) => <Tooltip {...props} />
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const _e=["_Tooltip"];export{o as _Tooltip,_e as __namedExportsOrder,Ve as default};
