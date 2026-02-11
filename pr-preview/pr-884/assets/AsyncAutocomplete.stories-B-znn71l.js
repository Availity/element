import{j as p}from"./iframe-BVv6e2Np.js";import{i as n}from"./index-B5sPRumM.js";import{A as m}from"./AsyncAutocomplete-BQymG8l1.js";import{Q as a}from"./suspense-Bi0zquSB.js";import{Q as s}from"./queryClient-DA2NZ8zG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzR1A3M5.js";import"./___vite-browser-external_commonjs-proxy-BF3gtoG_.js";import"./index-CFz_hkBg.js";import"./_toKey-C0b-dJUL.js";import"./Autocomplete-CJg5kRpa.js";import"./index-DLVtiJxK.js";import"./index-BJdoztUJ.js";import"./index-BiBDMnSv.js";import"./index-B4G_w09r.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DdboHVfF.js";import"./memoTheme-PshU1uu8.js";import"./styled-Bn_uYMrA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CAgTxRUA.js";import"./Tooltip-DzBLv92b.js";import"./useTheme-DDxdviwK.js";import"./useSlot-Dio4nhmD.js";import"./mergeSlotProps-C-9V1pWD.js";import"./useForkRef-QN_ofJ4G.js";import"./useTimeout-VBRAECgQ.js";import"./useControlled-D2of93L0.js";import"./useEventCallback-emf-njXD.js";import"./getReactElementRef-Dy4ZaQ26.js";import"./Portal-BwoQ5t2b.js";import"./utils-D_B0tNMS.js";import"./TransitionGroupContext-CL5aD017.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DYhjeFex.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcGJMyaC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BmS5gOfS.js";import"./CircularProgress-Pj_uAnf5.js";import"./Button-DHfmf7R6.js";import"./index-BqnVqtTN.js";import"./Box-DerM4oMw.js";import"./Grid-Bt9ySBei.js";import"./styled-CBIa6Uon.js";import"./isMuiElement-Cd1iR6Ah.js";import"./Stack-C99HnkMn.js";import"./Container-BDZyOzn-.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BgKjCqoz.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BAeGzom2.js";import"./Select-Dyb5oikR.js";import"./Menu-Bm9loH8N.js";import"./Popover-CEwjWQ9G.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-C-YQqgT8.js";import"./Modal-CAkb2EYM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-C4f2cZgH.js";import"./Fade-Y8hFLq3H.js";import"./Paper-CdGIIeGD.js";import"./List-Bg0xhiqI.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-qSa5VTtT.js";import"./OutlinedInput-DI3zgq5U.js";import"./FormHelperText-BrnALqdS.js";import"./FormControlLabel-DGBsJpdM.js";import"./Typography-DXGXRPqa.js";import"./Switch-9sJWqMky.js";import"./SwitchBase-lr7Awnj5.js";import"./RadioGroup-Fo5bGjwG.js";import"./Radio-DckZLIGy.js";import"./FormGroup-CU_RoCsb.js";import"./Divider-CDfQZRd7.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CW-5yjCX.js";import"./FormControl-aNwOyEUR.js";import"./Autocomplete-BO4s6zTc.js";import"./Close-C8sNO7mM.js";import"./usePreviousProps-Drjg7SHF.js";import"./Chip-BZuZXe0Q.js";import"./ListSubheader-CwM8WDIa.js";import"./useInfiniteQuery-D43c_VbL.js";import"./useBaseQuery-UcuCPBYM.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
