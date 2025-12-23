import{r as g,j as e}from"./iframe-BOqhEPj6.js";import{C as V}from"./index-20Uc6c4R.js";import{T as $}from"./index-C8WQ3P9P.js";import{F as v}from"./FormControl-B-8LsILh.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-BGoG3jjw.js";import{B as q}from"./Box-CIHxGpEh.js";import{S as h}from"./Select-DRVszLFn.js";import{F as b}from"./FormLabel-UR9lBKMd.js";import"./preload-helper-Dp1pzeXC.js";import"./Chip-DFYjC6yz.js";import"./createSvgIcon-BzRll-a0.js";import"./SvgIcon-BlVGnbba.js";import"./memoTheme-BYC15E_2.js";import"./styled-ClQgRsdc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./ButtonBase-C7cVXKAH.js";import"./useTimeout-CKtuW5yl.js";import"./TransitionGroupContext-TO625Yxj.js";import"./useEventCallback-BHkbNqwn.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-DCSeVpBd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BmeSG9ns.js";import"./isMuiElement-FBus6K6C.js";import"./List-B_DaY4Qf.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./index-DX6yAWWK.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Input-CUIgSpKr.js";import"./OutlinedInput-PlN7TJgo.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-B9cbP78R.js";import"./Menu-Bf3EcXbm.js";import"./useSlotProps-DnEE7xuk.js";import"./Popover-C29c9q_D.js";import"./Portal-Cx3wFGpK.js";import"./useTheme-s5qe_7AX.js";import"./utils-CDaWu4n1.js";import"./getReactElementRef-DF_NnWMb.js";import"./mergeSlotProps-DX0ZwzcB.js";import"./Modal-plhmqEr0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-hLK-Cyuw.js";import"./Fade-Dvz2gflC.js";import"./Paper-Bx06Uw5g.js";import"./useControlled-CmW8DIBb.js";import"./Stack-DPaZpNJF.js";import"./styled-BY2Q14_8.js";import"./Divider-DJj0BQqc.js";import"./FieldHelpIcon-DDnuiNQY.js";import"./index-DS1ZdVNz.js";import"./index-CQw0a6ar.js";import"./Tooltip-DKIHpwU2.js";import"./IconButton-BP3VjvuD.js";import"./CircularProgress-Xg5tMO8-.js";import"./Button-BDF2rRxm.js";import"./FormLabel-CceHt0Ap.js";const Je={title:"Form Components/FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx($,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(q,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(V,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var C,S,f;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
