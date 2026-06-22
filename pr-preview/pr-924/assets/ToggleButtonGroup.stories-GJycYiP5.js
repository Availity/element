import{r as c,j as e}from"./iframe-D9VxGUXm.js";import{H as m,B as p}from"./Common-BJBtPzYe.js";import{F as h}from"./Data-DGJLD0Nj.js";import{T as t}from"./ToggleButton-CC3Aaft0.js";import{T as g}from"./ToggleButtonGroup--GlRWJKE.js";import"./preload-helper-Dab_6GC_.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ToggleButton-CwAJ1qJ8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./useTimeout-CCeZqBN_.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./useForkRef-5-P7CGIn.js";import"./useEventCallback-BrENIvCl.js";import"./isFocusVisible-B8k4qzLc.js";import"./getValidReactChildren-avSpM2Dd.js";const P={title:"Components/ToggleButton/ToggleButtonGroup",component:g,tags:["autodocs"],argTypes:{size:{options:["small","medium","large"]}}},s={render:o=>{const[r,l]=c.useState("left"),n=(d,a)=>{l(a)};return e.jsxs(g,{...o,value:r,onChange:n,children:[e.jsx(t,{value:"First",children:"First"}),e.jsx(t,{value:"Second",children:"Second"}),e.jsx(t,{value:"Third",children:"Third",disabled:!0})]})},args:{exclusive:!0}},u={render:o=>{const[r,l]=c.useState("left"),n=(d,a)=>{l(a)};return e.jsxs(g,{...o,value:r,onChange:n,children:[e.jsx(t,{value:"home","aria-label":"Home",children:e.jsx(m,{})}),e.jsx(t,{value:"filter","aria-label":"Filter",children:e.jsx(h,{})}),e.jsx(t,{value:"notification","aria-label":"Notification",children:e.jsx(p,{}),disabled:!0})]})},args:{exclusive:!0}},i={render:o=>{const[r,l]=c.useState("left"),n=(d,a)=>{l(a)};return e.jsxs(g,{...o,value:r,onChange:n,children:[e.jsx(t,{value:1,children:e.jsxs(e.Fragment,{children:[e.jsx(m,{fontSize:"small",sx:{paddingRight:".5rem"}})," Home"]})}),e.jsx(t,{value:2,children:e.jsxs(e.Fragment,{children:[e.jsx(h,{fontSize:"small",sx:{paddingRight:".5rem"}})," Filter"]})}),e.jsx(t,{value:3,disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{fontSize:"small",sx:{paddingRight:".5rem"}})," Notification"]})})]})},args:{exclusive:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const y=["_ToggleButtonGroup","_ToggleButtonGroupIcons","_ToggleButtonGroupIconsLabels"];export{s as _ToggleButtonGroup,u as _ToggleButtonGroupIcons,i as _ToggleButtonGroupIconsLabels,y as __namedExportsOrder,P as default};
