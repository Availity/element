import{j as p}from"./iframe-Cb7vw6QO.js";import{P as e}from"./index-CO6XZXQC.js";import{T as o}from"./index-Bi9KpQ_H.js";import{S as n}from"./index-Cvw4zcDU.js";import{S as m,u as d,a as h}from"./Spaces-BgZchp5U.js";import{Q as S}from"./suspense-EYViC-ju.js";import{Q as y}from"./queryClient-D9g_JsLJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Bx6fwAkb.js";import"./useTheme-CGEjvpOB.js";import"./styled-Bj0Es0Li.js";import"./memoTheme-BhRdBUps.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DIMxXIFj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CNkaSG6M.js";import"./Grid-C2w8BqSX.js";import"./styled-CR8SZlf8.js";import"./isMuiElement-imdvoBqP.js";import"./Stack-CHKpeULE.js";import"./Container-D_bVL9K8.js";import"./index-CxFXSMKf.js";import"./index-CEmQAIyt.js";import"./___vite-browser-external_commonjs-proxy-BcrjmJoQ.js";import"./index-DobhkrB9.js";import"./_toKey-DnGNACQC.js";import"./index-Br7b07_3.js";import"./index-BC2dqveQ.js";import"./Tooltip-BsHoCzhf.js";import"./useSlot-Bh9EPizr.js";import"./mergeSlotProps-81oQhZWc.js";import"./useForkRef-BNxAHOk3.js";import"./useTimeout-Cz1ClSsL.js";import"./useControlled-DqdtCuR_.js";import"./useEventCallback-DhPRnvwe.js";import"./getReactElementRef-a_8TXcOV.js";import"./Portal-DJJdN93D.js";import"./utils-DcOfItOr.js";import"./TransitionGroupContext-DGa2MF0H.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BV7LDA1z.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CF-wUheM.js";import"./ButtonBase-CsQPbkJ1.js";import"./CircularProgress-CDQWW7ND.js";import"./Button-DxhLSeMc.js";import"./index-CXcfblB4.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DzlaQllX.js";import"./index-D31WKjRq.js";import"./Alert-Bx6aN20e.js";import"./createSvgIcon-Bes_Hs0U.js";import"./Close-BVZ75a6G.js";import"./AlertTitle-MhlC6FrY.js";import"./Dialog-CXcldclz.js";import"./DialogContext-AURFP4dJ.js";import"./Fade-DsAVsIO4.js";import"./Modal-B43L0UeZ.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-4le12T3H.js";import"./DialogTitle-DgxScFnn.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DpXtIPIo.js";import"./DialogContent-Ze7xIoz8.js";import"./DialogContentText-CS3cgRPB.js";import"./index-BiBDMnSv.js";import"./Img-Dmh2a62V.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Bc_akwOf.js";import"./LinearProgress-DW39IK7d.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
