import{j as p}from"./iframe-B7It4zq8.js";import{i as n}from"./index-CyfbJBF5.js";import{Q as a}from"./suspense-faveYIPl.js";import{A as e}from"./AsyncAutocomplete-QoSlb-PD.js";import{Q as s}from"./queryClient-DgRtG9I1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ceu2PZpV.js";import"./___vite-browser-external_commonjs-proxy-BlBmhHyD.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-CR6zXMFO.js";import"./useBaseQuery-D0OOOr1C.js";import"./Autocomplete-CI_phtnk.js";import"./index-s6sQNl3x.js";import"./index-eyGbV9a5.js";import"./index-MVgG_W0q.js";import"./index-DahGL3Ws.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CN80xc_w.js";import"./memoTheme-CGf3L_ek.js";import"./styled-Bn4RjmYR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-U6rGSuo_.js";import"./IconButton-C-t-b5Lt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2waO-fK.js";import"./useTimeout-YUVk49Nr.js";import"./TransitionGroupContext-DcJKCyB0.js";import"./useForkRef-CPn4J3x7.js";import"./useEventCallback-C74dKXBI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B2uMItbz.js";import"./Tooltip-CzJoUoCR.js";import"./useTheme-BEYyhBmQ.js";import"./useSlot-W932GJWf.js";import"./mergeSlotProps-D605olu0.js";import"./useControlled-D_SZmVUM.js";import"./getReactElementRef-DdXJtssw.js";import"./Portal-Dv_fvGmT.js";import"./utils-8hf5HdRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-5kTH7JUJ.js";import"./Button-BIhtYg5K.js";import"./index-NPVdg4Et.js";import"./Box-DCJTclMn.js";import"./Grid-A8igwbvH.js";import"./isMuiElement-Co847M5i.js";import"./styled-DnXB-Vry.js";import"./Stack-KZSUJmtQ.js";import"./Container-DFLwTEF8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DL9fs6b-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B-9vmVn0.js";import"./Select-CqroXm0-.js";import"./SelectFocusSourceContext-p7Q9PkOh.js";import"./Popover-CvEl5u9c.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CT132jMM.js";import"./debounce-Be36O1Ab.js";import"./Modal-XCKy5Q-Z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CMsbxjXn.js";import"./Fade-dOEIYsg7.js";import"./Paper-16eSpGwX.js";import"./List-BBFik3I9.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-mTQeEUrk.js";import"./OutlinedInput-2NJ2Vb7h.js";import"./FormHelperText-xZDaLp3L.js";import"./FormControlLabel-DzsUjCY9.js";import"./Typography-D5VLn6r5.js";import"./Switch-gEQ3qE6L.js";import"./SwitchBase-CGG-3b0l.js";import"./Radio-BrnWVLWC.js";import"./RadioGroup-CCkcY1aL.js";import"./FormGroup-CrkydTVS.js";import"./Divider-hoZSVZoR.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B_Hivwte.js";import"./FormControl-BIzU-s4D.js";import"./Autocomplete-C-XxB6dx.js";import"./Close-C2tp-l78.js";import"./usePreviousProps-BWsXbbEU.js";import"./Chip-CV_M_LEp.js";import"./ListSubheader-6cxoZWKk.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
