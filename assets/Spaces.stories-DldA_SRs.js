import{j as p}from"./iframe-DNfpO8Rq.js";import{P as e}from"./index-CwOgH-FA.js";import{T as o}from"./index-DGdNccvd.js";import{S as n}from"./index-ClTf_1DV.js";import{S as m,u as d,a as h}from"./Spaces-BO0BIPmy.js";import{Q as S}from"./suspense-BsuuM58j.js";import{Q as y}from"./queryClient-BNwAqZk-.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-nKCUTTwg.js";import"./useTheme-ChvAJH3t.js";import"./styled-Sw3aRR2D.js";import"./memoTheme-B-zz_BUk.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-bSWIGKwV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BG966X3W.js";import"./Grid-Cny3WeXp.js";import"./styled-u8_9JzuP.js";import"./isMuiElement-DJ9IZ7LZ.js";import"./Stack-BjTTdI7a.js";import"./Container-DLf6AVaH.js";import"./index-DHVDfHlf.js";import"./index-DZbn_7Ge.js";import"./___vite-browser-external_commonjs-proxy-Bw8sMFhz.js";import"./index-3w9JKd-b.js";import"./_toKey-BGyEGFDq.js";import"./index-Dg2rdSSP.js";import"./index-DN_R5H2f.js";import"./Tooltip-B3COV0pN.js";import"./useSlot-C-w8GshL.js";import"./mergeSlotProps-D2aT8sWY.js";import"./useForkRef-BEoZ4oWN.js";import"./useTimeout-DYZny39l.js";import"./useControlled-C3q2PKrI.js";import"./useEventCallback-Cty6Llwj.js";import"./getReactElementRef-CLhxke3N.js";import"./Portal-r7W1nGba.js";import"./utils-SDoQ5BJm.js";import"./TransitionGroupContext-BRbpeLOF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DDNYhqkV.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ERuDSHkW.js";import"./ButtonBase-CF5Cip_l.js";import"./CircularProgress-BsdZW6N9.js";import"./Button-UPAXXDe3.js";import"./index-BcmMVDWe.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-wfbC-1tw.js";import"./index-Dow9T6u7.js";import"./Alert-dTqUAIqs.js";import"./createSvgIcon-COwWNPU9.js";import"./Close-BiIjkOqf.js";import"./AlertTitle-DnOitr0R.js";import"./Dialog-DErmhzZv.js";import"./DialogContext-jinhTVDh.js";import"./Fade-D6YTpiOd.js";import"./Modal-3xVicKkn.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-ByspIO9w.js";import"./DialogTitle-B8PQdBz4.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DpcxDvg6.js";import"./DialogContent-CLI--ob_.js";import"./DialogContentText-Dc313PG-.js";import"./index-BiBDMnSv.js";import"./Img-D572SsHi.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-vmFmUduy.js";import"./LinearProgress-BiHooWbu.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
