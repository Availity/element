import{j as e,r as h}from"./iframe-D1NCSytB.js";import{C as x}from"./index-BVQ3957U.js";import{F as a}from"./FormControl-aaJETRc2.js";import{I as g}from"./Input-qR5gWo9Q.js";import{F}from"./FormHelperText-XNOvsvOJ.js";import{S as C}from"./Select-DVSzCmQr.js";import{M as m}from"./MenuItem-BOtI9qPe.js";import{B as v}from"./Box-Dk8U9NOX.js";import{F as d}from"./FormLabel-CBMBeY_o.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-CXbCJtI2.js";import"./createSvgIcon-BJL25Yge.js";import"./SvgIcon-B4wc5_NU.js";import"./memoTheme-DOGX_B28.js";import"./styled-BbCZmQsA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-D1NHtjkn.js";import"./mergeSlotProps-DlDajhlR.js";import"./useForkRef-BpGj9yaf.js";import"./ButtonBase-BAUCY_Oi.js";import"./useTimeout-Bh_i1JKi.js";import"./TransitionGroupContext-BkHkrwff.js";import"./useEventCallback-C8LcGziW.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BPWmZTOm.js";import"./isMuiElement-DU2Yi2t-.js";import"./OutlinedInput-mW4xZACZ.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./index-BYdlpT-l.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./FormHelperText-00W-iRAK.js";import"./Select-BFdMvHb_.js";import"./Menu-CXdeS85n.js";import"./useSlotProps-WTXiNqL0.js";import"./Popover-2BPfyVKB.js";import"./Portal-DSDwhvGd.js";import"./useTheme-D3cMIjr1.js";import"./utils-DI3cRngQ.js";import"./getReactElementRef-D8NIfLKv.js";import"./mergeSlotProps-LIb7wZP9.js";import"./Modal-gZmGceMQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CXhAj7P7.js";import"./Fade-D-LTijLB.js";import"./Paper-CBE46eXP.js";import"./List-BopVit6a.js";import"./useControlled-Czfb1u9c.js";import"./Stack-BQ77EqZr.js";import"./styled-DdVDvF5f.js";import"./Divider-BuOS6m7g.js";import"./dividerClasses-CxQzuCbE.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./FieldHelpIcon-pBI1aGjb.js";import"./index-BiBDMnSv.js";import"./index-BPnk7Q5j.js";import"./Tooltip-C79jCpae.js";import"./IconButton-Cqago1eB.js";import"./CircularProgress-DKmuW22e.js";import"./Button-Dci9Exp7.js";import"./FormLabel-Dky5iOJU.js";const ze={title:"Form Components/FormUtils/FormControl",component:a,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},l={render:o=>e.jsxs(a,{...o,children:[e.jsx(d,{htmlFor:"input",children:"Label"}),e.jsx(g,{inputProps:{id:"input"}}),e.jsx(F,{children:"Helper Text"})]})},p={render:o=>{const[n,s]=h.useState(""),u=c=>{s(c.target.value)};return e.jsxs(a,{...o,children:[e.jsx(d,{id:"count-label",children:"Count"}),e.jsxs(C,{value:n,onChange:u,labelId:"count-label",children:[e.jsx(m,{value:10,children:"10"}),e.jsx(m,{value:20,children:"20"}),e.jsx(m,{value:30,children:"30"})]})]})},args:{size:"small"}},i={render:o=>{const[n,s]=h.useState([]),u=t=>{const{target:{value:r}}=t;s(typeof r=="string"?r.split(","):r)},c=["one","two","three","four"];return e.jsxs(a,{...o,children:[e.jsx(d,{id:"multiple-chip-label",children:"Counts"}),e.jsx(C,{labelId:"multiple-chip-label",multiple:!0,value:n,onChange:u,renderValue:t=>e.jsx(v,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(r=>e.jsx(x,{label:r},r))}),children:c.map(t=>e.jsx(m,{value:t,children:t},t))})]})},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (props: FormControlProps) => <FormControl {...props}>
      <FormLabel htmlFor="input">Label</FormLabel>
      <Input inputProps={{
      id: 'input'
    }} />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Be=["_FormControl","_Select","_MultiSelect"];export{l as _FormControl,i as _MultiSelect,p as _Select,Be as __namedExportsOrder,ze as default};
