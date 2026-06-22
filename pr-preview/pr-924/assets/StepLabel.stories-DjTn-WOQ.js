import{j as e,r as m}from"./iframe-D9VxGUXm.js";import{B as a}from"./Button-Bh2oDbYg.js";import{T as x}from"./Typography-D9Pc6OpE.js";import{B as n}from"./Box-C_ElX66U.js";import{P as f}from"./Paper-6rYsSxsl.js";import{S as h}from"./StepLabel-CraT_GgI.js";import{a as b,S as y,b as D}from"./Stepper-Cav-fZBi.js";import"./preload-helper-Dab_6GC_.js";import"./Button-CSvshhUs.js";import"./styled-D8Xb_hHx.js";import"./memoTheme-CUWoCynM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-IEWOwJJy.js";import"./useTimeout-CCeZqBN_.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./useForkRef-5-P7CGIn.js";import"./useEventCallback-BrENIvCl.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rsn-iR-g.js";import"./Typography-mI_XzOBj.js";import"./Box-1lHW1eXR.js";import"./Paper-oCFHvNnf.js";import"./useTheme-B41ItSj5.js";import"./Form-BG5Mtcu6.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./isMuiElement-3elNFQAm.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./createSvgIcon-CuKrs_jq.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useControlled-nlFUsoSS.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./IconButton-BrelKzp4.js";import"./Navigation-DXIENyQY.js";import"./faCircleArrowRight-C4kufxUN.js";import"./Grid-gv_YjbwF.js";import"./Grid-ClZzvBh4.js";import"./styled-N1qat-rE.js";const Ce={title:"Components/Stepper/StepLabel",component:h,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(f,{sx:{padding:"2rem"},children:e.jsx(b,{children:e.jsx(y,{children:e.jsx(h,{...o,children:"Label"})})})})})};function g(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function R(){const[o,r]=m.useState(g());return m.useEffect(()=>{function i(){r(g())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,i]=m.useState(0),[u,v]=m.useState(new Set),{width:B}=R(),S=t=>t>1,k=t=>u.has(t),j=t=>t===2&&r<2,P=t=>t===3&&r<3,A=()=>{let t=u;k(r)&&(t=new Set(t.values()),t.delete(r)),i(p=>p+1),v(t)},C=()=>{i(t=>t-1)},E=t=>()=>{i(t)},L=()=>{if(!S(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),v(t=>{const p=new Set(t.values());return p.add(r),p})},W=()=>{i(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(f,{sx:{padding:"2rem"},children:[e.jsx(b,{activeStep:r,orientation:B<600?"vertical":"horizontal",children:l.map((t,p)=>{const w={},s={};return S(p)&&(s.optional=e.jsx(x,{variant:"caption",children:"Optional"})),k(p)&&(w.completed=!1),j(p)&&(s.error=!0),P(p)&&(s.warning=!0),e.jsx(y,{...w,children:e.jsx(D,{color:"inherit",onClick:E(p),children:e.jsx(h,{...s,...o,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:W,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(x,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:C,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),S(r)&&e.jsx(a,{color:"secondary",onClick:L,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:A,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ee=["_Step","_Stepper"];export{c as _Step,d as _Stepper,Ee as __namedExportsOrder,Ce as default};
