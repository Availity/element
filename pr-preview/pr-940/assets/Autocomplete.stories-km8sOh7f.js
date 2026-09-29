import{j as t}from"./iframe-CEHPhfh-.js";import{C as e}from"./Autocomplete-BbvhXq73.js";import{B as i}from"./index-BiRTiuFa.js";import{P as s}from"./index-BzmlnbPG.js";import{T as a}from"./index-Bao5kwzm.js";import{G as l}from"./index-DYWaDwbT.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BQbTLB1S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BuuKegUI.js";import"./index-BurFZRLE.js";import"./index-_UegUKj_.js";import"./index-CrcoPoGw.js";import"./index-tILHWvZu.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CRmvg5rp.js";import"./memoTheme-CIUXmmP3.js";import"./styled-surM00hH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BRYtStoZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DKOaXlnO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-D7khzvuo.js";import"./SelectFocusSourceContext-ZlVDIhni.js";import"./useSlot-CGHriRRK.js";import"./mergeSlotProps-DqsR1CiL.js";import"./useForkRef-CUwhrb4S.js";import"./useSlotProps-CX3w_7Yv.js";import"./Popover-Cu_iSQEj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BAyfuJxK.js";import"./useTheme-B_yH_tF0.js";import"./utils-Dqw6COyO.js";import"./TransitionGroupContext-KFjAD8lx.js";import"./useTimeout-C36QQqY4.js";import"./getReactElementRef-BKZTuICO.js";import"./mergeSlotProps-CfdDxxlC.js";import"./debounce-Be36O1Ab.js";import"./Modal-D7vdJCxc.js";import"./useEventCallback-BjU86bqT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BLceXtZc.js";import"./Fade-snlpbKkK.js";import"./Paper-CXpuvckS.js";import"./List-DTUSYVMO.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CuNUqud6.js";import"./createSvgIcon-DM21giQZ.js";import"./OutlinedInput-B4rUmiBa.js";import"./FormHelperText-DheZpH7H.js";import"./FormControlLabel-BzSk7T_G.js";import"./Typography-CJQmKVEQ.js";import"./Switch-BsymbQPl.js";import"./SwitchBase-DLCeua8o.js";import"./ButtonBase-Bi9yKj0d.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BHEJ1nRB.js";import"./RadioGroup-CeNvO4S4.js";import"./FormGroup-uFTTDTpe.js";import"./Stack-kFyJTz_L.js";import"./styled-Z7vS--HU.js";import"./Box-JfKqa7ps.js";import"./Divider-Ct8M__zO.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BP4ybW42.js";import"./FormControl-C4mjEeHz.js";import"./isMuiElement-B3XjmQiv.js";import"./Grid-BWykgrcb.js";import"./useInfiniteQuery-CivPkBYN.js";import"./suspense-BdvrWJMi.js";import"./useBaseQuery-DoI_NK8F.js";import"./index-BFKNcTNX.js";import"./index-ChMXBR0c.js";import"./___vite-browser-external_commonjs-proxy-B-zXSXgP.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-DLM-TlBw.js";import"./Close-DTmO9E2Q.js";import"./usePreviousProps-DgKBbqdP.js";import"./Tooltip-BwegOhQ3.js";import"./Chip-BrqRFcJU.js";import"./IconButton-DFv4hPcI.js";import"./CircularProgress-DIulSjrJ.js";import"./ListSubheader-BOe1zGOO.js";import"./Button-DCMVSOfW.js";import"./Container-WyARCUam.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
