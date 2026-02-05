import{j as p}from"./iframe-BRLvBxWA.js";import{i as n}from"./index-w7AR0bee.js";import{A as m}from"./AsyncAutocomplete-CjyiLQGA.js";import{Q as a}from"./suspense-CS4iARp7.js";import{Q as s}from"./queryClient-FEU5_vHL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CmbtDME2.js";import"./___vite-browser-external_commonjs-proxy-Bt1cZCQw.js";import"./index-D1GAEzwN.js";import"./_toKey-BtcDnGvm.js";import"./Autocomplete-C3PjDYc0.js";import"./index-sZpOA1CI.js";import"./index-CFpgbKkO.js";import"./index-BiBDMnSv.js";import"./index-XiudsVJB.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Ddzah0KZ.js";import"./memoTheme-KNjPhf5l.js";import"./styled-CZ9R0hiM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-WLJ37MO7.js";import"./Tooltip-7V2d6kcs.js";import"./useTheme-DUDwCCgT.js";import"./useSlot-BL0V4ya8.js";import"./mergeSlotProps-DJQ_9vH6.js";import"./useForkRef-Btt9MVeC.js";import"./useTimeout-D2Y7qDK0.js";import"./useControlled-APkh1ier.js";import"./useEventCallback-8VD7KoTy.js";import"./getReactElementRef-Cit-YTyg.js";import"./Portal-B3jPIhjh.js";import"./utils-v3JDOV4B.js";import"./TransitionGroupContext-DVVrop_G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BzYpEyJr.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyDu_M09.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-aoiMu9Tz.js";import"./CircularProgress-gYkLYLdu.js";import"./Button-Dh1nUKo-.js";import"./index-DaMlQ0yP.js";import"./Box-zm6tG-Ly.js";import"./Grid-CtDV3yUj.js";import"./styled-tPTq9LI3.js";import"./isMuiElement-mA_3UNgb.js";import"./Stack-ng3wJJZp.js";import"./Container-BIDAJaGd.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CCgxdWp7.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C3g7vEaW.js";import"./Select-Ipzf7kND.js";import"./Menu-BsR3IEcx.js";import"./Popover-BZZTn0gU.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Be5-6mnc.js";import"./Modal-CquUqJ-o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-aNpcT55H.js";import"./Fade-B-kZ2aWY.js";import"./Paper-B9vhvsVc.js";import"./List-Bsssf5sN.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bf5nQhSb.js";import"./OutlinedInput-DvUGPFLm.js";import"./FormHelperText-DqicFGG5.js";import"./FormControlLabel-CQw-dPQn.js";import"./Typography-CYuHQB7d.js";import"./Switch-Mud3csUL.js";import"./SwitchBase-CAohy3fZ.js";import"./RadioGroup-C75CZzPW.js";import"./Radio-D4OXQB13.js";import"./FormGroup-qwfmGCav.js";import"./Divider-DCI4ccpv.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-ITnvPmH5.js";import"./FormControl-CEdtR734.js";import"./Autocomplete-DkC_0Svk.js";import"./Close-BA2wnNpb.js";import"./usePreviousProps-Cn_KOsyL.js";import"./Chip-DAsUgHbr.js";import"./ListSubheader-BsuT_3JV.js";import"./useInfiniteQuery-BeI4SAHv.js";import"./useBaseQuery-Bl4CXGOk.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
