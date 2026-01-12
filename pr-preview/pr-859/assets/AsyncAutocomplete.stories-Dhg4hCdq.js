import{j as p}from"./iframe-C1vntzAX.js";import{i as n}from"./index-DWjiW5pu.js";import{A as m}from"./AsyncAutocomplete-BjlnTymI.js";import{Q as a}from"./suspense-DBP8VnaF.js";import{Q as s}from"./queryClient-gcjJWDLa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzPuaxbl.js";import"./___vite-browser-external_commonjs-proxy-DIzVb-LC.js";import"./index-_GNUiS2s.js";import"./_toKey-Bwqez8zt.js";import"./Autocomplete-BOPLBrmJ.js";import"./index-DB3Q5pwd.js";import"./index-DEQeexvc.js";import"./index-BiBDMnSv.js";import"./index-CDQPidku.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CgejwYEH.js";import"./memoTheme-B-OyMYhz.js";import"./styled-CpL5pW3T.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BuDjrn_R.js";import"./Tooltip-CVSMh7i1.js";import"./useTheme-vaQlFbmr.js";import"./useSlot-BmDgUDTi.js";import"./mergeSlotProps-B_ZZvCmf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DLYnPViW.js";import"./useTimeout-Dtp_2qQ3.js";import"./useControlled-DMvVP-hg.js";import"./useEventCallback-D85fiQCE.js";import"./getReactElementRef-Bv2ENe3N.js";import"./Portal-CG1k2SoH.js";import"./utils-3uAZdIAp.js";import"./TransitionGroupContext-cDoqgCSl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B-xFDx91.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-qkSs6g8Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-COQRfLrd.js";import"./CircularProgress-Drsym3OL.js";import"./Button-CbKLSFYP.js";import"./index-B1BPaPLx.js";import"./Box-DpOTPtKg.js";import"./Grid-Cq8hrZqV.js";import"./styled-BjeYOfVm.js";import"./isMuiElement-DtGZmajx.js";import"./Stack-CGWfFhJY.js";import"./Container-Bfu4tgfO.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-ViyvnT0n.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-SXzsh7qR.js";import"./OutlinedInput-Cw6JNZpA.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-DT2YphLn.js";import"./Menu-CxzULmf9.js";import"./Popover-O9h2nK3b.js";import"./mergeSlotProps-cS-2BPos.js";import"./Modal-Pgn3CpwW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CYuRmh3w.js";import"./Fade-BAaRtBTH.js";import"./Paper-DNaexmm0.js";import"./List-DDwJcFVG.js";import"./createSvgIcon-OHXdYWDp.js";import"./FormHelperText-C4dhFzeB.js";import"./FormControlLabel-Bwj9Hz7Q.js";import"./Typography-D6jUB3HO.js";import"./Switch-GsArecYL.js";import"./SwitchBase-BNj6NLZe.js";import"./RadioGroup-tSqlKPFB.js";import"./Radio-LwS1PEVC.js";import"./FormGroup-DYA_ON2b.js";import"./Divider-Bj7zfztv.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DYbRjmym.js";import"./FormControl-C2A4DMgu.js";import"./Autocomplete-JyvLIwp-.js";import"./Close-2Rtql59a.js";import"./usePreviousProps-CwmCxyqO.js";import"./Chip-CotiJ0uN.js";import"./ListSubheader-BW6sCJke.js";import"./useInfiniteQuery-CZ6csi-A.js";import"./useBaseQuery-CiGq1Hlk.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
