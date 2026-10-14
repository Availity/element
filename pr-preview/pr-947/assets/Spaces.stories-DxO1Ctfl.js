import{j as p}from"./iframe-h0MgQYlb.js";import{P as e}from"./index-DqniC6Sr.js";import{T as o}from"./index-vTaYrtpe.js";import{S as n}from"./index-DDm8yHLq.js";import{Q as d}from"./suspense-CpR1qpqc.js";import{S as m,u as h,a as S}from"./Spaces-CjizRP9G.js";import{Q as y}from"./queryClient-BwsxTrVf.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Bzbluycl.js";import"./useTheme-ipJVwYFq.js";import"./styled-BqHoSPCQ.js";import"./memoTheme-XXgMlyY8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DKkmO78y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CawMSGjY.js";import"./Grid-BGvSYpEY.js";import"./isMuiElement-DHZpsMdk.js";import"./styled-ZbNx8Tx8.js";import"./Stack-B9I8dIEY.js";import"./Container-CVSHMzmU.js";import"./Img-C4oWxXBX.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BIB_yAj3.js";import"./index-C8MsvkTd.js";import"./___vite-browser-external_commonjs-proxy-BxG7ovk5.js";import"./index-CY8VLdQ2.js";import"./index-D1HDPLYs.js";import"./index-_zAfcFR5.js";import"./IconButton-gyouzdWj.js";import"./ButtonBase-DGaEQWnN.js";import"./useTimeout-DZyw5ypU.js";import"./TransitionGroupContext-BQlZajXI.js";import"./useForkRef-CKNxtvC9.js";import"./useEventCallback-DzEyioes.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce_dbRGa.js";import"./Tooltip-cnLuDxtR.js";import"./useSlot-DRVd6-GX.js";import"./mergeSlotProps-D1gF_ZlB.js";import"./useControlled-4IqYUsvs.js";import"./getReactElementRef-zdjSJbKU.js";import"./Portal-De7hiZQn.js";import"./utils-DputtVCR.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CeTvmasO.js";import"./Button-DFw25j8B.js";import"./index-BfEcMr2H.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CJ2gQRBv.js";import"./index-BeGJm3oc.js";import"./Alert-DBhhWii3.js";import"./createSvgIcon-BnwFzQLv.js";import"./Close-BJS85dYf.js";import"./AlertTitle-CzeCv2Pm.js";import"./Dialog-D8z_jEhf.js";import"./DialogContext-Bz9YNDfF.js";import"./Modal-Br_uJxcw.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KJ2tZ5Vr.js";import"./Fade-z7eIM_c6.js";import"./DialogTitle-BRxNTwfL.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CidLPAU8.js";import"./DialogContent-B_qhtB-q.js";import"./DialogContentText-5g1WS0ti.js";import"./index-MVgG_W0q.js";import"./index-CdYq5-fs.js";import"./LinearProgress-2TpF0VFP.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
