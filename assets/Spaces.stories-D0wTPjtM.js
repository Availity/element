import{j as p}from"./iframe-D1NCSytB.js";import{P as e}from"./index-C0KAT1Ip.js";import{T as o}from"./index-B2ZGVgz2.js";import{S as n}from"./index-D9eAXuXP.js";import{S as m,u as d,a as h}from"./Spaces-BnkpPPf9.js";import{Q as S}from"./suspense-D4yyJmkV.js";import{Q as y}from"./queryClient-mDycuygU.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CBE46eXP.js";import"./useTheme-D3cMIjr1.js";import"./styled-BbCZmQsA.js";import"./memoTheme-DOGX_B28.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BWjvtf8i.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Dk8U9NOX.js";import"./Grid-CLUwk8Cn.js";import"./styled-DdVDvF5f.js";import"./isMuiElement-DU2Yi2t-.js";import"./Stack-BQ77EqZr.js";import"./Container-CFpNJvgv.js";import"./index-DMXoL4NT.js";import"./index-CDT2XznO.js";import"./___vite-browser-external_commonjs-proxy-B_7I49U2.js";import"./index-D_jJce5O.js";import"./_toKey-jcx_TBNt.js";import"./index-DsW7UOaP.js";import"./index-BPnk7Q5j.js";import"./Tooltip-C79jCpae.js";import"./useSlot-D1NHtjkn.js";import"./mergeSlotProps-DlDajhlR.js";import"./useForkRef-BpGj9yaf.js";import"./useTimeout-Bh_i1JKi.js";import"./useControlled-Czfb1u9c.js";import"./useEventCallback-C8LcGziW.js";import"./getReactElementRef-D8NIfLKv.js";import"./Portal-DSDwhvGd.js";import"./utils-DI3cRngQ.js";import"./TransitionGroupContext-BkHkrwff.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-WTXiNqL0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cqago1eB.js";import"./ButtonBase-BAUCY_Oi.js";import"./CircularProgress-DKmuW22e.js";import"./Button-Dci9Exp7.js";import"./index-BYdlpT-l.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B4wc5_NU.js";import"./index-BHKKiktW.js";import"./Alert-CIQx55o5.js";import"./createSvgIcon-BJL25Yge.js";import"./Close-BqXB_R2P.js";import"./AlertTitle-C19raiIS.js";import"./Dialog-xYq8PwjX.js";import"./DialogContext-C1H9TJ3R.js";import"./Fade-D-LTijLB.js";import"./Modal-gZmGceMQ.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CXhAj7P7.js";import"./DialogTitle-Bc45Jt8U.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-D5fn94OY.js";import"./DialogContent-B2jQIfs6.js";import"./DialogContentText-CJgdtCcv.js";import"./index-BiBDMnSv.js";import"./Img-DMgyYjAA.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-ab7iLR4C.js";import"./LinearProgress-BNVMueFl.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
