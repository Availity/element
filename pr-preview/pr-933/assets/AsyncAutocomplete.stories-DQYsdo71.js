import{j as p}from"./iframe-_ZTccD58.js";import{i as n}from"./index-CTKxd3L4.js";import{Q as a}from"./suspense-Xn0uKYSU.js";import{A as e}from"./AsyncAutocomplete-I0d7fVy-.js";import{Q as s}from"./queryClient-DUNahOpl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cal9rjX2.js";import"./___vite-browser-external_commonjs-proxy-CWv8JeV2.js";import"./index-CXRgriMz.js";import"./useInfiniteQuery-_8rLnWWC.js";import"./useBaseQuery-sbWgdn-F.js";import"./Autocomplete-C1iF6CBG.js";import"./index-C3h17Tj6.js";import"./index-BrswPlEY.js";import"./index-CrcoPoGw.js";import"./index-D2g-Snq2.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B7LeHXNQ.js";import"./memoTheme-BuxtMmS2.js";import"./styled-DxUGJNed.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DLaYSOpi.js";import"./IconButton-DaIXPvFu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CPTcrrxt.js";import"./useTimeout-COBvC2JW.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./useForkRef-BH960YuM.js";import"./useEventCallback-Bsg7GzMN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DP4XdEyk.js";import"./Tooltip-BlJXya1q.js";import"./useTheme-CbKlvc9V.js";import"./useSlot-Y1vfiROK.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useControlled-h9lrVQtL.js";import"./getReactElementRef-CKHPMftD.js";import"./Portal-D40QliBd.js";import"./utils-CGytJ6bP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-93kC9vNJ.js";import"./Button-DpAEBbkn.js";import"./index-MbAAKXvE.js";import"./Box-BSxgn2ms.js";import"./Grid-cMYs6nxO.js";import"./isMuiElement-yepEbMeh.js";import"./styled-B0tsulN_.js";import"./Stack-DA_tb5jO.js";import"./Container-ChGZTn1s.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BOIs-YGq.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-3-vne5Nr.js";import"./Select-wCdgrbFd.js";import"./SelectFocusSourceContext-CjN1_fJS.js";import"./Popover-DTwCY0yp.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-D6scpCU0.js";import"./debounce-Be36O1Ab.js";import"./Modal-D02YFzj_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B0rEXgSL.js";import"./Fade-U1zsu3gd.js";import"./Paper-TFiwEfzG.js";import"./List-D6qKeGNd.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CPBwa84_.js";import"./OutlinedInput-DXlNzAXJ.js";import"./FormHelperText-CVMjCHsI.js";import"./FormControlLabel-Bk2X92XQ.js";import"./Typography-BQev244I.js";import"./Switch-DVpo9JuL.js";import"./SwitchBase-BCE6kg8q.js";import"./Radio-C4kknd4X.js";import"./RadioGroup-jGIVdwLG.js";import"./FormGroup-DF6oOKk8.js";import"./Divider-ByHj0LGu.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-3_6rcchm.js";import"./FormControl-COm2WUnr.js";import"./Autocomplete-KjhL-YUQ.js";import"./Close-DDepYFWR.js";import"./usePreviousProps-Bkmlh2h1.js";import"./Chip-JdieyNSv.js";import"./ListSubheader-CybiQOoS.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
