import{j as a,a as U}from"./jsx-runtime-91a467a5.js";import{r as R}from"./index-8db94870.js";import{O}from"./index-799d6194.js";import{L as M}from"./Link-89ac0301.js";import"./_commonjsHelpers-042e6b4d.js";import"./faMagnifyingGlass-d219cdaa.js";import"./faCircleArrowRight-30157e88.js";import"./SvgIcon-ca7a5f5b.js";import"./styled-bbc4db24.js";import"./useThemeProps-0aafcae6.js";import"./extends-bab83b91.js";import"./Typography-184ba4ea.js";import"./extendSxProp-e5ca4f7c.js";import"./useIsFocusVisible-bbf13f29.js";import"./useForkRef-2674f3de.js";const W=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,j=/^[a-zA-Z]:\\/;function G(e){return j.test(e)?!1:W.test(e)}const H=(e="")=>`/public/apps/home/#!/loadApp?appUrl=${encodeURIComponent(e)}`,z=e=>{const t=document.createElement("a");return t.href=e,t},B=(e,t,n)=>{if(t==="_blank"&&n&&z(e).hostname!==window.location.hostname)return"noopener noreferrer"},r=R.forwardRef((e,t)=>{const{href:n,target:i="_self",children:I,onClick:c,loadApp:q=!0,rel:N,...P}=e,m=G(n),d=!(m||!q)?H(n):n,V=i==="_blank"?a(O,{}):null;return a(M,{href:d,target:i,onClick:S=>c&&c(S,d),rel:N||B(d,i,m),underline:"hover",...P,ref:t,children:U("span",{children:[I," ",V]})})});try{r.displayName="Link",r.__docgenInfo={description:"",displayName:"Link",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<LinkClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},target:{defaultValue:null,description:"Where to open the linked document. Adds `OpenInNewIcon` when target is `_blank`",name:"target",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"Url of the page the link goes to",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Function to run onClick of the link. The first argument passed to onClick is the event. The second argument is the processed url.",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, url: string) => void) & MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<...>"}},align:{defaultValue:{value:"'inherit'"},description:"Set the text-align on the component.",name:"align",required:!1,type:{name:'"center" | "inherit" | "left" | "right" | "justify"'}},gutterBottom:{defaultValue:{value:"false"},description:"If `true`, the text will have a bottom margin.",name:"gutterBottom",required:!1,type:{name:"boolean"}},paragraph:{defaultValue:{value:"false"},description:"If `true`, the element will be a paragraph element.",name:"paragraph",required:!1,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},TypographyClasses:{defaultValue:null,description:"`classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.",name:"TypographyClasses",required:!1,type:{name:"Partial<TypographyClasses> & Partial<ClassNameMap<never>>"}},loadApp:{defaultValue:{value:"true"},description:"format href to leverage loadApp within home iframe when relative url used.",name:"loadApp",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Components/Link/Link",component:r,tags:["autodocs"],args:{href:"#"},parameters:{docs:{description:{component:"Simple link component that renders an `<a>` tag with the href formatted to leverage loadApp so the link gets loaded inside the home page's iframe"}}}},l={render:e=>a(r,{...e}),args:{loadApp:!0,children:"This text is a child of Link"}},o={render:e=>a(r,{...e,loadApp:!1,target:"_blank"}),args:{children:"Link opens in new window"}},p={render:e=>a(r,{...e,href:"https://github.com/Availity",target:"_blank"}),args:{children:"Availity Github"}},s={render:e=>a(r,{...e,href:"/public/apps/portal-app"}),args:{children:"Portal App"}};var u,h,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} />,
  args: {
    loadApp: true,
    children: 'This text is a child of Link'
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,k,y,_,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} loadApp={false} target="_blank" />,
  args: {
    children: 'Link opens in new window'
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:"The `OpenInNewIcon` has an accessible name to tell screenreaders that it opens in a new window.",...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.description}}};var v,A,L;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} href="https://github.com/Availity" target="_blank" />,
  args: {
    children: 'Availity Github'
  }
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var b,C,T,E,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} href="/public/apps/portal-app" />,
  args: {
    children: 'Portal App'
  }
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Inspect the link to see the `loadApp` url transformation in action.",...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.description}}};const le=["_Link","_NewWindow","_AbsoluteUrl","_RelativeUrl"];export{p as _AbsoluteUrl,l as _Link,o as _NewWindow,s as _RelativeUrl,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=Link.stories-cbeb7e60.js.map