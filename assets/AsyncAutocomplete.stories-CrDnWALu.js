import{j as p}from"./iframe-BogvEzzk.js";import{i as n}from"./index-CsqNTlSl.js";import{A as m}from"./AsyncAutocomplete-CGsE69oZ.js";import{Q as a}from"./suspense-oUbAOHSt.js";import{Q as s}from"./queryClient-CnnIINyG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DM5SbX2R.js";import"./___vite-browser-external_commonjs-proxy-BENhUaDo.js";import"./index-B6XcXT9j.js";import"./_toKey-DzkwCRm5.js";import"./Autocomplete-B-pzD2rZ.js";import"./index-DJs1-15b.js";import"./index-BrcEbWZt.js";import"./index-BiBDMnSv.js";import"./index-DN6mEFyY.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-G5ERuA4c.js";import"./memoTheme-ConJxO_1.js";import"./styled-BFtRu0jz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CVBbnXNY.js";import"./Tooltip-C6WVgS1U.js";import"./useTheme-BBNTCId8.js";import"./useSlot-Y7PrCG6i.js";import"./mergeSlotProps-BErbrcgk.js";import"./useForkRef-CqcCgO8d.js";import"./useTimeout-DZGpqNmU.js";import"./useControlled-gyysmPVY.js";import"./useEventCallback-C0HPOgFU.js";import"./getReactElementRef-CP_6PAo8.js";import"./Portal-ZBYUloHF.js";import"./utils-5Q8am4bW.js";import"./TransitionGroupContext-CHnQfJTl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BANTEgU8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BtFu5_Hj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BesYK0lh.js";import"./CircularProgress-DhfsvjKI.js";import"./Button-tZZ9xZeA.js";import"./index-COPogReU.js";import"./Box-vDt_-54-.js";import"./Grid-BcbYyZVH.js";import"./isMuiElement-BFE19Jpd.js";import"./styled-CBCNrD84.js";import"./Stack-Dk7Y43_6.js";import"./Container-BNyaW0Z7.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C89BBoXI.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B8_Z0NzZ.js";import"./Select-DuHTe2pd.js";import"./Menu-DssRhoRF.js";import"./Popover-9x2syr4c.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-C4-1KyX1.js";import"./debounce-Be36O1Ab.js";import"./Modal-CXoXruWX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BNc1S_Ht.js";import"./Fade-2k1WGtTS.js";import"./Paper-DuKdNvwh.js";import"./List-DxFgOZ6h.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-p3gD-EgA.js";import"./OutlinedInput-Cq1_VBQe.js";import"./FormHelperText-BPy61GBU.js";import"./FormControlLabel-Bwwng0iC.js";import"./Typography-6PKOADI0.js";import"./Switch-DBCNURWK.js";import"./SwitchBase-FzsuJ5kA.js";import"./Radio-CRkgjGUI.js";import"./RadioGroup-D27OhYEB.js";import"./FormGroup-DFkfhFkB.js";import"./Divider-BlV-2iOF.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CyUHkF2c.js";import"./FormControl-CKOpWj-y.js";import"./Autocomplete-C3K0z4PO.js";import"./Close-BRRiDgn2.js";import"./usePreviousProps-DUa8gmPg.js";import"./Chip-D3C2boJp.js";import"./ListSubheader-7jJKsRuZ.js";import"./useInfiniteQuery-59TlDpGy.js";import"./useBaseQuery-Di0SiSZf.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
