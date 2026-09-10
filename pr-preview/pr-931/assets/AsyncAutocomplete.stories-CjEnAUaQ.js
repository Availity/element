import{j as p}from"./iframe-ujVaYq5z.js";import{i as n}from"./index-uj7JhNjZ.js";import{Q as a}from"./suspense-P5S2jk3Q.js";import{A as e}from"./AsyncAutocomplete-BqQ6t9I2.js";import{Q as s}from"./queryClient-BtvMxgov.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb4NnpQ-.js";import"./___vite-browser-external_commonjs-proxy-D7JR7UKq.js";import"./index-T5OSBaAP.js";import"./useInfiniteQuery-DyQVWU0I.js";import"./useBaseQuery-BKJw39RZ.js";import"./Autocomplete-BMfW5gg3.js";import"./index-DtlWzaMP.js";import"./index-DuhTuEga.js";import"./index-CrcoPoGw.js";import"./index-CiMK-E4X.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DXUCDQE8.js";import"./memoTheme-CdGwTPP7.js";import"./styled-B-xCudEP.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-612CGizF.js";import"./IconButton-MZkZlGxG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-iPF5PiZW.js";import"./useTimeout-NHks1NG8.js";import"./TransitionGroupContext-4IQuvIV5.js";import"./useForkRef-DbBKzesF.js";import"./useEventCallback-Ckojbqp4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-see__pNb.js";import"./Tooltip-5f47SB-B.js";import"./useTheme-CRyXlIuJ.js";import"./useSlot-Bx_FYgWG.js";import"./mergeSlotProps-KSZa1rpd.js";import"./useControlled-BffgEsp1.js";import"./getReactElementRef-SADr8eSm.js";import"./Portal-C9J_EaUY.js";import"./utils-JnhbsWr6.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-zhwYHJyp.js";import"./Button-CHVL5mlZ.js";import"./index-BOD_Negu.js";import"./Box-Cl1E5OD4.js";import"./Grid-CvbP1FC1.js";import"./isMuiElement-rsUHqA_z.js";import"./styled-VPzH8ng9.js";import"./Stack-CQconrOZ.js";import"./Container-Bu0A8KYF.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CPfTRyuP.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Cvu2sY6d.js";import"./Select-BPDCCuPw.js";import"./SelectFocusSourceContext-rG7pWPT_.js";import"./Popover-BHdYqB-a.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Cf3nLFWM.js";import"./debounce-Be36O1Ab.js";import"./Modal-3Eqv_0Wj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DZyErt74.js";import"./Fade-D1fX65m0.js";import"./Paper-tJaxAljo.js";import"./List-CjBQExuh.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-C0cHZWti.js";import"./OutlinedInput-BtSlq6bO.js";import"./FormHelperText-CTZY8iBR.js";import"./FormControlLabel-C4xfba5E.js";import"./Typography-BNx6-4zj.js";import"./Switch-CBjqQ08R.js";import"./SwitchBase-DwviZCGg.js";import"./Radio-CjVbsVnH.js";import"./RadioGroup-_oAPx5U4.js";import"./FormGroup-Bf_foN45.js";import"./Divider-DIAH-5fx.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DsbsbLjs.js";import"./FormControl-DlRG_fK7.js";import"./Autocomplete-DvrM0bwW.js";import"./Close-yz4OtLj-.js";import"./usePreviousProps-g1K342qF.js";import"./Chip-_1XaEnj_.js";import"./ListSubheader-D2kWBYo-.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
