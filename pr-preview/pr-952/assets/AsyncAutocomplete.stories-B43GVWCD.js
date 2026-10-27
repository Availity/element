import{j as p}from"./iframe-DUa_E2nK.js";import{i as n}from"./index-6lyooZqo.js";import{Q as a}from"./suspense-CED7JhWh.js";import{A as e}from"./AsyncAutocomplete-DSAq5a2f.js";import{Q as s}from"./queryClient-BdYZzrgu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjPTx4A6.js";import"./___vite-browser-external_commonjs-proxy-CTXS35BP.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-CxwVJgZx.js";import"./useBaseQuery-DspHs3UI.js";import"./Autocomplete-DMIAvvpe.js";import"./index-h-RAtAdn.js";import"./index-BU1mb21Z.js";import"./index-MVgG_W0q.js";import"./index-BevA4mtD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BewdDvzO.js";import"./memoTheme-Bo6NThYL.js";import"./styled-D3Muh4M2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CS_NebII.js";import"./IconButton-BifEyGUq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bug9d4_R.js";import"./useTimeout-CVWqITqM.js";import"./TransitionGroupContext-CaPdAk9s.js";import"./useForkRef-CxpHUqnO.js";import"./useEventCallback-BMK6R2Pt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bzposo0O.js";import"./Tooltip-Bq-dRAZk.js";import"./useTheme-D2wrQY5U.js";import"./useSlot-DlELlrwU.js";import"./mergeSlotProps-CEo301sU.js";import"./useControlled-mPNvpXlD.js";import"./getReactElementRef-ReUsDlEE.js";import"./Portal-DK6E0QaG.js";import"./utils-9zA4k4wE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cc5Sw607.js";import"./Button-CbV8DhMK.js";import"./index-CpWANY3x.js";import"./Box-BO8RQHnM.js";import"./Grid-BjkaeTm4.js";import"./isMuiElement-CAErNZ9l.js";import"./styled-DfLAYXD9.js";import"./Stack-BXnO2vhe.js";import"./Container-D09iA6_m.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CpBzcOsS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-S2Jix1K5.js";import"./Select-ElUVnloi.js";import"./SelectFocusSourceContext-C1yv2uKz.js";import"./Popover-rBOqpwbc.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BWiww6C5.js";import"./debounce-Be36O1Ab.js";import"./Modal-BWDZ2XAH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D1fLbtuP.js";import"./Fade-BulH4fWG.js";import"./Paper-BFFGqGxw.js";import"./List-BU73CZkQ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BrmPcgFj.js";import"./OutlinedInput-CFR5oBwr.js";import"./FormHelperText-D9BA1QML.js";import"./FormControlLabel-BWd96Wzk.js";import"./Typography-BemmhR83.js";import"./Switch-CKOovF9u.js";import"./SwitchBase-Cbi-g6KU.js";import"./Radio-BjnBtCnE.js";import"./RadioGroup-GuTuFZPa.js";import"./FormGroup-BvSMqjlq.js";import"./Divider-C3QA1lO4.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CItELq9u.js";import"./FormControl-Bsqtqb3j.js";import"./Autocomplete-IZ5Twj3Q.js";import"./Close-BKLOGUyb.js";import"./usePreviousProps-CNjjcUxp.js";import"./Chip-Bjgq0s0u.js";import"./ListSubheader-zW641-DO.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
