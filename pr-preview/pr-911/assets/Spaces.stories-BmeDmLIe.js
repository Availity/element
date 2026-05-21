import{j as p}from"./iframe-BP_6obq-.js";import{P as e}from"./index-BcQUJw-W.js";import{T as o}from"./index-EoJdXtZk.js";import{S as n}from"./index-Cyg8Zoy-.js";import{S as m,u as d,a as h}from"./Spaces-CD737gIW.js";import{Q as S}from"./suspense-BlUycdrQ.js";import{Q as y}from"./queryClient-BDBvpSyb.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-00-tiWk7.js";import"./useTheme-DbBiTE4S.js";import"./styled-tyPDC8H3.js";import"./memoTheme-BSboZUOu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-xBYBi8Ml.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CrUjzboj.js";import"./Grid-DuXHbjPr.js";import"./isMuiElement-Dpdrf9tp.js";import"./styled-VCZNIqfv.js";import"./Stack-CMlfGjCP.js";import"./Container-CMlBc6YM.js";import"./index-2TcWn4Qj.js";import"./index-VEgrAlvv.js";import"./___vite-browser-external_commonjs-proxy-Dja11nmy.js";import"./index-BZaeAX2W.js";import"./_toKey-BxRmHzy4.js";import"./index-DT63CXwd.js";import"./index-D0xPWEah.js";import"./Tooltip-DfZ6DZ9O.js";import"./useSlot-CmZQLFXT.js";import"./mergeSlotProps-8ro87pMD.js";import"./useForkRef-DOgu7oQ4.js";import"./useTimeout-CSJtp0Y8.js";import"./useControlled-DHSx-hEg.js";import"./useEventCallback-BD_ANQY0.js";import"./getReactElementRef-CcD8R4QN.js";import"./Portal-XICOo1di.js";import"./utils-fRJUoSLW.js";import"./TransitionGroupContext-B3nL2djk.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CRXG0rmu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsvJwMgL.js";import"./ButtonBase-8n2sjZ5K.js";import"./CircularProgress-DALVNgNR.js";import"./Button-DKYxn39A.js";import"./index-CnReW6m-.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CnHEyztA.js";import"./index-DZapx897.js";import"./Alert-MiF5rJLW.js";import"./createSvgIcon-C8pu6ftq.js";import"./Close-DIHV7Ym5.js";import"./AlertTitle-CeF6QA6A.js";import"./Dialog-D69iNS4G.js";import"./DialogContext-DjaQV79g.js";import"./Fade-C9R9e0Yq.js";import"./Modal-BoTJ9TiT.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BmoQCgqO.js";import"./DialogTitle-Dx5-Md45.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D-VGMyY-.js";import"./DialogContent-DApsNw2G.js";import"./DialogContentText-CyC1xr86.js";import"./index-BiBDMnSv.js";import"./Img-DC3MK2eZ.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-AIPy6WZZ.js";import"./LinearProgress-QmETA-SH.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
