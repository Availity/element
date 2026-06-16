import{j as t}from"./iframe-D9ubqhJK.js";import{C as e}from"./Autocomplete-CagcJhY6.js";import{B as i}from"./index-h4r-WnWl.js";import{P as s}from"./index-DryvU1Ls.js";import{T as a}from"./index-jvKCwEAF.js";import{G as l}from"./index-hzcYFh1I.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-C44Jn127.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dfvw_fO7.js";import"./index-B82A_qMa.js";import"./index-CSs7pf9D.js";import"./index-CrcoPoGw.js";import"./index-DNmhIX6F.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DlrnpruC.js";import"./memoTheme-CgUpfGaw.js";import"./styled-DXiPKtQZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BIiQiwwA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B4IulI9A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CdgqzUcM.js";import"./SelectFocusSourceContext-CuEUKYKV.js";import"./useSlot-dFBWOBaM.js";import"./mergeSlotProps-CUVj2Ixj.js";import"./useForkRef-CFXiLCEz.js";import"./useSlotProps-Bfn47NpZ.js";import"./Popover-DhsMvyrY.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-HXWOitc9.js";import"./useTheme-Bs7bia1b.js";import"./utils-C9L-o1yc.js";import"./TransitionGroupContext-By53oEia.js";import"./useTimeout-TLxlWLEl.js";import"./getReactElementRef-MrxWZY03.js";import"./mergeSlotProps-BMpw8A9K.js";import"./debounce-Be36O1Ab.js";import"./Modal-CR4yZ1tw.js";import"./useEventCallback-BOUt7crc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KCj6wAhX.js";import"./Fade-WpG-sZwU.js";import"./Paper-D9VaIl9p.js";import"./List-BzQZ4-oj.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BMamuY7F.js";import"./createSvgIcon-9Ro74DHR.js";import"./OutlinedInput-Dp6fJ7s5.js";import"./FormHelperText-wFz2-NwJ.js";import"./FormControlLabel-BMzoDqJ1.js";import"./Typography-CmwrtNIv.js";import"./Switch-DeW0XF3P.js";import"./SwitchBase-DhBNEaDq.js";import"./ButtonBase-CmaElg-P.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CLI4nFJ5.js";import"./RadioGroup-CzRLiIJo.js";import"./FormGroup-CYRUVGh7.js";import"./Stack-CGmSesTx.js";import"./styled-B7Z91F3L.js";import"./Box-Bn9CddAr.js";import"./Divider-DR9gQ7ZN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DpBf5W8Y.js";import"./FormControl-Chp22M92.js";import"./isMuiElement-CNzi3ipk.js";import"./Grid-XUldnHEv.js";import"./useInfiniteQuery-1EkqKLz6.js";import"./suspense-BdXPKnPM.js";import"./useBaseQuery-C2OzOhhR.js";import"./index-DGvLPLx7.js";import"./index-Bxqf2OpG.js";import"./___vite-browser-external_commonjs-proxy-DwG-mvXL.js";import"./index-DtUrJ1Wx.js";import"./Autocomplete-CJmXKde6.js";import"./Close-PL6G0Z5Z.js";import"./usePreviousProps-CmOMpIUl.js";import"./Tooltip-DJtaByj1.js";import"./Chip-BC-xMUzd.js";import"./IconButton-CdRgNr67.js";import"./CircularProgress-BW1moUPm.js";import"./ListSubheader-Dl5wI_vM.js";import"./Button-C6KYraw-.js";import"./Container-vLztGkDr.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
