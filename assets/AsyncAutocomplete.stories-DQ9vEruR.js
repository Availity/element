import{j as p}from"./iframe-BXw3gXzi.js";import{i as n}from"./index-D-R_J93y.js";import{A as m}from"./AsyncAutocomplete-L6tWzTWQ.js";import{Q as a}from"./suspense-DiktpFJ7.js";import{Q as s}from"./queryClient-BgEvXfZK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ujimlIq_.js";import"./___vite-browser-external_commonjs-proxy-FWM20rQt.js";import"./index-CziuDJRf.js";import"./_toKey-WKv7aBz5.js";import"./Autocomplete-CzE7AqVv.js";import"./index-BnRExMZC.js";import"./index-CW8Uf0e3.js";import"./index-BiBDMnSv.js";import"./index-DQ-Pw2vZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-WyGfIbWv.js";import"./memoTheme-Cun1OYGu.js";import"./styled-B4C1j5cm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DejzIRML.js";import"./Tooltip-ByULunc2.js";import"./useTheme-BMbLtIQ2.js";import"./useSlot-ChptDOQ0.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./useTimeout-0uXpumKy.js";import"./useControlled-B4VTwyPs.js";import"./useEventCallback-3YhfTi0L.js";import"./getReactElementRef-DHOcIADn.js";import"./Portal-7KnvOddD.js";import"./utils-xtkVmQdP.js";import"./TransitionGroupContext-M8heGJda.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-yzZ17Wp2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DeurSYdO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BTnZicAm.js";import"./CircularProgress-DhFZnFeX.js";import"./Button-BgBpxWh8.js";import"./index-tCOiXdlf.js";import"./Box-BM1JqmYM.js";import"./Grid-BGtXNav_.js";import"./isMuiElement-HwGtkGEy.js";import"./styled-C8dNPj49.js";import"./Stack-BuTN3X4b.js";import"./Container-BCT1HrQN.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdgZp3W_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-v5C4S-YL.js";import"./Select--_x2H-6c.js";import"./Menu-CW4zJ6VU.js";import"./Popover-Bzr2tLUQ.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BLBn1dIn.js";import"./debounce-Be36O1Ab.js";import"./Modal-C_gnWSEE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D7s4TJBu.js";import"./Fade-D_YaJ4fg.js";import"./Paper-DAJ4kOlQ.js";import"./List-Cs9MPw4u.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon--3tSNQ0H.js";import"./OutlinedInput-BHzGOAt2.js";import"./FormHelperText-DL7htFBa.js";import"./FormControlLabel-Ckl0iH_4.js";import"./Typography-BaC1f153.js";import"./Switch-BD3lQCjm.js";import"./SwitchBase-DGpDYu1p.js";import"./Radio-BmXj6-yU.js";import"./RadioGroup-CrpTZ2V1.js";import"./FormGroup-v_02e0Td.js";import"./Divider-D_KSA0HU.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BBMe6aQj.js";import"./FormControl-BqJPZOpA.js";import"./Autocomplete-CJJJ1pjI.js";import"./Close-CAtJECmA.js";import"./usePreviousProps-B2_N8krC.js";import"./Chip-CQwiGa5s.js";import"./ListSubheader-Dme4ycWs.js";import"./useInfiniteQuery-BqXZ5Ejh.js";import"./useBaseQuery-D0c6b1VP.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
