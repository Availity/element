import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BSuoOqEd.js";import{o as b,k as y,B as j}from"./index-LinAfN8C.js";import{T as t}from"./ToggleButton-CI_uR6UM.js";import{T as w}from"./ToggleButtonGroup-D9ZB6Rih.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./faCircleArrowRight-e2oTZTvX.js";import"./faUser-Dxmucm-1.js";import"./SvgIcon-enpUMgPP.js";import"./identifier-DhnHujDJ.js";import"./memoTheme-BwIkkReu.js";import"./styled-9znMky1q.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ToggleButton-DNGB8vbT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-AdAh9sBA.js";import"./useTimeout-B9dULhq6.js";import"./TransitionGroupContext-CcytU7uK.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./useForkRef-BIkqQIqh.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./isFocusVisible-B8k4qzLc.js";import"./getValidReactChildren-BDTz9LVh.js";const n=c.forwardRef(({children:l,...o},a)=>e.jsx(w,{...o,ref:a,orientation:"horizontal",children:l}));try{n.displayName="ToggleButtonGroup",n.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{color:{defaultValue:{value:"'standard'"},description:`The color of the button when it is selected.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:'OverridableStringUnion<"success" | "info" | "warning" | "error" | "primary" | "secondary" | "standard", ToggleButtonGroupPropsColorOverrides>'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ToggleButtonGroupClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback.\n@param value of the selected buttons. When `exclusive` is true\nthis is a single value; when false an array of selected values. If no value\nis selected and `exclusive` is true the value is null; when false an empty array.",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'small'"},description:"The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},value:{defaultValue:null,description:`The currently selected value within the group or an array of selected
values when \`exclusive\` is false.

The value must have reference equality with the option in order to be selected.`,name:"value",required:!1,type:{name:"any"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button group will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:{value:"false"},description:"If `true`, only allow one of the child ToggleButton values to be selected.",name:"exclusive",required:!1,type:{name:"boolean"}}}}}catch{}const Y={title:"Components/ToggleButton/ToggleButtonGroup",component:n,tags:["autodocs"],argTypes:{size:{options:["small","medium","large"]}}},u={render:l=>{const[o,a]=c.useState("left"),r=(p,s)=>{a(s)};return e.jsxs(n,{...l,value:o,onChange:r,children:[e.jsx(t,{value:"First",children:"First"}),e.jsx(t,{value:"Second",children:"Second"}),e.jsx(t,{value:"Third",children:"Third",disabled:!0})]})},args:{exclusive:!0}},i={render:l=>{const[o,a]=c.useState("left"),r=(p,s)=>{a(s)};return e.jsxs(n,{...l,value:o,onChange:r,children:[e.jsx(t,{value:"home","aria-label":"Home",children:e.jsx(b,{})}),e.jsx(t,{value:"filter","aria-label":"Filter",children:e.jsx(y,{})}),e.jsx(t,{value:"notification","aria-label":"Notification",children:e.jsx(j,{}),disabled:!0})]})},args:{exclusive:!0}},d={render:l=>{const[o,a]=c.useState("left"),r=(p,s)=>{a(s)};return e.jsxs(n,{...l,value:o,onChange:r,children:[e.jsx(t,{value:1,children:e.jsxs(e.Fragment,{children:[e.jsx(b,{fontSize:"small",sx:{paddingRight:".5rem"}})," Home"]})}),e.jsx(t,{value:2,children:e.jsxs(e.Fragment,{children:[e.jsx(y,{fontSize:"small",sx:{paddingRight:".5rem"}})," Filter"]})}),e.jsx(t,{value:3,disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(j,{fontSize:"small",sx:{paddingRight:".5rem"}})," Notification"]})})]})},args:{exclusive:!0}};var g,m,h;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(m=u.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,f,T;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,B,V;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const Z=["_ToggleButtonGroup","_ToggleButtonGroupIcons","_ToggleButtonGroupIconsLabels"];export{u as _ToggleButtonGroup,i as _ToggleButtonGroupIcons,d as _ToggleButtonGroupIconsLabels,Z as __namedExportsOrder,Y as default};
