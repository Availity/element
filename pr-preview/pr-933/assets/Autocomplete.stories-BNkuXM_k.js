import{j as t}from"./iframe-CgyQHDht.js";import{C as e}from"./Autocomplete-O7goaqpm.js";import{B as i}from"./index-5azouwn6.js";import{P as s}from"./index-DX1QWm0x.js";import{T as a}from"./index-Au96FvEp.js";import{G as l}from"./index-BiQy1AHR.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DQRj2ryX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTr6gGJb.js";import"./index-Dm4zs3BZ.js";import"./index-H6Uxih6N.js";import"./index-CrcoPoGw.js";import"./index-6_aePX59.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8liJDyc.js";import"./memoTheme-9z4HOxEW.js";import"./styled-CeAqJ-c9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BjV2ncBQ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Ca8XhVwX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-wirFxTuI.js";import"./SelectFocusSourceContext-DstQPVWn.js";import"./useSlot-BI63qm8Z.js";import"./mergeSlotProps-DEDO0PDp.js";import"./useForkRef-DvvK-eiI.js";import"./useSlotProps-D00sgM-L.js";import"./Popover-BgvdSOaj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Cv3ZG74Z.js";import"./useTheme-DBOW2iGc.js";import"./utils-i6pe6p9D.js";import"./TransitionGroupContext-CbCiCZin.js";import"./useTimeout-B7u63TVX.js";import"./getReactElementRef-DSOw1wXb.js";import"./mergeSlotProps-gK_7x5gw.js";import"./debounce-Be36O1Ab.js";import"./Modal-DZVQKIJf.js";import"./useEventCallback-v1-mseXg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CV_7DsVP.js";import"./Fade-DcwI299R.js";import"./Paper-C6T4apaD.js";import"./List-DixvLrk0.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DSiBAGka.js";import"./createSvgIcon-CyM8AHy5.js";import"./OutlinedInput-B2h6fqQ3.js";import"./FormHelperText-D2TAK_49.js";import"./FormControlLabel-DhBBoI9-.js";import"./Typography-yiHubm7E.js";import"./Switch-CLE859Ym.js";import"./SwitchBase-D-PtVu31.js";import"./ButtonBase-BeOu4eYa.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-B6-Bdtmn.js";import"./RadioGroup-Dy6esOrh.js";import"./FormGroup-LqcUTR9x.js";import"./Stack-oqPb14Ks.js";import"./styled-Dvv_Oh9D.js";import"./Box-BxdWl5-L.js";import"./Divider-A7T5E6Fz.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CAaqDkho.js";import"./FormControl-yur8uxgd.js";import"./isMuiElement-BaNoNC5Q.js";import"./Grid-BNO3N1YM.js";import"./useInfiniteQuery-xbWnWc7N.js";import"./suspense-CFXcMaZV.js";import"./useBaseQuery-CsSmAa8A.js";import"./index-Cqj_0nzu.js";import"./index-6LTLb7jJ.js";import"./___vite-browser-external_commonjs-proxy-QXeNOFjN.js";import"./index-DePoTdZz.js";import"./Autocomplete-Bk18P5eW.js";import"./Close-BfpfVcXW.js";import"./usePreviousProps-XGsSN8jC.js";import"./Tooltip-0ZBCaLdQ.js";import"./Chip-D8SkWJT0.js";import"./IconButton-M-Sr99uW.js";import"./CircularProgress-OvvKtsaM.js";import"./ListSubheader-2rdw1coO.js";import"./Button-D8e6tdaf.js";import"./Container-s8QyPm16.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
