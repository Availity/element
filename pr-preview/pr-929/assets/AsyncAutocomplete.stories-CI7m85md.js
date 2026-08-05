import{j as p}from"./iframe-Cnf77ZIg.js";import{i as n}from"./index-CsFiSTiB.js";import{Q as a}from"./suspense-CZUhSpM1.js";import{A as e}from"./AsyncAutocomplete-ChBr-v82.js";import{Q as s}from"./queryClient-v8dFEASw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlDkkMZd.js";import"./___vite-browser-external_commonjs-proxy-Dxxm6Cdx.js";import"./index-BIVoh9iT.js";import"./useInfiniteQuery-B4Kj-nq-.js";import"./useBaseQuery-k9qCI5-J.js";import"./Autocomplete-DLbyEez-.js";import"./index-hVQEkyN7.js";import"./index-CpFXeQfH.js";import"./index-CrcoPoGw.js";import"./index-CCvoZ_po.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8TdQCTz.js";import"./memoTheme-rtNk9j34.js";import"./styled-D7PTo4Yf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BbhRJntT.js";import"./Tooltip-RxJZvyE-.js";import"./useTheme-fbZoBAbS.js";import"./useSlot-UCTcrF1q.js";import"./mergeSlotProps-CtuEIw1c.js";import"./useForkRef-CwrFiSR5.js";import"./useTimeout-DDbT1lIl.js";import"./useControlled-CSfvqfPH.js";import"./useEventCallback-C-Qx89z1.js";import"./getReactElementRef-CMOtQl0I.js";import"./Portal-_ErOQT1L.js";import"./utils-C9oXke8q.js";import"./TransitionGroupContext-PCEy4ISN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-9tgtsXjP.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-De56WQhg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cb27w-UN.js";import"./CircularProgress-DjiS4vOo.js";import"./Button-B1EPaR8-.js";import"./index-ORdrVCt-.js";import"./Box-ChPufWLv.js";import"./Grid-CrhtQkIm.js";import"./isMuiElement-DBtd91O4.js";import"./styled-BdiKer14.js";import"./Stack-CAuZPL_Y.js";import"./Container-Bpufyj5a.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BjvK7be8.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-FlV4R_pV.js";import"./Select-BSUog0-L.js";import"./SelectFocusSourceContext-CGaZJ5Tt.js";import"./Popover-CyHUhMPu.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DJo0CcBT.js";import"./debounce-Be36O1Ab.js";import"./Modal-BsxKKYBP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CwjXL11W.js";import"./Fade-DcdXt8nB.js";import"./Paper-DkkA_EpG.js";import"./List-B-VVle_u.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-C5tcB9_e.js";import"./OutlinedInput-Wlr5Q67i.js";import"./FormHelperText-BughnuW6.js";import"./FormControlLabel-DA0D24Rk.js";import"./Typography-C7kdML4f.js";import"./Switch-DUQOdpz9.js";import"./SwitchBase-BooYjoT7.js";import"./Radio-5LCq-NFB.js";import"./RadioGroup-BKRFtPL4.js";import"./FormGroup-DzvvVjMS.js";import"./Divider-nIEtNCFC.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BY2QW2mO.js";import"./FormControl-CCnUhFPG.js";import"./Autocomplete-D2BFC0-T.js";import"./Close-Ds_eDuIS.js";import"./usePreviousProps-BXt0H41M.js";import"./Chip-DGRdw-jk.js";import"./ListSubheader-Dw1iOmkG.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
