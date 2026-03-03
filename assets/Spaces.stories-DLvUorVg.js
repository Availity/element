import{j as p}from"./iframe-BogvEzzk.js";import{P as e}from"./index-CjCjwcLS.js";import{T as o}from"./index-DAeKrRu-.js";import{S as n}from"./index-COPogReU.js";import{S as m,u as d,a as h}from"./Spaces-eAenFIJE.js";import{Q as S}from"./suspense-oUbAOHSt.js";import{Q as y}from"./queryClient-CnnIINyG.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DuKdNvwh.js";import"./useTheme-BBNTCId8.js";import"./styled-BFtRu0jz.js";import"./memoTheme-ConJxO_1.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-6PKOADI0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-vDt_-54-.js";import"./Grid-BcbYyZVH.js";import"./isMuiElement-BFE19Jpd.js";import"./styled-CBCNrD84.js";import"./Stack-Dk7Y43_6.js";import"./Container-BNyaW0Z7.js";import"./index-CsqNTlSl.js";import"./index-DM5SbX2R.js";import"./___vite-browser-external_commonjs-proxy-BENhUaDo.js";import"./index-B6XcXT9j.js";import"./_toKey-DzkwCRm5.js";import"./index-CI6uDho0.js";import"./index-CVBbnXNY.js";import"./Tooltip-C6WVgS1U.js";import"./useSlot-Y7PrCG6i.js";import"./mergeSlotProps-BErbrcgk.js";import"./useForkRef-CqcCgO8d.js";import"./useTimeout-DZGpqNmU.js";import"./useControlled-gyysmPVY.js";import"./useEventCallback-C0HPOgFU.js";import"./getReactElementRef-CP_6PAo8.js";import"./Portal-ZBYUloHF.js";import"./utils-5Q8am4bW.js";import"./TransitionGroupContext-CHnQfJTl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BANTEgU8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BtFu5_Hj.js";import"./ButtonBase-BesYK0lh.js";import"./CircularProgress-DhfsvjKI.js";import"./Button-tZZ9xZeA.js";import"./index-DN6mEFyY.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-G5ERuA4c.js";import"./index-DRehDCt-.js";import"./Alert-CECfQB7F.js";import"./createSvgIcon-p3gD-EgA.js";import"./Close-BRRiDgn2.js";import"./AlertTitle-BadG8ZQC.js";import"./Dialog-DDqFqf3E.js";import"./DialogContext-DfSGJg5l.js";import"./Fade-2k1WGtTS.js";import"./Modal-CXoXruWX.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BNc1S_Ht.js";import"./DialogTitle-Bl-6j9zn.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BGBfkAcp.js";import"./DialogContent-Bgy0q9Ac.js";import"./DialogContentText-B--YzbJj.js";import"./index-BiBDMnSv.js";import"./Img-Dm04e0S_.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-COjZxlTE.js";import"./LinearProgress-CAQWdbCq.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
