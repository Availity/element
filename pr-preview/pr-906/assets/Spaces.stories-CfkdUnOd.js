import{j as p}from"./iframe-6QlsuZks.js";import{P as e}from"./index-CDZf3QmR.js";import{T as o}from"./index-ClTqhWkD.js";import{S as n}from"./index-D54pz1q_.js";import{S as m,u as d,a as h}from"./Spaces-BGOPz-4U.js";import{Q as S}from"./suspense-B5poojJ7.js";import{Q as y}from"./queryClient-DOqz2la0.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CDdLas_Y.js";import"./useTheme-CgDfdbfy.js";import"./styled-DGzk_rgf.js";import"./memoTheme-B9sQlNky.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BiVk-Xpu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BeM2Ae_w.js";import"./Grid-B1lubc6W.js";import"./isMuiElement-Cw9eyX2o.js";import"./styled-BHPtUtOc.js";import"./Stack-CcxNsvTs.js";import"./Container-BCUe36Lo.js";import"./index-0b3xigZQ.js";import"./index-C0QdKyD5.js";import"./___vite-browser-external_commonjs-proxy-p2BYraIi.js";import"./index-DMddt39K.js";import"./_toKey-CnCcwt5D.js";import"./index-CinHLUj8.js";import"./index-Bu7ksarN.js";import"./Tooltip-Obr4DBw0.js";import"./useSlot-DzncR7P9.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useForkRef-B_RCYMsy.js";import"./useTimeout-CoBmWaVy.js";import"./useControlled-D8gQq48B.js";import"./useEventCallback-H76OWquH.js";import"./getReactElementRef-CeFrpTOn.js";import"./Portal-DtF3r0WZ.js";import"./utils-DDHdHaR3.js";import"./TransitionGroupContext-BfrWwv51.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-XhtNc6mu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52xOams.js";import"./ButtonBase-DqANlMe2.js";import"./CircularProgress-BzseWMqn.js";import"./Button-Ck8mL0PX.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-o3xhyLw5.js";import"./index-CoSdfn8Z.js";import"./Alert-Ds5ZG5Ug.js";import"./createSvgIcon-suRscvHS.js";import"./Close-DFnKTLyr.js";import"./AlertTitle-SeCTzYnf.js";import"./Dialog-hHjvWq9f.js";import"./DialogContext-C-aN3BOT.js";import"./Fade-BumTlQbr.js";import"./Modal-BEIbnPxI.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BrGAJPN3.js";import"./DialogTitle-DnO9-dT-.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-OKp26HHu.js";import"./DialogContent-CNzapMB-.js";import"./DialogContentText-CjJBkTw6.js";import"./index-BiBDMnSv.js";import"./Img-BJ8lDmzz.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BQJM8lke.js";import"./LinearProgress-Dsc5MooC.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
