import{r as c,j as e}from"./iframe-BjnuDffd.js";import{o as p,k as m,B as h}from"./index-BPcsFkr_.js";import{T as t}from"./ToggleButton-DaMTjNO0.js";import{T as v}from"./ToggleButtonGroup-DvxhL2Ok.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CargZ35d.js";import"./memoTheme-B2JdP5Lg.js";import"./styled-DqMp1nYt.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ToggleButton-CbE8VEou.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B91JQX2j.js";import"./useTimeout-C6wFpPob.js";import"./TransitionGroupContext-CjQYVfWF.js";import"./useForkRef-DH1owG2H.js";import"./useEventCallback-C7vIb1Zh.js";import"./isFocusVisible-B8k4qzLc.js";import"./getValidReactChildren-DRnwpGoR.js";const n=c.forwardRef(({children:l,...a},o)=>e.jsx(v,{...a,ref:o,orientation:"horizontal",children:l}));try{n.displayName="ToggleButtonGroup",n.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ToggleButtonGroupClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"'standard'"},description:`The color of the button when it is selected.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning" | "standard", ToggleButtonGroupPropsColorOverrides>'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback.\n@param value of the selected buttons. When `exclusive` is true\nthis is a single value; when false an array of selected values. If no value\nis selected and `exclusive` is true the value is null; when false an empty array.",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The currently selected value within the group or an array of selected
values when \`exclusive\` is false.

The value must have reference equality with the option in order to be selected.`,name:"value",required:!1,type:{name:"any"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button group will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'small'"},description:"The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},exclusive:{defaultValue:{value:"false"},description:"If `true`, only allow one of the child ToggleButton values to be selected.",name:"exclusive",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Components/ToggleButton/ToggleButtonGroup",component:n,tags:["autodocs"],argTypes:{size:{options:["small","medium","large"]}}},u={render:l=>{const[a,o]=c.useState("left"),r=(g,s)=>{o(s)};return e.jsxs(n,{...l,value:a,onChange:r,children:[e.jsx(t,{value:"First",children:"First"}),e.jsx(t,{value:"Second",children:"Second"}),e.jsx(t,{value:"Third",children:"Third",disabled:!0})]})},args:{exclusive:!0}},i={render:l=>{const[a,o]=c.useState("left"),r=(g,s)=>{o(s)};return e.jsxs(n,{...l,value:a,onChange:r,children:[e.jsx(t,{value:"home","aria-label":"Home",children:e.jsx(p,{})}),e.jsx(t,{value:"filter","aria-label":"Filter",children:e.jsx(m,{})}),e.jsx(t,{value:"notification","aria-label":"Notification",children:e.jsx(h,{}),disabled:!0})]})},args:{exclusive:!0}},d={render:l=>{const[a,o]=c.useState("left"),r=(g,s)=>{o(s)};return e.jsxs(n,{...l,value:a,onChange:r,children:[e.jsx(t,{value:1,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{fontSize:"small",sx:{paddingRight:".5rem"}})," Home"]})}),e.jsx(t,{value:2,children:e.jsxs(e.Fragment,{children:[e.jsx(m,{fontSize:"small",sx:{paddingRight:".5rem"}})," Filter"]})}),e.jsx(t,{value:3,disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(h,{fontSize:"small",sx:{paddingRight:".5rem"}})," Notification"]})})]})},args:{exclusive:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const L=["_ToggleButtonGroup","_ToggleButtonGroupIcons","_ToggleButtonGroupIconsLabels"];export{u as _ToggleButtonGroup,i as _ToggleButtonGroupIcons,d as _ToggleButtonGroupIconsLabels,L as __namedExportsOrder,N as default};
