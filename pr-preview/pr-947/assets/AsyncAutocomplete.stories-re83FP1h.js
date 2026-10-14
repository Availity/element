import{j as p}from"./iframe-C7RYpRRO.js";import{i as n}from"./index-BiONWhux.js";import{Q as a}from"./suspense-B52kGHoD.js";import{A as e}from"./AsyncAutocomplete-C89bWTk-.js";import{Q as s}from"./queryClient-CeXiNIqq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BXxND2oO.js";import"./___vite-browser-external_commonjs-proxy-JNcaBvwg.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-9W5YHlEC.js";import"./useBaseQuery-DBUmGbF9.js";import"./Autocomplete-Bpifn5Cm.js";import"./index-CJ_Bm4o3.js";import"./index-miMFKzwY.js";import"./index-MVgG_W0q.js";import"./index-B0i75ydy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZsvZcJW.js";import"./memoTheme-DZ9vOlqG.js";import"./styled-Cqgr8yLU.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C-TAFGmA.js";import"./IconButton-DUEQnTYy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-YfnvzWnB.js";import"./useTimeout-IWs7fXER.js";import"./TransitionGroupContext-D50vcWaO.js";import"./useForkRef-mY6jA1_e.js";import"./useEventCallback-BmDadX9V.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DRusqeVx.js";import"./Tooltip-By5WBZwq.js";import"./useTheme-WpQOCtdc.js";import"./useSlot-lfX05XTl.js";import"./mergeSlotProps-BkPIbwBi.js";import"./useControlled-C5e-G2Uo.js";import"./getReactElementRef-CzYjVf0K.js";import"./Portal-B-Fuv61-.js";import"./utils-BrOTTAGC.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CyQLJvs1.js";import"./Button-DYbxeNEo.js";import"./index-C2dcAPuD.js";import"./Box-DobRJWDd.js";import"./Grid-52szHxD-.js";import"./isMuiElement-Do9YpkA9.js";import"./styled-Cn_UBHgZ.js";import"./Stack-D9VD4k0X.js";import"./Container-Bhb68_To.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CsJ_Ttuz.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BSDmqwdX.js";import"./Select-vyzsrS7k.js";import"./SelectFocusSourceContext-Des1O4JU.js";import"./Popover-Bq3gAnqf.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BKdWdZnu.js";import"./debounce-Be36O1Ab.js";import"./Modal-Vlv0KwQ6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DbHQkIp9.js";import"./Fade-BHmjLU7V.js";import"./Paper-DUYPN4Ep.js";import"./List-BcqSLVqi.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Dc4WGqJQ.js";import"./OutlinedInput-EMbPCbiK.js";import"./FormHelperText-HnS8eQWb.js";import"./FormControlLabel-CvDpl5RW.js";import"./Typography-heIaV1nZ.js";import"./Switch-BITMdJ8m.js";import"./SwitchBase-C3jOb5-J.js";import"./Radio-CO_Uo7ot.js";import"./RadioGroup-CBZao7AR.js";import"./FormGroup-lR-44Vgx.js";import"./Divider-DIUIqII7.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CzM-Hrgj.js";import"./FormControl-WAkVHsJd.js";import"./Autocomplete-DHMeur22.js";import"./Close-BiGB54sc.js";import"./usePreviousProps-CHegnKke.js";import"./Chip-Dpv8KIp9.js";import"./ListSubheader-CborC9ch.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
