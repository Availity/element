import{j as e,r as h}from"./iframe-DV3He85V.js";import{C as x}from"./index-BLrJFtNx.js";import{F as a}from"./FormControl-DppqsHib.js";import{I as g}from"./Input-w1GBZ0b_.js";import{F}from"./FormHelperText-C_m71Pwe.js";import{S as C}from"./Select-yP5VT77z.js";import{M as m}from"./MenuItem-ClbGXAa3.js";import{B as v}from"./Box-BLEv-Mrp.js";import{F as d}from"./FormLabel-I0BCskiR.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-BHSLBHHU.js";import"./createSvgIcon-Dah6_HeO.js";import"./SvgIcon-BPrDg5y8.js";import"./memoTheme-CqO710ep.js";import"./styled-BUFH9864.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-D_lQT_km.js";import"./mergeSlotProps-BOgCOH-Y.js";import"./useForkRef-BjKAtTT0.js";import"./ButtonBase-CmkGGnOd.js";import"./useTimeout-Ckthjz3O.js";import"./TransitionGroupContext-DIj-4TH7.js";import"./useEventCallback-DWs5MTmZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BVnKZRJX.js";import"./isMuiElement-_HgZ6tG6.js";import"./OutlinedInput-wiNtXLYd.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./index-BjhlD0KS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./FormHelperText-OP92smCd.js";import"./Select-C5eTjdLt.js";import"./Menu-DtWOoTbV.js";import"./useSlotProps-Da-PnXIN.js";import"./Popover-B1b3gXrN.js";import"./Portal-C_yGG6TD.js";import"./useTheme-SfRUUZiP.js";import"./utils-Bwvx3eCn.js";import"./getReactElementRef-DFI1E4nz.js";import"./mergeSlotProps-CMPc2IAt.js";import"./Modal-wug12V1o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CGWgMRTN.js";import"./Fade-BX6Wa8dQ.js";import"./Paper-Dqu7MPEo.js";import"./List-DAdkMrgy.js";import"./useControlled-Ccx6itka.js";import"./Stack-eceoAOKj.js";import"./styled-CIy1Wxpq.js";import"./Divider-BHrLvxZ6.js";import"./dividerClasses-CxQzuCbE.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./FieldHelpIcon-BKBUQ4RL.js";import"./index-BiBDMnSv.js";import"./index-BfHLbFj4.js";import"./Tooltip-B-fI_KqI.js";import"./IconButton-CvMV_1wy.js";import"./CircularProgress-DhVft3f6.js";import"./Button-BaC_cxcf.js";import"./FormLabel-BaCofFNT.js";const ze={title:"Form Components/FormUtils/FormControl",component:a,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},l={render:o=>e.jsxs(a,{...o,children:[e.jsx(d,{htmlFor:"input",children:"Label"}),e.jsx(g,{inputProps:{id:"input"}}),e.jsx(F,{children:"Helper Text"})]})},p={render:o=>{const[n,s]=h.useState(""),u=c=>{s(c.target.value)};return e.jsxs(a,{...o,children:[e.jsx(d,{id:"count-label",children:"Count"}),e.jsxs(C,{value:n,onChange:u,labelId:"count-label",children:[e.jsx(m,{value:10,children:"10"}),e.jsx(m,{value:20,children:"20"}),e.jsx(m,{value:30,children:"30"})]})]})},args:{size:"small"}},i={render:o=>{const[n,s]=h.useState([]),u=t=>{const{target:{value:r}}=t;s(typeof r=="string"?r.split(","):r)},c=["one","two","three","four"];return e.jsxs(a,{...o,children:[e.jsx(d,{id:"multiple-chip-label",children:"Counts"}),e.jsx(C,{labelId:"multiple-chip-label",multiple:!0,value:n,onChange:u,renderValue:t=>e.jsx(v,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(r=>e.jsx(x,{label:r},r))}),children:c.map(t=>e.jsx(m,{value:t,children:t},t))})]})},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
