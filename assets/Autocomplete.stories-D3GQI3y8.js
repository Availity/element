import{j as t}from"./iframe-C99277Jn.js";import{C as e}from"./Autocomplete-Ds2UAPKM.js";import{B as i}from"./index-BLVZqh54.js";import{P as s}from"./index-BO7sJviq.js";import{T as a}from"./index-FIATZ7h1.js";import{G as l}from"./index-y3fpgOs1.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BQNwubZA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tvZlOrcf.js";import"./index-BXoAtbqZ.js";import"./index-DtA39DZL.js";import"./index-BiBDMnSv.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BaWfF9je.js";import"./memoTheme-BcCvxPZB.js";import"./styled-BSyyF-nm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4tLKTmpv.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-nv_qHD3t.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BZkjZ3ZH.js";import"./Menu-BTFniDZi.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./useSlotProps-CQi1oJfT.js";import"./Popover-C720EYK_.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-rCUOv2ZO.js";import"./useTheme-rB5ljihk.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./useTimeout-Dw4BvZaa.js";import"./getReactElementRef-Bs67iJIN.js";import"./mergeSlotProps-BBfmIDSu.js";import"./debounce-Be36O1Ab.js";import"./Modal-BSnsGlt8.js";import"./useEventCallback-BvtgHlfy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CPg3TVnd.js";import"./Fade-DTvpgJPw.js";import"./Paper-YQNMXe3n.js";import"./List-DBdeSu6E.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DV2QdfFp.js";import"./createSvgIcon-Cab5rVDr.js";import"./OutlinedInput-BJeJtbfu.js";import"./FormHelperText-BLAKn_Zn.js";import"./FormControlLabel-5DOJ260I.js";import"./Typography-ZltxThzN.js";import"./Switch-B-MFS8IL.js";import"./SwitchBase-DtVc0w0b.js";import"./ButtonBase-B6dKL5Sm.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DMRBAorq.js";import"./RadioGroup-pJk0tL1L.js";import"./FormGroup-B_29syzn.js";import"./Box-XJPq1vP8.js";import"./Divider-D76QGJ0C.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DydGXCUI.js";import"./styled-CKZ50tVK.js";import"./TextField-B8-wNipc.js";import"./FormControl-CFCq4OSP.js";import"./isMuiElement-nAYICNXy.js";import"./Grid-iRC4uFdh.js";import"./index-BjYhjIdM.js";import"./index-D0-rmQLG.js";import"./___vite-browser-external_commonjs-proxy-B3BvfgAL.js";import"./index-CqGaOivi.js";import"./_toKey-Brw-ZAfO.js";import"./Autocomplete-BxGvqCGM.js";import"./Close-DOd84hl1.js";import"./usePreviousProps-tAWOXFY9.js";import"./Tooltip-1HJoGAor.js";import"./Chip-Dt6yc169.js";import"./IconButton-GExIkIsQ.js";import"./CircularProgress-DWs2PQSt.js";import"./ListSubheader-D3L7EbhR.js";import"./useInfiniteQuery-BKX6Xx3e.js";import"./useBaseQuery-Ds4G3ig6.js";import"./suspense-CD0AGWUG.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-D7NhHobB.js";import"./Container-CFzAHwrR.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
