import{r as g,j as e}from"./iframe-XJ8rUARQ.js";import{C as V}from"./index-CyXiFrV-.js";import{T as $}from"./index-CMxAEhwf.js";import{F as v}from"./FormControl-ChASXxOp.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-DJRjWX2u.js";import{B as q}from"./Box-qW0uta-Y.js";import{S as h}from"./Select-Imkks8yA.js";import{F as b}from"./FormLabel-Bds4vBFE.js";import"./preload-helper-Dp1pzeXC.js";import"./Chip-Dnol4tA1.js";import"./createSvgIcon-CZFbIjHx.js";import"./SvgIcon-gs9ZPknn.js";import"./memoTheme-q27Lu1jJ.js";import"./styled-DH1bohWY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-BQnc1wiW.js";import"./mergeSlotProps-B1UYo6hf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k_WY5UDV.js";import"./ButtonBase-CgzYzVmi.js";import"./useTimeout-CHPWgY-X.js";import"./TransitionGroupContext-BLsjMo91.js";import"./useEventCallback-BDPMWXz1.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-DLCURa9h.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BQzGV_Rr.js";import"./isMuiElement-bpXde_gu.js";import"./List-BH13I8v0.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./index-Bic9pcsq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Input-52NPWTPw.js";import"./OutlinedInput-CRGope29.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-DRmfM0LR.js";import"./Menu-CwbeRV8m.js";import"./useSlotProps-ClBThUbu.js";import"./Popover-CSSnkq1S.js";import"./Portal-xufODOBH.js";import"./useTheme-DdE3jScQ.js";import"./utils-Bu5_zceD.js";import"./getReactElementRef-CA2jWjUI.js";import"./mergeSlotProps-DiGp33rA.js";import"./Modal-mRbZ2Llg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk5P0AXa.js";import"./Fade-7aiRsYlH.js";import"./Paper-BItyqzia.js";import"./useControlled-XnLwGYQ0.js";import"./Stack-DBw9MoVN.js";import"./styled-BwErFkk7.js";import"./Divider-By-_we-K.js";import"./FieldHelpIcon-BvOPnPCL.js";import"./index-DS1ZdVNz.js";import"./index-Bfg0IfXb.js";import"./Tooltip-CFosmsmO.js";import"./IconButton-CSeSeZKT.js";import"./CircularProgress-DHokMmGN.js";import"./Button-jNyCdmKh.js";import"./FormLabel-CuI6a_rh.js";const Je={title:"Form Components/FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx($,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(q,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(V,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var C,S,f;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(S=p.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,j,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var M,F,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(F=c.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const Ke=["_Select","_SelectPlaceholder","_MultiSelect"];export{c as _MultiSelect,p as _Select,d as _SelectPlaceholder,Ke as __namedExportsOrder,Je as default};
