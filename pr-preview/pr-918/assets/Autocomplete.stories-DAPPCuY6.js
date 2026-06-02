import{j as t}from"./iframe-CNKi_Ec9.js";import{C as e}from"./Autocomplete-B0NBHcIP.js";import{B as i}from"./index-B621nc9Z.js";import{P as s}from"./index-ByGDk7fM.js";import{T as a}from"./index-1Jxp0Aiy.js";import{G as l}from"./index-BM_So9FB.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-Ct13z9VB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJsGL89G.js";import"./index-DZ4TRnQ0.js";import"./index-CQjy1HYz.js";import"./index-BiBDMnSv.js";import"./index-B_WSnka_.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DRZMbgGT.js";import"./memoTheme-DeusU9l_.js";import"./styled-CGPS0K8z.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CpWhdyIU.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DxT84DOF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Bzhx4OcW.js";import"./Menu-BFHZ6L8B.js";import"./useSlot-6u895GGS.js";import"./mergeSlotProps-NHo9zqIM.js";import"./useForkRef-BcCxGyq_.js";import"./useSlotProps-BIvI5Lxh.js";import"./Popover-DyVfRwhv.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-C3A-VfFU.js";import"./useTheme-BKQS-hPu.js";import"./utils-SSfZp7cC.js";import"./TransitionGroupContext-BESWVVvg.js";import"./useTimeout-qmb5R95B.js";import"./getReactElementRef-8X4grM9z.js";import"./mergeSlotProps-BwVcmSim.js";import"./debounce-Be36O1Ab.js";import"./Modal-CT8tTE_f.js";import"./useEventCallback-Cws-zXFa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJANX_Gq.js";import"./Fade-B4qzam9p.js";import"./Paper-B0v8-sA3.js";import"./List-D58GBsbd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-w5dFxqhC.js";import"./createSvgIcon-DLBoSPlD.js";import"./OutlinedInput-DZuvzaas.js";import"./FormHelperText-BvYn2Wec.js";import"./FormControlLabel-CCq1oojw.js";import"./Typography-DIfLarQN.js";import"./Switch-CCv0qv0x.js";import"./SwitchBase-CGY2Ihdn.js";import"./ButtonBase-CiH38IXk.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-XdbEbU1g.js";import"./RadioGroup-QR865JiM.js";import"./FormGroup-DeFM7qwO.js";import"./Box-DEr-V8__.js";import"./Divider-CeqzL_MC.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CcjdTXZq.js";import"./styled-CVVnUVY6.js";import"./TextField-DqCZUMPe.js";import"./FormControl-Bs8BKLyH.js";import"./isMuiElement-B5CkoKss.js";import"./Grid-DePYc70X.js";import"./index-DNXNY5D2.js";import"./index-DWFTOh8w.js";import"./___vite-browser-external_commonjs-proxy-DUgwFB0-.js";import"./index-BYBZ-AT1.js";import"./_toKey-BB_T5pb7.js";import"./Autocomplete-CB-4S66e.js";import"./Close-Dm6cDoM0.js";import"./usePreviousProps-CoKQh4YU.js";import"./Tooltip-CJ_GLTq5.js";import"./Chip-DVvGc7cj.js";import"./IconButton-CeXbiSrq.js";import"./CircularProgress-BrUNS0I2.js";import"./ListSubheader-DC0TrY1P.js";import"./useInfiniteQuery-DUFIDECd.js";import"./useBaseQuery-C0dz7yvk.js";import"./suspense-BHdj88FS.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-CTbvABeh.js";import"./Container-DdiDjvnS.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
