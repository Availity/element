import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as f}from"./index-DcWiA9TO.js";import{C as F}from"./index-CYbMSlfp.js";import"./FieldHelpIcon-D6BcmGxD.js";import{F as S}from"./FormLabel-BVRRrrvc.js";import{S as d}from"./Switch-ChiITbZR.js";import"./Input-APsdfdZo.js";import"./index-Bssefeeu.js";import{F as M}from"./FormControl-BhCdTdWt.js";import{v as j}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-DmzwdCRd.js";import{B as I}from"./Box-DR5TX31P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Chip-CjjfMMY_.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./createSvgIcon-BzSwLqYD.js";import"./SvgIcon-DfAk99tL.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BVrIj09m.js";import"./ButtonBase-Ctwr4_Dd.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DMWJB0MK.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./index-DSGElAqY.js";import"./Tooltip-BNHD4B5V.js";import"./index-nos-0K8U.js";import"./useTheme-Cf-RAc4Y.js";import"./useTheme-DwYC2ms6.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-D32Mdiva.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DE50rPTb.js";import"./IconButton-DGohL5ME.js";import"./CircularProgress-D2topXWR.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./FormControlLabel-CImDabQe.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Typography-Dw3TlP36.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./FormLabel-CZFypZnO.js";import"./RadioGroup-B7AA9dKi.js";import"./SwitchBase-CHDa-0k7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Select-Dt0UCwxY.js";import"./Menu-BU9jXi-3.js";import"./Popover-CSXcjUnK.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DoDJPSvm.js";import"./Modal-B_4-9GXq.js";import"./Backdrop-4xfgJS0q.js";import"./Fade-DlB6bWB0.js";import"./List-BRpAtMOZ.js";import"./utils-DoM3o7-Q.js";import"./OutlinedInput-BeuFtjMr.js";import"./Stack-BPYMGdgv.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./Divider-Dys0WftY.js";import"./dividerClasses-C6lHB_qP.js";import"./faCheck-B05F4ORy.js";import"./Switch-CXk7mhi6.js";import"./isMuiElement-DAzOCCHH.js";import"./listItemTextClasses-DjWz3xcn.js";const ot={title:"Form Components/FormUtils/Select",component:d,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},n={render:({required:a,size:m,...t})=>{const[p,s]=f.useState(""),u=c=>{s(c.target.value)};return e.jsxs(M,{required:a,size:m,children:[e.jsx(S,{id:`${t.id}-label`,sx:j,children:t.label}),e.jsxs(d,{value:p,onChange:u,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},i={render:({required:a,size:m,...t})=>{const[p,s]=f.useState([]),u=r=>{const{target:{value:o}}=r;s(typeof o=="string"?o.split(","):o)},c=["one","two","three","four"];return e.jsxs(M,{required:a,size:m,children:[e.jsx(S,{id:`${t.id}-label`,sx:j,children:t.label}),e.jsx(d,{...t,labelId:`${t.id}-label`,value:p,onChange:u,renderValue:r=>e.jsx(I,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(o=>e.jsx(F,{label:o},o))}),children:c.map(r=>e.jsx(l,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,b,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const nt=["_Select","_MultiSelect"];export{i as _MultiSelect,n as _Select,nt as __namedExportsOrder,ot as default};
