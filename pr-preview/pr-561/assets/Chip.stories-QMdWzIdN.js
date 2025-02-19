import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{r as v}from"./index-DcWiA9TO.js";import{A as g}from"./index-Bmrgi_6a.js";import{C as b}from"./Chip-CBOHQDsU.js";import{C as x}from"./Collapse-9mMULzbG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cs70mkZF.js";import"./index-IdGqEWBr.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./index-CaTz9XJG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-BS-p1eoC.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./Avatar-BK8S1iy9.js";import"./createSvgIcon-IUeEQzFc.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQZrtVrL.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";const r=e=>t.jsx(b,{...e,color:"default",size:"medium"});try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:`Callback fired when the delete icon is clicked.
If set, the delete icon will be shown.`,name:"onDelete",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const se={title:"Components/Chip/Chip",component:r,tags:["autodocs"],args:{label:"Chip"}},a={render:e=>t.jsx(r,{...e}),args:{label:"Chip"}},s={render:e=>{const[C,o]=v.useState(!0),y=()=>{o(!1),setTimeout(()=>o(!0),1e3)};return t.jsx(x,{in:C,children:t.jsx(r,{...e,onDelete:y})})}},n={render:e=>t.jsx(r,{...e,avatar:t.jsx(g,{children:"A"})})};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip'
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,f,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} avatar={<Avatar>A</Avatar>} />
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const ne=["_Chip","_RemovableChip","_Avatar"];export{n as _Avatar,a as _Chip,s as _RemovableChip,ne as __namedExportsOrder,se as default};
