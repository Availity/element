import{j as t}from"./iframe-V3tbPOwE.js";import{C as e}from"./Autocomplete-BwyHk1pA.js";import{B as i}from"./index-CheDZIlw.js";import{P as s}from"./index-Cdq8d4IM.js";import{T as a}from"./index-DSivALFp.js";import{G as l}from"./index-DBjuuRwi.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-6veOevKy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BD7oS05e.js";import"./index-JWsmx4AT.js";import"./index-teMVs_up.js";import"./index-MVgG_W0q.js";import"./index-DDGGRFDD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DMsEcqNG.js";import"./memoTheme-nYDz4AH7.js";import"./styled-Br8tiGNT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkW7GKiH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CkUw_ctj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CrxWULwR.js";import"./SelectFocusSourceContext-DV7K2vKu.js";import"./useSlot-JqPUkt86.js";import"./mergeSlotProps-nXLrBWqI.js";import"./useForkRef-CZXJqfUL.js";import"./useSlotProps-BFQRGr1E.js";import"./Popover-LG3JRuxX.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BYLHPY1g.js";import"./useTheme-kNyMIH6i.js";import"./utils-DJcf64yX.js";import"./TransitionGroupContext-BT8MRBaI.js";import"./useTimeout-BFosHs8Q.js";import"./getReactElementRef-jC5-igXX.js";import"./mergeSlotProps-CnUXTjg3.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bj2PA8Xo.js";import"./useEventCallback-BsNvdAGC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-lpfDs7Fh.js";import"./Fade-CfqPTD91.js";import"./Paper-CdPhUGdf.js";import"./List-VEKX0l2J.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DU3h8Asb.js";import"./createSvgIcon-CsNTB8qp.js";import"./OutlinedInput-CApj83lO.js";import"./FormHelperText-DpXYC3GS.js";import"./FormControlLabel-BuiDdDUC.js";import"./Typography-CpNf9PKA.js";import"./Switch-sFLjF5Ad.js";import"./SwitchBase-DJnb3nbp.js";import"./ButtonBase-BWZhrEZd.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-KNolnd1x.js";import"./RadioGroup-BnROJ1qm.js";import"./FormGroup-BS6CC4_B.js";import"./Stack-BhI6E9BW.js";import"./styled-DaY85gB9.js";import"./Box-CWUEJO1A.js";import"./Divider-CfhIjDdr.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField--eWJJv25.js";import"./FormControl-tp0UYwYk.js";import"./isMuiElement-Bojr2z3f.js";import"./Grid-Bw-kyyif.js";import"./useInfiniteQuery-tWV-gxSV.js";import"./suspense-Bd5Grz5f.js";import"./useBaseQuery-Bts2QRja.js";import"./index-Duf-tmLC.js";import"./index-CtNMuJ1a.js";import"./___vite-browser-external_commonjs-proxy-C6cQmOn5.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-h1jxDP_D.js";import"./Close-BuDRW0gl.js";import"./usePreviousProps-CSIHI738.js";import"./Tooltip-BqnFS_Iw.js";import"./Chip-DY7VvEmE.js";import"./IconButton-Cmdx9brD.js";import"./CircularProgress-1E0UYHmw.js";import"./ListSubheader-BaBRDWc_.js";import"./Button-DK2TX3S1.js";import"./Container-DuquqMVo.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
