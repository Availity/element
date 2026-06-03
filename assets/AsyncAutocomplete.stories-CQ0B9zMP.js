import{j as p}from"./iframe-C9Q7A5ra.js";import{i as n}from"./index-UVINGYSN.js";import{A as m}from"./AsyncAutocomplete-prG7uVyl.js";import{Q as a}from"./suspense-DmU8Qbqd.js";import{Q as s}from"./queryClient-DA6qOiC9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9trg_F0.js";import"./___vite-browser-external_commonjs-proxy-gNskwvVU.js";import"./index-BxB72Ewe.js";import"./_toKey-CJoTaFB0.js";import"./Autocomplete-Bd3YWFy3.js";import"./index-5h3DbdqU.js";import"./index-BV7HRARt.js";import"./index-BiBDMnSv.js";import"./index-CyBTe91T.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzclMxo5.js";import"./memoTheme-YF5MtDv6.js";import"./styled-0UczSNXk.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cb9JJsiN.js";import"./Tooltip-Dxz12tat.js";import"./useTheme-DiIVsm9U.js";import"./useSlot--WqN-Xj_.js";import"./mergeSlotProps-UhsM3zsz.js";import"./useForkRef-B8T8EBOK.js";import"./useTimeout-BpXHY--n.js";import"./useControlled-__FO7R_p.js";import"./useEventCallback-LHv8CayF.js";import"./getReactElementRef-D2IRer1N.js";import"./Portal-1jOXhtNE.js";import"./utils-BZDXaftX.js";import"./TransitionGroupContext-DyV0aRJH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Osd4OcEu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZcoIB4U.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B3rBS9gF.js";import"./CircularProgress-CPrPE9Sw.js";import"./Button-CeTzgLEE.js";import"./index-0hLAGvby.js";import"./Box-BiOrU6MK.js";import"./Grid-CzHxH48g.js";import"./isMuiElement-BgeoDj0f.js";import"./styled-CCY5CIG6.js";import"./Stack-DyDlGsHv.js";import"./Container-CbMFSBjO.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BmBjgzzS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CWsMajyi.js";import"./Select-C1poooRd.js";import"./Menu-DBFXP6CC.js";import"./Popover-BYapJmFI.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-CWYgiJ7A.js";import"./debounce-Be36O1Ab.js";import"./Modal-BGRke5kn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-QSng-jdr.js";import"./Fade-Qmg-4-l1.js";import"./Paper-BvFLUZyh.js";import"./List-zrL7hhVU.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CHtzqaAD.js";import"./OutlinedInput-CSgt8L6A.js";import"./FormHelperText-Cbb9nKyC.js";import"./FormControlLabel-DhgUYH0v.js";import"./Typography-DxUywEUK.js";import"./Switch-CdF7hf3S.js";import"./SwitchBase-DXRaGOfU.js";import"./Radio-DztJdFCF.js";import"./RadioGroup-80iG6m5i.js";import"./FormGroup-BsWZdUIF.js";import"./Divider-Uz9pEyYf.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Dynpzfjp.js";import"./FormControl-CN3DMGzN.js";import"./Autocomplete-CDLvuE8c.js";import"./Close-BkT_rj0K.js";import"./usePreviousProps-CXOu6-J3.js";import"./Chip-BkYq3PQG.js";import"./ListSubheader-CuDZWS46.js";import"./useInfiniteQuery-CKqPgce2.js";import"./useBaseQuery-BfDlKaj5.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
