import{j as e,r as h}from"./iframe-PQChuD5P.js";import{C as x}from"./index-F_LL1ALA.js";import{F as a}from"./FormControl-DvecvwWK.js";import{I as g}from"./Input-D1F5xoSZ.js";import{F}from"./FormHelperText-Ct8tBTkQ.js";import{S as C}from"./Select-BBgY8YEY.js";import{M as m}from"./MenuItem-DVtKGjx9.js";import{B as v}from"./Box-DSvqrQJU.js";import{F as d}from"./FormLabel-Cvt6fBYi.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-DpXPWsPl.js";import"./createSvgIcon-DUCTV8Uh.js";import"./SvgIcon-Ct-k9MaL.js";import"./memoTheme-CVvKr3an.js";import"./styled-IO14y-za.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-Budp5-i0.js";import"./mergeSlotProps-D2tsKCVf.js";import"./useForkRef-CKG9IprU.js";import"./ButtonBase-DrAbzSCI.js";import"./useTimeout-CrdRO3z-.js";import"./TransitionGroupContext-4uG2Mcc_.js";import"./useEventCallback-CVuBVoUk.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CbIOiaJO.js";import"./isMuiElement-BKekQHvL.js";import"./OutlinedInput-D5_x8OFb.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./index-B-1E6jc-.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./FormHelperText-Cawj5hZz.js";import"./Select-bU8x50qw.js";import"./Menu-BolQPLJ0.js";import"./useSlotProps-NXvv48zc.js";import"./Popover-DekC-QM6.js";import"./Portal-CcwI5hbz.js";import"./useTheme-D_lM5llQ.js";import"./utils-Bn3set7p.js";import"./getReactElementRef-CkDqfdPm.js";import"./mergeSlotProps-Cm7mpwkx.js";import"./Modal-iRzmQDx3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DtcvWdU4.js";import"./Fade-BKGIBsen.js";import"./Paper-DzmRSJAJ.js";import"./List-DWc9uyQQ.js";import"./useControlled-DL9Iut2g.js";import"./Stack-DzAEF9zt.js";import"./styled-C9qQOw_O.js";import"./Divider-DaI22C2v.js";import"./dividerClasses-CxQzuCbE.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./FieldHelpIcon-DUw16WpV.js";import"./index-BiBDMnSv.js";import"./index-CPbMBP85.js";import"./Tooltip-D_0sM1X3.js";import"./IconButton-uRCWfHSj.js";import"./CircularProgress-C9w8hYD6.js";import"./Button-J7D5oBem.js";import"./FormLabel-GejnCESN.js";const ze={title:"Form Components/FormUtils/FormControl",component:a,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},l={render:o=>e.jsxs(a,{...o,children:[e.jsx(d,{htmlFor:"input",children:"Label"}),e.jsx(g,{inputProps:{id:"input"}}),e.jsx(F,{children:"Helper Text"})]})},p={render:o=>{const[n,s]=h.useState(""),u=c=>{s(c.target.value)};return e.jsxs(a,{...o,children:[e.jsx(d,{id:"count-label",children:"Count"}),e.jsxs(C,{value:n,onChange:u,labelId:"count-label",children:[e.jsx(m,{value:10,children:"10"}),e.jsx(m,{value:20,children:"20"}),e.jsx(m,{value:30,children:"30"})]})]})},args:{size:"small"}},i={render:o=>{const[n,s]=h.useState([]),u=t=>{const{target:{value:r}}=t;s(typeof r=="string"?r.split(","):r)},c=["one","two","three","four"];return e.jsxs(a,{...o,children:[e.jsx(d,{id:"multiple-chip-label",children:"Counts"}),e.jsx(C,{labelId:"multiple-chip-label",multiple:!0,value:n,onChange:u,renderValue:t=>e.jsx(v,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(r=>e.jsx(x,{label:r},r))}),children:c.map(t=>e.jsx(m,{value:t,children:t},t))})]})},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
