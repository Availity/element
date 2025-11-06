import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as g}from"./index-BgYLq7fD.js";import{C as V}from"./index-B9N8F40Y.js";import{T as $}from"./index-DSF7aQ5o.js";import{F as v}from"./FormControl-BpN01e6f.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-BeNs4KLH.js";import{B as q}from"./Box-Dv31mJKI.js";import{S as h}from"./Select-C_3Xljog.js";import{F as b}from"./FormLabel-BPe1YWsi.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Chip-BprfrhNF.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./createSvgIcon-BWWwXn7v.js";import"./SvgIcon-CiBNlF9H.js";import"./memoTheme-CpoNRPWX.js";import"./styled-CKuRQFSa.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./generateUtilityClasses-whvyra8-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Dz4aGlyk.js";import"./ButtonBase-D97P5WV0.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-COSof5sR.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";import"./useTheme-Ib01SJ3a.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-t_-EwZHM.js";import"./isMuiElement-DiOAsJE6.js";import"./List-eXGzl-Dz.js";import"./listItemIconClasses-Cex_GvQn.js";import"./listItemTextClasses-CumCrahA.js";import"./dividerClasses-0g4QmK6Y.js";import"./index-CIzqi3uD.js";import"./faCircleArrowRight-DSzUu1Qy.js";import"./faUser-D77uLSLS.js";import"./Input-B9pyWBEs.js";import"./OutlinedInput-B93mfhOp.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-BRLJ6o5z.js";import"./Menu-GaZ6ImQN.js";import"./index-DyJdRKzS.js";import"./useSlotProps-BmqT0tgx.js";import"./resolveComponentProps-CCNxqvxI.js";import"./Popover-CQBNnNRW.js";import"./useSlot-1VRyIerd.js";import"./Portal-C2J4q3Ji.js";import"./useTheme-Cx1wRXKO.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./getReactElementRef-Df0xbma2.js";import"./Paper-4P5FqKie.js";import"./Modal-CezAubrN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-TXxSV-j9.js";import"./Fade-BCUt9uX4.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./Stack-qbqOHiMo.js";import"./styled-Dbr83ACF.js";import"./useThemeProps-Do5o_sjG.js";import"./Divider-DJW73rZ3.js";import"./FieldHelpIcon-CaoA1T49.js";import"./index-DJKl12U0.js";import"./index-DnNfvsmq.js";import"./Tooltip-CIyLwlBA.js";import"./IconButton-D_kG6RhR.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./FormLabel-BDxB3zbH.js";const it={title:"Form Components/FormUtils/Select",component:h,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},u={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=p=>{s(p.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},d={render:({required:r,size:a,...t})=>{const[i,s]=g.useState(""),m=p=>{s(p.target.value)};return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsxs(h,{value:i,onChange:m,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small",displayEmpty:!0,renderValue:r=>r||e.jsx($,{color:"text.placeholder",children:"Placeholder"})}},c={render:({required:r,size:a,...t})=>{const[i,s]=g.useState([]),m=n=>{const{target:{value:o}}=n;s(typeof o=="string"?o.split(","):o)},p=["one","two","three","four"];return e.jsxs(v,{required:r,size:a,children:[e.jsx(b,{id:`${t.id}-label`,sx:x,children:t.label}),e.jsx(h,{...t,labelId:`${t.id}-label`,value:i,onChange:m,renderValue:n=>e.jsx(q,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:n.map(o=>e.jsx(V,{label:o},o))}),children:p.map(n=>e.jsx(l,{value:n,children:n},n))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var C,S,f;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(S=u.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,j,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(F=c.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const st=["_Select","_SelectPlaceholder","_MultiSelect"];export{c as _MultiSelect,u as _Select,d as _SelectPlaceholder,st as __namedExportsOrder,it as default};
