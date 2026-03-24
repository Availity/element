import{j as e,r as h}from"./iframe-BP-fstPH.js";import{C as x}from"./index-Cqrks9IV.js";import{F as a}from"./FormControl-f7wPjL1x.js";import{I as g}from"./Input-CQmBmnNO.js";import{F}from"./FormHelperText-DC_sfDSF.js";import{S as C}from"./Select-DKwjQhwN.js";import{M as m}from"./MenuItem-CGBePHhN.js";import{B as v}from"./Box-yuve2Yeg.js";import{F as d}from"./FormLabel-DooA424k.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-DdRZLEe_.js";import"./createSvgIcon-CdaKSufU.js";import"./SvgIcon-BNSNkhkk.js";import"./memoTheme-CBW4mAKK.js";import"./styled-QS_6ePhI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-AMpyQgX8.js";import"./mergeSlotProps-CZ6XbOjr.js";import"./useForkRef-kN7FeyJY.js";import"./ButtonBase-CN3Lj4mC.js";import"./useTimeout-aFoefsbK.js";import"./TransitionGroupContext-CBWt0gZQ.js";import"./useEventCallback--hrt0XPn.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BqU37Iip.js";import"./isMuiElement-DVbYF-_U.js";import"./OutlinedInput-DAVO5nXI.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./index-Ds-ZEgLG.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./FormHelperText-C4xW4xrL.js";import"./Select-BKUFFh0V.js";import"./Menu-B8YLwSTz.js";import"./useSlotProps-B35r-AKt.js";import"./Popover-DZnVKWt8.js";import"./Portal-DXb3wffR.js";import"./useTheme-8xMS95AC.js";import"./utils-ct7xOGzP.js";import"./getReactElementRef-rCjbZXAY.js";import"./mergeSlotProps-BN9RGjlA.js";import"./Modal-AZaAAX9Q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Du2lwHJG.js";import"./Fade-DdOD_q3t.js";import"./Paper-BbZw2l2T.js";import"./List-BJHgVsR-.js";import"./useControlled-C1wvNNpf.js";import"./Stack-DimDvg5e.js";import"./styled-CP91GCBe.js";import"./Divider-jfkURQMV.js";import"./dividerClasses-qU9lkgJy.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./FieldHelpIcon-CT4FEbwX.js";import"./index-BiBDMnSv.js";import"./index-CUBSMbdA.js";import"./Tooltip-CFDxDxIS.js";import"./IconButton-CG0C3HM8.js";import"./CircularProgress-CgtN00kw.js";import"./Button-Bi9jGuft.js";import"./FormLabel-DabwHVcZ.js";const ze={title:"Form Components/FormUtils/FormControl",component:a,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},l={render:o=>e.jsxs(a,{...o,children:[e.jsx(d,{htmlFor:"input",children:"Label"}),e.jsx(g,{inputProps:{id:"input"}}),e.jsx(F,{children:"Helper Text"})]})},p={render:o=>{const[n,s]=h.useState(""),u=c=>{s(c.target.value)};return e.jsxs(a,{...o,children:[e.jsx(d,{id:"count-label",children:"Count"}),e.jsxs(C,{value:n,onChange:u,labelId:"count-label",children:[e.jsx(m,{value:10,children:"10"}),e.jsx(m,{value:20,children:"20"}),e.jsx(m,{value:30,children:"30"})]})]})},args:{size:"small"}},i={render:o=>{const[n,s]=h.useState([]),u=t=>{const{target:{value:r}}=t;s(typeof r=="string"?r.split(","):r)},c=["one","two","three","four"];return e.jsxs(a,{...o,children:[e.jsx(d,{id:"multiple-chip-label",children:"Counts"}),e.jsx(C,{labelId:"multiple-chip-label",multiple:!0,value:n,onChange:u,renderValue:t=>e.jsx(v,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(r=>e.jsx(x,{label:r},r))}),children:c.map(t=>e.jsx(m,{value:t,children:t},t))})]})},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
