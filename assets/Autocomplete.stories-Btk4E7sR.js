import{j as t}from"./iframe-C9Q7A5ra.js";import{C as e}from"./Autocomplete-C5ekf9Gd.js";import{B as i}from"./index-Cb9JJsiN.js";import{P as s}from"./index-XE63nykw.js";import{T as a}from"./index-BeyzD6Q3.js";import{G as l}from"./index-0hLAGvby.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-TUX-hQDm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-YohD3H.js";import"./index-5h3DbdqU.js";import"./index-BV7HRARt.js";import"./index-BiBDMnSv.js";import"./index-CyBTe91T.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzclMxo5.js";import"./memoTheme-YF5MtDv6.js";import"./styled-0UczSNXk.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BmBjgzzS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CWsMajyi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-C1poooRd.js";import"./Menu-DBFXP6CC.js";import"./useSlot--WqN-Xj_.js";import"./mergeSlotProps-UhsM3zsz.js";import"./useForkRef-B8T8EBOK.js";import"./useSlotProps-Osd4OcEu.js";import"./Popover-BYapJmFI.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-1jOXhtNE.js";import"./useTheme-DiIVsm9U.js";import"./utils-BZDXaftX.js";import"./TransitionGroupContext-DyV0aRJH.js";import"./useTimeout-BpXHY--n.js";import"./getReactElementRef-D2IRer1N.js";import"./mergeSlotProps-CWYgiJ7A.js";import"./debounce-Be36O1Ab.js";import"./Modal-BGRke5kn.js";import"./useEventCallback-LHv8CayF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-QSng-jdr.js";import"./Fade-Qmg-4-l1.js";import"./Paper-BvFLUZyh.js";import"./List-zrL7hhVU.js";import"./utils-DoM3o7-Q.js";import"./useControlled-__FO7R_p.js";import"./createSvgIcon-CHtzqaAD.js";import"./OutlinedInput-CSgt8L6A.js";import"./FormHelperText-Cbb9nKyC.js";import"./FormControlLabel-DhgUYH0v.js";import"./Typography-DxUywEUK.js";import"./Switch-CdF7hf3S.js";import"./SwitchBase-DXRaGOfU.js";import"./ButtonBase-B3rBS9gF.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DztJdFCF.js";import"./RadioGroup-80iG6m5i.js";import"./FormGroup-BsWZdUIF.js";import"./Box-BiOrU6MK.js";import"./Divider-Uz9pEyYf.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DyDlGsHv.js";import"./styled-CCY5CIG6.js";import"./TextField-Dynpzfjp.js";import"./FormControl-CN3DMGzN.js";import"./isMuiElement-BgeoDj0f.js";import"./Grid-CzHxH48g.js";import"./index-UVINGYSN.js";import"./index-B9trg_F0.js";import"./___vite-browser-external_commonjs-proxy-gNskwvVU.js";import"./index-BxB72Ewe.js";import"./_toKey-CJoTaFB0.js";import"./Autocomplete-CDLvuE8c.js";import"./Close-BkT_rj0K.js";import"./usePreviousProps-CXOu6-J3.js";import"./Tooltip-Dxz12tat.js";import"./Chip-BkYq3PQG.js";import"./IconButton-DZcoIB4U.js";import"./CircularProgress-CPrPE9Sw.js";import"./ListSubheader-CuDZWS46.js";import"./useInfiniteQuery-CKqPgce2.js";import"./useBaseQuery-BfDlKaj5.js";import"./suspense-DmU8Qbqd.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-CeTzgLEE.js";import"./Container-CbMFSBjO.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
