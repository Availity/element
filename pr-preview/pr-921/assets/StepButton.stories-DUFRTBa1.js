import{j as e,r as S}from"./iframe-D9ubqhJK.js";import{B as a}from"./index-h4r-WnWl.js";import{T as x}from"./index-jvKCwEAF.js";import{B as n}from"./index-hzcYFh1I.js";import{P as f}from"./index-DryvU1Ls.js";import{b as u,a as y,S as B,c as R}from"./Stepper-B2hlBxOH.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DJtaByj1.js";import"./useTheme-Bs7bia1b.js";import"./styled-DXiPKtQZ.js";import"./memoTheme-CgUpfGaw.js";import"./useSlot-dFBWOBaM.js";import"./mergeSlotProps-CUVj2Ixj.js";import"./useForkRef-CFXiLCEz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-TLxlWLEl.js";import"./useControlled-BMamuY7F.js";import"./useEventCallback-BOUt7crc.js";import"./getReactElementRef-MrxWZY03.js";import"./Portal-HXWOitc9.js";import"./utils-C9L-o1yc.js";import"./TransitionGroupContext-By53oEia.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bfn47NpZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CdRgNr67.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CmaElg-P.js";import"./CircularProgress-BW1moUPm.js";import"./Button-C6KYraw-.js";import"./Typography-CmwrtNIv.js";import"./Box-Bn9CddAr.js";import"./Grid-XUldnHEv.js";import"./isMuiElement-CNzi3ipk.js";import"./styled-B7Z91F3L.js";import"./Stack-CGmSesTx.js";import"./Container-vLztGkDr.js";import"./Paper-D9VaIl9p.js";import"./Stepper-D85l1ff9.js";import"./createSvgIcon-9Ro74DHR.js";import"./SvgIcon-DlrnpruC.js";import"./index-DNmhIX6F.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";const je={title:"Components/Stepper/StepButton",component:u,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(f,{sx:{padding:"2rem"},children:e.jsx(y,{children:e.jsx(B,{children:e.jsx(u,{...o})})})})}),args:{"aria-label":"1"}};function w(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function T(){const[o,r]=S.useState(w());return S.useEffect(()=>{function i(){r(w())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,i]=S.useState(0),[h,v]=S.useState(new Set),{width:b}=T(),m=t=>t>1,k=t=>h.has(t),j=t=>t===2&&r<2,P=t=>t===3&&r<3,A=()=>{let t=h;k(r)&&(t=new Set(t.values()),t.delete(r)),i(p=>p+1),v(t)},C=()=>{i(t=>t-1)},E=t=>()=>{i(t)},W=()=>{if(!m(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),v(t=>{const p=new Set(t.values());return p.add(r),p})},D=()=>{i(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(f,{sx:{padding:"2rem"},children:[e.jsx(y,{activeStep:r,orientation:b<600?"vertical":"horizontal",children:l.map((t,p)=>{const g={},s={};return m(p)&&(s.optional=e.jsx(x,{variant:"caption",children:"Optional"})),k(p)&&(g.completed=!1),j(p)&&(s.error=!0),P(p)&&(s.warning=!0),e.jsx(B,{...g,children:e.jsx(u,{color:"inherit",onClick:E(p),...o,children:e.jsx(R,{...s,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:D,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(x,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:C,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),m(r)&&e.jsx(a,{color:"secondary",onClick:W,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:A,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Box>
      <Paper sx={{
      padding: '2rem'
    }}>
        <Stepper>
          <Step>
            <StepButton {...args} />
          </Step>
        </Stepper>
      </Paper>
    </Box>,
  args: {
    'aria-label': '1'
  }
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
                  <StepButton color="inherit" onClick={handleStep(index)} {...args}>
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
  args: {}
}`,...d.parameters?.docs?.source}}};const Pe=["_StepButton","_Stepper"];export{c as _StepButton,d as _Stepper,Pe as __namedExportsOrder,je as default};
