import{j as p}from"./iframe-DvcXWkGI.js";import{i as n}from"./index-Cjyj5nZi.js";import{A as m}from"./AsyncAutocomplete-CQef1SVB.js";import{Q as a}from"./suspense-D9wuLEku.js";import{Q as s}from"./queryClient-B_mSgvBX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaTv9UPc.js";import"./___vite-browser-external_commonjs-proxy-GEXFNNnv.js";import"./index-CM3fg1Ej.js";import"./_toKey-DAWZYGE2.js";import"./Autocomplete-BnO5-d9e.js";import"./index-64cBt2pn.js";import"./index-8WqHyHCn.js";import"./index-BiBDMnSv.js";import"./index-63S9eLZS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Co17_fug.js";import"./memoTheme-C00_9AbM.js";import"./styled-DjkE2l0O.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-O15mV2IG.js";import"./Tooltip-CA4xVq51.js";import"./useTheme-BDjWybQB.js";import"./useSlot-DrWGT-0c.js";import"./mergeSlotProps-C-IYj7GK.js";import"./useForkRef-DXhMi9Fu.js";import"./useTimeout-BLAqdi1l.js";import"./useControlled-CWsku3Ua.js";import"./useEventCallback-jEehnAW2.js";import"./getReactElementRef-CyXa0GT6.js";import"./Portal-BJf12Rly.js";import"./utils-CXX3yobC.js";import"./TransitionGroupContext-DxPJb2_E.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BYEe1XOi.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6_QWXQy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CI7etmmo.js";import"./CircularProgress-CsILiYUE.js";import"./Button-EYXZSfHT.js";import"./index-lKF-mYBi.js";import"./Box-D0PWnwSE.js";import"./Grid-B-VOZSOw.js";import"./isMuiElement-BM04y7u2.js";import"./styled-1evKp3Hp.js";import"./Stack-BWYDbKiS.js";import"./Container-Dwn77WAc.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DrBlRY0b.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CnGwjuyh.js";import"./Select-CpxYMe4e.js";import"./Menu-BvR-3tqL.js";import"./Popover-AZC5xG1m.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-CU9nKqZa.js";import"./debounce-Be36O1Ab.js";import"./Modal-BP1sB3AO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CR8PY8T1.js";import"./Fade-DI9jsdhL.js";import"./Paper-BWWtmnI-.js";import"./List-UiPSZZQ2.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-JaHuofy7.js";import"./OutlinedInput-Dcxo-ASf.js";import"./FormHelperText-ejXNJD_u.js";import"./FormControlLabel-CtVOAWlx.js";import"./Typography-CbbFdRSD.js";import"./Switch-dGJM5-u2.js";import"./SwitchBase-BEtkunQj.js";import"./Radio-OyBSFkGt.js";import"./RadioGroup-BwF9pQjX.js";import"./FormGroup-x5VZN7lS.js";import"./Divider-DVlfBs2v.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CIsWpzBq.js";import"./FormControl-Bl3frfty.js";import"./Autocomplete-wgttrC-i.js";import"./Close-Dg4_-4d8.js";import"./usePreviousProps-II5BYs5k.js";import"./Chip-QGNBwSBS.js";import"./ListSubheader-C7ro_WkF.js";import"./useInfiniteQuery-BqDdHICQ.js";import"./useBaseQuery-YkESpXgW.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
