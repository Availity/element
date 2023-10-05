import{j as n,a as h}from"./jsx-runtime-390e5fc8.js";import{r as x}from"./index-570b25c1.js";import{c as N}from"./clsx.m-fb33c42b.js";import{u as w}from"./useThemeProps-5f33a28c.js";import{g as R,s as d,c as M}from"./styled-fc2b35f5.js";import{g as S}from"./generateUtilityClasses-8a827d83.js";import{M as i}from"./Typography-bf8f4457.js";function q(a){return R("MuiCardHeader",a)}const V=S("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=V,_=a=>{const{classes:e}=a;return M({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},q,e)},j=d("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>({[`& .${f.title}`]:e.title,[`& .${f.subheader}`]:e.subheader,...e.root})})({display:"flex",alignItems:"center",padding:16}),A=d("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),U=d("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),$=d("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),I=x.forwardRef(function(e,c){const u=w({props:e,name:"MuiCardHeader"}),{action:m,avatar:l,className:C,component:y="div",disableTypography:p=!1,subheader:b,subheaderTypographyProps:v,title:T,titleTypographyProps:P,...H}=u,r={...u,component:y,disableTypography:p},t=_(r);let s=T;s!=null&&s.type!==i&&!p&&(s=n(i,{variant:l?"body2":"h5",className:t.title,component:"span",display:"block",...P,children:s}));let o=b;return o!=null&&o.type!==i&&!p&&(o=n(i,{variant:l?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block",...v,children:o})),h(j,{className:N(t.root,C),as:y,ref:c,ownerState:r,...H,children:[l&&n(A,{className:t.avatar,ownerState:r,children:l}),h($,{className:t.content,ownerState:r,children:[s,o]}),m&&n(U,{className:t.action,ownerState:r,children:m})]})}),O=I,g=({...a})=>n(O,{...a,titleTypographyProps:{variant:"h6"},subheaderTypographyProps:{variant:"subtitle2"}});try{g.displayName="CardHeader",g.__docgenInfo={description:"",displayName:"CardHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CardHeaderClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},title:{defaultValue:null,description:"The content of the component.",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"The action to display in the card header.",name:"action",required:!1,type:{name:"ReactNode"}},disableTypography:{defaultValue:{value:"false"},description:"If `true`, `subheader` and `title` won't be wrapped by a Typography component.\nThis can be useful to render an alternative Typography variant by wrapping\nthe `title` text, and optional `subheader` text\nwith the Typography component.",name:"disableTypography",required:!1,type:{name:"boolean"}},subheader:{defaultValue:null,description:"The content of the component.",name:"subheader",required:!1,type:{name:"ReactNode"}},subheaderTypographyProps:{defaultValue:null,description:"These props will be forwarded to the subheader\n(as long as disableTypography is not `true`).",name:"subheaderTypographyProps",required:!1,type:{name:'{ component?: "span"; } & SystemProps<Theme> & { align?: "center" | "inherit" | "left" | "right" | "justify"; children?: ReactNode; classes?: Partial<TypographyClasses>; ... 5 more ...; variantMapping?: Partial<...>; } & CommonProps & Omit<...>'}},titleTypographyProps:{defaultValue:null,description:"These props will be forwarded to the title\n(as long as disableTypography is not `true`).",name:"titleTypographyProps",required:!1,type:{name:'{ component?: "span"; } & SystemProps<Theme> & { align?: "center" | "inherit" | "left" | "right" | "justify"; children?: ReactNode; classes?: Partial<TypographyClasses>; ... 5 more ...; variantMapping?: Partial<...>; } & CommonProps & Omit<...>'}}}}}catch{}export{g as C};
//# sourceMappingURL=CardHeader-0be4ff06.js.map
