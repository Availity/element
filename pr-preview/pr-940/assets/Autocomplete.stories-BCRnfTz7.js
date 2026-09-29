import{j as t}from"./iframe-ClyInPD8.js";import{C as e}from"./Autocomplete-cjGsQK5K.js";import{B as i}from"./index-Cl8nDLSA.js";import{P as s}from"./index-D4dMoVYF.js";import{T as a}from"./index-BS5Ax9ph.js";import{G as l}from"./index-zd_NREJJ.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-B3kSS8oH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Drk2cyYL.js";import"./index-C9_Meo4o.js";import"./index-BBWIuguO.js";import"./index-CrcoPoGw.js";import"./index-W6CH2PNc.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DfVeW2fT.js";import"./memoTheme-CULMZTzm.js";import"./styled-D7PoFJCi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D-Th-UGt.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-uCK0rOs6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-K3icrudd.js";import"./SelectFocusSourceContext-DyH9g7NM.js";import"./useSlot-D46kf6z6.js";import"./mergeSlotProps-DRm6mdtU.js";import"./useForkRef-CWYhWoid.js";import"./useSlotProps-D2_jX090.js";import"./Popover-DPOqsvJI.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-6M9c9Gfh.js";import"./useTheme-Cf-PtNfg.js";import"./utils-DIFk0nuU.js";import"./TransitionGroupContext-DtZ8GaDC.js";import"./useTimeout-Bv1knD6m.js";import"./getReactElementRef-Cs8-_4yh.js";import"./mergeSlotProps-m5IYYthV.js";import"./debounce-Be36O1Ab.js";import"./Modal-B7upLf36.js";import"./useEventCallback-CQShbQqM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DGkZDyow.js";import"./Fade-5LrOnsLV.js";import"./Paper-2PN-0rlq.js";import"./List-CeyWtXC0.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CId5aZ2_.js";import"./createSvgIcon-C9dBkbUF.js";import"./OutlinedInput-DSggnpCx.js";import"./FormHelperText-DIonPlvk.js";import"./FormControlLabel-xIGoThDj.js";import"./Typography-D3903seB.js";import"./Switch-CCHprpAt.js";import"./SwitchBase-DQRax_vO.js";import"./ButtonBase-CL-JJlq6.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio--iMoPkP6.js";import"./RadioGroup-CB2wjVzu.js";import"./FormGroup-3MIP52gK.js";import"./Stack-nuzf0IeA.js";import"./styled-XkY1prTM.js";import"./Box-eNTJbR1-.js";import"./Divider-DWJuH81S.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BNaoQOjp.js";import"./FormControl-rEZ7rltD.js";import"./isMuiElement-Bh35qceP.js";import"./Grid-CgIe3-7e.js";import"./useInfiniteQuery-Z37EAIoh.js";import"./suspense-DEEU3iMy.js";import"./useBaseQuery-CPDgvy8s.js";import"./index-0GE0S2-b.js";import"./index-CDDPJt8D.js";import"./___vite-browser-external_commonjs-proxy-4ZAXEZ6z.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-E1snY22m.js";import"./Close-cAlMT6qa.js";import"./usePreviousProps-6Hxe3MN0.js";import"./Tooltip-D3BuTBo3.js";import"./Chip-BfTKcrZX.js";import"./IconButton-3p_Hzj1M.js";import"./CircularProgress-Cfnaefvx.js";import"./ListSubheader-BYq0YIVh.js";import"./Button-C1rBrVEa.js";import"./Container-DALlxZP3.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Zt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Zt as __namedExportsOrder,Yt as default};
