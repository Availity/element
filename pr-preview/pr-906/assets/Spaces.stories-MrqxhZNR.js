import{j as p}from"./iframe-B3XSEB2p.js";import{P as e}from"./index-CtT1n6Ib.js";import{T as o}from"./index-CeHXh4ln.js";import{S as n}from"./index-CTZEFlon.js";import{S as m,u as d,a as h}from"./Spaces-CkC9d30B.js";import{Q as S}from"./suspense-B_pfBgwF.js";import{Q as y}from"./queryClient-CCbTK8wq.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CGKnoNLB.js";import"./useTheme-Gs2b_SoM.js";import"./styled-BKJUYYzH.js";import"./memoTheme-zFBVIAxJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BStgzFan.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CT-z8ogS.js";import"./Grid-DWbHQ1o7.js";import"./isMuiElement-ZiQktaUF.js";import"./styled-lVb8KQEy.js";import"./Stack-Bkt6nYoM.js";import"./Container-Dg4ygdO4.js";import"./index-DaHy4RTs.js";import"./index-LLOc9r_p.js";import"./___vite-browser-external_commonjs-proxy-D_QPNMAp.js";import"./index-C_mhbxUc.js";import"./_toKey-oOlzM8_d.js";import"./index-BQ8uUfOO.js";import"./index-BDo5zO46.js";import"./Tooltip-CpMdDorm.js";import"./useSlot-fXCwMtx-.js";import"./mergeSlotProps-BUA7aXyy.js";import"./useForkRef-BFyiqj42.js";import"./useTimeout-DjubHrAv.js";import"./useControlled-BnIqSLBp.js";import"./useEventCallback-Dfz_oY_W.js";import"./getReactElementRef-m4HA6qqR.js";import"./Portal-DeOXpMrf.js";import"./utils-CMJMNufc.js";import"./TransitionGroupContext-bUHI8Opa.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BnXi_Ts5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ML2PMq2-.js";import"./ButtonBase-CV7JyDx9.js";import"./CircularProgress-C6blXItT.js";import"./Button-Cx7ia3Qx.js";import"./index-CAS_Ehni.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BW4di25g.js";import"./index-BIN8VLeI.js";import"./Alert-DSZ5ewUo.js";import"./createSvgIcon-DXiAxkxb.js";import"./Close-C9YG2uHw.js";import"./AlertTitle-B8FxlLEb.js";import"./Dialog-BhLpldBa.js";import"./DialogContext-Cwn_rBc9.js";import"./Fade-BhRChvyZ.js";import"./Modal-3VYdLW2j.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DfrvDDlR.js";import"./DialogTitle-Rh7rwbTW.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BerriTgt.js";import"./DialogContent-D7vOibTT.js";import"./DialogContentText-oYk0MkVX.js";import"./index-BiBDMnSv.js";import"./Img-BucTLMgW.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-5LN390lV.js";import"./LinearProgress-Bji0nhrT.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
