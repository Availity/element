import{j as t}from"./iframe-DV02LU8f.js";import{C as e}from"./Autocomplete-iK32ePsY.js";import{B as i}from"./index-DgtuzQHk.js";import{P as s}from"./index-1EbFGlVC.js";import{T as a}from"./index-D2YoiO12.js";import{G as l}from"./index-DN1f2VGk.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BfkWILhT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1WCKDFF.js";import"./index-k3iUcuPT.js";import"./index-DGPCr9CP.js";import"./index-CrcoPoGw.js";import"./index-B2ndQJTP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BicIoovE.js";import"./memoTheme-DH1tDBpV.js";import"./styled-rnNWEicw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DxmpMApS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-rUj125Nx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-SJiTaZi2.js";import"./SelectFocusSourceContext-D8Hbh3nZ.js";import"./useSlot-Hu3W-cCE.js";import"./mergeSlotProps-Bc2Oi4bk.js";import"./useForkRef-BwPtyht0.js";import"./useSlotProps-Dtx0TQHB.js";import"./Popover-BR27wnSV.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-PMyfFMaG.js";import"./useTheme-Y2xcdKFi.js";import"./utils-CvzJUHOJ.js";import"./TransitionGroupContext-BxFEbXtm.js";import"./useTimeout-7haRoRjC.js";import"./getReactElementRef-COC2CLEL.js";import"./mergeSlotProps-N6SvUUDD.js";import"./debounce-Be36O1Ab.js";import"./Modal-B3KISgYa.js";import"./useEventCallback-DerujR8C.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ci3V7QU8.js";import"./Fade-CAu7O51Y.js";import"./Paper-X_4XbRhq.js";import"./List-B86gDMtC.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DL5wIsJx.js";import"./createSvgIcon-ClgyEN0Z.js";import"./OutlinedInput-MfvrGn0E.js";import"./FormHelperText-B69_0vl5.js";import"./FormControlLabel-BmV4-vkc.js";import"./Typography-BZigmqh7.js";import"./Switch-CgHx9hmd.js";import"./SwitchBase-slcB8KUf.js";import"./ButtonBase-DyVkVOcL.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CReGbcbO.js";import"./RadioGroup-D4ixwP02.js";import"./FormGroup-ClgnKSXL.js";import"./Stack-BwJgyjvk.js";import"./styled-TfTHS2wg.js";import"./Box-SeXXrj1o.js";import"./Divider-DdW8tJiT.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DQoXfjFU.js";import"./FormControl-B-ToJw53.js";import"./isMuiElement-Bod-d1Ly.js";import"./Grid-CAt1Mh8-.js";import"./useInfiniteQuery-Czap1EF9.js";import"./suspense-CO-B5uc8.js";import"./useBaseQuery-GdXv1_-o.js";import"./index-CLj9BeNZ.js";import"./index-DA8EpHv8.js";import"./___vite-browser-external_commonjs-proxy-BXbXV1ez.js";import"./index-BkQ2mEsN.js";import"./Autocomplete-Htu68Yxs.js";import"./Close-CuIM6vU6.js";import"./usePreviousProps-Cce8Yeny.js";import"./Tooltip-BOv4Ws7L.js";import"./Chip-B-JS7L-C.js";import"./IconButton-D4Hw4OQf.js";import"./CircularProgress-CAVNnpCq.js";import"./ListSubheader-D8gcljHj.js";import"./Button-3YflG3_Z.js";import"./Container-C-cbttNX.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
