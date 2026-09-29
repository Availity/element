import{j as p}from"./iframe-ClyInPD8.js";import{i as n}from"./index-0GE0S2-b.js";import{Q as a}from"./suspense-DEEU3iMy.js";import{A as e}from"./AsyncAutocomplete-Dswh0odM.js";import{Q as s}from"./queryClient-D0AahJB2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDDPJt8D.js";import"./___vite-browser-external_commonjs-proxy-4ZAXEZ6z.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-Z37EAIoh.js";import"./useBaseQuery-CPDgvy8s.js";import"./Autocomplete-D5cq7kfe.js";import"./index-C9_Meo4o.js";import"./index-BBWIuguO.js";import"./index-CrcoPoGw.js";import"./index-W6CH2PNc.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DfVeW2fT.js";import"./memoTheme-CULMZTzm.js";import"./styled-D7PoFJCi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cl8nDLSA.js";import"./IconButton-3p_Hzj1M.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CL-JJlq6.js";import"./useTimeout-Bv1knD6m.js";import"./TransitionGroupContext-DtZ8GaDC.js";import"./useForkRef-CWYhWoid.js";import"./useEventCallback-CQShbQqM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cfnaefvx.js";import"./Tooltip-D3BuTBo3.js";import"./useTheme-Cf-PtNfg.js";import"./useSlot-D46kf6z6.js";import"./mergeSlotProps-DRm6mdtU.js";import"./useControlled-CId5aZ2_.js";import"./getReactElementRef-Cs8-_4yh.js";import"./Portal-6M9c9Gfh.js";import"./utils-DIFk0nuU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D2_jX090.js";import"./Button-C1rBrVEa.js";import"./index-zd_NREJJ.js";import"./Box-eNTJbR1-.js";import"./Grid-CgIe3-7e.js";import"./isMuiElement-Bh35qceP.js";import"./styled-XkY1prTM.js";import"./Stack-nuzf0IeA.js";import"./Container-DALlxZP3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D-Th-UGt.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-uCK0rOs6.js";import"./Select-K3icrudd.js";import"./SelectFocusSourceContext-DyH9g7NM.js";import"./Popover-DPOqsvJI.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-m5IYYthV.js";import"./debounce-Be36O1Ab.js";import"./Modal-B7upLf36.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DGkZDyow.js";import"./Fade-5LrOnsLV.js";import"./Paper-2PN-0rlq.js";import"./List-CeyWtXC0.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-C9dBkbUF.js";import"./OutlinedInput-DSggnpCx.js";import"./FormHelperText-DIonPlvk.js";import"./FormControlLabel-xIGoThDj.js";import"./Typography-D3903seB.js";import"./Switch-CCHprpAt.js";import"./SwitchBase-DQRax_vO.js";import"./Radio--iMoPkP6.js";import"./RadioGroup-CB2wjVzu.js";import"./FormGroup-3MIP52gK.js";import"./Divider-DWJuH81S.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BNaoQOjp.js";import"./FormControl-rEZ7rltD.js";import"./Autocomplete-E1snY22m.js";import"./Close-cAlMT6qa.js";import"./usePreviousProps-6Hxe3MN0.js";import"./Chip-BfTKcrZX.js";import"./ListSubheader-BYq0YIVh.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
