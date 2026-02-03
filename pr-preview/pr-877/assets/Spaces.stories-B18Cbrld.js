import{j as p}from"./iframe-DV3He85V.js";import{P as e}from"./index-Cp2KywbR.js";import{T as o}from"./index-Gh-kya9k.js";import{S as n}from"./index-Cdp2fnep.js";import{S as m,u as d,a as h}from"./Spaces-BCJ9YoVz.js";import{Q as S}from"./suspense-DvBVUbch.js";import{Q as y}from"./queryClient-TZqKghq9.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Dqu7MPEo.js";import"./useTheme-SfRUUZiP.js";import"./styled-BUFH9864.js";import"./memoTheme-CqO710ep.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CE44PW7B.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BLEv-Mrp.js";import"./Grid-BisxJX3W.js";import"./styled-CIy1Wxpq.js";import"./isMuiElement-_HgZ6tG6.js";import"./Stack-eceoAOKj.js";import"./Container-KecICwJn.js";import"./index-CWK71Wa8.js";import"./index-DjBCg5qw.js";import"./___vite-browser-external_commonjs-proxy-CZo1mwdi.js";import"./index-DCghOe2_.js";import"./_toKey-B40GCxv9.js";import"./index-Dz0hkzEg.js";import"./index-BfHLbFj4.js";import"./Tooltip-B-fI_KqI.js";import"./useSlot-D_lQT_km.js";import"./mergeSlotProps-BOgCOH-Y.js";import"./useForkRef-BjKAtTT0.js";import"./useTimeout-Ckthjz3O.js";import"./useControlled-Ccx6itka.js";import"./useEventCallback-DWs5MTmZ.js";import"./getReactElementRef-DFI1E4nz.js";import"./Portal-C_yGG6TD.js";import"./utils-Bwvx3eCn.js";import"./TransitionGroupContext-DIj-4TH7.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Da-PnXIN.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CvMV_1wy.js";import"./ButtonBase-CmkGGnOd.js";import"./CircularProgress-DhVft3f6.js";import"./Button-BaC_cxcf.js";import"./index-BjhlD0KS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BPrDg5y8.js";import"./index-BrdVM3av.js";import"./Alert-Bs0jtQnM.js";import"./createSvgIcon-Dah6_HeO.js";import"./Close-K7FLhnUA.js";import"./AlertTitle-BWmOJVPx.js";import"./Dialog-DjZPI3xj.js";import"./DialogContext-D8zc6eLs.js";import"./Fade-BX6Wa8dQ.js";import"./Modal-wug12V1o.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CGWgMRTN.js";import"./DialogTitle-DCqZ7Y1I.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-Cn8H-8Zo.js";import"./DialogContent-DwH-W_QO.js";import"./DialogContentText-DgvJ_YrE.js";import"./index-BiBDMnSv.js";import"./Img-Rmrx-q5q.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B4cGNfli.js";import"./LinearProgress-t1d-6xwd.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
