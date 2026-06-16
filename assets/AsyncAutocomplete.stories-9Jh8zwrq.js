import{j as p}from"./iframe-Bzxq4khQ.js";import{i as n}from"./index-pD7x_zqN.js";import{Q as a}from"./suspense-ApQII9Jb.js";import{A as e}from"./AsyncAutocomplete-Cyiebde0.js";import{Q as s}from"./queryClient-f0sF00C8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUQsHTQm.js";import"./___vite-browser-external_commonjs-proxy-C1hYxkYC.js";import"./index-BLcjZxhx.js";import"./useInfiniteQuery-0oJT023C.js";import"./useBaseQuery-CrwKbn3Q.js";import"./Autocomplete-2vz3HnpQ.js";import"./index-DU829yZl.js";import"./index-D4q0lTpi.js";import"./index-CrcoPoGw.js";import"./index-C1aSd5b5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DbWIKXvI.js";import"./memoTheme-CkAjAg3h.js";import"./styled-BSgFKBik.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-HZB2unx2.js";import"./Tooltip--PgUuozR.js";import"./useTheme-CLJ35KcV.js";import"./useSlot-cTDCwMnT.js";import"./mergeSlotProps-BP1q_mR2.js";import"./useForkRef-CyBmAmq2.js";import"./useTimeout-D8n7EMSe.js";import"./useControlled-BxlFJ8nt.js";import"./useEventCallback-Zn8Kx7hu.js";import"./getReactElementRef-C4G1HZdF.js";import"./Portal-DrMzc0O0.js";import"./utils-BhtHTj_i.js";import"./TransitionGroupContext-4l5GgSIy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dxsb08A1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CbyRNbtW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-mnH_3Wha.js";import"./CircularProgress-OhY0Ky5x.js";import"./Button-COtcAXVl.js";import"./index-DXLpfNz7.js";import"./Box-Bmi0pHZf.js";import"./Grid-DBmnTLkS.js";import"./isMuiElement-BFlpbPNJ.js";import"./styled-zIwGk7GA.js";import"./Stack-C6SNpi-l.js";import"./Container-C5W7aLU7.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D7loAdmS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CNT2ANZv.js";import"./Select-DF1l4Dby.js";import"./SelectFocusSourceContext-CNFdeD9T.js";import"./Popover-LBHWHgEN.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-516L7gnV.js";import"./debounce-Be36O1Ab.js";import"./Modal-DYASwYOM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-_k8xef8N.js";import"./Fade-DV9rGJYk.js";import"./Paper-i7wmImU7.js";import"./List-C9h_lLEy.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bd4vIYa-.js";import"./OutlinedInput-rTNgHDL6.js";import"./FormHelperText-obR1wLHF.js";import"./FormControlLabel-HjAGXNw6.js";import"./Typography-B9ybtieC.js";import"./Switch-RyNLpMLT.js";import"./SwitchBase-Cq5XAYLf.js";import"./Radio-BtrdgFmx.js";import"./RadioGroup-BX4ZIunc.js";import"./FormGroup-gt1zcoyV.js";import"./Divider-DaOJE4uw.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BMzuCG6i.js";import"./FormControl-m8dKyrAv.js";import"./Autocomplete-BFBtLphl.js";import"./Close-C1tpug76.js";import"./usePreviousProps-D8XhmpMP.js";import"./Chip-JmiNJoig.js";import"./ListSubheader-Lvf35jjl.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Vt=["_Async"];export{i as _Async,Vt as __namedExportsOrder,Nt as default};
