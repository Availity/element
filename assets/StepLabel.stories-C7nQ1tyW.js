import{j as e,r as S}from"./iframe-DPWyg_sE.js";import{B as a}from"./index-WUbIbMUB.js";import{T as x}from"./index-rY20fRa0.js";import{B as n}from"./index-klW-QR3s.js";import{P as f}from"./index-DjTJFbxL.js";import{c as h,a as b,S as y,b as D}from"./Stepper-OWP5F6lN.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CdOjvbM3.js";import"./useTheme-7tDQkz1C.js";import"./styled-Cx4UoaTx.js";import"./memoTheme-CvhDbT8x.js";import"./useSlot-BxXiaFQD.js";import"./mergeSlotProps-CVICHJ3a.js";import"./useForkRef-CQj222cR.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-RvN-OPdu.js";import"./useControlled-wCcL1r_0.js";import"./useEventCallback-jcG2qnaO.js";import"./getReactElementRef-x8Lx8RXT.js";import"./Portal-D5nwTdpC.js";import"./utils-BB7LdJ51.js";import"./TransitionGroupContext-Dbv33dTP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-LUJJL6zM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BF9Np9Lj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwZSi7dI.js";import"./CircularProgress-9Tec-y6j.js";import"./Button-BBTQggAb.js";import"./Typography-DAlbupBm.js";import"./Box-BW7Ma-QQ.js";import"./Grid-BOsdlhg5.js";import"./styled-D3AT7-A0.js";import"./isMuiElement-BiKTnabE.js";import"./Stack-BKgbUtNe.js";import"./Container-NqiDyIZZ.js";import"./Paper-CoTVTpu9.js";import"./Stepper-4ceVPRFF.js";import"./createSvgIcon-kD6OJaqd.js";import"./SvgIcon-BLZY0MiZ.js";import"./index-HgfBgIyk.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";const je={title:"Components/Stepper/StepLabel",component:h,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(f,{sx:{padding:"2rem"},children:e.jsx(b,{children:e.jsx(y,{children:e.jsx(h,{...o,children:"Label"})})})})})};function g(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function R(){const[o,r]=S.useState(g());return S.useEffect(()=>{function i(){r(g())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,i]=S.useState(0),[u,v]=S.useState(new Set),{width:B}=R(),m=t=>t>1,k=t=>u.has(t),j=t=>t===2&&r<2,P=t=>t===3&&r<3,A=()=>{let t=u;k(r)&&(t=new Set(t.values()),t.delete(r)),i(p=>p+1),v(t)},C=()=>{i(t=>t-1)},E=t=>()=>{i(t)},L=()=>{if(!m(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),v(t=>{const p=new Set(t.values());return p.add(r),p})},W=()=>{i(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(f,{sx:{padding:"2rem"},children:[e.jsx(b,{activeStep:r,orientation:B<600?"vertical":"horizontal",children:l.map((t,p)=>{const w={},s={};return m(p)&&(s.optional=e.jsx(x,{variant:"caption",children:"Optional"})),k(p)&&(w.completed=!1),j(p)&&(s.error=!0),P(p)&&(s.warning=!0),e.jsx(y,{...w,children:e.jsx(D,{color:"inherit",onClick:E(p),children:e.jsx(h,{...s,...o,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:W,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(x,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:C,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),m(r)&&e.jsx(a,{color:"secondary",onClick:L,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:A,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
