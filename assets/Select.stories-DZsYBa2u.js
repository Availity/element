import{r as g,j as e}from"./iframe-Cv4YEYCT.js";import{C as V}from"./index-CcNNKLHc.js";import{T as $}from"./index-Cy8ZwHJB.js";import{F as v}from"./FormControl-FbDQyrmL.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-DRWLENGv.js";import{B as q}from"./Box-GX48hKKC.js";import{S as h}from"./Select-M2L78ybl.js";import{F as b}from"./FormLabel-kCrh1GfY.js";import"./preload-helper-Dp1pzeXC.js";import"./Chip-BnZF5Ar2.js";import"./createSvgIcon-anG-4vyn.js";import"./SvgIcon-RzgLEiZ2.js";import"./memoTheme-pu_-LVrP.js";import"./styled-BjYrgzj8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cy9-wLDX.js";import"./ButtonBase-Te2dWPfF.js";import"./useTimeout-S5FMYS9P.js";import"./TransitionGroupContext-ReV1kAll.js";import"./useEventCallback-Dezg1Jp2.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-BHaCpI2A.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CIuk8i81.js";import"./isMuiElement-C4Xkg-Fl.js";import"./List-5gkoo-vG.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./index-CNJpAeel.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Input-DbTWOuWq.js";import"./OutlinedInput-C6lArYvq.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-DdtRsles.js";import"./Menu-Dp7wAg9-.js";import"./useSlotProps-DpLQsBTB.js";import"./Popover-BbkQ84jj.js";import"./Portal-HdFRzq7f.js";import"./useTheme-yn0WqvlF.js";import"./utils-CC-nVGrC.js";import"./getReactElementRef-Cucsv-xJ.js";import"./mergeSlotProps-pd1YXqCy.js";import"./Modal-C2-2MRhp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CJgjCZ3h.js";import"./Fade-72ut2BWr.js";import"./Paper-BGV9jSeN.js";import"./useControlled-DotOmqWu.js";import"./Stack-BZ8fB6iW.js";import"./styled-Cz-jNn-e.js";import"./Divider-0N8BvuQ6.js";import"./FieldHelpIcon-CotRvCWj.js";import"./index-DS1ZdVNz.js";import"./index-C6B9H3-6.js";import"./Tooltip-DdwYWGQa.js";import"./IconButton-y4oP_Qzi.js";import"./CircularProgress-4dbP_wqt.js";import"./Button-CxHqlBlz.js";import"./FormLabel-BwjfLjpu.js";const Je={title:"Form Components/FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx($,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(q,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(V,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var C,S,f;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
