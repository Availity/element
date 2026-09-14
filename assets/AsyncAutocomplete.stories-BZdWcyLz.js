import{j as p}from"./iframe-D39zpO5D.js";import{i as n}from"./index-Iv_LGCnt.js";import{Q as a}from"./suspense-GpnBxC8j.js";import{A as e}from"./AsyncAutocomplete-BfZ1iyyr.js";import{Q as s}from"./queryClient-Cyj6I3XF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqziHakW.js";import"./___vite-browser-external_commonjs-proxy-BUL4XQWM.js";import"./index-CnpWGRvj.js";import"./useInfiniteQuery-BNYuGyiI.js";import"./useBaseQuery-BxKqauea.js";import"./Autocomplete-DutYUTcm.js";import"./index-F3Dfuzp1.js";import"./index-CRBGvwQd.js";import"./index-CrcoPoGw.js";import"./index-LJlq2DD9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DrCHR_XG.js";import"./memoTheme-DS1Qd1tD.js";import"./styled-DVn78CF9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CT8p7-xb.js";import"./IconButton-1y7-X1Ns.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C5qFdqG6.js";import"./useTimeout-DkqtJI-P.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useForkRef-DNCE6AYe.js";import"./useEventCallback-CTE8ZTt3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZf4mQi8.js";import"./Tooltip-T0tiLXY7.js";import"./useTheme-Q_YzHohC.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useControlled-Dc7tfWw6.js";import"./getReactElementRef-BiLy3DMf.js";import"./Portal-D0_VnBDB.js";import"./utils-BiqFTD-G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHrZTrOT.js";import"./Button-BxFiSb--.js";import"./index-BHfSa4RT.js";import"./Box-MvPvGRqH.js";import"./Grid-sUXan3gB.js";import"./isMuiElement-B_WcrTr3.js";import"./styled-D2W9iR9V.js";import"./Stack-DtFT-rmC.js";import"./Container-Bg9CFWCo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CbsmgfPu.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DAAm-Ep5.js";import"./Select-Cr_b3k2m.js";import"./SelectFocusSourceContext-CAoytt1x.js";import"./Popover-CLbI9j0Y.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-VT4Oa8rE.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bcdi7MY2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGS6hD_O.js";import"./Fade-C2SBq3LE.js";import"./Paper-B079EtYg.js";import"./List-C3S5OFLg.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CXilsj0Y.js";import"./OutlinedInput-DUfnrBns.js";import"./FormHelperText-SrmT5h7r.js";import"./FormControlLabel-DlhlN1bF.js";import"./Typography-lHvxoPWM.js";import"./Switch-DWJuNNrz.js";import"./SwitchBase-Dtvf4WNX.js";import"./Radio-D-0z7h1P.js";import"./RadioGroup-BF-ujAZJ.js";import"./FormGroup-DlBhWtzs.js";import"./Divider-m_CRUwIv.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BAYVG84c.js";import"./FormControl-yV9__Y8G.js";import"./Autocomplete-CO49QtBq.js";import"./Close-C3OBzGrc.js";import"./usePreviousProps-BQAwpzNk.js";import"./Chip-exRvSNid.js";import"./ListSubheader-Ce1MDT0o.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
