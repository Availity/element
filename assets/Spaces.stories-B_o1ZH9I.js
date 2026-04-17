import{j as p}from"./iframe-D_FBGCyt.js";import{P as e}from"./index-DVlriJs3.js";import{T as o}from"./index-BFUMh9R9.js";import{S as n}from"./index-BBo7dAKW.js";import{S as m,u as d,a as h}from"./Spaces-Be36CjPD.js";import{Q as S}from"./suspense-D_Mfr092.js";import{Q as y}from"./queryClient-E_xzb1HY.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BakwuC79.js";import"./useTheme-C9l_6OF0.js";import"./styled-xf6f_HVu.js";import"./memoTheme-BLxVLpBG.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-2LRTBqXt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CvB3zA9H.js";import"./Grid-DRIeD9kY.js";import"./isMuiElement-DWlz3pJm.js";import"./styled-D_5SdMbV.js";import"./Stack-CDN4SC59.js";import"./Container-CHNU3dwn.js";import"./index-DkiYkhBs.js";import"./index-zm1E9Otn.js";import"./___vite-browser-external_commonjs-proxy-nzxmoGa4.js";import"./index-BjtTJEnU.js";import"./_toKey-KD99ZJJq.js";import"./index-CZAakmTg.js";import"./index-DfmN7Pdp.js";import"./Tooltip-Cz548eDU.js";import"./useSlot-BtMprAQd.js";import"./mergeSlotProps-gV_s4djX.js";import"./useForkRef-CnVOscb6.js";import"./useTimeout-SlAgGEcH.js";import"./useControlled-CdfLcSkL.js";import"./useEventCallback-jDv7Sv7e.js";import"./getReactElementRef-CwqBwRrr.js";import"./Portal-DcK87Y2W.js";import"./utils-DnGyS3wP.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C2D_NZSZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-eUYvyQUt.js";import"./ButtonBase-D61WXHG0.js";import"./CircularProgress-BjsVuxPp.js";import"./Button-CuoV_D53.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5AfvjDJL.js";import"./index-QfnwI5iy.js";import"./Alert-Cz3M0dZx.js";import"./createSvgIcon-CrDNgKEm.js";import"./Close-CARxMNKp.js";import"./AlertTitle-C6ZJ6MOx.js";import"./Dialog-D0WR4eUQ.js";import"./DialogContext-DZe1jgtD.js";import"./Fade-BVS2OpEz.js";import"./Modal-C7olDkj8.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-y5ajGIML.js";import"./DialogTitle-epVQwNki.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-hX92IuZo.js";import"./DialogContent-BxIGztaU.js";import"./DialogContentText-CFE8LWng.js";import"./index-BiBDMnSv.js";import"./Img-BKOv-I5H.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-u5-4HeeU.js";import"./LinearProgress-DEzKAJyv.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
