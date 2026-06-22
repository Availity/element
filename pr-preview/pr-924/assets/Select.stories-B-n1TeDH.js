import{r as g,j as e}from"./iframe-DHkqGgbi.js";import{C}from"./Chip-CRUiWbeV.js";import{T as S}from"./Typography-BunlOy3h.js";import{F as v}from"./FormLabel-B39rbSWe.js";import{d as h}from"./Select-_ZrxUeya.js";import{a as x}from"./FormControl-Fq5qRX5l.js";import{v as b}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-ClLGuXdD.js";import{B as f}from"./Box-DMMQfXcC.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-C_iVTTlh.js";import"./createSvgIcon-BS4jmzRl.js";import"./SvgIcon-D9Y7JiS_.js";import"./memoTheme-vxEZSkJ8.js";import"./styled-BFLY3dn7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./ButtonBase-BwqJJF5q.js";import"./useTimeout-Bjfnw5AG.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./useEventCallback-LtXdtY4h.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-i96SYvKe.js";import"./FieldHelpIcon-wvX4SPIQ.js";import"./index-CrcoPoGw.js";import"./Form-CBGs9Zxl.js";import"./FaSvgIcon-BtkjvlUV.js";import"./IconButton-D5Zzj5BR.js";import"./Tooltip-YeMRA4-y.js";import"./useTheme-DTNKpojL.js";import"./useControlled-DlDi1BKb.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./utils-BQBkKAg6.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./IconButton-DmdwZwcg.js";import"./CircularProgress-D39cxiof.js";import"./Actions-BhLIra-T.js";import"./Input-BBd18T7c.js";import"./OutlinedInput-BwTPRsy8.js";import"./useFormControl-ZgfjO4em.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-Cb_v2ztz.js";import"./SelectFocusSourceContext-21Yu2WtQ.js";import"./Popover-B_wJwpIg.js";import"./mergeSlotProps-BNZZW_n2.js";import"./Modal-BHwxEFT_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D3ggRYPY.js";import"./Fade-CqjyPa8q.js";import"./Paper-Cer6O457.js";import"./List-BX9VmHQj.js";import"./Stack-CO_r3hOW.js";import"./styled-HR_WeqBB.js";import"./Divider-BaW80ssX.js";import"./dividerClasses-qU9lkgJy.js";import"./isMuiElement-Bo_RUhfi.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";const Te={title:"Form Components/Uncontrolled FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},p={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(x,{required:r,size:a,children:[e.jsx(v,{id:`${t.id}-label`,sx:b,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=u=>{s(u.target.value)};return e.jsxs(x,{required:r,size:a,children:[e.jsx(v,{id:`${t.id}-label`,sx:b,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx(S,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},u=["one","two","three","four"];return e.jsxs(x,{required:r,size:a,children:[e.jsx(v,{id:`${t.id}-label`,sx:b,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(C,{label:o},o))}),children:u.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
