import{j as p}from"./iframe-B-IDRs1c.js";import{i as l}from"./index-CWYX1l8J.js";import{A as a}from"./AsyncAutocomplete-DUmIhUpU.js";import{Q as c}from"./suspense-4vLyYAOu.js";import{Q as u}from"./queryClient-eTqVL9Wh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXMplU3R.js";import"./___vite-browser-external_commonjs-proxy-N8USPokE.js";import"./index-DuRQpI0H.js";import"./_toKey-CS9IHmAM.js";import"./Autocomplete-NOocTvpN.js";import"./index-CRDtiqbY.js";import"./index-B7ln0YRF.js";import"./index-DJKl12U0.js";import"./index-B8qzEHL-.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Dnen4Kai.js";import"./memoTheme-CE8Ve8p3.js";import"./styled-7JhYMRam.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CT2WTVvP.js";import"./Tooltip-CSSVlh_J.js";import"./useTheme-BCGo3_gR.js";import"./useSlot-BDZruxXA.js";import"./mergeSlotProps-C8D8DcHH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ClLnv_Rm.js";import"./useTimeout-B5Lb3nSx.js";import"./useControlled-c6loq-MY.js";import"./useEventCallback-cI9q2pBc.js";import"./getReactElementRef-DTxB74xF.js";import"./Portal-Br3wST_n.js";import"./utils-BDyqiFkI.js";import"./TransitionGroupContext-FoUS5PCq.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CfOviytx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BX_62obP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BRBh8179.js";import"./CircularProgress-DIITlzvm.js";import"./Button-BTxgxpDX.js";import"./index-y3bL_tnv.js";import"./Box-D7mgUtfD.js";import"./Grid-CzlSEqG7.js";import"./styled-BXVIoFq6.js";import"./isMuiElement-Cvcy1-u-.js";import"./Stack-BQlzlOuL.js";import"./Container-DiLdPN9q.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-MY60MoUc.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DeAhKfVJ.js";import"./OutlinedInput-2jEgO4FM.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-D7jHN25u.js";import"./Menu-k9MMNqzG.js";import"./Popover-DhQ5m6YW.js";import"./mergeSlotProps-CcD7j9hf.js";import"./Modal-BzHYDMo_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BCtdC_Sn.js";import"./Fade-D1BipWHC.js";import"./Paper-BIo3wRRL.js";import"./List-DqzcvQFO.js";import"./createSvgIcon-D0KAL-_d.js";import"./FormHelperText-CkBHd9eX.js";import"./FormControlLabel-DA8J7sXe.js";import"./Typography-qhH8cReh.js";import"./Switch-DR7U96ou.js";import"./SwitchBase-D-rxiEW8.js";import"./RadioGroup-DeL1r2zs.js";import"./Radio-leo7IPEq.js";import"./FormGroup-DRovw82o.js";import"./Divider-Bu1AF1W-.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-C_E-uxau.js";import"./FormControl-CzWcShYR.js";import"./Autocomplete-4DTrbHOi.js";import"./Close-B1OoH-GK.js";import"./usePreviousProps-_XzjWKlX.js";import"./Chip-CFCjZYyY.js";import"./ListSubheader-CSsUF1o9.js";import"./useInfiniteQuery-BN4GuKDQ.js";import"./useBaseQuery-DEGOn1Hn.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const $t={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
