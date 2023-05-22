import{j as o,a as T}from"./jsx-runtime-58698645.js";import{S as V}from"./index-bee9cb18.js";import{r as G}from"./index-ccf6a75d.js";import{a as D,g as W,s as y,c as j,b as w}from"./styled-a59e08e5.js";import{B as H}from"./Button-7a4eb1c2.js";import{c,u as z}from"./useThemeProps-cd8be639.js";import{k as F,c as U}from"./emotion-react.browser.esm-a2dfcabe.js";import{u as K}from"./useId-d8556e82.js";import{G as P}from"./Grid-78946470.js";import"./faMagnifyingGlass-8ccf1391.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-f97c6cbd.js";import"./extends-79cb841a.js";import"./ButtonBase-e9bad826.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-75c8d838.js";import"./extendSxProp-538a3ba9.js";function O(n){return D("MuiCircularProgress",n)}W("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let C=n=>n,S,E,q,R;const d=44,Z=F(S||(S=C`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),J=F(E||(E=C`
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
`)),Q=n=>{const{classes:e,variant:t,color:a,disableShrink:i}=n,r={root:["root",t,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(t)}`,i&&"circleDisableShrink"]};return w(r,O,e)},X=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],e[`color${c(t.color)}`]]}})(({ownerState:n,theme:e})=>({display:"inline-block",...n.variant==="determinate"&&{transition:e.transitions.create("transform")},...n.color!=="inherit"&&{color:(e.vars||e).palette[n.color].main}}),({ownerState:n})=>n.variant==="indeterminate"&&U(q||(q=C`
      animation: ${0} 1.4s linear infinite;
    `),Z)),Y=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(n,e)=>e.svg})({display:"block"}),ee=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.circle,e[`circle${c(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(({ownerState:n,theme:e})=>({stroke:"currentColor",...n.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},...n.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}}),({ownerState:n})=>n.variant==="indeterminate"&&!n.disableShrink&&U(R||(R=C`
      animation: ${0} 1.4s ease-in-out infinite;
    `),J)),ne=G.forwardRef(function(e,t){const a=z({props:e,name:"MuiCircularProgress"}),{className:i,color:r="primary",disableShrink:k=!1,size:u=40,style:v,thickness:g=3.6,value:m=0,variant:b="indeterminate",...L}=a,p={...a,color:r,disableShrink:k,size:u,thickness:g,value:m,variant:b},s=Q(p),f={},I={},B={};if(b==="determinate"){const $=2*Math.PI*((d-g)/2);f.strokeDasharray=$.toFixed(3),B["aria-valuenow"]=Math.round(m),f.strokeDashoffset=`${((100-m)/100*$).toFixed(3)}px`,I.transform="rotate(-90deg)"}return o(X,{className:j(s.root,i),style:{width:u,height:u,...I,...v},ownerState:p,ref:t,role:"progressbar",...B,...L,children:o(Y,{className:s.svg,ownerState:p,viewBox:`${d/2} ${d/2} ${d} ${d}`,children:o(ee,{className:s.circle,style:f,ownerState:p,cx:d,cy:d,r:(d-g)/2,fill:"none",strokeWidth:g})})})}),A=ne;function te(n){return D("MuiLoadingButton",n)}const oe=W("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),l=oe,ae=n=>{const{loading:e,loadingPosition:t,classes:a}=n,i={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${c(t)}`],endIcon:[e&&`endIconLoading${c(t)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${c(t)}`]},r=w(i,te,a);return{...a,...r}},ie=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",re=y(H,{shouldForwardProp:n=>ie(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,e)=>[e.root,e.startIconLoadingStart&&{[`& .${l.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${l.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:n,theme:e})=>({[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0},...n.loadingPosition==="center"&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${l.loading}`]:{color:"transparent"}},...n.loadingPosition==="start"&&n.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},...n.loadingPosition==="end"&&n.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}})),se=y("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.loadingIndicator,e[`loadingIndicator${c(t.loadingPosition)}`]]}})(({theme:n,ownerState:e})=>({position:"absolute",visibility:"visible",display:"flex",...e.loadingPosition==="start"&&(e.variant==="outlined"||e.variant==="contained")&&{left:e.size==="small"?10:14},...e.loadingPosition==="start"&&e.variant==="text"&&{left:6},...e.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},...e.loadingPosition==="end"&&(e.variant==="outlined"||e.variant==="contained")&&{right:e.size==="small"?10:14},...e.loadingPosition==="end"&&e.variant==="text"&&{right:6},...e.loadingPosition==="start"&&e.fullWidth&&{position:"relative",left:-10},...e.loadingPosition==="end"&&e.fullWidth&&{position:"relative",right:-10}})),le=G.forwardRef(function(e,t){const a=z({props:e,name:"MuiLoadingButton"}),{children:i,disabled:r=!1,id:k,loading:u=!1,loadingIndicator:v,loadingPosition:g="center",variant:m="text",...b}=a,L=K(k),p=v??o(A,{"aria-labelledby":L,color:"inherit",size:16}),s={...a,disabled:r,loading:u,loadingIndicator:p,loadingPosition:g,variant:m},f=ae(s),I=u?o(se,{className:f.loadingIndicator,ownerState:s,children:p}):null;return T(re,{disabled:r||u,id:L,ref:t,...b,variant:m,classes:f,ownerState:s,children:[s.loadingPosition==="end"?i:I,s.loadingPosition==="end"?I:i]})}),de=le,ce=o(A,{color:"inherit",size:16,"aria-label":"loading"}),h=({children:n,loading:e,...t})=>{const a=t.startIcon?"start":"end",i=t.startIcon||t.endIcon||e?{}:{padding:"0 .7rem"},r=t.startIcon?void 0:o("span",{style:e?{padding:"0 .7rem"}:{}});return o(de,{endIcon:r,loadingPosition:a,loading:e,disableRipple:!0,loadingIndicator:ce,...t,children:o("span",{style:i,children:n})})};try{h.displayName="LoadingButton",h.__docgenInfo={description:"",displayName:"LoadingButton",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},color:{defaultValue:null,description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & { root?: string; loading?: string; loadingIndicator?: string; loadingIndicatorCenter?: string; loadingIndicatorStart?: string; loadingIndicatorEnd?: string; endIconLoadingEnd?: string; startIconLoadingStart?: string; } & Partial<...>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"If `true`, the loading indicator is shown.",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const Se={title:"Components/Button/LoadingButton",component:h,tags:["autodocs"],args:{loading:!0,color:"primary",variant:"contained"}},x={render:({...n})=>T(P,{container:!0,spacing:1,children:[o(P,{item:!0,xs:12,children:o(h,{...n,children:"No Icon"})}),o(P,{item:!0,xs:12,children:o(h,{...n,startIcon:o(V,{}),loadingPosition:"start",children:"Start Icon"})}),o(P,{item:!0,xs:12,children:o(h,{...n,endIcon:o(V,{}),children:"End Icon"})})]})};var _,M,N;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: ({
    ...args
  }: LoadingButtonProps) => <Grid container spacing={1}>
        <Grid item xs={12}>
          <LoadingButton {...args}>No Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} startIcon={<SearchIcon />} loadingPosition='start'>Start Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} endIcon={<SearchIcon />}>End Icon</LoadingButton>
        </Grid>
      </Grid>
}`,...(N=(M=x.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Ee=["_LoadingButton"];export{x as _LoadingButton,Ee as __namedExportsOrder,Se as default};
//# sourceMappingURL=LoadingButton.stories-93946dd8.js.map
