import{j as p}from"./iframe-DM2JG2Wv.js";import{P as e}from"./index-BZbVZ93S.js";import{T as o}from"./index-DASKwMqe.js";import{S as n}from"./index-Dro33RKh.js";import{Q as d}from"./suspense-BSjNsbtt.js";import{S as m,u as h,a as S}from"./Spaces-C5LlW0ON.js";import{Q as y}from"./queryClient-9q9sBIyj.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-D6rGRseY.js";import"./useTheme-BIdTJdU8.js";import"./styled-DsG-VtUm.js";import"./memoTheme-BeNhxrAF.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Cb49bwUU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Cqyd88nw.js";import"./Grid-CX1e7vz2.js";import"./isMuiElement-B6N371AV.js";import"./styled-Bf965zM_.js";import"./Stack-D8O8MXVX.js";import"./Container-I8b0yq_j.js";import"./Img-Vf_c--9Y.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DUd7HCfU.js";import"./index-Dhw4AyUI.js";import"./___vite-browser-external_commonjs-proxy-Dtep4sfn.js";import"./index-CY8VLdQ2.js";import"./index-QQrHuOL2.js";import"./index-DQYiNEqx.js";import"./IconButton-Bj7e_4ur.js";import"./ButtonBase-FpBSGXSw.js";import"./useTimeout-DDDxsICF.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useForkRef--lBTfT4q.js";import"./useEventCallback-B8_sGVJg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D7bBmSyx.js";import"./Tooltip-Ff-XGBQt.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useControlled-4UyvroS3.js";import"./getReactElementRef-gsi1wQpy.js";import"./Portal-DFUf67sY.js";import"./utils-B1H1HspZ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-6BpQXPqS.js";import"./Button-p88YkSSM.js";import"./index-DV4r8BJd.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C29JSttG.js";import"./index-CRA5pTls.js";import"./Alert-DCzdnYes.js";import"./createSvgIcon-CxStVnnE.js";import"./Close-BRUyXtrN.js";import"./AlertTitle-BEGg6elP.js";import"./Dialog-C2GSj1um.js";import"./DialogContext-BYXwFpGK.js";import"./Modal-Bpysy-qr.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ba2TkHwg.js";import"./Fade-Bb7aty5O.js";import"./DialogTitle-VeZMU0Mw.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CbLfdzlz.js";import"./DialogContent-DoQd1zCO.js";import"./DialogContentText-BQ5kGoWo.js";import"./index-MVgG_W0q.js";import"./index-B8UE5Z0w.js";import"./LinearProgress-FD_GUhwb.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
