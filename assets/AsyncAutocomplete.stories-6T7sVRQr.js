import{j as p}from"./iframe-5qL0mprR.js";import{i as n}from"./index-BgvYUwQe.js";import{Q as a}from"./suspense-Ca22AqI2.js";import{A as e}from"./AsyncAutocomplete-D38vpTBX.js";import{Q as s}from"./queryClient-jSqp2e0b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ce6zeul1.js";import"./___vite-browser-external_commonjs-proxy-DolIjbot.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-DQhL2hi7.js";import"./useBaseQuery-in6Y_jke.js";import"./Autocomplete-BpGdVI3x.js";import"./index-CIJrhxZS.js";import"./index-C3SWmzio.js";import"./index-CrcoPoGw.js";import"./index-CD_y2Btm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8DRNpD6.js";import"./memoTheme-DGTRKnQQ.js";import"./styled-CoUwmM87.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D6eeRdCr.js";import"./IconButton-B8_cpiYd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CEBWCJ86.js";import"./useTimeout-B8tDrGFN.js";import"./TransitionGroupContext-DG4g3onZ.js";import"./useForkRef-B_tBAx6E.js";import"./useEventCallback-DqMc6arA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BqSWo9RJ.js";import"./Tooltip-P-kE-0cn.js";import"./useTheme-Dl3uMx7u.js";import"./useSlot-Cn1CdUSX.js";import"./mergeSlotProps-BLlOPPFY.js";import"./useControlled-CSqunifB.js";import"./getReactElementRef-DBt8lh_B.js";import"./Portal-BaL9DcFZ.js";import"./utils-ZWxhk7o5.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BldRbwm9.js";import"./Button-8WJV18MQ.js";import"./index-ClcKetnN.js";import"./Box-jTQ-hmH5.js";import"./Grid-B5L6Dh7M.js";import"./isMuiElement-DHbarLNo.js";import"./styled-rFpyV319.js";import"./Stack-CnLSR6do.js";import"./Container-B0mlIeY3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DVY6ao7R.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5FH_KgV.js";import"./Select-Dc1mU1Pl.js";import"./SelectFocusSourceContext-CEJvL2Re.js";import"./Popover-fOCUh9Nt.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BAEmNdNM.js";import"./debounce-Be36O1Ab.js";import"./Modal-CAwaW-IN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DdJYMJ-d.js";import"./Fade-CwTmGpyj.js";import"./Paper-CT3iXlM2.js";import"./List-8rgLrAmz.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CZsBBnxz.js";import"./OutlinedInput-exuQdaqt.js";import"./FormHelperText-Bngb2_Es.js";import"./FormControlLabel-cDTw_uEy.js";import"./Typography-F-Y5u_yh.js";import"./Switch-DUksUYmW.js";import"./SwitchBase-C72NdBTb.js";import"./Radio-BRuYCTD8.js";import"./RadioGroup-PluZ5qs0.js";import"./FormGroup-DUp1hayB.js";import"./Divider-DdnnBiCY.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BU-6Dl6v.js";import"./FormControl-Dcj4iUlW.js";import"./Autocomplete-2oImMAEx.js";import"./Close-DTIfGCy3.js";import"./usePreviousProps-BKX5CLWv.js";import"./Chip-C0POsqyA.js";import"./ListSubheader-DuP4kBYp.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
