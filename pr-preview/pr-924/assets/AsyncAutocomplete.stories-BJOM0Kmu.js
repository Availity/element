import{j as p}from"./iframe-B3KH45W1.js";import{i as n}from"./index-CM5pd_V5.js";import{Q as a}from"./suspense-CAsCI82k.js";import{A as e}from"./AsyncAutocomplete-BGRCVCP0.js";import{Q as s}from"./queryClient-DTc0CQfl.js";import"./preload-helper-Dab_6GC_.js";import"./index-DN9vLoIX.js";import"./___vite-browser-external_commonjs-proxy-BJRxm24Q.js";import"./index-CZPtvi5C.js";import"./useBaseQuery-BDWpJP57.js";import"./Autocomplete-CbgIMIko.js";import"./TextField-DjCF7CZ3.js";import"./FormHelperText-CZJvLmcm.js";import"./Form-D1K37nGD.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./memoTheme-DWwRHojM.js";import"./styled-B89GBRvi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-Bn-upZao.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bg2Y-buC.js";import"./FormLabel-DW_eBrIG.js";import"./FieldHelpIcon-DiJFTHZH.js";import"./index-CrcoPoGw.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useTheme-Ds4SDsFm.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./FormControl-D9hbHaGM.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-BGMciLL0.js";import"./Input-CuUrWl-a.js";import"./OutlinedInput-BAiglCmg.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-BJwaEEmH.js";import"./Actions-CO819m3I.js";import"./Select-DIxhJ8kq.js";import"./SelectFocusSourceContext-BFgvB2zc.js";import"./Popover-3fDVAJax.js";import"./mergeSlotProps-CZPVrohS.js";import"./Modal-CJRztngO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-y0tvSJ2D.js";import"./Fade-DJRP9WcG.js";import"./Paper-BJPkQ8DM.js";import"./List-DafW6Lb2.js";import"./createSvgIcon-CP7Sjzln.js";import"./Stack-D4A7CmlM.js";import"./styled-CG3DpTjV.js";import"./Divider-C6Wz3kbt.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-BlezGjUJ.js";import"./Grid-CXe_6B0b.js";import"./Typography-k07kEcGa.js";import"./Typography-D3qZBRmm.js";import"./TextField-CysQRKEV.js";import"./Autocomplete-BVPTGdNg.js";import"./Close-CCXJfw-Y.js";import"./usePreviousProps-BjASkuMJ.js";import"./Chip-CGZm7A6G.js";import"./ListSubheader-C1va-5Fr.js";const Bt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dt=["_Async"];export{i as _Async,Dt as __namedExportsOrder,Bt as default};
