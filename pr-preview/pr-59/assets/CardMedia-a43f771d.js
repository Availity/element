import{j as c}from"./jsx-runtime-91a467a5.js";import{r as y}from"./index-8db94870.js";import{b as M,g as h,s as v,c as b,a as N}from"./styled-cb03d4d5.js";import{c as S}from"./useThemeProps-911242ec.js";function x(e){return M("MuiCardMedia",e)}h("MuiCardMedia",["root","media","img"]);const _=e=>{const{classes:a,isMediaComponent:t,isImageComponent:s}=e;return N({root:["root",t&&"media",s&&"img"]},x,a)},w=v("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e,{isMediaComponent:s,isImageComponent:i}=t;return[a.root,s&&a.media,i&&a.img]}})(({ownerState:e})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...e.isMediaComponent&&{width:"100%"},...e.isImageComponent&&{objectFit:"cover"}})),I=["video","audio","picture","iframe","img"],q=["picture","img"],P=y.forwardRef(function(a,t){const s=S({props:a,name:"MuiCardMedia"}),{children:i,className:p,component:o="div",image:r,src:u,style:d,...f}=s,n=I.indexOf(o)!==-1,g=!n&&r?{backgroundImage:`url("${r}")`,...d}:d,l={...s,component:o,isMediaComponent:n,isImageComponent:q.indexOf(o)!==-1},C=_(l);return c(w,{className:b(C.root,p),as:o,role:!n&&r?"img":void 0,ref:t,style:g,ownerState:l,src:n?r||u:void 0,...f,children:i})}),V=P,m=({children:e,...a})=>c(V,{...a,children:e});try{m.displayName="CardMedia",m.__docgenInfo={description:"",displayName:"CardMedia",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CardMediaClasses> & Partial<ClassNameMap<never>>"}},image:{defaultValue:null,description:"Image to be displayed as a background image.\nEither `image` or `src` prop must be specified.\nNote that caller must specify height otherwise the image will not be visible.",name:"image",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"An alias for `image` property.\nAvailable only with media components.\nMedia components: `video`, `audio`, `picture`, `iframe`, `img`.",name:"src",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}export{m as C};
//# sourceMappingURL=CardMedia-a43f771d.js.map
