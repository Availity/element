import{j as p}from"./iframe-C99277Jn.js";import{i as n}from"./index-BjYhjIdM.js";import{A as m}from"./AsyncAutocomplete-CnydA7vE.js";import{Q as a}from"./suspense-CD0AGWUG.js";import{Q as s}from"./queryClient-CvIYCF5n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0-rmQLG.js";import"./___vite-browser-external_commonjs-proxy-B3BvfgAL.js";import"./index-CqGaOivi.js";import"./_toKey-Brw-ZAfO.js";import"./Autocomplete-NE-1juFs.js";import"./index-BXoAtbqZ.js";import"./index-DtA39DZL.js";import"./index-BiBDMnSv.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BaWfF9je.js";import"./memoTheme-BcCvxPZB.js";import"./styled-BSyyF-nm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BLVZqh54.js";import"./Tooltip-1HJoGAor.js";import"./useTheme-rB5ljihk.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./useTimeout-Dw4BvZaa.js";import"./useControlled-DV2QdfFp.js";import"./useEventCallback-BvtgHlfy.js";import"./getReactElementRef-Bs67iJIN.js";import"./Portal-rCUOv2ZO.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CQi1oJfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-GExIkIsQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B6dKL5Sm.js";import"./CircularProgress-DWs2PQSt.js";import"./Button-D7NhHobB.js";import"./index-y3fpgOs1.js";import"./Box-XJPq1vP8.js";import"./Grid-iRC4uFdh.js";import"./isMuiElement-nAYICNXy.js";import"./styled-CKZ50tVK.js";import"./Stack-DydGXCUI.js";import"./Container-CFzAHwrR.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4tLKTmpv.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-nv_qHD3t.js";import"./Select-BZkjZ3ZH.js";import"./Menu-BTFniDZi.js";import"./Popover-C720EYK_.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BBfmIDSu.js";import"./debounce-Be36O1Ab.js";import"./Modal-BSnsGlt8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CPg3TVnd.js";import"./Fade-DTvpgJPw.js";import"./Paper-YQNMXe3n.js";import"./List-DBdeSu6E.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Cab5rVDr.js";import"./OutlinedInput-BJeJtbfu.js";import"./FormHelperText-BLAKn_Zn.js";import"./FormControlLabel-5DOJ260I.js";import"./Typography-ZltxThzN.js";import"./Switch-B-MFS8IL.js";import"./SwitchBase-DtVc0w0b.js";import"./Radio-DMRBAorq.js";import"./RadioGroup-pJk0tL1L.js";import"./FormGroup-B_29syzn.js";import"./Divider-D76QGJ0C.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B8-wNipc.js";import"./FormControl-CFCq4OSP.js";import"./Autocomplete-BxGvqCGM.js";import"./Close-DOd84hl1.js";import"./usePreviousProps-tAWOXFY9.js";import"./Chip-Dt6yc169.js";import"./ListSubheader-D3L7EbhR.js";import"./useInfiniteQuery-BKX6Xx3e.js";import"./useBaseQuery-Ds4G3ig6.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
