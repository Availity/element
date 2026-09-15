import{j as p}from"./iframe-CgyQHDht.js";import{i as n}from"./index-Cqj_0nzu.js";import{Q as a}from"./suspense-CFXcMaZV.js";import{A as e}from"./AsyncAutocomplete-DAzxabBT.js";import{Q as s}from"./queryClient-BHiL1od7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6LTLb7jJ.js";import"./___vite-browser-external_commonjs-proxy-QXeNOFjN.js";import"./index-DePoTdZz.js";import"./useInfiniteQuery-xbWnWc7N.js";import"./useBaseQuery-CsSmAa8A.js";import"./Autocomplete-CBl11VHc.js";import"./index-Dm4zs3BZ.js";import"./index-H6Uxih6N.js";import"./index-CrcoPoGw.js";import"./index-6_aePX59.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8liJDyc.js";import"./memoTheme-9z4HOxEW.js";import"./styled-CeAqJ-c9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-5azouwn6.js";import"./IconButton-M-Sr99uW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BeOu4eYa.js";import"./useTimeout-B7u63TVX.js";import"./TransitionGroupContext-CbCiCZin.js";import"./useForkRef-DvvK-eiI.js";import"./useEventCallback-v1-mseXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-OvvKtsaM.js";import"./Tooltip-0ZBCaLdQ.js";import"./useTheme-DBOW2iGc.js";import"./useSlot-BI63qm8Z.js";import"./mergeSlotProps-DEDO0PDp.js";import"./useControlled-DSiBAGka.js";import"./getReactElementRef-DSOw1wXb.js";import"./Portal-Cv3ZG74Z.js";import"./utils-i6pe6p9D.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D00sgM-L.js";import"./Button-D8e6tdaf.js";import"./index-BiQy1AHR.js";import"./Box-BxdWl5-L.js";import"./Grid-BNO3N1YM.js";import"./isMuiElement-BaNoNC5Q.js";import"./styled-Dvv_Oh9D.js";import"./Stack-oqPb14Ks.js";import"./Container-s8QyPm16.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BjV2ncBQ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Ca8XhVwX.js";import"./Select-wirFxTuI.js";import"./SelectFocusSourceContext-DstQPVWn.js";import"./Popover-BgvdSOaj.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-gK_7x5gw.js";import"./debounce-Be36O1Ab.js";import"./Modal-DZVQKIJf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CV_7DsVP.js";import"./Fade-DcwI299R.js";import"./Paper-C6T4apaD.js";import"./List-DixvLrk0.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CyM8AHy5.js";import"./OutlinedInput-B2h6fqQ3.js";import"./FormHelperText-D2TAK_49.js";import"./FormControlLabel-DhBBoI9-.js";import"./Typography-yiHubm7E.js";import"./Switch-CLE859Ym.js";import"./SwitchBase-D-PtVu31.js";import"./Radio-B6-Bdtmn.js";import"./RadioGroup-Dy6esOrh.js";import"./FormGroup-LqcUTR9x.js";import"./Divider-A7T5E6Fz.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CAaqDkho.js";import"./FormControl-yur8uxgd.js";import"./Autocomplete-Bk18P5eW.js";import"./Close-BfpfVcXW.js";import"./usePreviousProps-XGsSN8jC.js";import"./Chip-D8SkWJT0.js";import"./ListSubheader-2rdw1coO.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
