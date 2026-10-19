import{j as p}from"./iframe-V3tbPOwE.js";import{i as n}from"./index-Duf-tmLC.js";import{Q as a}from"./suspense-Bd5Grz5f.js";import{A as e}from"./AsyncAutocomplete-qF-qqUWJ.js";import{Q as s}from"./queryClient-BSL3XK4y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtNMuJ1a.js";import"./___vite-browser-external_commonjs-proxy-C6cQmOn5.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-tWV-gxSV.js";import"./useBaseQuery-Bts2QRja.js";import"./Autocomplete-gHT3IL2_.js";import"./index-JWsmx4AT.js";import"./index-teMVs_up.js";import"./index-MVgG_W0q.js";import"./index-DDGGRFDD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DMsEcqNG.js";import"./memoTheme-nYDz4AH7.js";import"./styled-Br8tiGNT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CheDZIlw.js";import"./IconButton-Cmdx9brD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BWZhrEZd.js";import"./useTimeout-BFosHs8Q.js";import"./TransitionGroupContext-BT8MRBaI.js";import"./useForkRef-CZXJqfUL.js";import"./useEventCallback-BsNvdAGC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-1E0UYHmw.js";import"./Tooltip-BqnFS_Iw.js";import"./useTheme-kNyMIH6i.js";import"./useSlot-JqPUkt86.js";import"./mergeSlotProps-nXLrBWqI.js";import"./useControlled-DU3h8Asb.js";import"./getReactElementRef-jC5-igXX.js";import"./Portal-BYLHPY1g.js";import"./utils-DJcf64yX.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BFQRGr1E.js";import"./Button-DK2TX3S1.js";import"./index-DBjuuRwi.js";import"./Box-CWUEJO1A.js";import"./Grid-Bw-kyyif.js";import"./isMuiElement-Bojr2z3f.js";import"./styled-DaY85gB9.js";import"./Stack-BhI6E9BW.js";import"./Container-DuquqMVo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkW7GKiH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CkUw_ctj.js";import"./Select-CrxWULwR.js";import"./SelectFocusSourceContext-DV7K2vKu.js";import"./Popover-LG3JRuxX.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CnUXTjg3.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bj2PA8Xo.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-lpfDs7Fh.js";import"./Fade-CfqPTD91.js";import"./Paper-CdPhUGdf.js";import"./List-VEKX0l2J.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CsNTB8qp.js";import"./OutlinedInput-CApj83lO.js";import"./FormHelperText-DpXYC3GS.js";import"./FormControlLabel-BuiDdDUC.js";import"./Typography-CpNf9PKA.js";import"./Switch-sFLjF5Ad.js";import"./SwitchBase-DJnb3nbp.js";import"./Radio-KNolnd1x.js";import"./RadioGroup-BnROJ1qm.js";import"./FormGroup-BS6CC4_B.js";import"./Divider-CfhIjDdr.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField--eWJJv25.js";import"./FormControl-tp0UYwYk.js";import"./Autocomplete-h1jxDP_D.js";import"./Close-BuDRW0gl.js";import"./usePreviousProps-CSIHI738.js";import"./Chip-DY7VvEmE.js";import"./ListSubheader-BaBRDWc_.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
