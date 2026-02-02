import{j as p}from"./iframe-BACK_0qL.js";import{i as n}from"./index-DTBt7OUq.js";import{A as m}from"./AsyncAutocomplete-BEh4_Vyi.js";import{Q as a}from"./suspense-Ds-UIyvc.js";import{Q as s}from"./queryClient-BtxDROQG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8NIjhp6.js";import"./___vite-browser-external_commonjs-proxy-DTUPtHuW.js";import"./index-BYBttBtj.js";import"./_toKey-IUaBX5xF.js";import"./Autocomplete-C01iyYXU.js";import"./index-CKELVI-g.js";import"./index-CVUi_W90.js";import"./index-BiBDMnSv.js";import"./index-CThJnamY.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BWD4KGVI.js";import"./memoTheme-CehCTkMp.js";import"./styled-CILYMfR2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DezS3mgp.js";import"./Tooltip-CvzAHSPe.js";import"./useTheme-CAH-7WS1.js";import"./useSlot-4KwJ1ZEX.js";import"./mergeSlotProps-Ce5vEJyz.js";import"./useForkRef-COVhBD0c.js";import"./useTimeout-Bbnn395Q.js";import"./useControlled-Bvcrhgjz.js";import"./useEventCallback-B1QjfuHc.js";import"./getReactElementRef-cseQ0t00.js";import"./Portal-BBUkHp6C.js";import"./utils-CTnKgbLp.js";import"./TransitionGroupContext-B4j_r9NY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DdDv6txA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-fOR7z52u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CDXMi9Z2.js";import"./CircularProgress-BxeLfgty.js";import"./Button-DJ1l2vuX.js";import"./index-BgUu0nys.js";import"./Box-yoY0NcWx.js";import"./Grid-BgvciMyj.js";import"./styled-D6EtJyjy.js";import"./isMuiElement-9m4N3JlX.js";import"./Stack-BZ18XAbQ.js";import"./Container-DsEO0A5x.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dno3GiSo.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BhxRA0Wm.js";import"./Select-7via2PWA.js";import"./Menu-BLYO1-4m.js";import"./Popover-1PzWGKLc.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Bu0K3qzP.js";import"./Modal-DwWll_wO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-88X4YLU1.js";import"./Fade-BOPFrwB9.js";import"./Paper-DbocNi97.js";import"./List-CHkCl1_C.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BJ8pbv3g.js";import"./OutlinedInput-BBATfXzR.js";import"./FormHelperText-BT3PilzM.js";import"./FormControlLabel-DzNIFIFQ.js";import"./Typography-Bcc0vKQ7.js";import"./Switch-BaH0feTf.js";import"./SwitchBase-BSY6ujsV.js";import"./RadioGroup-DkdKL8fz.js";import"./Radio-B_eeQFe2.js";import"./FormGroup-CfSlpII8.js";import"./Divider-Oendm3Q_.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-ClxStYOr.js";import"./FormControl-DSY8Auwb.js";import"./Autocomplete-CIzh1rW1.js";import"./Close-DONNORYt.js";import"./usePreviousProps-DroQ701s.js";import"./Chip-CuJsNABn.js";import"./ListSubheader-CQe4v6Yw.js";import"./useInfiniteQuery-A58buKYY.js";import"./useBaseQuery-DV4mseBL.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
