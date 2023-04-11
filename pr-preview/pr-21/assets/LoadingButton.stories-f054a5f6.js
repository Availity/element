import{j as p,a as O}from"./jsx-runtime-670450c2.js";import{r as R,a as G}from"./index-f1f749bf.js";import{g as z,a as F,s as y,j as d,_ as b,b as D,e as H,f as K,h as j}from"./useThemeProps-d48512ed.js";import{B as Z}from"./Button-0e8751ce.js";import{k as U,c as A}from"./emotion-react.browser.esm-5cb50a94.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./ButtonBase-76de189a.js";import"./inheritsLoose-d374ba88.js";import"./useForkRef-d38d61a7.js";let q=0;function J(t){const[e,a]=R.useState(t),n=t||e;return R.useEffect(()=>{e==null&&(q+=1,a(`mui-${q}`))},[e]),n}const T=G["useId"];function Q(t){if(T!==void 0){const e=T();return t??e}return J(t)}function X(t){return z("MuiCircularProgress",t)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Y=["className","color","disableShrink","size","style","thickness","value","variant"];let C=t=>t,E,_,w,S;const l=44,ee=U(E||(E=C`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),te=U(_||(_=C`
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
`)),ae=t=>{const{classes:e,variant:a,color:n,disableShrink:o}=t,i={root:["root",a,`color${d(n)}`],svg:["svg"],circle:["circle",`circle${d(a)}`,o&&"circleDisableShrink"]};return j(i,X,e)},ne=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e[`color${d(a.color)}`]]}})(({ownerState:t,theme:e})=>b({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&A(w||(w=C`
      animation: ${0} 1.4s linear infinite;
    `),ee)),oe=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),ie=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.circle,e[`circle${d(a.variant)}`],a.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>b({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&A(S||(S=C`
      animation: ${0} 1.4s ease-in-out infinite;
    `),te)),re=R.forwardRef(function(e,a){const n=D({props:e,name:"MuiCircularProgress"}),{className:o,color:i="primary",disableShrink:V=!1,size:c=40,style:I,thickness:g=3.6,value:m=0,variant:P="indeterminate"}=n,L=H(n,Y),u=b({},n,{color:i,disableShrink:V,size:c,thickness:g,value:m,variant:P}),r=ae(u),h={},v={},B={};if(P==="determinate"){const $=2*Math.PI*((l-g)/2);h.strokeDasharray=$.toFixed(3),B["aria-valuenow"]=Math.round(m),h.strokeDashoffset=`${((100-m)/100*$).toFixed(3)}px`,v.transform="rotate(-90deg)"}return p(ne,b({className:K(r.root,o),style:b({width:c,height:c},v,I),ownerState:u,ref:a,role:"progressbar"},B,L,{children:p(oe,{className:r.svg,ownerState:u,viewBox:`${l/2} ${l/2} ${l} ${l}`,children:p(ie,{className:r.circle,style:h,ownerState:u,cx:l,cy:l,r:(l-g)/2,fill:"none",strokeWidth:g})})}))}),se=re;function le(t,e){if(t==null)return{};var a={},n=Object.keys(t),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(a[o]=t[o]);return a}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},f.apply(this,arguments)}function de(t){return z("MuiLoadingButton",t)}const ce=F("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),s=ce,ue=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],pe=t=>{const{loading:e,loadingPosition:a,classes:n}=t,o={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${d(a)}`],endIcon:[e&&`endIconLoading${d(a)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${d(a)}`]},i=j(o,de,n);return f({},n,i)},fe=t=>t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"&&t!=="classes",ge=y(Z,{shouldForwardProp:t=>fe(t)||t==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,e)=>[e.root,e.startIconLoadingStart&&{[`& .${s.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${s.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:t,theme:e})=>f({[`& .${s.startIconLoadingStart}, & .${s.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},t.loadingPosition==="center"&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${s.loading}`]:{color:"transparent"}},t.loadingPosition==="start"&&t.fullWidth&&{[`& .${s.startIconLoadingStart}, & .${s.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},t.loadingPosition==="end"&&t.fullWidth&&{[`& .${s.startIconLoadingStart}, & .${s.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}})),me=y("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.loadingIndicator,e[`loadingIndicator${d(a.loadingPosition)}`]]}})(({theme:t,ownerState:e})=>f({position:"absolute",visibility:"visible",display:"flex"},e.loadingPosition==="start"&&(e.variant==="outlined"||e.variant==="contained")&&{left:e.size==="small"?10:14},e.loadingPosition==="start"&&e.variant==="text"&&{left:6},e.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},e.loadingPosition==="end"&&(e.variant==="outlined"||e.variant==="contained")&&{right:e.size==="small"?10:14},e.loadingPosition==="end"&&e.variant==="text"&&{right:6},e.loadingPosition==="start"&&e.fullWidth&&{position:"relative",left:-10},e.loadingPosition==="end"&&e.fullWidth&&{position:"relative",right:-10})),he=R.forwardRef(function(e,a){const n=D({props:e,name:"MuiLoadingButton"}),{children:o,disabled:i=!1,id:V,loading:c=!1,loadingIndicator:I,loadingPosition:g="center",variant:m="text"}=n,P=le(n,ue),L=Q(V),u=I??p(se,{"aria-labelledby":L,color:"inherit",size:16}),r=f({},n,{disabled:i,loading:c,loadingIndicator:u,loadingPosition:g,variant:m}),h=pe(r),v=c?p(me,{className:h.loadingIndicator,ownerState:r,children:u}):null;return O(ge,f({disabled:i||c,id:L,ref:a},P,{variant:m,classes:h,ownerState:r,children:[r.loadingPosition==="end"?o:v,r.loadingPosition==="end"?v:o]}))}),ve=he,k=({children:t,...e})=>p(ve,{...e,children:t});try{k.displayName="LoadingButton",k.__docgenInfo={description:"",displayName:"LoadingButton",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & { root?: string; loading?: string; loadingIndicator?: string; loadingIndicatorCenter?: string; loadingIndicatorStart?: string; loadingIndicatorEnd?: string; endIconLoadingEnd?: string; startIconLoadingStart?: string; } & Partial<...>"}},loading:{defaultValue:{value:"false"},description:"If `true`, the loading indicator is shown.",name:"loading",required:!1,type:{name:"boolean"}},loadingIndicator:{defaultValue:{value:'<CircularProgress color="inherit" size={16} />'},description:'Element placed before the children if the button is in loading state.\nThe node should contain an element with `role="progressbar"` with an accessible name.\nBy default we render a `CircularProgress` that is labelled by the button itself.',name:"loadingIndicator",required:!1,type:{name:"ReactNode"}},loadingPosition:{defaultValue:{value:"'center'"},description:"The loading indicator can be positioned on the start, end, or the center of the button.",name:"loadingPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}const qe={title:"Components/Button/LoadingButton",component:k,tags:["autodocs"],args:{loading:!0,color:"primary",variant:"contained"}},x={render:({...t})=>p(k,{loadingPosition:"start",...t,children:"Primary"})};var M,N,W;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: ({
    ...args
  }: LoadingButtonProps) => <LoadingButton loadingPosition='start' {...args}>Primary</LoadingButton>
}`,...(W=(N=x.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const Te=["_LoadingButton"];export{x as _LoadingButton,Te as __namedExportsOrder,qe as default};
//# sourceMappingURL=LoadingButton.stories-f054a5f6.js.map
