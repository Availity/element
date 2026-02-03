import{j as p}from"./iframe-CsWHXpAl.js";import{P as e}from"./index-ByiPY-QU.js";import{T as o}from"./index-DMiR4p_f.js";import{S as n}from"./index-D6jmlPGV.js";import{S as m,u as d,a as h}from"./Spaces-CgMMTJqY.js";import{Q as S}from"./suspense-BLW9dQ9T.js";import{Q as y}from"./queryClient-spsZidhA.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CRnRfyjj.js";import"./useTheme-p1ELRF_q.js";import"./styled-7ngSg1XE.js";import"./memoTheme-D1WvXAYX.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BPpHVaiZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D0gDoyzH.js";import"./Grid-ht3QhPkQ.js";import"./styled-DAuJ6HDN.js";import"./isMuiElement-Bn1OwKtz.js";import"./Stack-Cd9e6_04.js";import"./Container-B-ZE-anm.js";import"./index-Cnu6GDEx.js";import"./index-BJYXLaUR.js";import"./___vite-browser-external_commonjs-proxy-xfPAmR0C.js";import"./index-BMtSefDJ.js";import"./_toKey-kk3qpMzA.js";import"./index-DCZUuPb0.js";import"./index-vavqp1NI.js";import"./Tooltip-Bng6bCNf.js";import"./useSlot-C4woaFwW.js";import"./mergeSlotProps-BavqdjkP.js";import"./useForkRef-C-HgPgYg.js";import"./useTimeout-MBLSaU9x.js";import"./useControlled-D3FoPl0A.js";import"./useEventCallback-ByFiieHy.js";import"./getReactElementRef-U9GKYTTT.js";import"./Portal-BnhBoGVi.js";import"./utils-DGzkDCaD.js";import"./TransitionGroupContext-C2wcbRoz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DAB-O9r_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BElkJFHg.js";import"./ButtonBase-Bidr6pNA.js";import"./CircularProgress-DpaflDra.js";import"./Button-CA2GH-94.js";import"./index-CAQ8YrHX.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-rO9Zrjko.js";import"./index-BUmZlOXZ.js";import"./Alert-BkIe32FZ.js";import"./createSvgIcon-vjDmBDLj.js";import"./Close-CzyEhyMz.js";import"./AlertTitle-BM5NhcdN.js";import"./Dialog-CubxAgp3.js";import"./DialogContext-BBlWOAcW.js";import"./Fade-CyNrIrid.js";import"./Modal-xpXfJVrF.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DunYOkpv.js";import"./DialogTitle-S1y9YimD.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BHQcb8-O.js";import"./DialogContent-WwCSZLln.js";import"./DialogContentText-CeL5K2g5.js";import"./index-BiBDMnSv.js";import"./Img-BDMt7bN5.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Bzg6pxmg.js";import"./LinearProgress-V2cpLIZD.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
