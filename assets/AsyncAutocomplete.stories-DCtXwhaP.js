import{j as p}from"./iframe-QKKiXGe2.js";import{i as n}from"./index-BnWYiYcP.js";import{Q as a}from"./suspense-BMwa7e0p.js";import{A as e}from"./AsyncAutocomplete-CvJqBMvV.js";import{Q as s}from"./queryClient-I0ddF5dx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dxvresu9.js";import"./___vite-browser-external_commonjs-proxy-DZSMJcrl.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-B3d4j4e6.js";import"./useBaseQuery-BXrp3Vnr.js";import"./Autocomplete-9WTXIWz5.js";import"./index-CtrWn445.js";import"./index-Cvupsb9L.js";import"./index-CrcoPoGw.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D3LX6zM9.js";import"./memoTheme-CZ6h3Fbh.js";import"./styled-CQy7SchW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Dx_zFY-v.js";import"./IconButton-SAs9Di6J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useForkRef-GKR9CYz5.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./useTheme-CobnQWC-.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useControlled-BjERoBEC.js";import"./getReactElementRef-DpOU19qE.js";import"./Portal-JL7agaji.js";import"./utils-Dh1OrGpA.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CqRX49VI.js";import"./Button-B0ZWu58J.js";import"./index-DmDUxSlw.js";import"./Box-DS6KTGM7.js";import"./Grid-BWZayuEN.js";import"./isMuiElement-BPsBBR2z.js";import"./styled-CL_ITmKE.js";import"./Stack-vCt2ORwh.js";import"./Container-B58issDp.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D_H32dE9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BS7uljQq.js";import"./Select-DSMEK_KK.js";import"./SelectFocusSourceContext-Iss43-gE.js";import"./Popover-DfTMYM2R.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CpR-3M6H.js";import"./debounce-Be36O1Ab.js";import"./Modal-WlFR6ZW0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Veo0zKS5.js";import"./Fade-BA-tR7QB.js";import"./Paper-Bu_9L5He.js";import"./List-jtBebsxm.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bm4mBUxC.js";import"./OutlinedInput-Cudg-yYO.js";import"./FormHelperText-DI4TFjly.js";import"./FormControlLabel-DzVdZDHy.js";import"./Typography-lfATY7Ds.js";import"./Switch-D-dXUd1u.js";import"./SwitchBase-BB6lrJXc.js";import"./Radio-Bqh7DeHt.js";import"./RadioGroup-SwtLDsyW.js";import"./FormGroup-THy_K4lA.js";import"./Divider-U3oIKmQv.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BW_bH-hP.js";import"./FormControl-CitCh22I.js";import"./Autocomplete-DpF9oed4.js";import"./Close-DncTnFTq.js";import"./usePreviousProps-yaJ9_aj3.js";import"./Chip-D6Ob_CsE.js";import"./ListSubheader-DzYMx52B.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
