import{j as p}from"./iframe-CLut6yOe.js";import{P as e}from"./index-B1V0ahmp.js";import{T as o}from"./index-DmhD3hPK.js";import{S as n}from"./index-BGYc3edq.js";import{Q as d}from"./suspense-C7yO8Vez.js";import{S as m,u as h,a as S}from"./Spaces-dntD7iV9.js";import{Q as y}from"./queryClient-D45awzA4.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CMcH6Gk3.js";import"./useTheme-uzqIZvgA.js";import"./styled-B56iE4qf.js";import"./memoTheme-BCZ6py50.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BLWoaJn_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-KcVtg1pO.js";import"./Grid-CiYph9Ji.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-qS0Yrwc6.js";import"./Stack-C0CMzs2G.js";import"./Container-DKVcPtkF.js";import"./Img-CWXclcVI.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DFAe1byy.js";import"./index-BcLWcqBp.js";import"./___vite-browser-external_commonjs-proxy-6v6UwKt5.js";import"./index-CY8VLdQ2.js";import"./index-NLzg5-rA.js";import"./index-DNgDR8tQ.js";import"./IconButton-MKfAwX3T.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useForkRef-CW7nwTzV.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useControlled-BMhEC-vi.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./index-MFss3fzl.js";import"./Alert-CgCM6ukP.js";import"./createSvgIcon-BcCXBLY5.js";import"./Close-vGYRfV1b.js";import"./AlertTitle-BSAGxnSy.js";import"./Dialog-C1aDumIy.js";import"./DialogContext-D1vb-au3.js";import"./Modal-RUjatzFH.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DrT6KjAn.js";import"./Fade-CkZ97Hml.js";import"./DialogTitle-DwONLQep.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Cu2BUgLb.js";import"./DialogContent-DHq3RCw-.js";import"./DialogContentText-BI44ozpq.js";import"./index-MVgG_W0q.js";import"./index-B78gN60S.js";import"./LinearProgress-1INq_19b.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
