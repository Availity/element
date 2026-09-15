import{j as o}from"./iframe-_UUIOQuH.js";import{C as p}from"./RadioGroup-CiVT_j3p.js";import{B as m}from"./index-TC4m-Pq9.js";import{P as l}from"./index-CN5W_Lp7.js";import{T as n}from"./index-ZH-6PAbo.js";import{c as e,d as i}from"./index-xNAiQBP1.js";import{G as d}from"./index-BtEaczgi.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BSikp1LP.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-Cpyq_H8j.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CTluzM1B.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-WWIYAN0M.js";import"./styled-b9_l-4u0.js";import"./IconButton-CUKPhxxE.js";import"./memoTheme-CIZa69Jr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B29bExhs.js";import"./useTimeout-CpXLyJm7.js";import"./TransitionGroupContext-BWER5STN.js";import"./useForkRef-Ds0id4pA.js";import"./useEventCallback-C78AkP7O.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrYD12o3.js";import"./Tooltip-BIzLnAgn.js";import"./useTheme-CMhvYveJ.js";import"./useSlot-CykKJjN_.js";import"./mergeSlotProps-BdoUtTwz.js";import"./useControlled-De2ikPKN.js";import"./getReactElementRef-C0bnOj0D.js";import"./Portal-CM-iumOR.js";import"./utils-CA__7Tjr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Ceux9c--.js";import"./Button-BOTNYh0S.js";import"./Paper-P8N6YQhi.js";import"./Typography-6OKQ2qDF.js";import"./index-CrcoPoGw.js";import"./index-C64ixpTy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bp4jKyt3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DQWo1yfq.js";import"./formControlState-Dq1zat_P.js";import"./Select-Une4fEtR.js";import"./SelectFocusSourceContext-r48ZZdc4.js";import"./Popover-xKML6FqO.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Bn9bLFsW.js";import"./debounce-Be36O1Ab.js";import"./Modal-CM12C_yu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BIxTCRW2.js";import"./Fade-BLKcm6ko.js";import"./List-C4OA8wB0.js";import"./createSvgIcon-4iIpqybs.js";import"./OutlinedInput-DGiceUve.js";import"./FormHelperText-pYsIiyHO.js";import"./FormControlLabel-DPHIrrlZ.js";import"./Switch-bAqugkzY.js";import"./SwitchBase-DgyKBDYv.js";import"./Radio-D6-4V09b.js";import"./RadioGroup-CNUqCHUu.js";import"./FormGroup-CE3PB0EV.js";import"./Stack-DyYrotpf.js";import"./styled-D33n_PsO.js";import"./Box-B5h19-4r.js";import"./Divider-DtxNcQca.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CC4gnOAh.js";import"./Container-Abk-Ppxh.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
