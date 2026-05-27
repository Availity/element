import{j as t}from"./iframe-BAio8bRO.js";import{C as e}from"./Autocomplete-DFgdeWWO.js";import{B as i}from"./index-Cu3Q3wdb.js";import{P as s}from"./index-D6g6WvHI.js";import{T as a}from"./index-CvE6eDwb.js";import{G as l}from"./index-q0NfFQ9-.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-CDIrdiAF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjU4Gba_.js";import"./index-CXnObOtK.js";import"./index-yxUFkiba.js";import"./index-BiBDMnSv.js";import"./index-D6CmWoDY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-tye3QKHe.js";import"./memoTheme-B5Zw--p6.js";import"./styled-BVlyzXC0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DzJu46U9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DkRYiQSC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CgPW8wBS.js";import"./Menu-CNZsUiwy.js";import"./useSlot-BVjxSlY9.js";import"./mergeSlotProps-CmGkLNGM.js";import"./useForkRef-DNDPTA8R.js";import"./useSlotProps-CFXUmX-_.js";import"./Popover-DwmwO2CA.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DtZMvnVy.js";import"./useTheme-BlST_Otk.js";import"./utils-LXi-Tlok.js";import"./TransitionGroupContext-DZhFA06X.js";import"./useTimeout-BkgJttAJ.js";import"./getReactElementRef-C8WT4AXt.js";import"./mergeSlotProps-CA_Fws6O.js";import"./debounce-Be36O1Ab.js";import"./Modal-Cb932oqz.js";import"./useEventCallback-9-WTFaLk.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DUEOgCON.js";import"./Fade-D__YuxCd.js";import"./Paper-DW5lDWun.js";import"./List-BfAeB2nv.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BkSKTHhF.js";import"./createSvgIcon-BHdN4xjz.js";import"./OutlinedInput-BRrwvmjS.js";import"./FormHelperText-DXCvGRLv.js";import"./FormControlLabel-BTqQRKxw.js";import"./Typography-BPUxSRI8.js";import"./Switch-b6dmdWoZ.js";import"./SwitchBase-C_i35j5v.js";import"./ButtonBase-Ae9hTywr.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-99FOiw6S.js";import"./RadioGroup-BcF4x91b.js";import"./FormGroup-DD4jPXUp.js";import"./Box-D9uuWVv-.js";import"./Divider-CSqQtEDI.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-bN5r8_lU.js";import"./styled-EJoH7QSk.js";import"./TextField-BC2Rk5jj.js";import"./FormControl-Bk8NkQjv.js";import"./isMuiElement-AydbSc-U.js";import"./Grid-t7gGqywk.js";import"./index-CeF8IBRN.js";import"./index-RudpxiCl.js";import"./___vite-browser-external_commonjs-proxy-fC2KNp90.js";import"./index-cDutZPbR.js";import"./index-DcNlVx-A.js";import"./_toKey-Cn80klBW.js";import"./Autocomplete--VVyWx7S.js";import"./Close-ExXnYhk-.js";import"./usePreviousProps-Ba6z9h2l.js";import"./Tooltip-hIKEgUI5.js";import"./Chip-BtAizNez.js";import"./IconButton-Cgj-zrzq.js";import"./CircularProgress-DwO4_zrq.js";import"./ListSubheader-DDx7qULe.js";import"./useInfiniteQuery-DdFGXaIL.js";import"./useBaseQuery-DJ1ZKsDm.js";import"./suspense-JDytfcG3.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-CfkShIuN.js";import"./Container-CV_lDoo_.js";const to={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const oo=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,oo as __namedExportsOrder,to as default};
