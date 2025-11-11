import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BSuoOqEd.js";import{C as M}from"./index-CzBWDcEW.js";import{F as a}from"./FormControl-Drbi3xw9.js";import{I as L}from"./Input-BWnHM8VN.js";import{F as V}from"./FormHelperText-BDhJHZzi.js";import{S as I}from"./Select-mVZUFshg.js";import{M as i}from"./MenuItem-pDWsesgW.js";import{B as y}from"./Box-BAprLmuU.js";import{F as d}from"./FormLabel-CK-vVFMe.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Chip-D0HJqAnB.js";import"./identifier-DhnHujDJ.js";import"./createSvgIcon-DjY4rWdK.js";import"./SvgIcon-enpUMgPP.js";import"./memoTheme-BwIkkReu.js";import"./styled-9znMky1q.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-jI6_c_PV.js";import"./mergeSlotProps-C8ahzxnq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BIkqQIqh.js";import"./ButtonBase-AdAh9sBA.js";import"./useTimeout-B9dULhq6.js";import"./TransitionGroupContext-CcytU7uK.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BP1ipPfY.js";import"./isMuiElement-CsRUsG_W.js";import"./OutlinedInput-D6BW5ZNV.js";import"./formControlState-Dq1zat_P.js";import"./index-DtRw77fL.js";import"./extendSxProp-plByhdXY.js";import"./useTheme-C_c7PR3o.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./index-BgHLshU-.js";import"./faCircleArrowRight-DSzUu1Qy.js";import"./faUser-D77uLSLS.js";import"./FormHelperText-C0N0yP7T.js";import"./Select-zHj_PMX3.js";import"./Menu-Zm6-FwvC.js";import"./index-bqlmQ0VS.js";import"./useSlotProps-BphRKsXg.js";import"./Popover-BxuONtmd.js";import"./Portal-BleVqemi.js";import"./useTheme-DG5qVMsu.js";import"./utils-DuVTnmV7.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./getReactElementRef-B8liFQVS.js";import"./mergeSlotProps-1djKqk8T.js";import"./Modal-DRFlzA1R.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4Fx8sqp.js";import"./Fade-BMGLcTA9.js";import"./Paper-BZZ0Jx2l.js";import"./List-CmPLZKsv.js";import"./useControlled-DUUijreW.js";import"./useId-kjFOwFR3.js";import"./Stack-C-7_RWLD.js";import"./styled-BN1MHGNr.js";import"./useThemeProps-DxTj-Mj7.js";import"./Divider-DtIvDB1e.js";import"./dividerClasses-CxQzuCbE.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./FieldHelpIcon-BJ3cOfCP.js";import"./index-DJKl12U0.js";import"./index-DS7md1Ks.js";import"./Tooltip-bMNvQkmf.js";import"./IconButton-aAtY6dbQ.js";import"./CircularProgress-I3IM84c9.js";import"./Button-DMnfP4ih.js";import"./FormLabel-BjKtkMG2.js";const ot={title:"Form Components/FormUtils/FormControl",component:a,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},l={render:o=>e.jsxs(a,{...o,children:[e.jsx(d,{htmlFor:"input",children:"Label"}),e.jsx(L,{inputProps:{id:"input"}}),e.jsx(V,{children:"Helper Text"})]})},p={render:o=>{const[n,s]=j.useState(""),u=c=>{s(c.target.value)};return e.jsxs(a,{...o,children:[e.jsx(d,{id:"count-label",children:"Count"}),e.jsxs(I,{value:n,onChange:u,labelId:"count-label",children:[e.jsx(i,{value:10,children:"10"}),e.jsx(i,{value:20,children:"20"}),e.jsx(i,{value:30,children:"30"})]})]})},args:{size:"small"}},m={render:o=>{const[n,s]=j.useState([]),u=t=>{const{target:{value:r}}=t;s(typeof r=="string"?r.split(","):r)},c=["one","two","three","four"];return e.jsxs(a,{...o,children:[e.jsx(d,{id:"multiple-chip-label",children:"Counts"}),e.jsx(I,{labelId:"multiple-chip-label",multiple:!0,value:n,onChange:u,renderValue:t=>e.jsx(y,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(r=>e.jsx(M,{label:r},r))}),children:c.map(t=>e.jsx(i,{value:t,children:t},t))})]})},args:{}};var h,C,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (props: FormControlProps) => <FormControl {...props}>
      <FormLabel htmlFor="input">Label</FormLabel>
      <Input inputProps={{
      id: 'input'
    }} />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var g,F,v;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (props: FormControlProps) => {
    const [count, setCount] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };
    return <FormControl {...props}>
        <FormLabel id="count-label">Count</FormLabel>
        <Select value={count} onChange={handleChange} labelId="count-label">
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>;
  },
  args: {
    size: 'small'
  }
}`,...(v=(F=p.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var b,f,S;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (props: FormControlProps) => {
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
    return <FormControl {...props}>
        <FormLabel id="multiple-chip-label">Counts</FormLabel>
        <Select labelId="multiple-chip-label" multiple value={multiValue} onChange={handleChange} renderValue={(selected: typeof multiValue) => <Box sx={{
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
  args: {}
}`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const lt=["_FormControl","_Select","_MultiSelect"];export{l as _FormControl,m as _MultiSelect,p as _Select,lt as __namedExportsOrder,ot as default};
