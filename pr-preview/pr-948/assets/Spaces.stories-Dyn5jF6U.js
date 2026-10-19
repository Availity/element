import{j as p}from"./iframe-V3tbPOwE.js";import{P as e}from"./index-Cdq8d4IM.js";import{T as o}from"./index-DSivALFp.js";import{S as n}from"./index-DBjuuRwi.js";import{Q as d}from"./suspense-Bd5Grz5f.js";import{S as m,u as h,a as S}from"./Spaces-B9ek3LH_.js";import{Q as y}from"./queryClient-BSL3XK4y.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CdPhUGdf.js";import"./useTheme-kNyMIH6i.js";import"./styled-Br8tiGNT.js";import"./memoTheme-nYDz4AH7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CpNf9PKA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CWUEJO1A.js";import"./Grid-Bw-kyyif.js";import"./isMuiElement-Bojr2z3f.js";import"./styled-DaY85gB9.js";import"./Stack-BhI6E9BW.js";import"./Container-DuquqMVo.js";import"./Img-CSHLkEt5.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Duf-tmLC.js";import"./index-CtNMuJ1a.js";import"./___vite-browser-external_commonjs-proxy-C6cQmOn5.js";import"./index-CY8VLdQ2.js";import"./index-CFbmZNaZ.js";import"./index-CheDZIlw.js";import"./IconButton-Cmdx9brD.js";import"./ButtonBase-BWZhrEZd.js";import"./useTimeout-BFosHs8Q.js";import"./TransitionGroupContext-BT8MRBaI.js";import"./useForkRef-CZXJqfUL.js";import"./useEventCallback-BsNvdAGC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-1E0UYHmw.js";import"./Tooltip-BqnFS_Iw.js";import"./useSlot-JqPUkt86.js";import"./mergeSlotProps-nXLrBWqI.js";import"./useControlled-DU3h8Asb.js";import"./getReactElementRef-jC5-igXX.js";import"./Portal-BYLHPY1g.js";import"./utils-DJcf64yX.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BFQRGr1E.js";import"./Button-DK2TX3S1.js";import"./index-DDGGRFDD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DMsEcqNG.js";import"./index-CcAWttj_.js";import"./Alert-Aeb5riUS.js";import"./createSvgIcon-CsNTB8qp.js";import"./Close-BuDRW0gl.js";import"./AlertTitle-BPTZAAwl.js";import"./Dialog-Csqi5Mpt.js";import"./DialogContext-3r8nYdh0.js";import"./Modal-Bj2PA8Xo.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-lpfDs7Fh.js";import"./Fade-CfqPTD91.js";import"./DialogTitle-CUphDt3l.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BLR-3kJc.js";import"./DialogContent-CF0bkQkI.js";import"./DialogContentText-XhmH0dky.js";import"./index-MVgG_W0q.js";import"./index-CmxwCyrl.js";import"./LinearProgress-BA6RIeig.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
