import{j as t}from"./iframe-BxUHITI1.js";import{C as e}from"./Autocomplete-Dr2PSSpy.js";import{B as i}from"./index-Cxy_eo2a.js";import{P as s}from"./index-D4-F_wLy.js";import{T as a}from"./index-DdUtkmNt.js";import{G as l}from"./index-BMhl3l0u.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-Cf1M8dMK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-7DXXHFca.js";import"./index-DkXWnfyE.js";import"./index-Yus2I1Ga.js";import"./index-MVgG_W0q.js";import"./index-D7Z8d6Jb.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BZhbNLcx.js";import"./memoTheme-CzoHsl9a.js";import"./styled-CpGjzToy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlwqTA7N.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DBh9raQ6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dq8mhllO.js";import"./SelectFocusSourceContext-CdZu0_4c.js";import"./useSlot-B7qqTYAC.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useForkRef-lvxB79U5.js";import"./useSlotProps-CkGYMLCU.js";import"./Popover-lMnIH1fd.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-uHNWHw4F.js";import"./useTheme-D1EEqNP3.js";import"./utils-Bx4IaHxc.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./useTimeout-DAfKtcD8.js";import"./getReactElementRef-CgE3Obh2.js";import"./mergeSlotProps-BlkVzhTt.js";import"./debounce-Be36O1Ab.js";import"./Modal-CLWW9UYM.js";import"./useEventCallback-C37BR1tG.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D0eWelix.js";import"./Fade-3fp3ueS9.js";import"./Paper-BbjEmRJb.js";import"./List-DdRjpWGh.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Bgh5sVCP.js";import"./createSvgIcon-RiBZe8zy.js";import"./OutlinedInput-RCQ8H0A1.js";import"./FormHelperText-D2Y_lV8s.js";import"./FormControlLabel-Ci3_q9uP.js";import"./Typography-BPEZnd-f.js";import"./Switch-CeMAy6L2.js";import"./SwitchBase-C1EzQuwL.js";import"./ButtonBase-DsL-5Cn7.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C1VCwxsF.js";import"./RadioGroup-DcGjIHPU.js";import"./FormGroup-Cp82ltLG.js";import"./Stack-CFpqy-T3.js";import"./styled-dRg2RBwo.js";import"./Box-dmaYfFtJ.js";import"./Divider-DI8N_gjR.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bv3dpByY.js";import"./FormControl-DxWH6o6g.js";import"./isMuiElement-D7EX6TJ1.js";import"./Grid-CYb8qmsK.js";import"./useInfiniteQuery-BszC4kZ6.js";import"./suspense-0wm7O8Sh.js";import"./useBaseQuery-Bmup1xmS.js";import"./index-DsZ_7dTV.js";import"./index-DmTj5jVV.js";import"./___vite-browser-external_commonjs-proxy-BcA6VPFJ.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-C3823mBs.js";import"./Close-B0Mi5Iza.js";import"./usePreviousProps-AuyrQAl_.js";import"./Tooltip-DZz3XPMm.js";import"./Chip-WHqWu6Vx.js";import"./IconButton-B68upYna.js";import"./CircularProgress-DLAhFeVr.js";import"./ListSubheader-egOYAHrp.js";import"./Button-iASAD3CE.js";import"./Container-CqfIskg6.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
