import{j as b}from"./jsx-runtime-91a467a5.js";import{r as B}from"./index-8db94870.js";import{g as q,b as x,s as $,c as z,a as w}from"./styled-e83a4d6b.js";import{e as y,b as s,c as M}from"./useThemeProps-2be0b178.js";import{B as I}from"./ButtonBase-43bbae14.js";function E(e){return x("MuiToggleButton",e)}const O=q("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),h=O,P=e=>{const{classes:a,fullWidth:t,selected:l,disabled:n,size:i,color:r}=e,o={root:["root",l&&"selected",n&&"disabled",t&&"fullWidth",`size${y(i)}`,r]};return w(o,E,a)},N=$(I,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[`size${y(t.size)}`]]}})(({theme:e,ownerState:a})=>{let t=a.color==="standard"?e.palette.text.primary:e.palette[a.color].main,l;return e.vars&&(t=a.color==="standard"?e.vars.palette.text.primary:e.vars.palette[a.color].main,l=a.color==="standard"?e.vars.palette.text.primaryChannel:e.vars.palette[a.color].mainChannel),{...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,...a.fullWidth&&{width:"100%"},[`&.${h.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:s(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{color:t,backgroundColor:e.vars?`rgba(${l} / ${e.vars.palette.action.selectedOpacity})`:s(t,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${l} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:s(t,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${l} / ${e.vars.palette.action.selectedOpacity})`:s(t,e.palette.action.selectedOpacity)}}},...a.size==="small"&&{padding:7,fontSize:e.typography.pxToRem(13)},...a.size==="large"&&{padding:15,fontSize:e.typography.pxToRem(15)}}}),W=B.forwardRef(function(a,t){const l=M({props:a,name:"MuiToggleButton"}),{children:n,className:i,color:r="standard",disabled:o=!1,disableFocusRipple:c=!1,fullWidth:v=!1,onChange:u,onClick:f,selected:T,size:C="medium",value:p,...R}=l,m={...l,color:r,disabled:o,disableFocusRipple:c,fullWidth:v,size:C},V=P(m),k=d=>{f&&(f(d,p),d.defaultPrevented)||u&&u(d,p)};return b(N,{className:z(V.root,i),disabled:o,focusRipple:!c,ref:t,onClick:k,onChange:u,value:p,ownerState:m,"aria-pressed":T,...R,children:n})}),_=W,g=({children:e,...a})=>b(_,{...a,disableFocusRipple:!0,disableRipple:!0,children:e});try{g.displayName="ToggleButton",g.__docgenInfo={description:"",displayName:"ToggleButton",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'small'"},description:"The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ToggleButtonClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:`Callback fired when the state changes.
@param event The event source of the callback.
@param value of the selected button.`,name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},onClick:{defaultValue:null,description:`Callback fired when the button is clicked.
@param event The event source of the callback.
@param value of the selected button.`,name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},value:{defaultValue:null,description:`The value to associate with the button when selected in a
ToggleButtonGroup.`,name:"value",required:!0,type:{name:"{}"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"If `true`, the button is rendered in an active state.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}export{g as T};
//# sourceMappingURL=ToggleButton-00dd7b28.js.map
