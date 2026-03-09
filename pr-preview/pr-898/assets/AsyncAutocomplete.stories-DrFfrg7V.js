import{j as p}from"./iframe-N02SuUfm.js";import{i as n}from"./index-Czj-Ny1w.js";import{A as m}from"./AsyncAutocomplete-CAizPv-a.js";import{Q as a}from"./suspense-CyHkgXoW.js";import{Q as s}from"./queryClient-2B3fXaEN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsTcntRr.js";import"./___vite-browser-external_commonjs-proxy-ClC8u-HF.js";import"./index-waB1V5N9.js";import"./_toKey-CsRLVhVE.js";import"./Autocomplete-DIkAUFfW.js";import"./index-Wd1dmByt.js";import"./index-O83autw8.js";import"./index-BiBDMnSv.js";import"./index-lxra371Y.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BTj78AGP.js";import"./memoTheme-DMlCkTbp.js";import"./styled-uecMoX7Y.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BvsDSmAk.js";import"./Tooltip-CQFd6bN6.js";import"./useTheme-CBomFZYP.js";import"./useSlot-CYr36xh7.js";import"./mergeSlotProps-BGDsmNTV.js";import"./useForkRef-C8fPM8y1.js";import"./useTimeout-CejRPUTA.js";import"./useControlled-RyKq5As7.js";import"./useEventCallback-CZlMSRL0.js";import"./getReactElementRef-DLbY8hGf.js";import"./Portal-BvewvNxS.js";import"./utils-CJrkpLOG.js";import"./TransitionGroupContext-DaLiAsRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDT4gqxX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cq9St4jZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cit_CnSx.js";import"./CircularProgress-DkicU_0c.js";import"./Button-I7Afgrab.js";import"./index-BFybfeE7.js";import"./Box-Ben8ewWC.js";import"./Grid-DiVgGJyw.js";import"./isMuiElement-C9a6bZCj.js";import"./styled-CbtJmbVm.js";import"./Stack-fkRAdSBn.js";import"./Container-BEjGGen4.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CYwHUPzU.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BD7aMFTJ.js";import"./Select-ho_my8co.js";import"./Menu-CNbByBse.js";import"./Popover-DZUU7aLF.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-B75zb9Z-.js";import"./debounce-Be36O1Ab.js";import"./Modal-B1sd4ioz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-zgdIOC3a.js";import"./Fade-CDLQakVW.js";import"./Paper-BzTjV2sZ.js";import"./List-YU4EJ10j.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-quS1Xx-W.js";import"./OutlinedInput-BJ4muOdx.js";import"./FormHelperText-DfPO-kQa.js";import"./FormControlLabel-CoweE3QV.js";import"./Typography-DFwTx7H5.js";import"./Switch-CtRDDJM7.js";import"./SwitchBase-BES-af_c.js";import"./Radio-DnbbdXNl.js";import"./RadioGroup-DUNzvRPH.js";import"./FormGroup-lyJkF3yT.js";import"./Divider-Dw47beet.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-4P33EtSz.js";import"./FormControl-CYDh9EzN.js";import"./Autocomplete-BjhBtEf3.js";import"./Close-H4HIKQVs.js";import"./usePreviousProps-D6eowz13.js";import"./Chip-BFhioXdp.js";import"./ListSubheader-pDRKEOTE.js";import"./useInfiniteQuery-DRy5eSn7.js";import"./useBaseQuery-CdzmXqc3.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
