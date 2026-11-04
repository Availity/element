import{j as o}from"./iframe-B7It4zq8.js";import{C as p}from"./RadioGroup-CrPiiiUS.js";import{B as m}from"./index-U6rGSuo_.js";import{P as l}from"./index-Cs6zky6n.js";import{T as n}from"./index-B9JugXxe.js";import{c as e,d as i}from"./index-eyGbV9a5.js";import{G as d}from"./index-NPVdg4Et.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-Damkin-E.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-BIzU-s4D.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B-9vmVn0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Co847M5i.js";import"./styled-Bn4RjmYR.js";import"./IconButton-C-t-b5Lt.js";import"./memoTheme-CGf3L_ek.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2waO-fK.js";import"./useTimeout-YUVk49Nr.js";import"./TransitionGroupContext-DcJKCyB0.js";import"./useForkRef-CPn4J3x7.js";import"./useEventCallback-C74dKXBI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B2uMItbz.js";import"./Tooltip-CzJoUoCR.js";import"./useTheme-BEYyhBmQ.js";import"./useSlot-W932GJWf.js";import"./mergeSlotProps-D605olu0.js";import"./useControlled-D_SZmVUM.js";import"./getReactElementRef-DdXJtssw.js";import"./Portal-Dv_fvGmT.js";import"./utils-8hf5HdRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-5kTH7JUJ.js";import"./Button-BIhtYg5K.js";import"./Paper-16eSpGwX.js";import"./Typography-D5VLn6r5.js";import"./index-MVgG_W0q.js";import"./index-DahGL3Ws.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CN80xc_w.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DL9fs6b-.js";import"./formControlState-Dq1zat_P.js";import"./Select-CqroXm0-.js";import"./SelectFocusSourceContext-p7Q9PkOh.js";import"./Popover-CvEl5u9c.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CT132jMM.js";import"./debounce-Be36O1Ab.js";import"./Modal-XCKy5Q-Z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CMsbxjXn.js";import"./Fade-dOEIYsg7.js";import"./List-BBFik3I9.js";import"./createSvgIcon-mTQeEUrk.js";import"./OutlinedInput-2NJ2Vb7h.js";import"./FormHelperText-xZDaLp3L.js";import"./FormControlLabel-DzsUjCY9.js";import"./Switch-gEQ3qE6L.js";import"./SwitchBase-CGG-3b0l.js";import"./Radio-BrnWVLWC.js";import"./RadioGroup-CCkcY1aL.js";import"./FormGroup-CrkydTVS.js";import"./Stack-KZSUJmtQ.js";import"./styled-DnXB-Vry.js";import"./Box-DCJTclMn.js";import"./Divider-hoZSVZoR.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-A8igwbvH.js";import"./Container-DFLwTEF8.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
