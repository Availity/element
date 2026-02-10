import{j as p}from"./iframe-DPWyg_sE.js";import{i as n}from"./index-CA39NvIm.js";import{A as m}from"./AsyncAutocomplete-CojSvQZQ.js";import{Q as a}from"./suspense-mdu3oC3T.js";import{Q as s}from"./queryClient-Dga3yiWO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVaEuPEv.js";import"./___vite-browser-external_commonjs-proxy-BHnCw5vx.js";import"./index-BKQXVhQw.js";import"./Autocomplete-CBaGVSpx.js";import"./index-jlpDdcDQ.js";import"./index-C0D43F6K.js";import"./index-BiBDMnSv.js";import"./index-HgfBgIyk.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BLZY0MiZ.js";import"./memoTheme-CvhDbT8x.js";import"./styled-Cx4UoaTx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-WUbIbMUB.js";import"./Tooltip-CdOjvbM3.js";import"./useTheme-7tDQkz1C.js";import"./useSlot-BxXiaFQD.js";import"./mergeSlotProps-CVICHJ3a.js";import"./useForkRef-CQj222cR.js";import"./useTimeout-RvN-OPdu.js";import"./useControlled-wCcL1r_0.js";import"./useEventCallback-jcG2qnaO.js";import"./getReactElementRef-x8Lx8RXT.js";import"./Portal-D5nwTdpC.js";import"./utils-BB7LdJ51.js";import"./TransitionGroupContext-Dbv33dTP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-LUJJL6zM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BF9Np9Lj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwZSi7dI.js";import"./CircularProgress-9Tec-y6j.js";import"./Button-BBTQggAb.js";import"./index-klW-QR3s.js";import"./Box-BW7Ma-QQ.js";import"./Grid-BOsdlhg5.js";import"./styled-D3AT7-A0.js";import"./isMuiElement-BiKTnabE.js";import"./Stack-BKgbUtNe.js";import"./Container-NqiDyIZZ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DkpgJt2M.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DFCevzuq.js";import"./Select-JvCmDejN.js";import"./Menu-BQ424Qa8.js";import"./Popover-BMgBZv6J.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-B4tJEkZP.js";import"./Modal-CWpQp0b9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-RhGZ7C5k.js";import"./Fade-jqxkxdpP.js";import"./Paper-CoTVTpu9.js";import"./List-Rzw7CuXQ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-kD6OJaqd.js";import"./OutlinedInput-DVo6vKS6.js";import"./FormHelperText-B2zRfOi_.js";import"./FormControlLabel-B3zPKxhD.js";import"./Typography-DAlbupBm.js";import"./Switch-C0QC4SKP.js";import"./SwitchBase-BmqpUqm4.js";import"./RadioGroup-GYjouWwM.js";import"./Radio-COT2Uoxb.js";import"./FormGroup-BAw5f_Y0.js";import"./Divider-Cvvpqoti.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-Bu-2WVsU.js";import"./FormControl-DihhF3iI.js";import"./Autocomplete-Ck-3WfL2.js";import"./Close-DzjwsAlU.js";import"./usePreviousProps--YmaSDZp.js";import"./Chip-ByprMBmO.js";import"./ListSubheader-DtvqiWVR.js";import"./useInfiniteQuery-BWi1heCp.js";import"./useBaseQuery-BTYjPalF.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Vt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["_Async"];export{i as _Async,Xt as __namedExportsOrder,Vt as default};
