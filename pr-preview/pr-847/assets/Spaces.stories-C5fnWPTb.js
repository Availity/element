import{j as p}from"./iframe-B9UmYm9a.js";import{P as t}from"./index-CeHyRYtL.js";import{T as i}from"./index-BLWdvMhu.js";import{S}from"./index-D7gUouFh.js";import{S as d,u as y,a as l}from"./Spaces-BR0mi7Bg.js";import{Q as u}from"./suspense-icQA5aLp.js";import{Q as x}from"./queryClient-B_Gy3slJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Cv6JMR6s.js";import"./useTheme-T4vxBpQ_.js";import"./styled-DoXLytZI.js";import"./memoTheme-D_NWO3Sf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BTbXiqY0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Bn4lUdip.js";import"./Grid-uZx4aDYj.js";import"./styled-CJz0EzFO.js";import"./isMuiElement-Cw-OmkyD.js";import"./Stack-DzpHRCHq.js";import"./Container-B2IKB7A7.js";import"./index--5WVHpke.js";import"./index-DuamcORg.js";import"./___vite-browser-external_commonjs-proxy-By73sLVP.js";import"./index-CMETJfmn.js";import"./_toKey-RoSGLSoY.js";import"./index-D3wSmSkC.js";import"./index--sXbh2PD.js";import"./Tooltip-Cq5UdYzB.js";import"./useSlot-CR5yVO5D.js";import"./mergeSlotProps-BiSAcbtH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CxMGEvhU.js";import"./useTimeout-BY4Ptw2I.js";import"./useControlled-CNkUV8JJ.js";import"./useEventCallback-DHGbg9uZ.js";import"./getReactElementRef-BfoHU7AI.js";import"./Portal-QZjT-NjO.js";import"./utils-eGNVq-HS.js";import"./TransitionGroupContext-DbiiX3No.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C_80d6ZX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BJqVFicY.js";import"./ButtonBase-DqL2pmKa.js";import"./CircularProgress-DuOgkEjt.js";import"./Button-Bc3m4P2S.js";import"./index-YD2oNNLd.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-ML3dO570.js";import"./index-BahHlmEA.js";import"./Alert-C2l1OX19.js";import"./createSvgIcon-DD78qtxD.js";import"./Close-DkQWK730.js";import"./AlertTitle-BV1OME0s.js";import"./Dialog-DuRV576j.js";import"./DialogContext-oG_H_1pF.js";import"./Fade-BMTciNwC.js";import"./Modal-BuRfNVHb.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BIzo1FrP.js";import"./DialogTitle-DCvEZu87.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BJ3aankF.js";import"./DialogContent-BVt3M_8l.js";import"./DialogContentText-KVNwEK_k.js";import"./index-DS1ZdVNz.js";import"./Img-ZBB7qneN.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DDvk0hSL.js";import"./LinearProgress-JgDYYDtK.js";import"./index-DtspqnQl.js";import"./index-D6VgNj1X.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
