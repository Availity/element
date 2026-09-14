import{j as p}from"./iframe-DPnTQG0G.js";import{i as n}from"./index-DREgSyd0.js";import{Q as a}from"./suspense-Bx1DnDYl.js";import{A as e}from"./AsyncAutocomplete-D5N1u6nO.js";import{Q as s}from"./queryClient-D0hQ_bZl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lHfpG96z.js";import"./___vite-browser-external_commonjs-proxy-tOSw4hYJ.js";import"./index-ouDB7UmS.js";import"./useInfiniteQuery-CY6lWNgh.js";import"./useBaseQuery-9HjyhPhf.js";import"./Autocomplete-Xvl8jKGp.js";import"./index-DuOb_E4r.js";import"./index-Q8djF-9e.js";import"./index-CrcoPoGw.js";import"./index-DyrAPJez.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BFzjjt5D.js";import"./memoTheme-CMfgY8Ge.js";import"./styled-B3r2fqeJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B7O5cvxg.js";import"./IconButton-DddGcaV5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C2F6Y1bD.js";import"./useTimeout-CUwsoYp8.js";import"./TransitionGroupContext-BMEataXp.js";import"./useForkRef-B-MdRiiy.js";import"./useEventCallback-jzoMkJU2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BvBmh-xb.js";import"./Tooltip-oUWx7pT_.js";import"./useTheme-DIidgVEY.js";import"./useSlot-CA9InCnB.js";import"./mergeSlotProps-BoQagQxu.js";import"./useControlled-DDdRMWyJ.js";import"./getReactElementRef-Bl_fL_Lc.js";import"./Portal-DFXYbKgm.js";import"./utils-BzkU8P15.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTR8zjwb.js";import"./Button-D8f966mF.js";import"./index-CsNDMedn.js";import"./Box-BwT9D1D3.js";import"./Grid-C4qiCYbq.js";import"./isMuiElement-BqwjpEeh.js";import"./styled-DTgt2DI8.js";import"./Stack-CUFjbj2M.js";import"./Container-Dg-G3qaT.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-T7G46Ktc.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CD258ohF.js";import"./Select-Bt2NJ17i.js";import"./SelectFocusSourceContext-CLuNS6BP.js";import"./Popover-BYyO-8oX.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-AmPjT2RW.js";import"./debounce-Be36O1Ab.js";import"./Modal-CcK1uO_P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ByDG0JKY.js";import"./Fade-Bvo7Nuzl.js";import"./Paper-CfCnRjNa.js";import"./List-Dof0ngef.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-o5Z7wc8L.js";import"./OutlinedInput-C590kWAS.js";import"./FormHelperText-BuntHaUt.js";import"./FormControlLabel-M3VpV2dL.js";import"./Typography-BE3nbQ7X.js";import"./Switch-CESQP3ju.js";import"./SwitchBase-CsMfMGxT.js";import"./Radio-CPnlDQ7O.js";import"./RadioGroup-CakEV_i2.js";import"./FormGroup-tGhy1mwH.js";import"./Divider-BJPFleRo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CTunm3jM.js";import"./FormControl-C7sHhzIq.js";import"./Autocomplete-CqD_RXC9.js";import"./Close-Bho1xGhu.js";import"./usePreviousProps-CGnEah-x.js";import"./Chip-cQNEburp.js";import"./ListSubheader-BhpaYhZ6.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
