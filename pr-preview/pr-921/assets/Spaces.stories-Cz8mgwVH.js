import{j as p}from"./iframe-DV02LU8f.js";import{P as e}from"./index-1EbFGlVC.js";import{T as o}from"./index-D2YoiO12.js";import{S as n}from"./index-DN1f2VGk.js";import{Q as d}from"./suspense-CO-B5uc8.js";import{S as m,u as h,a as S}from"./Spaces-BvPcsTN1.js";import{Q as y}from"./queryClient-CZ_3FPrr.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-X_4XbRhq.js";import"./useTheme-Y2xcdKFi.js";import"./styled-rnNWEicw.js";import"./memoTheme-DH1tDBpV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BZigmqh7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-SeXXrj1o.js";import"./Grid-CAt1Mh8-.js";import"./isMuiElement-Bod-d1Ly.js";import"./styled-TfTHS2wg.js";import"./Stack-BwJgyjvk.js";import"./Container-C-cbttNX.js";import"./Img-BmpFxPjB.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CLj9BeNZ.js";import"./index-DA8EpHv8.js";import"./___vite-browser-external_commonjs-proxy-BXbXV1ez.js";import"./index-BkQ2mEsN.js";import"./index-CFqqZUad.js";import"./index-DgtuzQHk.js";import"./Tooltip-BOv4Ws7L.js";import"./useSlot-Hu3W-cCE.js";import"./mergeSlotProps-Bc2Oi4bk.js";import"./useForkRef-BwPtyht0.js";import"./useTimeout-7haRoRjC.js";import"./useControlled-DL5wIsJx.js";import"./useEventCallback-DerujR8C.js";import"./getReactElementRef-COC2CLEL.js";import"./Portal-PMyfFMaG.js";import"./utils-CvzJUHOJ.js";import"./TransitionGroupContext-BxFEbXtm.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dtx0TQHB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D4Hw4OQf.js";import"./ButtonBase-DyVkVOcL.js";import"./CircularProgress-CAVNnpCq.js";import"./Button-3YflG3_Z.js";import"./index-B2ndQJTP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BicIoovE.js";import"./index-CdOa2c37.js";import"./Alert-Dir_QEXv.js";import"./createSvgIcon-ClgyEN0Z.js";import"./Close-CuIM6vU6.js";import"./AlertTitle-CaCAWia5.js";import"./Dialog-DfO_6uPF.js";import"./DialogContext-Cw8f1c_A.js";import"./Modal-B3KISgYa.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ci3V7QU8.js";import"./Fade-CAu7O51Y.js";import"./DialogTitle-DyT9WVA3.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D6KEQvGh.js";import"./DialogContent-Cdesp-0s.js";import"./DialogContentText-DZ-AT-EV.js";import"./index-CrcoPoGw.js";import"./index-DkhboHIY.js";import"./LinearProgress-BBZXToaM.js";const Ap={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: SpacesProps) => {
    return <QueryClientProvider client={queryClient}>
        <Spaces {...args}>
          <SpaceContainer>
            <Stack spacing={2}>
              <Paper>
                <Typography>Space 1 was passed in the props.</Typography>
                <SpaceComponent spaceId="1" />
              </Paper>
              <Paper>
                <Typography>Space 2 was fetched from the api via the spaceId passed in the props.</Typography>
                <SpaceComponent spaceId="2" />
              </Paper>
              <Paper>
                <Typography>Space 3 was not returned.</Typography>
                <SpaceComponent spaceId="3" />
              </Paper>
              <Paper>
                <Typography>Space 11 was fetched from the api via the payerId passed in the props.</Typography>
                <SpaceComponent spaceId="11" />
              </Paper>
            </Stack>
          </SpaceContainer>
        </Spaces>
      </QueryClientProvider>;
  },
  args: {
    spaces: [{
      id: '1',
      configurationId: '1',
      type: 'space',
      name: 'Space 1'
    }],
    spaceIds: ['2'],
    payerIds: ['a']
  }
}`,...i.parameters?.docs?.source}}};const Bp=["_Spaces"];export{i as _Spaces,Bp as __namedExportsOrder,Ap as default};
