import{j as p}from"./iframe-DV3He85V.js";import{i as n}from"./index-CWK71Wa8.js";import{A as m}from"./AsyncAutocomplete-Ba1BDaDV.js";import{Q as a}from"./suspense-DvBVUbch.js";import{Q as s}from"./queryClient-TZqKghq9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjBCg5qw.js";import"./___vite-browser-external_commonjs-proxy-CZo1mwdi.js";import"./index-DCghOe2_.js";import"./_toKey-B40GCxv9.js";import"./Autocomplete-CVFUuhcN.js";import"./index-tlrBTKGG.js";import"./index-BjMQ-2w8.js";import"./index-BiBDMnSv.js";import"./index-BjhlD0KS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BPrDg5y8.js";import"./memoTheme-CqO710ep.js";import"./styled-BUFH9864.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BfHLbFj4.js";import"./Tooltip-B-fI_KqI.js";import"./useTheme-SfRUUZiP.js";import"./useSlot-D_lQT_km.js";import"./mergeSlotProps-BOgCOH-Y.js";import"./useForkRef-BjKAtTT0.js";import"./useTimeout-Ckthjz3O.js";import"./useControlled-Ccx6itka.js";import"./useEventCallback-DWs5MTmZ.js";import"./getReactElementRef-DFI1E4nz.js";import"./Portal-C_yGG6TD.js";import"./utils-Bwvx3eCn.js";import"./TransitionGroupContext-DIj-4TH7.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Da-PnXIN.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CvMV_1wy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CmkGGnOd.js";import"./CircularProgress-DhVft3f6.js";import"./Button-BaC_cxcf.js";import"./index-Cdp2fnep.js";import"./Box-BLEv-Mrp.js";import"./Grid-BisxJX3W.js";import"./styled-CIy1Wxpq.js";import"./isMuiElement-_HgZ6tG6.js";import"./Stack-eceoAOKj.js";import"./Container-KecICwJn.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BaCofFNT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BVnKZRJX.js";import"./Select-C5eTjdLt.js";import"./Menu-DtWOoTbV.js";import"./Popover-B1b3gXrN.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CMPc2IAt.js";import"./Modal-wug12V1o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CGWgMRTN.js";import"./Fade-BX6Wa8dQ.js";import"./Paper-Dqu7MPEo.js";import"./List-DAdkMrgy.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Dah6_HeO.js";import"./OutlinedInput-wiNtXLYd.js";import"./FormHelperText-OP92smCd.js";import"./FormControlLabel-CjUpK0gq.js";import"./Typography-CE44PW7B.js";import"./Switch-B6e_Dv9_.js";import"./SwitchBase-BJ52hWR6.js";import"./RadioGroup-Bv5HCDOS.js";import"./Radio-CAqmK0KW.js";import"./FormGroup-4nVuE012.js";import"./Divider-BHrLvxZ6.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-B31aNDxG.js";import"./FormControl-DppqsHib.js";import"./Autocomplete-PpLnp-hS.js";import"./Close-K7FLhnUA.js";import"./usePreviousProps-BlHR9X1z.js";import"./Chip-BHSLBHHU.js";import"./ListSubheader-CGToKqpj.js";import"./useInfiniteQuery-CpWksbDL.js";import"./useBaseQuery-BscCUny4.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
