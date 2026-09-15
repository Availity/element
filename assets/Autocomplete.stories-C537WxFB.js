import{j as t}from"./iframe-_UUIOQuH.js";import{C as e}from"./Autocomplete-D_Fzh6kL.js";import{B as i}from"./index-TC4m-Pq9.js";import{P as s}from"./index-CN5W_Lp7.js";import{T as a}from"./index-ZH-6PAbo.js";import{G as l}from"./index-BtEaczgi.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BSikp1LP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-yXswKy6G.js";import"./index-DkZHOse5.js";import"./index-xNAiQBP1.js";import"./index-CrcoPoGw.js";import"./index-C64ixpTy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bp4jKyt3.js";import"./memoTheme-CIZa69Jr.js";import"./styled-b9_l-4u0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DQWo1yfq.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CTluzM1B.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Une4fEtR.js";import"./SelectFocusSourceContext-r48ZZdc4.js";import"./useSlot-CykKJjN_.js";import"./mergeSlotProps-BdoUtTwz.js";import"./useForkRef-Ds0id4pA.js";import"./useSlotProps-Ceux9c--.js";import"./Popover-xKML6FqO.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CM-iumOR.js";import"./useTheme-CMhvYveJ.js";import"./utils-CA__7Tjr.js";import"./TransitionGroupContext-BWER5STN.js";import"./useTimeout-CpXLyJm7.js";import"./getReactElementRef-C0bnOj0D.js";import"./mergeSlotProps-Bn9bLFsW.js";import"./debounce-Be36O1Ab.js";import"./Modal-CM12C_yu.js";import"./useEventCallback-C78AkP7O.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BIxTCRW2.js";import"./Fade-BLKcm6ko.js";import"./Paper-P8N6YQhi.js";import"./List-C4OA8wB0.js";import"./utils-DoM3o7-Q.js";import"./useControlled-De2ikPKN.js";import"./createSvgIcon-4iIpqybs.js";import"./OutlinedInput-DGiceUve.js";import"./FormHelperText-pYsIiyHO.js";import"./FormControlLabel-DPHIrrlZ.js";import"./Typography-6OKQ2qDF.js";import"./Switch-bAqugkzY.js";import"./SwitchBase-DgyKBDYv.js";import"./ButtonBase-B29bExhs.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D6-4V09b.js";import"./RadioGroup-CNUqCHUu.js";import"./FormGroup-CE3PB0EV.js";import"./Stack-DyYrotpf.js";import"./styled-D33n_PsO.js";import"./Box-B5h19-4r.js";import"./Divider-DtxNcQca.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BmCYopNL.js";import"./FormControl-Cpyq_H8j.js";import"./isMuiElement-WWIYAN0M.js";import"./Grid-CC4gnOAh.js";import"./useInfiniteQuery-hSa4t6lC.js";import"./suspense-Duf7jLkv.js";import"./useBaseQuery-DY57yvd4.js";import"./index-CVIUoUuq.js";import"./index-DpN0Z2Me.js";import"./___vite-browser-external_commonjs-proxy-BQo9Raix.js";import"./index-DzHtvXsL.js";import"./Autocomplete-DYh7LOHv.js";import"./Close-D8gVO89g.js";import"./usePreviousProps-C0fFGNib.js";import"./Tooltip-BIzLnAgn.js";import"./Chip-B5Jru15l.js";import"./IconButton-CUKPhxxE.js";import"./CircularProgress-DrYD12o3.js";import"./ListSubheader-Crp0vEY-.js";import"./Button-BOTNYh0S.js";import"./Container-Abk-Ppxh.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
