import{j as p}from"./iframe-CNKi_Ec9.js";import{i as n}from"./index-DNXNY5D2.js";import{A as m}from"./AsyncAutocomplete-BzUKMOsB.js";import{Q as a}from"./suspense-BHdj88FS.js";import{Q as s}from"./queryClient-DzXsCGda.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWFTOh8w.js";import"./___vite-browser-external_commonjs-proxy-DUgwFB0-.js";import"./index-BYBZ-AT1.js";import"./_toKey-BB_T5pb7.js";import"./Autocomplete-BYHZL0D2.js";import"./index-DZ4TRnQ0.js";import"./index-CQjy1HYz.js";import"./index-BiBDMnSv.js";import"./index-B_WSnka_.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DRZMbgGT.js";import"./memoTheme-DeusU9l_.js";import"./styled-CGPS0K8z.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B621nc9Z.js";import"./Tooltip-CJ_GLTq5.js";import"./useTheme-BKQS-hPu.js";import"./useSlot-6u895GGS.js";import"./mergeSlotProps-NHo9zqIM.js";import"./useForkRef-BcCxGyq_.js";import"./useTimeout-qmb5R95B.js";import"./useControlled-w5dFxqhC.js";import"./useEventCallback-Cws-zXFa.js";import"./getReactElementRef-8X4grM9z.js";import"./Portal-C3A-VfFU.js";import"./utils-SSfZp7cC.js";import"./TransitionGroupContext-BESWVVvg.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BIvI5Lxh.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CeXbiSrq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CiH38IXk.js";import"./CircularProgress-BrUNS0I2.js";import"./Button-CTbvABeh.js";import"./index-BM_So9FB.js";import"./Box-DEr-V8__.js";import"./Grid-DePYc70X.js";import"./isMuiElement-B5CkoKss.js";import"./styled-CVVnUVY6.js";import"./Stack-CcjdTXZq.js";import"./Container-DdiDjvnS.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CpWhdyIU.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DxT84DOF.js";import"./Select-Bzhx4OcW.js";import"./Menu-BFHZ6L8B.js";import"./Popover-DyVfRwhv.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BwVcmSim.js";import"./debounce-Be36O1Ab.js";import"./Modal-CT8tTE_f.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJANX_Gq.js";import"./Fade-B4qzam9p.js";import"./Paper-B0v8-sA3.js";import"./List-D58GBsbd.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DLBoSPlD.js";import"./OutlinedInput-DZuvzaas.js";import"./FormHelperText-BvYn2Wec.js";import"./FormControlLabel-CCq1oojw.js";import"./Typography-DIfLarQN.js";import"./Switch-CCv0qv0x.js";import"./SwitchBase-CGY2Ihdn.js";import"./Radio-XdbEbU1g.js";import"./RadioGroup-QR865JiM.js";import"./FormGroup-DeFM7qwO.js";import"./Divider-CeqzL_MC.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DqCZUMPe.js";import"./FormControl-Bs8BKLyH.js";import"./Autocomplete-CB-4S66e.js";import"./Close-Dm6cDoM0.js";import"./usePreviousProps-CoKQh4YU.js";import"./Chip-DVvGc7cj.js";import"./ListSubheader-DC0TrY1P.js";import"./useInfiniteQuery-DUFIDECd.js";import"./useBaseQuery-C0dz7yvk.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
