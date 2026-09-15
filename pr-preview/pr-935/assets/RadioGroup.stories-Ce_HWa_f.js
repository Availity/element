import{j as o}from"./iframe-CWY3iD4k.js";import{C as p}from"./RadioGroup-DbJ7_tEN.js";import{B as m}from"./index-CFwKy-vk.js";import{P as l}from"./index-Dvb6q66Y.js";import{T as n}from"./index-B87fX2m4.js";import{c as e,d as i}from"./index-DsnzGN7g.js";import{G as d}from"./index-CH36QgIT.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-psktg0ka.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-C272fr_E.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-wbjgmvhY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CITzrPa4.js";import"./styled-CIfQzxdD.js";import"./IconButton-CKcF2qnA.js";import"./memoTheme-DrmgfhiZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BVW6-IPM.js";import"./useTimeout-8ubSeoYI.js";import"./TransitionGroupContext-BKIhkECl.js";import"./useForkRef-DtxHKGyT.js";import"./useEventCallback-DHih-p6k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dd-jZUAB.js";import"./Tooltip-B3bZKYVT.js";import"./useTheme-BBG77Eif.js";import"./useSlot-jGeM5BDq.js";import"./mergeSlotProps-DYpSnyrH.js";import"./useControlled-CIbXyyiC.js";import"./getReactElementRef-DgEYPRe_.js";import"./Portal-GTIXf_ni.js";import"./utils-uPZOnv02.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DqKnkovT.js";import"./Button-CdHEuVuq.js";import"./Paper-dLVuKHPb.js";import"./Typography-DdnCOrzM.js";import"./index-CrcoPoGw.js";import"./index-BzSYwNd-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DKNFXPcY.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Z07liIv_.js";import"./formControlState-Dq1zat_P.js";import"./Select-DVpJrfTw.js";import"./SelectFocusSourceContext-C5AxKvUw.js";import"./Popover-Fhuog7vE.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CH3-0yIT.js";import"./debounce-Be36O1Ab.js";import"./Modal-BW2dyGsc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CXYVCyew.js";import"./Fade-DPNQjbRR.js";import"./List-2Vo6P9AC.js";import"./createSvgIcon-DumzlQmL.js";import"./OutlinedInput-DdNeAm6I.js";import"./FormHelperText-DrighLwE.js";import"./FormControlLabel-BTjj02X-.js";import"./Switch-XAbrm4Bm.js";import"./SwitchBase-LkmlHlRJ.js";import"./Radio-D1gt4lAJ.js";import"./RadioGroup-DJo27srd.js";import"./FormGroup-CwKuENeS.js";import"./Stack-CDV8c2Ym.js";import"./styled-DiOSWYDP.js";import"./Box-W_K2m7mS.js";import"./Divider-dym_m635.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-Dpddp4dd.js";import"./Container-O7CLblpO.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ControlledRadioGroupProps) => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledRadioGroup {...args}>
            <FormControlLabel control={<Radio />} label="N/A" value="N/A" />
            <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
            <FormControlLabel control={<Radio />} label="No" value="No" />
          </ControlledRadioGroup>
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
    name: 'controlledRadioGroup',
    label: 'Radio Group'
  }
}`,...t.parameters?.docs?.source}}};const Eo=["_ControlledRadioGroup"];export{t as _ControlledRadioGroup,Eo as __namedExportsOrder,zo as default};
