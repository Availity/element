import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{s as l}from"./index-C5soOJ6z.js";import{A as a}from"./AsyncAutocomplete-AySG6DDb.js";import{i as c}from"./suspense-BqeUBMhm.js";import{Q as u}from"./queryClient-CjDmLjqo.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-uZUcOW5W.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./Autocomplete-dknOqRV_.js";import"./index-DaRMplxe.js";import"./index-BPVUk_cQ.js";import"./index-DMWJB0MK.js";import"./index--IoBtPgS.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-BS-p1eoC.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./index-CDwEgPAM.js";import"./Tooltip-eF_7lzc5.js";import"./index-nos-0K8U.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CKWfQBCE.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cuv6gcjd.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-v3cBwN0V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQZrtVrL.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./CircularProgress-BHFEuwTi.js";import"./Button-B22iKlEO.js";import"./LoadingButton-B6FUrH4t.js";import"./faCheck-B05F4ORy.js";import"./Select-Bh3HlTBm.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-BNF0dZPe.js";import"./Popover-DJDHQo2S.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-CvfFJp8a.js";import"./Modal-CzgY4V0Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B9IVkNZn.js";import"./Fade-DbM47FxC.js";import"./List-Ce1NCs06.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-IUeEQzFc.js";import"./OutlinedInput-DUFM6NiM.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./FormLabel-DrJE-ijH.js";import"./FormControlLabel-DLlzi5Ft.js";import"./Typography-Cng4iL4p.js";import"./Switch-6eDJgjyT.js";import"./SwitchBase-DPjFJeLH.js";import"./RadioGroup-DLgS-ogh.js";import"./Box-BAeL439g.js";import"./Divider-D_YJaRgz.js";import"./dividerClasses-Dy0fxzds.js";import"./Stack-C5Zrd0Q6.js";import"./styled-C36SNKZX.js";import"./useThemeProps-YZ7_EcgO.js";import"./TextField-D_phNllt.js";import"./FormControl-DxHQf2_s.js";import"./isMuiElement-DAzOCCHH.js";import"./Autocomplete-DlvytMGW.js";import"./Close-L9RbW_Po.js";import"./usePreviousProps-BYCwus4J.js";import"./Chip-CBOHQDsU.js";import"./ListSubheader-Bw6Q0Eqn.js";import"./useInfiniteQuery-BlwNwEaC.js";import"./useBaseQuery-CJ5trF24.js";const mo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"},argTypes:{multiple:{table:{disable:!0}}}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),p={render:t=>i.jsx(c,{client:g,children:i.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=p.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const eo=["_Async"];export{p as _Async,eo as __namedExportsOrder,mo as default};
