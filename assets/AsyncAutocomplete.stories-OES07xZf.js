import{j as p}from"./iframe-CsWHXpAl.js";import{i as n}from"./index-Cnu6GDEx.js";import{A as m}from"./AsyncAutocomplete-KjrGVVzC.js";import{Q as a}from"./suspense-BLW9dQ9T.js";import{Q as s}from"./queryClient-spsZidhA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJYXLaUR.js";import"./___vite-browser-external_commonjs-proxy-xfPAmR0C.js";import"./index-BMtSefDJ.js";import"./_toKey-kk3qpMzA.js";import"./Autocomplete-xMIdJa7G.js";import"./index-B2nWPgMd.js";import"./index-DtMpmsGA.js";import"./index-BiBDMnSv.js";import"./index-CAQ8YrHX.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-rO9Zrjko.js";import"./memoTheme-D1WvXAYX.js";import"./styled-7ngSg1XE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-vavqp1NI.js";import"./Tooltip-Bng6bCNf.js";import"./useTheme-p1ELRF_q.js";import"./useSlot-C4woaFwW.js";import"./mergeSlotProps-BavqdjkP.js";import"./useForkRef-C-HgPgYg.js";import"./useTimeout-MBLSaU9x.js";import"./useControlled-D3FoPl0A.js";import"./useEventCallback-ByFiieHy.js";import"./getReactElementRef-U9GKYTTT.js";import"./Portal-BnhBoGVi.js";import"./utils-DGzkDCaD.js";import"./TransitionGroupContext-C2wcbRoz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DAB-O9r_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BElkJFHg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bidr6pNA.js";import"./CircularProgress-DpaflDra.js";import"./Button-CA2GH-94.js";import"./index-D6jmlPGV.js";import"./Box-D0gDoyzH.js";import"./Grid-ht3QhPkQ.js";import"./styled-DAuJ6HDN.js";import"./isMuiElement-Bn1OwKtz.js";import"./Stack-Cd9e6_04.js";import"./Container-B-ZE-anm.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Bq2nsaK6.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C7imt2Hm.js";import"./Select-BSaniiJT.js";import"./Menu-B1BH_CE7.js";import"./Popover-DZmHDLDj.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DtxOh3xS.js";import"./Modal-xpXfJVrF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DunYOkpv.js";import"./Fade-CyNrIrid.js";import"./Paper-CRnRfyjj.js";import"./List-B6sbHI_t.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-vjDmBDLj.js";import"./OutlinedInput-BC0zMwA1.js";import"./FormHelperText-JfQUw7jj.js";import"./FormControlLabel-66sIfP2p.js";import"./Typography-BPpHVaiZ.js";import"./Switch-XyUWMXtR.js";import"./SwitchBase-C8WEOYdn.js";import"./RadioGroup-cucNTYda.js";import"./Radio-DFc5QvIb.js";import"./FormGroup-mpFcmi4u.js";import"./Divider-fQ4alnU8.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-7imbDxmC.js";import"./FormControl-CVX71svO.js";import"./Autocomplete-CspE7aoq.js";import"./Close-CzyEhyMz.js";import"./usePreviousProps-CunDJRqh.js";import"./Chip-En3x6QCC.js";import"./ListSubheader-1PkALfa4.js";import"./useInfiniteQuery-Ca0xA3QP.js";import"./useBaseQuery-VcdBILCP.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
