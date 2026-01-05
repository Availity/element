import{j as e,r as g}from"./iframe-Tg5E9Q0V.js";import{B as S}from"./index-x-cZi-nY.js";import{T as v}from"./index-CAbAbsxX.js";import{B as a}from"./index-D4DEAloD.js";import{P as L}from"./index-BV-UyTTn.js";import{a as c,S as s,b as Z,c as p}from"./Stepper-BU5W5vzc.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BTI4GCPp.js";import"./useTheme-D2PM0NC9.js";import"./styled-CkQGWiXZ.js";import"./memoTheme-CSHka9uN.js";import"./useSlot-DWYsP92Q.js";import"./mergeSlotProps-BNNCTn4N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B_DO_dbH.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CYbYxV9r.js";import"./useControlled-BcdiiQVx.js";import"./useEventCallback-pJVTgRiD.js";import"./getReactElementRef-B8vpBm8c.js";import"./Portal-CbAAOrpG.js";import"./utils-BChu3r4-.js";import"./TransitionGroupContext-cQD0tQZD.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-S7vQ2L8Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cl7hs1iw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CCTLTRt8.js";import"./CircularProgress-xXUbWWTu.js";import"./Button-CDV9x4x4.js";import"./Typography-BcRYJcKe.js";import"./Box-BsChB_Op.js";import"./Grid-GpGmgKJU.js";import"./styled-CQuv9sTF.js";import"./isMuiElement-DRHNiz3q.js";import"./Stack-DMT1dotB.js";import"./Container-f8pbHfI3.js";import"./Paper-DUjZmU49.js";import"./Stepper-CYckJBXh.js";import"./createSvgIcon-BlU2wZ3P.js";import"./SvgIcon-of2VfktU.js";import"./index-D8INjewo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";const Je={title:"Components/Stepper/Stepper",component:c,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"]}}};function y(){const{innerWidth:n,innerHeight:r}=window;return{width:n,height:r}}function $(){const[n,r]=g.useState(y());return g.useEffect(()=>{function i(){r(y())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),n}const m=["Select","Another Step","Form Data","Create a new one"],x={render:n=>{const[r,i]=g.useState(0),[k,w]=g.useState(new Set),{width:G}=$(),j=t=>t>1,f=t=>k.has(t),I=t=>t===2&&r<2,J=t=>t===3&&r<3,K=t=>()=>{i(t)},M=()=>{let t=k;f(r)&&(t=new Set(t.values()),t.delete(r)),i(o=>o+1),w(t)},Q=()=>{i(t=>t-1)},U=()=>{if(!j(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),w(t=>{const o=new Set(t.values());return o.add(r),o})},V=()=>{i(0)};return e.jsx(a,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(L,{sx:{padding:"2rem"},children:[e.jsx(c,{activeStep:r,...n,orientation:G<600?"vertical":n.orientation,children:m.map((t,o)=>{const B={},d={};return j(o)&&(d.optional=e.jsx(v,{variant:"caption",children:"Optional"})),f(o)&&(B.completed=!1),I(o)&&(d.error=!0),J(o)&&(d.warning=!0),e.jsx(s,{...B,children:e.jsx(Z,{color:"inherit",onClick:K(o),children:e.jsx(p,{...d,children:t})})},t)})}),r===m.length?e.jsxs(e.Fragment,{children:[e.jsx(v,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{sx:{flex:"1 1 auto"}}),e.jsx(S,{color:"tertiary",onClick:V,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(v,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(S,{color:"secondary",disabled:r===0,onClick:Q,sx:{mr:1},children:"Back"}),e.jsx(a,{sx:{flex:"1 1 auto"}}),j(r)&&e.jsx(S,{color:"secondary",onClick:U,sx:{mr:1},children:"Skip"}),e.jsx(S,{color:r===m.length-1?"primary":"secondary",onClick:M,children:r===m.length-1?"Finish":"Next"})]})]})]})})},args:{"aria-label":"stepper example"}},h={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsxs(c,{...n,children:[e.jsx(s,{children:e.jsx(p,{optional:"Optional Sub-label",children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})})]})})}),args:{scrollButtons:!0}},l={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsxs(c,{...n,connector:null,children:[e.jsx(s,{children:e.jsx(p,{children:"Label"})}),e.jsx(s,{children:e.jsx(p,{children:"Label"})})]})})}),args:{connector:null}},u={render:n=>e.jsx(p,{...n}),args:{children:"Step Label"}},b={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsx(c,{children:e.jsx(s,{...n,children:e.jsx(p,{children:"Label"})})})})})};var P,A,C;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(A=x.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var W,_,E;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var D,O,T,R,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:"To remove the connector, set the `connector` prop to `null`.",...(N=(R=l.parameters)==null?void 0:R.docs)==null?void 0:N.description}}};var F,z,Y;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <StepLabel {...args} />,
  args: {
    children: 'Step Label'
  }
}`,...(Y=(z=u.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var X,H,q;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const Ke=["_Stepper","_StepperScrollButtons","_StepperWithoutConnectors","_StepLabel","_Step"];export{b as _Step,u as _StepLabel,x as _Stepper,h as _StepperScrollButtons,l as _StepperWithoutConnectors,Ke as __namedExportsOrder,Je as default};
