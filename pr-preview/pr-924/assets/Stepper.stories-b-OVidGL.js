import{j as e,r as g}from"./iframe-BcpGFM79.js";import{B as S}from"./Button-DgpwJSBN.js";import{T as v}from"./Typography-giEvkJi7.js";import{B as a}from"./Box-B0Ho1tv0.js";import{P as L}from"./Paper-yohM4iyv.js";import{a as c,S as s,b as T}from"./Stepper-CNqK7i7U.js";import{S as p}from"./StepLabel-mLaoeFnN.js";import"./preload-helper-Dab_6GC_.js";import"./Button-CNBYq3K8.js";import"./styled-YELB7PbO.js";import"./memoTheme-CUR-_UQu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DuPW9E1K.js";import"./useTimeout-D7cMLa2k.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./useForkRef-BE9Mh8bk.js";import"./useEventCallback-B998UMHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B0VZoizd.js";import"./Typography-D2_Tvhdq.js";import"./Box-YZXBtx3i.js";import"./Paper-DJSKHSTy.js";import"./useTheme-DjrtHLeH.js";import"./isMuiElement-IVbgCQ7T.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./createSvgIcon-D6BcWLqc.js";import"./SvgIcon-DwHLgNU7.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useControlled-B1x_m4Ao.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./IconButton-bOxsf80n.js";import"./Navigation-CE3d8dtq.js";import"./faCircleArrowRight-C4kufxUN.js";import"./FaSvgIcon-CT_rBCtN.js";import"./Grid-CobFFp4x.js";import"./Grid-DtKUTAQi.js";import"./styled-CAzon1OD.js";import"./Form-BSB-tu1Z.js";const _e={title:"Components/Stepper/Stepper",component:c,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"]}}};function y(){const{innerWidth:n,innerHeight:r}=window;return{width:n,height:r}}function R(){const[n,r]=g.useState(y());return g.useEffect(()=>{function i(){r(y())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),n}const m=["Select","Another Step","Form Data","Create a new one"],x={render:n=>{const[r,i]=g.useState(0),[k,w]=g.useState(new Set),{width:P}=R(),j=t=>t>1,f=t=>k.has(t),A=t=>t===2&&r<2,C=t=>t===3&&r<3,W=t=>()=>{i(t)},_=()=>{let t=k;f(r)&&(t=new Set(t.values()),t.delete(r)),i(o=>o+1),w(t)},E=()=>{i(t=>t-1)},D=()=>{if(!j(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),w(t=>{const o=new Set(t.values());return o.add(r),o})},O=()=>{i(0)};return e.jsx(a,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(L,{sx:{padding:"2rem"},children:[e.jsx(c,{activeStep:r,...n,orientation:P<600?"vertical":n.orientation,children:m.map((t,o)=>{const B={},d={};return j(o)&&(d.optional=e.jsx(v,{variant:"caption",children:"Optional"})),f(o)&&(B.completed=!1),A(o)&&(d.error=!0),C(o)&&(d.warning=!0),e.jsx(s,{...B,children:e.jsx(T,{color:"inherit",onClick:W(o),children:e.jsx(p,{...d,children:t})})},t)})}),r===m.length?e.jsxs(e.Fragment,{children:[e.jsx(v,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{sx:{flex:"1 1 auto"}}),e.jsx(S,{color:"tertiary",onClick:O,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(v,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(S,{color:"secondary",disabled:r===0,onClick:E,sx:{mr:1},children:"Back"}),e.jsx(a,{sx:{flex:"1 1 auto"}}),j(r)&&e.jsx(S,{color:"secondary",onClick:D,sx:{mr:1},children:"Skip"}),e.jsx(S,{color:r===m.length-1?"primary":"secondary",onClick:_,children:r===m.length-1?"Finish":"Next"})]})]})]})})},args:{"aria-label":"stepper example"}},h={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsxs(c,{...n,children:[e.jsx(s,{children:e.jsx(p,{optional:"Optional Sub-label",children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})})]})})}),args:{scrollButtons:!0}},l={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsxs(c,{...n,connector:null,children:[e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})})]})})}),args:{connector:null}},u={render:n=>e.jsx(p,{...n}),args:{children:"Step Label"}},b={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsx(c,{children:e.jsx(s,{...n,children:e.jsx(p,{children:"Label"})})})})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: StepperProps) => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());
    const {
      width
    } = useWindowDimensions();
    const isStepOptional = (step: number) => {
      return step > 1;
    };
    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };
    const isStepError = (step: number) => {
      return step === 2 && activeStep < 2;
    };
    const isStepWarning = (step: number) => {
      return step === 3 && activeStep < 3;
    };
    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(prevSkipped => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
    const handleReset = () => {
      setActiveStep(0);
    };
    return <Box sx={{
      maxWidth: '75vw',
      marginX: 'auto'
    }}>
        <Paper sx={{
        padding: '2rem'
      }}>
          <Stepper activeStep={activeStep} {...args} orientation={width < 600 ? 'vertical' : args.orientation}>
            {steps.map((label, index) => {
            const stepProps: {
              completed?: boolean;
            } = {};
            const labelProps: {
              optional?: React.ReactNode;
              error?: boolean;
              warning?: boolean;
            } = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            if (isStepError(index)) {
              labelProps.error = true;
            }
            if (isStepWarning(index)) {
              labelProps.warning = true;
            }
            return <Step key={label} {...stepProps}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </StepButton>
                </Step>;
          })}
          </Stepper>
          {activeStep === steps.length ? <>
              <Typography sx={{
            mt: 2,
            mb: 1
          }}>All steps completed - you&apos;re finished</Typography>
              <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            pt: 2
          }}>
                <Box sx={{
              flex: '1 1 auto'
            }} />
                <Button color="tertiary" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </> : <>
              <Typography sx={{
            mt: 2,
            mb: 1
          }}>Step {activeStep + 1}</Typography>
              <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            pt: 2
          }}>
                <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{
              mr: 1
            }}>
                  Back
                </Button>
                <Box sx={{
              flex: '1 1 auto'
            }} />
                {isStepOptional(activeStep) && <Button color="secondary" onClick={handleSkip} sx={{
              mr: 1
            }}>
                    Skip
                  </Button>}
                <Button color={activeStep === steps.length - 1 ? 'primary' : 'secondary'} onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>}
        </Paper>
      </Box>;
  },
  args: {
    'aria-label': 'stepper example'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Box>
      <Paper sx={{
      padding: '2rem'
    }}>
        <Stepper {...args}>
          <Step>
            <StepLabel optional="Optional Sub-label">Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
        </Stepper>
      </Paper>
    </Box>,
  args: {
    scrollButtons: true
  }
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Box>
      <Paper sx={{
      padding: '2rem'
    }}>
        <Stepper {...args} connector={null}>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Label</StepLabel>
          </Step>
        </Stepper>
      </Paper>
    </Box>,
  args: {
    connector: null
  }
}`,...l.parameters?.docs?.source},description:{story:"To remove the connector, set the `connector` prop to `null`.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <StepLabel {...args} />,
  args: {
    children: 'Step Label'
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Box>
      <Paper sx={{
      padding: '2rem'
    }}>
        <Stepper>
          <Step {...args}>
            <StepLabel>Label</StepLabel>
          </Step>
        </Stepper>
      </Paper>
    </Box>
}`,...b.parameters?.docs?.source}}};const Ee=["_Stepper","_StepperScrollButtons","_StepperWithoutConnectors","_StepLabel","_Step"];export{b as _Step,u as _StepLabel,x as _Stepper,h as _StepperScrollButtons,l as _StepperWithoutConnectors,Ee as __namedExportsOrder,_e as default};
