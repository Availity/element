import{j as p}from"./iframe-BjnuDffd.js";import{i as n}from"./index-CFUpLV2J.js";import{A as m}from"./AsyncAutocomplete-nW6pvoiA.js";import{Q as a}from"./suspense-DQI9Ntyw.js";import{Q as s}from"./queryClient-CuN1dcSA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgY1J8fE.js";import"./___vite-browser-external_commonjs-proxy-n-RzBoxb.js";import"./index-D16oZYS_.js";import"./_toKey-CDVtnxQV.js";import"./Autocomplete-yqqU788Y.js";import"./index-BmOY-tqE.js";import"./index-svg4hkeJ.js";import"./index-BiBDMnSv.js";import"./index-BPcsFkr_.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CargZ35d.js";import"./memoTheme-B2JdP5Lg.js";import"./styled-DqMp1nYt.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-ozQD-jv-.js";import"./Tooltip-DY2U7J0u.js";import"./useTheme-C7UHXn64.js";import"./useSlot-jAOnMiB5.js";import"./mergeSlotProps-ShRnscjH.js";import"./useForkRef-DH1owG2H.js";import"./useTimeout-C6wFpPob.js";import"./useControlled-BK8V1AI9.js";import"./useEventCallback-C7vIb1Zh.js";import"./getReactElementRef-Cj7TLjNv.js";import"./Portal-BeYOOpZP.js";import"./utils-BWRWa3IK.js";import"./TransitionGroupContext-CjQYVfWF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BCOe5sCp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CTKwlcpD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B91JQX2j.js";import"./CircularProgress-2p5PvuKn.js";import"./Button-Z3VsI-jq.js";import"./index-CqZiq0s6.js";import"./Box-BZu1WY8a.js";import"./Grid-B7_6AdGR.js";import"./styled-BuSaaTq2.js";import"./isMuiElement-CRA1aQWB.js";import"./Stack-2ZpK9jn9.js";import"./Container-DjmD-ytY.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-gNuCHhVS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CIls3zi9.js";import"./Select-CqSNJN5R.js";import"./Menu-CkKwmLfC.js";import"./Popover-CoUD2O0H.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-4WC3aA8E.js";import"./Modal-Dw-6s7kU.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJ9OS4uV.js";import"./Fade-C3ie0yGC.js";import"./Paper-rd8sC7yH.js";import"./List-CTB2KJ36.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-mv4Pxh2n.js";import"./OutlinedInput-DF2vQFYi.js";import"./FormHelperText-CtgE_BPS.js";import"./FormControlLabel-CsqIcyf0.js";import"./Typography-fWFZNgKP.js";import"./Switch-Dn3O0b_X.js";import"./SwitchBase-BeqnuivA.js";import"./RadioGroup-BkZEZI9I.js";import"./Radio-D5EV174V.js";import"./FormGroup-BpUqtGY1.js";import"./Divider-Dn0pR-KW.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-Bnq1TdGs.js";import"./FormControl-D7Bj8nG1.js";import"./Autocomplete-4TyCxtyI.js";import"./Close-D01zy2br.js";import"./usePreviousProps-Fs_NmUsf.js";import"./Chip-ZGXqdheA.js";import"./ListSubheader-oKZGOnvK.js";import"./useInfiniteQuery-BPyt2bOW.js";import"./useBaseQuery-DmC6Mbn_.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
