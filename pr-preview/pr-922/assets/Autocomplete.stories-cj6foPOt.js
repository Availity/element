import{j as t}from"./iframe-DOPEDWVE.js";import{C as e}from"./Autocomplete-j4LD6IQH.js";import{B as i}from"./index-B920RZd2.js";import{P as s}from"./index-a__vzDUH.js";import{T as a}from"./index-Bc9oImAB.js";import{G as l}from"./index-CVbaZk5H.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BkNDLnsN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAHSxtJH.js";import"./index-EgVkongX.js";import"./index-DBmw2oKs.js";import"./index-CrcoPoGw.js";import"./index-NHPSesC7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bt1sNrUf.js";import"./memoTheme-8zILCmUA.js";import"./styled-LPfbW-Wh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CBYcclqk.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DIv8BJCy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CpDZPS1H.js";import"./SelectFocusSourceContext-BhjBp6ew.js";import"./useSlot-C4qJPUpL.js";import"./mergeSlotProps-DNHO_T1K.js";import"./useForkRef-B1Lx8fl-.js";import"./useSlotProps-DiHBVMXF.js";import"./Popover-BgxDu_AE.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CcIDLVWU.js";import"./useTheme-D2iYqlAC.js";import"./utils-C1ZbFEVB.js";import"./TransitionGroupContext-GxBk2Ip_.js";import"./useTimeout-CvyLGLNv.js";import"./getReactElementRef-CylE0SZK.js";import"./mergeSlotProps-CEgtkqsO.js";import"./debounce-Be36O1Ab.js";import"./Modal-Dz4Wg6rk.js";import"./useEventCallback-2DpT7fNb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D5hQN3RU.js";import"./Fade-DWzLIVc2.js";import"./Paper-e-gdlgr6.js";import"./List-CVXZp5mU.js";import"./utils-DoM3o7-Q.js";import"./useControlled-W_wjgM09.js";import"./createSvgIcon-URN63_Ch.js";import"./OutlinedInput-L_8zJgVV.js";import"./FormHelperText-CYrlQGob.js";import"./FormControlLabel-Dd2Mqmwt.js";import"./Typography-D_VWbga9.js";import"./Switch-DQVRQ4_0.js";import"./SwitchBase-C2DjFSld.js";import"./ButtonBase-CQME6_xK.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Z7ssCuQ9.js";import"./RadioGroup-CEVZjNHr.js";import"./FormGroup-DQPvM_H1.js";import"./Stack-CjxkYZ6F.js";import"./styled-DCDHMWdc.js";import"./Box-m-kHsJDm.js";import"./Divider-B3v8nYDN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D8gCz3GK.js";import"./FormControl-D6iyS4X7.js";import"./isMuiElement-OUcohH0i.js";import"./Grid-D6ohNbZE.js";import"./useInfiniteQuery-DCYbuAyD.js";import"./suspense-Da2N__me.js";import"./useBaseQuery-ttjVf2RA.js";import"./index-D4Ewo4sZ.js";import"./index-D6zI7NYV.js";import"./___vite-browser-external_commonjs-proxy-XYxfUcR_.js";import"./index-D5qdRn3q.js";import"./Autocomplete-dlIWbEXI.js";import"./Close-Ca30N1zO.js";import"./usePreviousProps-Wjd0DxpX.js";import"./Tooltip-VtUuxwVh.js";import"./Chip-Bwbl76tO.js";import"./IconButton-C52uYHTa.js";import"./CircularProgress-Bd2XmtNT.js";import"./ListSubheader-Dxkmbq32.js";import"./Button-DHnc0sD-.js";import"./Container-5_MJa3VZ.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
