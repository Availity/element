import{j as o}from"./iframe-CrDI7sKE.js";import{C as p}from"./RadioGroup-DtcCXEyf.js";import{B as m}from"./index-D1nVldbn.js";import{P as l}from"./index-Dt3qqCHF.js";import{T as n}from"./index-DnW44yA8.js";import{c as e,d as i}from"./index-BpI0U3eZ.js";import{G as d}from"./index-BtTxkIqf.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-2JjZkgC6.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DUGeUz4o.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DRWQKdnm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CplrA1Xb.js";import"./styled-CqKFH6eA.js";import"./IconButton-COXIliVf.js";import"./memoTheme-1eSCZRav.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Lw6uESYo.js";import"./useTimeout-B0l-dQbr.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useForkRef-BfO6-t9P.js";import"./useEventCallback-D4QkonYW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKP2WMPH.js";import"./Tooltip-BYMj-RjT.js";import"./useTheme-e92JqNOn.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useControlled-C0OF1VAF.js";import"./getReactElementRef-d6gO3Pyv.js";import"./Portal-DJpfMgk6.js";import"./utils-BWKdc28P.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cihilg2w.js";import"./Button-C68buGXp.js";import"./Paper-DYAzX1VO.js";import"./Typography-BB__VVHi.js";import"./index-CrcoPoGw.js";import"./index-B75hp5XN.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Db1uzRw5.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-X5erI1FX.js";import"./formControlState-Dq1zat_P.js";import"./Select-DqoCSbAA.js";import"./SelectFocusSourceContext-qiWoxQgp.js";import"./Popover-Cm29Ipyl.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DmKidiVf.js";import"./debounce-Be36O1Ab.js";import"./Modal-Hr0EA0wP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B1fHeAP2.js";import"./Fade-BmT7tLhS.js";import"./List-CTjmGkg1.js";import"./createSvgIcon-B259oLuI.js";import"./OutlinedInput-Di-XT6nh.js";import"./FormHelperText-LkC2Q1TY.js";import"./FormControlLabel-CXnKQHZS.js";import"./Switch-CY48rVhs.js";import"./SwitchBase-DCKaqOED.js";import"./Radio-ca9tiySW.js";import"./RadioGroup-DloPrg92.js";import"./FormGroup-7kR7A8Vb.js";import"./Stack-BQFWbwCa.js";import"./styled-B5mLmA23.js";import"./Box-BKdDafZT.js";import"./Divider-B87S6cGg.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-B7k0uIkV.js";import"./Container-QJP-imy5.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
