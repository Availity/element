import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as m}from"./index-BgYLq7fD.js";import{B as a}from"./index-k9OtkSpc.js";import{T as h}from"./index-ClMemn8c.js";import{B as n}from"./index-DmY_4rvh.js";import{P as A}from"./index-Bd2OKRRh.js";import{S as x,a as C,b as _,c as z}from"./Stepper-DmWQjh1M.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Tooltip-Xh9QA514.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./index-DyJdRKzS.js";import"./useTheme-BGaXYmwe.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./useTheme-CVByJb8R.js";import"./styled-FZfCzBz5.js";import"./memoTheme-BLrvrRyo.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useForkRef-Dz4aGlyk.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-DEVqEMA6.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DT0tbkWv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BFylt634.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwAEbHIm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./CircularProgress-o1goEU37.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";import"./Box-BU2WakPM.js";import"./Grid2-BbvvmKhh.js";import"./styled-CsKbBpC_.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-BNBLMFIr.js";import"./Stack-2ILcP_1D.js";import"./Container-DvcsWH8C.js";import"./Paper-zGtC1N39.js";import"./Stepper-qPvoRHbH.js";import"./createSvgIcon-DK1T27V3.js";import"./SvgIcon-D3xe1wVB.js";import"./Collapse-RuyvmUHH.js";import"./index-CmMPo3bx.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";const Me={title:"Components/Stepper/Step",component:x,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(A,{sx:{padding:"2rem"},children:e.jsx(C,{children:e.jsx(x,{...o})})})}),args:{children:"Children"}};function w(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function L(){const[o,r]=m.useState(w());return m.useEffect(()=>{function p(){r(w())}return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,p]=m.useState(0),[u,v]=m.useState(new Set),{width:E}=L(),S=t=>t>1,k=t=>u.has(t),W=t=>t===2&&r<2,D=t=>t===3&&r<3,R=()=>{let t=u;k(r)&&(t=new Set(t.values()),t.delete(r)),p(i=>i+1),v(t)},T=()=>{p(t=>t-1)},O=t=>()=>{p(t)},F=()=>{if(!S(r))throw new Error("You can't skip a step that isn't optional.");p(t=>t+1),v(t=>{const i=new Set(t.values());return i.add(r),i})},N=()=>{p(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(A,{sx:{padding:"2rem"},children:[e.jsx(C,{activeStep:r,orientation:E<600?"vertical":"horizontal",children:l.map((t,i)=>{const g={},s={};return S(i)&&(s.optional=e.jsx(h,{variant:"caption",children:"Optional"})),k(i)&&(g.completed=!1),W(i)&&(s.error=!0),D(i)&&(s.warning=!0),e.jsx(x,{...g,...o,children:e.jsx(_,{color:"inherit",onClick:O(i),children:e.jsx(z,{...s,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(h,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:N,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:T,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),S(r)&&e.jsx(a,{color:"secondary",onClick:F,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:R,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};var f,y,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var B,j,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const Qe=["_Step","_Stepper"];export{c as _Step,d as _Stepper,Qe as __namedExportsOrder,Me as default};
