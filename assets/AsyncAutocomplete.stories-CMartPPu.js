import{j as p}from"./iframe-VmT73p94.js";import{i as n}from"./index-CbkDeIW7.js";import{A as m}from"./AsyncAutocomplete-eU37YrPN.js";import{Q as a}from"./suspense-b00f3bJk.js";import{Q as s}from"./queryClient-ok5bL2TB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL3HEuLS.js";import"./___vite-browser-external_commonjs-proxy-DqSJPQhn.js";import"./index-CrIvZYvG.js";import"./_toKey-B8wbD7jq.js";import"./Autocomplete-DCuPM1lj.js";import"./index-DaeCLrVb.js";import"./index-BoqWl9Cu.js";import"./index-BiBDMnSv.js";import"./index-Cb5v9xcC.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-OqnDZfg-.js";import"./memoTheme-CW0LOUve.js";import"./styled-DVm59HJf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-HUpkhuIg.js";import"./Tooltip-BRQG12-b.js";import"./useTheme-COUM0_Su.js";import"./useSlot-BmxE9uZS.js";import"./mergeSlotProps-B8SRg1CI.js";import"./useForkRef-Ctnrtb-D.js";import"./useTimeout-BprXv5F8.js";import"./useControlled-BjbV18t2.js";import"./useEventCallback-C3cbUdrm.js";import"./getReactElementRef-ft3Uw4WU.js";import"./Portal-BwXxrIv3.js";import"./utils-ByQY0EBI.js";import"./TransitionGroupContext-CeVXvV0a.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DY7-TJQW.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Br45PAbc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BXyceE0h.js";import"./CircularProgress-CrZ4k3FD.js";import"./Button-zpUHMDEI.js";import"./index-CUHhPe5b.js";import"./Box-CvMegSiU.js";import"./Grid-Bmv36tXm.js";import"./styled-D1-ZAWkh.js";import"./isMuiElement-Bqpdq4Yq.js";import"./Stack-DZgcNSaF.js";import"./Container-BVb-1dj-.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Bl-cZ89x.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-SPs3ZDhM.js";import"./Select-CuIE7pA_.js";import"./Menu-DXTlxeJ2.js";import"./Popover-Dk4scS2q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-5qBSIGBn.js";import"./Modal-DFppbk7B.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CtDRaPiM.js";import"./Fade-NocNkBOI.js";import"./Paper-DQLSkWvh.js";import"./List-frVJ5qAx.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CHar5Fph.js";import"./OutlinedInput-DmwOWPcc.js";import"./FormHelperText-B6vrgGZp.js";import"./FormControlLabel-C8hCHqaE.js";import"./Typography-B3jjC7CW.js";import"./Switch-Du7_HRPg.js";import"./SwitchBase-ByAZ1y9s.js";import"./RadioGroup-BMQSDDse.js";import"./Radio-D0s2w_TC.js";import"./FormGroup-BpYFK3ZO.js";import"./Divider-CJvG-lQD.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-Xu4zjFAE.js";import"./FormControl-CtGChhDH.js";import"./Autocomplete-Cw2uGILQ.js";import"./Close-Dm2w8ffc.js";import"./usePreviousProps-DZFAMSQb.js";import"./Chip-S9_WDCf4.js";import"./ListSubheader-D_oTNqy1.js";import"./useInfiniteQuery-B7S3LCeI.js";import"./useBaseQuery-gywk-D5T.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
