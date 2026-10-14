import{j as t}from"./iframe-C7RYpRRO.js";import{C as e}from"./Autocomplete-CwisD8BR.js";import{B as i}from"./index-C-TAFGmA.js";import{P as s}from"./index-D141wv3c.js";import{T as a}from"./index-BnSCHJ_C.js";import{G as l}from"./index-C2dcAPuD.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DSRVq6kN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ct4qjLn3.js";import"./index-CJ_Bm4o3.js";import"./index-miMFKzwY.js";import"./index-MVgG_W0q.js";import"./index-B0i75ydy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZsvZcJW.js";import"./memoTheme-DZ9vOlqG.js";import"./styled-Cqgr8yLU.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CsJ_Ttuz.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BSDmqwdX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-vyzsrS7k.js";import"./SelectFocusSourceContext-Des1O4JU.js";import"./useSlot-lfX05XTl.js";import"./mergeSlotProps-BkPIbwBi.js";import"./useForkRef-mY6jA1_e.js";import"./useSlotProps-CyQLJvs1.js";import"./Popover-Bq3gAnqf.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-B-Fuv61-.js";import"./useTheme-WpQOCtdc.js";import"./utils-BrOTTAGC.js";import"./TransitionGroupContext-D50vcWaO.js";import"./useTimeout-IWs7fXER.js";import"./getReactElementRef-CzYjVf0K.js";import"./mergeSlotProps-BKdWdZnu.js";import"./debounce-Be36O1Ab.js";import"./Modal-Vlv0KwQ6.js";import"./useEventCallback-BmDadX9V.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DbHQkIp9.js";import"./Fade-BHmjLU7V.js";import"./Paper-DUYPN4Ep.js";import"./List-BcqSLVqi.js";import"./utils-DoM3o7-Q.js";import"./useControlled-C5e-G2Uo.js";import"./createSvgIcon-Dc4WGqJQ.js";import"./OutlinedInput-EMbPCbiK.js";import"./FormHelperText-HnS8eQWb.js";import"./FormControlLabel-CvDpl5RW.js";import"./Typography-heIaV1nZ.js";import"./Switch-BITMdJ8m.js";import"./SwitchBase-C3jOb5-J.js";import"./ButtonBase-YfnvzWnB.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CO_Uo7ot.js";import"./RadioGroup-CBZao7AR.js";import"./FormGroup-lR-44Vgx.js";import"./Stack-D9VD4k0X.js";import"./styled-Cn_UBHgZ.js";import"./Box-DobRJWDd.js";import"./Divider-DIUIqII7.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CzM-Hrgj.js";import"./FormControl-WAkVHsJd.js";import"./isMuiElement-Do9YpkA9.js";import"./Grid-52szHxD-.js";import"./useInfiniteQuery-9W5YHlEC.js";import"./suspense-B52kGHoD.js";import"./useBaseQuery-DBUmGbF9.js";import"./index-BiONWhux.js";import"./index-BXxND2oO.js";import"./___vite-browser-external_commonjs-proxy-JNcaBvwg.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-DHMeur22.js";import"./Close-BiGB54sc.js";import"./usePreviousProps-CHegnKke.js";import"./Tooltip-By5WBZwq.js";import"./Chip-Dpv8KIp9.js";import"./IconButton-DUEQnTYy.js";import"./CircularProgress-DRusqeVx.js";import"./ListSubheader-CborC9ch.js";import"./Button-DYbxeNEo.js";import"./Container-Bhb68_To.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
