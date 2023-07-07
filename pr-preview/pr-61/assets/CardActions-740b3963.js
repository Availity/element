import{j as r}from"./jsx-runtime-91a467a5.js";import{r as p}from"./index-8db94870.js";import{a as u,g as m,s as f,c as C,b as g}from"./styled-0cac7ee0.js";import{b as y}from"./useThemeProps-4a2bd4cc.js";function h(e){return u("MuiCardActions",e)}m("MuiCardActions",["root","spacing"]);const A=e=>{const{classes:s,disableSpacing:t}=e;return g({root:["root",!t&&"spacing"]},h,s)},S=f("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,!t.disableSpacing&&s.spacing]}})(({ownerState:e})=>({display:"flex",alignItems:"center",padding:8,...!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),b=p.forwardRef(function(s,t){const a=y({props:s,name:"MuiCardActions"}),{disableSpacing:i=!1,className:l,...c}=a,o={...a,disableSpacing:i},d=A(o);return r(S,{className:C(d.root,l),ownerState:o,ref:t,...c})}),x=b,n=({children:e,...s})=>r(x,{...s,children:e});try{n.displayName="CardActions",n.__docgenInfo={description:"",displayName:"CardActions",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CardActionsClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disableSpacing:{defaultValue:{value:"false"},description:"If `true`, the actions do not have additional margin.",name:"disableSpacing",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{n as C};
//# sourceMappingURL=CardActions-740b3963.js.map
