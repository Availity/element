import{j as p}from"./iframe-Tg5E9Q0V.js";import{i as l}from"./index-BawvJ9vE.js";import{A as a}from"./AsyncAutocomplete-L0KkrhEb.js";import{Q as c}from"./suspense-D26BOp5-.js";import{Q as u}from"./queryClient-0gDoLhbK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-HS0VMrul.js";import"./___vite-browser-external_commonjs-proxy-BsJk-Vbm.js";import"./index-ByAKUpTB.js";import"./_toKey-DDhoPzzc.js";import"./Autocomplete-TvugPwqQ.js";import"./index-c3FvtUWI.js";import"./index-77bZYOQr.js";import"./index-DS1ZdVNz.js";import"./index-D8INjewo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-of2VfktU.js";import"./memoTheme-CSHka9uN.js";import"./styled-CkQGWiXZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-x-cZi-nY.js";import"./Tooltip-BTI4GCPp.js";import"./useTheme-D2PM0NC9.js";import"./useSlot-DWYsP92Q.js";import"./mergeSlotProps-BNNCTn4N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B_DO_dbH.js";import"./useTimeout-CYbYxV9r.js";import"./useControlled-BcdiiQVx.js";import"./useEventCallback-pJVTgRiD.js";import"./getReactElementRef-B8vpBm8c.js";import"./Portal-CbAAOrpG.js";import"./utils-BChu3r4-.js";import"./TransitionGroupContext-cQD0tQZD.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-S7vQ2L8Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cl7hs1iw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CCTLTRt8.js";import"./CircularProgress-xXUbWWTu.js";import"./Button-CDV9x4x4.js";import"./index-D4DEAloD.js";import"./Box-BsChB_Op.js";import"./Grid-GpGmgKJU.js";import"./styled-CQuv9sTF.js";import"./isMuiElement-DRHNiz3q.js";import"./Stack-DMT1dotB.js";import"./Container-f8pbHfI3.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-ChcC5XoQ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-r-M3yZ1X.js";import"./OutlinedInput-DMBmnQFG.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-XTv3Q3rb.js";import"./Menu-CGLRlKaF.js";import"./Popover-CDrviG-H.js";import"./mergeSlotProps-D8IAAijA.js";import"./Modal-BGuLed81.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BgXNmqEU.js";import"./Fade-BvyniuaG.js";import"./Paper-DUjZmU49.js";import"./List-Dgv4nz0z.js";import"./createSvgIcon-BlU2wZ3P.js";import"./FormHelperText-D0NqzqTG.js";import"./FormControlLabel-_Cs-jF7x.js";import"./Typography-BcRYJcKe.js";import"./Switch-qnihXu10.js";import"./SwitchBase-dnO5HhvT.js";import"./RadioGroup-BiGhfNL0.js";import"./Radio-CCseEdT4.js";import"./FormGroup-CYUa5pLf.js";import"./Divider-sdSeaLpt.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DX0Zd_gT.js";import"./FormControl-F3seOtKW.js";import"./Autocomplete-DjcDwlm0.js";import"./Close-CFhqNs6G.js";import"./usePreviousProps-CxU-1CgI.js";import"./Chip-lel946S9.js";import"./ListSubheader-BEDk7oGT.js";import"./useInfiniteQuery-BRRb6cqB.js";import"./useBaseQuery-DbFfF0cJ.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-NhK0GdlN.js";import"./index-XmUgrPNy.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
