import{j as p}from"./iframe-XJ8rUARQ.js";import{P as t}from"./index-CwE50H-3.js";import{T as i}from"./index-CMxAEhwf.js";import{S}from"./index-BiP5P7M1.js";import{S as d,u as y,a as l}from"./Spaces-D4sqb8DC.js";import{Q as u}from"./suspense-BKyLW9Hs.js";import{Q as x}from"./queryClient-BcfS7DiY.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BItyqzia.js";import"./useTheme-DdE3jScQ.js";import"./styled-DH1bohWY.js";import"./memoTheme-q27Lu1jJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DLCURa9h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-qW0uta-Y.js";import"./Grid-Dk4fwvMn.js";import"./styled-BwErFkk7.js";import"./isMuiElement-bpXde_gu.js";import"./Stack-DBw9MoVN.js";import"./Container-D0WZR6MW.js";import"./index-D0PoHtwb.js";import"./index-0JyjbUyi.js";import"./___vite-browser-external_commonjs-proxy-Bbvn4Lk3.js";import"./index-B_QiQ0h7.js";import"./_toKey-Bc2BYSdO.js";import"./index-gGF3l2ZA.js";import"./index-Bfg0IfXb.js";import"./Tooltip-CFosmsmO.js";import"./useSlot-BQnc1wiW.js";import"./mergeSlotProps-B1UYo6hf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k_WY5UDV.js";import"./useTimeout-CHPWgY-X.js";import"./useControlled-XnLwGYQ0.js";import"./useEventCallback-BDPMWXz1.js";import"./getReactElementRef-CA2jWjUI.js";import"./Portal-xufODOBH.js";import"./utils-Bu5_zceD.js";import"./TransitionGroupContext-BLsjMo91.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ClBThUbu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CSeSeZKT.js";import"./ButtonBase-CgzYzVmi.js";import"./CircularProgress-DHokMmGN.js";import"./Button-jNyCdmKh.js";import"./index-Bic9pcsq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-gs9ZPknn.js";import"./index-Bl9PxhG8.js";import"./Alert-CCB8Vw27.js";import"./createSvgIcon-CZFbIjHx.js";import"./Close-Dw_-z5X-.js";import"./AlertTitle-DK99yBB5.js";import"./Dialog-CWeI_h4f.js";import"./DialogContext-DEKMcDut.js";import"./Fade-7aiRsYlH.js";import"./Modal-mRbZ2Llg.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk5P0AXa.js";import"./DialogTitle-GxElz1_V.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BCqlAPWi.js";import"./DialogContent-CI8Yi5nE.js";import"./DialogContentText-BY5_vxKw.js";import"./index-DS1ZdVNz.js";import"./Img-B_k69234.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CMlwWoYU.js";import"./LinearProgress-CmXbic0K.js";import"./index-DxZmSA_X.js";import"./index--DMbptHO.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const Lp=["_Spaces"];export{s as _Spaces,Lp as __namedExportsOrder,Kp as default};
