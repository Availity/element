import{j as p}from"./iframe-CEHPhfh-.js";import{i as n}from"./index-BFKNcTNX.js";import{Q as a}from"./suspense-BdvrWJMi.js";import{A as e}from"./AsyncAutocomplete-CvUDV2St.js";import{Q as s}from"./queryClient-B2V29dMp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChMXBR0c.js";import"./___vite-browser-external_commonjs-proxy-B-zXSXgP.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-CivPkBYN.js";import"./useBaseQuery-DoI_NK8F.js";import"./Autocomplete-C0UnhEFf.js";import"./index-BurFZRLE.js";import"./index-_UegUKj_.js";import"./index-CrcoPoGw.js";import"./index-tILHWvZu.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CRmvg5rp.js";import"./memoTheme-CIUXmmP3.js";import"./styled-surM00hH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BiRTiuFa.js";import"./IconButton-DFv4hPcI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bi9yKj0d.js";import"./useTimeout-C36QQqY4.js";import"./TransitionGroupContext-KFjAD8lx.js";import"./useForkRef-CUwhrb4S.js";import"./useEventCallback-BjU86bqT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIulSjrJ.js";import"./Tooltip-BwegOhQ3.js";import"./useTheme-B_yH_tF0.js";import"./useSlot-CGHriRRK.js";import"./mergeSlotProps-DqsR1CiL.js";import"./useControlled-CuNUqud6.js";import"./getReactElementRef-BKZTuICO.js";import"./Portal-BAyfuJxK.js";import"./utils-Dqw6COyO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CX3w_7Yv.js";import"./Button-DCMVSOfW.js";import"./index-DYWaDwbT.js";import"./Box-JfKqa7ps.js";import"./Grid-BWykgrcb.js";import"./isMuiElement-B3XjmQiv.js";import"./styled-Z7vS--HU.js";import"./Stack-kFyJTz_L.js";import"./Container-WyARCUam.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BRYtStoZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DKOaXlnO.js";import"./Select-D7khzvuo.js";import"./SelectFocusSourceContext-ZlVDIhni.js";import"./Popover-Cu_iSQEj.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CfdDxxlC.js";import"./debounce-Be36O1Ab.js";import"./Modal-D7vdJCxc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BLceXtZc.js";import"./Fade-snlpbKkK.js";import"./Paper-CXpuvckS.js";import"./List-DTUSYVMO.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DM21giQZ.js";import"./OutlinedInput-B4rUmiBa.js";import"./FormHelperText-DheZpH7H.js";import"./FormControlLabel-BzSk7T_G.js";import"./Typography-CJQmKVEQ.js";import"./Switch-BsymbQPl.js";import"./SwitchBase-DLCeua8o.js";import"./Radio-BHEJ1nRB.js";import"./RadioGroup-CeNvO4S4.js";import"./FormGroup-uFTTDTpe.js";import"./Divider-Ct8M__zO.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BP4ybW42.js";import"./FormControl-C4mjEeHz.js";import"./Autocomplete-DLM-TlBw.js";import"./Close-DTmO9E2Q.js";import"./usePreviousProps-DgKBbqdP.js";import"./Chip-BrqRFcJU.js";import"./ListSubheader-BOe1zGOO.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
