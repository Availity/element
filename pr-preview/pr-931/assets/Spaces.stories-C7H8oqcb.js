import{j as p}from"./iframe-ujVaYq5z.js";import{P as e}from"./index-CGMJ1u06.js";import{T as o}from"./index-sKyEjHXt.js";import{S as n}from"./index-BOD_Negu.js";import{Q as d}from"./suspense-P5S2jk3Q.js";import{S as m,u as h,a as S}from"./Spaces-BjrU0wZe.js";import{Q as y}from"./queryClient-BtvMxgov.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-tJaxAljo.js";import"./useTheme-CRyXlIuJ.js";import"./styled-B-xCudEP.js";import"./memoTheme-CdGwTPP7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BNx6-4zj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Cl1E5OD4.js";import"./Grid-CvbP1FC1.js";import"./isMuiElement-rsUHqA_z.js";import"./styled-VPzH8ng9.js";import"./Stack-CQconrOZ.js";import"./Container-Bu0A8KYF.js";import"./Img-BjXsR5mE.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-uj7JhNjZ.js";import"./index-Cb4NnpQ-.js";import"./___vite-browser-external_commonjs-proxy-D7JR7UKq.js";import"./index-T5OSBaAP.js";import"./index-BpeGkuWQ.js";import"./index-612CGizF.js";import"./IconButton-MZkZlGxG.js";import"./ButtonBase-iPF5PiZW.js";import"./useTimeout-NHks1NG8.js";import"./TransitionGroupContext-4IQuvIV5.js";import"./useForkRef-DbBKzesF.js";import"./useEventCallback-Ckojbqp4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-see__pNb.js";import"./Tooltip-5f47SB-B.js";import"./useSlot-Bx_FYgWG.js";import"./mergeSlotProps-KSZa1rpd.js";import"./useControlled-BffgEsp1.js";import"./getReactElementRef-SADr8eSm.js";import"./Portal-C9J_EaUY.js";import"./utils-JnhbsWr6.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-zhwYHJyp.js";import"./Button-CHVL5mlZ.js";import"./index-CiMK-E4X.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DXUCDQE8.js";import"./index-CQ9RThvu.js";import"./Alert-DHgNxwkn.js";import"./createSvgIcon-C0cHZWti.js";import"./Close-yz4OtLj-.js";import"./AlertTitle-D9cEKxOs.js";import"./Dialog-BXt5oWnb.js";import"./DialogContext-jHdvaAd6.js";import"./Modal-3Eqv_0Wj.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DZyErt74.js";import"./Fade-D1fX65m0.js";import"./DialogTitle-NWkx3H6J.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BhCgZUn7.js";import"./DialogContent-hRggbpUG.js";import"./DialogContentText-CjLFdGKs.js";import"./index-CrcoPoGw.js";import"./index-nPypsVTZ.js";import"./LinearProgress-DPogqRit.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
