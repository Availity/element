import{j as p}from"./iframe-uePoqqpz.js";import{i as n}from"./index-B13PupMo.js";import{A as m}from"./AsyncAutocomplete-BD_VLkw6.js";import{Q as a}from"./suspense-ByETT2CX.js";import{Q as s}from"./queryClient-_OCJGSJF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAiSr6pO.js";import"./___vite-browser-external_commonjs-proxy-DpehuKzW.js";import"./index-C0ZkTegJ.js";import"./_toKey-BLyBuzYe.js";import"./Autocomplete-DIekn6WG.js";import"./index-_oU69kDs.js";import"./index-6RO9VGSX.js";import"./index-BiBDMnSv.js";import"./index-iuot5o8P.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzJHsKlT.js";import"./memoTheme-Dgj0sIK-.js";import"./styled-HV0RCVZb.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DRQPm386.js";import"./Tooltip-CBI98mGf.js";import"./useTheme-CLegm-7I.js";import"./useSlot-dwhecRhc.js";import"./mergeSlotProps-BA0TfUKM.js";import"./useForkRef-BwAAUV5l.js";import"./useTimeout-_NjN4_Sd.js";import"./useControlled-CiVZLVlp.js";import"./useEventCallback-DlO0-RjJ.js";import"./getReactElementRef-C3-m1DFV.js";import"./Portal-qmW-7K1L.js";import"./utils-BMnAKpwa.js";import"./TransitionGroupContext-CmeeQpCz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D5l61s2T.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Ikh-V53z.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DvYvvCW7.js";import"./CircularProgress-JnYtC6I3.js";import"./Button-BeX4uEqy.js";import"./index-B2DDv_1u.js";import"./Box-DubY7n2i.js";import"./Grid-B0G5TA-i.js";import"./styled-CfUCvIwx.js";import"./isMuiElement-HClAlyu-.js";import"./Stack-arXlwEbk.js";import"./Container-BhCZsEOQ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DqAesqJW.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BKwMicKC.js";import"./Select-CEXIzbdI.js";import"./Menu-DZd2G5JR.js";import"./Popover-2q7X57UR.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BPVeeAxm.js";import"./Modal-D5SBOgz1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Qp_fmvj0.js";import"./Fade-C63bziq-.js";import"./Paper-DEbfATBV.js";import"./List-Dd6qPk-t.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CMty7C1j.js";import"./OutlinedInput-ylNzk_x5.js";import"./FormHelperText-Bal2g5d8.js";import"./FormControlLabel-DChSBWBU.js";import"./Typography-CCivflCu.js";import"./Switch-D4Y-JyOJ.js";import"./SwitchBase-C9hqB2YO.js";import"./RadioGroup-D80V5-w2.js";import"./Radio-BRRYeyDG.js";import"./FormGroup-C5jIOnyH.js";import"./Divider-f2g74RMi.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-SthSyvnv.js";import"./FormControl-CDtcow8V.js";import"./Autocomplete-DHI2sGpN.js";import"./Close-B9UNSdso.js";import"./usePreviousProps-BeG7-67y.js";import"./Chip-TTzonsOF.js";import"./ListSubheader-DkUWSdkD.js";import"./useInfiniteQuery-IHHk30QS.js";import"./useBaseQuery-BobjBiov.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
