import{j as t}from"./iframe-BP_6obq-.js";import{C as e}from"./Autocomplete-ChbL3irD.js";import{B as i}from"./index-D0xPWEah.js";import{P as s}from"./index-BcQUJw-W.js";import{T as a}from"./index-EoJdXtZk.js";import{G as l}from"./index-Cyg8Zoy-.js";import{b as n,a as d}from"./Types-Uqfp7fgP.js";import{u,F as c}from"./index.esm-D-237LQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL2Opjvc.js";import"./index-Btgn3iS_.js";import"./index-OtLd_hTL.js";import"./index-BiBDMnSv.js";import"./index-CnReW6m-.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CnHEyztA.js";import"./memoTheme-BSboZUOu.js";import"./styled-tyPDC8H3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CiSkpeaB.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CcVPoqIg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Yr3aFb9D.js";import"./Menu-B16pZnWM.js";import"./useSlot-CmZQLFXT.js";import"./mergeSlotProps-8ro87pMD.js";import"./useForkRef-DOgu7oQ4.js";import"./useSlotProps-CRXG0rmu.js";import"./Popover-B8-deUWB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-XICOo1di.js";import"./useTheme-DbBiTE4S.js";import"./utils-fRJUoSLW.js";import"./TransitionGroupContext-B3nL2djk.js";import"./useTimeout-CSJtp0Y8.js";import"./getReactElementRef-CcD8R4QN.js";import"./mergeSlotProps-C4cSFGrS.js";import"./debounce-Be36O1Ab.js";import"./Modal-BoTJ9TiT.js";import"./useEventCallback-BD_ANQY0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BmoQCgqO.js";import"./Fade-C9R9e0Yq.js";import"./Paper-00-tiWk7.js";import"./List-DIXN3EWs.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DHSx-hEg.js";import"./createSvgIcon-C8pu6ftq.js";import"./OutlinedInput-BvbUZoKB.js";import"./FormHelperText-DlNTsgkP.js";import"./FormControlLabel-PcokZr4D.js";import"./Typography-xBYBi8Ml.js";import"./Switch-BDYdkdO0.js";import"./SwitchBase-Cy3ktZMy.js";import"./ButtonBase-8n2sjZ5K.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BmUp1QZh.js";import"./RadioGroup-DELYNiGz.js";import"./FormGroup-B81_w-JB.js";import"./Box-CrUjzboj.js";import"./Divider-OjstwTer.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CMlfGjCP.js";import"./styled-VCZNIqfv.js";import"./TextField-DR1rc2We.js";import"./FormControl-DtAGeh-k.js";import"./isMuiElement-Dpdrf9tp.js";import"./Grid-DuXHbjPr.js";import"./index-2TcWn4Qj.js";import"./index-VEgrAlvv.js";import"./___vite-browser-external_commonjs-proxy-Dja11nmy.js";import"./index-BZaeAX2W.js";import"./_toKey-BxRmHzy4.js";import"./Autocomplete-VzDIIHWB.js";import"./Close-DIHV7Ym5.js";import"./usePreviousProps-LRVoUgfB.js";import"./Tooltip-DfZ6DZ9O.js";import"./Chip-BMjZNRnO.js";import"./IconButton-DsvJwMgL.js";import"./CircularProgress-DALVNgNR.js";import"./ListSubheader-D6cdkpE-.js";import"./useInfiniteQuery-cQOXiyDr.js";import"./useBaseQuery-DaHqbyNN.js";import"./suspense-BlUycdrQ.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-DKYxn39A.js";import"./Container-CMlBc6YM.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const to=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,to as __namedExportsOrder,$t as default};
