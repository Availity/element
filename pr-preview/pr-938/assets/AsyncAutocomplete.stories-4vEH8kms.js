import{j as p}from"./iframe-DKvnFaXU.js";import{i as n}from"./index-Ds1bBKID.js";import{Q as a}from"./suspense-B3ARyDAO.js";import{A as e}from"./AsyncAutocomplete-CEKeo5IT.js";import{Q as s}from"./queryClient-Gx50SvyD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zW81wbG9.js";import"./___vite-browser-external_commonjs-proxy-D0Uf09dU.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-T0qc0pW-.js";import"./useBaseQuery-S6cU6In8.js";import"./Autocomplete-BE5Cdt-s.js";import"./index-_5xdzNiG.js";import"./index-ksFf16Do.js";import"./index-CrcoPoGw.js";import"./index-Dp9gWiw7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CXEooahZ.js";import"./memoTheme-CqfCSJ2X.js";import"./styled-CmsEx6_f.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-goOPcPYN.js";import"./IconButton-Dk2wxJIq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-t7rDwPbd.js";import"./useTimeout-CHMS-cR8.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useForkRef-BZiVfW-q.js";import"./useEventCallback-BMp-rMhG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-1gU5OTOX.js";import"./Tooltip-D9ZPYqEU.js";import"./useTheme-CSDDNwq2.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useControlled-DXzaWELJ.js";import"./getReactElementRef-CqgsFiRl.js";import"./Portal-D0mCJoig.js";import"./utils-Bp7Prb7W.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DYzgJZQm.js";import"./Button-CcwmilXM.js";import"./index-DbDO0Ft_.js";import"./Box-D54lZQNO.js";import"./Grid-BqSQzKdl.js";import"./isMuiElement-B9gvf1iq.js";import"./styled-vqTvL8XB.js";import"./Stack-Ddupjr1g.js";import"./Container-Dg7zSU0F.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkcKI7js.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DSlP_RFA.js";import"./Select-Dyif2wC_.js";import"./SelectFocusSourceContext-F5AOv-5-.js";import"./Popover-VuJg1sVN.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BLQDwcQN.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bm3yPZFq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-EX3DoS9x.js";import"./Fade-CrAHTHjX.js";import"./Paper-DT4unmmL.js";import"./List-BGKHL79p.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-2KwAvjFg.js";import"./OutlinedInput-BIAm5zgc.js";import"./FormHelperText-DYyNj_Dv.js";import"./FormControlLabel-DwYTjEvZ.js";import"./Typography-D7JJPpmc.js";import"./Switch-DxotU7Ib.js";import"./SwitchBase-DhDyeBWH.js";import"./Radio-BTw0Rwqw.js";import"./RadioGroup-27Q2WKBY.js";import"./FormGroup-B64yWhLm.js";import"./Divider-DEIVsENh.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-psgMHWlS.js";import"./FormControl-Dkm4fxWQ.js";import"./Autocomplete-DjK4QtL9.js";import"./Close-BJ35LOVq.js";import"./usePreviousProps-Bt-wMdIb.js";import"./Chip-BQ7zAuMf.js";import"./ListSubheader-KUyPYhHF.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
