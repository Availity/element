import{j as p}from"./iframe-CWY3iD4k.js";import{P as e}from"./index-Dvb6q66Y.js";import{T as o}from"./index-B87fX2m4.js";import{S as n}from"./index-CH36QgIT.js";import{Q as d}from"./suspense-EgoRPU0Z.js";import{S as m,u as h,a as S}from"./Spaces-CHPJggb9.js";import{Q as y}from"./queryClient-DtbTXTdO.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-dLVuKHPb.js";import"./useTheme-BBG77Eif.js";import"./styled-CIfQzxdD.js";import"./memoTheme-DrmgfhiZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DdnCOrzM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-W_K2m7mS.js";import"./Grid-Dpddp4dd.js";import"./isMuiElement-CITzrPa4.js";import"./styled-DiOSWYDP.js";import"./Stack-CDV8c2Ym.js";import"./Container-O7CLblpO.js";import"./Img-CuqJuB4k.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-ChpPGdwe.js";import"./index-DMZHGelP.js";import"./___vite-browser-external_commonjs-proxy-CLqNAulC.js";import"./index-2SzxyhSV.js";import"./index-Cs5Em1Ho.js";import"./index-CFwKy-vk.js";import"./IconButton-CKcF2qnA.js";import"./ButtonBase-BVW6-IPM.js";import"./useTimeout-8ubSeoYI.js";import"./TransitionGroupContext-BKIhkECl.js";import"./useForkRef-DtxHKGyT.js";import"./useEventCallback-DHih-p6k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dd-jZUAB.js";import"./Tooltip-B3bZKYVT.js";import"./useSlot-jGeM5BDq.js";import"./mergeSlotProps-DYpSnyrH.js";import"./useControlled-CIbXyyiC.js";import"./getReactElementRef-DgEYPRe_.js";import"./Portal-GTIXf_ni.js";import"./utils-uPZOnv02.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DqKnkovT.js";import"./Button-CdHEuVuq.js";import"./index-BzSYwNd-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DKNFXPcY.js";import"./index-B5f6tSS5.js";import"./Alert-DgoVotbj.js";import"./createSvgIcon-DumzlQmL.js";import"./Close-Be9fCZVr.js";import"./AlertTitle-BFVJWtWW.js";import"./Dialog-C-wMyYPY.js";import"./DialogContext-CUx9_dnK.js";import"./Modal-BW2dyGsc.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CXYVCyew.js";import"./Fade-DPNQjbRR.js";import"./DialogTitle-DHPVPyPR.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DZ0CUWrg.js";import"./DialogContent-DOVg8VkO.js";import"./DialogContentText-D3sluuXd.js";import"./index-CrcoPoGw.js";import"./index-5xoE-kGP.js";import"./LinearProgress-C4O_-sIR.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
