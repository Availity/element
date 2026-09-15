import{j as p}from"./iframe-G1mPJgBf.js";import{i as n}from"./index-CEiGyhSD.js";import{Q as a}from"./suspense-rKRI-UBi.js";import{A as e}from"./AsyncAutocomplete-daE-oKmg.js";import{Q as s}from"./queryClient-DhVtx6L5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIoy5QMF.js";import"./___vite-browser-external_commonjs-proxy-BbC5ecPs.js";import"./index-CGWJm4Tl.js";import"./useInfiniteQuery--zMr5MSV.js";import"./useBaseQuery-DvkeHGVq.js";import"./Autocomplete-2go-hogk.js";import"./index-CJfPOYSG.js";import"./index-DPTb8TTK.js";import"./index-CrcoPoGw.js";import"./index-J2aZCtZS.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CTlX2w7Q.js";import"./memoTheme-ClxxX8JT.js";import"./styled-Bu4wmneT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-L2w0xRVx.js";import"./IconButton-Bcnv2CeG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5xaXwjS.js";import"./useTimeout-EKZwYL1w.js";import"./TransitionGroupContext-F733By2L.js";import"./useForkRef-BD2h0Jdv.js";import"./useEventCallback-C728JWJX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CUukeIT7.js";import"./Tooltip-DQJZ8sfi.js";import"./useTheme-D1p8Kaqq.js";import"./useSlot-DeTGMu9w.js";import"./mergeSlotProps-D9Hi5YzQ.js";import"./useControlled-_wEooLXW.js";import"./getReactElementRef-D1QwtblH.js";import"./Portal-D2NuCJSx.js";import"./utils-CV6P-8oh.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C0zVRdHz.js";import"./Button-ByjTqYnc.js";import"./index-Dd7L_VAv.js";import"./Box-B9x9TWbS.js";import"./Grid-DzK1vDYp.js";import"./isMuiElement-CksqsLPP.js";import"./styled-DkfJ6ssg.js";import"./Stack-baAEBtk1.js";import"./Container-v7PawbDd.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CXyukB4E.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DGpS68tJ.js";import"./Select-BYk43Zrb.js";import"./SelectFocusSourceContext-DO_9ohPs.js";import"./Popover-CqRJKN8j.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-B2gKoX76.js";import"./debounce-Be36O1Ab.js";import"./Modal-CSvN6E0P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wbozj9wt.js";import"./Fade-DRE_fc-F.js";import"./Paper-B8ctKAYM.js";import"./List-NPmmzPN-.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BAr3_gQH.js";import"./OutlinedInput-C3tRGErD.js";import"./FormHelperText-B8V18IsC.js";import"./FormControlLabel-tWenJfV9.js";import"./Typography-DNGzJ1Ro.js";import"./Switch-ChMWY217.js";import"./SwitchBase-DC5Y6S4X.js";import"./Radio-B20SOU7e.js";import"./RadioGroup-BjboFY-P.js";import"./FormGroup-B0-dPKpp.js";import"./Divider-SgB52HKQ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CYnDEoli.js";import"./FormControl-CDBc_1Ko.js";import"./Autocomplete-DnPa1Klg.js";import"./Close-CE-Vyd3p.js";import"./usePreviousProps-Bp_MxTUR.js";import"./Chip-CJJ7a1EP.js";import"./ListSubheader-wEfaDNU3.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
