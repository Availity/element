import{j as p}from"./iframe-Cdk6lpWs.js";import{i as n}from"./index-CENY-smM.js";import{A as m}from"./AsyncAutocomplete-wKOZu5SD.js";import{Q as a}from"./suspense-CeE3uZb4.js";import{Q as s}from"./queryClient-CpBavhNx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE_PhRIn.js";import"./___vite-browser-external_commonjs-proxy-liDk0pUO.js";import"./index-Bf5PUARD.js";import"./_toKey-Dw8Dv9OP.js";import"./Autocomplete-qJrpaZI8.js";import"./index-DcU0OQlU.js";import"./index-BsjSeSSH.js";import"./index-BiBDMnSv.js";import"./index-3GTxF1kd.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BMF15TUB.js";import"./memoTheme-Dnmlp1j3.js";import"./styled-Da4jwHSl.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CywYuil6.js";import"./Tooltip-BgHK4L6p.js";import"./useTheme-OiEjV3So.js";import"./useSlot-D-PxlIN3.js";import"./mergeSlotProps-DMc6LXK-.js";import"./useForkRef-BBp7hlnJ.js";import"./useTimeout-CIy7F0jL.js";import"./useControlled-QHn5S2wL.js";import"./useEventCallback-vVwk_Y3I.js";import"./getReactElementRef-ABpHVkKM.js";import"./Portal-Ci08Bzea.js";import"./utils-DiARjLYz.js";import"./TransitionGroupContext-DcA7Ut_f.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CRphJa0r.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-2-tk2V1a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CJIyK2Pl.js";import"./CircularProgress-CILK_PUp.js";import"./Button-CkMj2wnd.js";import"./index-Bw-mxMFV.js";import"./Box-BUETqROo.js";import"./Grid-D_4fODgZ.js";import"./styled-BDQK8zLY.js";import"./isMuiElement-DCHxCuAf.js";import"./Stack-CISAqHYT.js";import"./Container-BZnG0h-h.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BwiCP9Z9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CAkCGBTI.js";import"./Select-CQWhIYrJ.js";import"./Menu-dXNiq2iy.js";import"./Popover-DMn3WhmR.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Cgqp3Cpl.js";import"./Modal-C-Sdy15n.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BehU8qli.js";import"./Fade-B5dkP1J3.js";import"./Paper-CO31t9g6.js";import"./List-Dcbm-z_I.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-1kVfY1hj.js";import"./OutlinedInput-BbAI9Vq7.js";import"./FormHelperText-DhYKundP.js";import"./FormControlLabel-CgHFrAmG.js";import"./Typography-BiMhXRVd.js";import"./Switch-Bzq6IxhW.js";import"./SwitchBase-eP1OYkAc.js";import"./RadioGroup-C-01PQVx.js";import"./Radio-ClP34CLy.js";import"./FormGroup-BjXhw4n-.js";import"./Divider-CbIu_a9X.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CLmrxOGk.js";import"./FormControl-D3nN2vAJ.js";import"./Autocomplete-B3wUrfG2.js";import"./Close-DI06AlJO.js";import"./usePreviousProps-iEkvllIp.js";import"./Chip-BckeqeRs.js";import"./ListSubheader-Dlyu8uQ2.js";import"./useInfiniteQuery-CYqnjphH.js";import"./useBaseQuery-DJNx3KsL.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
