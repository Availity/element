import{j as t}from"./iframe-BXngGBfv.js";import{C as e}from"./Autocomplete-BZjnCkR5.js";import{B as i}from"./index-ZvN5iItO.js";import{P as s}from"./index-Dc7aN8sI.js";import{T as a}from"./index-Cw2AsxKm.js";import{G as l}from"./index-D7EY_zU-.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-CFyTxmyX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBr4wjoc.js";import"./index-D-_Q406J.js";import"./index-Bk46c2ns.js";import"./index-BiBDMnSv.js";import"./index-Cf4ih-NU.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BJuCOs7n.js";import"./memoTheme-By_0Hb9I.js";import"./styled-Bawvqwj4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-POAGYpGd.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CYmoh9g8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CAygNoe6.js";import"./Menu-DGj6ldkx.js";import"./useSlot-CrmQg2MJ.js";import"./mergeSlotProps-Brb8C4Ss.js";import"./useForkRef-BPuQGl16.js";import"./useSlotProps-Djma3IUa.js";import"./Popover-3ptJ9M55.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-71LMLhER.js";import"./useTheme-C0sMdU1B.js";import"./utils-Co-MjcrY.js";import"./TransitionGroupContext-CO0Qzr5e.js";import"./useTimeout-DWqRGYei.js";import"./getReactElementRef-BBa8qN_k.js";import"./mergeSlotProps-tz8U3nPv.js";import"./debounce-Be36O1Ab.js";import"./Modal-DmtASUzd.js";import"./useEventCallback-BS9kycBS.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-sSmeMUd4.js";import"./Fade-CaBS8FWJ.js";import"./Paper-DbLV-z9R.js";import"./List-83oLdzCs.js";import"./utils-DoM3o7-Q.js";import"./useControlled-XJJbW9AP.js";import"./createSvgIcon-PKFeQm70.js";import"./OutlinedInput-D8j1VWle.js";import"./FormHelperText-C-R3JwUM.js";import"./FormControlLabel-D-20YuFd.js";import"./Typography-CV53WmLj.js";import"./Switch-Xno7-L_Z.js";import"./SwitchBase-BmDSdJmL.js";import"./ButtonBase-CzabJsBp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DCMCbOVJ.js";import"./RadioGroup-BskKp_ip.js";import"./FormGroup-BPXNegLF.js";import"./Box-Cs53hwdz.js";import"./Divider-BN0wEXXb.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DSCZMnTD.js";import"./styled-B3TWJa8B.js";import"./TextField-B7AnE0ah.js";import"./FormControl-zzhLjcAz.js";import"./isMuiElement-7V78C_da.js";import"./Grid-DhicbWoX.js";import"./index-BwXywnDN.js";import"./index-ms7ilKFh.js";import"./___vite-browser-external_commonjs-proxy-tsDcHO6r.js";import"./index-e8mVNsDS.js";import"./_toKey-OtZEyFlA.js";import"./Autocomplete-COSBizs6.js";import"./Close-D0vvQXqp.js";import"./usePreviousProps-CwuWlbor.js";import"./Tooltip-16k3P5ny.js";import"./Chip-CKInQU5C.js";import"./IconButton-B7Rw7xc_.js";import"./CircularProgress-CH7ElgU6.js";import"./ListSubheader-rfglpbP7.js";import"./useInfiniteQuery-Bp7ZlByQ.js";import"./useBaseQuery-CGWls5ZE.js";import"./suspense-DGhvI0Xn.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-BjebpOto.js";import"./Container-BIFp3KrG.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
