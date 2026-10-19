import{j as o}from"./iframe-V3tbPOwE.js";import{C as p}from"./RadioGroup-BAg6aMm0.js";import{B as m}from"./index-CheDZIlw.js";import{P as l}from"./index-Cdq8d4IM.js";import{T as n}from"./index-DSivALFp.js";import{c as e,d as i}from"./index-teMVs_up.js";import{G as d}from"./index-DBjuuRwi.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-6veOevKy.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-tp0UYwYk.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CkUw_ctj.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Bojr2z3f.js";import"./styled-Br8tiGNT.js";import"./IconButton-Cmdx9brD.js";import"./memoTheme-nYDz4AH7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BWZhrEZd.js";import"./useTimeout-BFosHs8Q.js";import"./TransitionGroupContext-BT8MRBaI.js";import"./useForkRef-CZXJqfUL.js";import"./useEventCallback-BsNvdAGC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-1E0UYHmw.js";import"./Tooltip-BqnFS_Iw.js";import"./useTheme-kNyMIH6i.js";import"./useSlot-JqPUkt86.js";import"./mergeSlotProps-nXLrBWqI.js";import"./useControlled-DU3h8Asb.js";import"./getReactElementRef-jC5-igXX.js";import"./Portal-BYLHPY1g.js";import"./utils-DJcf64yX.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BFQRGr1E.js";import"./Button-DK2TX3S1.js";import"./Paper-CdPhUGdf.js";import"./Typography-CpNf9PKA.js";import"./index-MVgG_W0q.js";import"./index-DDGGRFDD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DMsEcqNG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkW7GKiH.js";import"./formControlState-Dq1zat_P.js";import"./Select-CrxWULwR.js";import"./SelectFocusSourceContext-DV7K2vKu.js";import"./Popover-LG3JRuxX.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CnUXTjg3.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bj2PA8Xo.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-lpfDs7Fh.js";import"./Fade-CfqPTD91.js";import"./List-VEKX0l2J.js";import"./createSvgIcon-CsNTB8qp.js";import"./OutlinedInput-CApj83lO.js";import"./FormHelperText-DpXYC3GS.js";import"./FormControlLabel-BuiDdDUC.js";import"./Switch-sFLjF5Ad.js";import"./SwitchBase-DJnb3nbp.js";import"./Radio-KNolnd1x.js";import"./RadioGroup-BnROJ1qm.js";import"./FormGroup-BS6CC4_B.js";import"./Stack-BhI6E9BW.js";import"./styled-DaY85gB9.js";import"./Box-CWUEJO1A.js";import"./Divider-CfhIjDdr.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-Bw-kyyif.js";import"./Container-DuquqMVo.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
