import{j as p}from"./iframe-Bb3d8CAJ.js";import{i as n}from"./index-jKUHhpiq.js";import{A as m}from"./AsyncAutocomplete-B2-OesQ4.js";import{Q as a}from"./suspense-BlR5cJnB.js";import{Q as s}from"./queryClient-BDROJJSB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLraAfE_.js";import"./___vite-browser-external_commonjs-proxy-CF9TkHqL.js";import"./index-gEuNZa6B.js";import"./_toKey-BFA3_CaF.js";import"./Autocomplete-CuU-XW7X.js";import"./index-DNkL_PKa.js";import"./index-aE4BW0-t.js";import"./index-BiBDMnSv.js";import"./index-0wpeyl_7.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-B3pyeCMx.js";import"./memoTheme-DG97Ks8Q.js";import"./styled-DljcZuS8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-5JqH0pbP.js";import"./Tooltip-SkDB5_9b.js";import"./useTheme-7VSsG7x3.js";import"./useSlot-DsuYGff3.js";import"./mergeSlotProps-gjnpxKKm.js";import"./useForkRef-B1A3wtQb.js";import"./useTimeout-CybQo20w.js";import"./useControlled-Dk5cREEZ.js";import"./useEventCallback-CXGXfcdA.js";import"./getReactElementRef-C8hW-Gj-.js";import"./Portal-Cn9zneq7.js";import"./utils-CYAKcw8L.js";import"./TransitionGroupContext-B6dWxZQA.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DBrHcN3c.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3Ov0u9A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-ChdXNNb1.js";import"./CircularProgress-CEqu6RKG.js";import"./Button-Bh15sM15.js";import"./index-EIWodvd0.js";import"./Box-BBwRUkD_.js";import"./Grid-DMQwhFnG.js";import"./styled-BHuc_G65.js";import"./isMuiElement-DI-PqbcS.js";import"./Stack-BUtu09qb.js";import"./Container-UE_6YzFq.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpdhAv7p.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Drg5HQwL.js";import"./OutlinedInput-Cn1Phwz7.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-NdweL_Kg.js";import"./Menu-C4_TcCpf.js";import"./Popover-B6d6ta9S.js";import"./mergeSlotProps-BbxdafLp.js";import"./Modal-Bwn9o6tM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DGjsJ5Cu.js";import"./Fade-GlPiP-Z7.js";import"./Paper--RUEVv6r.js";import"./List-2MkZxWsu.js";import"./createSvgIcon-DaOARJ1X.js";import"./FormHelperText-qi6lM2Nc.js";import"./FormControlLabel-DyZlM93z.js";import"./Typography-BQpGuQ-L.js";import"./Switch-CWfCt-pZ.js";import"./SwitchBase-DL98QF8Z.js";import"./RadioGroup-Bwz-Xf6e.js";import"./Radio-Di5bGY6f.js";import"./FormGroup-DphnweWP.js";import"./Divider-B8rl5TZG.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DMm67o2w.js";import"./FormControl-JAIVQZ8_.js";import"./Autocomplete-CrqeKhl6.js";import"./Close-Bzf2E-vp.js";import"./usePreviousProps-CHRSE5HB.js";import"./Chip-C50T4oTY.js";import"./ListSubheader-de9vrlAD.js";import"./useInfiniteQuery-Dc3TAE2-.js";import"./useBaseQuery-DeFhx50N.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
