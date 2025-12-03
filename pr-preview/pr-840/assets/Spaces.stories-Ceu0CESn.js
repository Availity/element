import{j as p}from"./iframe-L2WfQCwc.js";import{P as t}from"./index-BCLHydNF.js";import{T as i}from"./index-CQSGbpAT.js";import{S}from"./index-jgvtu0vB.js";import{S as d,u as y,a as l}from"./Spaces-BXH-lY38.js";import{Q as u}from"./suspense-DRSFrig5.js";import{Q as x}from"./queryClient-DRidgi_u.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BGi8TE6x.js";import"./useTheme-X_Qa8Dhp.js";import"./styled-BnTbP4z1.js";import"./memoTheme-DbVnS5NV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-caGtC1xp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CX0N0ctd.js";import"./Grid-B587iyjg.js";import"./styled-cdoMrI2T.js";import"./isMuiElement-SRHHNfX0.js";import"./Stack-BhxFzEo9.js";import"./Container-0A1GRnLt.js";import"./index-DZMUvtd-.js";import"./index-DcPcEC4T.js";import"./___vite-browser-external_commonjs-proxy-BGdEQkiI.js";import"./index-DuRQpI0H.js";import"./_toKey-DuWRNRhf.js";import"./index-CD_X4ieb.js";import"./index-Dn592ewG.js";import"./Tooltip-BMsQv-ox.js";import"./useSlot-DIvU7LRB.js";import"./mergeSlotProps-DHVHFrS4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3tscFOR.js";import"./useTimeout-CpICOsEx.js";import"./useControlled-BwGYVh51.js";import"./useEventCallback-CrctvfCx.js";import"./getReactElementRef-BWc-HwFQ.js";import"./Portal-B8Bei1bh.js";import"./utils-B5nq23mn.js";import"./TransitionGroupContext-yrVXEs3b.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B_VhlgSD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BicFpcJT.js";import"./ButtonBase-DCYuzXhR.js";import"./CircularProgress-B0WBDXJs.js";import"./Button-B1u8B3-l.js";import"./index-CSnqgGqw.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-B1vwUV3N.js";import"./index-DGAOk1xW.js";import"./Alert-XugeJBKQ.js";import"./createSvgIcon-CN7Wy4aL.js";import"./Close-DRgRl-Mx.js";import"./AlertTitle-B7qVohwS.js";import"./Dialog-BFN7L2K8.js";import"./DialogContext-nEs_5IUG.js";import"./Fade-CQS6r_wU.js";import"./Modal-D5Qdog5s.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D7wf_uck.js";import"./DialogTitle-nI_TLVqj.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-B5X4qc64.js";import"./DialogContent-tFAn31Or.js";import"./DialogContentText-Cmpunyd4.js";import"./index-DJKl12U0.js";import"./Img-RHLtra0e.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-IOGFPscM.js";import"./LinearProgress-Dw0bmpe_.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Hp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const Jp=["_Spaces"];export{s as _Spaces,Jp as __namedExportsOrder,Hp as default};
