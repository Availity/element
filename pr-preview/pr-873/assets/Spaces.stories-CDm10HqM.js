import{j as p}from"./iframe-rhK9tIc4.js";import{P as e}from"./index-CcPUvV1o.js";import{T as o}from"./index-CxxGRAjC.js";import{S as n}from"./index-BuVKmpdG.js";import{S as m,u as d,a as h}from"./Spaces-CzZdXC0Q.js";import{Q as S}from"./suspense-v5cIoJZa.js";import{Q as y}from"./queryClient-CzdHrnSs.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-lILei8Mh.js";import"./useTheme-BXOJLFox.js";import"./styled-CBQFiEom.js";import"./memoTheme-IQ7acCr3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DyqU0saw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D2lP2H-p.js";import"./Grid-CauPBeSX.js";import"./styled-C2-sQktw.js";import"./isMuiElement-D8DZ9hal.js";import"./Stack-Dtbvl2fa.js";import"./Container-Bbkz5YIh.js";import"./index-Dw7u8_sL.js";import"./index-BP50ON-y.js";import"./___vite-browser-external_commonjs-proxy-EaFpFUog.js";import"./index-CAxT4LQL.js";import"./_toKey-CIEY6eSZ.js";import"./index-BTk349EJ.js";import"./index-C-QneIm0.js";import"./Tooltip-DiEqfW-N.js";import"./useSlot-Ss2ummcO.js";import"./mergeSlotProps-C1tzmMCQ.js";import"./useForkRef-DQY4LT_f.js";import"./useTimeout-D0IbZg6d.js";import"./useControlled-CseZ_aCu.js";import"./useEventCallback-Ds2BvoNa.js";import"./getReactElementRef-D1xzuExO.js";import"./Portal-D-ZKSgVP.js";import"./utils-Doe2UH4J.js";import"./TransitionGroupContext-uy7bHgBz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CU-sXxN2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BVic3zsX.js";import"./ButtonBase-C62hOKjf.js";import"./CircularProgress-BoTRikuG.js";import"./Button-KJ_PCDyl.js";import"./index-DRr7OjqP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DzAUVQ7n.js";import"./index-NR9LI-eO.js";import"./Alert-DKLCSaSQ.js";import"./createSvgIcon-C0bXOuHF.js";import"./Close-BqvVGatI.js";import"./AlertTitle-CFzRj1Ih.js";import"./Dialog-BX5Pi__m.js";import"./DialogContext-C23GJNM2.js";import"./Fade-BMyKZOEO.js";import"./Modal-BnNr8XN8.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Vru5BHJP.js";import"./DialogTitle-CgebKXs2.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-B2VTbJuG.js";import"./DialogContent-aTrM--M2.js";import"./DialogContentText-D1kJqGTC.js";import"./index-BiBDMnSv.js";import"./Img-BIdUmWX8.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-4zgXgVqj.js";import"./LinearProgress-CjHUIfVg.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
