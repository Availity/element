import{j as e,r as v}from"./iframe-P-I-t7s_.js";import{L as T,U as h}from"./index-C3cy06cM.js";import{a as o,T as a}from"./Tab-CTqu8qGQ.js";import{B as u}from"./Box-BCYJimk9.js";import{T as x}from"./Typography-BFwAhjnY.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./memoTheme-Bi3jfVWD.js";import"./styled-DNi79hKI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Tabs-CaL-cxUg.js";import"./ButtonBase-P5TjO14T.js";import"./useTimeout-Dzhca5Jx.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./useForkRef-B5SqA4pZ.js";import"./useEventCallback-DAYatbRK.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-BPf64W-X.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useSlotProps-Cx6Yk_v4.js";import"./KeyboardArrowRight-CbeuMfoU.js";import"./createSvgIcon-JwEd2gcS.js";import"./getActiveElement-BQgAPKnO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const Q={title:"Components/Tabs/Tabs",component:o,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]};function l(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}function n(s){const{value:i,index:r,...p}=s;return e.jsx("div",{role:"tabpanel",hidden:i!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...p,children:i===r&&e.jsx(u,{sx:{p:3},children:e.jsxs(x,{children:["Hello from panel ",r+1]})})})}const b={render:s=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{value:s.value,onChange:()=>{},...s,children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0})]}),e.jsx(n,{value:s.value,index:0}),e.jsx(n,{value:s.value,index:1}),e.jsx(n,{value:s.value,index:2})]}),args:{value:0}},d={render:s=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{value:s.value,onChange:()=>{},...s,children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0}),e.jsx(a,{label:"Item Four",...l(3),disabled:!0}),e.jsx(a,{label:"Item Five",...l(4),disabled:!0}),e.jsx(a,{label:"Item Six",...l(5),disabled:!0}),e.jsx(a,{label:"Item Seven",...l(6),disabled:!0}),e.jsx(a,{label:"Item Eight",...l(7),disabled:!0}),e.jsx(a,{label:"Item Nine",...l(8),disabled:!0}),e.jsx(a,{label:"Item Ten",...l(9),disabled:!0})]}),e.jsx(n,{value:s.value,index:0}),e.jsx(n,{value:s.value,index:1}),e.jsx(n,{value:s.value,index:2})]}),args:{value:0,variant:"scrollable"}},t={render:()=>e.jsxs(u,{sx:{p:3,backgroundColor:"background.paper"},children:[e.jsxs(o,{level:"primary",value:0,onChange:()=>{},children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0})]}),e.jsx("div",{role:"tabpanel",id:"simple-tabpanel-0","aria-labelledby":"simple-tab-0",children:e.jsxs(u,{sx:{p:3},children:[e.jsx(x,{sx:{mb:2},children:"Hello from panel 1"}),e.jsxs(o,{level:"secondary",value:1,onChange:()=>{},children:[e.jsx(a,{label:"Item Four",...l(3)}),e.jsx(a,{label:"Item Five",...l(4)}),e.jsx(a,{label:"Item Six",...l(5),disabled:!0})]}),e.jsx(n,{value:4,index:3}),e.jsx(n,{value:4,index:4}),e.jsx(n,{value:4,index:5})]})}),e.jsx(n,{value:0,index:1}),e.jsx(n,{value:0,index:2})]})},m={render:()=>{const[s,i]=v.useState(0),r=(p,c)=>{i(c)};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{value:s,onChange:r,children:[e.jsx(a,{icon:e.jsx(T,{}),label:"Links",...l(0)}),e.jsx(a,{icon:e.jsx(h,{}),label:"My Account",...l(1)})]}),e.jsx(n,{value:s,index:0}),e.jsx(n,{value:s,index:1})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: TabsProps) => {
    return <>
        <Tabs value={args.value} onChange={() => {}} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={args.value} index={0} />
        <CustomTabPanel value={args.value} index={1} />
        <CustomTabPanel value={args.value} index={2} />
      </>;
  },
  args: {
    value: 0
  }
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: TabsProps) => {
    return <>
        <Tabs value={args.value} onChange={() => {}} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
          <Tab label="Item Four" {...a11yProps(3)} disabled />
          <Tab label="Item Five" {...a11yProps(4)} disabled />
          <Tab label="Item Six" {...a11yProps(5)} disabled />
          <Tab label="Item Seven" {...a11yProps(6)} disabled />
          <Tab label="Item Eight" {...a11yProps(7)} disabled />
          <Tab label="Item Nine" {...a11yProps(8)} disabled />
          <Tab label="Item Ten" {...a11yProps(9)} disabled />
        </Tabs>
        <CustomTabPanel value={args.value} index={0} />
        <CustomTabPanel value={args.value} index={1} />
        <CustomTabPanel value={args.value} index={2} />
      </>;
  },
  args: {
    value: 0,
    variant: 'scrollable'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Box sx={{
      p: 3,
      backgroundColor: 'background.paper'
    }}>
        <Tabs level="primary" value={0} onChange={() => {}}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
          <div role="tabpanel" id={\`simple-tabpanel-0\`} aria-labelledby={\`simple-tab-0\`}>
            <Box sx={{
          p: 3
        }}>
              <Typography sx={{
            mb: 2
          }}>Hello from panel 1</Typography>
              <Tabs level="secondary" value={1} onChange={() => {}}>
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} disabled />
              </Tabs>
              <CustomTabPanel value={4} index={3} />
              <CustomTabPanel value={4} index={4} />
              <CustomTabPanel value={4} index={5} />
            </Box>
          </div>
          <CustomTabPanel value={0} index={1} />
          <CustomTabPanel value={0} index={2} />
      </Box>;
  }
}`,...t.parameters?.docs?.source},description:{story:"There is a hierarchy for tab styling. Most tabs will have the primary level styling while nested tabs have the secondary level styling.",...t.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return <>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<LinkIcon />} label="Links" {...a11yProps(0)} />
          <Tab icon={<UserIcon />} label="My Account" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
      </>;
  }
}`,...m.parameters?.docs?.source}}};const X=["_Tabs","_TabsScrollable","_Levels","_WithIcons"];export{t as _Levels,b as _Tabs,d as _TabsScrollable,m as _WithIcons,X as __namedExportsOrder,Q as default};
