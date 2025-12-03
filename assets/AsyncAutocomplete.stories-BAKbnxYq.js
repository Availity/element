import{j as p}from"./iframe-BiHmAaXu.js";import{i as l}from"./index-BrKNijPj.js";import{A as a}from"./AsyncAutocomplete-BumQnmxU.js";import{Q as c}from"./suspense-DX64legv.js";import{Q as u}from"./queryClient-Bua6-sLm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BQtRu7J0.js";import"./___vite-browser-external_commonjs-proxy-BBUbcpu0.js";import"./index-DuRQpI0H.js";import"./_toKey-CCrs_ik9.js";import"./Autocomplete-YhptYVDX.js";import"./index-Bf9UgRYq.js";import"./index-ByUyCzHb.js";import"./index-DJKl12U0.js";import"./index-BvV5FGi6.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CbropkBN.js";import"./memoTheme-zGeQXNTV.js";import"./styled-Dtda04LL.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Bh-1iHl-.js";import"./Tooltip-D9RCop2K.js";import"./useTheme-D51yRe8t.js";import"./useSlot-BwnKjiCD.js";import"./mergeSlotProps-vY4QflWx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-egRdNH_q.js";import"./useTimeout-BxBXWuFq.js";import"./useControlled-QJx0Pv3z.js";import"./useEventCallback-A-8aNATG.js";import"./getReactElementRef-DBbsA3vx.js";import"./Portal-3VCYEpJr.js";import"./utils-Derh_BFQ.js";import"./TransitionGroupContext-B15fWyGj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BP935MD-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3B7XTqu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DdAFxN83.js";import"./CircularProgress-BsuuE2cE.js";import"./Button-CeglKkVM.js";import"./index-Cgd0JpyD.js";import"./Box-CiWIFjse.js";import"./Grid-CEmIxvlK.js";import"./styled-Zig1TB_m.js";import"./isMuiElement-DKHzA-If.js";import"./Stack-Dj-nUodw.js";import"./Container-BlXDxTKA.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-xE0j2NN6.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DA3IDcHJ.js";import"./OutlinedInput-BWJb0RpZ.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-BDE1CX3n.js";import"./Menu-DYeOy5Na.js";import"./Popover-D5fdFEs-.js";import"./mergeSlotProps-BH9FGeIP.js";import"./Modal-zlXF-WhO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-i5bVk1OO.js";import"./Fade-Ck39exYl.js";import"./Paper-9ZvZWPZJ.js";import"./List-DXRLKjrx.js";import"./createSvgIcon-IF8Bi_Qp.js";import"./FormHelperText-BzT4cDWj.js";import"./FormControlLabel-PFGWuE2R.js";import"./Typography-De5LbgvD.js";import"./Switch-C-wqo3KQ.js";import"./SwitchBase-DdUPb-fL.js";import"./RadioGroup-dLknwHzj.js";import"./Radio-CQ8fVyUu.js";import"./FormGroup-D0sXqKiB.js";import"./Divider-BeTsCdiD.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DZxf17fr.js";import"./FormControl-DZnKpJWi.js";import"./Autocomplete-DfQ9ZxKf.js";import"./Close-DDN0dZH2.js";import"./usePreviousProps-aKSc2xB9.js";import"./Chip-CFFLVdm8.js";import"./ListSubheader-CbegGole.js";import"./useInfiniteQuery-DdYLJH3C.js";import"./useBaseQuery-BsHP33sm.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const $t={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=i.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const to=["_Async"];export{i as _Async,to as __namedExportsOrder,$t as default};
