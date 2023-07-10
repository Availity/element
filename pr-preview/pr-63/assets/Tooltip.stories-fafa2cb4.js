import{j as t}from"./jsx-runtime-91a467a5.js";import{M as m}from"./Tooltip-2b90e131.js";import{B as d}from"./Button-dba24229.js";import{L as c}from"./Link-2974b716.js";import{T as u}from"./TextField-8543d5fa.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-d3429e37.js";import"./useThemeProps-6f56c469.js";import"./extends-bab83b91.js";import"./useTheme-2f1f089c.js";import"./Grow-7e5c057b.js";import"./index-8ce4a492.js";import"./useForkRef-2674f3de.js";import"./ButtonBase-87d42b03.js";import"./emotion-react.browser.esm-38965683.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useIsFocusVisible-bbf13f29.js";import"./useSlotProps-316404ca.js";import"./utils-a7330d0b.js";import"./useId-fd294ee9.js";import"./Typography-77e07a43.js";import"./extendSxProp-9a3b016c.js";import"./Menu-4c91368d.js";import"./Paper-e047b54f.js";import"./createSvgIcon-e1fe0494.js";import"./SvgIcon-741df7e0.js";import"./GlobalStyles-5816d789.js";const r=e=>{const{children:p,dangerouslySetTransitionTimer:i,...s}=e;return t(m,{...s,TransitionProps:{timeout:i!==void 0?i:100},arrow:!0,children:p})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Tooltip reference element.",name:"children",required:!0,type:{name:"ReactElement<any, any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},title:{defaultValue:null,description:"Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",name:"title",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed.
@param event The event source of the callback.`,name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},describeChild:{defaultValue:{value:"false"},description:"Set to `true` if the `title` acts as an accessible description.\nBy default the `title` acts as an accessible label for the child.",name:"describeChild",required:!1,type:{name:"boolean"}},leaveDelay:{defaultValue:{value:"0"},description:"The number of milliseconds to wait before hiding the tooltip.\nThis prop won't impact the leave touch delay (`leaveTouchDelay`).",name:"leaveDelay",required:!1,type:{name:"number"}},onOpen:{defaultValue:null,description:`Callback fired when the component requests to be open.
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},placement:{defaultValue:{value:"'bottom'"},description:"Tooltip placement.",name:"placement",required:!1,type:{name:'"bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start"'}},dangerouslySetTransitionTimer:{defaultValue:{value:"100"},description:"Sets the duration in ms of the animation to hide/show tooltip.",name:"dangerouslySetTransitionTimer",required:!1,type:{name:"number"}}}}}catch{}const f=["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],h='"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"',y={title:{description:"Text that displays in the tooltip.",table:{type:{summary:"string"}},type:{required:!0}},children:{description:"Element that triggers the tooltip.",options:["span","button","link","text field"],control:{type:"select"},table:{type:{summary:"ReactElement<any, any>"}},type:{required:!0},mapping:{span:t("span",{children:"Hover me"}),button:t(d,{color:"secondary",variant:"contained",children:"Hover me"}),link:t(c,{href:"#",onClick:e=>e.preventDefault(),children:"Hover me"}),"text field":t(u,{label:"Hover me",variant:"outlined"})}},leaveDelay:{description:"Delay before the tooltip is hidden. (micro seconds)",control:{type:"number"},table:{type:{summary:"number"}},defaultValue:{summary:0}},placement:{description:"Where the container of the tooltip is aligned and placed.",options:f,control:{type:"select"},table:{type:{summary:h}},defaultValue:{summary:'"bottom"'}}},G={title:"Components/Tooltip/Tooltip",component:r,tags:["autodocs"],argTypes:y,args:{children:"span",title:"This is a tooltip"}},o={render:e=>t(r,{...e})};var n,a,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (props: TooltipProps) => <Tooltip {...props} />
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const J=["_Tooltip"];export{o as _Tooltip,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Tooltip.stories-fafa2cb4.js.map
