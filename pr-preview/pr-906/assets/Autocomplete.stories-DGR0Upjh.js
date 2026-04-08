import{j as t}from"./iframe-B3XSEB2p.js";import{C as e}from"./Autocomplete-DF6suxA_.js";import{B as i}from"./index-BDo5zO46.js";import{P as s}from"./index-CtT1n6Ib.js";import{T as a}from"./index-CeHXh4ln.js";import{G as l}from"./index-CTZEFlon.js";import{b as n,a as d}from"./Types-DLUIPKsS.js";import{u,F as c}from"./index.esm-X4vKkGz5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEfdnkmo.js";import"./index-B6wtrm71.js";import"./index-DF0ei3mA.js";import"./index-BiBDMnSv.js";import"./index-CAS_Ehni.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BW4di25g.js";import"./memoTheme-zFBVIAxJ.js";import"./styled-BKJUYYzH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CxLEzcw-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-rtm0CpB1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BjYusGuK.js";import"./Menu-Dd8TIx7v.js";import"./useSlot-fXCwMtx-.js";import"./mergeSlotProps-BUA7aXyy.js";import"./useForkRef-BFyiqj42.js";import"./useSlotProps-BnXi_Ts5.js";import"./Popover-DxzJjHiF.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DeOXpMrf.js";import"./useTheme-Gs2b_SoM.js";import"./utils-CMJMNufc.js";import"./TransitionGroupContext-bUHI8Opa.js";import"./useTimeout-DjubHrAv.js";import"./getReactElementRef-m4HA6qqR.js";import"./mergeSlotProps-DbeHDdbS.js";import"./debounce-Be36O1Ab.js";import"./Modal-3VYdLW2j.js";import"./useEventCallback-Dfz_oY_W.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DfrvDDlR.js";import"./Fade-BhRChvyZ.js";import"./Paper-CGKnoNLB.js";import"./List-DQXlBrYZ.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BnIqSLBp.js";import"./createSvgIcon-DXiAxkxb.js";import"./OutlinedInput-DspMNzyC.js";import"./FormHelperText-B6YW8aeN.js";import"./FormControlLabel-DCV2mEAb.js";import"./Typography-BStgzFan.js";import"./Switch-C8UoIn7g.js";import"./SwitchBase-zf7Fsryl.js";import"./ButtonBase-CV7JyDx9.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BX0zjP_U.js";import"./RadioGroup-PiA-pQ_J.js";import"./FormGroup-BicZh9bY.js";import"./Box-CT-z8ogS.js";import"./Divider-CYS1Q5pq.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-Bkt6nYoM.js";import"./styled-lVb8KQEy.js";import"./TextField-Cb0YKekm.js";import"./FormControl-BWJTqszo.js";import"./isMuiElement-ZiQktaUF.js";import"./Grid-DWbHQ1o7.js";import"./index-DaHy4RTs.js";import"./index-LLOc9r_p.js";import"./___vite-browser-external_commonjs-proxy-D_QPNMAp.js";import"./index-C_mhbxUc.js";import"./_toKey-oOlzM8_d.js";import"./Autocomplete-D2RnWrdN.js";import"./Close-C9YG2uHw.js";import"./usePreviousProps-DT6HsHo9.js";import"./Tooltip-CpMdDorm.js";import"./Chip-Dgm4ZKzK.js";import"./IconButton-ML2PMq2-.js";import"./CircularProgress-C6blXItT.js";import"./ListSubheader-BkBTGtzM.js";import"./useInfiniteQuery-BXSxI6Tl.js";import"./useBaseQuery-DNnM5_HO.js";import"./suspense-B_pfBgwF.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-Cx7ia3Qx.js";import"./Container-Dg4ygdO4.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const to=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,to as __namedExportsOrder,$t as default};
