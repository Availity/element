import{j as p}from"./iframe-DF1q2aaL.js";import{i as l}from"./index-YlfiJdep.js";import{A as a}from"./AsyncAutocomplete-BAn26Lu9.js";import{Q as c}from"./suspense-D2jJ5ZoL.js";import{Q as u}from"./queryClient-DEpNktwJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CNpGYZ4b.js";import"./___vite-browser-external_commonjs-proxy-BDFX1rAg.js";import"./index-BmlCcuES.js";import"./_toKey-zNE1Oh7L.js";import"./Autocomplete-pqKUYzjT.js";import"./index-DJ8A6Uc2.js";import"./index-DOuKqbND.js";import"./index-DS1ZdVNz.js";import"./index-DJNX-Iyq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DB8Z1ZTq.js";import"./memoTheme-BD6H9365.js";import"./styled-CFEXa4qH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D2mEmfXN.js";import"./Tooltip-BXhUmSeH.js";import"./useTheme-C0GFliqz.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-TFDBL_.js";import"./useTimeout-CJLBifOK.js";import"./useControlled-C2txOzyk.js";import"./useEventCallback-C9NbUrxX.js";import"./getReactElementRef-Cr3R6gAV.js";import"./Portal-CbFePWP9.js";import"./utils-BdM8s10D.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B0ZOsC4g.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-K-5rBd1A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D5OUD9Sm.js";import"./CircularProgress-DkK8nyO-.js";import"./Button-B9ufjNyc.js";import"./index-DCToeNHS.js";import"./Box-CIJZFnEp.js";import"./Grid-BQHRv1eX.js";import"./styled-PDED6P24.js";import"./isMuiElement-Q-8wUiYz.js";import"./Stack--jn-4dia.js";import"./Container-CTcWCZH6.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-D577_Nqf.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ByL3kvVY.js";import"./OutlinedInput-BCsojIk-.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-Chgl2RF6.js";import"./Menu-CmYraULs.js";import"./Popover-Dip1991W.js";import"./mergeSlotProps-bUytW4Ka.js";import"./Modal-BadjnIQl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Ck1pJi37.js";import"./Fade-CQtVaZQb.js";import"./Paper-DZhAfepD.js";import"./List-D-4vELaV.js";import"./createSvgIcon-DzcieuLS.js";import"./FormHelperText-BITEPghI.js";import"./FormControlLabel-D1O_4yuP.js";import"./Typography-cWmdXt40.js";import"./Switch-DurZW9YG.js";import"./SwitchBase-iVmERgWS.js";import"./RadioGroup-CIUS5EVT.js";import"./Radio-DHSYbRtv.js";import"./FormGroup-CcYCP0zR.js";import"./Divider-C6IIcVBl.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-pOMUEs8Y.js";import"./FormControl-8Z-xvurn.js";import"./Autocomplete-Dxh-FODj.js";import"./Close-DyTYpaPw.js";import"./usePreviousProps-CgnJE7rE.js";import"./Chip-D1hybGvz.js";import"./ListSubheader-B8HMwgeJ.js";import"./useInfiniteQuery-D5-fY4Q3.js";import"./useBaseQuery-34znJ1ZX.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-fkdObIec.js";import"./index-59p-ZqwA.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=i.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const ro=["_Async"];export{i as _Async,ro as __namedExportsOrder,oo as default};
