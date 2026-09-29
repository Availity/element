import{j as p}from"./iframe-ClyInPD8.js";import{P as e}from"./index-D4dMoVYF.js";import{T as o}from"./index-BS5Ax9ph.js";import{S as n}from"./index-zd_NREJJ.js";import{Q as d}from"./suspense-DEEU3iMy.js";import{S as m,u as h,a as S}from"./Spaces-BQj7qJ1u.js";import{Q as y}from"./queryClient-D0AahJB2.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-2PN-0rlq.js";import"./useTheme-Cf-PtNfg.js";import"./styled-D7PoFJCi.js";import"./memoTheme-CULMZTzm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D3903seB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-eNTJbR1-.js";import"./Grid-CgIe3-7e.js";import"./isMuiElement-Bh35qceP.js";import"./styled-XkY1prTM.js";import"./Stack-nuzf0IeA.js";import"./Container-DALlxZP3.js";import"./Img-Cuel0t7z.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-0GE0S2-b.js";import"./index-CDDPJt8D.js";import"./___vite-browser-external_commonjs-proxy-4ZAXEZ6z.js";import"./index-CY8VLdQ2.js";import"./index-Btf550fG.js";import"./index-Cl8nDLSA.js";import"./IconButton-3p_Hzj1M.js";import"./ButtonBase-CL-JJlq6.js";import"./useTimeout-Bv1knD6m.js";import"./TransitionGroupContext-DtZ8GaDC.js";import"./useForkRef-CWYhWoid.js";import"./useEventCallback-CQShbQqM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cfnaefvx.js";import"./Tooltip-D3BuTBo3.js";import"./useSlot-D46kf6z6.js";import"./mergeSlotProps-DRm6mdtU.js";import"./useControlled-CId5aZ2_.js";import"./getReactElementRef-Cs8-_4yh.js";import"./Portal-6M9c9Gfh.js";import"./utils-DIFk0nuU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D2_jX090.js";import"./Button-C1rBrVEa.js";import"./index-W6CH2PNc.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DfVeW2fT.js";import"./index-VQReFLXa.js";import"./Alert-DrQ0cXrC.js";import"./createSvgIcon-C9dBkbUF.js";import"./Close-cAlMT6qa.js";import"./AlertTitle-FYVxnJYk.js";import"./Dialog-C1Bz-pcz.js";import"./DialogContext-CfsExUFV.js";import"./Modal-B7upLf36.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DGkZDyow.js";import"./Fade-5LrOnsLV.js";import"./DialogTitle-RsOTaBpi.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-JZ1FLcuV.js";import"./DialogContent-BQ-dS5a4.js";import"./DialogContentText-DR1aBdiH.js";import"./index-CrcoPoGw.js";import"./index-w4Tq0rO9.js";import"./LinearProgress-DGqxN-KS.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
