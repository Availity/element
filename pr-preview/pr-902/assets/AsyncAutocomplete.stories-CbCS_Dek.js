import{j as p}from"./iframe-hulqVKFa.js";import{i as n}from"./index-CKDMRTl1.js";import{A as m}from"./AsyncAutocomplete-B_WxSW-N.js";import{Q as a}from"./suspense-DvAJhkuK.js";import{Q as s}from"./queryClient-BeWqNE-O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D23EGe5u.js";import"./___vite-browser-external_commonjs-proxy-DNDhTIwV.js";import"./index-BoMQfRhQ.js";import"./_toKey-CGmVVdEL.js";import"./Autocomplete-CmllOzyZ.js";import"./index-BjhwojTf.js";import"./index-CwQEE9jE.js";import"./index-BiBDMnSv.js";import"./index-CFZ7DghX.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-i9gddw4o.js";import"./memoTheme-B_nCzl8M.js";import"./styled-CYnX6RAa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CWJdyCdu.js";import"./Tooltip-CwFATdR1.js";import"./useTheme-C7AUirRA.js";import"./useSlot-CalbLJ3n.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useForkRef-BQz3TnTQ.js";import"./useTimeout-Bim6OzXz.js";import"./useControlled-maN10Goq.js";import"./useEventCallback-IcKGM0BT.js";import"./getReactElementRef-DCfmlyG2.js";import"./Portal-BqpYj0TQ.js";import"./utils-CqZ-bN0c.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CO5Qh0k_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D52dKoJw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-2bDflI9o.js";import"./CircularProgress-p22Pqfnj.js";import"./Button-BD9YMHcT.js";import"./index-BlNR_NWf.js";import"./Box-CyvodRNS.js";import"./Grid-CPl8rXDT.js";import"./isMuiElement-B2zjcqD7.js";import"./styled-QvSbzdTE.js";import"./Stack-B2rPYqjB.js";import"./Container-CNnb763M.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Buq9vnb5.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CY5egsXZ.js";import"./Select-CSBq7uz_.js";import"./Menu-BASAkWZI.js";import"./Popover-BiUSFDdq.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BYXPuP8C.js";import"./debounce-Be36O1Ab.js";import"./Modal-BIuYGRLg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-l3mPJCzo.js";import"./Fade-T6bIu7ga.js";import"./Paper-BVOs07DX.js";import"./List-CHNmHfLH.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-MyKUcFFT.js";import"./OutlinedInput-8C-NOWfH.js";import"./FormHelperText-CJHErJH9.js";import"./FormControlLabel-Dnvw7QmX.js";import"./Typography-COHcSKH7.js";import"./Switch-D6kkTZOZ.js";import"./SwitchBase-BXxnTvJc.js";import"./Radio-BCOKkKaa.js";import"./RadioGroup-DCnXM_Hp.js";import"./FormGroup-BDEQiySx.js";import"./Divider-DjTc7Vl7.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-opqoiQIi.js";import"./FormControl-BTDFP5sq.js";import"./Autocomplete-DhvE3ydP.js";import"./Close-xxpo3l9y.js";import"./usePreviousProps-7PxxK8iO.js";import"./Chip-S3gC5bxU.js";import"./ListSubheader-DOg5GPLj.js";import"./useInfiniteQuery-CFAstvPp.js";import"./useBaseQuery-CAfVOqrW.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
