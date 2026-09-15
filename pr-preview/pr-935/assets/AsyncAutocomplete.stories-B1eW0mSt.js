import{j as p}from"./iframe-DF0Rdha4.js";import{i as n}from"./index-RkKteQFr.js";import{Q as a}from"./suspense-BZUwcA1H.js";import{A as e}from"./AsyncAutocomplete-DhEzoTC6.js";import{Q as s}from"./queryClient-2W5wuRWg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qGcukIFs.js";import"./___vite-browser-external_commonjs-proxy-3BD_NkgN.js";import"./index-DD89Agjh.js";import"./useInfiniteQuery-Cq4sC6xq.js";import"./useBaseQuery-swT4tqMf.js";import"./Autocomplete-CoP5mCZO.js";import"./index-C3g1b-Zt.js";import"./index-BVLgzJf-.js";import"./index-CrcoPoGw.js";import"./index-6PSJ7mzi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CMfmqAYx.js";import"./memoTheme-4vIjm6LZ.js";import"./styled-I7SbqUzc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CUgfwVUD.js";import"./IconButton-oDfd5Lmw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DIMIguuI.js";import"./useTimeout-CMPjzxnq.js";import"./TransitionGroupContext-B0rcK__J.js";import"./useForkRef-BKwvVnzL.js";import"./useEventCallback-BNwW89Is.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4cKxRwq.js";import"./Tooltip-BWnEWeD7.js";import"./useTheme-Dht0CY8-.js";import"./useSlot-Bu48rJfG.js";import"./mergeSlotProps-De-W8bEz.js";import"./useControlled-Dig0ZMyL.js";import"./getReactElementRef-BJS3FUmu.js";import"./Portal-CcmPSbI-.js";import"./utils-DCMHm21Z.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CexFUqCS.js";import"./Button-kz7BikUW.js";import"./index-CPOPohyu.js";import"./Box-g_k8tvoW.js";import"./Grid-wcoxmIQC.js";import"./isMuiElement-CM_e2YWo.js";import"./styled-CjeI9bHt.js";import"./Stack-CQjWIA4P.js";import"./Container-D2_4bomA.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D3AL5AgI.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-A_gbksq7.js";import"./Select-CgSH5fRm.js";import"./SelectFocusSourceContext-Dy_24zIK.js";import"./Popover-6fv2nyIA.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BO33MI0n.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bdo5cqSi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Cj1iOKB7.js";import"./Fade-Cx-6eTbl.js";import"./Paper-DargFASt.js";import"./List-CQj_DkG6.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-IzKekw11.js";import"./OutlinedInput-mQC1K6j_.js";import"./FormHelperText-9mqc9Ecw.js";import"./FormControlLabel-Dq_-18BO.js";import"./Typography-CVkvQWeR.js";import"./Switch-C2KqfsMd.js";import"./SwitchBase-DZV18a5O.js";import"./Radio-DA7ldTDW.js";import"./RadioGroup-BOyQBxC7.js";import"./FormGroup-DhUgHgdA.js";import"./Divider-P6rUNdV1.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BKBRq5Dl.js";import"./FormControl-CEW9cI4g.js";import"./Autocomplete-3NVceKmI.js";import"./Close-DzOV4uIs.js";import"./usePreviousProps-BLmFkQ2q.js";import"./Chip-CroglSL9.js";import"./ListSubheader-CyARCSln.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
