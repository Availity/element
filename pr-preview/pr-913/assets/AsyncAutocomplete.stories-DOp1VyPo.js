import{j as p}from"./iframe-CoG_eD6W.js";import{i as n}from"./index-NWAjQ8GF.js";import{A as m}from"./AsyncAutocomplete-DZqu3RMq.js";import{Q as a}from"./suspense-D0uJ2-qL.js";import{Q as s}from"./queryClient-EXAxgZsw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxX5aEWm.js";import"./___vite-browser-external_commonjs-proxy-CJzqnXTj.js";import"./index-C1BCLP02.js";import"./_toKey-DHzXaBvN.js";import"./Autocomplete-Bp_5pLGc.js";import"./index-Bvjy6M59.js";import"./index-BE8Ll7Ot.js";import"./index-BiBDMnSv.js";import"./index-BiwFPdxj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CCNV5-S3.js";import"./memoTheme-CN1XLapj.js";import"./styled-CrcATWO9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BY7cwWhX.js";import"./Tooltip-oLaJghdR.js";import"./useTheme-DYBUFgS8.js";import"./useSlot-l_cpBHym.js";import"./mergeSlotProps-CuYtKo7e.js";import"./useForkRef-9zYUNwSQ.js";import"./useTimeout-q1GWP7GL.js";import"./useControlled-BVDl1GQq.js";import"./useEventCallback-zH8r8cS3.js";import"./getReactElementRef-n9HqNesf.js";import"./Portal-7VZcAwyN.js";import"./utils-D_Ss1Qw4.js";import"./TransitionGroupContext-DiP32wUd.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CIYBUvT1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsWpehFA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-xOGqtgga.js";import"./CircularProgress-tDS4AUw-.js";import"./Button-DJVoIG0F.js";import"./index-BDyGITPx.js";import"./Box-B04c7Rsy.js";import"./Grid-BeBOjXU7.js";import"./isMuiElement-BhB00eMX.js";import"./styled-BeasdvCJ.js";import"./Stack-BofL0Z-3.js";import"./Container-COr2r_OP.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTAhp3K4.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-I9ZHfBzW.js";import"./Select-BYaj2ZYw.js";import"./Menu-BbxzJjKs.js";import"./Popover-DzuLIXX2.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-o__YjBAq.js";import"./debounce-Be36O1Ab.js";import"./Modal-BuuBhc14.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CNiEEGxX.js";import"./Fade-54RPVvaS.js";import"./Paper-C7UtGvQD.js";import"./List-C5woYmQ0.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BZPSTfMo.js";import"./OutlinedInput-CQM4Urfm.js";import"./FormHelperText-D9B_EybF.js";import"./FormControlLabel-Dj3okdwu.js";import"./Typography-ByO5UaW_.js";import"./Switch-uWW0_4XR.js";import"./SwitchBase-C-K9jIoH.js";import"./Radio-BZ06ecad.js";import"./RadioGroup-DJI1jOFA.js";import"./FormGroup-h8CX_LB4.js";import"./Divider-buyCaqQp.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Cd5sx48p.js";import"./FormControl-VqjmRM_o.js";import"./Autocomplete-TMgEHsGZ.js";import"./Close-DHtkNkYL.js";import"./usePreviousProps-BrGAbJDo.js";import"./Chip-CDETbY6h.js";import"./ListSubheader-BGY-IAl7.js";import"./useInfiniteQuery-DPMPHcr0.js";import"./useBaseQuery-BZ_aI3ME.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
