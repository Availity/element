import{a as t}from"./jsx-runtime-a3bcee63.js";import{M as m}from"./Tooltip-c716d13a.js";import{B as d}from"./Button-d84dd9a0.js";import{L as c}from"./Link-a674eae6.js";import{T as u}from"./TextField-785bc636.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./useTheme-76c02901.js";import"./generateUtilityClasses-70c60a0e.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./useEnhancedEffect-460150e6.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./useSlotProps-f4be827f.js";import"./useEventCallback-e1b9edb9.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./Typography-f61e077a.js";import"./extendSxProp-9115426f.js";import"./FormLabel-16418a49.js";import"./utils-3d35716f.js";import"./isMuiElement-6907f060.js";import"./Select-be273af1.js";import"./react-is.production.min-a192e302.js";import"./Menu-932c384c.js";import"./Popover-277c5654.js";import"./Modal-8fa896b2.js";import"./Backdrop-49825a13.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-722ac472.js";import"./debounce-517eeb3c.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./OutlinedInput-bd5ed4eb.js";import"./GlobalStyles-7ba993a7.js";import"./FormHelperText-ae2a8f0e.js";const r=e=>{const{children:p,dangerouslySetTransitionTimer:i,...s}=e;return t(m,{...s,TransitionProps:{timeout:i!==void 0?i:100},arrow:!0,children:p})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Tooltip reference element.",name:"children",required:!0,type:{name:"ReactElement<any, any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},title:{defaultValue:null,description:"Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",name:"title",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed.
@param event The event source of the callback.`,name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<Element, Event>) => void"}},onOpen:{defaultValue:null,description:`Callback fired when the component requests to be open.
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"'bottom'"},description:"Tooltip placement.",name:"placement",required:!1,type:{name:'"bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start"'}},describeChild:{defaultValue:{value:"false"},description:"Set to `true` if the `title` acts as an accessible description.\nBy default the `title` acts as an accessible label for the child.",name:"describeChild",required:!1,type:{name:"boolean"}},leaveDelay:{defaultValue:{value:"0"},description:"The number of milliseconds to wait before hiding the tooltip.\nThis prop won't impact the leave touch delay (`leaveTouchDelay`).",name:"leaveDelay",required:!1,type:{name:"number"}},dangerouslySetTransitionTimer:{defaultValue:{value:"100"},description:"Sets the duration in ms of the animation to hide/show tooltip.",name:"dangerouslySetTransitionTimer",required:!1,type:{name:"number"}}}}}catch{}const f=["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],h='"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"',y={title:{description:"Text that displays in the tooltip.",table:{type:{summary:"string"}},type:{required:!0}},children:{description:"Element that triggers the tooltip.",options:["span","button","link","text field"],control:{type:"select"},table:{type:{summary:"ReactElement<any, any>"}},type:{required:!0},mapping:{span:t("span",{children:"Hover me"}),button:t(d,{color:"secondary",variant:"contained",children:"Hover me"}),link:t(c,{href:"#",onClick:e=>e.preventDefault(),children:"Hover me"}),"text field":t(u,{label:"Hover me",variant:"outlined"})}},leaveDelay:{description:"Delay before the tooltip is hidden. (micro seconds)",control:{type:"number"},table:{type:{summary:"number"}},defaultValue:{summary:0}},placement:{description:"Where the container of the tooltip is aligned and placed.",options:f,control:{type:"select"},table:{type:{summary:h}},defaultValue:{summary:'"bottom"'}}},ce={title:"Components/Tooltip/Tooltip",component:r,tags:["autodocs"],argTypes:y,args:{children:"button",title:"This is a tooltip"}},o={render:e=>t(r,{...e})};var n,a,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (props: TooltipProps) => <Tooltip {...props} />
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const ue=["_Tooltip"];export{o as _Tooltip,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=Tooltip.stories-bc8872d3.js.map