import{j as t}from"./iframe-TaNZkFdX.js";import{C as e}from"./Autocomplete-B4iYi-9v.js";import{B as i}from"./index-B97OVu1W.js";import{P as s}from"./index-D_6p8v4I.js";import{T as a}from"./index-CvI2ruD5.js";import{G as l}from"./index-BDHwWUp_.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-B7qcEKHC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_L_mrdi.js";import"./index-CP0-YjpH.js";import"./index-DED0iKzE.js";import"./index-MVgG_W0q.js";import"./index-DQOdSWXL.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DJOFM4ge.js";import"./memoTheme-DWNFUNe8.js";import"./styled-B4LT_xKE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DDrneIVK.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C3JuhRxY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BL9Z-gNl.js";import"./SelectFocusSourceContext-onYVou0i.js";import"./useSlot-C54pGJsm.js";import"./mergeSlotProps-I1tu7yOe.js";import"./useForkRef-BWA77Ou0.js";import"./useSlotProps-DaoY2z77.js";import"./Popover-D5CfIDm2.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-bQbDJznY.js";import"./useTheme-BwMLg3Cm.js";import"./utils-DLs5F192.js";import"./TransitionGroupContext-DNirSs3q.js";import"./useTimeout-6mINgJ0s.js";import"./getReactElementRef-CAOV2LsM.js";import"./mergeSlotProps-CMDl2A-V.js";import"./debounce-Be36O1Ab.js";import"./Modal-C4RwlORl.js";import"./useEventCallback-Mv5Tf1uh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-aCYOBwWa.js";import"./Fade-CJipK2zd.js";import"./Paper-DmzWjV3O.js";import"./List-B95bCbeF.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DvjtXf7N.js";import"./createSvgIcon-gxV3qIoY.js";import"./OutlinedInput-CUtfKWDd.js";import"./FormHelperText-hu8qIV4s.js";import"./FormControlLabel-St5nSj4i.js";import"./Typography-01frBhx_.js";import"./Switch-BfayRGCf.js";import"./SwitchBase-lR1eKZM4.js";import"./ButtonBase-hN41DD3n.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D2LmUOQ3.js";import"./RadioGroup-y5iYDCwH.js";import"./FormGroup-DCFH8px-.js";import"./Stack-CHbD9DWZ.js";import"./styled-Dk8RL2_h.js";import"./Box-B6-W-G0J.js";import"./Divider-HX4qCGjr.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D1jQ20tt.js";import"./FormControl-aukPUzfN.js";import"./isMuiElement-D3gl8ezB.js";import"./Grid-CXWUeHQh.js";import"./useInfiniteQuery-DmEJ0nYA.js";import"./suspense-C1rqFQ3y.js";import"./useBaseQuery-DoIWs5nv.js";import"./index-D0ROOKOz.js";import"./index-B_tcZaAt.js";import"./___vite-browser-external_commonjs-proxy-BZtc6z5Q.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-BxUK_8xi.js";import"./Close-DkVKVlG0.js";import"./usePreviousProps-C-oZgB2N.js";import"./Tooltip-NifhenR9.js";import"./Chip-B4YtMmbL.js";import"./IconButton-Bj0GebPw.js";import"./CircularProgress-UQNWqsj-.js";import"./ListSubheader-Bb_XE9ul.js";import"./Button-BwGYoRWi.js";import"./Container-Bw0hRcvj.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
