import{j as p}from"./iframe-CEMXsp8C.js";import{i as n}from"./index-tKRfahf_.js";import{A as m}from"./AsyncAutocomplete-XWLAkquB.js";import{Q as a}from"./suspense-Zp53cwBn.js";import{Q as s}from"./queryClient-DVK3X9OW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mtCs71Oj.js";import"./___vite-browser-external_commonjs-proxy-Cuc_yKOi.js";import"./index-CAtWx5sm.js";import"./_toKey-BkjVo4KL.js";import"./Autocomplete-DM9obmwM.js";import"./index-DgNpCoBK.js";import"./index-6HvsEIgM.js";import"./index-BiBDMnSv.js";import"./index-D94lOHFj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-nYHR5krO.js";import"./memoTheme-l-GP-bwx.js";import"./styled-qsRty7dq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CwlIgXTJ.js";import"./Tooltip-DE_9rsm0.js";import"./useTheme-DmimCZ1K.js";import"./useSlot-CsbKhATt.js";import"./mergeSlotProps-CZJ2E7Ux.js";import"./useForkRef-DoG2Adio.js";import"./useTimeout-Dr5vw9MW.js";import"./useControlled-BuTFob83.js";import"./useEventCallback-DFupxdy5.js";import"./getReactElementRef-7aOdyAnj.js";import"./Portal-Cd1GL2Ny.js";import"./utils-uO-Y6Lu-.js";import"./TransitionGroupContext-CFI9AaDj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Uj4Ej5E1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CI45TlqX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DV3wZvw5.js";import"./CircularProgress-C6UU3hYL.js";import"./Button-BggChkC7.js";import"./index-DIoqnUOe.js";import"./Box-BEsP6iEE.js";import"./Grid-DNEcM-zX.js";import"./isMuiElement-D0FqNR9x.js";import"./styled-Dz3b5a5M.js";import"./Stack-Ct51BpAL.js";import"./Container-DBKsfXDc.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-B5UQsNVX.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-rkOnYHMv.js";import"./Select-CW96VAM3.js";import"./Menu-of2ejCIv.js";import"./Popover-uAtnNwBt.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-DUVsb-pA.js";import"./debounce-Be36O1Ab.js";import"./Modal-C_PIWu30.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-De3axDf6.js";import"./Fade-DiSnUXPW.js";import"./Paper-CpiR7IfR.js";import"./List-C7cGWOto.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-f84r-UoO.js";import"./OutlinedInput-DkQzF-Yr.js";import"./FormHelperText-DqMuL7fY.js";import"./FormControlLabel-CKApGRUl.js";import"./Typography-aAxGDRe7.js";import"./Switch-CgP-2Cp1.js";import"./SwitchBase-qMOE7SWj.js";import"./Radio-IVXlydwe.js";import"./RadioGroup-dD3cetTc.js";import"./FormGroup-LMrVoSKP.js";import"./Divider-DTiwsONw.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-nrrPXK9e.js";import"./FormControl-CUQ3qwGV.js";import"./Autocomplete-Bq4SIFVD.js";import"./Close-Dcuk3jY8.js";import"./usePreviousProps-DlTFrG1g.js";import"./Chip-DYbvbfFy.js";import"./ListSubheader-DWnFAuvx.js";import"./useInfiniteQuery-Bj4ovjZI.js";import"./useBaseQuery-B9xJivCE.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
