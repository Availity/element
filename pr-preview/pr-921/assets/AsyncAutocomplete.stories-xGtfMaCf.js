import{j as p}from"./iframe-DVscMr-A.js";import{i as n}from"./index-BVtPpz6B.js";import{Q as a}from"./suspense-B9Mqc8FV.js";import{A as e}from"./AsyncAutocomplete-DQb2L8Yw.js";import{Q as s}from"./queryClient-qkypoJP4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZaasKGpT.js";import"./___vite-browser-external_commonjs-proxy-SNwcl5N-.js";import"./index-BZWhYBqj.js";import"./useInfiniteQuery-BYLSo97K.js";import"./useBaseQuery-Ly4ZeRgi.js";import"./Autocomplete-DYry_BfW.js";import"./index-BbRTm-rr.js";import"./index-Dslozi2v.js";import"./index-CrcoPoGw.js";import"./index-BnViiisy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-W7CV7YPZ.js";import"./memoTheme-BWlAx59E.js";import"./styled-DQ7SGoXr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BeF-k_6p.js";import"./Tooltip-fH0F2vbV.js";import"./useTheme-YOFO5C4H.js";import"./useSlot-CcjURTXg.js";import"./mergeSlotProps-2ZD1Wa3p.js";import"./useForkRef-D_2VvoZd.js";import"./useTimeout-zxUPRTwq.js";import"./useControlled-DNBFEVpl.js";import"./useEventCallback-yUNJdQIx.js";import"./getReactElementRef-BdBU57AF.js";import"./Portal-DpqzBqCy.js";import"./utils-3Br-A01V.js";import"./TransitionGroupContext-BG8XIQuv.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-pr2a7puG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dq1PDEwT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Rik4d0uu.js";import"./CircularProgress-DG2q71MX.js";import"./Button-C5YW8aoX.js";import"./index-MzdqpUr1.js";import"./Box-fBwpr0Q7.js";import"./Grid-QdwtLyJp.js";import"./isMuiElement-J0UlRgLR.js";import"./styled-BgmeM797.js";import"./Stack-D0PqJVFB.js";import"./Container-BdxHCcxG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdI1jtcT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DkCKu5ph.js";import"./Select-DvdmAFVR.js";import"./SelectFocusSourceContext-BTpAiLqB.js";import"./Popover-Cvu36zQJ.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Bx8d2XL6.js";import"./debounce-Be36O1Ab.js";import"./Modal-CHyTrEbM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-VQSY8Csy.js";import"./Fade-BDZpyD8d.js";import"./Paper-CQbuUb0F.js";import"./List-ct4XBHDF.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-ZxKINfNn.js";import"./OutlinedInput-CY0TCNx8.js";import"./FormHelperText-DTQfoS1X.js";import"./FormControlLabel-xHJRVqLE.js";import"./Typography-CU66rNGi.js";import"./Switch-D2p0E2hS.js";import"./SwitchBase-hRTrvGbO.js";import"./Radio-BkHQIpvX.js";import"./RadioGroup-Cfs5wAAA.js";import"./FormGroup-DpHjrUnv.js";import"./Divider-DIgW-ZID.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-x588U1Z0.js";import"./FormControl-wb4CWP8v.js";import"./Autocomplete-I7Slci6D.js";import"./Close-C6zz0I54.js";import"./usePreviousProps-BDXE48jd.js";import"./Chip-DaoHAJjF.js";import"./ListSubheader-Df-HEmCS.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
