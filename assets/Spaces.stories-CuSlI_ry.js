import{j as p}from"./iframe-G1mPJgBf.js";import{P as e}from"./index-BFDFNQZR.js";import{T as o}from"./index-BohNTKzF.js";import{S as n}from"./index-Dd7L_VAv.js";import{Q as d}from"./suspense-rKRI-UBi.js";import{S as m,u as h,a as S}from"./Spaces-O3mzQ_si.js";import{Q as y}from"./queryClient-DhVtx6L5.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-B8ctKAYM.js";import"./useTheme-D1p8Kaqq.js";import"./styled-Bu4wmneT.js";import"./memoTheme-ClxxX8JT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DNGzJ1Ro.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-B9x9TWbS.js";import"./Grid-DzK1vDYp.js";import"./isMuiElement-CksqsLPP.js";import"./styled-DkfJ6ssg.js";import"./Stack-baAEBtk1.js";import"./Container-v7PawbDd.js";import"./Img-BhPATL2g.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CEiGyhSD.js";import"./index-DIoy5QMF.js";import"./___vite-browser-external_commonjs-proxy-BbC5ecPs.js";import"./index-CGWJm4Tl.js";import"./index-CyzmdpcU.js";import"./index-L2w0xRVx.js";import"./IconButton-Bcnv2CeG.js";import"./ButtonBase-B5xaXwjS.js";import"./useTimeout-EKZwYL1w.js";import"./TransitionGroupContext-F733By2L.js";import"./useForkRef-BD2h0Jdv.js";import"./useEventCallback-C728JWJX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CUukeIT7.js";import"./Tooltip-DQJZ8sfi.js";import"./useSlot-DeTGMu9w.js";import"./mergeSlotProps-D9Hi5YzQ.js";import"./useControlled-_wEooLXW.js";import"./getReactElementRef-D1QwtblH.js";import"./Portal-D2NuCJSx.js";import"./utils-CV6P-8oh.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C0zVRdHz.js";import"./Button-ByjTqYnc.js";import"./index-J2aZCtZS.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CTlX2w7Q.js";import"./index-DHlaYVKW.js";import"./Alert-Ds9HbPJ1.js";import"./createSvgIcon-BAr3_gQH.js";import"./Close-CE-Vyd3p.js";import"./AlertTitle-BzsQfjum.js";import"./Dialog-CnL5QQDv.js";import"./DialogContext-CJax-NIE.js";import"./Modal-CSvN6E0P.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wbozj9wt.js";import"./Fade-DRE_fc-F.js";import"./DialogTitle-Dzea_YkB.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-LWYxhGsS.js";import"./DialogContent-DMkNQJ30.js";import"./DialogContentText-CMFbbYxi.js";import"./index-CrcoPoGw.js";import"./index-CP0Y6IiD.js";import"./LinearProgress-Y5whw231.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
