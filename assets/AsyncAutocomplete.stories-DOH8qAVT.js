import{j as p}from"./iframe-C4HkdVED.js";import{i as n}from"./index-B1GGdwIs.js";import{Q as a}from"./suspense-C8C4TGIG.js";import{A as e}from"./AsyncAutocomplete-DbXs8Z0C.js";import{Q as s}from"./queryClient-Bfc4PEpX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkVBG_A9.js";import"./___vite-browser-external_commonjs-proxy-C5KZul5m.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-Ff-yd8ex.js";import"./useBaseQuery-Clml01es.js";import"./Autocomplete-2NrJS7o7.js";import"./index-ytJbfoR7.js";import"./index-BNpXJtsj.js";import"./index-MVgG_W0q.js";import"./index-BbnWHkMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CzUPI6h_.js";import"./memoTheme-BG6Rse2P.js";import"./styled-BT-YQVcS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BxZtHMSR.js";import"./IconButton-DAm3sfm9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DSSz5Mb_.js";import"./useTimeout-Dr23bHsI.js";import"./TransitionGroupContext-CZn2k0zL.js";import"./useForkRef-DbUR2J1C.js";import"./useEventCallback-D9gX9Adj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClUyHzUc.js";import"./Tooltip-Cu6qxs5M.js";import"./useTheme-B8XrPkIo.js";import"./useSlot-BskdyKfe.js";import"./mergeSlotProps-l3M3qA9x.js";import"./useControlled-DrH6I0XL.js";import"./getReactElementRef-BgdKh17h.js";import"./Portal-Dwihqrdb.js";import"./utils-DTqk_mV5.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-zZW6O8Vc.js";import"./Button-Xlv09vPK.js";import"./index-YZkZIPP3.js";import"./Box-zmRcbAMo.js";import"./Grid-BRUvQOfL.js";import"./isMuiElement-DPikhU7x.js";import"./styled-CWQ1NF-T.js";import"./Stack-Rm4Xh7KY.js";import"./Container-c3Xuxmeg.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C9ntXL4m.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DBv_L_iF.js";import"./Select-BCOcnhN8.js";import"./SelectFocusSourceContext-De_LaZ5b.js";import"./Popover-DZCyI0Pz.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-D4zCYtSN.js";import"./debounce-Be36O1Ab.js";import"./Modal-B_rVHOa-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CPAt_MFQ.js";import"./Fade-JYP9Xa3N.js";import"./Paper-D1x-q-nj.js";import"./List-t3_9dFMJ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-ZWi4Noed.js";import"./OutlinedInput-Rbi1tT2Y.js";import"./FormHelperText-CB5Pl2UM.js";import"./FormControlLabel-DqOpCIzX.js";import"./Typography-Da_zx24V.js";import"./Switch-WzSlbu28.js";import"./SwitchBase-A-EsK39V.js";import"./Radio-D4t5oEYc.js";import"./RadioGroup-Crjwdy5J.js";import"./FormGroup-CVvckbGi.js";import"./Divider-DePVDSaH.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DkEwm9i-.js";import"./FormControl-BsgqGLFQ.js";import"./Autocomplete-BtObOpv9.js";import"./Close-K-Su-P3R.js";import"./usePreviousProps-DJUyWQ75.js";import"./Chip-BYAillRH.js";import"./ListSubheader-DDFIMClj.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
