import{j as p}from"./iframe-L2WfQCwc.js";import{i as l}from"./index-DZMUvtd-.js";import{A as a}from"./AsyncAutocomplete-aGaVsd9D.js";import{Q as c}from"./suspense-DRSFrig5.js";import{Q as u}from"./queryClient-DRidgi_u.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DcPcEC4T.js";import"./___vite-browser-external_commonjs-proxy-BGdEQkiI.js";import"./index-DuRQpI0H.js";import"./_toKey-DuWRNRhf.js";import"./Autocomplete-DZ02m_lP.js";import"./index-BkC-Zfxo.js";import"./index-CzXABN3m.js";import"./index-DJKl12U0.js";import"./index-CSnqgGqw.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-B1vwUV3N.js";import"./memoTheme-DbVnS5NV.js";import"./styled-BnTbP4z1.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Dn592ewG.js";import"./Tooltip-BMsQv-ox.js";import"./useTheme-X_Qa8Dhp.js";import"./useSlot-DIvU7LRB.js";import"./mergeSlotProps-DHVHFrS4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3tscFOR.js";import"./useTimeout-CpICOsEx.js";import"./useControlled-BwGYVh51.js";import"./useEventCallback-CrctvfCx.js";import"./getReactElementRef-BWc-HwFQ.js";import"./Portal-B8Bei1bh.js";import"./utils-B5nq23mn.js";import"./TransitionGroupContext-yrVXEs3b.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B_VhlgSD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BicFpcJT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DCYuzXhR.js";import"./CircularProgress-B0WBDXJs.js";import"./Button-B1u8B3-l.js";import"./index-jgvtu0vB.js";import"./Box-CX0N0ctd.js";import"./Grid-B587iyjg.js";import"./styled-cdoMrI2T.js";import"./isMuiElement-SRHHNfX0.js";import"./Stack-BhxFzEo9.js";import"./Container-0A1GRnLt.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-8xWJV5Dj.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DN-RqkfH.js";import"./OutlinedInput-CWyWBPMD.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-DjLfknxE.js";import"./Menu-D7peMxM5.js";import"./Popover-B7G6K2kq.js";import"./mergeSlotProps-CWoOrWbD.js";import"./Modal-D5Qdog5s.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D7wf_uck.js";import"./Fade-CQS6r_wU.js";import"./Paper-BGi8TE6x.js";import"./List-D2he6eDF.js";import"./createSvgIcon-CN7Wy4aL.js";import"./FormHelperText-CamvAlEY.js";import"./FormControlLabel-mvG_upvO.js";import"./Typography-caGtC1xp.js";import"./Switch-kUKw20MM.js";import"./SwitchBase-CQdZnqs0.js";import"./RadioGroup-C2RdLrrk.js";import"./Radio-36twfGTs.js";import"./FormGroup-D2CPtvpg.js";import"./Divider-B5nuI06r.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-BFXId2wL.js";import"./FormControl-BmLki1qW.js";import"./Autocomplete-CGFgs562.js";import"./Close-DRgRl-Mx.js";import"./usePreviousProps-D5NhxkXt.js";import"./Chip-DFrJ2Eby.js";import"./ListSubheader-D6dnP-SY.js";import"./useInfiniteQuery-BAbKH8Ci.js";import"./useBaseQuery-B79-Ponu.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const $t={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
