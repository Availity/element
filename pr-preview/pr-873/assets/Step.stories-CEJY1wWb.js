import{j as e,r as m}from"./iframe-BACK_0qL.js";import{B as a}from"./index-DezS3mgp.js";import{T as h}from"./index-44F_PwAA.js";import{B as n}from"./index-BgUu0nys.js";import{P as f}from"./index-3uaVz-2R.js";import{S as x,a as y,b as D,c as R}from"./Stepper-CJUR_m6E.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CvzAHSPe.js";import"./useTheme-CAH-7WS1.js";import"./styled-CILYMfR2.js";import"./memoTheme-CehCTkMp.js";import"./useSlot-4KwJ1ZEX.js";import"./mergeSlotProps-Ce5vEJyz.js";import"./useForkRef-COVhBD0c.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Bbnn395Q.js";import"./useControlled-Bvcrhgjz.js";import"./useEventCallback-B1QjfuHc.js";import"./getReactElementRef-cseQ0t00.js";import"./Portal-BBUkHp6C.js";import"./utils-CTnKgbLp.js";import"./TransitionGroupContext-B4j_r9NY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DdDv6txA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-fOR7z52u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CDXMi9Z2.js";import"./CircularProgress-BxeLfgty.js";import"./Button-DJ1l2vuX.js";import"./Typography-Bcc0vKQ7.js";import"./Box-yoY0NcWx.js";import"./Grid-BgvciMyj.js";import"./styled-D6EtJyjy.js";import"./isMuiElement-9m4N3JlX.js";import"./Stack-BZ18XAbQ.js";import"./Container-DsEO0A5x.js";import"./Paper-DbocNi97.js";import"./Stepper-CQECc050.js";import"./createSvgIcon-BJ8pbv3g.js";import"./SvgIcon-BWD4KGVI.js";import"./index-CThJnamY.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";const je={title:"Components/Stepper/Step",component:x,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(f,{sx:{padding:"2rem"},children:e.jsx(y,{children:e.jsx(x,{...o})})})}),args:{children:"Children"}};function w(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function T(){const[o,r]=m.useState(w());return m.useEffect(()=>{function p(){r(w())}return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,p]=m.useState(0),[u,v]=m.useState(new Set),{width:b}=T(),S=t=>t>1,k=t=>u.has(t),B=t=>t===2&&r<2,j=t=>t===3&&r<3,P=()=>{let t=u;k(r)&&(t=new Set(t.values()),t.delete(r)),p(i=>i+1),v(t)},A=()=>{p(t=>t-1)},C=t=>()=>{p(t)},E=()=>{if(!S(r))throw new Error("You can't skip a step that isn't optional.");p(t=>t+1),v(t=>{const i=new Set(t.values());return i.add(r),i})},W=()=>{p(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(f,{sx:{padding:"2rem"},children:[e.jsx(y,{activeStep:r,orientation:b<600?"vertical":"horizontal",children:l.map((t,i)=>{const g={},s={};return S(i)&&(s.optional=e.jsx(h,{variant:"caption",children:"Optional"})),k(i)&&(g.completed=!1),B(i)&&(s.error=!0),j(i)&&(s.warning=!0),e.jsx(x,{...g,...o,children:e.jsx(D,{color:"inherit",onClick:C(i),children:e.jsx(R,{...s,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(h,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:W,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:A,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),S(r)&&e.jsx(a,{color:"secondary",onClick:E,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:P,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
