import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{C as i}from"./Checkbox-qdGLdnBD.js";import{B as s}from"./index-k9OtkSpc.js";import{u as b,F as x}from"./index.esm-Cdw3oWqD.js";import{P as f}from"./index-Bd2OKRRh.js";import{T as h}from"./index-ClMemn8c.js";import{F as C,g as m}from"./index-CkWMovvl.js";import{G as S}from"./index-DmY_4rvh.js";import{C as g,a as F}from"./Types-FWYZLT-L.js";import{F as j}from"./FormControl-eNKWX08Y.js";import{F as y}from"./RadioGroup-CGGGzwtq.js";import"./index-ChsGqxH_.js";import"./index-CC6mOWec.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Checkbox-DEN02h0-.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./SwitchBase-DpeF2ikX.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./useFormControl-t_-EwZHM.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./useControlled-DxC1uCGX.js";import"./ButtonBase-DwAEbHIm.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./useForkRef-Dz4aGlyk.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DK1T27V3.js";import"./SvgIcon-D3xe1wVB.js";import"./memoTheme-BLrvrRyo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Tooltip-Xh9QA514.js";import"./index-DyJdRKzS.js";import"./useTheme-BGaXYmwe.js";import"./useTheme-CVByJb8R.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-DEVqEMA6.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DT0tbkWv.js";import"./IconButton-BFylt634.js";import"./CircularProgress-o1goEU37.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./Paper-zGtC1N39.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";import"./index-DJKl12U0.js";import"./index-CmMPo3bx.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./faCheck-BUdkY9Qv.js";import"./Select-D8Pqa1Dd.js";import"./formControlState-Dq1zat_P.js";import"./Menu-BUIr0rCt.js";import"./Popover-DNs0CrC2.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-BSor9Am9.js";import"./Backdrop-DwIksyfj.js";import"./Fade-rL0rk9XF.js";import"./List-CN2yCDHK.js";import"./OutlinedInput-ClKDCKpR.js";import"./FormControlLabel-NrRuXsuu.js";import"./Switch-B_HzHwQu.js";import"./Box-BU2WakPM.js";import"./Divider-CE8hkX1u.js";import"./dividerClasses-Cy3VQ5Zc.js";import"./Stack-2ILcP_1D.js";import"./styled-CsKbBpC_.js";import"./useThemeProps-BNBLMFIr.js";import"./Grid2-BbvvmKhh.js";import"./isMuiElement-DiOAsJE6.js";import"./Container-DvcsWH8C.js";const mr={title:"Form Components/Controlled Form/ControlledCheckbox",component:i,tags:["autodocs"],argTypes:{...F,...g},parameters:{controls:{exclude:["form","formAction","formEncType","formMethod","formNoValidate","formTarget","key","max","maxLength","min","minLength","pattern","style","tabIndex"]}}},t={render:c=>{var e,p,n;const r=b();return o.jsx(x,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(u=>u),children:[o.jsxs(j,{children:[o.jsx(C,{id:"radio-group",component:"div",children:"Radio Group"}),o.jsxs(y,{children:[o.jsx(m,{label:"Option 1",control:o.jsx(i,{...c})}),o.jsx(m,{label:"Option 2",control:o.jsx(i,{name:"Option 2"})}),o.jsx(m,{label:"Option 3",control:o.jsx(i,{name:"Option 3"})})]})]}),o.jsxs(S,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(s,{disabled:!((e=r==null?void 0:r.formState)!=null&&e.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(s,{type:"submit",disabled:(p=r==null?void 0:r.formState)==null?void 0:p.isSubmitSuccessful,children:"Submit"})]}),(n=r==null?void 0:r.formState)!=null&&n.isSubmitSuccessful?o.jsxs(f,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(h,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledCheckbox"}};var a,l,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: ControlledCheckboxProps) => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <FormControl>
            <FormLabel id="radio-group" component="div">
              Radio Group
            </FormLabel>
            <FormGroup>
              <FormControlLabel label="Option 1" control={<ControlledCheckbox {...args} />} />
              <FormControlLabel label="Option 2" control={<ControlledCheckbox name="Option 2" />} />
              <FormControlLabel label="Option 3" control={<ControlledCheckbox name="Option 3" />} />
            </FormGroup>
          </FormControl>
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
    name: 'controlledCheckbox'
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const er=["_ControlledCheckbox"];export{t as _ControlledCheckbox,er as __namedExportsOrder,mr as default};
