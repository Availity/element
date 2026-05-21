import{j as p}from"./iframe-BP_6obq-.js";import{i as n}from"./index-2TcWn4Qj.js";import{A as m}from"./AsyncAutocomplete-BMsWKcxF.js";import{Q as a}from"./suspense-BlUycdrQ.js";import{Q as s}from"./queryClient-BDBvpSyb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VEgrAlvv.js";import"./___vite-browser-external_commonjs-proxy-Dja11nmy.js";import"./index-BZaeAX2W.js";import"./_toKey-BxRmHzy4.js";import"./Autocomplete-CRY4xB0G.js";import"./index-Btgn3iS_.js";import"./index-OtLd_hTL.js";import"./index-BiBDMnSv.js";import"./index-CnReW6m-.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CnHEyztA.js";import"./memoTheme-BSboZUOu.js";import"./styled-tyPDC8H3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D0xPWEah.js";import"./Tooltip-DfZ6DZ9O.js";import"./useTheme-DbBiTE4S.js";import"./useSlot-CmZQLFXT.js";import"./mergeSlotProps-8ro87pMD.js";import"./useForkRef-DOgu7oQ4.js";import"./useTimeout-CSJtp0Y8.js";import"./useControlled-DHSx-hEg.js";import"./useEventCallback-BD_ANQY0.js";import"./getReactElementRef-CcD8R4QN.js";import"./Portal-XICOo1di.js";import"./utils-fRJUoSLW.js";import"./TransitionGroupContext-B3nL2djk.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CRXG0rmu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsvJwMgL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-8n2sjZ5K.js";import"./CircularProgress-DALVNgNR.js";import"./Button-DKYxn39A.js";import"./index-Cyg8Zoy-.js";import"./Box-CrUjzboj.js";import"./Grid-DuXHbjPr.js";import"./isMuiElement-Dpdrf9tp.js";import"./styled-VCZNIqfv.js";import"./Stack-CMlfGjCP.js";import"./Container-CMlBc6YM.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CiSkpeaB.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CcVPoqIg.js";import"./Select-Yr3aFb9D.js";import"./Menu-B16pZnWM.js";import"./Popover-B8-deUWB.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-C4cSFGrS.js";import"./debounce-Be36O1Ab.js";import"./Modal-BoTJ9TiT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BmoQCgqO.js";import"./Fade-C9R9e0Yq.js";import"./Paper-00-tiWk7.js";import"./List-DIXN3EWs.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-C8pu6ftq.js";import"./OutlinedInput-BvbUZoKB.js";import"./FormHelperText-DlNTsgkP.js";import"./FormControlLabel-PcokZr4D.js";import"./Typography-xBYBi8Ml.js";import"./Switch-BDYdkdO0.js";import"./SwitchBase-Cy3ktZMy.js";import"./Radio-BmUp1QZh.js";import"./RadioGroup-DELYNiGz.js";import"./FormGroup-B81_w-JB.js";import"./Divider-OjstwTer.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DR1rc2We.js";import"./FormControl-DtAGeh-k.js";import"./Autocomplete-VzDIIHWB.js";import"./Close-DIHV7Ym5.js";import"./usePreviousProps-LRVoUgfB.js";import"./Chip-BMjZNRnO.js";import"./ListSubheader-D6cdkpE-.js";import"./useInfiniteQuery-cQOXiyDr.js";import"./useBaseQuery-DaHqbyNN.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
