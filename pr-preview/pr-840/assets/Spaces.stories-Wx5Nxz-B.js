import{j as p}from"./iframe-B-IDRs1c.js";import{P as t}from"./index-c9waF8rx.js";import{T as i}from"./index-DQtlh_Xd.js";import{S}from"./index-y3bL_tnv.js";import{S as d,u as y,a as l}from"./Spaces-BhW29xhq.js";import{Q as u}from"./suspense-4vLyYAOu.js";import{Q as x}from"./queryClient-eTqVL9Wh.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BIo3wRRL.js";import"./useTheme-BCGo3_gR.js";import"./styled-7JhYMRam.js";import"./memoTheme-CE8Ve8p3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-qhH8cReh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D7mgUtfD.js";import"./Grid-CzlSEqG7.js";import"./styled-BXVIoFq6.js";import"./isMuiElement-Cvcy1-u-.js";import"./Stack-BQlzlOuL.js";import"./Container-DiLdPN9q.js";import"./index-CWYX1l8J.js";import"./index-BXMplU3R.js";import"./___vite-browser-external_commonjs-proxy-N8USPokE.js";import"./index-DuRQpI0H.js";import"./_toKey-CS9IHmAM.js";import"./index-sfzg4Jab.js";import"./index-CT2WTVvP.js";import"./Tooltip-CSSVlh_J.js";import"./useSlot-BDZruxXA.js";import"./mergeSlotProps-C8D8DcHH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ClLnv_Rm.js";import"./useTimeout-B5Lb3nSx.js";import"./useControlled-c6loq-MY.js";import"./useEventCallback-cI9q2pBc.js";import"./getReactElementRef-DTxB74xF.js";import"./Portal-Br3wST_n.js";import"./utils-BDyqiFkI.js";import"./TransitionGroupContext-FoUS5PCq.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CfOviytx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BX_62obP.js";import"./ButtonBase-BRBh8179.js";import"./CircularProgress-DIITlzvm.js";import"./Button-BTxgxpDX.js";import"./index-B8qzEHL-.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Dnen4Kai.js";import"./index-CA2HI41I.js";import"./Alert-D_crpNQm.js";import"./createSvgIcon-D0KAL-_d.js";import"./Close-B1OoH-GK.js";import"./AlertTitle-BdbnuSNv.js";import"./Dialog-e5pJuLar.js";import"./DialogContext-DY-V6ZkP.js";import"./Fade-D1BipWHC.js";import"./Modal-BzHYDMo_.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BCtdC_Sn.js";import"./DialogTitle-C58HluRg.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DAFQsS9q.js";import"./DialogContent-gbS18C5T.js";import"./DialogContentText-Jip2Kx1e.js";import"./index-DJKl12U0.js";import"./Img-B17gohLO.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CbMNB1h0.js";import"./LinearProgress-2ljRogtQ.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Hp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
