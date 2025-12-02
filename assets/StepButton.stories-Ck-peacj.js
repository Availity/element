import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-BSuoOqEd.js";import{B as a}from"./index-DS7md1Ks.js";import{T as x}from"./index-7dkkVNWZ.js";import{B as n}from"./index-DWvMPRyT.js";import{P as A}from"./index-D24HNVk6.js";import{b as u,a as C,S as E,c as z}from"./Stepper-CRDgjHLC.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Tooltip-bMNvQkmf.js";import"./identifier-DhnHujDJ.js";import"./index-bqlmQ0VS.js";import"./useTheme-DG5qVMsu.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./useTheme-C_c7PR3o.js";import"./styled-9znMky1q.js";import"./memoTheme-BwIkkReu.js";import"./useSlot-jI6_c_PV.js";import"./mergeSlotProps-C8ahzxnq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BIkqQIqh.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-B9dULhq6.js";import"./useControlled-DUUijreW.js";import"./useId-kjFOwFR3.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./getReactElementRef-B8liFQVS.js";import"./Portal-BleVqemi.js";import"./utils-DuVTnmV7.js";import"./TransitionGroupContext-CcytU7uK.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphRKsXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-aAtY6dbQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-AdAh9sBA.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./CircularProgress-I3IM84c9.js";import"./Button-DMnfP4ih.js";import"./Typography-CHtEfMke.js";import"./index-DtRw77fL.js";import"./extendSxProp-plByhdXY.js";import"./Box-BAprLmuU.js";import"./Grid-BrQtrDmH.js";import"./styled-BN1MHGNr.js";import"./isMuiElement-CsRUsG_W.js";import"./useThemeProps-DxTj-Mj7.js";import"./Stack-C-7_RWLD.js";import"./Container-BRT0GL3j.js";import"./Paper-BZZ0Jx2l.js";import"./Stepper-jbZugiZE.js";import"./createSvgIcon-DjY4rWdK.js";import"./SvgIcon-enpUMgPP.js";import"./index-BgHLshU-.js";import"./faCircleArrowRight-DSzUu1Qy.js";import"./faUser-D77uLSLS.js";const Ie={title:"Components/Stepper/StepButton",component:u,tags:["autodocs"]},c={render:o=>e.jsx(n,{children:e.jsx(A,{sx:{padding:"2rem"},children:e.jsx(C,{children:e.jsx(E,{children:e.jsx(u,{...o})})})})}),args:{"aria-label":"1"}};function w(){const{innerWidth:o,innerHeight:r}=window;return{width:o,height:r}}function L(){const[o,r]=m.useState(w());return m.useEffect(()=>{function i(){r(w())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o}const l=["First","Second","Third","Final"],d={render:o=>{const[r,i]=m.useState(0),[h,v]=m.useState(new Set),{width:W}=L(),S=t=>t>1,k=t=>h.has(t),D=t=>t===2&&r<2,R=t=>t===3&&r<3,T=()=>{let t=h;k(r)&&(t=new Set(t.values()),t.delete(r)),i(p=>p+1),v(t)},O=()=>{i(t=>t-1)},F=t=>()=>{i(t)},N=()=>{if(!S(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),v(t=>{const p=new Set(t.values());return p.add(r),p})},_=()=>{i(0)};return e.jsx(n,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(A,{sx:{padding:"2rem"},children:[e.jsx(C,{activeStep:r,orientation:W<600?"vertical":"horizontal",children:l.map((t,p)=>{const g={},s={};return S(p)&&(s.optional=e.jsx(x,{variant:"caption",children:"Optional"})),k(p)&&(g.completed=!1),D(p)&&(s.error=!0),R(p)&&(s.warning=!0),e.jsx(E,{...g,children:e.jsx(u,{color:"inherit",onClick:F(p),...o,children:e.jsx(z,{...s,children:t})})},t)})}),r===l.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{color:"tertiary",onClick:_,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(x,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"secondary",disabled:r===0,onClick:O,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),S(r)&&e.jsx(a,{color:"secondary",onClick:N,sx:{mr:1},children:"Skip"}),e.jsx(a,{color:r===l.length-1?"primary":"secondary",onClick:T,children:r===l.length-1?"Finish":"Next"})]})]})]})})},args:{}};var f,y,B;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var b,j,P;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const Je=["_StepButton","_Stepper"];export{c as _StepButton,d as _Stepper,Je as __namedExportsOrder,Ie as default};
