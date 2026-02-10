import{j as p}from"./iframe-BAylI5Je.js";import{i as n}from"./index-Xyu0Y7lY.js";import{A as m}from"./AsyncAutocomplete-xTX7qsSW.js";import{Q as a}from"./suspense-DM7INo7N.js";import{Q as s}from"./queryClient-C6jYQT6l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nS-hG1Vb.js";import"./___vite-browser-external_commonjs-proxy-D2k2oH43.js";import"./index-CcW9DsSz.js";import"./_toKey-Bm3XdhSY.js";import"./Autocomplete-CakhHM0M.js";import"./index-D5vP-7Td.js";import"./index-CcRABOkE.js";import"./index-BiBDMnSv.js";import"./index-BYPMkNsh.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B08jEN2V.js";import"./memoTheme-BuFiJMU4.js";import"./styled-qchFS-7q.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cwm8YEbi.js";import"./Tooltip-xJM8APnn.js";import"./useTheme-Ct91rq7x.js";import"./useSlot-tp0V2ckF.js";import"./mergeSlotProps-CpHFUTeD.js";import"./useForkRef-BbXecB9y.js";import"./useTimeout-Dtra5kqE.js";import"./useControlled-DdXnTKyH.js";import"./useEventCallback-kqwlHtUL.js";import"./getReactElementRef-DYgwaRsW.js";import"./Portal-CtkHDIPH.js";import"./utils-jWIr1tvh.js";import"./TransitionGroupContext-4YAWsFUH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CjIBT4F9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyCxfOpo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CKOllhzB.js";import"./CircularProgress-Da-Xnf7p.js";import"./Button-6oOIUTaT.js";import"./index-ByCxKZZY.js";import"./Box-DpddYXXn.js";import"./Grid-BbaS7RWy.js";import"./styled-u23OebPe.js";import"./isMuiElement-Bp8yuFL1.js";import"./Stack-C7cYFq8h.js";import"./Container-a0Zu5jK3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Cph4_T4L.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D3XHth8F.js";import"./Select-DYhNbNq7.js";import"./Menu-DYBZESlQ.js";import"./Popover-CACtmdrF.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CGOGNWJ4.js";import"./Modal-CGjmMJhZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Be3vx7rL.js";import"./Fade-CXDV8Ndz.js";import"./Paper-gzQqajNa.js";import"./List-DqOUiTru.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-srbipTqh.js";import"./OutlinedInput-y_HDBIb1.js";import"./FormHelperText-CrBR3XVW.js";import"./FormControlLabel-BGdc4dIY.js";import"./Typography-DNXJRb7Q.js";import"./Switch-BAMXHdQl.js";import"./SwitchBase-tkLAg85y.js";import"./RadioGroup-aoY6ysvU.js";import"./Radio-BlyB3buX.js";import"./FormGroup-BD94_Pet.js";import"./Divider-Bhd0GQ1C.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-D2Zli5bk.js";import"./FormControl-BbAZPcoD.js";import"./Autocomplete-2Vv7sh0I.js";import"./Close-5QC12IK7.js";import"./usePreviousProps-t-eX3sxo.js";import"./Chip-DEoVCMH0.js";import"./ListSubheader-DR_-ix-o.js";import"./useInfiniteQuery-Cjnxec0i.js";import"./useBaseQuery-Bx1jzrbi.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Yt=["_Async"];export{i as _Async,Yt as __namedExportsOrder,Xt as default};
