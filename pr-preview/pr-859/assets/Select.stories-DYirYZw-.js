import{r as g,j as e}from"./iframe-DDdys5VZ.js";import{C}from"./index-BUcBzhmd.js";import{T as S}from"./index-Z7ZBVKdt.js";import{F as v}from"./FormControl-DV2HCR4z.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-D5xFdCU1.js";import{B as f}from"./Box-D4-1J1wq.js";import{S as h}from"./Select-Dq1d9ePg.js";import{F as b}from"./FormLabel-CfxgG_tP.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-BvUPJXZt.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./SvgIcon-DHyw-wAY.js";import"./memoTheme-Cxx5qwbm.js";import"./styled-hFTqa5AW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./ButtonBase-DZVI88h8.js";import"./useTimeout-DZwXI9W9.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./useEventCallback-Cc8SLIyn.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-CZtxpkXF.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BqJWQcaa.js";import"./isMuiElement-CGZGs55h.js";import"./List-CR67BSGH.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Input-X1-w7bkp.js";import"./OutlinedInput-ucVlTC9v.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-Djy4tG8c.js";import"./Menu-Co2n-EqS.js";import"./useSlotProps-CMLU_yM0.js";import"./Popover-CjMcOH46.js";import"./Portal-CIlqDXrO.js";import"./useTheme-3S67f5Cb.js";import"./utils-CF4In8Xa.js";import"./getReactElementRef-KKwdvyjG.js";import"./mergeSlotProps-DywXoXlU.js";import"./Modal-QZjHV8Pa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DQLMuQga.js";import"./Fade-Ci7jieLM.js";import"./Paper-BNuTBhMB.js";import"./useControlled-DPgR13iz.js";import"./Stack-XR9IapJe.js";import"./styled-D0qD_60F.js";import"./Divider-Dljr7oH4.js";import"./FieldHelpIcon-xCxfmxrJ.js";import"./index-BiBDMnSv.js";import"./index-Do6uxBxf.js";import"./Tooltip-BrywaEgo.js";import"./IconButton-BOaXfSEH.js";import"./CircularProgress-CD5GaXFj.js";import"./Button-uXds9IdN.js";import"./FormLabel-BxsO_0-t.js";const Te={title:"Form Components/FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx(S,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(C,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
