import{j as p}from"./iframe-D_FBGCyt.js";import{i as n}from"./index-DkiYkhBs.js";import{A as m}from"./AsyncAutocomplete-BxFzOkNL.js";import{Q as a}from"./suspense-D_Mfr092.js";import{Q as s}from"./queryClient-E_xzb1HY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zm1E9Otn.js";import"./___vite-browser-external_commonjs-proxy-nzxmoGa4.js";import"./index-BjtTJEnU.js";import"./_toKey-KD99ZJJq.js";import"./Autocomplete-DUa7yCyt.js";import"./index-CPhJbrDP.js";import"./index-CHeBUqtj.js";import"./index-BiBDMnSv.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5AfvjDJL.js";import"./memoTheme-BLxVLpBG.js";import"./styled-xf6f_HVu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DfmN7Pdp.js";import"./Tooltip-Cz548eDU.js";import"./useTheme-C9l_6OF0.js";import"./useSlot-BtMprAQd.js";import"./mergeSlotProps-gV_s4djX.js";import"./useForkRef-CnVOscb6.js";import"./useTimeout-SlAgGEcH.js";import"./useControlled-CdfLcSkL.js";import"./useEventCallback-jDv7Sv7e.js";import"./getReactElementRef-CwqBwRrr.js";import"./Portal-DcK87Y2W.js";import"./utils-DnGyS3wP.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C2D_NZSZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-eUYvyQUt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D61WXHG0.js";import"./CircularProgress-BjsVuxPp.js";import"./Button-CuoV_D53.js";import"./index-BBo7dAKW.js";import"./Box-CvB3zA9H.js";import"./Grid-DRIeD9kY.js";import"./isMuiElement-DWlz3pJm.js";import"./styled-D_5SdMbV.js";import"./Stack-CDN4SC59.js";import"./Container-CHNU3dwn.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CcBITnwG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D0mczUgB.js";import"./Select-rTOCbTjW.js";import"./Menu-D87dknpl.js";import"./Popover-DSajnCnR.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-Vx5Db-vC.js";import"./debounce-Be36O1Ab.js";import"./Modal-C7olDkj8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-y5ajGIML.js";import"./Fade-BVS2OpEz.js";import"./Paper-BakwuC79.js";import"./List-BXCcSLWL.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CrDNgKEm.js";import"./OutlinedInput-BIVPjmnf.js";import"./FormHelperText-D-uyeHOV.js";import"./FormControlLabel-R0V4f3aH.js";import"./Typography-2LRTBqXt.js";import"./Switch-CePFD_S0.js";import"./SwitchBase-DTTSsIt3.js";import"./Radio-D_ui9MP1.js";import"./RadioGroup-DFPZLkM7.js";import"./FormGroup-Cz3AxvE4.js";import"./Divider-PHdlqile.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BeRi7xW_.js";import"./FormControl-am7KBdv4.js";import"./Autocomplete-Dy6jk5CL.js";import"./Close-CARxMNKp.js";import"./usePreviousProps-Clt_vEUo.js";import"./Chip-CMroy8Yn.js";import"./ListSubheader-CJxnO8b2.js";import"./useInfiniteQuery-jJEGU2SG.js";import"./useBaseQuery-Coe3C4Az.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
