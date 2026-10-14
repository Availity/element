import{j as p}from"./iframe-Dc8rhMFy.js";import{P as e}from"./index-Dh_WMTr-.js";import{T as o}from"./index-j2N_GGzH.js";import{S as n}from"./index-5t25iiun.js";import{Q as d}from"./suspense-CyoahKL7.js";import{S as m,u as h,a as S}from"./Spaces-DPlytPTk.js";import{Q as y}from"./queryClient-xlGhNMxi.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CSAWm734.js";import"./useTheme-CAn2KvKi.js";import"./styled-BGT3xm4Q.js";import"./memoTheme-S-5nuklg.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-B_IwZxWJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BeA7Astr.js";import"./Grid-CK3PRshc.js";import"./isMuiElement-DClEETsS.js";import"./styled-Bni-voJ-.js";import"./Stack-CFoc2Kye.js";import"./Container-B259nuZR.js";import"./Img-D68gDiCH.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CVAcvEgZ.js";import"./index-zYdcEWB1.js";import"./___vite-browser-external_commonjs-proxy-BalxyFdc.js";import"./index-CY8VLdQ2.js";import"./index-3Bn-qklC.js";import"./index-Dd1sCRm8.js";import"./IconButton-CeH7M-cn.js";import"./ButtonBase-CqO9c84b.js";import"./useTimeout-CrdWGjXP.js";import"./TransitionGroupContext-BFqd1JBl.js";import"./useForkRef-udrkS_SI.js";import"./useEventCallback-BaT-rbGb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-FGVI2lRz.js";import"./Tooltip-y8JW-hsI.js";import"./useSlot-3a7eddsl.js";import"./mergeSlotProps-kSQUyWpp.js";import"./useControlled-g2ws-rib.js";import"./getReactElementRef-Dso64NKM.js";import"./Portal-jMetYcmF.js";import"./utils-D7u3O4jf.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bnd3aa5q.js";import"./Button-D07KqWD2.js";import"./index-DY0QHs1w.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BxrpqK7J.js";import"./index-g6loayii.js";import"./Alert-QjJoCGLU.js";import"./createSvgIcon-CArSjKuJ.js";import"./Close-C-Uwrjhi.js";import"./AlertTitle-BL7DBIFe.js";import"./Dialog-Dx7ur0KF.js";import"./DialogContext-B_4jmn7e.js";import"./Modal-Ch87VQcB.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-fXAkdBb0.js";import"./Fade-DOAN5MWn.js";import"./DialogTitle-CcwNelES.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-6qoFnUMh.js";import"./DialogContent-BQlTzbw-.js";import"./DialogContentText-B2dSKYXn.js";import"./index-MVgG_W0q.js";import"./index-DbeOVBAJ.js";import"./LinearProgress-BkJ-OOZU.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ap=["_Spaces"];export{i as _Spaces,Ap as __namedExportsOrder,zp as default};
