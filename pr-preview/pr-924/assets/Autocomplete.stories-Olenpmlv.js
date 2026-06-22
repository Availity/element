import{j as t}from"./iframe-BdOkmXSO.js";import{C as i}from"./Autocomplete-Dt7L9wUY.js";import{B as e}from"./Button-T_obMJ3V.js";import{P as s}from"./Paper-BEO0J0KI.js";import{T as a}from"./Typography-BP7E3Z2h.js";import{G as l}from"./Grid-C8TSgpaR.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BZ_RWrtx.js";import"./preload-helper-Dab_6GC_.js";import"./Autocomplete-BJ0nd-qe.js";import"./TextField-8DUzEh53.js";import"./FormHelperText-BNe1EnHB.js";import"./Form-Dy8jxpW5.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./memoTheme-Dp1NrYg6.js";import"./styled-ntycrLPJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-BjzLojp-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B7U-TuVK.js";import"./FormLabel-DvCW1uyR.js";import"./FieldHelpIcon-auv2yOGj.js";import"./index-CrcoPoGw.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useTheme-DpzwBSOw.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./useTimeout-yhleNqH_.js";import"./useControlled-wRMaIAhC.js";import"./useEventCallback-Ci1dFtlM.js";import"./getReactElementRef-CAZnW1NE.js";import"./Grow-zcR73JmX.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C66xLdI-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0mr5YFJ.js";import"./CircularProgress-BtHd2z-U.js";import"./FormControl-CfvQd07B.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-v3aJqbSB.js";import"./Input-CH_2lQsk.js";import"./OutlinedInput-DKeYBi_m.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-BMgXIlcS.js";import"./Actions-j5ZzHduY.js";import"./Select-BHp_jWyp.js";import"./SelectFocusSourceContext-CO0vp2u8.js";import"./Popover-Dmejw1yb.js";import"./mergeSlotProps-CGT3lxwg.js";import"./Modal-C2ZApFn6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHtRMzsl.js";import"./Fade-BJ4yz3if.js";import"./Paper-X002pFu5.js";import"./List-DHFLMipa.js";import"./createSvgIcon-B1lFLeS5.js";import"./Stack-CkMIcmCj.js";import"./styled-NjTlQkCK.js";import"./Divider-h1ZBdIZM.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BDHpIiju.js";import"./Autocomplete-BQkJhiKy.js";import"./Close-CNJCk13c.js";import"./usePreviousProps-lGS7So8M.js";import"./Chip-OW73pPap.js";import"./ListSubheader-CSThAS8W.js";import"./Button-NnJ9RF69.js";import"./Typography-Ba-r-irp.js";import"./Grid-BUOsnAxa.js";const Nt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:i,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(i,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(e,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(e,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Dt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Dt as __namedExportsOrder,Nt as default};
