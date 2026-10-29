import{r as g,j as e}from"./iframe-CLut6yOe.js";import{C}from"./index-DmOLeceG.js";import{T as S}from"./index-DmhD3hPK.js";import{F as v}from"./FormControl-BZcEw6H3.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-CE5xIuZM.js";import{B as f}from"./Box-KcVtg1pO.js";import{S as h}from"./Select-BHYY9YkO.js";import{F as b}from"./FormLabel-BTJi8eTk.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-cGG6rk4J.js";import"./createSvgIcon-BcCXBLY5.js";import"./SvgIcon-Dd51Rz_D.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useForkRef-CW7nwTzV.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-BLWoaJn_.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CsURvBpr.js";import"./isMuiElement-CAAIFwhI.js";import"./List-Ed_p2skf.js";import"./SelectFocusSourceContext-BqjsBqoL.js";import"./useSlotProps-BphsLqn6.js";import"./Popover-D8aHDtre.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-buqhKvPN.js";import"./useTheme-uzqIZvgA.js";import"./utils-CY0-o-M4.js";import"./getReactElementRef-CPIcGi-m.js";import"./mergeSlotProps-BD3yaoOB.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUjatzFH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DrT6KjAn.js";import"./Fade-CkZ97Hml.js";import"./Paper-CMcH6Gk3.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Input-ITcMCnkO.js";import"./OutlinedInput-NqaTAoz7.js";import"./formControlState-Dq1zat_P.js";import"./Select-Dy9kUNRR.js";import"./useControlled-BMhEC-vi.js";import"./Stack-C0CMzs2G.js";import"./styled-qS0Yrwc6.js";import"./Divider-o9_MDQMV.js";import"./FieldHelpIcon-BgH6Lc3x.js";import"./index-MVgG_W0q.js";import"./index-DNgDR8tQ.js";import"./IconButton-MKfAwX3T.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./Button-CO7SGq6S.js";import"./FormLabel-C4ZzvvPY.js";const Te={title:"Form Components/Uncontrolled FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx(S,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(C,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    required,
    size,
    ...args
  }: SelectProps) => {
    const [count, setCount] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };
    return <FormControl required={required} size={size}>
        <FormLabel id={\`\${args.id}-label\`} sx={visuallyHidden}>
          {args.label}
        </FormLabel>
        <Select value={count} onChange={handleChange} labelId={\`\${args.id}-label\`} {...args}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>;
  },
  args: {
    label: 'count',
    id: 'count',
    size: 'small'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    required,
    size,
    ...args
  }: SelectProps) => {
    const [count, setCount] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };
    return <FormControl required={required} size={size}>
        <FormLabel id={\`\${args.id}-label\`} sx={visuallyHidden}>
          {args.label}
        </FormLabel>
        <Select value={count} onChange={handleChange} labelId={\`\${args.id}-label\`} {...args}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>;
  },
  args: {
    label: 'count',
    id: 'count',
    size: 'small',
    displayEmpty: true,
    renderValue: (selected: string) => {
      if (!selected) {
        return <Typography color="text.placeholder">Placeholder</Typography>;
      }
      return selected;
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    required,
    size,
    ...args
  }: SelectProps) => {
    const [multiValue, setMultiValue] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof multiValue>) => {
      const {
        target: {
          value
        }
      } = event;
      setMultiValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value);
    };
    const options = ['one', 'two', 'three', 'four'];
    return <FormControl required={required} size={size}>
        <FormLabel id={\`\${args.id}-label\`} sx={visuallyHidden}>
          {args.label}
        </FormLabel>
        <Select {...args} labelId={\`\${args.id}-label\`} value={multiValue} onChange={handleChange} renderValue={(selected: typeof multiValue) => <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.5
      }}>
              {selected.map(value => <Chip key={value} label={value} />)}
            </Box>}>
          {options.map(option => <MenuItem key={option} value={option}>
              {option}
            </MenuItem>)}
        </Select>
      </FormControl>;
  },
  args: {
    label: 'counts',
    id: 'multiple-chip',
    size: 'small',
    multiple: true
  }
}`,...c.parameters?.docs?.source}}};const ke=["_Select","_SelectPlaceholder","_MultiSelect"];export{c as _MultiSelect,p as _Select,d as _SelectPlaceholder,ke as __namedExportsOrder,Te as default};
