import{j as p}from"./iframe-B3XSEB2p.js";import{i as n}from"./index-DaHy4RTs.js";import{A as m}from"./AsyncAutocomplete-DUcklhSv.js";import{Q as a}from"./suspense-B_pfBgwF.js";import{Q as s}from"./queryClient-CCbTK8wq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LLOc9r_p.js";import"./___vite-browser-external_commonjs-proxy-D_QPNMAp.js";import"./index-C_mhbxUc.js";import"./_toKey-oOlzM8_d.js";import"./Autocomplete-hE54vAqK.js";import"./index-B6wtrm71.js";import"./index-DF0ei3mA.js";import"./index-BiBDMnSv.js";import"./index-CAS_Ehni.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BW4di25g.js";import"./memoTheme-zFBVIAxJ.js";import"./styled-BKJUYYzH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BDo5zO46.js";import"./Tooltip-CpMdDorm.js";import"./useTheme-Gs2b_SoM.js";import"./useSlot-fXCwMtx-.js";import"./mergeSlotProps-BUA7aXyy.js";import"./useForkRef-BFyiqj42.js";import"./useTimeout-DjubHrAv.js";import"./useControlled-BnIqSLBp.js";import"./useEventCallback-Dfz_oY_W.js";import"./getReactElementRef-m4HA6qqR.js";import"./Portal-DeOXpMrf.js";import"./utils-CMJMNufc.js";import"./TransitionGroupContext-bUHI8Opa.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BnXi_Ts5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ML2PMq2-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CV7JyDx9.js";import"./CircularProgress-C6blXItT.js";import"./Button-Cx7ia3Qx.js";import"./index-CTZEFlon.js";import"./Box-CT-z8ogS.js";import"./Grid-DWbHQ1o7.js";import"./isMuiElement-ZiQktaUF.js";import"./styled-lVb8KQEy.js";import"./Stack-Bkt6nYoM.js";import"./Container-Dg4ygdO4.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CxLEzcw-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-rtm0CpB1.js";import"./Select-BjYusGuK.js";import"./Menu-Dd8TIx7v.js";import"./Popover-DxzJjHiF.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-DbeHDdbS.js";import"./debounce-Be36O1Ab.js";import"./Modal-3VYdLW2j.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DfrvDDlR.js";import"./Fade-BhRChvyZ.js";import"./Paper-CGKnoNLB.js";import"./List-DQXlBrYZ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DXiAxkxb.js";import"./OutlinedInput-DspMNzyC.js";import"./FormHelperText-B6YW8aeN.js";import"./FormControlLabel-DCV2mEAb.js";import"./Typography-BStgzFan.js";import"./Switch-C8UoIn7g.js";import"./SwitchBase-zf7Fsryl.js";import"./Radio-BX0zjP_U.js";import"./RadioGroup-PiA-pQ_J.js";import"./FormGroup-BicZh9bY.js";import"./Divider-CYS1Q5pq.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Cb0YKekm.js";import"./FormControl-BWJTqszo.js";import"./Autocomplete-D2RnWrdN.js";import"./Close-C9YG2uHw.js";import"./usePreviousProps-DT6HsHo9.js";import"./Chip-Dgm4ZKzK.js";import"./ListSubheader-BkBTGtzM.js";import"./useInfiniteQuery-BXSxI6Tl.js";import"./useBaseQuery-DNnM5_HO.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
