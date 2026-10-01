import{j as t}from"./iframe-DPgvn2UU.js";import{C as e}from"./Autocomplete-D7jwaTri.js";import{B as i}from"./index-CeFSOpBV.js";import{P as s}from"./index-DuQ2GrkL.js";import{T as a}from"./index-Bj2mBLrK.js";import{G as l}from"./index-DiNwh75D.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DqVS46Sk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RlhFvsNk.js";import"./index-CdjxUwFe.js";import"./index-DO8HKLfP.js";import"./index-MVgG_W0q.js";import"./index-DkMl2Zw_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bq0V0STh.js";import"./memoTheme-BYph2ZTv.js";import"./styled-Bnkr7D-c.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DYfqByqT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-cN7RU9gv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-C71NVgIY.js";import"./SelectFocusSourceContext-TejMP2UB.js";import"./useSlot-DpB6mlqQ.js";import"./mergeSlotProps-DRvPt2A_.js";import"./useForkRef-B_9E6GXl.js";import"./useSlotProps-BkILu-KG.js";import"./Popover-XaGZ9P8a.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DRuBdp-z.js";import"./useTheme-B7kQ5Jap.js";import"./utils-CA9pXuzB.js";import"./TransitionGroupContext-CFlHgrGu.js";import"./useTimeout-b550rnFU.js";import"./getReactElementRef-vJH3QVIN.js";import"./mergeSlotProps-SFKmFrry.js";import"./debounce-Be36O1Ab.js";import"./Modal-DJSJonwV.js";import"./useEventCallback-DBIic8Ex.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DG1hflfc.js";import"./Fade-pXi3dxmW.js";import"./Paper-Bg7uCtkj.js";import"./List-BJ31Te5w.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BRfcL8pA.js";import"./createSvgIcon-CVdeguJ_.js";import"./OutlinedInput-BT6k7tdI.js";import"./FormHelperText-DCcVia06.js";import"./FormControlLabel-DpEDB8IM.js";import"./Typography-CPTozpuv.js";import"./Switch-CslP4g6_.js";import"./SwitchBase-TQhLjsOV.js";import"./ButtonBase-C05RGSI7.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DrWY9wGb.js";import"./RadioGroup-C6Vtjkty.js";import"./FormGroup-DdQAx87u.js";import"./Stack-Br7WCR6b.js";import"./styled-CiHxTfSE.js";import"./Box-BlDR6l9l.js";import"./Divider-DOUeryDl.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CDQDEHmI.js";import"./FormControl-B-CCEBd1.js";import"./isMuiElement-CIfsBfEF.js";import"./Grid-DrKODsgE.js";import"./useInfiniteQuery-Bad_jGQh.js";import"./suspense-Dz6yD9vf.js";import"./useBaseQuery-BKz4JOoQ.js";import"./index-Coy1nEZO.js";import"./index-CFHPeqeG.js";import"./___vite-browser-external_commonjs-proxy-DchKfydG.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-HD9U4jnL.js";import"./Close-Dn0HFxde.js";import"./usePreviousProps-ZDn9yDI3.js";import"./Tooltip-YOgdBn5B.js";import"./Chip-Bb6G6F-V.js";import"./IconButton-B7NJWIp-.js";import"./CircularProgress-C6YfH4n8.js";import"./ListSubheader-YQP_yUyf.js";import"./Button-BYYLdAXe.js";import"./Container-CIN8FyKG.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
