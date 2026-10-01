import{j as p}from"./iframe-DPgvn2UU.js";import{P as e}from"./index-DuQ2GrkL.js";import{T as o}from"./index-Bj2mBLrK.js";import{S as n}from"./index-DiNwh75D.js";import{Q as d}from"./suspense-Dz6yD9vf.js";import{S as m,u as h,a as S}from"./Spaces-DkmKozoH.js";import{Q as y}from"./queryClient-CDljF5LT.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Bg7uCtkj.js";import"./useTheme-B7kQ5Jap.js";import"./styled-Bnkr7D-c.js";import"./memoTheme-BYph2ZTv.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CPTozpuv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BlDR6l9l.js";import"./Grid-DrKODsgE.js";import"./isMuiElement-CIfsBfEF.js";import"./styled-CiHxTfSE.js";import"./Stack-Br7WCR6b.js";import"./Container-CIN8FyKG.js";import"./Img-D6mNmdkr.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Coy1nEZO.js";import"./index-CFHPeqeG.js";import"./___vite-browser-external_commonjs-proxy-DchKfydG.js";import"./index-CY8VLdQ2.js";import"./index-Ca4_Y5sv.js";import"./index-CeFSOpBV.js";import"./IconButton-B7NJWIp-.js";import"./ButtonBase-C05RGSI7.js";import"./useTimeout-b550rnFU.js";import"./TransitionGroupContext-CFlHgrGu.js";import"./useForkRef-B_9E6GXl.js";import"./useEventCallback-DBIic8Ex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C6YfH4n8.js";import"./Tooltip-YOgdBn5B.js";import"./useSlot-DpB6mlqQ.js";import"./mergeSlotProps-DRvPt2A_.js";import"./useControlled-BRfcL8pA.js";import"./getReactElementRef-vJH3QVIN.js";import"./Portal-DRuBdp-z.js";import"./utils-CA9pXuzB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BkILu-KG.js";import"./Button-BYYLdAXe.js";import"./index-DkMl2Zw_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bq0V0STh.js";import"./index-CaTirvkQ.js";import"./Alert-D6N0GLNl.js";import"./createSvgIcon-CVdeguJ_.js";import"./Close-Dn0HFxde.js";import"./AlertTitle-CZ8oOte2.js";import"./Dialog-D6Xlhe9A.js";import"./DialogContext-Bx7vkRat.js";import"./Modal-DJSJonwV.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DG1hflfc.js";import"./Fade-pXi3dxmW.js";import"./DialogTitle-CZrbNdco.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DAW7CWwP.js";import"./DialogContent-Bw8m8kk3.js";import"./DialogContentText-DmwQGPXF.js";import"./index-MVgG_W0q.js";import"./index-pKfWhNMc.js";import"./LinearProgress-DsDUXV79.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
