import{j as p}from"./iframe-DPzbdwV6.js";import{i as n}from"./index-TLetgXB_.js";import{A as m}from"./AsyncAutocomplete-CbcYCIdo.js";import{Q as a}from"./suspense-Bc27LCGT.js";import{Q as s}from"./queryClient-DzFAzC5E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1vlwG0F.js";import"./___vite-browser-external_commonjs-proxy-CfRZ8xqb.js";import"./index-CgOhynjr.js";import"./_toKey-KMGDhlGU.js";import"./Autocomplete-DfxQAT9t.js";import"./index-ogxA5ZzC.js";import"./index-BTgjH9Py.js";import"./index-BiBDMnSv.js";import"./index-Dc5vJBpb.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DJ4ww3AR.js";import"./memoTheme-BPZzx3Fh.js";import"./styled-rDINGuMr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DWmIprsC.js";import"./Tooltip-BXHSE_Yz.js";import"./useTheme-CsAYvKS6.js";import"./useSlot-D5vL0YkG.js";import"./mergeSlotProps-C_Eyz2VC.js";import"./useForkRef-DK4-OTh4.js";import"./useTimeout-BEe3g1yB.js";import"./useControlled-B7b2C6zg.js";import"./useEventCallback-D6Y3GTd7.js";import"./getReactElementRef-KOzEHSpK.js";import"./Portal-BKsBZMKZ.js";import"./utils-C8GgNPFy.js";import"./TransitionGroupContext-_giaZQD1.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DqDqMweE.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-MOZEFIpK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DiUPj8iu.js";import"./CircularProgress-DahfViZv.js";import"./Button-DBTzQ06_.js";import"./index-IpBMU51L.js";import"./Box-Daga5vLj.js";import"./Grid-CYik0omM.js";import"./isMuiElement-D-kuf848.js";import"./styled-Ct-kKLkW.js";import"./Stack-CQtcIy6Q.js";import"./Container-o6DB5o93.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-QN0beRBt.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-1JXYARsd.js";import"./Select-DSYIp7jG.js";import"./Menu-BG2RWp3K.js";import"./Popover-CvqPE70p.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-B7wEujIz.js";import"./debounce-Be36O1Ab.js";import"./Modal-Dq2bUZTV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-a7fTNHAx.js";import"./Fade-BSRsDsAD.js";import"./Paper-Coy0maCu.js";import"./List-BDr2LImM.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bjho5j0_.js";import"./OutlinedInput-FZJmt1fs.js";import"./FormHelperText-f01bZ0iU.js";import"./FormControlLabel-CkCBAxOz.js";import"./Typography-D5TdBLOe.js";import"./Switch-DvRxi_iA.js";import"./SwitchBase-xPqcMqos.js";import"./Radio-BhnduWGS.js";import"./RadioGroup-6nf6fmGM.js";import"./FormGroup-SQvMgCQU.js";import"./Divider-C3C8H99N.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Dhwdk9CZ.js";import"./FormControl-BS7CnZqa.js";import"./Autocomplete-CzRwv72X.js";import"./Close-cix2vlv_.js";import"./usePreviousProps-BBnfYWkZ.js";import"./Chip-CUZ_8sc0.js";import"./ListSubheader-LszFVt7d.js";import"./useInfiniteQuery-BeOYf0sM.js";import"./useBaseQuery-CRZ_Ppu5.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
