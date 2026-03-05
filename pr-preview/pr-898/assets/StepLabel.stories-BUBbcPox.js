import{j as e,r as S}from"./iframe-Wk3enkn_.js";import{B as a}from"./index-pyii_x3t.js";import{T as x}from"./index-CNr7z3HO.js";import{B as n}from"./index-CV9srtxl.js";import{P as f}from"./index-TMY9X8er.js";import{c as h,a as b,S as y,b as D}from"./Stepper-CZQCGUpC.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BR4Ffd1U.js";import"./useTheme-CmRoqaFD.js";import"./styled-BmTYHnh6.js";import"./memoTheme-Caj5A1s7.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BCOPmfCQ.js";import"./useControlled-2F9gTxQc.js";import"./useEventCallback-B7JQiyR1.js";import"./getReactElementRef-Cnge9CgM.js";import"./Portal-CCkMzpr1.js";import"./utils-tb6sxdlZ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BfCrVpCA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6xLK3w0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Qsi_pa_1.js";import"./CircularProgress-n4f4P4WA.js";import"./Button-C074Gfa_.js";import"./Typography-CLtqYzwP.js";import"./Box-DL-v_noe.js";import"./Grid-DdfbYMl5.js";import"./isMuiElement-DVgXTGQo.js";import"./styled-BnyQvlXI.js";import"./Stack-8J7VIz0q.js";import"./Container-ChUN_I-o.js";import"./Paper-BtZlLsyY.js";import"./Stepper-Bo6QAJn_.js";import"./createSvgIcon-q6AyRDli.js";import"./SvgIcon-C-x4Imun.js";import"./index-a2BAU8hi.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";const je={title:"Components/Stepper/StepLabel",component:h,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(f,{sx:{padding:"2rem"},children:e.jsx(b,{children:e.jsx(y,{children:e.jsx(h,{...o,children:"Label"})})})})})};function g(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function R(){const[o,r]=S.useState(g());return S.useEffect(()=>{function i(){r(g())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,i]=S.useState(0),[u,v]=S.useState(new Set),{width:B}=R(),m=t=>t>1,k=t=>u.has(t),j=t=>t===2&&r<2,P=t=>t===3&&r<3,A=()=>{let t=u;k(r)&&(t=new Set(t.values()),t.delete(r)),i(p=>p+1),v(t)},C=()=>{i(t=>t-1)},E=t=>()=>{i(t)},L=()=>{if(!m(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),v(t=>{const p=new Set(t.values());return p.add(r),p})},W=()=>{i(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(f,{sx:{padding:"2rem"},children:[e.jsx(b,{activeStep:r,orientation:B<600?"vertical":"horizontal",children:l.map((t,p)=>{const w={},s={};return m(p)&&(s.optional=e.jsx(x,{variant:"caption",children:"Optional"})),k(p)&&(w.completed=!1),j(p)&&(s.error=!0),P(p)&&(s.warning=!0),e.jsx(y,{...w,children:e.jsx(D,{color:"inherit",onClick:E(p),children:e.jsx(h,{...s,...o,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:W,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(x,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:C,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),m(r)&&e.jsx(a,{color:"secondary",onClick:L,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:A,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Box>
      <Paper sx={{
      padding: '2rem'
    }}>
        <Stepper>
          <Step>
            <StepLabel {...args}>Label</StepLabel>
          </Step>
        </Stepper>
      </Paper>
    </Box>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
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
    const handleStep = (step: number) => () => {
      setActiveStep(step);
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
          <Stepper activeStep={activeStep} orientation={width < 600 ? 'vertical' : 'horizontal'}>
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
                    <StepLabel {...labelProps} {...args}>
                      {label}
                    </StepLabel>
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
  args: {}
}`,...d.parameters?.docs?.source}}};const Pe=["_Step","_Stepper"];export{c as _Step,d as _Stepper,Pe as __namedExportsOrder,je as default};
