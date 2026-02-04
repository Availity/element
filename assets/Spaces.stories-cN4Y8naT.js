import{j as p}from"./iframe-uePoqqpz.js";import{P as e}from"./index-CVlgYrON.js";import{T as o}from"./index-Drv2WCB6.js";import{S as n}from"./index-B2DDv_1u.js";import{S as m,u as d,a as h}from"./Spaces-CiKEumP4.js";import{Q as S}from"./suspense-ByETT2CX.js";import{Q as y}from"./queryClient-_OCJGSJF.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DEbfATBV.js";import"./useTheme-CLegm-7I.js";import"./styled-HV0RCVZb.js";import"./memoTheme-Dgj0sIK-.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CCivflCu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DubY7n2i.js";import"./Grid-B0G5TA-i.js";import"./styled-CfUCvIwx.js";import"./isMuiElement-HClAlyu-.js";import"./Stack-arXlwEbk.js";import"./Container-BhCZsEOQ.js";import"./index-B13PupMo.js";import"./index-DAiSr6pO.js";import"./___vite-browser-external_commonjs-proxy-DpehuKzW.js";import"./index-C0ZkTegJ.js";import"./_toKey-BLyBuzYe.js";import"./index-DiPXwb89.js";import"./index-DRQPm386.js";import"./Tooltip-CBI98mGf.js";import"./useSlot-dwhecRhc.js";import"./mergeSlotProps-BA0TfUKM.js";import"./useForkRef-BwAAUV5l.js";import"./useTimeout-_NjN4_Sd.js";import"./useControlled-CiVZLVlp.js";import"./useEventCallback-DlO0-RjJ.js";import"./getReactElementRef-C3-m1DFV.js";import"./Portal-qmW-7K1L.js";import"./utils-BMnAKpwa.js";import"./TransitionGroupContext-CmeeQpCz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D5l61s2T.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Ikh-V53z.js";import"./ButtonBase-DvYvvCW7.js";import"./CircularProgress-JnYtC6I3.js";import"./Button-BeX4uEqy.js";import"./index-iuot5o8P.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzJHsKlT.js";import"./index-CIuAo_gl.js";import"./Alert-BBCUYvYq.js";import"./createSvgIcon-CMty7C1j.js";import"./Close-B9UNSdso.js";import"./AlertTitle-BiDNUnvZ.js";import"./Dialog-C27Sbppq.js";import"./DialogContext-qegpPQNS.js";import"./Fade-C63bziq-.js";import"./Modal-D5SBOgz1.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Qp_fmvj0.js";import"./DialogTitle-cRRjPiBt.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-K4Qk7ETw.js";import"./DialogContent-FUOaJyQO.js";import"./DialogContentText-C02ZfJmw.js";import"./index-BiBDMnSv.js";import"./Img-DgN-XNKY.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-mYnvcCrs.js";import"./LinearProgress-B0UfSxPs.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
