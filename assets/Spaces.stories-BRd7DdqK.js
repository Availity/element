import{j as p}from"./iframe-BXngGBfv.js";import{P as e}from"./index-Dc7aN8sI.js";import{T as o}from"./index-Cw2AsxKm.js";import{S as n}from"./index-D7EY_zU-.js";import{S as m,u as d,a as h}from"./Spaces-CJex-lY_.js";import{Q as S}from"./suspense-DGhvI0Xn.js";import{Q as y}from"./queryClient-BT_YAKCr.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DbLV-z9R.js";import"./useTheme-C0sMdU1B.js";import"./styled-Bawvqwj4.js";import"./memoTheme-By_0Hb9I.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CV53WmLj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Cs53hwdz.js";import"./Grid-DhicbWoX.js";import"./isMuiElement-7V78C_da.js";import"./styled-B3TWJa8B.js";import"./Stack-DSCZMnTD.js";import"./Container-BIFp3KrG.js";import"./index-BwXywnDN.js";import"./index-ms7ilKFh.js";import"./___vite-browser-external_commonjs-proxy-tsDcHO6r.js";import"./index-e8mVNsDS.js";import"./_toKey-OtZEyFlA.js";import"./index-BXPrWm1c.js";import"./index-ZvN5iItO.js";import"./Tooltip-16k3P5ny.js";import"./useSlot-CrmQg2MJ.js";import"./mergeSlotProps-Brb8C4Ss.js";import"./useForkRef-BPuQGl16.js";import"./useTimeout-DWqRGYei.js";import"./useControlled-XJJbW9AP.js";import"./useEventCallback-BS9kycBS.js";import"./getReactElementRef-BBa8qN_k.js";import"./Portal-71LMLhER.js";import"./utils-Co-MjcrY.js";import"./TransitionGroupContext-CO0Qzr5e.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Djma3IUa.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-B7Rw7xc_.js";import"./ButtonBase-CzabJsBp.js";import"./CircularProgress-CH7ElgU6.js";import"./Button-BjebpOto.js";import"./index-Cf4ih-NU.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BJuCOs7n.js";import"./index-t-KnR81S.js";import"./Alert-BZ1DkV_K.js";import"./createSvgIcon-PKFeQm70.js";import"./Close-D0vvQXqp.js";import"./AlertTitle-BO4yRm31.js";import"./Dialog-NbhAjYuE.js";import"./DialogContext-Dq51EOkV.js";import"./Fade-CaBS8FWJ.js";import"./Modal-DmtASUzd.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-sSmeMUd4.js";import"./DialogTitle-BPhH-sdm.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-ByOcPI-v.js";import"./DialogContent-Dvvh6dqY.js";import"./DialogContentText-BgYOI4OX.js";import"./index-BiBDMnSv.js";import"./Img-CKrx6hBK.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B7PaDX8W.js";import"./LinearProgress-BSIysp9t.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
