import{j as n}from"./jsx-runtime-91a467a5.js";import{r as V}from"./index-8db94870.js";import{s as b,c as S,b as I}from"./styled-d3429e37.js";import{e as A,b as R}from"./useThemeProps-6f56c469.js";import{g as _}from"./dividerClasses-9ee98f1e.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-bab83b91.js";const q=e=>{const{absolute:t,children:i,classes:o,flexItem:c,light:l,orientation:r,textAlign:a,variant:p}=e;return I({root:["root",t&&"absolute",p,l&&"light",r==="vertical"&&"vertical",c&&"flexItem",i&&"withChildren",i&&r==="vertical"&&"withChildrenVertical",a==="right"&&r!=="vertical"&&"textAlignRight",a==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},_,o)},T=b("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,i.orientation==="vertical"&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&i.orientation==="vertical"&&t.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&t.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",...t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},...t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:A(e.palette.divider,.08)},...t.variant==="inset"&&{marginLeft:72},...t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},...t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},...t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},...t.flexItem&&{alignSelf:"stretch",height:"auto"}}),({ownerState:e})=>({...e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}}),({theme:e,ownerState:t})=>({...t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}}),({theme:e,ownerState:t})=>({...t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}}),({ownerState:e})=>({...e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},...e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}})),W=b("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,i.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,...t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}})),N=V.forwardRef(function(t,i){const o=R({props:t,name:"MuiDivider"}),{absolute:c=!1,children:l,className:r,component:a=l?"div":"hr",flexItem:p=!1,light:v=!1,orientation:y="horizontal",role:h=a!=="hr"?"separator":void 0,textAlign:C="center",variant:D="fullWidth",...w}=o,f={...o,absolute:c,component:a,flexItem:p,light:v,orientation:y,role:h,textAlign:C,variant:D},u=q(f);return n(T,{as:a,className:S(u.root,r),role:h,ref:i,ownerState:f,...w,children:l?n(W,{className:u.wrapper,ownerState:f,children:l}):null})}),$=N,d=e=>n($,{...e});try{d.displayName="Divider",d.__docgenInfo={description:"",displayName:"Divider",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<DividerClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement>"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},variant:{defaultValue:{value:"'fullWidth'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"middle" | "inset" | "fullWidth"'}},absolute:{defaultValue:{value:"false"},description:"Absolutely position the element.",name:"absolute",required:!1,type:{name:"boolean"}},flexItem:{defaultValue:{value:"false"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",name:"flexItem",required:!1,type:{name:"boolean"}},light:{defaultValue:{value:"false"},description:"If `true`, the divider will have a lighter color.",name:"light",required:!1,type:{name:"boolean"}}}}}catch{}const U={title:"Components/Divider/Divider",component:d,tags:["autodocs"]},L={position:"fixed"},z={height:"300px",width:"1px"},M={height:"1px",width:"300px"},P={display:"flex"},s={render:e=>{const t={...L,...e.orientation==="vertical"?z:M,...e.orientation==="vertical"&&e.flexItem?P:{}};return n("div",{style:t,children:n(d,{...e})})}};var m,g,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    const containerStyle = {
      ...ContainerStyle,
      ...(args.orientation === 'vertical' ? VerticalContainerStyle : HorizontalContainerStyle),
      ...(args.orientation === 'vertical' && args.flexItem ? VerticalFlexStyle : {})
    };
    return <div style={containerStyle}>
        <Divider {...args} />
      </div>;
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const G=["_Divider"];export{s as _Divider,G as __namedExportsOrder,U as default};
//# sourceMappingURL=Divider.stories-3982b203.js.map
