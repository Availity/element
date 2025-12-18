import{j as p}from"./iframe-HTo88Qah.js";import{i as l}from"./index-B6HxZE-P.js";import{A as a}from"./AsyncAutocomplete-CDAgdmKM.js";import{Q as c}from"./suspense-NwFbJ5O0.js";import{Q as u}from"./queryClient-T9m9GSZA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BChK4n1_.js";import"./___vite-browser-external_commonjs-proxy-BEWzl12g.js";import"./index-DG28nJkc.js";import"./_toKey-BWs6lgW2.js";import"./Autocomplete-B6lFKxE4.js";import"./index-B2zxD4O3.js";import"./index-BUXJSmUd.js";import"./index-DS1ZdVNz.js";import"./index-Bp1v9Z_f.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-E7njoD0w.js";import"./memoTheme-BOsLVKQV.js";import"./styled-DjA2FMTv.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-aYiA4GaY.js";import"./Tooltip-AdliQAtR.js";import"./useTheme-CndemxDm.js";import"./useSlot-O7mjHfs3.js";import"./mergeSlotProps-CVeY9kVm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-SriJrD.js";import"./useTimeout-BzMKXnUG.js";import"./useControlled-DAZnMUbd.js";import"./useEventCallback-skU3gh-c.js";import"./getReactElementRef-BupWyWHg.js";import"./Portal-CpErzDB6.js";import"./utils-C06-OhnX.js";import"./TransitionGroupContext-B9ftAZaO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cf38pxn0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZMzYKiR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5t8kESg.js";import"./CircularProgress-DZY0-sNj.js";import"./Button-CyUxXAKO.js";import"./index-jajfa-T1.js";import"./Box-D0j4-ZsT.js";import"./Grid-rOUx4HQp.js";import"./styled-qrQLN9Aj.js";import"./isMuiElement-dEqiUdHL.js";import"./Stack-BWf0eeeY.js";import"./Container-Cb74vs7z.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CKZ-ST5l.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Cr2usIhw.js";import"./OutlinedInput-MiCzJhYW.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-BdLjO0gU.js";import"./Menu-PYi1p1r0.js";import"./Popover-CT5XF8Yd.js";import"./mergeSlotProps-CBvO9dhe.js";import"./Modal-9Oi2445E.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DDvA0mPu.js";import"./Fade-C_QOMosM.js";import"./Paper-YwfGNSvh.js";import"./List-CmTfMQOa.js";import"./createSvgIcon-y0t4CXxH.js";import"./FormHelperText-CTGhF2oz.js";import"./FormControlLabel-DKw8_E53.js";import"./Typography-BCaLwMk6.js";import"./Switch-Bvuzim_x.js";import"./SwitchBase-Bjk21Qpk.js";import"./RadioGroup-COWjhrUF.js";import"./Radio-C63ghe3L.js";import"./FormGroup-D6bYwNR_.js";import"./Divider-Df0M282n.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CqgsanZz.js";import"./FormControl-DXmT49Z_.js";import"./Autocomplete-CODy---8.js";import"./Close-BBM8epMS.js";import"./usePreviousProps--sVz4hZX.js";import"./Chip-D_jLHy3-.js";import"./ListSubheader-WVOeGWOl.js";import"./useInfiniteQuery-DpQYWD8c.js";import"./useBaseQuery-t672XUsC.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-k0NEndgp.js";import"./index-DviwiyA1.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
