import{j as p}from"./iframe-Cv4YEYCT.js";import{i as l}from"./index-Cp61hPs1.js";import{A as a}from"./AsyncAutocomplete-BdjacqQj.js";import{Q as c}from"./suspense-DbMB9jKo.js";import{Q as u}from"./queryClient-DxU7aLZ_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BrHZs0_A.js";import"./___vite-browser-external_commonjs-proxy-D8UIT_1F.js";import"./index-uYP5-W9N.js";import"./_toKey-Dft4WnKN.js";import"./Autocomplete-DuevtKTc.js";import"./index-inuYiTDe.js";import"./index-DnPt5deZ.js";import"./index-DS1ZdVNz.js";import"./index-CNJpAeel.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-RzgLEiZ2.js";import"./memoTheme-pu_-LVrP.js";import"./styled-BjYrgzj8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C6B9H3-6.js";import"./Tooltip-DdwYWGQa.js";import"./useTheme-yn0WqvlF.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cy9-wLDX.js";import"./useTimeout-S5FMYS9P.js";import"./useControlled-DotOmqWu.js";import"./useEventCallback-Dezg1Jp2.js";import"./getReactElementRef-Cucsv-xJ.js";import"./Portal-HdFRzq7f.js";import"./utils-CC-nVGrC.js";import"./TransitionGroupContext-ReV1kAll.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DpLQsBTB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-y4oP_Qzi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Te2dWPfF.js";import"./CircularProgress-4dbP_wqt.js";import"./Button-CxHqlBlz.js";import"./index-bB8uZqWv.js";import"./Box-GX48hKKC.js";import"./Grid-CuYwHY7F.js";import"./styled-Cz-jNn-e.js";import"./isMuiElement-C4Xkg-Fl.js";import"./Stack-BZ8fB6iW.js";import"./Container-Ceu7L51X.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BwjfLjpu.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CIuk8i81.js";import"./OutlinedInput-C6lArYvq.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-DdtRsles.js";import"./Menu-Dp7wAg9-.js";import"./Popover-BbkQ84jj.js";import"./mergeSlotProps-pd1YXqCy.js";import"./Modal-C2-2MRhp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CJgjCZ3h.js";import"./Fade-72ut2BWr.js";import"./Paper-BGV9jSeN.js";import"./List-5gkoo-vG.js";import"./createSvgIcon-anG-4vyn.js";import"./FormHelperText-f-ithwPR.js";import"./FormControlLabel-Bn-8_Wfs.js";import"./Typography-BHaCpI2A.js";import"./Switch-CUTgowE6.js";import"./SwitchBase-CKHrTpOb.js";import"./RadioGroup-BkrhAZ5l.js";import"./Radio-DCQT_nxE.js";import"./FormGroup-CZi0Ex0q.js";import"./Divider-0N8BvuQ6.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DXQ21rqp.js";import"./FormControl-FbDQyrmL.js";import"./Autocomplete-DRP_kz4l.js";import"./Close-CHeCf1pf.js";import"./usePreviousProps-DcfuBEM1.js";import"./Chip-BnZF5Ar2.js";import"./ListSubheader-CQhLLmRk.js";import"./useInfiniteQuery-BNCrE6sY.js";import"./useBaseQuery-vjvUJRXI.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-CGjFXCyB.js";import"./index-L5zdR5bf.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=i.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const ro=["_Async"];export{i as _Async,ro as __namedExportsOrder,oo as default};
