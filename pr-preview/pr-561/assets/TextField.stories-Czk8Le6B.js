import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{C as a}from"./TextField-C436yAvY.js";import{C as c}from"./ControlledForm-DcsHhjsj.js";import{B as m}from"./index-Cc5uDiTV.js";import{a as p}from"./index.esm-CE2LouoS.js";import{P as x}from"./index-BrWjJmRs.js";import{T as S}from"./index-BtPDELIe.js";import{G as b}from"./index-Cyp_3NIz.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BvnjeVA-.js";import"./index-DJ-An7_D.js";import"./index-DMWJB0MK.js";import"./index-C_7pZhMU.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DSdWmKAH.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./faCheck-B05F4ORy.js";import"./Select-CuiA9glH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-Byu17A6t.js";import"./index-nos-0K8U.js";import"./useSlotProps-BAIpVL6Y.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./Popover-ChEuM7rO.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DnkSxE3X.js";import"./Portal-CBAx_nZm.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./getReactElementRef-AnOffBoZ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./utils-DoM3o7-Q.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./createSvgIcon-TketyoFF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-DG7lKq6G.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./FormLabel-98YPf6ct.js";import"./FormControlLabel-GqYWwHWT.js";import"./Typography-CvSvtD2a.js";import"./Switch-BqVUWLaW.js";import"./SwitchBase-Z9YgLJlx.js";import"./ButtonBase-DbVRbsLs.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-BogPRRDq.js";import"./Box-DWnb8VZB.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./TextField-DDpVXBDA.js";import"./FormControl-BPSU2g7t.js";import"./isMuiElement-DAzOCCHH.js";import"./Tooltip-CiiaKkqp.js";import"./IconButton-DSb4EJl9.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-BfU-Fa8o.js";import"./LoadingButton-ChfkXAvD.js";import"./Grid2-y9MPRr2u.js";import"./Container-Cqq8qXXg.js";const Wt={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{helperText:{type:"string"}}},o={render:i=>{const d=()=>{const{getValues:r,formState:{isSubmitSuccessful:e}}=p();return e?t.jsxs(x,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{children:JSON.stringify(r(),null,2)})]}):null},u=()=>{const{reset:r,formState:{isSubmitSuccessful:e}}=p();return t.jsxs(b,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(m,{disabled:!e,children:"Reset",color:"secondary",onClick:()=>r({[i.name]:""})}),t.jsx(m,{type:"submit",disabled:e,children:"Submit"})]})};return t.jsxs(c,{values:{[i.name]:""},onSubmit:r=>r,children:[t.jsx(a,{...i}),t.jsx(u,{}),t.jsx(d,{})]})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:"This field is required.",maxLength:{value:10,message:"Too long"},label:"TextField Label"}};var s,l,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: ControlledTextFieldProps) => {
    const SubmittedValues = () => {
      const {
        getValues,
        formState: {
          isSubmitSuccessful
        }
      } = useFormContext();
      return isSubmitSuccessful ? <Paper sx={{
        padding: '1.5rem',
        marginTop: '1.5rem'
      }}>
          <Typography variant="h2">Submitted Values</Typography>
          <pre>{JSON.stringify(getValues(), null, 2)}</pre>
        </Paper> : null;
    };
    const Actions = () => {
      const {
        reset,
        formState: {
          isSubmitSuccessful
        }
      } = useFormContext();
      return <Grid container direction="row" justifyContent="space-between" marginTop={1}>
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset({
          [args.name]: ''
        })} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>;
    };
    return <ControlledForm values={{
      [args.name]: ''
    }} onSubmit={data => data}>
        <ControlledTextField {...args} />
        <Actions />
        <SubmittedValues />
      </ControlledForm>;
  },
  args: {
    name: 'controlledTextField',
    helperText: 'This is some helper text',
    placeholder: 'Name',
    required: 'This field is required.',
    maxLength: {
      value: 10,
      message: 'Too long'
    },
    label: 'TextField Label'
  }
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const Xt=["_ControlledTextField"];export{o as _ControlledTextField,Xt as __namedExportsOrder,Wt as default};
