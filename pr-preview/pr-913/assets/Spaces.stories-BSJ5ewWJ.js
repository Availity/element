import{j as p}from"./iframe-CoG_eD6W.js";import{P as e}from"./index-DYh46aeX.js";import{T as o}from"./index-8MVp_n_A.js";import{S as n}from"./index-BDyGITPx.js";import{S as m,u as d,a as h}from"./Spaces-C_iK0_Dp.js";import{Q as S}from"./suspense-D0uJ2-qL.js";import{Q as y}from"./queryClient-EXAxgZsw.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-C7UtGvQD.js";import"./useTheme-DYBUFgS8.js";import"./styled-CrcATWO9.js";import"./memoTheme-CN1XLapj.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-ByO5UaW_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-B04c7Rsy.js";import"./Grid-BeBOjXU7.js";import"./isMuiElement-BhB00eMX.js";import"./styled-BeasdvCJ.js";import"./Stack-BofL0Z-3.js";import"./Container-COr2r_OP.js";import"./index-NWAjQ8GF.js";import"./index-BxX5aEWm.js";import"./___vite-browser-external_commonjs-proxy-CJzqnXTj.js";import"./index-C1BCLP02.js";import"./_toKey-DHzXaBvN.js";import"./index-CD4IpSUo.js";import"./index-BY7cwWhX.js";import"./Tooltip-oLaJghdR.js";import"./useSlot-l_cpBHym.js";import"./mergeSlotProps-CuYtKo7e.js";import"./useForkRef-9zYUNwSQ.js";import"./useTimeout-q1GWP7GL.js";import"./useControlled-BVDl1GQq.js";import"./useEventCallback-zH8r8cS3.js";import"./getReactElementRef-n9HqNesf.js";import"./Portal-7VZcAwyN.js";import"./utils-D_Ss1Qw4.js";import"./TransitionGroupContext-DiP32wUd.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CIYBUvT1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsWpehFA.js";import"./ButtonBase-xOGqtgga.js";import"./CircularProgress-tDS4AUw-.js";import"./Button-DJVoIG0F.js";import"./index-BiwFPdxj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CCNV5-S3.js";import"./index-CnahpI1L.js";import"./Alert-BcoFmn4Z.js";import"./createSvgIcon-BZPSTfMo.js";import"./Close-DHtkNkYL.js";import"./AlertTitle-ByU3qvOK.js";import"./Dialog-Bblt7VpB.js";import"./DialogContext-SG7JEPZ_.js";import"./Fade-54RPVvaS.js";import"./Modal-BuuBhc14.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CNiEEGxX.js";import"./DialogTitle-CZF56EtP.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D6VTp4dC.js";import"./DialogContent-D6FfNAlx.js";import"./DialogContentText-CMlHa4x8.js";import"./index-BiBDMnSv.js";import"./Img-DXaUtqVv.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-6UnuKste.js";import"./LinearProgress-DkR8VPtg.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
