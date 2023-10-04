import{j as i}from"./jsx-runtime-390e5fc8.js";import{b as o,e as m}from"./createTheme-b02e766d.js";import{r as u}from"./index-570b25c1.js";import{c as f}from"./clsx-43049957.js";import{g,s as C,a as y}from"./styled-69a32198.js";import{u as h}from"./useThemeProps-ac7867ed.js";import{g as A}from"./generateUtilityClasses-b06d554b.js";function S(e){return g("MuiCardActions",e)}A("MuiCardActions",["root","spacing"]);const x=["disableSpacing","className"],_=e=>{const{classes:s,disableSpacing:t}=e;return y({root:["root",!t&&"spacing"]},S,s)},b=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,!t.disableSpacing&&s.spacing]}})(({ownerState:e})=>o({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),v=u.forwardRef(function(s,t){const a=h({props:s,name:"MuiCardActions"}),{disableSpacing:l=!1,className:c}=a,d=m(a,x),r=o({},a,{disableSpacing:l}),p=_(r);return i(b,o({className:f(p.root,c),ownerState:r,ref:t},d))}),w=v,n=({children:e,...s})=>i(w,{...s,children:e});try{n.displayName="CardActions",n.__docgenInfo={description:"",displayName:"CardActions",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CardActionsClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disableSpacing:{defaultValue:{value:"false"},description:"If `true`, the actions do not have additional margin.",name:"disableSpacing",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{n as C};
//# sourceMappingURL=CardActions-306266ef.js.map
