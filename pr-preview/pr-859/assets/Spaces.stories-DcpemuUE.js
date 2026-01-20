import{j as p}from"./iframe-Bb3d8CAJ.js";import{P as e}from"./index-ErtCgmpX.js";import{T as o}from"./index-CGPDYcnJ.js";import{S as n}from"./index-EIWodvd0.js";import{S as m,u as d,a as h}from"./Spaces-CacJRflb.js";import{Q as S}from"./suspense-BlR5cJnB.js";import{Q as y}from"./queryClient-BDROJJSB.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper--RUEVv6r.js";import"./useTheme-7VSsG7x3.js";import"./styled-DljcZuS8.js";import"./memoTheme-DG97Ks8Q.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BQpGuQ-L.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BBwRUkD_.js";import"./Grid-DMQwhFnG.js";import"./styled-BHuc_G65.js";import"./isMuiElement-DI-PqbcS.js";import"./Stack-BUtu09qb.js";import"./Container-UE_6YzFq.js";import"./index-jKUHhpiq.js";import"./index-DLraAfE_.js";import"./___vite-browser-external_commonjs-proxy-CF9TkHqL.js";import"./index-gEuNZa6B.js";import"./_toKey-BFA3_CaF.js";import"./index-DJ34LvrG.js";import"./index-5JqH0pbP.js";import"./Tooltip-SkDB5_9b.js";import"./useSlot-DsuYGff3.js";import"./mergeSlotProps-gjnpxKKm.js";import"./useForkRef-B1A3wtQb.js";import"./useTimeout-CybQo20w.js";import"./useControlled-Dk5cREEZ.js";import"./useEventCallback-CXGXfcdA.js";import"./getReactElementRef-C8hW-Gj-.js";import"./Portal-Cn9zneq7.js";import"./utils-CYAKcw8L.js";import"./TransitionGroupContext-B6dWxZQA.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DBrHcN3c.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3Ov0u9A.js";import"./ButtonBase-ChdXNNb1.js";import"./CircularProgress-CEqu6RKG.js";import"./Button-Bh15sM15.js";import"./index-0wpeyl_7.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-B3pyeCMx.js";import"./index-Bx_poN4H.js";import"./Alert-CDKySKWP.js";import"./createSvgIcon-DaOARJ1X.js";import"./Close-Bzf2E-vp.js";import"./AlertTitle-DKQa9QRK.js";import"./Dialog-eyMRBSqz.js";import"./DialogContext-CSGiNY5F.js";import"./Fade-GlPiP-Z7.js";import"./Modal-Bwn9o6tM.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DGjsJ5Cu.js";import"./DialogTitle-280v_qen.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-zfjnqS8U.js";import"./DialogContent-CFm_iYu6.js";import"./DialogContentText-DsP92xIh.js";import"./index-BiBDMnSv.js";import"./Img-Bdlht8Z2.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BZmm8Y8x.js";import"./LinearProgress-DC8YPVxh.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
