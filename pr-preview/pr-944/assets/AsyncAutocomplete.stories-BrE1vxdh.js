import{j as p}from"./iframe-DPgvn2UU.js";import{i as n}from"./index-Coy1nEZO.js";import{Q as a}from"./suspense-Dz6yD9vf.js";import{A as e}from"./AsyncAutocomplete-CD6iajIv.js";import{Q as s}from"./queryClient-CDljF5LT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFHPeqeG.js";import"./___vite-browser-external_commonjs-proxy-DchKfydG.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-Bad_jGQh.js";import"./useBaseQuery-BKz4JOoQ.js";import"./Autocomplete-Dr_J4_iV.js";import"./index-CdjxUwFe.js";import"./index-DO8HKLfP.js";import"./index-MVgG_W0q.js";import"./index-DkMl2Zw_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bq0V0STh.js";import"./memoTheme-BYph2ZTv.js";import"./styled-Bnkr7D-c.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CeFSOpBV.js";import"./IconButton-B7NJWIp-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C05RGSI7.js";import"./useTimeout-b550rnFU.js";import"./TransitionGroupContext-CFlHgrGu.js";import"./useForkRef-B_9E6GXl.js";import"./useEventCallback-DBIic8Ex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C6YfH4n8.js";import"./Tooltip-YOgdBn5B.js";import"./useTheme-B7kQ5Jap.js";import"./useSlot-DpB6mlqQ.js";import"./mergeSlotProps-DRvPt2A_.js";import"./useControlled-BRfcL8pA.js";import"./getReactElementRef-vJH3QVIN.js";import"./Portal-DRuBdp-z.js";import"./utils-CA9pXuzB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BkILu-KG.js";import"./Button-BYYLdAXe.js";import"./index-DiNwh75D.js";import"./Box-BlDR6l9l.js";import"./Grid-DrKODsgE.js";import"./isMuiElement-CIfsBfEF.js";import"./styled-CiHxTfSE.js";import"./Stack-Br7WCR6b.js";import"./Container-CIN8FyKG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DYfqByqT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-cN7RU9gv.js";import"./Select-C71NVgIY.js";import"./SelectFocusSourceContext-TejMP2UB.js";import"./Popover-XaGZ9P8a.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-SFKmFrry.js";import"./debounce-Be36O1Ab.js";import"./Modal-DJSJonwV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DG1hflfc.js";import"./Fade-pXi3dxmW.js";import"./Paper-Bg7uCtkj.js";import"./List-BJ31Te5w.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CVdeguJ_.js";import"./OutlinedInput-BT6k7tdI.js";import"./FormHelperText-DCcVia06.js";import"./FormControlLabel-DpEDB8IM.js";import"./Typography-CPTozpuv.js";import"./Switch-CslP4g6_.js";import"./SwitchBase-TQhLjsOV.js";import"./Radio-DrWY9wGb.js";import"./RadioGroup-C6Vtjkty.js";import"./FormGroup-DdQAx87u.js";import"./Divider-DOUeryDl.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CDQDEHmI.js";import"./FormControl-B-CCEBd1.js";import"./Autocomplete-HD9U4jnL.js";import"./Close-Dn0HFxde.js";import"./usePreviousProps-ZDn9yDI3.js";import"./Chip-Bb6G6F-V.js";import"./ListSubheader-YQP_yUyf.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
