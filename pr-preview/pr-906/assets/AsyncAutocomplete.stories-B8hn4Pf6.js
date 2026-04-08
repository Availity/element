import{j as p}from"./iframe-CWp6xAJi.js";import{i as n}from"./index-CdDy2ze1.js";import{A as m}from"./AsyncAutocomplete-BeREt6z1.js";import{Q as a}from"./suspense-CiFeeshP.js";import{Q as s}from"./queryClient-BwlWFBTr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0YYC-dU.js";import"./___vite-browser-external_commonjs-proxy-OyBOwfD9.js";import"./index-BCW1wysz.js";import"./_toKey-Bjg_s0Hk.js";import"./Autocomplete-_sWD2Du4.js";import"./index-BceSKYPP.js";import"./index-52-MGCI2.js";import"./index-BiBDMnSv.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BE17mmZt.js";import"./memoTheme-Cd48oeI4.js";import"./styled-BbzXfeov.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Bxm1lbI1.js";import"./Tooltip-C9q2MrGF.js";import"./useTheme-DHWCGmhz.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./useTimeout-YuGHwSAC.js";import"./useControlled-D9oaenaI.js";import"./useEventCallback-DWzQfpRP.js";import"./getReactElementRef-C_Avcpz3.js";import"./Portal-v_NAREGo.js";import"./utils-D4ENFMIW.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DzjUqkkU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcXRPXis.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-QvXOsOsa.js";import"./CircularProgress-a2FiPD69.js";import"./Button-DheGOcXb.js";import"./index-DiK5u2m6.js";import"./Box-C01JMt70.js";import"./Grid-BEi4nMA-.js";import"./isMuiElement-CXCicdtK.js";import"./styled-Ck6GK9xN.js";import"./Stack-DilTTonM.js";import"./Container-CHapUF_w.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BXQlDb-z.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-hGDRNu7C.js";import"./Select-CeGHqpeG.js";import"./Menu-Dgz24AwM.js";import"./Popover-BPg-4WyH.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-Dxb_vIiW.js";import"./debounce-Be36O1Ab.js";import"./Modal-BPpm24UE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqFgtmAJ.js";import"./Fade-BHa9ONGT.js";import"./Paper-C5XDmwPa.js";import"./List-BpYrKy3Y.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BPSi4ajd.js";import"./OutlinedInput-B-1NmxdT.js";import"./FormHelperText-D5HQHcTB.js";import"./FormControlLabel-BIT2ITgz.js";import"./Typography-DAHmtciD.js";import"./Switch-B27HjCvE.js";import"./SwitchBase-BDjJ1Fzr.js";import"./Radio-BJKeIEsI.js";import"./RadioGroup-CurkXTE0.js";import"./FormGroup-F0R8oEct.js";import"./Divider-mFdRldcH.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DiBflCj4.js";import"./FormControl-CfNL2aL0.js";import"./Autocomplete-CgP0ceZG.js";import"./Close-DqjWgI2I.js";import"./usePreviousProps-CtOT8TqZ.js";import"./Chip-DDmOrr3t.js";import"./ListSubheader-Nkhz1VRp.js";import"./useInfiniteQuery-CpRitWw8.js";import"./useBaseQuery-C85RlgzR.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
