import{j as p}from"./iframe-_UUIOQuH.js";import{i as n}from"./index-CVIUoUuq.js";import{Q as a}from"./suspense-Duf7jLkv.js";import{A as e}from"./AsyncAutocomplete-DPM3yNVU.js";import{Q as s}from"./queryClient-BHvSfuTF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpN0Z2Me.js";import"./___vite-browser-external_commonjs-proxy-BQo9Raix.js";import"./index-DzHtvXsL.js";import"./useInfiniteQuery-hSa4t6lC.js";import"./useBaseQuery-DY57yvd4.js";import"./Autocomplete-BCjxAKjB.js";import"./index-DkZHOse5.js";import"./index-xNAiQBP1.js";import"./index-CrcoPoGw.js";import"./index-C64ixpTy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bp4jKyt3.js";import"./memoTheme-CIZa69Jr.js";import"./styled-b9_l-4u0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-TC4m-Pq9.js";import"./IconButton-CUKPhxxE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B29bExhs.js";import"./useTimeout-CpXLyJm7.js";import"./TransitionGroupContext-BWER5STN.js";import"./useForkRef-Ds0id4pA.js";import"./useEventCallback-C78AkP7O.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrYD12o3.js";import"./Tooltip-BIzLnAgn.js";import"./useTheme-CMhvYveJ.js";import"./useSlot-CykKJjN_.js";import"./mergeSlotProps-BdoUtTwz.js";import"./useControlled-De2ikPKN.js";import"./getReactElementRef-C0bnOj0D.js";import"./Portal-CM-iumOR.js";import"./utils-CA__7Tjr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Ceux9c--.js";import"./Button-BOTNYh0S.js";import"./index-BtEaczgi.js";import"./Box-B5h19-4r.js";import"./Grid-CC4gnOAh.js";import"./isMuiElement-WWIYAN0M.js";import"./styled-D33n_PsO.js";import"./Stack-DyYrotpf.js";import"./Container-Abk-Ppxh.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DQWo1yfq.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CTluzM1B.js";import"./Select-Une4fEtR.js";import"./SelectFocusSourceContext-r48ZZdc4.js";import"./Popover-xKML6FqO.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Bn9bLFsW.js";import"./debounce-Be36O1Ab.js";import"./Modal-CM12C_yu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BIxTCRW2.js";import"./Fade-BLKcm6ko.js";import"./Paper-P8N6YQhi.js";import"./List-C4OA8wB0.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-4iIpqybs.js";import"./OutlinedInput-DGiceUve.js";import"./FormHelperText-pYsIiyHO.js";import"./FormControlLabel-DPHIrrlZ.js";import"./Typography-6OKQ2qDF.js";import"./Switch-bAqugkzY.js";import"./SwitchBase-DgyKBDYv.js";import"./Radio-D6-4V09b.js";import"./RadioGroup-CNUqCHUu.js";import"./FormGroup-CE3PB0EV.js";import"./Divider-DtxNcQca.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BmCYopNL.js";import"./FormControl-Cpyq_H8j.js";import"./Autocomplete-DYh7LOHv.js";import"./Close-D8gVO89g.js";import"./usePreviousProps-C0fFGNib.js";import"./Chip-B5Jru15l.js";import"./ListSubheader-Crp0vEY-.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
