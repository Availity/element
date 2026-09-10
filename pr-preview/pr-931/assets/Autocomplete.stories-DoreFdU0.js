import{j as t}from"./iframe-ujVaYq5z.js";import{C as e}from"./Autocomplete-DhwrDNNZ.js";import{B as i}from"./index-612CGizF.js";import{P as s}from"./index-CGMJ1u06.js";import{T as a}from"./index-sKyEjHXt.js";import{G as l}from"./index-BOD_Negu.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DxUkVbf_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1ly-6FED.js";import"./index-DtlWzaMP.js";import"./index-DuhTuEga.js";import"./index-CrcoPoGw.js";import"./index-CiMK-E4X.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DXUCDQE8.js";import"./memoTheme-CdGwTPP7.js";import"./styled-B-xCudEP.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CPfTRyuP.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Cvu2sY6d.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BPDCCuPw.js";import"./SelectFocusSourceContext-rG7pWPT_.js";import"./useSlot-Bx_FYgWG.js";import"./mergeSlotProps-KSZa1rpd.js";import"./useForkRef-DbBKzesF.js";import"./useSlotProps-zhwYHJyp.js";import"./Popover-BHdYqB-a.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-C9J_EaUY.js";import"./useTheme-CRyXlIuJ.js";import"./utils-JnhbsWr6.js";import"./TransitionGroupContext-4IQuvIV5.js";import"./useTimeout-NHks1NG8.js";import"./getReactElementRef-SADr8eSm.js";import"./mergeSlotProps-Cf3nLFWM.js";import"./debounce-Be36O1Ab.js";import"./Modal-3Eqv_0Wj.js";import"./useEventCallback-Ckojbqp4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DZyErt74.js";import"./Fade-D1fX65m0.js";import"./Paper-tJaxAljo.js";import"./List-CjBQExuh.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BffgEsp1.js";import"./createSvgIcon-C0cHZWti.js";import"./OutlinedInput-BtSlq6bO.js";import"./FormHelperText-CTZY8iBR.js";import"./FormControlLabel-C4xfba5E.js";import"./Typography-BNx6-4zj.js";import"./Switch-CBjqQ08R.js";import"./SwitchBase-DwviZCGg.js";import"./ButtonBase-iPF5PiZW.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CjVbsVnH.js";import"./RadioGroup-_oAPx5U4.js";import"./FormGroup-Bf_foN45.js";import"./Stack-CQconrOZ.js";import"./styled-VPzH8ng9.js";import"./Box-Cl1E5OD4.js";import"./Divider-DIAH-5fx.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DsbsbLjs.js";import"./FormControl-DlRG_fK7.js";import"./isMuiElement-rsUHqA_z.js";import"./Grid-CvbP1FC1.js";import"./useInfiniteQuery-DyQVWU0I.js";import"./suspense-P5S2jk3Q.js";import"./useBaseQuery-BKJw39RZ.js";import"./index-uj7JhNjZ.js";import"./index-Cb4NnpQ-.js";import"./___vite-browser-external_commonjs-proxy-D7JR7UKq.js";import"./index-T5OSBaAP.js";import"./Autocomplete-DvrM0bwW.js";import"./Close-yz4OtLj-.js";import"./usePreviousProps-g1K342qF.js";import"./Tooltip-5f47SB-B.js";import"./Chip-_1XaEnj_.js";import"./IconButton-MZkZlGxG.js";import"./CircularProgress-see__pNb.js";import"./ListSubheader-D2kWBYo-.js";import"./Button-CHVL5mlZ.js";import"./Container-Bu0A8KYF.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
