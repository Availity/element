import{j as e,r as m}from"./iframe-DDdys5VZ.js";import{B as a}from"./index-Do6uxBxf.js";import{T as h}from"./index-Z7ZBVKdt.js";import{B as n}from"./index-C23gf4rm.js";import{P as f}from"./index-BIdpMfTg.js";import{S as x,a as y,b as D,c as R}from"./Stepper-oenE3kH8.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BrywaEgo.js";import"./useTheme-3S67f5Cb.js";import"./styled-hFTqa5AW.js";import"./memoTheme-Cxx5qwbm.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-DZwXI9W9.js";import"./useControlled-DPgR13iz.js";import"./useEventCallback-Cc8SLIyn.js";import"./getReactElementRef-KKwdvyjG.js";import"./Portal-CIlqDXrO.js";import"./utils-CF4In8Xa.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMLU_yM0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOaXfSEH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DZVI88h8.js";import"./CircularProgress-CD5GaXFj.js";import"./Button-uXds9IdN.js";import"./Typography-CZtxpkXF.js";import"./Box-D4-1J1wq.js";import"./Grid-D5jHLohi.js";import"./styled-D0qD_60F.js";import"./isMuiElement-CGZGs55h.js";import"./Stack-XR9IapJe.js";import"./Container-BECr7IV3.js";import"./Paper-BNuTBhMB.js";import"./Stepper-BMchjRk7.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./SvgIcon-DHyw-wAY.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";const je={title:"Components/Stepper/Step",component:x,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(f,{sx:{padding:"2rem"},children:e.jsx(y,{children:e.jsx(x,{...o})})})}),args:{children:"Children"}};function w(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function T(){const[o,r]=m.useState(w());return m.useEffect(()=>{function p(){r(w())}return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,p]=m.useState(0),[u,v]=m.useState(new Set),{width:b}=T(),S=t=>t>1,k=t=>u.has(t),B=t=>t===2&&r<2,j=t=>t===3&&r<3,P=()=>{let t=u;k(r)&&(t=new Set(t.values()),t.delete(r)),p(i=>i+1),v(t)},A=()=>{p(t=>t-1)},C=t=>()=>{p(t)},E=()=>{if(!S(r))throw new Error("You can't skip a step that isn't optional.");p(t=>t+1),v(t=>{const i=new Set(t.values());return i.add(r),i})},W=()=>{p(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(f,{sx:{padding:"2rem"},children:[e.jsx(y,{activeStep:r,orientation:b<600?"vertical":"horizontal",children:l.map((t,i)=>{const g={},s={};return S(i)&&(s.optional=e.jsx(h,{variant:"caption",children:"Optional"})),k(i)&&(g.completed=!1),B(i)&&(s.error=!0),j(i)&&(s.warning=!0),e.jsx(x,{...g,...o,children:e.jsx(D,{color:"inherit",onClick:C(i),children:e.jsx(R,{...s,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(h,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:W,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:A,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),S(r)&&e.jsx(a,{color:"secondary",onClick:E,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:P,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Box>
      <Paper sx={{
      padding: '2rem'
    }}>
        <Stepper>
          <Step {...args} />
        </Stepper>
      </Paper>
    </Box>,
  args: {
    children: 'Children'
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
            return <Step key={label} {...stepProps} {...args}>
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
  args: {}
}`,...d.parameters?.docs?.source}}};const Pe=["_Step","_Stepper"];export{c as _Step,d as _Stepper,Pe as __namedExportsOrder,je as default};
