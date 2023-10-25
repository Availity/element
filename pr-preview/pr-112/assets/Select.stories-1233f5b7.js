import{a as c,j as t}from"./jsx-runtime-390e5fc8.js";import{r as x}from"./index-570b25c1.js";import{C as y}from"./index-60161482.js";import"./FieldHelpIcon-375657a9.js";import{F as M}from"./FormControlLabel-70c64b56.js";import{S as g}from"./Select-e21ddb8f.js";import"./Input-caf7ccef.js";import{F}from"./FormLabel-c20a5ce1.js";import{v as I}from"./visuallyHidden-14c3de6e.js";import{M as i}from"./MenuItem-7ec041ec.js";import{B as z}from"./Box-ca2a0b09.js";import"./_commonjsHelpers-042e6b4d.js";import"./Chip-bd182597.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-a2702ab1.js";import"./SvgIcon-e7295b43.js";import"./useThemeProps-32d9d40f.js";import"./styled-ba967c06.js";import"./generateUtilityClasses-cabd787c.js";import"./ButtonBase-0a435f0a.js";import"./emotion-react.browser.esm-474fda6d.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./index-9681c8ff.js";import"./index-df413f1e.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./index-742560bc.js";import"./Button-c8d0f982.js";import"./Tooltip-db1cd215.js";import"./useTheme-4854111c.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-5e3a8791.js";import"./index-8a077077.js";import"./utils-57cc91c3.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-7604743a.js";import"./LoadingButton-1865c5d0.js";import"./extends-90dea224.js";import"./FormControlLabel-87163616.js";import"./utils-3d35716f.js";import"./Typography-45d8e817.js";import"./extendSxProp-9115426f.js";import"./Stack-4be8c4f6.js";import"./styled-b379d1d1.js";import"./FormHelperText-77c1615b.js";import"./Select-3e954196.js";import"./react-is.production.min-a192e302.js";import"./Menu-216583e1.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-5389b241.js";import"./OutlinedInput-ac666d53.js";import"./GlobalStyles-adf0b00b.js";import"./Divider-66f52528.js";import"./dividerClasses-bef686f3.js";import"./isMuiElement-6907f060.js";const He={title:"Components/FormUtils/Select",component:g,tags:["autodocs"]},o={render:({required:a,size:m,...e})=>{const[s,p]=x.useState(""),u=d=>{p(d.target.value)};return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),c(g,{value:s,onChange:u,labelId:`${e.id}-label`,...e,children:[t(i,{value:10,children:"10"}),t(i,{value:20,children:"20"}),t(i,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},l={render:({required:a,size:m,...e})=>{const[s,p]=x.useState([]),u=r=>{const{target:{value:n}}=r;p(typeof n=="string"?n.split(","):n)},d=["one","two","three","four"];return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),t(g,{...e,labelId:`${e.id}-label`,value:s,onChange:u,renderValue:r=>t(z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(n=>t(y,{label:n},n))}),children:d.map(r=>t(i,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var h,v,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var C,f,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const ke=["_Select","_MultiSelect"];export{l as _MultiSelect,o as _Select,ke as __namedExportsOrder,He as default};
//# sourceMappingURL=Select.stories-1233f5b7.js.map
