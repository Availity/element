import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{s as l}from"./index-Cs70mkZF.js";import{A as a}from"./AsyncAutocomplete-CSZePOYI.js";import{Q as c}from"./suspense-gSMUnaCZ.js";import{Q as u}from"./queryClient-mdpH4muO.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-IdGqEWBr.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./Autocomplete-D43PO9dd.js";import"./index-D69ufRNP.js";import"./index-BlC5JLGo.js";import"./index-DMWJB0MK.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./index-DSGElAqY.js";import"./Tooltip-BNHD4B5V.js";import"./index-nos-0K8U.js";import"./useTheme-Cf-RAc4Y.js";import"./useTheme-DwYC2ms6.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-D32Mdiva.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DE50rPTb.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DGohL5ME.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ctwr4_Dd.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./CircularProgress-D2topXWR.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./faCheck-B05F4ORy.js";import"./Select-Dt0UCwxY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-BU9jXi-3.js";import"./Popover-CSXcjUnK.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DoDJPSvm.js";import"./Modal-B_4-9GXq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-4xfgJS0q.js";import"./Fade-DlB6bWB0.js";import"./List-BRpAtMOZ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BzSwLqYD.js";import"./OutlinedInput-BeuFtjMr.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./FormLabel-CZFypZnO.js";import"./FormControlLabel-CImDabQe.js";import"./Typography-Dw3TlP36.js";import"./Switch-CXk7mhi6.js";import"./SwitchBase-CHDa-0k7.js";import"./RadioGroup-B7AA9dKi.js";import"./Box-DR5TX31P.js";import"./Divider-Dys0WftY.js";import"./dividerClasses-C6lHB_qP.js";import"./Stack-BPYMGdgv.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./TextField-DnlxDaFs.js";import"./FormControl-BhCdTdWt.js";import"./isMuiElement-DAzOCCHH.js";import"./Autocomplete-_uyW3nrN.js";import"./Close-B57SlfWx.js";import"./usePreviousProps-BYCwus4J.js";import"./Chip-CjjfMMY_.js";import"./ListSubheader-3rOeDSM0.js";import"./useInfiniteQuery-CwQX45Ce.js";import"./useBaseQuery-NqdwwGPu.js";const ro={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"},argTypes:{multiple:{table:{disable:!0}}}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),p={render:t=>i.jsx(c,{client:g,children:i.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=p.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const po=["_Async"];export{p as _Async,po as __namedExportsOrder,ro as default};
