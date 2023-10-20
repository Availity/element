import{a as c,j as t}from"./jsx-runtime-390e5fc8.js";import{r as x}from"./index-570b25c1.js";import{C as y}from"./index-d80280fa.js";import"./FieldHelpIcon-3b24110a.js";import{F as M}from"./FormControlLabel-f9cfec25.js";import{S as g}from"./Select-b6162f72.js";import"./Input-936d906c.js";import{F}from"./FormLabel-a07a3cea.js";import{v as I}from"./visuallyHidden-14c3de6e.js";import{M as i}from"./MenuItem-919a3c91.js";import{B as z}from"./Box-7f261278.js";import"./_commonjsHelpers-042e6b4d.js";import"./Chip-35828233.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-e4b87ef5.js";import"./SvgIcon-ab7aa383.js";import"./useThemeProps-db7202c2.js";import"./styled-188025da.js";import"./generateUtilityClasses-f776b170.js";import"./ButtonBase-6040f690.js";import"./emotion-react.browser.esm-69a15469.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./index-9681c8ff.js";import"./index-f35eb24e.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./index-49af8d8b.js";import"./Button-9af3d166.js";import"./Tooltip-d9214433.js";import"./useTheme-3a36d7a0.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-1710581f.js";import"./utils-df51f77d.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-15cd5b0a.js";import"./LoadingButton-2cbf4819.js";import"./extends-90dea224.js";import"./FormControlLabel-0fb4668c.js";import"./utils-3d35716f.js";import"./Typography-a571125c.js";import"./extendSxProp-4d42c058.js";import"./Stack-aed56d46.js";import"./styled-4350ac6b.js";import"./FormHelperText-ffbef46f.js";import"./Select-d77596e5.js";import"./react-is.production.min-a192e302.js";import"./Menu-b3818dcf.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-4c319fed.js";import"./OutlinedInput-dc04b75a.js";import"./GlobalStyles-8a837dd0.js";import"./Divider-e6df2ce9.js";import"./dividerClasses-d4e8510c.js";import"./isMuiElement-6907f060.js";const je={title:"Components/FormUtils/Select",component:g,tags:["autodocs"]},o={render:({required:a,size:m,...e})=>{const[s,p]=x.useState(""),u=d=>{p(d.target.value)};return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),c(g,{value:s,onChange:u,labelId:`${e.id}-label`,...e,children:[t(i,{value:10,children:"10"}),t(i,{value:20,children:"20"}),t(i,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},l={render:({required:a,size:m,...e})=>{const[s,p]=x.useState([]),u=r=>{const{target:{value:n}}=r;p(typeof n=="string"?n.split(","):n)},d=["one","two","three","four"];return c(F,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:I,children:e.label}),t(g,{...e,labelId:`${e.id}-label`,value:s,onChange:u,renderValue:r=>t(z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(n=>t(y,{label:n},n))}),children:d.map(r=>t(i,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var h,v,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const He=["_Select","_MultiSelect"];export{l as _MultiSelect,o as _Select,He as __namedExportsOrder,je as default};
//# sourceMappingURL=Select.stories-a47d1c27.js.map
