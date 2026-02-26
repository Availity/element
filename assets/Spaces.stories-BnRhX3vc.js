import{j as p}from"./iframe-CeHuEGfq.js";import{P as e}from"./index-CXXWhsco.js";import{T as o}from"./index-Cm6CBbNY.js";import{S as n}from"./index-FvduELsu.js";import{S as m,u as d,a as h}from"./Spaces-CmWera9X.js";import{Q as S}from"./suspense-DkwC9qUy.js";import{Q as y}from"./queryClient-rUKrIDpz.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CZXACBVR.js";import"./useTheme-B3XVgK6m.js";import"./styled-BKIS-N79.js";import"./memoTheme-qRsFH38R.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Dg4MYAbO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-yrTwHKYh.js";import"./Grid-DxlaTZg5.js";import"./isMuiElement-CftH3wiN.js";import"./styled-Cy9W--Nr.js";import"./Stack-Bat2MqnC.js";import"./Container-BxPloYEr.js";import"./index-CIHaerRx.js";import"./index-BsbybPTp.js";import"./___vite-browser-external_commonjs-proxy-ClX2-Ngo.js";import"./index-CcUJhC2E.js";import"./_toKey-B1GztdOY.js";import"./index-D1VwvkFA.js";import"./index-h6yqrKSK.js";import"./Tooltip-B1PYtTnY.js";import"./useSlot-BjsCytrs.js";import"./mergeSlotProps-C79h5NBS.js";import"./useForkRef-C6m00sRF.js";import"./useTimeout-B6rYa280.js";import"./useControlled-BliVddQx.js";import"./useEventCallback-DqQ5xSM8.js";import"./getReactElementRef-C4ayTemP.js";import"./Portal-Dc4hRbOT.js";import"./utils-CIk5CIgt.js";import"./TransitionGroupContext-DUPaGMT2.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CYPYwT6r.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BIB2TXr9.js";import"./ButtonBase-C22Hv80K.js";import"./CircularProgress-BvbF-3zQ.js";import"./Button-Ds__YP3L.js";import"./index-Du3l4lx8.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DI8VqS9R.js";import"./index-BPE88dP6.js";import"./Alert-BcCrS3pv.js";import"./createSvgIcon-BjIHtdQj.js";import"./Close-ByTAjPGo.js";import"./AlertTitle-DslCryy4.js";import"./Dialog-DNKb1KR3.js";import"./DialogContext-BVe4wtzT.js";import"./Fade-BYSf3HBJ.js";import"./Modal-BR7rsPPx.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJ45d9Fb.js";import"./DialogTitle-CDuui1dq.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Bkfmp7GW.js";import"./DialogContent-kafgdkGa.js";import"./DialogContentText-BTOG7b0O.js";import"./index-BiBDMnSv.js";import"./Img-lO9_ODhI.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CBnbu5Ao.js";import"./LinearProgress-O8rpoJcd.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
