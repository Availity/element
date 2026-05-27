import{j as p}from"./iframe-BeW-ShBa.js";import{i as n}from"./index-DLnvtUdw.js";import{A as m}from"./AsyncAutocomplete-BZVCYS3y.js";import{Q as a}from"./suspense-CNr0Ed_c.js";import{Q as s}from"./queryClient-C_cEyc84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DMVu9gap.js";import"./___vite-browser-external_commonjs-proxy-CtUXk23B.js";import"./index-BgBxCtiF.js";import"./_toKey-DMT_zmqL.js";import"./Autocomplete-D27qh_HX.js";import"./index-BUpPI6bd.js";import"./index-DHE56XfM.js";import"./index-BiBDMnSv.js";import"./index-BKqV-UiY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C3Z68du4.js";import"./memoTheme-Dx1_-nEN.js";import"./styled-E0CmYcz3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B-GrkHTI.js";import"./Tooltip-UPiMyfZ8.js";import"./useTheme-BPzLpLU0.js";import"./useSlot-BhPPWLJz.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useForkRef-Bgl7H4kw.js";import"./useTimeout-Da9tNn-P.js";import"./useControlled-BpXRfpPn.js";import"./useEventCallback-6Uyg9fGx.js";import"./getReactElementRef-BjNvvstO.js";import"./Portal-BPMEmQxN.js";import"./utils-CvRtdEc9.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ghuGdCEB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BvJM40or.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Z8KwVcKF.js";import"./CircularProgress-CiOpdtGa.js";import"./Button-BwdPpmvm.js";import"./index-CcUAtZIu.js";import"./Box-BJjonoMC.js";import"./Grid-D-BmDj5R.js";import"./isMuiElement-Gc_4vFE3.js";import"./styled-C6cy5gNq.js";import"./Stack-CkM3UncO.js";import"./Container-CuzKFum9.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Cxj9EV6v.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DwS3dUaL.js";import"./Select-DxZlcoBU.js";import"./Menu-CN-C-Du1.js";import"./Popover-BVS0J5pW.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-D8UcRAc-.js";import"./debounce-Be36O1Ab.js";import"./Modal-CnexL54u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B02_d13g.js";import"./Fade-D8bMgo8d.js";import"./Paper-C7ldQuEP.js";import"./List-C1Y1JpKl.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BpCrnFel.js";import"./OutlinedInput-DFxqNyAs.js";import"./FormHelperText-DLkF45Vp.js";import"./FormControlLabel-rtHyeW46.js";import"./Typography-C3HO5zSq.js";import"./Switch-B_X6xexg.js";import"./SwitchBase-D-OFjC1o.js";import"./Radio-BNVrWmQP.js";import"./RadioGroup-D9O0pa2h.js";import"./FormGroup-CXZ8nN14.js";import"./Divider-DULf-jQm.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-_Lta7BN7.js";import"./FormControl-BGOvdkoq.js";import"./Autocomplete-Du_51NJj.js";import"./Close-aKFnXmik.js";import"./usePreviousProps-1XZU4b2x.js";import"./Chip--90D7W4F.js";import"./ListSubheader-CxPKXRFp.js";import"./useInfiniteQuery-BOI4AiZ8.js";import"./useBaseQuery-DLkX-G6u.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
