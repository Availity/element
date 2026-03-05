import{j as p}from"./iframe-Wk3enkn_.js";import{i as n}from"./index-BZOO7YAB.js";import{A as m}from"./AsyncAutocomplete-qFfoZOal.js";import{Q as a}from"./suspense-Bd_pbFF_.js";import{Q as s}from"./queryClient-CHAqsXqX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCiKlUX9.js";import"./___vite-browser-external_commonjs-proxy-D6GNdSUz.js";import"./index-DrPJM3MV.js";import"./_toKey-CQFtmbJp.js";import"./Autocomplete-DjX1B_SO.js";import"./index-BV5-U_yy.js";import"./index-BucrEBOe.js";import"./index-BiBDMnSv.js";import"./index-a2BAU8hi.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C-x4Imun.js";import"./memoTheme-Caj5A1s7.js";import"./styled-BmTYHnh6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-pyii_x3t.js";import"./Tooltip-BR4Ffd1U.js";import"./useTheme-CmRoqaFD.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./useTimeout-BCOPmfCQ.js";import"./useControlled-2F9gTxQc.js";import"./useEventCallback-B7JQiyR1.js";import"./getReactElementRef-Cnge9CgM.js";import"./Portal-CCkMzpr1.js";import"./utils-tb6sxdlZ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BfCrVpCA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6xLK3w0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Qsi_pa_1.js";import"./CircularProgress-n4f4P4WA.js";import"./Button-C074Gfa_.js";import"./index-CV9srtxl.js";import"./Box-DL-v_noe.js";import"./Grid-DdfbYMl5.js";import"./isMuiElement-DVgXTGQo.js";import"./styled-BnyQvlXI.js";import"./Stack-8J7VIz0q.js";import"./Container-ChUN_I-o.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-LAF-CuJk.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DXnbjHYZ.js";import"./Select-CYNyfJKO.js";import"./Menu-BseMwSAi.js";import"./Popover-D6BMZrDV.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-CCeuxG84.js";import"./debounce-Be36O1Ab.js";import"./Modal-CRbA4mc9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B_XiOxQq.js";import"./Fade-CxXiFCgw.js";import"./Paper-BtZlLsyY.js";import"./List-DVxafNt_.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-q6AyRDli.js";import"./OutlinedInput-61eRF8Ns.js";import"./FormHelperText-D2pMThEq.js";import"./FormControlLabel-DI5XH8jn.js";import"./Typography-CLtqYzwP.js";import"./Switch-BPKn7d48.js";import"./SwitchBase-D9fpHDmD.js";import"./Radio-ETXqDp11.js";import"./RadioGroup-BUslnlIU.js";import"./FormGroup-CUY907o-.js";import"./Divider-6Fy3l_MU.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-vqzDsRcf.js";import"./FormControl-CnhLmAdI.js";import"./Autocomplete-ODuQM_HE.js";import"./Close-BJPW9EZ5.js";import"./usePreviousProps-BCSzJ1G6.js";import"./Chip-D-MSfsJK.js";import"./ListSubheader-e-TKQKC5.js";import"./useInfiniteQuery-CLU8jrDk.js";import"./useBaseQuery-Dw6wQntV.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
