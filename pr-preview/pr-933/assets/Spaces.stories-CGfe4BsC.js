import{j as p}from"./iframe-CwO-jD2r.js";import{P as e}from"./index-BC-YgIAb.js";import{T as o}from"./index-BCN7JX9J.js";import{S as n}from"./index-DDnCuFzs.js";import{Q as d}from"./suspense-8vFPQq3p.js";import{S as m,u as h,a as S}from"./Spaces-CWWRjeB6.js";import{Q as y}from"./queryClient-CU66RaB-.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-4GVPiycN.js";import"./useTheme-COk7r_Ee.js";import"./styled-oLigdm2H.js";import"./memoTheme-BFKi1h0L.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BF7hwO0t.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-aCkC6O_c.js";import"./Grid-BLIKAx1P.js";import"./isMuiElement-DiCrCwGT.js";import"./styled-CUc8450O.js";import"./Stack-CHmf-yYC.js";import"./Container-BPLOD5On.js";import"./Img-CTAEzlkk.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BtS5UmTE.js";import"./index-Dfh3fbTs.js";import"./___vite-browser-external_commonjs-proxy-C7rC1-Av.js";import"./index-BDHUarCl.js";import"./index-kIxRVWNB.js";import"./index-CNETp13n.js";import"./IconButton-6AH5JngU.js";import"./ButtonBase-CG4pUtur.js";import"./useTimeout-fSFkMMHB.js";import"./TransitionGroupContext-B7p21pCQ.js";import"./useForkRef-C_Onx5Be.js";import"./useEventCallback-DAOE043T.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BJ26xdy5.js";import"./Tooltip-DWOWlEqB.js";import"./useSlot-H46dGhkF.js";import"./mergeSlotProps-BwWI2lDY.js";import"./useControlled-D7MGwIra.js";import"./getReactElementRef-BccMI9lA.js";import"./Portal-Bdc5oVT9.js";import"./utils-4BcLErhI.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CxdF0UKw.js";import"./Button-BLrfDWuG.js";import"./index-BN6UcWAE.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVo5jYj3.js";import"./index-c61HzsMl.js";import"./Alert-B9aiSi43.js";import"./createSvgIcon-s4imERVo.js";import"./Close-BM0Z-puH.js";import"./AlertTitle-C-5dVsgw.js";import"./Dialog-vSo2Z4Db.js";import"./DialogContext-DSdZJ3sf.js";import"./Modal-pR2rfcmc.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CkQmcNu2.js";import"./Fade-BMJzwZSG.js";import"./DialogTitle-xnfvaoJp.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DWwXQFAc.js";import"./DialogContent-DUmtLfG_.js";import"./DialogContentText-Cc8KF-w2.js";import"./index-CrcoPoGw.js";import"./index-DWBXr9hl.js";import"./LinearProgress-BvLheJVI.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ap=["_Spaces"];export{i as _Spaces,Ap as __namedExportsOrder,zp as default};
