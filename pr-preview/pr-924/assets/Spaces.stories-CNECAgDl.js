import{j as p}from"./iframe-B3KH45W1.js";import{P as e}from"./Paper-sb54ma1Z.js";import{T as o}from"./Typography-k07kEcGa.js";import{S as n}from"./Stack-tWcBAM6L.js";import{Q as d}from"./suspense-CAsCI82k.js";import{a as m,u as h,b as S}from"./Spaces-CJis0mLV.js";import{Q as y}from"./queryClient-DTc0CQfl.js";import"./preload-helper-Dab_6GC_.js";import"./Paper-BJPkQ8DM.js";import"./useTheme-Ds4SDsFm.js";import"./styled-B89GBRvi.js";import"./memoTheme-DWwRHojM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D3qZBRmm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Stack-D4A7CmlM.js";import"./styled-CG3DpTjV.js";import"./index-CM5pd_V5.js";import"./index-DN9vLoIX.js";import"./___vite-browser-external_commonjs-proxy-BJRxm24Q.js";import"./index-CZPtvi5C.js";import"./Dialog-Cv-unzQN.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./Actions-CO819m3I.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./Dialog-Dkasm6NF.js";import"./DialogContext-CDdNB07w.js";import"./Modal-CJRztngO.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-y0tvSJ2D.js";import"./Fade-DJRP9WcG.js";import"./DialogActions-aCzjmDhz.js";import"./DialogActions-DRtIiIzK.js";import"./DialogTitle-CNA-i3vB.js";import"./Alert-D7-DHY3L.js";import"./Form-D1K37nGD.js";import"./Alert-CobxnwGF.js";import"./createSvgIcon-CP7Sjzln.js";import"./Close-CCXJfw-Y.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./Button-BFPH_qAh.js";import"./Button-CpFiF_Ow.js";import"./index-CrcoPoGw.js";import"./CircularProgress-B2ndt8vM.js";import"./DialogContent-DiQnRWxF.js";import"./DialogContent-DSRTM2cv.js";import"./Box-C881z6QE.js";import"./Box-B9pOgzbW.js";import"./Grid-BlezGjUJ.js";import"./Grid-CXe_6B0b.js";import"./isMuiElement-BGMciLL0.js";import"./toPropertyKey-DCwh5dYN.js";const Bp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
