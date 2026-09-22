import{j as p}from"./iframe-pcBkreyF.js";import{i as n}from"./index-DmpvfKrB.js";import{Q as a}from"./suspense-sTObW_wx.js";import{A as e}from"./AsyncAutocomplete-CDbbREGN.js";import{Q as s}from"./queryClient-C_YZho_j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BXEw90fH.js";import"./___vite-browser-external_commonjs-proxy-XwZNvLiy.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-Bvd7IZcr.js";import"./useBaseQuery-B9sEuPFD.js";import"./Autocomplete-cd4SyKYn.js";import"./index-BNNmgO8a.js";import"./index-DvMYR6cM.js";import"./index-CrcoPoGw.js";import"./index-BHECb7j3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CQU7rCYy.js";import"./memoTheme-BGzSgD4T.js";import"./styled-DhfgW05P.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D-7rEUPH.js";import"./IconButton-CLvE6niR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BIRNPLHh.js";import"./useTimeout-BkFACxc1.js";import"./TransitionGroupContext-B-1f4D3_.js";import"./useForkRef-D6t7VBhN.js";import"./useEventCallback-C_PhZ4gM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-vX9_m42Y.js";import"./Tooltip-DFZ7S6Z_.js";import"./useTheme-DrTO_DRk.js";import"./useSlot-Nge6-EMU.js";import"./mergeSlotProps-sZF9W67M.js";import"./useControlled-DNBc9hrk.js";import"./getReactElementRef-DUpT5N-m.js";import"./Portal-BLikJhBv.js";import"./utils-BhTotuHU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DXdTwkgQ.js";import"./Button-BPX7NsmD.js";import"./index-rjMel0fo.js";import"./Box-Ca_dclTz.js";import"./Grid-CiV8r-oF.js";import"./isMuiElement-c2rAqbnw.js";import"./styled-Dcs2wRea.js";import"./Stack-CK_dWn5x.js";import"./Container-h1971dVV.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkVLmsyo.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bf13Qy6E.js";import"./Select-Hy7YqFc2.js";import"./SelectFocusSourceContext-CX9jhojZ.js";import"./Popover-C9B_5d2D.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DZ2a6j45.js";import"./debounce-Be36O1Ab.js";import"./Modal-B61PTYm1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CgPauin7.js";import"./Fade-BrnSbnNG.js";import"./Paper-CIIxPuZQ.js";import"./List-a_vVMaa5.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BbL3U0Hb.js";import"./OutlinedInput-BjryEflV.js";import"./FormHelperText-C7FrADGT.js";import"./FormControlLabel-DRNnFuPg.js";import"./Typography-sFl1f9yL.js";import"./Switch-DsQpNO6o.js";import"./SwitchBase-31BvtgwI.js";import"./Radio-Dy2mqGql.js";import"./RadioGroup-CNBCQsi2.js";import"./FormGroup-BurSUFFK.js";import"./Divider-DByQLpF0.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CsOWRe-2.js";import"./FormControl-DG3RaKjS.js";import"./Autocomplete-BhpA1eXd.js";import"./Close-BVTaMr4I.js";import"./usePreviousProps-BFgFkScX.js";import"./Chip-CJpCDrxT.js";import"./ListSubheader-CkJl914t.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Vt=["_Async"];export{i as _Async,Vt as __namedExportsOrder,Nt as default};
