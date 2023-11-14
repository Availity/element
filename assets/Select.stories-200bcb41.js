import{a as c,j as t}from"./jsx-runtime-390e5fc8.js";import{r as x}from"./index-570b25c1.js";import{C as y}from"./index-230958ce.js";import"./FieldHelpIcon-4f97963b.js";import{F as M}from"./FormControlLabel-af230f34.js";import{S as g}from"./Select-8ac94f8d.js";import"./Input-e0f6717d.js";import{F}from"./FormLabel-4f2fd2fa.js";import{v as I}from"./visuallyHidden-14c3de6e.js";import{M as i}from"./MenuItem-5ce48f00.js";import{B as z}from"./Box-7f261278.js";import"./_commonjsHelpers-042e6b4d.js";import"./Chip-7a5c0e17.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-c7fbf131.js";import"./SvgIcon-f3e07af8.js";import"./useThemeProps-285a8f6c.js";import"./styled-78cd751f.js";import"./generateUtilityClasses-2915a045.js";import"./ButtonBase-6abe7f0b.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./index-9681c8ff.js";import"./index-d2e63b55.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./index-0da2058d.js";import"./Button-fef3f699.js";import"./Tooltip-86055ff5.js";import"./useTheme-b3699c65.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./Grow-d970f38d.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-1710581f.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-ef8e1194.js";import"./LoadingButton-64682683.js";import"./extends-90dea224.js";import"./CircularProgress-5cd64941.js";import"./FormControlLabel-4f099345.js";import"./utils-3d35716f.js";import"./Typography-125528da.js";import"./extendSxProp-4d42c058.js";import"./Stack-385eaa90.js";import"./styled-d8af9a46.js";import"./FormHelperText-5982fdaa.js";import"./Select-137f428a.js";import"./react-is.production.min-a192e302.js";import"./Menu-30d77e29.js";import"./Popover-f52592f3.js";import"./Modal-33895bdc.js";import"./Backdrop-c0ceeda2.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-adaa179d.js";import"./debounce-517eeb3c.js";import"./OutlinedInput-422528d5.js";import"./GlobalStyles-bb3c5388.js";import"./Divider-bf202c30.js";import"./dividerClasses-17e5b451.js";import"./isMuiElement-6907f060.js";const De={title:"Components/FormUtils/Select",component:g,tags:["autodocs"]},o={render:({required:a,size:m,...e})=>{const[p,s]=x.useState(""),u=d=>{s(d.target.value)};return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),c(g,{value:p,onChange:u,labelId:`${e.id}-label`,...e,children:[t(i,{value:10,children:"10"}),t(i,{value:20,children:"20"}),t(i,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},l={render:({required:a,size:m,...e})=>{const[p,s]=x.useState([]),u=r=>{const{target:{value:n}}=r;s(typeof n=="string"?n.split(","):n)},d=["one","two","three","four"];return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),t(g,{...e,labelId:`${e.id}-label`,value:p,onChange:u,renderValue:r=>t(z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(n=>t(y,{label:n},n))}),children:d.map(r=>t(i,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var h,v,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const Ge=["_Select","_MultiSelect"];export{l as _MultiSelect,o as _Select,Ge as __namedExportsOrder,De as default};
//# sourceMappingURL=Select.stories-200bcb41.js.map
