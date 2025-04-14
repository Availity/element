import{j as p}from"./jsx-runtime-BTJTZTIL.js";import{i as l}from"./index-Dl5t6TV_.js";import{A as a}from"./AsyncAutocomplete-BlPw_daU.js";import{i as c}from"./suspense-C-kwa4RK.js";import{Q as u}from"./queryClient-BCSCw6tS.js";import"./index-ChsGqxH_.js";import"./index-DLKRbc4C.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./___vite-browser-external_commonjs-proxy-DDYoOVPM.js";import"./index-DuRQpI0H.js";import"./_toKey-DFcMYS53.js";import"./index-BgYLq7fD.js";import"./Autocomplete-WXqHbexA.js";import"./index-CaDB5Zgc.js";import"./index-ChDxID8R.js";import"./index-DJKl12U0.js";import"./index-DcwHbAK-.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-CiBNlF9H.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./memoTheme-CpoNRPWX.js";import"./styled-CKuRQFSa.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./generateUtilityClasses-whvyra8-.js";import"./index-DnNfvsmq.js";import"./Tooltip-CIyLwlBA.js";import"./index-DyJdRKzS.js";import"./useTheme-Cx1wRXKO.js";import"./useTheme-Ib01SJ3a.js";import"./useSlot-1VRyIerd.js";import"./resolveComponentProps-CCNxqvxI.js";import"./useForkRef-Dz4aGlyk.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-C2J4q3Ji.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BmqT0tgx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_kG6RhR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D97P5WV0.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./index-CQspzllj.js";import"./Box-Dv31mJKI.js";import"./extendSxProp-BY7TjwKM.js";import"./Grid2-JMPt1-k0.js";import"./styled-Dbr83ACF.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-Do5o_sjG.js";import"./Stack-qbqOHiMo.js";import"./Container-DVbvSSVb.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BDxB3zbH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./OutlinedInput-B93mfhOp.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DfraP8LW.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-IoH-6RCp.js";import"./Menu-GaZ6ImQN.js";import"./Popover-CQBNnNRW.js";import"./Paper-4P5FqKie.js";import"./Modal-CezAubrN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-TXxSV-j9.js";import"./Fade-BCUt9uX4.js";import"./List-eXGzl-Dz.js";import"./createSvgIcon-BWWwXn7v.js";import"./FormControlLabel-BzV1MzKU.js";import"./Typography-COSof5sR.js";import"./Switch-CyD42d4W.js";import"./SwitchBase-CYtmyT40.js";import"./RadioGroup-CZeO-sCM.js";import"./Divider-DJW73rZ3.js";import"./dividerClasses-0g4QmK6Y.js";import"./TextField-DBCIsg8u.js";import"./FormControl-BpN01e6f.js";import"./Autocomplete-D1g4r_hX.js";import"./Close-_BvKU_hM.js";import"./usePreviousProps-DrPGTKoq.js";import"./Chip-BprfrhNF.js";import"./ListSubheader-CTxWtyL5.js";import"./useInfiniteQuery-W0DjiFdp.js";import"./useBaseQuery-BiPPAl1W.js";const lo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"},argTypes:{multiple:{table:{disable:!0}}}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=i.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const co=["_Async"];export{i as _Async,co as __namedExportsOrder,lo as default};
