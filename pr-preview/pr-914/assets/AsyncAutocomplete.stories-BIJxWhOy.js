import{j as p}from"./iframe-BAio8bRO.js";import{i as n}from"./index-CeF8IBRN.js";import{A as m}from"./AsyncAutocomplete-ZzgDKOzr.js";import{Q as a}from"./suspense-JDytfcG3.js";import{Q as s}from"./queryClient-D0leFjwS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RudpxiCl.js";import"./___vite-browser-external_commonjs-proxy-fC2KNp90.js";import"./index-cDutZPbR.js";import"./index-DcNlVx-A.js";import"./_toKey-Cn80klBW.js";import"./Autocomplete-DoH-cTKp.js";import"./index-CXnObOtK.js";import"./index-yxUFkiba.js";import"./index-BiBDMnSv.js";import"./index-D6CmWoDY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-tye3QKHe.js";import"./memoTheme-B5Zw--p6.js";import"./styled-BVlyzXC0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cu3Q3wdb.js";import"./Tooltip-hIKEgUI5.js";import"./useTheme-BlST_Otk.js";import"./useSlot-BVjxSlY9.js";import"./mergeSlotProps-CmGkLNGM.js";import"./useForkRef-DNDPTA8R.js";import"./useTimeout-BkgJttAJ.js";import"./useControlled-BkSKTHhF.js";import"./useEventCallback-9-WTFaLk.js";import"./getReactElementRef-C8WT4AXt.js";import"./Portal-DtZMvnVy.js";import"./utils-LXi-Tlok.js";import"./TransitionGroupContext-DZhFA06X.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CFXUmX-_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cgj-zrzq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ae9hTywr.js";import"./CircularProgress-DwO4_zrq.js";import"./Button-CfkShIuN.js";import"./index-q0NfFQ9-.js";import"./Box-D9uuWVv-.js";import"./Grid-t7gGqywk.js";import"./isMuiElement-AydbSc-U.js";import"./styled-EJoH7QSk.js";import"./Stack-bN5r8_lU.js";import"./Container-CV_lDoo_.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DzJu46U9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DkRYiQSC.js";import"./Select-CgPW8wBS.js";import"./Menu-CNZsUiwy.js";import"./Popover-DwmwO2CA.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-CA_Fws6O.js";import"./debounce-Be36O1Ab.js";import"./Modal-Cb932oqz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DUEOgCON.js";import"./Fade-D__YuxCd.js";import"./Paper-DW5lDWun.js";import"./List-BfAeB2nv.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BHdN4xjz.js";import"./OutlinedInput-BRrwvmjS.js";import"./FormHelperText-DXCvGRLv.js";import"./FormControlLabel-BTqQRKxw.js";import"./Typography-BPUxSRI8.js";import"./Switch-b6dmdWoZ.js";import"./SwitchBase-C_i35j5v.js";import"./Radio-99FOiw6S.js";import"./RadioGroup-BcF4x91b.js";import"./FormGroup-DD4jPXUp.js";import"./Divider-CSqQtEDI.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BC2Rk5jj.js";import"./FormControl-Bk8NkQjv.js";import"./Autocomplete--VVyWx7S.js";import"./Close-ExXnYhk-.js";import"./usePreviousProps-Ba6z9h2l.js";import"./Chip-BtAizNez.js";import"./ListSubheader-DDx7qULe.js";import"./useInfiniteQuery-DdFGXaIL.js";import"./useBaseQuery-DJ1ZKsDm.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Yt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Zt=["_Async"];export{i as _Async,Zt as __namedExportsOrder,Yt as default};
