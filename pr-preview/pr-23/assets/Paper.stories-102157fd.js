import{j as o}from"./jsx-runtime-91a467a5.js";import{r as m}from"./index-8db94870.js";import{P as g}from"./Paper-a679b040.js";import{s as B,b as y,g as N,T}from"./useThemeProps-bbf3a6ab.js";import{d as C,c as q,C as I}from"./styled-83dce9db.js";import{e as b}from"./extendSxProp-762405d5.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-bab83b91.js";function w(e={}){const{themeId:a,defaultTheme:u,defaultClassName:d="MuiBox-root",generateClassName:c}=e,f=C("div",{shouldForwardProp:r=>r!=="theme"&&r!=="sx"&&r!=="as"})(B);return m.forwardRef(function(h,x){const n=y(u),{className:P,component:v="div",..._}=b(h);return o(f,{as:v,ref:x,className:q(P,c?c(d):d),theme:a&&n[a]||n,..._})})}const E=N(),R=w({themeId:T,defaultTheme:E,defaultClassName:"MuiBox-root",generateClassName:I.generate}),S=R,s=m.forwardRef((e,a)=>o(g,{...e,ref:a}));try{s.displayName="Paper",s.__docgenInfo={description:"",displayName:"Paper",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'outlined'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"elevation" | "outlined"'}}}}}catch{}const k={title:"Components/Paper/Paper",component:s,tags:["autodocs"]},t={render:({children:e,...a})=>o(s,{...a,children:o(S,{p:5,children:e})}),args:{children:"This text is a child of Paper"}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    children,
    ...args
  }: PaperProps) => <Paper {...args}>
      <Box p={5}>{children}</Box>
    </Paper>,
  args: {
    children: 'This text is a child of Paper'
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const z=["_Paper"];export{t as _Paper,z as __namedExportsOrder,k as default};
//# sourceMappingURL=Paper.stories-102157fd.js.map
