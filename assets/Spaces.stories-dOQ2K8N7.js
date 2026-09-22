import{j as p}from"./iframe-QKKiXGe2.js";import{P as e}from"./index-gR99Hw5I.js";import{T as o}from"./index-p3f1BLXv.js";import{S as n}from"./index-DmDUxSlw.js";import{Q as d}from"./suspense-BMwa7e0p.js";import{S as m,u as h,a as S}from"./Spaces-D74vu--j.js";import{Q as y}from"./queryClient-I0ddF5dx.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Bu_9L5He.js";import"./useTheme-CobnQWC-.js";import"./styled-CQy7SchW.js";import"./memoTheme-CZ6h3Fbh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-lfATY7Ds.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DS6KTGM7.js";import"./Grid-BWZayuEN.js";import"./isMuiElement-BPsBBR2z.js";import"./styled-CL_ITmKE.js";import"./Stack-vCt2ORwh.js";import"./Container-B58issDp.js";import"./Img-CZkMBwkC.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BnWYiYcP.js";import"./index-Dxvresu9.js";import"./___vite-browser-external_commonjs-proxy-DZSMJcrl.js";import"./index-CY8VLdQ2.js";import"./index-BD2P9vS3.js";import"./index-Dx_zFY-v.js";import"./IconButton-SAs9Di6J.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useForkRef-GKR9CYz5.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useControlled-BjERoBEC.js";import"./getReactElementRef-DpOU19qE.js";import"./Portal-JL7agaji.js";import"./utils-Dh1OrGpA.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CqRX49VI.js";import"./Button-B0ZWu58J.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D3LX6zM9.js";import"./index-DtY9Vnl1.js";import"./Alert-CirbgJPt.js";import"./createSvgIcon-Bm4mBUxC.js";import"./Close-DncTnFTq.js";import"./AlertTitle-CJkA97o7.js";import"./Dialog-DjAleQiR.js";import"./DialogContext-B_ho7zNW.js";import"./Modal-WlFR6ZW0.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Veo0zKS5.js";import"./Fade-BA-tR7QB.js";import"./DialogTitle-DNrW4E0D.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-C1RNk-YK.js";import"./DialogContent-HAUd5yMU.js";import"./DialogContentText-BuM_imhp.js";import"./index-CrcoPoGw.js";import"./index-B-Qliour.js";import"./LinearProgress-CuNHFh1l.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
