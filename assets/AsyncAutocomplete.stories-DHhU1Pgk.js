import{j as p}from"./iframe-CLut6yOe.js";import{i as n}from"./index-DFAe1byy.js";import{Q as a}from"./suspense-C7yO8Vez.js";import{A as e}from"./AsyncAutocomplete-CDvstLI8.js";import{Q as s}from"./queryClient-D45awzA4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcLWcqBp.js";import"./___vite-browser-external_commonjs-proxy-6v6UwKt5.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-D7_tWO7G.js";import"./useBaseQuery-IhhvxYRE.js";import"./Autocomplete-9kaCyUIi.js";import"./index-CI4h3JAT.js";import"./index-DroMy-PZ.js";import"./index-MVgG_W0q.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DNgDR8tQ.js";import"./IconButton-MKfAwX3T.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useForkRef-CW7nwTzV.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useTheme-uzqIZvgA.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useControlled-BMhEC-vi.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./index-BGYc3edq.js";import"./Box-KcVtg1pO.js";import"./Grid-CiYph9Ji.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-qS0Yrwc6.js";import"./Stack-C0CMzs2G.js";import"./Container-DKVcPtkF.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C4ZzvvPY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CsURvBpr.js";import"./Select-Dy9kUNRR.js";import"./SelectFocusSourceContext-BqjsBqoL.js";import"./Popover-D8aHDtre.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BD3yaoOB.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUjatzFH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DrT6KjAn.js";import"./Fade-CkZ97Hml.js";import"./Paper-CMcH6Gk3.js";import"./List-Ed_p2skf.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BcCXBLY5.js";import"./OutlinedInput-NqaTAoz7.js";import"./FormHelperText-Du_S5IXp.js";import"./FormControlLabel-DK2k45Ms.js";import"./Typography-BLWoaJn_.js";import"./Switch-bv0zSmLo.js";import"./SwitchBase-B76ZlPUO.js";import"./Radio-C6QDUZlf.js";import"./RadioGroup-DtHGdsBt.js";import"./FormGroup-_FRXrzq-.js";import"./Divider-o9_MDQMV.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bc4ff8G-.js";import"./FormControl-BZcEw6H3.js";import"./Autocomplete-GbqZrhUx.js";import"./Close-vGYRfV1b.js";import"./usePreviousProps-DsceD4N7.js";import"./Chip-cGG6rk4J.js";import"./ListSubheader-_s3Pl5SY.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
