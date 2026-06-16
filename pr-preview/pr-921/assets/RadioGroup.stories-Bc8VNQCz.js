import{j as o}from"./iframe-DV02LU8f.js";import{C as p}from"./RadioGroup-T7uu0nFs.js";import{B as m}from"./index-DgtuzQHk.js";import{P as l}from"./index-1EbFGlVC.js";import{T as n}from"./index-D2YoiO12.js";import{c as e,d as i}from"./index-DGPCr9CP.js";import{G as d}from"./index-DN1f2VGk.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BfkWILhT.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-B-ToJw53.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-rUj125Nx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Bod-d1Ly.js";import"./styled-rnNWEicw.js";import"./Tooltip-BOv4Ws7L.js";import"./useTheme-Y2xcdKFi.js";import"./memoTheme-DH1tDBpV.js";import"./useSlot-Hu3W-cCE.js";import"./mergeSlotProps-Bc2Oi4bk.js";import"./useForkRef-BwPtyht0.js";import"./useTimeout-7haRoRjC.js";import"./useControlled-DL5wIsJx.js";import"./useEventCallback-DerujR8C.js";import"./getReactElementRef-COC2CLEL.js";import"./Portal-PMyfFMaG.js";import"./utils-CvzJUHOJ.js";import"./TransitionGroupContext-BxFEbXtm.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dtx0TQHB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D4Hw4OQf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DyVkVOcL.js";import"./CircularProgress-CAVNnpCq.js";import"./Button-3YflG3_Z.js";import"./Paper-X_4XbRhq.js";import"./Typography-BZigmqh7.js";import"./index-CrcoPoGw.js";import"./index-B2ndQJTP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BicIoovE.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DxmpMApS.js";import"./formControlState-Dq1zat_P.js";import"./Select-SJiTaZi2.js";import"./SelectFocusSourceContext-D8Hbh3nZ.js";import"./Popover-BR27wnSV.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-N6SvUUDD.js";import"./debounce-Be36O1Ab.js";import"./Modal-B3KISgYa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ci3V7QU8.js";import"./Fade-CAu7O51Y.js";import"./List-B86gDMtC.js";import"./createSvgIcon-ClgyEN0Z.js";import"./OutlinedInput-MfvrGn0E.js";import"./FormHelperText-B69_0vl5.js";import"./FormControlLabel-BmV4-vkc.js";import"./Switch-CgHx9hmd.js";import"./SwitchBase-slcB8KUf.js";import"./Radio-CReGbcbO.js";import"./RadioGroup-D4ixwP02.js";import"./FormGroup-ClgnKSXL.js";import"./Stack-BwJgyjvk.js";import"./styled-TfTHS2wg.js";import"./Box-SeXXrj1o.js";import"./Divider-DdW8tJiT.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CAt1Mh8-.js";import"./Container-C-cbttNX.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
