import{j as p}from"./iframe-D4l0qtta.js";import{i as l}from"./index-VY7D4fU8.js";import{A as a}from"./AsyncAutocomplete-AgSAcK8q.js";import{Q as c}from"./suspense-Cw5XrgzU.js";import{Q as u}from"./queryClient-B4Ypneio.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C-DxDp19.js";import"./___vite-browser-external_commonjs-proxy-xaDo7viE.js";import"./index-DuRQpI0H.js";import"./_toKey-Da4UATOv.js";import"./Autocomplete-DivLSU4Y.js";import"./index-dRAkZem_.js";import"./index-DNyVveUa.js";import"./index-DJKl12U0.js";import"./index-B-RlsP5T.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Domhqj7B.js";import"./memoTheme-BA7dV9ce.js";import"./styled-BTFFsjyJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CzvPe9hU.js";import"./Tooltip-CWqA7bV3.js";import"./useTheme-CeD1owOb.js";import"./useSlot-D-iz2SxY.js";import"./mergeSlotProps-DF_C76Yp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dd_PEYLR.js";import"./useTimeout-tDfAfQSP.js";import"./useControlled-Cq9ik7Uv.js";import"./useEventCallback-BZanBeRj.js";import"./getReactElementRef-CBOb2zug.js";import"./Portal-D2eOL5uX.js";import"./utils-C5eKUPpq.js";import"./TransitionGroupContext-CoIben92.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CDGpK8qC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-vTRylTTB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-caw8p1XZ.js";import"./CircularProgress-CNlJ1A1Z.js";import"./Button-c5qr7CJB.js";import"./index-BpTvn-wv.js";import"./Box-CbXkJEEm.js";import"./Grid-AzzeqWvx.js";import"./styled-CK-eMcBj.js";import"./isMuiElement-CH7W9SW2.js";import"./Stack-DeWONcZO.js";import"./Container-Cbdyqd46.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BOy5HPW6.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Cf7b7V2i.js";import"./OutlinedInput-C0jP2jLp.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select--IzqTXcD.js";import"./Menu-C__YMKvy.js";import"./Popover-CTlIoDyj.js";import"./mergeSlotProps-PW512166.js";import"./Modal--YBRLag_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-C4Qzx4Iq.js";import"./Fade-22-1AoWN.js";import"./Paper-DbNlwRfL.js";import"./List-CMRknLMF.js";import"./createSvgIcon-0ZTEW-tI.js";import"./FormHelperText-BC2JKs99.js";import"./FormControlLabel-DwCec4RA.js";import"./Typography-DQo__xQb.js";import"./Switch-Bu62HeQk.js";import"./SwitchBase-zo6P8E0k.js";import"./RadioGroup-DdFhp1NH.js";import"./Radio-BvlDOov9.js";import"./FormGroup-BUu0NSyx.js";import"./Divider-DYT8Z4PY.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DAq3bm2H.js";import"./FormControl-Dl-FK_rU.js";import"./Autocomplete-C9EPh9Ez.js";import"./Close-Db0Pijny.js";import"./usePreviousProps-CYafDiyH.js";import"./Chip-Z2n9wfS7.js";import"./ListSubheader-CY24UjLU.js";import"./useInfiniteQuery-CDZQqUBu.js";import"./useBaseQuery-B1JrSXU5.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const $t={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=i.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const to=["_Async"];export{i as _Async,to as __namedExportsOrder,$t as default};
