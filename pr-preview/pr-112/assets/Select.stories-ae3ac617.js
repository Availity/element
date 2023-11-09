import{a as c,j as t}from"./jsx-runtime-390e5fc8.js";import{r as x}from"./index-570b25c1.js";import{C as y}from"./index-7b2a929f.js";import"./FieldHelpIcon-3b6383e6.js";import{F as M}from"./FormControlLabel-a169a36f.js";import{S as g}from"./Select-0900ce38.js";import"./Input-ee6814be.js";import{F}from"./FormLabel-26dfe09c.js";import{v as I}from"./visuallyHidden-14c3de6e.js";import{M as i}from"./MenuItem-2927656e.js";import{B as z}from"./Box-ca2a0b09.js";import"./_commonjsHelpers-042e6b4d.js";import"./Chip-fcd9692c.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-359b5f59.js";import"./SvgIcon-b52b22c3.js";import"./useThemeProps-018254e6.js";import"./styled-7846e708.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-f1b77b46.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./index-9681c8ff.js";import"./index-c91bacb5.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./index-4f46ff89.js";import"./Button-676c50e4.js";import"./Tooltip-e75628f1.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-f5561129.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de7b27e6.js";import"./LoadingButton-23ede12c.js";import"./extends-90dea224.js";import"./CircularProgress-924892c6.js";import"./FormControlLabel-eda9707b.js";import"./utils-3d35716f.js";import"./Typography-8f39b1cb.js";import"./extendSxProp-9115426f.js";import"./Stack-caeba03e.js";import"./styled-11d1647d.js";import"./FormHelperText-eb61de0b.js";import"./Select-1e6b8376.js";import"./react-is.production.min-a192e302.js";import"./Menu-a816b978.js";import"./Modal-dc5a21fa.js";import"./Backdrop-68fb5a34.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-2d2ada67.js";import"./debounce-517eeb3c.js";import"./OutlinedInput-5c4aca78.js";import"./GlobalStyles-bc6ce36c.js";import"./Divider-7fb78c99.js";import"./dividerClasses-b19abef8.js";import"./isMuiElement-6907f060.js";const Ue={title:"Components/FormUtils/Select",component:g,tags:["autodocs"]},o={render:({required:a,size:m,...e})=>{const[p,s]=x.useState(""),u=d=>{s(d.target.value)};return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),c(g,{value:p,onChange:u,labelId:`${e.id}-label`,...e,children:[t(i,{value:10,children:"10"}),t(i,{value:20,children:"20"}),t(i,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},l={render:({required:a,size:m,...e})=>{const[p,s]=x.useState([]),u=r=>{const{target:{value:n}}=r;s(typeof n=="string"?n.split(","):n)},d=["one","two","three","four"];return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),t(g,{...e,labelId:`${e.id}-label`,value:p,onChange:u,renderValue:r=>t(z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(n=>t(y,{label:n},n))}),children:d.map(r=>t(i,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var h,v,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const Ae=["_Select","_MultiSelect"];export{l as _MultiSelect,o as _Select,Ae as __namedExportsOrder,Ue as default};
//# sourceMappingURL=Select.stories-ae3ac617.js.map
