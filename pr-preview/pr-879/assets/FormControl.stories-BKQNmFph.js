import{j as e,r as h}from"./iframe-BRLvBxWA.js";import{C as x}from"./index-2vwQw0-k.js";import{F as a}from"./FormControl-CEdtR734.js";import{I as g}from"./Input-CUXMZTe6.js";import{F}from"./FormHelperText-BE_nV4If.js";import{S as C}from"./Select-YDtCvxwW.js";import{M as m}from"./MenuItem-BH1c0Vb-.js";import{B as v}from"./Box-zm6tG-Ly.js";import{F as d}from"./FormLabel-CsL5bQN7.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-DAsUgHbr.js";import"./createSvgIcon-Bf5nQhSb.js";import"./SvgIcon-Ddzah0KZ.js";import"./memoTheme-KNjPhf5l.js";import"./styled-CZ9R0hiM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-BL0V4ya8.js";import"./mergeSlotProps-DJQ_9vH6.js";import"./useForkRef-Btt9MVeC.js";import"./ButtonBase-aoiMu9Tz.js";import"./useTimeout-D2Y7qDK0.js";import"./TransitionGroupContext-DVVrop_G.js";import"./useEventCallback-8VD7KoTy.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-C3g7vEaW.js";import"./isMuiElement-mA_3UNgb.js";import"./OutlinedInput-DvUGPFLm.js";import"./formControlState-Dq1zat_P.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./index-XiudsVJB.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./FormHelperText-DqicFGG5.js";import"./Select-Ipzf7kND.js";import"./Menu-BsR3IEcx.js";import"./useSlotProps-BzYpEyJr.js";import"./Popover-BZZTn0gU.js";import"./Portal-B3jPIhjh.js";import"./useTheme-DUDwCCgT.js";import"./utils-v3JDOV4B.js";import"./getReactElementRef-Cit-YTyg.js";import"./mergeSlotProps-Be5-6mnc.js";import"./Modal-CquUqJ-o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-aNpcT55H.js";import"./Fade-B-kZ2aWY.js";import"./Paper-B9vhvsVc.js";import"./List-Bsssf5sN.js";import"./useControlled-APkh1ier.js";import"./Stack-ng3wJJZp.js";import"./styled-tPTq9LI3.js";import"./Divider-DCI4ccpv.js";import"./dividerClasses-CxQzuCbE.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./FieldHelpIcon-BevTaPGD.js";import"./index-BiBDMnSv.js";import"./index-WLJ37MO7.js";import"./Tooltip-7V2d6kcs.js";import"./IconButton-DyDu_M09.js";import"./CircularProgress-gYkLYLdu.js";import"./Button-Dh1nUKo-.js";import"./FormLabel-CCgxdWp7.js";const ze={title:"Form Components/FormUtils/FormControl",component:a,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},l={render:o=>e.jsxs(a,{...o,children:[e.jsx(d,{htmlFor:"input",children:"Label"}),e.jsx(g,{inputProps:{id:"input"}}),e.jsx(F,{children:"Helper Text"})]})},p={render:o=>{const[n,s]=h.useState(""),u=c=>{s(c.target.value)};return e.jsxs(a,{...o,children:[e.jsx(d,{id:"count-label",children:"Count"}),e.jsxs(C,{value:n,onChange:u,labelId:"count-label",children:[e.jsx(m,{value:10,children:"10"}),e.jsx(m,{value:20,children:"20"}),e.jsx(m,{value:30,children:"30"})]})]})},args:{size:"small"}},i={render:o=>{const[n,s]=h.useState([]),u=t=>{const{target:{value:r}}=t;s(typeof r=="string"?r.split(","):r)},c=["one","two","three","four"];return e.jsxs(a,{...o,children:[e.jsx(d,{id:"multiple-chip-label",children:"Counts"}),e.jsx(C,{labelId:"multiple-chip-label",multiple:!0,value:n,onChange:u,renderValue:t=>e.jsx(v,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(r=>e.jsx(x,{label:r},r))}),children:c.map(t=>e.jsx(m,{value:t,children:t},t))})]})},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
