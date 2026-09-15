import{j as o}from"./iframe-CwO-jD2r.js";import{C as p}from"./RadioGroup-DX7KmeLJ.js";import{B as m}from"./index-CNETp13n.js";import{P as l}from"./index-BC-YgIAb.js";import{T as n}from"./index-BCN7JX9J.js";import{c as e,d as i}from"./index-BA97GnXb.js";import{G as d}from"./index-DDnCuFzs.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-yfdFB1FZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-BiLy_IKp.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CiqVAws-.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DiCrCwGT.js";import"./styled-oLigdm2H.js";import"./IconButton-6AH5JngU.js";import"./memoTheme-BFKi1h0L.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CG4pUtur.js";import"./useTimeout-fSFkMMHB.js";import"./TransitionGroupContext-B7p21pCQ.js";import"./useForkRef-C_Onx5Be.js";import"./useEventCallback-DAOE043T.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BJ26xdy5.js";import"./Tooltip-DWOWlEqB.js";import"./useTheme-COk7r_Ee.js";import"./useSlot-H46dGhkF.js";import"./mergeSlotProps-BwWI2lDY.js";import"./useControlled-D7MGwIra.js";import"./getReactElementRef-BccMI9lA.js";import"./Portal-Bdc5oVT9.js";import"./utils-4BcLErhI.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CxdF0UKw.js";import"./Button-BLrfDWuG.js";import"./Paper-4GVPiycN.js";import"./Typography-BF7hwO0t.js";import"./index-CrcoPoGw.js";import"./index-BN6UcWAE.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVo5jYj3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BVvcn0pm.js";import"./formControlState-Dq1zat_P.js";import"./Select-DpBSTnvT.js";import"./SelectFocusSourceContext-CyLTWWv_.js";import"./Popover-B5g1qt2p.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BuhqGTB0.js";import"./debounce-Be36O1Ab.js";import"./Modal-pR2rfcmc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CkQmcNu2.js";import"./Fade-BMJzwZSG.js";import"./List-C1oZuEzd.js";import"./createSvgIcon-s4imERVo.js";import"./OutlinedInput-ClLFrf98.js";import"./FormHelperText-BOeTOdIO.js";import"./FormControlLabel-C2jYLJgd.js";import"./Switch-B9atGEQZ.js";import"./SwitchBase-Bpbf_DGL.js";import"./Radio-Dge-NWMw.js";import"./RadioGroup-Bs8Dm3MU.js";import"./FormGroup-CQLSU16C.js";import"./Stack-CHmf-yYC.js";import"./styled-CUc8450O.js";import"./Box-aCkC6O_c.js";import"./Divider-BSXm1Pap.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-BLIKAx1P.js";import"./Container-BPLOD5On.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
