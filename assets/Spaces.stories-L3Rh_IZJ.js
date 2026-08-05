import{j as p}from"./iframe-Cwe65xm_.js";import{P as e}from"./index-Bn86Cr3B.js";import{T as o}from"./index-D9T6YpUv.js";import{S as n}from"./index-GEX0zvPr.js";import{Q as d}from"./suspense-BTBYQ-a5.js";import{S as m,u as h,a as S}from"./Spaces-U48kq_9v.js";import{Q as y}from"./queryClient-P_CWi0P_.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BllScWLN.js";import"./useTheme-ClD_legM.js";import"./styled-DQU8Bodb.js";import"./memoTheme-JTO0J2AE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CwzEaEbc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DUWM_zX0.js";import"./Grid-XXlh0rR0.js";import"./isMuiElement-CFlSzKZl.js";import"./styled-Drm9UKpq.js";import"./Stack-CRAKFpNP.js";import"./Container-Bu5eEzkf.js";import"./Img-roI4DeTj.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CCWtWTEb.js";import"./index-BhplCRAi.js";import"./___vite-browser-external_commonjs-proxy-DEtnVKx2.js";import"./index-po9FdVlG.js";import"./index-BxMq_wlB.js";import"./index-B70TfKNL.js";import"./Tooltip-DXMour_H.js";import"./useSlot-DT6vlKow.js";import"./mergeSlotProps-DptD_Py-.js";import"./useForkRef-B3dE_Xi9.js";import"./useTimeout-B979BKpc.js";import"./useControlled-B5htf0na.js";import"./useEventCallback-Cus8kDUU.js";import"./getReactElementRef-BO3eeWP1.js";import"./Portal-MprWoh0y.js";import"./utils-E62tsqSg.js";import"./TransitionGroupContext-DfpprYK4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHdu95RH.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLwVH8iN.js";import"./ButtonBase-B2MrdNo3.js";import"./CircularProgress-Gl2vZfvX.js";import"./Button-BPlwCXwF.js";import"./index-Dwd1T5KI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVcTXB35.js";import"./index-CT_sbubU.js";import"./Alert-DiTiGzju.js";import"./createSvgIcon-BCdDg_61.js";import"./Close-CDWcnhUE.js";import"./AlertTitle-DvFB2Trt.js";import"./Dialog-BXC6EdJ3.js";import"./DialogContext-Cz0PdRrI.js";import"./Modal-DXesMzil.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BuJJs5yg.js";import"./Fade-DVmn_b9B.js";import"./DialogTitle-Dqhodeum.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CcBu7CM7.js";import"./DialogContent-0vKA73-t.js";import"./DialogContentText-BDbRvfvX.js";import"./index-CrcoPoGw.js";import"./index-o59Ru5KQ.js";import"./LinearProgress-DSSEcrBv.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
