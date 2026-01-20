import{j as p}from"./iframe-PQChuD5P.js";import{i as n}from"./index-DVEc2Vv3.js";import{A as m}from"./AsyncAutocomplete-CLxKXB9T.js";import{Q as a}from"./suspense-DEumlA4G.js";import{Q as s}from"./queryClient-WCbpO43W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfTyqBN3.js";import"./___vite-browser-external_commonjs-proxy-y8cwOC0Q.js";import"./index-Xdeyw5Qm.js";import"./_toKey-Bs2E6uDX.js";import"./Autocomplete-CqGmAcjB.js";import"./index-CzW-wV_b.js";import"./index-BWhceLOE.js";import"./index-BiBDMnSv.js";import"./index-B-1E6jc-.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-Ct-k9MaL.js";import"./memoTheme-CVvKr3an.js";import"./styled-IO14y-za.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CPbMBP85.js";import"./Tooltip-D_0sM1X3.js";import"./useTheme-D_lM5llQ.js";import"./useSlot-Budp5-i0.js";import"./mergeSlotProps-D2tsKCVf.js";import"./useForkRef-CKG9IprU.js";import"./useTimeout-CrdRO3z-.js";import"./useControlled-DL9Iut2g.js";import"./useEventCallback-CVuBVoUk.js";import"./getReactElementRef-CkDqfdPm.js";import"./Portal-CcwI5hbz.js";import"./utils-Bn3set7p.js";import"./TransitionGroupContext-4uG2Mcc_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-NXvv48zc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-uRCWfHSj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DrAbzSCI.js";import"./CircularProgress-C9w8hYD6.js";import"./Button-J7D5oBem.js";import"./index-CWw8B1ja.js";import"./Box-DSvqrQJU.js";import"./Grid-DbL14Ouo.js";import"./styled-C9qQOw_O.js";import"./isMuiElement-BKekQHvL.js";import"./Stack-DzAEF9zt.js";import"./Container-BWtWb0u_.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-GejnCESN.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CbIOiaJO.js";import"./OutlinedInput-D5_x8OFb.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-bU8x50qw.js";import"./Menu-BolQPLJ0.js";import"./Popover-DekC-QM6.js";import"./mergeSlotProps-Cm7mpwkx.js";import"./Modal-iRzmQDx3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DtcvWdU4.js";import"./Fade-BKGIBsen.js";import"./Paper-DzmRSJAJ.js";import"./List-DWc9uyQQ.js";import"./createSvgIcon-DUCTV8Uh.js";import"./FormHelperText-Cawj5hZz.js";import"./FormControlLabel-CxBE5Rqn.js";import"./Typography-C-i-WVAF.js";import"./Switch-N2p4b12b.js";import"./SwitchBase-kj6FUEij.js";import"./RadioGroup-CkrIdeCa.js";import"./Radio-DDAK31Zp.js";import"./FormGroup-DzcaZvEX.js";import"./Divider-DaI22C2v.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-aMcHF7ES.js";import"./FormControl-DvecvwWK.js";import"./Autocomplete-DiJG5sFg.js";import"./Close-B8qIlG4s.js";import"./usePreviousProps-BYXsMW_3.js";import"./Chip-DpXPWsPl.js";import"./ListSubheader-CwJEZ-7R.js";import"./useInfiniteQuery-gpfg21vt.js";import"./useBaseQuery-gCxicAtf.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
