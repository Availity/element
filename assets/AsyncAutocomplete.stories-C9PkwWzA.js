import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{s as l}from"./index-C5soOJ6z.js";import{A as a}from"./AsyncAutocomplete-BHQiswBD.js";import{i as c}from"./suspense-BqeUBMhm.js";import{Q as u}from"./queryClient-CjDmLjqo.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-uZUcOW5W.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./Autocomplete-DEHT-CD0.js";import"./index-Cy29Pico.js";import"./index-DS2qViMa.js";import"./index-DMWJB0MK.js";import"./index-4AU0IlPL.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./index-DLsH_p52.js";import"./Tooltip-CiiaKkqp.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Caxu-qgA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DbVRbsLs.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./faCheck-B05F4ORy.js";import"./Select-hLZ2S4VH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-Byu17A6t.js";import"./Popover-ChEuM7rO.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-TketyoFF.js";import"./OutlinedInput-CQlxW3ax.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./FormLabel-98YPf6ct.js";import"./FormControlLabel-GqYWwHWT.js";import"./Typography-CvSvtD2a.js";import"./Switch-BqVUWLaW.js";import"./SwitchBase-Z9YgLJlx.js";import"./RadioGroup-BogPRRDq.js";import"./Box-DWnb8VZB.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./TextField-BxbLM7nG.js";import"./FormControl-BPSU2g7t.js";import"./isMuiElement-DAzOCCHH.js";import"./Autocomplete-DYfkOmMd.js";import"./Close-CpXO-CFZ.js";import"./usePreviousProps-BYCwus4J.js";import"./Chip-ALB5H4lg.js";import"./ListSubheader-DDrjAA_E.js";import"./useInfiniteQuery-BlwNwEaC.js";import"./useBaseQuery-CJ5trF24.js";const mo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"},argTypes:{multiple:{table:{disable:!0}}}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),p={render:t=>i.jsx(c,{client:g,children:i.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
