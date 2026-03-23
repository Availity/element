import{j as p}from"./iframe-DvcXWkGI.js";import{P as e}from"./index-CooZlyF2.js";import{T as o}from"./index-C1KFV9tz.js";import{S as n}from"./index-lKF-mYBi.js";import{S as m,u as d,a as h}from"./Spaces-C_GBvFbE.js";import{Q as S}from"./suspense-D9wuLEku.js";import{Q as y}from"./queryClient-B_mSgvBX.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BWWtmnI-.js";import"./useTheme-BDjWybQB.js";import"./styled-DjkE2l0O.js";import"./memoTheme-C00_9AbM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CbbFdRSD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D0PWnwSE.js";import"./Grid-B-VOZSOw.js";import"./isMuiElement-BM04y7u2.js";import"./styled-1evKp3Hp.js";import"./Stack-BWYDbKiS.js";import"./Container-Dwn77WAc.js";import"./index-Cjyj5nZi.js";import"./index-CaTv9UPc.js";import"./___vite-browser-external_commonjs-proxy-GEXFNNnv.js";import"./index-CM3fg1Ej.js";import"./_toKey-DAWZYGE2.js";import"./index-CcKTLn5K.js";import"./index-O15mV2IG.js";import"./Tooltip-CA4xVq51.js";import"./useSlot-DrWGT-0c.js";import"./mergeSlotProps-C-IYj7GK.js";import"./useForkRef-DXhMi9Fu.js";import"./useTimeout-BLAqdi1l.js";import"./useControlled-CWsku3Ua.js";import"./useEventCallback-jEehnAW2.js";import"./getReactElementRef-CyXa0GT6.js";import"./Portal-BJf12Rly.js";import"./utils-CXX3yobC.js";import"./TransitionGroupContext-DxPJb2_E.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BYEe1XOi.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6_QWXQy.js";import"./ButtonBase-CI7etmmo.js";import"./CircularProgress-CsILiYUE.js";import"./Button-EYXZSfHT.js";import"./index-63S9eLZS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Co17_fug.js";import"./index-DetZXLf0.js";import"./Alert-BiLjPKRJ.js";import"./createSvgIcon-JaHuofy7.js";import"./Close-Dg4_-4d8.js";import"./AlertTitle-CVr0Wv5Z.js";import"./Dialog-COtuOqRS.js";import"./DialogContext-DbMapiWR.js";import"./Fade-DI9jsdhL.js";import"./Modal-BP1sB3AO.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CR8PY8T1.js";import"./DialogTitle-D3aFwZAL.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CCdHs59q.js";import"./DialogContent-DLevc8Xo.js";import"./DialogContentText-CJqWJULL.js";import"./index-BiBDMnSv.js";import"./Img-CjK904vE.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BtZLgksc.js";import"./LinearProgress-_Zv8muAf.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
