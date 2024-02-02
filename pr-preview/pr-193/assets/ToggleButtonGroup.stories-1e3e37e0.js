import{a as e,j as n,F as p}from"./jsx-runtime-a3bcee63.js";import{r as c}from"./index-570b25c1.js";import{f as w,m as G,B as S}from"./index-53288845.js";import{T as t}from"./ToggleButton-81fe6e70.js";import{M as I}from"./ToggleButtonGroup-2e6e00f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./ToggleButton-54342354.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./react-is.production.min-a192e302.js";const r=c.forwardRef(({children:l,...a},o)=>e(I,{...a,ref:o,orientation:"horizontal",children:l}));try{r.displayName="ToggleButtonGroup",r.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{color:{defaultValue:{value:"'standard'"},description:`The color of the button when it is selected.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"success" | "info" | "warning" | "error" | "primary" | "secondary" | "standard"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ToggleButtonGroupClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback.\n@param value of the selected buttons. When `exclusive` is true\nthis is a single value; when false an array of selected values. If no value\nis selected and `exclusive` is true the value is null; when false an empty array.",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'small'"},description:"The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},value:{defaultValue:null,description:`The currently selected value within the group or an array of selected
values when \`exclusive\` is false.

The value must have reference equality with the option in order to be selected.`,name:"value",required:!1,type:{name:"any"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button group will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:{value:"false"},description:"If `true`, only allow one of the child ToggleButton values to be selected.",name:"exclusive",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/ToggleButton/ToggleButtonGroup",component:r,tags:["autodocs"],argTypes:{size:{options:["small","medium","large"]}}},u={render:l=>{const[a,o]=c.useState("left");return n(r,{...l,value:a,onChange:(m,s)=>{o(s)},children:[e(t,{value:"First",children:"First"}),e(t,{value:"Second",children:"Second"}),e(t,{value:"Third",children:"Third",disabled:!0})]})},args:{exclusive:!0}},i={render:l=>{const[a,o]=c.useState("left");return n(r,{...l,value:a,onChange:(m,s)=>{o(s)},children:[e(t,{value:"home","aria-label":"Home",children:e(w,{})}),e(t,{value:"filter","aria-label":"Filter",children:e(G,{})}),e(t,{value:"notification","aria-label":"Notification",children:e(S,{}),disabled:!0})]})},args:{exclusive:!0}},d={render:l=>{const[a,o]=c.useState("left");return n(r,{...l,value:a,onChange:(m,s)=>{o(s)},children:[e(t,{value:1,children:n(p,{children:[e(w,{fontSize:"small",sx:{paddingRight:".5rem"}})," Home"]})}),e(t,{value:2,children:n(p,{children:[e(G,{fontSize:"small",sx:{paddingRight:".5rem"}})," Filter"]})}),e(t,{value:3,disabled:!0,children:n(p,{children:[e(S,{fontSize:"small",sx:{paddingRight:".5rem"}})," Notification"]})})]})},args:{exclusive:!0}};var h,f,v;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value="First" children="First" />
        <ToggleButton value="Second" children="Second" />
        <ToggleButton value="Third" children="Third" disabled />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(v=(f=u.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,B,V;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value="home" aria-label="Home" children={<HomeIcon />} />
        <ToggleButton value="filter" aria-label="Filter" children={<FilterIcon />} />
        <ToggleButton value="notification" aria-label="Notification" children={<BellIcon />} disabled />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(V=(B=i.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var b,y,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value={1} children={<>
              <HomeIcon fontSize="small" sx={{
          paddingRight: '.5rem'
        }} /> Home
            </>} />
        <ToggleButton value={2} children={<>
              <FilterIcon fontSize="small" sx={{
          paddingRight: '.5rem'
        }} /> Filter
            </>} />
        <ToggleButton value={3} disabled children={<>
              <BellIcon fontSize="small" sx={{
          paddingRight: '.5rem'
        }} /> Notification
            </>} />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const $=["_ToggleButtonGroup","_ToggleButtonGroupIcons","_ToggleButtonGroupIconsLabels"];export{u as _ToggleButtonGroup,i as _ToggleButtonGroupIcons,d as _ToggleButtonGroupIconsLabels,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=ToggleButtonGroup.stories-1e3e37e0.js.map
