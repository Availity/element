import{j as p}from"./iframe-3dkTY0jX.js";import{i as n}from"./index-BlL9977D.js";import{Q as a}from"./suspense-LImw3zVj.js";import{A as e}from"./AsyncAutocomplete-B2Dk-eyz.js";import{Q as s}from"./queryClient-BmBZgBhV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-InsQLx3y.js";import"./___vite-browser-external_commonjs-proxy-XgDoKZSQ.js";import"./index-CmY9jp0R.js";import"./useInfiniteQuery-DPhH4miE.js";import"./useBaseQuery-m07hOZd4.js";import"./Autocomplete-BH0zcOp1.js";import"./index-B5d6M-xG.js";import"./index-C83s78gO.js";import"./index-CrcoPoGw.js";import"./index-CuTsacvC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-iH6sJxt7.js";import"./memoTheme-ClYOyAcO.js";import"./styled-DpUmhVNm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B-aFmFgv.js";import"./Tooltip-gP38pAtd.js";import"./useTheme-DqSWHq5v.js";import"./useSlot-rqG-d0ju.js";import"./mergeSlotProps-DA590uQB.js";import"./useForkRef-D98SVFOp.js";import"./useTimeout-C1Q0-pFI.js";import"./useControlled-BRptJIgz.js";import"./useEventCallback-DqxbtF2b.js";import"./getReactElementRef-D5Pt6kS1.js";import"./Portal-COcgB0Km.js";import"./utils-q4WRQ2GW.js";import"./TransitionGroupContext-CenxJGkC.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-cunvSKS2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-NndX5job.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CGwtNBxW.js";import"./CircularProgress-BLVqZX76.js";import"./Button-llKR0QUB.js";import"./index-DIxClpYS.js";import"./Box-8YbrThzE.js";import"./Grid-CLckDB5v.js";import"./isMuiElement-Bd2bXImB.js";import"./styled-BLuOjd1d.js";import"./Stack-C6U2vEDQ.js";import"./Container-DbHjUNkP.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BNykh8H7.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BkMljPP4.js";import"./Select-hM0JA67n.js";import"./SelectFocusSourceContext-DDFMB3UY.js";import"./Popover-DRGr9AS8.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-gdJU7zTn.js";import"./debounce-Be36O1Ab.js";import"./Modal-C04Dtpn0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DwY4Idrm.js";import"./Fade-DoGbMPsZ.js";import"./Paper-v-wIRd8c.js";import"./List-DjzIYyb1.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BvVOPXpo.js";import"./OutlinedInput-Duj6wcXY.js";import"./FormHelperText-CfwUUlMy.js";import"./FormControlLabel-CWmS10z3.js";import"./Typography-BaJfZ2Cx.js";import"./Switch-BmTIf3nr.js";import"./SwitchBase-kK0dwszt.js";import"./Radio-C4Mro5AG.js";import"./RadioGroup-B3zSb4-e.js";import"./FormGroup-dum4jMC0.js";import"./Divider-xWAGgNzV.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField--NEMuvbW.js";import"./FormControl-DVjrtSwm.js";import"./Autocomplete-D87n1PWv.js";import"./Close-BkClo0wN.js";import"./usePreviousProps-BRdmswVt.js";import"./Chip-DO8Y9Q_H.js";import"./ListSubheader-Ctr5EHnG.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
