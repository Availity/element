import{j as t}from"./iframe-CWp6xAJi.js";import{C as e}from"./Autocomplete-CH0uzZt2.js";import{B as i}from"./index-Bxm1lbI1.js";import{P as s}from"./index-Rdz_pQaj.js";import{T as a}from"./index-BJBbOM60.js";import{G as l}from"./index-DiK5u2m6.js";import{b as n,a as d}from"./Types-DLUIPKsS.js";import{u,F as c}from"./index.esm-XsBVtHNp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CE8tXHkL.js";import"./index-BceSKYPP.js";import"./index-52-MGCI2.js";import"./index-BiBDMnSv.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BE17mmZt.js";import"./memoTheme-Cd48oeI4.js";import"./styled-BbzXfeov.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BXQlDb-z.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-hGDRNu7C.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CeGHqpeG.js";import"./Menu-Dgz24AwM.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./useSlotProps-DzjUqkkU.js";import"./Popover-BPg-4WyH.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-v_NAREGo.js";import"./useTheme-DHWCGmhz.js";import"./utils-D4ENFMIW.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./useTimeout-YuGHwSAC.js";import"./getReactElementRef-C_Avcpz3.js";import"./mergeSlotProps-Dxb_vIiW.js";import"./debounce-Be36O1Ab.js";import"./Modal-BPpm24UE.js";import"./useEventCallback-DWzQfpRP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqFgtmAJ.js";import"./Fade-BHa9ONGT.js";import"./Paper-C5XDmwPa.js";import"./List-BpYrKy3Y.js";import"./utils-DoM3o7-Q.js";import"./useControlled-D9oaenaI.js";import"./createSvgIcon-BPSi4ajd.js";import"./OutlinedInput-B-1NmxdT.js";import"./FormHelperText-D5HQHcTB.js";import"./FormControlLabel-BIT2ITgz.js";import"./Typography-DAHmtciD.js";import"./Switch-B27HjCvE.js";import"./SwitchBase-BDjJ1Fzr.js";import"./ButtonBase-QvXOsOsa.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BJKeIEsI.js";import"./RadioGroup-CurkXTE0.js";import"./FormGroup-F0R8oEct.js";import"./Box-C01JMt70.js";import"./Divider-mFdRldcH.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DilTTonM.js";import"./styled-Ck6GK9xN.js";import"./TextField-DiBflCj4.js";import"./FormControl-CfNL2aL0.js";import"./isMuiElement-CXCicdtK.js";import"./Grid-BEi4nMA-.js";import"./index-CdDy2ze1.js";import"./index-D0YYC-dU.js";import"./___vite-browser-external_commonjs-proxy-OyBOwfD9.js";import"./index-BCW1wysz.js";import"./_toKey-Bjg_s0Hk.js";import"./Autocomplete-CgP0ceZG.js";import"./Close-DqjWgI2I.js";import"./usePreviousProps-CtOT8TqZ.js";import"./Tooltip-C9q2MrGF.js";import"./Chip-DDmOrr3t.js";import"./IconButton-BcXRPXis.js";import"./CircularProgress-a2FiPD69.js";import"./ListSubheader-Nkhz1VRp.js";import"./useInfiniteQuery-CpRitWw8.js";import"./useBaseQuery-C85RlgzR.js";import"./suspense-CiFeeshP.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-DheGOcXb.js";import"./Container-CHapUF_w.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
