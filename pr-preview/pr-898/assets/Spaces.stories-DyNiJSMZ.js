import{j as p}from"./iframe-N02SuUfm.js";import{P as e}from"./index-C47wrsxU.js";import{T as o}from"./index-CW7Igu-9.js";import{S as n}from"./index-BFybfeE7.js";import{S as m,u as d,a as h}from"./Spaces-DvoCAC0I.js";import{Q as S}from"./suspense-CyHkgXoW.js";import{Q as y}from"./queryClient-2B3fXaEN.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BzTjV2sZ.js";import"./useTheme-CBomFZYP.js";import"./styled-uecMoX7Y.js";import"./memoTheme-DMlCkTbp.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DFwTx7H5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Ben8ewWC.js";import"./Grid-DiVgGJyw.js";import"./isMuiElement-C9a6bZCj.js";import"./styled-CbtJmbVm.js";import"./Stack-fkRAdSBn.js";import"./Container-BEjGGen4.js";import"./index-Czj-Ny1w.js";import"./index-BsTcntRr.js";import"./___vite-browser-external_commonjs-proxy-ClC8u-HF.js";import"./index-waB1V5N9.js";import"./_toKey-CsRLVhVE.js";import"./index-DICTtDVp.js";import"./index-BvsDSmAk.js";import"./Tooltip-CQFd6bN6.js";import"./useSlot-CYr36xh7.js";import"./mergeSlotProps-BGDsmNTV.js";import"./useForkRef-C8fPM8y1.js";import"./useTimeout-CejRPUTA.js";import"./useControlled-RyKq5As7.js";import"./useEventCallback-CZlMSRL0.js";import"./getReactElementRef-DLbY8hGf.js";import"./Portal-BvewvNxS.js";import"./utils-CJrkpLOG.js";import"./TransitionGroupContext-DaLiAsRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDT4gqxX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cq9St4jZ.js";import"./ButtonBase-Cit_CnSx.js";import"./CircularProgress-DkicU_0c.js";import"./Button-I7Afgrab.js";import"./index-lxra371Y.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BTj78AGP.js";import"./index-uq_T1LPK.js";import"./Alert-qQ2Kx2L4.js";import"./createSvgIcon-quS1Xx-W.js";import"./Close-H4HIKQVs.js";import"./AlertTitle-D3zzQPBG.js";import"./Dialog-DUwlmwQ-.js";import"./DialogContext-BahR75Qv.js";import"./Fade-CDLQakVW.js";import"./Modal-B1sd4ioz.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-zgdIOC3a.js";import"./DialogTitle-DVOVJO1A.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Bre77hnD.js";import"./DialogContent-oGp0EmQI.js";import"./DialogContentText-CjUAX6fn.js";import"./index-BiBDMnSv.js";import"./Img-BR_sMRZH.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DDN2cqkT.js";import"./LinearProgress-BAK_nBX8.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Fp=["_Spaces"];export{i as _Spaces,Fp as __namedExportsOrder,Dp as default};
