import{j as p,a as D}from"./jsx-runtime-58698645.js";import{r as S}from"./index-ccf6a75d.js";import{g as _,a as M,s as y,c as U,b as N}from"./styled-b3e680f5.js";import{B as A}from"./Button-a9400da7.js";import{c as d,u as F}from"./useThemeProps-c0c32908.js";import{k as z,c as W}from"./emotion-react.browser.esm-3bd7d3fd.js";import{u as j}from"./useId-d8556e82.js";import"./extends-79cb841a.js";import"./ButtonBase-7cbb2f51.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-75c8d838.js";function G(t){return _("MuiCircularProgress",t)}M("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let C=t=>t,V,B,q,$;const l=44,H=z(V||(V=C`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),K=z(B||(B=C`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),O=t=>{const{classes:e,variant:a,color:o,disableShrink:r}=t,s={root:["root",a,`color${d(o)}`],svg:["svg"],circle:["circle",`circle${d(a)}`,r&&"circleDisableShrink"]};return N(s,G,e)},Z=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e[`color${d(a.color)}`]]}})(({ownerState:t,theme:e})=>({display:"inline-block",...t.variant==="determinate"&&{transition:e.transitions.create("transform")},...t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}}),({ownerState:t})=>t.variant==="indeterminate"&&W(q||(q=C`
      animation: ${0} 1.4s linear infinite;
    `),H)),J=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),Q=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.circle,e[`circle${d(a.variant)}`],a.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>({stroke:"currentColor",...t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},...t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&W($||($=C`
      animation: ${0} 1.4s ease-in-out infinite;
    `),K)),X=S.forwardRef(function(e,a){const o=F({props:e,name:"MuiCircularProgress"}),{className:r,color:s="primary",disableShrink:R=!1,size:c=40,style:b,thickness:f=3.6,value:m=0,variant:v="indeterminate",...I}=o,u={...o,color:s,disableShrink:R,size:c,thickness:f,value:m,variant:v},n=O(u),g={},h={},k={};if(v==="determinate"){const x=2*Math.PI*((l-f)/2);g.strokeDasharray=x.toFixed(3),k["aria-valuenow"]=Math.round(m),g.strokeDashoffset=`${((100-m)/100*x).toFixed(3)}px`,h.transform="rotate(-90deg)"}return p(Z,{className:U(n.root,r),style:{width:c,height:c,...h,...b},ownerState:u,ref:a,role:"progressbar",...k,...I,children:p(J,{className:n.svg,ownerState:u,viewBox:`${l/2} ${l/2} ${l} ${l}`,children:p(Q,{className:n.circle,style:g,ownerState:u,cx:l,cy:l,r:(l-f)/2,fill:"none",strokeWidth:f})})})}),Y=X;function ee(t){return _("MuiLoadingButton",t)}const te=M("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),i=te,ae=t=>{const{loading:e,loadingPosition:a,classes:o}=t,r={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${d(a)}`],endIcon:[e&&`endIconLoading${d(a)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${d(a)}`]},s=N(r,ee,o);return{...o,...s}},oe=t=>t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"&&t!=="classes",ne=y(A,{shouldForwardProp:t=>oe(t)||t==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,e)=>[e.root,e.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:t,theme:e})=>({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0},...t.loadingPosition==="center"&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},...t.loadingPosition==="start"&&t.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},...t.loadingPosition==="end"&&t.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}})),ie=y("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.loadingIndicator,e[`loadingIndicator${d(a.loadingPosition)}`]]}})(({theme:t,ownerState:e})=>({position:"absolute",visibility:"visible",display:"flex",...e.loadingPosition==="start"&&(e.variant==="outlined"||e.variant==="contained")&&{left:e.size==="small"?10:14},...e.loadingPosition==="start"&&e.variant==="text"&&{left:6},...e.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},...e.loadingPosition==="end"&&(e.variant==="outlined"||e.variant==="contained")&&{right:e.size==="small"?10:14},...e.loadingPosition==="end"&&e.variant==="text"&&{right:6},...e.loadingPosition==="start"&&e.fullWidth&&{position:"relative",left:-10},...e.loadingPosition==="end"&&e.fullWidth&&{position:"relative",right:-10}})),re=S.forwardRef(function(e,a){const o=F({props:e,name:"MuiLoadingButton"}),{children:r,disabled:s=!1,id:R,loading:c=!1,loadingIndicator:b,loadingPosition:f="center",variant:m="text",...v}=o,I=j(R),u=b??p(Y,{"aria-labelledby":I,color:"inherit",size:16}),n={...o,disabled:s,loading:c,loadingIndicator:u,loadingPosition:f,variant:m},g=ae(n),h=c?p(ie,{className:g.loadingIndicator,ownerState:n,children:u}):null;return D(ne,{disabled:s||c,id:I,ref:a,...v,variant:m,classes:g,ownerState:n,children:[n.loadingPosition==="end"?r:h,n.loadingPosition==="end"?h:r]})}),se=re,L=({children:t,...e})=>p(se,{...e,children:t});try{L.displayName="LoadingButton",L.__docgenInfo={description:"",displayName:"LoadingButton",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & { root?: string; loading?: string; loadingIndicator?: string; loadingIndicatorCenter?: string; loadingIndicatorStart?: string; loadingIndicatorEnd?: string; endIconLoadingEnd?: string; startIconLoadingStart?: string; } & Partial<...>"}},loading:{defaultValue:{value:"false"},description:"If `true`, the loading indicator is shown.",name:"loading",required:!1,type:{name:"boolean"}},loadingIndicator:{defaultValue:{value:'<CircularProgress color="inherit" size={16} />'},description:'Element placed before the children if the button is in loading state.\nThe node should contain an element with `role="progressbar"` with an accessible name.\nBy default we render a `CircularProgress` that is labelled by the button itself.',name:"loadingIndicator",required:!1,type:{name:"ReactNode"}},loadingPosition:{defaultValue:{value:"'center'"},description:"The loading indicator can be positioned on the start, end, or the center of the button.",name:"loadingPosition",required:!1,type:{name:'"center" | "end" | "start"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning"'}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}const Ie={title:"Components/Button/LoadingButton",component:L,tags:["autodocs"],args:{loading:!0,color:"primary",variant:"contained"}},P={render:({...t})=>p(L,{loadingPosition:"start",...t,children:"Primary"})};var T,E,w;P.parameters={...P.parameters,docs:{...(T=P.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    ...args
  }: LoadingButtonProps) => <LoadingButton loadingPosition='start' {...args}>Primary</LoadingButton>
}`,...(w=(E=P.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const Pe=["_LoadingButton"];export{P as _LoadingButton,Pe as __namedExportsOrder,Ie as default};
//# sourceMappingURL=LoadingButton.stories-718cdfc4.js.map
