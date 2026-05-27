import{j as p}from"./iframe-BeW-ShBa.js";import{P as e}from"./index-BFBORQJF.js";import{T as o}from"./index-BSsohYFg.js";import{S as n}from"./index-CcUAtZIu.js";import{S as m,u as d,a as h}from"./Spaces-DySpAJuQ.js";import{Q as S}from"./suspense-CNr0Ed_c.js";import{Q as y}from"./queryClient-C_cEyc84.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-C7ldQuEP.js";import"./useTheme-BPzLpLU0.js";import"./styled-E0CmYcz3.js";import"./memoTheme-Dx1_-nEN.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-C3HO5zSq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BJjonoMC.js";import"./Grid-D-BmDj5R.js";import"./isMuiElement-Gc_4vFE3.js";import"./styled-C6cy5gNq.js";import"./Stack-CkM3UncO.js";import"./Container-CuzKFum9.js";import"./index-DLnvtUdw.js";import"./index-DMVu9gap.js";import"./___vite-browser-external_commonjs-proxy-CtUXk23B.js";import"./index-BgBxCtiF.js";import"./_toKey-DMT_zmqL.js";import"./index-wXGScgDQ.js";import"./index-B-GrkHTI.js";import"./Tooltip-UPiMyfZ8.js";import"./useSlot-BhPPWLJz.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useForkRef-Bgl7H4kw.js";import"./useTimeout-Da9tNn-P.js";import"./useControlled-BpXRfpPn.js";import"./useEventCallback-6Uyg9fGx.js";import"./getReactElementRef-BjNvvstO.js";import"./Portal-BPMEmQxN.js";import"./utils-CvRtdEc9.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ghuGdCEB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BvJM40or.js";import"./ButtonBase-Z8KwVcKF.js";import"./CircularProgress-CiOpdtGa.js";import"./Button-BwdPpmvm.js";import"./index-BKqV-UiY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C3Z68du4.js";import"./index-Cz8E_2ub.js";import"./Alert-CPjPYQHe.js";import"./createSvgIcon-BpCrnFel.js";import"./Close-aKFnXmik.js";import"./AlertTitle-Cdoj8T_O.js";import"./Dialog-CNBj3wqQ.js";import"./DialogContext-Cwmuh-V0.js";import"./Fade-D8bMgo8d.js";import"./Modal-CnexL54u.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B02_d13g.js";import"./DialogTitle-CrgjoU5h.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D69a1vdv.js";import"./DialogContent-gExuiCeG.js";import"./DialogContentText-Bxd9qfm8.js";import"./index-BiBDMnSv.js";import"./Img-DWlX2lLy.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Bk6hZc5U.js";import"./LinearProgress-CJJEK4uI.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
