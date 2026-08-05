import{j as o}from"./iframe-Cl61WGkI.js";import{C as p}from"./RadioGroup-DZ3mnLNN.js";import{B as m}from"./index-CqgX4Pjw.js";import{P as l}from"./index-DEMyV-7J.js";import{T as n}from"./index-CJQ0Fxar.js";import{c as e,d as i}from"./index-DjWqBCXk.js";import{G as d}from"./index-D0cf1ol3.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BbogUaub.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DYxyVnQd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D2EIO9e7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Cx1dzcL4.js";import"./styled-BC98FWsK.js";import"./Tooltip-BWDly8di.js";import"./useTheme-IfO6Fwpt.js";import"./memoTheme-Bl50oicv.js";import"./useSlot-BNKzCfYO.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useForkRef-BgBNpKdE.js";import"./useTimeout-DRIZehDr.js";import"./useControlled-Df0GFCpG.js";import"./useEventCallback-04OY0OEQ.js";import"./getReactElementRef-C7aNrngo.js";import"./Portal-CKqV7NOt.js";import"./utils-BISW7tPB.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwXPHno3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-q11oqdUa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-q-jaW3RD.js";import"./CircularProgress-Bq8oVM2O.js";import"./Button-DuB2O4vc.js";import"./Paper-DdNx7n5g.js";import"./Typography-BbUycIDS.js";import"./index-CrcoPoGw.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dwb1J2d-.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BSv5oG3S.js";import"./formControlState-Dq1zat_P.js";import"./Select-Cn1KxIPd.js";import"./SelectFocusSourceContext-CAKJeAkQ.js";import"./Popover-Du9tN1-X.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-ZgLDWHqg.js";import"./debounce-Be36O1Ab.js";import"./Modal-B_tt91Mu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-C_s6yW8r.js";import"./Fade-sz48bo3z.js";import"./List-BAGNgyyd.js";import"./createSvgIcon-C9mzZA9x.js";import"./OutlinedInput-ClvlI1xc.js";import"./FormHelperText-C194FQMi.js";import"./FormControlLabel-DjUlFFqe.js";import"./Switch-BDf-0e9Z.js";import"./SwitchBase-BclwBU3W.js";import"./Radio-CgniSRaf.js";import"./RadioGroup-DT7A7289.js";import"./FormGroup-NS8rU_fN.js";import"./Stack-DbcIcCvU.js";import"./styled-DUX11FjB.js";import"./Box-BylFce9S.js";import"./Divider-DDnoJtKN.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CY38bvtz.js";import"./Container-CQCkLV4U.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
