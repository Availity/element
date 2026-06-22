import{r as g,j as e}from"./iframe-D9VxGUXm.js";import{C}from"./Chip-Bt_M0cc7.js";import{T as S}from"./Typography-D9Pc6OpE.js";import{F as v}from"./FormLabel-DVupU6Lh.js";import{d as h}from"./Select-DKGOAe8y.js";import{a as x}from"./FormControl-B4iyM4I1.js";import{v as b}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-QbVoyqaY.js";import{B as f}from"./Box-1lHW1eXR.js";import"./preload-helper-Dab_6GC_.js";import"./Chip-DKO5tgQr.js";import"./createSvgIcon-CuKrs_jq.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./ButtonBase-IEWOwJJy.js";import"./useTimeout-CCeZqBN_.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./useEventCallback-BrENIvCl.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-mI_XzOBj.js";import"./FieldHelpIcon-BVNkABm1.js";import"./index-CrcoPoGw.js";import"./Form-BG5Mtcu6.js";import"./FaSvgIcon-CwoOr0og.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useTheme-B41ItSj5.js";import"./useControlled-nlFUsoSS.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./IconButton-BrelKzp4.js";import"./CircularProgress-rsn-iR-g.js";import"./Actions-Bez28Qkr.js";import"./Input-C9_Sqi_J.js";import"./OutlinedInput-Dr4cfOVe.js";import"./useFormControl-D5KNipz4.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-CN5D_YTR.js";import"./SelectFocusSourceContext-BhxM5Ro2.js";import"./Popover-R-MCXb6u.js";import"./mergeSlotProps-JAhzVB8J.js";import"./Modal-B8lqQyLL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DWoUx2Mm.js";import"./Fade-4pWY_yaW.js";import"./Paper-oCFHvNnf.js";import"./List-VhCI1ZGj.js";import"./Stack-NbPl_tL-.js";import"./styled-N1qat-rE.js";import"./Divider-BXDOAs2I.js";import"./dividerClasses-qU9lkgJy.js";import"./isMuiElement-3elNFQAm.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";const Te={title:"Form Components/Uncontrolled FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(x,{required:r,size:a,children:[e.jsx(v,{id:`${t.id}-label`,sx:b,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(x,{required:r,size:a,children:[e.jsx(v,{id:`${t.id}-label`,sx:b,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx(S,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(x,{required:r,size:a,children:[e.jsx(v,{id:`${t.id}-label`,sx:b,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(C,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
