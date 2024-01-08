import{a as t}from"./jsx-runtime-a3bcee63.js";import{r as y}from"./index-570b25c1.js";import{A as v}from"./index-217c7110.js";import{C as g}from"./Chip-e09b065a.js";import{C as b}from"./Collapse-f17f633e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b9c35012.js";import"./Avatar-a58ed318.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./generateUtilityClasses-b58f947a.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./utils-1ac07bae.js";import"./index-8a077077.js";import"./useTheme-c07bb8e7.js";const r=e=>t(g,{...e,color:"default",size:"medium"});try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:`Callback fired when the delete icon is clicked.
If set, the delete icon will be shown.`,name:"onDelete",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const K={title:"Components/Chip/Chip",component:r,tags:["autodocs"],args:{label:"Chip",size:"medium",color:"default"}},a={render:e=>t(r,{...e}),args:{label:"Chip"}},n={render:e=>{const[C,o]=y.useState(!0);return t(b,{in:C,children:t(r,{...e,onDelete:()=>{o(!1),setTimeout(()=>o(!0),1e3)}})})}},s={render:e=>t(r,{...e,avatar:t(v,{children:"A"})})};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: ChipProps) => {
    const [visible, setVisible] = useState(true);
    const onDelete = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Chip {...args} onDelete={onDelete} />
      </Collapse>;
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,f,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} avatar={<Avatar>A</Avatar>} />
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Q=["_Chip","_RemovableChip","_Avatar"];export{s as _Avatar,a as _Chip,n as _RemovableChip,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Chip.stories-ee5e4821.js.map
