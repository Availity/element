import{j as p}from"./iframe-CwO-jD2r.js";import{i as n}from"./index-BtS5UmTE.js";import{Q as a}from"./suspense-8vFPQq3p.js";import{A as e}from"./AsyncAutocomplete-B7WpOq12.js";import{Q as s}from"./queryClient-CU66RaB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dfh3fbTs.js";import"./___vite-browser-external_commonjs-proxy-C7rC1-Av.js";import"./index-BDHUarCl.js";import"./useInfiniteQuery-qgbg9bQd.js";import"./useBaseQuery-DEfbMomq.js";import"./Autocomplete-CvBNuzRr.js";import"./index-BDC_3Rxw.js";import"./index-BA97GnXb.js";import"./index-CrcoPoGw.js";import"./index-BN6UcWAE.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVo5jYj3.js";import"./memoTheme-BFKi1h0L.js";import"./styled-oLigdm2H.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CNETp13n.js";import"./IconButton-6AH5JngU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CG4pUtur.js";import"./useTimeout-fSFkMMHB.js";import"./TransitionGroupContext-B7p21pCQ.js";import"./useForkRef-C_Onx5Be.js";import"./useEventCallback-DAOE043T.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BJ26xdy5.js";import"./Tooltip-DWOWlEqB.js";import"./useTheme-COk7r_Ee.js";import"./useSlot-H46dGhkF.js";import"./mergeSlotProps-BwWI2lDY.js";import"./useControlled-D7MGwIra.js";import"./getReactElementRef-BccMI9lA.js";import"./Portal-Bdc5oVT9.js";import"./utils-4BcLErhI.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CxdF0UKw.js";import"./Button-BLrfDWuG.js";import"./index-DDnCuFzs.js";import"./Box-aCkC6O_c.js";import"./Grid-BLIKAx1P.js";import"./isMuiElement-DiCrCwGT.js";import"./styled-CUc8450O.js";import"./Stack-CHmf-yYC.js";import"./Container-BPLOD5On.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BVvcn0pm.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CiqVAws-.js";import"./Select-DpBSTnvT.js";import"./SelectFocusSourceContext-CyLTWWv_.js";import"./Popover-B5g1qt2p.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BuhqGTB0.js";import"./debounce-Be36O1Ab.js";import"./Modal-pR2rfcmc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CkQmcNu2.js";import"./Fade-BMJzwZSG.js";import"./Paper-4GVPiycN.js";import"./List-C1oZuEzd.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-s4imERVo.js";import"./OutlinedInput-ClLFrf98.js";import"./FormHelperText-BOeTOdIO.js";import"./FormControlLabel-C2jYLJgd.js";import"./Typography-BF7hwO0t.js";import"./Switch-B9atGEQZ.js";import"./SwitchBase-Bpbf_DGL.js";import"./Radio-Dge-NWMw.js";import"./RadioGroup-Bs8Dm3MU.js";import"./FormGroup-CQLSU16C.js";import"./Divider-BSXm1Pap.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D6tAIVPa.js";import"./FormControl-BiLy_IKp.js";import"./Autocomplete-CZQdwgI-.js";import"./Close-BM0Z-puH.js";import"./usePreviousProps-z94_ZVXm.js";import"./Chip-BDv68K1E.js";import"./ListSubheader-BNfZTMRy.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
