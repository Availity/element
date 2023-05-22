import{j as s}from"./jsx-runtime-58698645.js";import{r as u}from"./index-ccf6a75d.js";import{M as g}from"./Paper-65d50a0d.js";import{s as B,a as y,f as N,T}from"./useThemeProps-d5da9973.js";import{d as C,c as q,C as I}from"./styled-90a9d686.js";import{e as w}from"./extendSxProp-5f4cf8f1.js";import"./extends-79cb841a.js";function M(e={}){const{themeId:a,defaultTheme:d,defaultClassName:r="MuiBox-root",generateClassName:c}=e,f=C("div",{shouldForwardProp:t=>t!=="theme"&&t!=="sx"&&t!=="as"})(B);return u.forwardRef(function(h,x){const i=y(d),{className:P,component:v="div",..._}=w(h);return s(f,{as:v,ref:x,className:q(P,c?c(r):r),theme:a&&i[a]||i,..._})})}const b=N(),E=M({themeId:T,defaultTheme:b,defaultClassName:"MuiBox-root",generateClassName:I.generate}),R=E,n=u.forwardRef(({children:e,variant:a="outlined",...d},r)=>s(g,{variant:a,...d,ref:r,children:e}));try{n.displayName="Paper",n.__docgenInfo={description:"",displayName:"Paper",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"outlined"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"elevation" | "outlined"'}}}}}catch{}const $={title:"Components/Paper/Paper",component:n,tags:["autodocs"]},o={render:({children:e,...a})=>s(n,{...a,children:s(R,{p:5,children:e})}),args:{children:"This text is a child of Paper"}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    children,
    ...args
  }: PaperProps) => <Paper {...args}>
      <Box p={5}>{children}</Box>
    </Paper>,
  args: {
    children: 'This text is a child of Paper'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["_Paper"];export{o as _Paper,k as __namedExportsOrder,$ as default};
//# sourceMappingURL=Paper.stories-d8b2957e.js.map
