import{j as p}from"./iframe-BOqhEPj6.js";import{i as l}from"./index-BnQMcvUu.js";import{A as a}from"./AsyncAutocomplete-DYcaYoYI.js";import{Q as c}from"./suspense-D7CuN_g-.js";import{Q as u}from"./queryClient-C1k93onC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CGqRv4RY.js";import"./___vite-browser-external_commonjs-proxy-BIEiDzEk.js";import"./index-vabkworu.js";import"./_toKey-DhmaiSd7.js";import"./Autocomplete-BVn_NXYu.js";import"./index-BGtykKQB.js";import"./index-Blj6OPPS.js";import"./index-DS1ZdVNz.js";import"./index-DX6yAWWK.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BlVGnbba.js";import"./memoTheme-BYC15E_2.js";import"./styled-ClQgRsdc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CQw0a6ar.js";import"./Tooltip-DKIHpwU2.js";import"./useTheme-s5qe_7AX.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./useTimeout-CKtuW5yl.js";import"./useControlled-CmW8DIBb.js";import"./useEventCallback-BHkbNqwn.js";import"./getReactElementRef-DF_NnWMb.js";import"./Portal-Cx3wFGpK.js";import"./utils-CDaWu4n1.js";import"./TransitionGroupContext-TO625Yxj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DnEE7xuk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BP3VjvuD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C7cVXKAH.js";import"./CircularProgress-Xg5tMO8-.js";import"./Button-BDF2rRxm.js";import"./index-DMdqsLqb.js";import"./Box-CIHxGpEh.js";import"./Grid-BJc_wFud.js";import"./styled-BY2Q14_8.js";import"./isMuiElement-FBus6K6C.js";import"./Stack-DPaZpNJF.js";import"./Container-Ck_72FoA.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CceHt0Ap.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BmeSG9ns.js";import"./OutlinedInput-PlN7TJgo.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-B9cbP78R.js";import"./Menu-Bf3EcXbm.js";import"./Popover-C29c9q_D.js";import"./mergeSlotProps-DX0ZwzcB.js";import"./Modal-plhmqEr0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-hLK-Cyuw.js";import"./Fade-Dvz2gflC.js";import"./Paper-Bx06Uw5g.js";import"./List-B_DaY4Qf.js";import"./createSvgIcon-BzRll-a0.js";import"./FormHelperText-Bp2ajVCS.js";import"./FormControlLabel-BYe2eUOw.js";import"./Typography-DCSeVpBd.js";import"./Switch-BuD3o8qk.js";import"./SwitchBase-C1i5BvMK.js";import"./RadioGroup-Dw0DM2_a.js";import"./Radio-Co3Vqsmj.js";import"./FormGroup-BnSyuzUv.js";import"./Divider-DJj0BQqc.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DapU95H_.js";import"./FormControl-B-8LsILh.js";import"./Autocomplete-Dzoo0MWW.js";import"./Close-CCJbhEGR.js";import"./usePreviousProps-LaeQPJEA.js";import"./Chip-DFYjC6yz.js";import"./ListSubheader-DNYe_aML.js";import"./useInfiniteQuery-DbkYXPIL.js";import"./useBaseQuery-CV-hkf8s.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-CCxw3tf-.js";import"./index-DabjR5GN.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
