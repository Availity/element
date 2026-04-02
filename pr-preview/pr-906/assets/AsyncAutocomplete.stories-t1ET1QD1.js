import{j as p}from"./iframe-6QlsuZks.js";import{i as n}from"./index-0b3xigZQ.js";import{A as m}from"./AsyncAutocomplete-CmIoRcXi.js";import{Q as a}from"./suspense-B5poojJ7.js";import{Q as s}from"./queryClient-DOqz2la0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0QdKyD5.js";import"./___vite-browser-external_commonjs-proxy-p2BYraIi.js";import"./index-DMddt39K.js";import"./_toKey-CnCcwt5D.js";import"./Autocomplete-BOucXIe6.js";import"./index-CWuq3cDW.js";import"./index-DVMtrzSw.js";import"./index-BiBDMnSv.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-o3xhyLw5.js";import"./memoTheme-B9sQlNky.js";import"./styled-DGzk_rgf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Bu7ksarN.js";import"./Tooltip-Obr4DBw0.js";import"./useTheme-CgDfdbfy.js";import"./useSlot-DzncR7P9.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useForkRef-B_RCYMsy.js";import"./useTimeout-CoBmWaVy.js";import"./useControlled-D8gQq48B.js";import"./useEventCallback-H76OWquH.js";import"./getReactElementRef-CeFrpTOn.js";import"./Portal-DtF3r0WZ.js";import"./utils-DDHdHaR3.js";import"./TransitionGroupContext-BfrWwv51.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-XhtNc6mu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52xOams.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqANlMe2.js";import"./CircularProgress-BzseWMqn.js";import"./Button-Ck8mL0PX.js";import"./index-D54pz1q_.js";import"./Box-BeM2Ae_w.js";import"./Grid-B1lubc6W.js";import"./isMuiElement-Cw9eyX2o.js";import"./styled-BHPtUtOc.js";import"./Stack-CcxNsvTs.js";import"./Container-BCUe36Lo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-0NhCwZGG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DZ_CUTQW.js";import"./Select-CKSuph_q.js";import"./Menu-C8039Cjb.js";import"./Popover-CbDgWpYW.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-y686c5--.js";import"./debounce-Be36O1Ab.js";import"./Modal-BEIbnPxI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BrGAJPN3.js";import"./Fade-BumTlQbr.js";import"./Paper-CDdLas_Y.js";import"./List-Dng0f1WM.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-suRscvHS.js";import"./OutlinedInput-BvrLXmtS.js";import"./FormHelperText-BoQfm90T.js";import"./FormControlLabel-DydU_YjN.js";import"./Typography-BiVk-Xpu.js";import"./Switch-CPR75Nav.js";import"./SwitchBase-CPhx0cqS.js";import"./Radio--62dKuxE.js";import"./RadioGroup-K7Ow30iF.js";import"./FormGroup-DnkUzQHJ.js";import"./Divider-DciKYC8r.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-mI9jqCUl.js";import"./FormControl-CXZTEhg_.js";import"./Autocomplete-DiO8o6P8.js";import"./Close-DFnKTLyr.js";import"./usePreviousProps-BOPANTiF.js";import"./Chip-C0ZDVbQ4.js";import"./ListSubheader-DaiBUfvg.js";import"./useInfiniteQuery-CQ0_EwDe.js";import"./useBaseQuery-DKddEgEr.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
