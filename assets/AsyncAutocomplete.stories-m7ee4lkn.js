import{j as p}from"./iframe-DTpfCdTP.js";import{i as n}from"./index-BvAqAliB.js";import{A as m}from"./AsyncAutocomplete-CDH5XjNz.js";import{Q as a}from"./suspense-DhZCDS-8.js";import{Q as s}from"./queryClient-D-TqA8fh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7sGnkLd.js";import"./___vite-browser-external_commonjs-proxy-DYx3DAeD.js";import"./index-BTctTnrC.js";import"./_toKey-D2wodF39.js";import"./Autocomplete-B1o7bzxF.js";import"./index-CVxENjM9.js";import"./index-Bu3ZJce-.js";import"./index-BiBDMnSv.js";import"./index-DFihowQv.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CZ5jOsa4.js";import"./memoTheme-D8G-akul.js";import"./styled-JKD3wrB9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-q1MxSMZt.js";import"./Tooltip-uiVSuhLb.js";import"./useTheme-jT65VjN1.js";import"./useSlot-h1Ycty7Q.js";import"./mergeSlotProps-BJk609iI.js";import"./useForkRef-Dez1FBmj.js";import"./useTimeout-BG483csS.js";import"./useControlled-BQlebmQ3.js";import"./useEventCallback-5DZSu_H1.js";import"./getReactElementRef-Bdxo8MI5.js";import"./Portal-Ghvglbwf.js";import"./utils-vs6bWRab.js";import"./TransitionGroupContext-DugTcswx.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BBfgcS2b.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C1za8a59.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-TqCu7TYl.js";import"./CircularProgress-eXewDO5k.js";import"./Button-CuRegif2.js";import"./index-BdlJaXZ1.js";import"./Box-DTAenaTM.js";import"./Grid-cSi6T3Qn.js";import"./styled-TJsrHN39.js";import"./isMuiElement-DL6gjngF.js";import"./Stack-Dc_aLgSc.js";import"./Container-BggHV1YK.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BGFTL5Tj.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CbIMQ9id.js";import"./Select-CjtdDW9Z.js";import"./Menu-B1D499Ps.js";import"./Popover-5DZ_M0nb.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Cw1mNVtR.js";import"./Modal-8tunU-lf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BvhACw8B.js";import"./Fade-D9Ctmrdo.js";import"./Paper-Dn1utG1r.js";import"./List-CSqXqE4r.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DXGDQ1gJ.js";import"./OutlinedInput-CVj7dZL7.js";import"./FormHelperText-BjaQkS1m.js";import"./FormControlLabel-B9oEtMCF.js";import"./Typography-OfK4w6vl.js";import"./Switch-DD597uwN.js";import"./SwitchBase-Co9W6Shr.js";import"./RadioGroup-DYBhXyJ1.js";import"./Radio-N8vNuqKF.js";import"./FormGroup-BymkvjC5.js";import"./Divider-BCluY1w_.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DVf4F_p0.js";import"./FormControl-CXqj2fUU.js";import"./Autocomplete-DGgnFcqI.js";import"./Close-Ccq543WN.js";import"./usePreviousProps-Dgjz8Fp1.js";import"./Chip-gbhl1utK.js";import"./ListSubheader-BMnTCRuU.js";import"./useInfiniteQuery-C-TFF5Nl.js";import"./useBaseQuery-D8B9J5W8.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <QueryClientProvider client={client}>
        <AsyncAutocomplete {...args} />
      </QueryClientProvider>;
  },
  decorators: [],
  parameters: {
    controls: {
      exclude: /loading(?!Text)|options/
    }
  },
  args: {
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false
    },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 10,
    queryKey: 'example'
  }
}`,...i.parameters?.docs?.source}}};const Yt=["_Async"];export{i as _Async,Yt as __namedExportsOrder,Xt as default};
