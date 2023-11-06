import{j as t}from"./jsx-runtime-390e5fc8.js";import{r as y}from"./index-570b25c1.js";import{A as v}from"./index-8e0f06ff.js";import{C as g}from"./Chip-3f4a5391.js";import{C as b}from"./Collapse-da3aacb2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-fd483b67.js";import"./Avatar-b9c2bcdc.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-188025da.js";import"./useThemeProps-db7202c2.js";import"./createSvgIcon-e4b87ef5.js";import"./SvgIcon-ab7aa383.js";import"./generateUtilityClasses-f776b170.js";import"./ButtonBase-dcf5e891.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./utils-744d0bbc.js";import"./index-8a077077.js";import"./useTheme-3a36d7a0.js";const r=e=>t(g,{...e,color:"default",size:"medium"});try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:`Callback fired when the delete icon is clicked.
If set, the delete icon will be shown.`,name:"onDelete",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const G={title:"Components/Chip/Chip",component:r,tags:["autodocs"],args:{label:"Chip",size:"medium",color:"default"}},a={render:e=>t(r,{...e}),args:{label:"Chip"}},n={render:e=>{const[C,o]=y.useState(!0);return t(b,{in:C,children:t(r,{...e,onDelete:()=>{o(!1),setTimeout(()=>o(!0),1e3)}})})}},s={render:e=>t(r,{...e,avatar:t(v,{children:"A"})})};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const K=["_Chip","_RemovableChip","_Avatar"];export{s as _Avatar,a as _Chip,n as _RemovableChip,K as __namedExportsOrder,G as default};
//# sourceMappingURL=Chip.stories-49c9b574.js.map
