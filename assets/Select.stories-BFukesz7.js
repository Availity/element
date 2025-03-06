import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as f}from"./index-DcWiA9TO.js";import{C as F}from"./index-b-MJ-ye7.js";import"./FieldHelpIcon-D_brM4fg.js";import{F as S}from"./FormLabel-DZdwVmmu.js";import{S as d}from"./Switch-CR3eS5U8.js";import"./Input-BS67x0-8.js";import"./index-BtPDELIe.js";import{F as M}from"./FormControl-BPSU2g7t.js";import{v as j}from"./visuallyHidden-Dan1xhjv.js";import{M as l}from"./MenuItem-DHI5k2qe.js";import{B as I}from"./Box-DWnb8VZB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Chip-ALB5H4lg.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BVrIj09m.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DMWJB0MK.js";import"./index-4AU0IlPL.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./index-DLsH_p52.js";import"./Tooltip-CiiaKkqp.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./IconButton-Caxu-qgA.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./FormControlLabel-GqYWwHWT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Typography-CvSvtD2a.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./FormLabel-98YPf6ct.js";import"./RadioGroup-BogPRRDq.js";import"./SwitchBase-Z9YgLJlx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Select-hLZ2S4VH.js";import"./Menu-Byu17A6t.js";import"./Popover-ChEuM7rO.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./utils-DoM3o7-Q.js";import"./OutlinedInput-CQlxW3ax.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";import"./faCheck-B05F4ORy.js";import"./Switch-BqVUWLaW.js";import"./isMuiElement-DAzOCCHH.js";import"./listItemTextClasses-QA0fdXLT.js";const it={title:"Form Components/FormUtils/Select",component:d,tags:["autodocs"],args:{size:"small"},parameters:{docs:{controls:{exclude:["placeholder"]}}}},n={render:({required:a,size:m,...t})=>{const[p,s]=f.useState(""),u=c=>{s(c.target.value)};return e.jsxs(M,{required:a,size:m,children:[e.jsx(S,{id:`${t.id}-label`,sx:j,children:t.label}),e.jsxs(d,{value:p,onChange:u,labelId:`${t.id}-label`,...t,children:[e.jsx(l,{value:10,children:"10"}),e.jsx(l,{value:20,children:"20"}),e.jsx(l,{value:30,children:"30"})]})]})},args:{label:"count",id:"count",size:"small"}},i={render:({required:a,size:m,...t})=>{const[p,s]=f.useState([]),u=r=>{const{target:{value:o}}=r;s(typeof o=="string"?o.split(","):o)},c=["one","two","three","four"];return e.jsxs(M,{required:a,size:m,children:[e.jsx(S,{id:`${t.id}-label`,sx:j,children:t.label}),e.jsx(d,{...t,labelId:`${t.id}-label`,value:p,onChange:u,renderValue:r=>e.jsx(I,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(o=>e.jsx(F,{label:o},o))}),children:c.map(r=>e.jsx(l,{value:r,children:r},r))})]})},args:{label:"counts",id:"multiple-chip",size:"small",multiple:!0}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const lt=["_Select","_MultiSelect"];export{i as _MultiSelect,n as _Select,lt as __namedExportsOrder,it as default};
