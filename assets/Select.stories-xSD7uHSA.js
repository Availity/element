import{r as g,j as e}from"./iframe-QKKiXGe2.js";import{C}from"./index-CcNjTjJP.js";import{T as S}from"./index-p3f1BLXv.js";import{F as v}from"./FormControl-CitCh22I.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-BUdA172x.js";import{B as f}from"./Box-DS6KTGM7.js";import{S as h}from"./Select-D1eYdhqK.js";import{F as b}from"./FormLabel-BhTJ4ybr.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-D6Ob_CsE.js";import"./createSvgIcon-Bm4mBUxC.js";import"./SvgIcon-D3LX6zM9.js";import"./memoTheme-CZ6h3Fbh.js";import"./styled-CQy7SchW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useForkRef-GKR9CYz5.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-lfATY7Ds.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BS7uljQq.js";import"./isMuiElement-BPsBBR2z.js";import"./List-jtBebsxm.js";import"./SelectFocusSourceContext-Iss43-gE.js";import"./useSlotProps-CqRX49VI.js";import"./Popover-DfTMYM2R.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-JL7agaji.js";import"./useTheme-CobnQWC-.js";import"./utils-Dh1OrGpA.js";import"./getReactElementRef-DpOU19qE.js";import"./mergeSlotProps-CpR-3M6H.js";import"./debounce-Be36O1Ab.js";import"./Modal-WlFR6ZW0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Veo0zKS5.js";import"./Fade-BA-tR7QB.js";import"./Paper-Bu_9L5He.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Input-BXZNyv-D.js";import"./OutlinedInput-Cudg-yYO.js";import"./formControlState-Dq1zat_P.js";import"./Select-DSMEK_KK.js";import"./useControlled-BjERoBEC.js";import"./Stack-vCt2ORwh.js";import"./styled-CL_ITmKE.js";import"./Divider-U3oIKmQv.js";import"./FieldHelpIcon-Dn4CCfhC.js";import"./index-CrcoPoGw.js";import"./index-Dx_zFY-v.js";import"./IconButton-SAs9Di6J.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./Button-B0ZWu58J.js";import"./FormLabel-D_H32dE9.js";const Te={title:"Form Components/Uncontrolled FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx(S,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(C,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
