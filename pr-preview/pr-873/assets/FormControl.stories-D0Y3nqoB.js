import{j as e,r as h}from"./iframe-BACK_0qL.js";import{C as x}from"./index-BLN6o-wk.js";import{F as a}from"./FormControl-DSY8Auwb.js";import{I as g}from"./Input-FGzSm4ZC.js";import{F}from"./FormHelperText-BojK9A-w.js";import{S as C}from"./Select-DnYWrxfx.js";import{M as m}from"./MenuItem-CFZV2Jp4.js";import{B as v}from"./Box-yoY0NcWx.js";import{F as d}from"./FormLabel-BSfjFDxF.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-CuJsNABn.js";import"./createSvgIcon-BJ8pbv3g.js";import"./SvgIcon-BWD4KGVI.js";import"./memoTheme-CehCTkMp.js";import"./styled-CILYMfR2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-4KwJ1ZEX.js";import"./mergeSlotProps-Ce5vEJyz.js";import"./useForkRef-COVhBD0c.js";import"./ButtonBase-CDXMi9Z2.js";import"./useTimeout-Bbnn395Q.js";import"./TransitionGroupContext-B4j_r9NY.js";import"./useEventCallback-B1QjfuHc.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BhxRA0Wm.js";import"./isMuiElement-9m4N3JlX.js";import"./OutlinedInput-BBATfXzR.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./index-CThJnamY.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./FormHelperText-BT3PilzM.js";import"./Select-7via2PWA.js";import"./Menu-BLYO1-4m.js";import"./useSlotProps-DdDv6txA.js";import"./Popover-1PzWGKLc.js";import"./Portal-BBUkHp6C.js";import"./useTheme-CAH-7WS1.js";import"./utils-CTnKgbLp.js";import"./getReactElementRef-cseQ0t00.js";import"./mergeSlotProps-Bu0K3qzP.js";import"./Modal-DwWll_wO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-88X4YLU1.js";import"./Fade-BOPFrwB9.js";import"./Paper-DbocNi97.js";import"./List-CHkCl1_C.js";import"./useControlled-Bvcrhgjz.js";import"./Stack-BZ18XAbQ.js";import"./styled-D6EtJyjy.js";import"./Divider-Oendm3Q_.js";import"./dividerClasses-CxQzuCbE.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./FieldHelpIcon-DIqkCFnd.js";import"./index-BiBDMnSv.js";import"./index-DezS3mgp.js";import"./Tooltip-CvzAHSPe.js";import"./IconButton-fOR7z52u.js";import"./CircularProgress-BxeLfgty.js";import"./Button-DJ1l2vuX.js";import"./FormLabel-Dno3GiSo.js";const ze={title:"Form Components/FormUtils/FormControl",component:a,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},l={render:o=>e.jsxs(a,{...o,children:[e.jsx(d,{htmlFor:"input",children:"Label"}),e.jsx(g,{inputProps:{id:"input"}}),e.jsx(F,{children:"Helper Text"})]})},p={render:o=>{const[n,s]=h.useState(""),u=c=>{s(c.target.value)};return e.jsxs(a,{...o,children:[e.jsx(d,{id:"count-label",children:"Count"}),e.jsxs(C,{value:n,onChange:u,labelId:"count-label",children:[e.jsx(m,{value:10,children:"10"}),e.jsx(m,{value:20,children:"20"}),e.jsx(m,{value:30,children:"30"})]})]})},args:{size:"small"}},i={render:o=>{const[n,s]=h.useState([]),u=t=>{const{target:{value:r}}=t;s(typeof r=="string"?r.split(","):r)},c=["one","two","three","four"];return e.jsxs(a,{...o,children:[e.jsx(d,{id:"multiple-chip-label",children:"Counts"}),e.jsx(C,{labelId:"multiple-chip-label",multiple:!0,value:n,onChange:u,renderValue:t=>e.jsx(v,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(r=>e.jsx(x,{label:r},r))}),children:c.map(t=>e.jsx(m,{value:t,children:t},t))})]})},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
