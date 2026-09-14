import{j as t}from"./iframe-D39zpO5D.js";import{C as e}from"./Autocomplete-Bn_ZpW9F.js";import{B as i}from"./index-CT8p7-xb.js";import{P as s}from"./index-CalBDkhA.js";import{T as a}from"./index-CIttbvMR.js";import{G as l}from"./index-BHfSa4RT.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DI-vKELN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzkD1_sy.js";import"./index-F3Dfuzp1.js";import"./index-CRBGvwQd.js";import"./index-CrcoPoGw.js";import"./index-LJlq2DD9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DrCHR_XG.js";import"./memoTheme-DS1Qd1tD.js";import"./styled-DVn78CF9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CbsmgfPu.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DAAm-Ep5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Cr_b3k2m.js";import"./SelectFocusSourceContext-CAoytt1x.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useForkRef-DNCE6AYe.js";import"./useSlotProps-CHrZTrOT.js";import"./Popover-CLbI9j0Y.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-D0_VnBDB.js";import"./useTheme-Q_YzHohC.js";import"./utils-BiqFTD-G.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useTimeout-DkqtJI-P.js";import"./getReactElementRef-BiLy3DMf.js";import"./mergeSlotProps-VT4Oa8rE.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bcdi7MY2.js";import"./useEventCallback-CTE8ZTt3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGS6hD_O.js";import"./Fade-C2SBq3LE.js";import"./Paper-B079EtYg.js";import"./List-C3S5OFLg.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Dc7tfWw6.js";import"./createSvgIcon-CXilsj0Y.js";import"./OutlinedInput-DUfnrBns.js";import"./FormHelperText-SrmT5h7r.js";import"./FormControlLabel-DlhlN1bF.js";import"./Typography-lHvxoPWM.js";import"./Switch-DWJuNNrz.js";import"./SwitchBase-Dtvf4WNX.js";import"./ButtonBase-C5qFdqG6.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D-0z7h1P.js";import"./RadioGroup-BF-ujAZJ.js";import"./FormGroup-DlBhWtzs.js";import"./Stack-DtFT-rmC.js";import"./styled-D2W9iR9V.js";import"./Box-MvPvGRqH.js";import"./Divider-m_CRUwIv.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BAYVG84c.js";import"./FormControl-yV9__Y8G.js";import"./isMuiElement-B_WcrTr3.js";import"./Grid-sUXan3gB.js";import"./useInfiniteQuery-BNYuGyiI.js";import"./suspense-GpnBxC8j.js";import"./useBaseQuery-BxKqauea.js";import"./index-Iv_LGCnt.js";import"./index-BqziHakW.js";import"./___vite-browser-external_commonjs-proxy-BUL4XQWM.js";import"./index-CnpWGRvj.js";import"./Autocomplete-CO49QtBq.js";import"./Close-C3OBzGrc.js";import"./usePreviousProps-BQAwpzNk.js";import"./Tooltip-T0tiLXY7.js";import"./Chip-exRvSNid.js";import"./IconButton-1y7-X1Ns.js";import"./CircularProgress-DZf4mQi8.js";import"./ListSubheader-Ce1MDT0o.js";import"./Button-BxFiSb--.js";import"./Container-Bg9CFWCo.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
