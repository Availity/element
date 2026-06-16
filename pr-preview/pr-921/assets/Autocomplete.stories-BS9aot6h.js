import{j as t}from"./iframe-DVscMr-A.js";import{C as e}from"./Autocomplete-DIlA95zY.js";import{B as i}from"./index-BeF-k_6p.js";import{P as s}from"./index-Biy9w6Pi.js";import{T as a}from"./index-DnN6X1jM.js";import{G as l}from"./index-MzdqpUr1.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-B-0KxPvq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlQYc4DV.js";import"./index-BbRTm-rr.js";import"./index-Dslozi2v.js";import"./index-CrcoPoGw.js";import"./index-BnViiisy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-W7CV7YPZ.js";import"./memoTheme-BWlAx59E.js";import"./styled-DQ7SGoXr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdI1jtcT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DkCKu5ph.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DvdmAFVR.js";import"./SelectFocusSourceContext-BTpAiLqB.js";import"./useSlot-CcjURTXg.js";import"./mergeSlotProps-2ZD1Wa3p.js";import"./useForkRef-D_2VvoZd.js";import"./useSlotProps-pr2a7puG.js";import"./Popover-Cvu36zQJ.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DpqzBqCy.js";import"./useTheme-YOFO5C4H.js";import"./utils-3Br-A01V.js";import"./TransitionGroupContext-BG8XIQuv.js";import"./useTimeout-zxUPRTwq.js";import"./getReactElementRef-BdBU57AF.js";import"./mergeSlotProps-Bx8d2XL6.js";import"./debounce-Be36O1Ab.js";import"./Modal-CHyTrEbM.js";import"./useEventCallback-yUNJdQIx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-VQSY8Csy.js";import"./Fade-BDZpyD8d.js";import"./Paper-CQbuUb0F.js";import"./List-ct4XBHDF.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DNBFEVpl.js";import"./createSvgIcon-ZxKINfNn.js";import"./OutlinedInput-CY0TCNx8.js";import"./FormHelperText-DTQfoS1X.js";import"./FormControlLabel-xHJRVqLE.js";import"./Typography-CU66rNGi.js";import"./Switch-D2p0E2hS.js";import"./SwitchBase-hRTrvGbO.js";import"./ButtonBase-Rik4d0uu.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BkHQIpvX.js";import"./RadioGroup-Cfs5wAAA.js";import"./FormGroup-DpHjrUnv.js";import"./Stack-D0PqJVFB.js";import"./styled-BgmeM797.js";import"./Box-fBwpr0Q7.js";import"./Divider-DIgW-ZID.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-x588U1Z0.js";import"./FormControl-wb4CWP8v.js";import"./isMuiElement-J0UlRgLR.js";import"./Grid-QdwtLyJp.js";import"./useInfiniteQuery-BYLSo97K.js";import"./suspense-B9Mqc8FV.js";import"./useBaseQuery-Ly4ZeRgi.js";import"./index-BVtPpz6B.js";import"./index-ZaasKGpT.js";import"./___vite-browser-external_commonjs-proxy-SNwcl5N-.js";import"./index-BZWhYBqj.js";import"./Autocomplete-I7Slci6D.js";import"./Close-C6zz0I54.js";import"./usePreviousProps-BDXE48jd.js";import"./Tooltip-fH0F2vbV.js";import"./Chip-DaoHAJjF.js";import"./IconButton-Dq1PDEwT.js";import"./CircularProgress-DG2q71MX.js";import"./ListSubheader-Df-HEmCS.js";import"./Button-C5YW8aoX.js";import"./Container-BdxHCcxG.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
