import{j as p}from"./iframe-TaNZkFdX.js";import{i as n}from"./index-D0ROOKOz.js";import{Q as a}from"./suspense-C1rqFQ3y.js";import{A as e}from"./AsyncAutocomplete-Du4H--8n.js";import{Q as s}from"./queryClient-CtrPya-n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_tcZaAt.js";import"./___vite-browser-external_commonjs-proxy-BZtc6z5Q.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-DmEJ0nYA.js";import"./useBaseQuery-DoIWs5nv.js";import"./Autocomplete-DoKnER_6.js";import"./index-CP0-YjpH.js";import"./index-DED0iKzE.js";import"./index-MVgG_W0q.js";import"./index-DQOdSWXL.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DJOFM4ge.js";import"./memoTheme-DWNFUNe8.js";import"./styled-B4LT_xKE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B97OVu1W.js";import"./IconButton-Bj0GebPw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-hN41DD3n.js";import"./useTimeout-6mINgJ0s.js";import"./TransitionGroupContext-DNirSs3q.js";import"./useForkRef-BWA77Ou0.js";import"./useEventCallback-Mv5Tf1uh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-UQNWqsj-.js";import"./Tooltip-NifhenR9.js";import"./useTheme-BwMLg3Cm.js";import"./useSlot-C54pGJsm.js";import"./mergeSlotProps-I1tu7yOe.js";import"./useControlled-DvjtXf7N.js";import"./getReactElementRef-CAOV2LsM.js";import"./Portal-bQbDJznY.js";import"./utils-DLs5F192.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DaoY2z77.js";import"./Button-BwGYoRWi.js";import"./index-BDHwWUp_.js";import"./Box-B6-W-G0J.js";import"./Grid-CXWUeHQh.js";import"./isMuiElement-D3gl8ezB.js";import"./styled-Dk8RL2_h.js";import"./Stack-CHbD9DWZ.js";import"./Container-Bw0hRcvj.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DDrneIVK.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C3JuhRxY.js";import"./Select-BL9Z-gNl.js";import"./SelectFocusSourceContext-onYVou0i.js";import"./Popover-D5CfIDm2.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CMDl2A-V.js";import"./debounce-Be36O1Ab.js";import"./Modal-C4RwlORl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-aCYOBwWa.js";import"./Fade-CJipK2zd.js";import"./Paper-DmzWjV3O.js";import"./List-B95bCbeF.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-gxV3qIoY.js";import"./OutlinedInput-CUtfKWDd.js";import"./FormHelperText-hu8qIV4s.js";import"./FormControlLabel-St5nSj4i.js";import"./Typography-01frBhx_.js";import"./Switch-BfayRGCf.js";import"./SwitchBase-lR1eKZM4.js";import"./Radio-D2LmUOQ3.js";import"./RadioGroup-y5iYDCwH.js";import"./FormGroup-DCFH8px-.js";import"./Divider-HX4qCGjr.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D1jQ20tt.js";import"./FormControl-aukPUzfN.js";import"./Autocomplete-BxUK_8xi.js";import"./Close-DkVKVlG0.js";import"./usePreviousProps-C-oZgB2N.js";import"./Chip-B4YtMmbL.js";import"./ListSubheader-Bb_XE9ul.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
