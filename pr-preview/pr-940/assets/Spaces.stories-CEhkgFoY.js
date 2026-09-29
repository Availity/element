import{j as p}from"./iframe-CGrCKeT2.js";import{P as e}from"./index-Dh2sAMRB.js";import{T as o}from"./index-CZXljNWA.js";import{S as n}from"./index-DolDcqHq.js";import{Q as d}from"./suspense-BFby4bIf.js";import{S as m,u as h,a as S}from"./Spaces-BDVFj-9C.js";import{Q as y}from"./queryClient-ge80ZfFI.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DOXN6uva.js";import"./useTheme-4bOKZyvR.js";import"./styled-CotFv3Dr.js";import"./memoTheme-BqDMrUbz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Bir8nP2f.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Bi1Xr4Gf.js";import"./Grid-CmaXE-H9.js";import"./isMuiElement-RR7Ftbg4.js";import"./styled-BjWfuHlM.js";import"./Stack-_oDMgEvk.js";import"./Container-CUb5VPVp.js";import"./Img-BGW6dBFE.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-C_5JhCMK.js";import"./index-Bjf7gb31.js";import"./___vite-browser-external_commonjs-proxy-DI21XlTg.js";import"./index-CY8VLdQ2.js";import"./index-MwyoO2ST.js";import"./index-DmvP-mEg.js";import"./IconButton-dlpyeDck.js";import"./ButtonBase-B5P9vk86.js";import"./useTimeout-DnCoFfSV.js";import"./TransitionGroupContext-BBGMeol_.js";import"./useForkRef-BEtKOrY4.js";import"./useEventCallback-y36uneSW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BKyEW5Pk.js";import"./Tooltip-BDnPRKbu.js";import"./useSlot-BZVhLUF7.js";import"./mergeSlotProps-Dfpv_trn.js";import"./useControlled-DCMdc5dP.js";import"./getReactElementRef-BNGPoDkJ.js";import"./Portal-BYKyeVye.js";import"./utils-BkMf-uLY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DOUkeG0B.js";import"./Button-BHZdRtrg.js";import"./index-DKQlCnEq.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DmVwQJs6.js";import"./index-DoXS8KdM.js";import"./Alert-Cchxu3Bh.js";import"./createSvgIcon-DSkk_8Bd.js";import"./Close-WOGKBFf9.js";import"./AlertTitle-CJlOgTz3.js";import"./Dialog-Cm5GC53h.js";import"./DialogContext-Ch4MXCin.js";import"./Modal-DaH7TrRl.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CUGDXrbh.js";import"./Fade-CllAQl-L.js";import"./DialogTitle-BTyB0AKR.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CY45JiAL.js";import"./DialogContent-Bre7nPq6.js";import"./DialogContentText-le5Mmn3q.js";import"./index-CrcoPoGw.js";import"./index-CAYw5dFo.js";import"./LinearProgress-jx2N2njl.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
