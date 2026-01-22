import{j as p}from"./iframe-CFnK--5_.js";import{i as n}from"./index-qsLlyiUT.js";import{A as m}from"./AsyncAutocomplete-DFE9UKFS.js";import{Q as a}from"./suspense-gVPSeOIR.js";import{Q as s}from"./queryClient-BoHPAI0l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DSDLHfht.js";import"./___vite-browser-external_commonjs-proxy-DcVX7utr.js";import"./index-BhKrGy8e.js";import"./_toKey-CDTDXh5w.js";import"./Autocomplete-CY46Mbrx.js";import"./index-wdthsi8g.js";import"./index-DrG6kryt.js";import"./index-BiBDMnSv.js";import"./index-B8FQNIIr.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BS2_Q9nG.js";import"./memoTheme-DHqcPMUG.js";import"./styled-B_SR2Ytp.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-JryDx5j_.js";import"./Tooltip-D7zb4Xpv.js";import"./useTheme-BUU7R_-h.js";import"./useSlot-Bcbuphfr.js";import"./mergeSlotProps-CjkbnSEr.js";import"./useForkRef-Di9rDSJ_.js";import"./useTimeout-C_X7UAwn.js";import"./useControlled-QCqU36h_.js";import"./useEventCallback-CAGgRosr.js";import"./getReactElementRef-guKTxCdd.js";import"./Portal-By2AWbtS.js";import"./utils-DAiY7LDj.js";import"./TransitionGroupContext-D3GUir9f.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-3SA_4L0x.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DDlS7gn-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BaxBneFE.js";import"./CircularProgress-DUyilEJx.js";import"./Button-CFFdP_-2.js";import"./index-CTUH8f9W.js";import"./Box-CzpKZwgR.js";import"./Grid-sJL0YzUx.js";import"./styled-0UPDl72R.js";import"./isMuiElement-CSdCdkNb.js";import"./Stack-B65FEu5Y.js";import"./Container-H7u83N50.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxmsTci0.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DJceSmmG.js";import"./Select-BYNd40Es.js";import"./Menu-PVr7rvfs.js";import"./Popover-BcL-oPoN.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BbOuZYXd.js";import"./Modal-Dz8FS_X7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BW7XWXju.js";import"./Fade-DuAG_vf9.js";import"./Paper-0nNMytNf.js";import"./List-C3NHgsZM.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BW1yD8n1.js";import"./OutlinedInput-BfiYytvL.js";import"./FormHelperText-CpKPjCPu.js";import"./FormControlLabel-BiBG1MyE.js";import"./Typography-CAi-X6a_.js";import"./Switch-CRsbDZ2t.js";import"./SwitchBase-Go4xKq43.js";import"./RadioGroup-DzDfSE_s.js";import"./Radio-CyZ0qGfy.js";import"./FormGroup-DvOiGmSW.js";import"./Divider-qHDQ2Pf0.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-VsC-w_X4.js";import"./FormControl-LoBeFHez.js";import"./Autocomplete-CLOsFfeE.js";import"./Close-BXUfy1bF.js";import"./usePreviousProps-BszMjEVO.js";import"./Chip-DVzQezv2.js";import"./ListSubheader-iMlaIQn9.js";import"./useInfiniteQuery-UOqyycFk.js";import"./useBaseQuery-Yvz1Gavo.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
