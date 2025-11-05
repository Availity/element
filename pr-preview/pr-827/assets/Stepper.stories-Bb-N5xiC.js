import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-BSuoOqEd.js";import{B as S}from"./index-B2J0USI8.js";import{T as v}from"./index-7dkkVNWZ.js";import{B as a}from"./index-DWvMPRyT.js";import{P as L}from"./index-D24HNVk6.js";import{a as c,S as o,b as Z,c as p}from"./Stepper-DeXQCkmn.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Tooltip-bMNvQkmf.js";import"./identifier-DhnHujDJ.js";import"./index-bqlmQ0VS.js";import"./useTheme-DG5qVMsu.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./useTheme-C_c7PR3o.js";import"./styled-9znMky1q.js";import"./memoTheme-BwIkkReu.js";import"./useSlot-jI6_c_PV.js";import"./mergeSlotProps-C8ahzxnq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BIkqQIqh.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-B9dULhq6.js";import"./useControlled-DUUijreW.js";import"./useId-kjFOwFR3.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./getReactElementRef-B8liFQVS.js";import"./Portal-BleVqemi.js";import"./utils-DuVTnmV7.js";import"./TransitionGroupContext-CcytU7uK.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphRKsXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-aAtY6dbQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-AdAh9sBA.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./CircularProgress-I3IM84c9.js";import"./Button-DMnfP4ih.js";import"./LoadingButton-b9D3Ot90.js";import"./Typography-CHtEfMke.js";import"./index-DtRw77fL.js";import"./extendSxProp-plByhdXY.js";import"./Box-BAprLmuU.js";import"./Grid-BrQtrDmH.js";import"./styled-BN1MHGNr.js";import"./isMuiElement-CsRUsG_W.js";import"./useThemeProps-DxTj-Mj7.js";import"./Stack-C-7_RWLD.js";import"./Container-BRT0GL3j.js";import"./Paper-BZZ0Jx2l.js";import"./Stepper-jbZugiZE.js";import"./createSvgIcon-DjY4rWdK.js";import"./SvgIcon-enpUMgPP.js";import"./index-LinAfN8C.js";import"./faCircleArrowRight-e2oTZTvX.js";import"./faUser-Dxmucm-1.js";const st={title:"Components/Stepper/Stepper",component:c,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"]}}};function y(){const{innerWidth:n,innerHeight:r}=window;return{width:n,height:r}}function $(){const[n,r]=g.useState(y());return g.useEffect(()=>{function i(){r(y())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),n}const m=["Select","Another Step","Form Data","Create a new one"],x={render:n=>{const[r,i]=g.useState(0),[k,w]=g.useState(new Set),{width:G}=$(),j=t=>t>1,f=t=>k.has(t),I=t=>t===2&&r<2,J=t=>t===3&&r<3,K=t=>()=>{i(t)},M=()=>{let t=k;f(r)&&(t=new Set(t.values()),t.delete(r)),i(s=>s+1),w(t)},Q=()=>{i(t=>t-1)},U=()=>{if(!j(r))throw new Error("You can't skip a step that isn't optional.");i(t=>t+1),w(t=>{const s=new Set(t.values());return s.add(r),s})},V=()=>{i(0)};return e.jsx(a,{sx:{maxWidth:"75vw",marginX:"auto"},children:e.jsxs(L,{sx:{padding:"2rem"},children:[e.jsx(c,{activeStep:r,...n,orientation:G<600?"vertical":n.orientation,children:m.map((t,s)=>{const B={},d={};return j(s)&&(d.optional=e.jsx(v,{variant:"caption",children:"Optional"})),f(s)&&(B.completed=!1),I(s)&&(d.error=!0),J(s)&&(d.warning=!0),e.jsx(o,{...B,children:e.jsx(Z,{color:"inherit",onClick:K(s),children:e.jsx(p,{...d,children:t})})},t)})}),r===m.length?e.jsxs(e.Fragment,{children:[e.jsx(v,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{sx:{flex:"1 1 auto"}}),e.jsx(S,{color:"tertiary",onClick:V,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(v,{sx:{mt:2,mb:1},children:["Step ",r+1]}),e.jsxs(a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(S,{color:"secondary",disabled:r===0,onClick:Q,sx:{mr:1},children:"Back"}),e.jsx(a,{sx:{flex:"1 1 auto"}}),j(r)&&e.jsx(S,{color:"secondary",onClick:U,sx:{mr:1},children:"Skip"}),e.jsx(S,{color:r===m.length-1?"primary":"secondary",onClick:M,children:r===m.length-1?"Finish":"Next"})]})]})]})})},args:{"aria-label":"stepper example"}},h={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsxs(c,{...n,children:[e.jsx(o,{children:e.jsx(p,{optional:"Optional Sub-label",children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})})]})})}),args:{scrollButtons:!0}},l={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsxs(c,{...n,connector:null,children:[e.jsx(o,{children:e.jsx(p,{children:"Label"})}),e.jsx(o,{children:e.jsx(p,{children:"Label"})})]})})}),args:{connector:null}},u={render:n=>e.jsx(p,{...n}),args:{children:"Step Label"}},b={render:n=>e.jsx(a,{children:e.jsx(L,{sx:{padding:"2rem"},children:e.jsx(c,{children:e.jsx(o,{...n,children:e.jsx(p,{children:"Label"})})})})})};var P,A,C;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const it=["_Stepper","_StepperScrollButtons","_StepperWithoutConnectors","_StepLabel","_Step"];export{b as _Step,u as _StepLabel,x as _Stepper,h as _StepperScrollButtons,l as _StepperWithoutConnectors,it as __namedExportsOrder,st as default};
