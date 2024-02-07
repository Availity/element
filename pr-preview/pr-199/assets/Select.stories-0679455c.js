import{a as d,j as t}from"./jsx-runtime-390e5fc8.js";import{r as x}from"./index-570b25c1.js";import{C as y}from"./index-d6fdff6c.js";import"./FieldHelpIcon-4403612a.js";import{F as M}from"./FormLabel-0e537d36.js";import{S as g}from"./RadioGroup-fa3c9d14.js";import"./Input-995ea178.js";import"./index-a67dd6a2.js";import{F}from"./FormControl-76ef8a2c.js";import{v as I}from"./visuallyHidden-14c3de6e.js";import{M as i}from"./MenuItem-b5195172.js";import{B as z}from"./Box-df8a6414.js";import"./_commonjsHelpers-042e6b4d.js";import"./Chip-0a515c79.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-b91027d9.js";import"./SvgIcon-4a92f20a.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./ButtonBase-e49cd770.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./index-9681c8ff.js";import"./index-d61120f8.js";import"./faCircleArrowRight-a1a581c0.js";import"./index-72be33c9.js";import"./faMagnifyingGlass-482fd726.js";import"./index-407eec83.js";import"./Button-f5f3570b.js";import"./Tooltip-bac6b43c.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-7a512b16.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-d91b4b62.js";import"./LoadingButton-f3e3dfec.js";import"./extends-90dea224.js";import"./CircularProgress-9882927c.js";import"./FormControlLabel-34fd3025.js";import"./utils-3d35716f.js";import"./Typography-cb5a2c80.js";import"./extendSxProp-b1abb964.js";import"./Stack-ded40119.js";import"./styled-5c6c15e1.js";import"./FormLabel-ae04d927.js";import"./FormHelperText-8ba5d276.js";import"./Divider-c3141017.js";import"./dividerClasses-871b72e6.js";import"./Select-e3d164a2.js";import"./react-is.production.min-a192e302.js";import"./Menu-20281694.js";import"./Popover-c29df6e8.js";import"./Modal-c0d06b41.js";import"./Backdrop-374fdef5.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-23216610.js";import"./debounce-517eeb3c.js";import"./List-61c808de.js";import"./OutlinedInput-c5324d24.js";import"./GlobalStyles-0727d895.js";import"./RadioGroup-e5dc21e3.js";import"./SwitchBase-6b7028c9.js";import"./FormGroup-99a23a63.js";import"./isMuiElement-6907f060.js";const Xe={title:"Components/FormUtils/Select",component:g,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},n={render:({required:a,size:m,...e})=>{const[p,s]=x.useState(""),u=c=>{s(c.target.value)};return d(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),d(g,{value:p,onChange:u,labelId:`${e.id}-label`,...e,children:[t(i,{value:10,children:"10"}),t(i,{value:20,children:"20"}),t(i,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},l={render:({required:a,size:m,...e})=>{const[p,s]=x.useState([]),u=r=>{const{target:{value:o}}=r;s(typeof o=="string"?o.split(","):o)},c=["one","two","three","four"];return d(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),t(g,{...e,labelId:`${e.id}-label`,value:p,onChange:u,renderValue:r=>t(z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(o=>t(y,{label:o},o))}),children:c.map(r=>t(i,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var h,v,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    required,
    size,
    ...args
  }: SelectProps) => {
    const [count, setCount] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setCount((event.target.value as string));
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
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var C,f,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const Ye=["_Select","_MultiSelect"];export{l as _MultiSelect,n as _Select,Ye as __namedExportsOrder,Xe as default};
//# sourceMappingURL=Select.stories-0679455c.js.map
