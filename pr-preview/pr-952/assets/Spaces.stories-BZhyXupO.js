import{j as p}from"./iframe-DUa_E2nK.js";import{P as e}from"./index-BsAkYoDU.js";import{T as o}from"./index-C4ikLYbZ.js";import{S as n}from"./index-CpWANY3x.js";import{Q as d}from"./suspense-CED7JhWh.js";import{S as m,u as h,a as S}from"./Spaces-DJyfRP37.js";import{Q as y}from"./queryClient-BdYZzrgu.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BFFGqGxw.js";import"./useTheme-D2wrQY5U.js";import"./styled-D3Muh4M2.js";import"./memoTheme-Bo6NThYL.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BemmhR83.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BO8RQHnM.js";import"./Grid-BjkaeTm4.js";import"./isMuiElement-CAErNZ9l.js";import"./styled-DfLAYXD9.js";import"./Stack-BXnO2vhe.js";import"./Container-D09iA6_m.js";import"./Img-CftyI3m5.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-6lyooZqo.js";import"./index-CjPTx4A6.js";import"./___vite-browser-external_commonjs-proxy-CTXS35BP.js";import"./index-CY8VLdQ2.js";import"./index-K_jaQ7dr.js";import"./index-CS_NebII.js";import"./IconButton-BifEyGUq.js";import"./ButtonBase-Bug9d4_R.js";import"./useTimeout-CVWqITqM.js";import"./TransitionGroupContext-CaPdAk9s.js";import"./useForkRef-CxpHUqnO.js";import"./useEventCallback-BMK6R2Pt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bzposo0O.js";import"./Tooltip-Bq-dRAZk.js";import"./useSlot-DlELlrwU.js";import"./mergeSlotProps-CEo301sU.js";import"./useControlled-mPNvpXlD.js";import"./getReactElementRef-ReUsDlEE.js";import"./Portal-DK6E0QaG.js";import"./utils-9zA4k4wE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cc5Sw607.js";import"./Button-CbV8DhMK.js";import"./index-BevA4mtD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BewdDvzO.js";import"./index-B7TwzInb.js";import"./Alert-DMn04Ybs.js";import"./createSvgIcon-BrmPcgFj.js";import"./Close-BKLOGUyb.js";import"./AlertTitle-BSydhMP9.js";import"./Dialog-BczWQVYl.js";import"./DialogContext-D2yMXNGX.js";import"./Modal-BWDZ2XAH.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D1fLbtuP.js";import"./Fade-BulH4fWG.js";import"./DialogTitle-P-4qDeY3.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-makh3FOH.js";import"./DialogContent-RtOQQH2P.js";import"./DialogContentText-TxPk6WQX.js";import"./index-MVgG_W0q.js";import"./index-BRmf-t_t.js";import"./LinearProgress-Df2so-ID.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
