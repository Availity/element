import{j as p}from"./iframe-BAylI5Je.js";import{P as e}from"./index-DoEalOTh.js";import{T as o}from"./index-ETFPSSMx.js";import{S as n}from"./index-ByCxKZZY.js";import{S as m,u as d,a as h}from"./Spaces-Li6IXOkd.js";import{Q as S}from"./suspense-DM7INo7N.js";import{Q as y}from"./queryClient-C6jYQT6l.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-gzQqajNa.js";import"./useTheme-Ct91rq7x.js";import"./styled-qchFS-7q.js";import"./memoTheme-BuFiJMU4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DNXJRb7Q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DpddYXXn.js";import"./Grid-BbaS7RWy.js";import"./styled-u23OebPe.js";import"./isMuiElement-Bp8yuFL1.js";import"./Stack-C7cYFq8h.js";import"./Container-a0Zu5jK3.js";import"./index-Xyu0Y7lY.js";import"./index-nS-hG1Vb.js";import"./___vite-browser-external_commonjs-proxy-D2k2oH43.js";import"./index-CcW9DsSz.js";import"./_toKey-Bm3XdhSY.js";import"./index-DRTO4L20.js";import"./index-Cwm8YEbi.js";import"./Tooltip-xJM8APnn.js";import"./useSlot-tp0V2ckF.js";import"./mergeSlotProps-CpHFUTeD.js";import"./useForkRef-BbXecB9y.js";import"./useTimeout-Dtra5kqE.js";import"./useControlled-DdXnTKyH.js";import"./useEventCallback-kqwlHtUL.js";import"./getReactElementRef-DYgwaRsW.js";import"./Portal-CtkHDIPH.js";import"./utils-jWIr1tvh.js";import"./TransitionGroupContext-4YAWsFUH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CjIBT4F9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyCxfOpo.js";import"./ButtonBase-CKOllhzB.js";import"./CircularProgress-Da-Xnf7p.js";import"./Button-6oOIUTaT.js";import"./index-BYPMkNsh.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B08jEN2V.js";import"./index-D7bO6OTt.js";import"./Alert-esZRtMpT.js";import"./createSvgIcon-srbipTqh.js";import"./Close-5QC12IK7.js";import"./AlertTitle-5KZiYhCa.js";import"./Dialog-wH2LgH47.js";import"./DialogContext-C5mlJ71S.js";import"./Fade-CXDV8Ndz.js";import"./Modal-CGjmMJhZ.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Be3vx7rL.js";import"./DialogTitle-B6QZaKAM.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BnE9qgeg.js";import"./DialogContent-BquCb2q2.js";import"./DialogContentText-BRpLF-q8.js";import"./index-BiBDMnSv.js";import"./Img-DM3hQ4Dc.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-pdLd23t_.js";import"./LinearProgress-DSwZW3sC.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
