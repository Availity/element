import{j as p}from"./iframe-D2jXllzf.js";import{i as n}from"./index-B4MTobdk.js";import{A as m}from"./AsyncAutocomplete-CzFb09h4.js";import{Q as a}from"./suspense-B_xDpDZR.js";import{Q as s}from"./queryClient-7UKzF7dW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-918D6wux.js";import"./___vite-browser-external_commonjs-proxy-CWZwep8m.js";import"./index-BzJiEeMt.js";import"./_toKey-DMH86hUz.js";import"./Autocomplete-p_yw3DzP.js";import"./index-DbM9_IZw.js";import"./index-C0wMGhls.js";import"./index-BiBDMnSv.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-9pPXd2AZ.js";import"./memoTheme-Zt5oAqwv.js";import"./styled-DdNVu9ib.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-toBpsxUE.js";import"./Tooltip-GSnbTknq.js";import"./useTheme-C2p3ig_2.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./useTimeout-CPz5sd6r.js";import"./useControlled-DpI9NEaZ.js";import"./useEventCallback-B89JyN3q.js";import"./getReactElementRef-DHdu6blE.js";import"./Portal-DNbvJLzK.js";import"./utils-B6mCZ_7g.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-FypE9v1G.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dd5dInOR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DMYh_tyc.js";import"./CircularProgress-BG5QNhqD.js";import"./Button-CwKYXhwT.js";import"./index-_ebpbhE4.js";import"./Box-BbqhAezV.js";import"./Grid-DcON0D60.js";import"./isMuiElement-CtLsGuPJ.js";import"./styled-CrGM8GXy.js";import"./Stack-C7w4lddQ.js";import"./Container-DTQuoaq9.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4fh9O_yA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C4VpCIrq.js";import"./Select-J4E2T8gJ.js";import"./Menu-3Df3H2zp.js";import"./Popover-d3WYO_gM.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-B6ai5Rqv.js";import"./debounce-Be36O1Ab.js";import"./Modal-epJMSIoD.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqC92YWR.js";import"./Fade-CjW2EPns.js";import"./Paper-DezgSOvY.js";import"./List-WMhnwrif.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BpTXI-oS.js";import"./OutlinedInput-8NKqoys9.js";import"./FormHelperText-x3FNzzv5.js";import"./FormControlLabel-CI5bXKO9.js";import"./Typography-B2ZUFsL1.js";import"./Switch-DcLsdLv8.js";import"./SwitchBase-DFUx5LAR.js";import"./Radio-DtF9_Ty_.js";import"./RadioGroup-CIQq2756.js";import"./FormGroup-kt5TsLUL.js";import"./Divider-ztTjX0xU.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DPbYydSm.js";import"./FormControl-B1s-S060.js";import"./Autocomplete-2H7tXo87.js";import"./Close-BsJCF7Mr.js";import"./usePreviousProps-BzPIdsN4.js";import"./Chip-DjOcMpWi.js";import"./ListSubheader-H_nne6QA.js";import"./useInfiniteQuery-D4_yTWT-.js";import"./useBaseQuery-C6iUgDlt.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
