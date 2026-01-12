import{j as p}from"./iframe-C1vntzAX.js";import{P as e}from"./index-OeHQVHu8.js";import{T as o}from"./index-BaatzM2V.js";import{S as n}from"./index-B1BPaPLx.js";import{S as m,u as d,a as h}from"./Spaces-D8pHMc9t.js";import{Q as S}from"./suspense-DBP8VnaF.js";import{Q as y}from"./queryClient-gcjJWDLa.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DNaexmm0.js";import"./useTheme-vaQlFbmr.js";import"./styled-CpL5pW3T.js";import"./memoTheme-B-OyMYhz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D6jUB3HO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DpOTPtKg.js";import"./Grid-Cq8hrZqV.js";import"./styled-BjeYOfVm.js";import"./isMuiElement-DtGZmajx.js";import"./Stack-CGWfFhJY.js";import"./Container-Bfu4tgfO.js";import"./index-DWjiW5pu.js";import"./index-DzPuaxbl.js";import"./___vite-browser-external_commonjs-proxy-DIzVb-LC.js";import"./index-_GNUiS2s.js";import"./_toKey-Bwqez8zt.js";import"./index-BdjfkQ2G.js";import"./index-BuDjrn_R.js";import"./Tooltip-CVSMh7i1.js";import"./useSlot-BmDgUDTi.js";import"./mergeSlotProps-B_ZZvCmf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DLYnPViW.js";import"./useTimeout-Dtp_2qQ3.js";import"./useControlled-DMvVP-hg.js";import"./useEventCallback-D85fiQCE.js";import"./getReactElementRef-Bv2ENe3N.js";import"./Portal-CG1k2SoH.js";import"./utils-3uAZdIAp.js";import"./TransitionGroupContext-cDoqgCSl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B-xFDx91.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-qkSs6g8Y.js";import"./ButtonBase-COQRfLrd.js";import"./CircularProgress-Drsym3OL.js";import"./Button-CbKLSFYP.js";import"./index-CDQPidku.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CgejwYEH.js";import"./index-B2nVYgcY.js";import"./Alert-WtFRTAvX.js";import"./createSvgIcon-OHXdYWDp.js";import"./Close-2Rtql59a.js";import"./AlertTitle-BI44UVvd.js";import"./Dialog-sOQZAz-b.js";import"./DialogContext-iOwpaS-S.js";import"./Fade-BAaRtBTH.js";import"./Modal-Pgn3CpwW.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CYuRmh3w.js";import"./DialogTitle-CvF8sv2D.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-CP9IJB0H.js";import"./DialogContent-44GlrxrL.js";import"./DialogContentText-DrRkc2a-.js";import"./index-BiBDMnSv.js";import"./Img-DDr3pSG_.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BjAxvlm7.js";import"./LinearProgress-BmSfcCyz.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
