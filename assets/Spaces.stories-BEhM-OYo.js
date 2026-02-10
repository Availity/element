import{j as p}from"./iframe-DPWyg_sE.js";import{P as e}from"./index-DjTJFbxL.js";import{T as o}from"./index-rY20fRa0.js";import{S as n}from"./index-klW-QR3s.js";import{S as m,u as d,a as h}from"./Spaces-D0LQ24HH.js";import{Q as S}from"./suspense-mdu3oC3T.js";import{Q as y}from"./queryClient-Dga3yiWO.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CoTVTpu9.js";import"./useTheme-7tDQkz1C.js";import"./styled-Cx4UoaTx.js";import"./memoTheme-CvhDbT8x.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DAlbupBm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BW7Ma-QQ.js";import"./Grid-BOsdlhg5.js";import"./styled-D3AT7-A0.js";import"./isMuiElement-BiKTnabE.js";import"./Stack-BKgbUtNe.js";import"./Container-NqiDyIZZ.js";import"./index-CA39NvIm.js";import"./index-DVaEuPEv.js";import"./___vite-browser-external_commonjs-proxy-BHnCw5vx.js";import"./index-BKQXVhQw.js";import"./index-DM421Ljk.js";import"./index-WUbIbMUB.js";import"./Tooltip-CdOjvbM3.js";import"./useSlot-BxXiaFQD.js";import"./mergeSlotProps-CVICHJ3a.js";import"./useForkRef-CQj222cR.js";import"./useTimeout-RvN-OPdu.js";import"./useControlled-wCcL1r_0.js";import"./useEventCallback-jcG2qnaO.js";import"./getReactElementRef-x8Lx8RXT.js";import"./Portal-D5nwTdpC.js";import"./utils-BB7LdJ51.js";import"./TransitionGroupContext-Dbv33dTP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-LUJJL6zM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BF9Np9Lj.js";import"./ButtonBase-DwZSi7dI.js";import"./CircularProgress-9Tec-y6j.js";import"./Button-BBTQggAb.js";import"./index-HgfBgIyk.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BLZY0MiZ.js";import"./index-wJbszTeT.js";import"./Alert-BMAWyRSD.js";import"./createSvgIcon-kD6OJaqd.js";import"./Close-DzjwsAlU.js";import"./AlertTitle-CMRfVp0l.js";import"./Dialog-BJ9FLlGg.js";import"./DialogContext-C3Wy26AU.js";import"./Fade-jqxkxdpP.js";import"./Modal-CWpQp0b9.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-RhGZ7C5k.js";import"./DialogTitle-6PkxTA1W.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DDpqP_AQ.js";import"./DialogContent-Bzwf03Mx.js";import"./DialogContentText-D9uR4dif.js";import"./index-BiBDMnSv.js";import"./Img-CEac-frH.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DumAvHa4.js";import"./LinearProgress-Dyf3qcpL.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Bp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dp=["_Spaces"];export{i as _Spaces,Dp as __namedExportsOrder,Bp as default};
