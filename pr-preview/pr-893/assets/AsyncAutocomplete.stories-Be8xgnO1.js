import{j as p}from"./iframe-DdfW-8_N.js";import{i as n}from"./index-Qm8Jx-fd.js";import{A as m}from"./AsyncAutocomplete-CiOSDSKv.js";import{Q as a}from"./suspense-CUCRFkyj.js";import{Q as s}from"./queryClient-DjyccQVK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-L1rOSiqk.js";import"./___vite-browser-external_commonjs-proxy-Dx8KQjT5.js";import"./index-7ol4bgc4.js";import"./_toKey-BXxt23jf.js";import"./Autocomplete-DNPeIZKz.js";import"./index-uBChZ6MG.js";import"./index-DcimIcN_.js";import"./index-BiBDMnSv.js";import"./index-BFOrYL81.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Dd37ovUy.js";import"./memoTheme-Dy9OKavz.js";import"./styled-LeBzfrVS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C-S8qNMg.js";import"./Tooltip-Bx3cCyVU.js";import"./useTheme-CibYXdii.js";import"./useSlot-CGn3_9IL.js";import"./mergeSlotProps-CqPusD8W.js";import"./useForkRef-B88Yvlsp.js";import"./useTimeout-B6LNCSjE.js";import"./useControlled-DoVGZQrv.js";import"./useEventCallback-DvSzgmRL.js";import"./getReactElementRef-C38daVWB.js";import"./Portal-HR7sjuNG.js";import"./utils-ByofAeEv.js";import"./TransitionGroupContext-CyCzSLBs.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-1teZLVpX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-cVpvf3wp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Beiib6fe.js";import"./CircularProgress-YKVCICB8.js";import"./Button-B9MkHEWu.js";import"./index-DpB8nAvk.js";import"./Box-B1YYYxPG.js";import"./Grid-BLYhcV5L.js";import"./isMuiElement-Bemz2x0M.js";import"./styled-BbktOZM5.js";import"./Stack-COJVbYMP.js";import"./Container-C4O5rbHe.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-sMVSQNOc.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CG8sOhjY.js";import"./Select-BECnV9sa.js";import"./Menu-B20e0XTp.js";import"./Popover-CWHWrYUI.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-DEry-0fa.js";import"./debounce-Be36O1Ab.js";import"./Modal-BmEogbMs.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BcoXv1zJ.js";import"./Fade-Dr2QUuJ4.js";import"./Paper-B3IXTn7K.js";import"./List-9mS4xUP0.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-WEQlv1NO.js";import"./OutlinedInput-BotArOsj.js";import"./FormHelperText-DRC7w-DS.js";import"./FormControlLabel-CjgpwnMF.js";import"./Typography-CwnuSxBW.js";import"./Switch-DMN2jmMq.js";import"./SwitchBase-BidU3yt6.js";import"./Radio-dXLgjMUo.js";import"./RadioGroup-CMxHbEOa.js";import"./FormGroup-BNOfCNl9.js";import"./Divider-w0XMBMrP.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DslVheQ4.js";import"./FormControl-DApFLC8G.js";import"./Autocomplete-UQtMqJyg.js";import"./Close-RRjitx-c.js";import"./usePreviousProps-C6EglmHD.js";import"./Chip-C2Qu8ViK.js";import"./ListSubheader-Djf_aAXp.js";import"./useInfiniteQuery-BWIPe1m7.js";import"./useBaseQuery-DfrUdjTY.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
