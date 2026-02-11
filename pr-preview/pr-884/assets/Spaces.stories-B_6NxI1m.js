import{j as p}from"./iframe-BVv6e2Np.js";import{P as e}from"./index-Bq9EOnKE.js";import{T as o}from"./index-D3ium1T7.js";import{S as n}from"./index-BqnVqtTN.js";import{S as m,u as d,a as h}from"./Spaces-wp7B6Qm6.js";import{Q as S}from"./suspense-Bi0zquSB.js";import{Q as y}from"./queryClient-DA2NZ8zG.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CdGIIeGD.js";import"./useTheme-DDxdviwK.js";import"./styled-Bn_uYMrA.js";import"./memoTheme-PshU1uu8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DXGXRPqa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DerM4oMw.js";import"./Grid-Bt9ySBei.js";import"./styled-CBIa6Uon.js";import"./isMuiElement-Cd1iR6Ah.js";import"./Stack-C99HnkMn.js";import"./Container-BDZyOzn-.js";import"./index-B5sPRumM.js";import"./index-CzR1A3M5.js";import"./___vite-browser-external_commonjs-proxy-BF3gtoG_.js";import"./index-CFz_hkBg.js";import"./_toKey-C0b-dJUL.js";import"./index-NbpC0k5P.js";import"./index-CAgTxRUA.js";import"./Tooltip-DzBLv92b.js";import"./useSlot-Dio4nhmD.js";import"./mergeSlotProps-C-9V1pWD.js";import"./useForkRef-QN_ofJ4G.js";import"./useTimeout-VBRAECgQ.js";import"./useControlled-D2of93L0.js";import"./useEventCallback-emf-njXD.js";import"./getReactElementRef-Dy4ZaQ26.js";import"./Portal-BwoQ5t2b.js";import"./utils-D_B0tNMS.js";import"./TransitionGroupContext-CL5aD017.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DYhjeFex.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcGJMyaC.js";import"./ButtonBase-BmS5gOfS.js";import"./CircularProgress-Pj_uAnf5.js";import"./Button-DHfmf7R6.js";import"./index-B4G_w09r.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DdboHVfF.js";import"./index-OIGrzirq.js";import"./Alert-BnVnQFM-.js";import"./createSvgIcon-qSa5VTtT.js";import"./Close-C8sNO7mM.js";import"./AlertTitle-CQDjk5H3.js";import"./Dialog-CjKD0HJo.js";import"./DialogContext-CIG1XT1u.js";import"./Fade-Y8hFLq3H.js";import"./Modal-CAkb2EYM.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-C4f2cZgH.js";import"./DialogTitle-Dkz_k-SP.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-v3YW90RE.js";import"./DialogContent-Dv7b_wt0.js";import"./DialogContentText-CZGbxbjp.js";import"./index-BiBDMnSv.js";import"./Img-R1VrxB3-.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BNiKnF1c.js";import"./LinearProgress-Cj4eRt57.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
