import{j as p}from"./iframe-DRsKaZoV.js";import{P as e}from"./index-DXAC1evH.js";import{T as o}from"./index-CwkjCgy5.js";import{S as n}from"./index-CGwbp9eO.js";import{S as m,u as d,a as h}from"./Spaces-DsRSQPKP.js";import{Q as S}from"./suspense-AacBkFZ7.js";import{Q as y}from"./queryClient-C8Jl_98m.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Ddpt-3Cp.js";import"./useTheme-C1O811uL.js";import"./styled-DO91FIEC.js";import"./memoTheme-olSsBjA8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DeM8j2MH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-C-WaElnX.js";import"./Grid-MQYUDPdn.js";import"./isMuiElement-BnPWmSJy.js";import"./styled-vffCohJ0.js";import"./Stack-BxJBBr6k.js";import"./Container-BgUm-9tp.js";import"./index-DxRsnPiJ.js";import"./index-C_R1jHQO.js";import"./___vite-browser-external_commonjs-proxy-DktWiFg1.js";import"./index-gM6fV40Q.js";import"./_toKey-B9m6adjy.js";import"./index-Dr2JO49f.js";import"./index-B2IJrd5x.js";import"./Tooltip-BkcHQcF9.js";import"./useSlot-DNM0KLoM.js";import"./mergeSlotProps-BURl53KS.js";import"./useForkRef-LQtjIIgV.js";import"./useTimeout-C--q8J9W.js";import"./useControlled-kFa1Yq00.js";import"./useEventCallback-Bu60zwDR.js";import"./getReactElementRef-BQu0zR55.js";import"./Portal-D6re67WF.js";import"./utils-DcRyR5pI.js";import"./TransitionGroupContext-BL3wvAVn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3Llr-h-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DtO7gEQ8.js";import"./ButtonBase-CTgQ_by3.js";import"./CircularProgress-CYts75uW.js";import"./Button-CfQxP6eB.js";import"./index-BpFZIt2g.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Dpxjd7uT.js";import"./index-BXQtZvQb.js";import"./Alert-ZoU9nbGa.js";import"./createSvgIcon-DdCwdPBR.js";import"./Close-GYMp_htT.js";import"./AlertTitle-CRCGSusa.js";import"./Dialog-hbnWOlAD.js";import"./DialogContext-TAUP1mff.js";import"./Fade-CW38gb4g.js";import"./Modal-BZWbCELz.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-p4pxeza_.js";import"./DialogTitle-CX2p5Sj9.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CAk4nH0V.js";import"./DialogContent-Dn6Z4FKJ.js";import"./DialogContentText-KD25his5.js";import"./index-BiBDMnSv.js";import"./Img-CkdDyJ5E.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B8r_rKUG.js";import"./LinearProgress-BV3oKQrm.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
