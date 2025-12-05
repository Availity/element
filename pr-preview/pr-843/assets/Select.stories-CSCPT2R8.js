import{r as g,j as e}from"./iframe-DKPLEfLw.js";import{C as V}from"./index-CMCwZUuy.js";import{T as $}from"./index-B_gHUUTW.js";import{F as v}from"./FormControl-DbYDmqwW.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-DmUIChEl.js";import{B as q}from"./Box-CZdlnD3e.js";import{S as h}from"./Select-DGKwFtFi.js";import{F as b}from"./FormLabel-BQgG3zf4.js";import"./preload-helper-Dp1pzeXC.js";import"./Chip-Byj-O4jl.js";import"./createSvgIcon-vtaDbQWp.js";import"./SvgIcon-FjAnPN_Y.js";import"./memoTheme-DCtqnaOZ.js";import"./styled-DmVvl1cy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BBFL5x5N.js";import"./ButtonBase-ChXh0SoD.js";import"./useTimeout-C_Ka5Mcj.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./useEventCallback-DDVZojhm.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-BTTsir7-.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B1pwVxN7.js";import"./isMuiElement-Bob4bJgN.js";import"./List-BjcIUzlW.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./index-WRElMkUo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Input-3-YPh538.js";import"./OutlinedInput-DIczrftV.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-y-N0h_1d.js";import"./Menu-B7TQxF7y.js";import"./useSlotProps-RoKiuIH8.js";import"./Popover-DN87KpwA.js";import"./Portal-DsulJ7FL.js";import"./useTheme-9F3p9Qod.js";import"./utils-BvzjqUtG.js";import"./getReactElementRef-BnAyG0-a.js";import"./mergeSlotProps-AOTIRq8g.js";import"./Modal-DY-Qgl5b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-sfrV9DZb.js";import"./Fade-CbLeUs7S.js";import"./Paper-Ca4rgQEJ.js";import"./useControlled-RZIZY8-C.js";import"./Stack-ClwGR_Ch.js";import"./styled-Wz6Z4Uga.js";import"./Divider-CuebH3Dd.js";import"./FieldHelpIcon-DQ3nayGk.js";import"./index-DS1ZdVNz.js";import"./index-BFdrycj9.js";import"./Tooltip-CV3fhIPH.js";import"./IconButton-8Ec7VkLh.js";import"./CircularProgress-QNpYF3E0.js";import"./Button-DWZjJ-VR.js";import"./FormLabel-BKHgwe-Y.js";const Je={title:"Form Components/FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx($,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(q,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(V,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var C,S,f;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
