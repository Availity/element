import{j as p}from"./iframe-DV02LU8f.js";import{i as n}from"./index-CLj9BeNZ.js";import{Q as a}from"./suspense-CO-B5uc8.js";import{A as e}from"./AsyncAutocomplete-CeBcOHfT.js";import{Q as s}from"./queryClient-CZ_3FPrr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DA8EpHv8.js";import"./___vite-browser-external_commonjs-proxy-BXbXV1ez.js";import"./index-BkQ2mEsN.js";import"./useInfiniteQuery-Czap1EF9.js";import"./useBaseQuery-GdXv1_-o.js";import"./Autocomplete-B_9q5QQj.js";import"./index-k3iUcuPT.js";import"./index-DGPCr9CP.js";import"./index-CrcoPoGw.js";import"./index-B2ndQJTP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BicIoovE.js";import"./memoTheme-DH1tDBpV.js";import"./styled-rnNWEicw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DgtuzQHk.js";import"./Tooltip-BOv4Ws7L.js";import"./useTheme-Y2xcdKFi.js";import"./useSlot-Hu3W-cCE.js";import"./mergeSlotProps-Bc2Oi4bk.js";import"./useForkRef-BwPtyht0.js";import"./useTimeout-7haRoRjC.js";import"./useControlled-DL5wIsJx.js";import"./useEventCallback-DerujR8C.js";import"./getReactElementRef-COC2CLEL.js";import"./Portal-PMyfFMaG.js";import"./utils-CvzJUHOJ.js";import"./TransitionGroupContext-BxFEbXtm.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dtx0TQHB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D4Hw4OQf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DyVkVOcL.js";import"./CircularProgress-CAVNnpCq.js";import"./Button-3YflG3_Z.js";import"./index-DN1f2VGk.js";import"./Box-SeXXrj1o.js";import"./Grid-CAt1Mh8-.js";import"./isMuiElement-Bod-d1Ly.js";import"./styled-TfTHS2wg.js";import"./Stack-BwJgyjvk.js";import"./Container-C-cbttNX.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DxmpMApS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-rUj125Nx.js";import"./Select-SJiTaZi2.js";import"./SelectFocusSourceContext-D8Hbh3nZ.js";import"./Popover-BR27wnSV.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-N6SvUUDD.js";import"./debounce-Be36O1Ab.js";import"./Modal-B3KISgYa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ci3V7QU8.js";import"./Fade-CAu7O51Y.js";import"./Paper-X_4XbRhq.js";import"./List-B86gDMtC.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-ClgyEN0Z.js";import"./OutlinedInput-MfvrGn0E.js";import"./FormHelperText-B69_0vl5.js";import"./FormControlLabel-BmV4-vkc.js";import"./Typography-BZigmqh7.js";import"./Switch-CgHx9hmd.js";import"./SwitchBase-slcB8KUf.js";import"./Radio-CReGbcbO.js";import"./RadioGroup-D4ixwP02.js";import"./FormGroup-ClgnKSXL.js";import"./Divider-DdW8tJiT.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DQoXfjFU.js";import"./FormControl-B-ToJw53.js";import"./Autocomplete-Htu68Yxs.js";import"./Close-CuIM6vU6.js";import"./usePreviousProps-Cce8Yeny.js";import"./Chip-B-JS7L-C.js";import"./ListSubheader-D8gcljHj.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
