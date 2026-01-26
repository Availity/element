import{j as p}from"./iframe-B4F0UUz5.js";import{P as e}from"./index-hrLWzoqK.js";import{T as o}from"./index-DusVt_et.js";import{S as n}from"./index-DgFyk_v-.js";import{S as m,u as d,a as h}from"./Spaces-gFFrflFk.js";import{Q as S}from"./suspense-ghrNwej-.js";import{Q as y}from"./queryClient-Cp40Drbj.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BhZ60vFE.js";import"./useTheme-DkdpmsKL.js";import"./styled-bGWttyC6.js";import"./memoTheme-BKk2saex.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-xEPHi5Wz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BvO6GINh.js";import"./Grid-JVi79X3C.js";import"./styled-C47D77LO.js";import"./isMuiElement-DG4Oj80J.js";import"./Stack-B6PQK5zz.js";import"./Container-C5kZIMq8.js";import"./index-BCc8bUM0.js";import"./index-B3FYqRlo.js";import"./___vite-browser-external_commonjs-proxy-N0iEgd-k.js";import"./index-haxG-9NQ.js";import"./_toKey-CEZXOjUU.js";import"./index-DoURqQtE.js";import"./index-CJ27nWYv.js";import"./Tooltip-DyWobFm2.js";import"./useSlot-oo8TP9Im.js";import"./mergeSlotProps-DT_q42Lx.js";import"./useForkRef-CjLG5x_H.js";import"./useTimeout-BonZNUeG.js";import"./useControlled-BRFwdesD.js";import"./useEventCallback-BqH7MYZ-.js";import"./getReactElementRef-CApeICjD.js";import"./Portal-D8A5UmkR.js";import"./utils-BiHtS7y3.js";import"./TransitionGroupContext-fwmkieDY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C2ZAZv5Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CqGgnlnL.js";import"./ButtonBase-DqWoj7oR.js";import"./CircularProgress-PmMulKWi.js";import"./Button-BurqBlBC.js";import"./index-Cr9n8cqt.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DM1sZoZa.js";import"./index-Z4J8mmpj.js";import"./Alert-sCZbjfQa.js";import"./createSvgIcon-BXxeVrmm.js";import"./Close-9PuYUA0s.js";import"./AlertTitle-CPCHHgUG.js";import"./Dialog-63w2FhCf.js";import"./DialogContext--6IK8nww.js";import"./Fade-C5UM2BtN.js";import"./Modal-BBtCbIw6.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D8y383n3.js";import"./DialogTitle-SnGTfErp.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DpFKd10e.js";import"./DialogContent-DFU6tXA1.js";import"./DialogContentText-D1CRtCYv.js";import"./index-BiBDMnSv.js";import"./Img-uLjaaqD4.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-20AiXQ2z.js";import"./LinearProgress-Decxjqry.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
