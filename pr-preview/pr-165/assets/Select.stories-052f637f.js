import{j as d,a as t}from"./jsx-runtime-a3bcee63.js";import{r as x}from"./index-570b25c1.js";import{C as y}from"./index-07d1cb73.js";import"./FieldHelpIcon-99432cf6.js";import{a as M}from"./FormControlLabel-a7198c4e.js";import{S as g}from"./Select-86845ae4.js";import"./Input-028a0127.js";import{F as I}from"./FormLabel-16418a49.js";import{v as F}from"./visuallyHidden-14c3de6e.js";import{M as i}from"./MenuItem-f0f733cf.js";import{B as z}from"./Box-0b96d669.js";import"./_commonjsHelpers-042e6b4d.js";import"./Chip-31690be4.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./useThemeProps-018254e6.js";import"./styled-7846e708.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./index-9681c8ff.js";import"./index-a94774e7.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./index-762a5bc1.js";import"./Button-d84dd9a0.js";import"./Tooltip-7ded6962.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-ddd7eed7.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./FormControlLabel-625d44f3.js";import"./utils-3d35716f.js";import"./Typography-f61e077a.js";import"./extendSxProp-9115426f.js";import"./Stack-8a417692.js";import"./styled-11d1647d.js";import"./FormHelperText-ae2a8f0e.js";import"./Divider-fcaf2f3a.js";import"./dividerClasses-b19abef8.js";import"./Select-93ca49f3.js";import"./react-is.production.min-a192e302.js";import"./Menu-1707273c.js";import"./Popover-3bb772b9.js";import"./Modal-0e6ffa9c.js";import"./Backdrop-49825a13.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-722ac472.js";import"./debounce-517eeb3c.js";import"./List-99d50e2c.js";import"./OutlinedInput-ce25e1de.js";import"./GlobalStyles-7ba993a7.js";import"./isMuiElement-6907f060.js";const Je={title:"Components/FormUtils/Select",component:g,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},n={render:({required:a,size:m,...e})=>{const[p,s]=x.useState(""),u=c=>{s(c.target.value)};return d(I,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:F,children:e.label}),d(g,{value:p,onChange:u,labelId:`${e.id}-label`,...e,children:[t(i,{value:10,children:"10"}),t(i,{value:20,children:"20"}),t(i,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},l={render:({required:a,size:m,...e})=>{const[p,s]=x.useState([]),u=r=>{const{target:{value:o}}=r;s(typeof o=="string"?o.split(","):o)},c=["one","two","three","four"];return d(I,{required:a,size:m,children:[t(M,{id:`${e.id}-label`,sx:F,children:e.label}),t(g,{...e,labelId:`${e.id}-label`,value:p,onChange:u,renderValue:r=>t(z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(o=>t(y,{label:o},o))}),children:c.map(r=>t(i,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var h,v,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const Ke=["_Select","_MultiSelect"];export{l as _MultiSelect,n as _Select,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=Select.stories-052f637f.js.map
