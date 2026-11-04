import{j as t}from"./iframe-B7It4zq8.js";import{C as e}from"./Autocomplete-CJ_S5Dam.js";import{B as i}from"./index-U6rGSuo_.js";import{P as s}from"./index-Cs6zky6n.js";import{T as a}from"./index-B9JugXxe.js";import{G as l}from"./index-NPVdg4Et.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-Damkin-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xHMDyrib.js";import"./index-s6sQNl3x.js";import"./index-eyGbV9a5.js";import"./index-MVgG_W0q.js";import"./index-DahGL3Ws.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CN80xc_w.js";import"./memoTheme-CGf3L_ek.js";import"./styled-Bn4RjmYR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DL9fs6b-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B-9vmVn0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CqroXm0-.js";import"./SelectFocusSourceContext-p7Q9PkOh.js";import"./useSlot-W932GJWf.js";import"./mergeSlotProps-D605olu0.js";import"./useForkRef-CPn4J3x7.js";import"./useSlotProps-5kTH7JUJ.js";import"./Popover-CvEl5u9c.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Dv_fvGmT.js";import"./useTheme-BEYyhBmQ.js";import"./utils-8hf5HdRr.js";import"./TransitionGroupContext-DcJKCyB0.js";import"./useTimeout-YUVk49Nr.js";import"./getReactElementRef-DdXJtssw.js";import"./mergeSlotProps-CT132jMM.js";import"./debounce-Be36O1Ab.js";import"./Modal-XCKy5Q-Z.js";import"./useEventCallback-C74dKXBI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CMsbxjXn.js";import"./Fade-dOEIYsg7.js";import"./Paper-16eSpGwX.js";import"./List-BBFik3I9.js";import"./utils-DoM3o7-Q.js";import"./useControlled-D_SZmVUM.js";import"./createSvgIcon-mTQeEUrk.js";import"./OutlinedInput-2NJ2Vb7h.js";import"./FormHelperText-xZDaLp3L.js";import"./FormControlLabel-DzsUjCY9.js";import"./Typography-D5VLn6r5.js";import"./Switch-gEQ3qE6L.js";import"./SwitchBase-CGG-3b0l.js";import"./ButtonBase-B2waO-fK.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BrnWVLWC.js";import"./RadioGroup-CCkcY1aL.js";import"./FormGroup-CrkydTVS.js";import"./Stack-KZSUJmtQ.js";import"./styled-DnXB-Vry.js";import"./Box-DCJTclMn.js";import"./Divider-hoZSVZoR.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B_Hivwte.js";import"./FormControl-BIzU-s4D.js";import"./isMuiElement-Co847M5i.js";import"./Grid-A8igwbvH.js";import"./useInfiniteQuery-CR6zXMFO.js";import"./suspense-faveYIPl.js";import"./useBaseQuery-D0OOOr1C.js";import"./index-CyfbJBF5.js";import"./index-Ceu2PZpV.js";import"./___vite-browser-external_commonjs-proxy-BlBmhHyD.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-C-XxB6dx.js";import"./Close-C2tp-l78.js";import"./usePreviousProps-BWsXbbEU.js";import"./Tooltip-CzJoUoCR.js";import"./Chip-CV_M_LEp.js";import"./IconButton-C-t-b5Lt.js";import"./CircularProgress-B2uMItbz.js";import"./ListSubheader-6cxoZWKk.js";import"./Button-BIhtYg5K.js";import"./Container-DFLwTEF8.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
