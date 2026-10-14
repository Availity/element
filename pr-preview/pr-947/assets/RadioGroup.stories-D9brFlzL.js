import{j as o}from"./iframe-C7RYpRRO.js";import{C as p}from"./RadioGroup-DqnOQOSX.js";import{B as m}from"./index-C-TAFGmA.js";import{P as l}from"./index-D141wv3c.js";import{T as n}from"./index-BnSCHJ_C.js";import{c as e,d as i}from"./index-miMFKzwY.js";import{G as d}from"./index-C2dcAPuD.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DSRVq6kN.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-WAkVHsJd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BSDmqwdX.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Do9YpkA9.js";import"./styled-Cqgr8yLU.js";import"./IconButton-DUEQnTYy.js";import"./memoTheme-DZ9vOlqG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-YfnvzWnB.js";import"./useTimeout-IWs7fXER.js";import"./TransitionGroupContext-D50vcWaO.js";import"./useForkRef-mY6jA1_e.js";import"./useEventCallback-BmDadX9V.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DRusqeVx.js";import"./Tooltip-By5WBZwq.js";import"./useTheme-WpQOCtdc.js";import"./useSlot-lfX05XTl.js";import"./mergeSlotProps-BkPIbwBi.js";import"./useControlled-C5e-G2Uo.js";import"./getReactElementRef-CzYjVf0K.js";import"./Portal-B-Fuv61-.js";import"./utils-BrOTTAGC.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CyQLJvs1.js";import"./Button-DYbxeNEo.js";import"./Paper-DUYPN4Ep.js";import"./Typography-heIaV1nZ.js";import"./index-MVgG_W0q.js";import"./index-B0i75ydy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZsvZcJW.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CsJ_Ttuz.js";import"./formControlState-Dq1zat_P.js";import"./Select-vyzsrS7k.js";import"./SelectFocusSourceContext-Des1O4JU.js";import"./Popover-Bq3gAnqf.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BKdWdZnu.js";import"./debounce-Be36O1Ab.js";import"./Modal-Vlv0KwQ6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DbHQkIp9.js";import"./Fade-BHmjLU7V.js";import"./List-BcqSLVqi.js";import"./createSvgIcon-Dc4WGqJQ.js";import"./OutlinedInput-EMbPCbiK.js";import"./FormHelperText-HnS8eQWb.js";import"./FormControlLabel-CvDpl5RW.js";import"./Switch-BITMdJ8m.js";import"./SwitchBase-C3jOb5-J.js";import"./Radio-CO_Uo7ot.js";import"./RadioGroup-CBZao7AR.js";import"./FormGroup-lR-44Vgx.js";import"./Stack-D9VD4k0X.js";import"./styled-Cn_UBHgZ.js";import"./Box-DobRJWDd.js";import"./Divider-DIUIqII7.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-52szHxD-.js";import"./Container-Bhb68_To.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
