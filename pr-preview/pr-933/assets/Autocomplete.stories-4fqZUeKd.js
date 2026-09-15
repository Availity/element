import{j as t}from"./iframe-CwO-jD2r.js";import{C as e}from"./Autocomplete-BsiiNhV-.js";import{B as i}from"./index-CNETp13n.js";import{P as s}from"./index-BC-YgIAb.js";import{T as a}from"./index-BCN7JX9J.js";import{G as l}from"./index-DDnCuFzs.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-yfdFB1FZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BD_iXxq3.js";import"./index-BDC_3Rxw.js";import"./index-BA97GnXb.js";import"./index-CrcoPoGw.js";import"./index-BN6UcWAE.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVo5jYj3.js";import"./memoTheme-BFKi1h0L.js";import"./styled-oLigdm2H.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BVvcn0pm.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CiqVAws-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DpBSTnvT.js";import"./SelectFocusSourceContext-CyLTWWv_.js";import"./useSlot-H46dGhkF.js";import"./mergeSlotProps-BwWI2lDY.js";import"./useForkRef-C_Onx5Be.js";import"./useSlotProps-CxdF0UKw.js";import"./Popover-B5g1qt2p.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Bdc5oVT9.js";import"./useTheme-COk7r_Ee.js";import"./utils-4BcLErhI.js";import"./TransitionGroupContext-B7p21pCQ.js";import"./useTimeout-fSFkMMHB.js";import"./getReactElementRef-BccMI9lA.js";import"./mergeSlotProps-BuhqGTB0.js";import"./debounce-Be36O1Ab.js";import"./Modal-pR2rfcmc.js";import"./useEventCallback-DAOE043T.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CkQmcNu2.js";import"./Fade-BMJzwZSG.js";import"./Paper-4GVPiycN.js";import"./List-C1oZuEzd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-D7MGwIra.js";import"./createSvgIcon-s4imERVo.js";import"./OutlinedInput-ClLFrf98.js";import"./FormHelperText-BOeTOdIO.js";import"./FormControlLabel-C2jYLJgd.js";import"./Typography-BF7hwO0t.js";import"./Switch-B9atGEQZ.js";import"./SwitchBase-Bpbf_DGL.js";import"./ButtonBase-CG4pUtur.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Dge-NWMw.js";import"./RadioGroup-Bs8Dm3MU.js";import"./FormGroup-CQLSU16C.js";import"./Stack-CHmf-yYC.js";import"./styled-CUc8450O.js";import"./Box-aCkC6O_c.js";import"./Divider-BSXm1Pap.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D6tAIVPa.js";import"./FormControl-BiLy_IKp.js";import"./isMuiElement-DiCrCwGT.js";import"./Grid-BLIKAx1P.js";import"./useInfiniteQuery-qgbg9bQd.js";import"./suspense-8vFPQq3p.js";import"./useBaseQuery-DEfbMomq.js";import"./index-BtS5UmTE.js";import"./index-Dfh3fbTs.js";import"./___vite-browser-external_commonjs-proxy-C7rC1-Av.js";import"./index-BDHUarCl.js";import"./Autocomplete-CZQdwgI-.js";import"./Close-BM0Z-puH.js";import"./usePreviousProps-z94_ZVXm.js";import"./Tooltip-DWOWlEqB.js";import"./Chip-BDv68K1E.js";import"./IconButton-6AH5JngU.js";import"./CircularProgress-BJ26xdy5.js";import"./ListSubheader-BNfZTMRy.js";import"./Button-BLrfDWuG.js";import"./Container-BPLOD5On.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
