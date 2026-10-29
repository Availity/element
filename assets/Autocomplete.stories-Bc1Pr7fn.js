import{j as t}from"./iframe-CLut6yOe.js";import{C as e}from"./Autocomplete-L7VGFP5Z.js";import{B as i}from"./index-DNgDR8tQ.js";import{P as s}from"./index-B1V0ahmp.js";import{T as a}from"./index-DmhD3hPK.js";import{G as l}from"./index-BGYc3edq.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-xFE0TLfu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CV8ClOoW.js";import"./index-CI4h3JAT.js";import"./index-DroMy-PZ.js";import"./index-MVgG_W0q.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C4ZzvvPY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CsURvBpr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dy9kUNRR.js";import"./SelectFocusSourceContext-BqjsBqoL.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useForkRef-CW7nwTzV.js";import"./useSlotProps-BphsLqn6.js";import"./Popover-D8aHDtre.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-buqhKvPN.js";import"./useTheme-uzqIZvgA.js";import"./utils-CY0-o-M4.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useTimeout-DSf2abi9.js";import"./getReactElementRef-CPIcGi-m.js";import"./mergeSlotProps-BD3yaoOB.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUjatzFH.js";import"./useEventCallback-BXl50wnQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DrT6KjAn.js";import"./Fade-CkZ97Hml.js";import"./Paper-CMcH6Gk3.js";import"./List-Ed_p2skf.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BMhEC-vi.js";import"./createSvgIcon-BcCXBLY5.js";import"./OutlinedInput-NqaTAoz7.js";import"./FormHelperText-Du_S5IXp.js";import"./FormControlLabel-DK2k45Ms.js";import"./Typography-BLWoaJn_.js";import"./Switch-bv0zSmLo.js";import"./SwitchBase-B76ZlPUO.js";import"./ButtonBase-B4AmE_nS.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C6QDUZlf.js";import"./RadioGroup-DtHGdsBt.js";import"./FormGroup-_FRXrzq-.js";import"./Stack-C0CMzs2G.js";import"./styled-qS0Yrwc6.js";import"./Box-KcVtg1pO.js";import"./Divider-o9_MDQMV.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bc4ff8G-.js";import"./FormControl-BZcEw6H3.js";import"./isMuiElement-CAAIFwhI.js";import"./Grid-CiYph9Ji.js";import"./useInfiniteQuery-D7_tWO7G.js";import"./suspense-C7yO8Vez.js";import"./useBaseQuery-IhhvxYRE.js";import"./index-DFAe1byy.js";import"./index-BcLWcqBp.js";import"./___vite-browser-external_commonjs-proxy-6v6UwKt5.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-GbqZrhUx.js";import"./Close-vGYRfV1b.js";import"./usePreviousProps-DsceD4N7.js";import"./Tooltip-20BxdW9m.js";import"./Chip-cGG6rk4J.js";import"./IconButton-MKfAwX3T.js";import"./CircularProgress-Cb3dAqoX.js";import"./ListSubheader-_s3Pl5SY.js";import"./Button-CO7SGq6S.js";import"./Container-DKVcPtkF.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
