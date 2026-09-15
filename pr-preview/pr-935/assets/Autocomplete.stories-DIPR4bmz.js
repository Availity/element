import{j as t}from"./iframe-CWY3iD4k.js";import{C as e}from"./Autocomplete-Y5fLARco.js";import{B as i}from"./index-CFwKy-vk.js";import{P as s}from"./index-Dvb6q66Y.js";import{T as a}from"./index-B87fX2m4.js";import{G as l}from"./index-CH36QgIT.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-psktg0ka.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dz5h2fZ4.js";import"./index-CsrKYWWK.js";import"./index-DsnzGN7g.js";import"./index-CrcoPoGw.js";import"./index-BzSYwNd-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DKNFXPcY.js";import"./memoTheme-DrmgfhiZ.js";import"./styled-CIfQzxdD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Z07liIv_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-wbjgmvhY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DVpJrfTw.js";import"./SelectFocusSourceContext-C5AxKvUw.js";import"./useSlot-jGeM5BDq.js";import"./mergeSlotProps-DYpSnyrH.js";import"./useForkRef-DtxHKGyT.js";import"./useSlotProps-DqKnkovT.js";import"./Popover-Fhuog7vE.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-GTIXf_ni.js";import"./useTheme-BBG77Eif.js";import"./utils-uPZOnv02.js";import"./TransitionGroupContext-BKIhkECl.js";import"./useTimeout-8ubSeoYI.js";import"./getReactElementRef-DgEYPRe_.js";import"./mergeSlotProps-CH3-0yIT.js";import"./debounce-Be36O1Ab.js";import"./Modal-BW2dyGsc.js";import"./useEventCallback-DHih-p6k.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CXYVCyew.js";import"./Fade-DPNQjbRR.js";import"./Paper-dLVuKHPb.js";import"./List-2Vo6P9AC.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CIbXyyiC.js";import"./createSvgIcon-DumzlQmL.js";import"./OutlinedInput-DdNeAm6I.js";import"./FormHelperText-DrighLwE.js";import"./FormControlLabel-BTjj02X-.js";import"./Typography-DdnCOrzM.js";import"./Switch-XAbrm4Bm.js";import"./SwitchBase-LkmlHlRJ.js";import"./ButtonBase-BVW6-IPM.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D1gt4lAJ.js";import"./RadioGroup-DJo27srd.js";import"./FormGroup-CwKuENeS.js";import"./Stack-CDV8c2Ym.js";import"./styled-DiOSWYDP.js";import"./Box-W_K2m7mS.js";import"./Divider-dym_m635.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-C0h0Nbky.js";import"./FormControl-C272fr_E.js";import"./isMuiElement-CITzrPa4.js";import"./Grid-Dpddp4dd.js";import"./useInfiniteQuery-Cs7e6ZSK.js";import"./suspense-EgoRPU0Z.js";import"./useBaseQuery-BV3OZePV.js";import"./index-ChpPGdwe.js";import"./index-DMZHGelP.js";import"./___vite-browser-external_commonjs-proxy-CLqNAulC.js";import"./index-2SzxyhSV.js";import"./Autocomplete-BYaci_IH.js";import"./Close-Be9fCZVr.js";import"./usePreviousProps-DDobeo2Z.js";import"./Tooltip-B3bZKYVT.js";import"./Chip-kPc5s1ff.js";import"./IconButton-CKcF2qnA.js";import"./CircularProgress-Dd-jZUAB.js";import"./ListSubheader-9tE9Fdsz.js";import"./Button-CdHEuVuq.js";import"./Container-O7CLblpO.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledAutocomplete {...args} />
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          {methods?.formState?.isSubmitSuccessful ? <Paper sx={{
          padding: '1.5rem',
          marginTop: '1.5rem'
        }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper> : null}
        </form>
      </FormProvider>;
  },
  args: {
    name: 'controlledAutocomplete',
    options: ['Option 1', 'Option 2'],
    rules: {
      required: 'This is required.'
    },
    FieldProps: {
      label: 'Autocomplete Label'
    }
  }
}`,...r.parameters?.docs?.source}}};const Zt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Zt as __namedExportsOrder,Yt as default};
