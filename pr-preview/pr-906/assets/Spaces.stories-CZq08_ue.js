import{j as p}from"./iframe-CWp6xAJi.js";import{P as e}from"./index-Rdz_pQaj.js";import{T as o}from"./index-BJBbOM60.js";import{S as n}from"./index-DiK5u2m6.js";import{S as m,u as d,a as h}from"./Spaces-CAUg63oS.js";import{Q as S}from"./suspense-CiFeeshP.js";import{Q as y}from"./queryClient-BwlWFBTr.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-C5XDmwPa.js";import"./useTheme-DHWCGmhz.js";import"./styled-BbzXfeov.js";import"./memoTheme-Cd48oeI4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DAHmtciD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-C01JMt70.js";import"./Grid-BEi4nMA-.js";import"./isMuiElement-CXCicdtK.js";import"./styled-Ck6GK9xN.js";import"./Stack-DilTTonM.js";import"./Container-CHapUF_w.js";import"./index-CdDy2ze1.js";import"./index-D0YYC-dU.js";import"./___vite-browser-external_commonjs-proxy-OyBOwfD9.js";import"./index-BCW1wysz.js";import"./_toKey-Bjg_s0Hk.js";import"./index-CzBRKzH5.js";import"./index-Bxm1lbI1.js";import"./Tooltip-C9q2MrGF.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./useTimeout-YuGHwSAC.js";import"./useControlled-D9oaenaI.js";import"./useEventCallback-DWzQfpRP.js";import"./getReactElementRef-C_Avcpz3.js";import"./Portal-v_NAREGo.js";import"./utils-D4ENFMIW.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DzjUqkkU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcXRPXis.js";import"./ButtonBase-QvXOsOsa.js";import"./CircularProgress-a2FiPD69.js";import"./Button-DheGOcXb.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BE17mmZt.js";import"./index-AysaO8jM.js";import"./Alert-6yLjcISu.js";import"./createSvgIcon-BPSi4ajd.js";import"./Close-DqjWgI2I.js";import"./AlertTitle-COYTwYxW.js";import"./Dialog-CGbXNLYH.js";import"./DialogContext-wJ0vz1gc.js";import"./Fade-BHa9ONGT.js";import"./Modal-BPpm24UE.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqFgtmAJ.js";import"./DialogTitle-DqMc5cYb.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Bi4GY5G6.js";import"./DialogContent-CWc-WmL0.js";import"./DialogContentText-B-bVyKnz.js";import"./index-BiBDMnSv.js";import"./Img-DqoSYR6s.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-u-1osw_0.js";import"./LinearProgress-K7vU8Eyn.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
