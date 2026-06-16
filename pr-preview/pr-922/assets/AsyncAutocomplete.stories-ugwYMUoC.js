import{j as p}from"./iframe-DOPEDWVE.js";import{i as n}from"./index-D4Ewo4sZ.js";import{Q as a}from"./suspense-Da2N__me.js";import{A as e}from"./AsyncAutocomplete-CYHFoFuL.js";import{Q as s}from"./queryClient-CZnJFMhi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6zI7NYV.js";import"./___vite-browser-external_commonjs-proxy-XYxfUcR_.js";import"./index-D5qdRn3q.js";import"./useInfiniteQuery-DCYbuAyD.js";import"./useBaseQuery-ttjVf2RA.js";import"./Autocomplete-q1yuyvd4.js";import"./index-EgVkongX.js";import"./index-DBmw2oKs.js";import"./index-CrcoPoGw.js";import"./index-NHPSesC7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bt1sNrUf.js";import"./memoTheme-8zILCmUA.js";import"./styled-LPfbW-Wh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B920RZd2.js";import"./Tooltip-VtUuxwVh.js";import"./useTheme-D2iYqlAC.js";import"./useSlot-C4qJPUpL.js";import"./mergeSlotProps-DNHO_T1K.js";import"./useForkRef-B1Lx8fl-.js";import"./useTimeout-CvyLGLNv.js";import"./useControlled-W_wjgM09.js";import"./useEventCallback-2DpT7fNb.js";import"./getReactElementRef-CylE0SZK.js";import"./Portal-CcIDLVWU.js";import"./utils-C1ZbFEVB.js";import"./TransitionGroupContext-GxBk2Ip_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DiHBVMXF.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52uYHTa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CQME6_xK.js";import"./CircularProgress-Bd2XmtNT.js";import"./Button-DHnc0sD-.js";import"./index-CVbaZk5H.js";import"./Box-m-kHsJDm.js";import"./Grid-D6ohNbZE.js";import"./isMuiElement-OUcohH0i.js";import"./styled-DCDHMWdc.js";import"./Stack-CjxkYZ6F.js";import"./Container-5_MJa3VZ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CBYcclqk.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DIv8BJCy.js";import"./Select-CpDZPS1H.js";import"./SelectFocusSourceContext-BhjBp6ew.js";import"./Popover-BgxDu_AE.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CEgtkqsO.js";import"./debounce-Be36O1Ab.js";import"./Modal-Dz4Wg6rk.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D5hQN3RU.js";import"./Fade-DWzLIVc2.js";import"./Paper-e-gdlgr6.js";import"./List-CVXZp5mU.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-URN63_Ch.js";import"./OutlinedInput-L_8zJgVV.js";import"./FormHelperText-CYrlQGob.js";import"./FormControlLabel-Dd2Mqmwt.js";import"./Typography-D_VWbga9.js";import"./Switch-DQVRQ4_0.js";import"./SwitchBase-C2DjFSld.js";import"./Radio-Z7ssCuQ9.js";import"./RadioGroup-CEVZjNHr.js";import"./FormGroup-DQPvM_H1.js";import"./Divider-B3v8nYDN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D8gCz3GK.js";import"./FormControl-D6iyS4X7.js";import"./Autocomplete-dlIWbEXI.js";import"./Close-Ca30N1zO.js";import"./usePreviousProps-Wjd0DxpX.js";import"./Chip-Bwbl76tO.js";import"./ListSubheader-Dxkmbq32.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
