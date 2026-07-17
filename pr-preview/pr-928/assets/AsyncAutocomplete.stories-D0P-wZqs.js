import{j as p}from"./iframe-DFjmTghm.js";import{i as n}from"./index-DuZcS_m3.js";import{Q as a}from"./suspense-CwAU2u64.js";import{A as e}from"./AsyncAutocomplete-Cz9TPLpt.js";import{Q as s}from"./queryClient-CwNWR9I6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9CAbCnG.js";import"./___vite-browser-external_commonjs-proxy-BvOHJjar.js";import"./index-DMhxb2GA.js";import"./useInfiniteQuery-D5_SOLRS.js";import"./useBaseQuery-BM7X3ltn.js";import"./Autocomplete-Cxc2Q3A7.js";import"./index-BZXJRt-S.js";import"./index-jO9EpA7l.js";import"./index-CrcoPoGw.js";import"./index-BziNu4GU.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-loQPFd-T.js";import"./memoTheme-BQvuiRMw.js";import"./styled-Bs6aTLdD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C9VG5BR5.js";import"./Tooltip-BpELumoD.js";import"./useTheme-C6J0_U3R.js";import"./useSlot-Cc0TH-P4.js";import"./mergeSlotProps-dd0y0IZz.js";import"./useForkRef-Cm1smsVr.js";import"./useTimeout-DYSzpSzE.js";import"./useControlled-_CojnKOO.js";import"./useEventCallback-DYc4zMoP.js";import"./getReactElementRef-dZ7e7R7I.js";import"./Portal-6A9k5eoS.js";import"./utils-DG8dL2Al.js";import"./TransitionGroupContext-CFoyGAe4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BPRZd4R9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D8Ip9ZNp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-WbBW4SNX.js";import"./CircularProgress-DAp6FT1u.js";import"./Button-Di2tppwh.js";import"./index-CRzHfBAS.js";import"./Box-CxjVphfW.js";import"./Grid-88wyRLeR.js";import"./isMuiElement-BTwBnJKE.js";import"./styled-tzudnm-b.js";import"./Stack-CWk2zcdQ.js";import"./Container-BIn0b_Bo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CVzJErPY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BfqaQjSl.js";import"./Select-CsYK4MgS.js";import"./SelectFocusSourceContext-Be8PVA64.js";import"./Popover-Clpup2NH.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Bioj6IL2.js";import"./debounce-Be36O1Ab.js";import"./Modal-DeIW4txF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Behw_zi2.js";import"./Fade-BDQ0ytsL.js";import"./Paper-DDJAWKgV.js";import"./List-DDn9UT2Z.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BZFSDOFb.js";import"./OutlinedInput-CYFmS-1F.js";import"./FormHelperText-D5drgxgl.js";import"./FormControlLabel-DH8yz918.js";import"./Typography-B0pIYi8P.js";import"./Switch-DU0RNYmU.js";import"./SwitchBase-fM7ST65L.js";import"./Radio-H9CP-1cm.js";import"./RadioGroup-By2pNnEt.js";import"./FormGroup-BhsOAUu0.js";import"./Divider-CTNIEa-8.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CXMOO4W4.js";import"./FormControl-CBg4yJvo.js";import"./Autocomplete-CdxtxFBv.js";import"./Close-DTbS5nYR.js";import"./usePreviousProps-C8Xq4V4r.js";import"./Chip-C4A6HoYO.js";import"./ListSubheader-Bg7eguyb.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
