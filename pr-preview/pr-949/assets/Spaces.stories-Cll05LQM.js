import{j as p}from"./iframe-BEwKysCr.js";import{P as e}from"./index-B77edPTj.js";import{T as o}from"./index-BYEJAIjN.js";import{S as n}from"./index-C4sW_QjN.js";import{Q as d}from"./suspense-BKv9jLsl.js";import{S as m,u as h,a as S}from"./Spaces-BdpJYZOL.js";import{Q as y}from"./queryClient-C6azgU3w.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-0a0qvbdm.js";import"./useTheme-GtZOwaC6.js";import"./styled-Bg0-_ABf.js";import"./memoTheme-DRAFqHbg.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DdaiLWH8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-3XwYnqya.js";import"./Grid-BlMGH9aP.js";import"./isMuiElement-Ds6j6Ubo.js";import"./styled-nNR7mMu5.js";import"./Stack-CkUGtwqW.js";import"./Container-CSrQBmhf.js";import"./Img-IoIYc1UG.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CB3VoyWC.js";import"./index-5x18DLk4.js";import"./___vite-browser-external_commonjs-proxy-BeBneEXX.js";import"./index-CY8VLdQ2.js";import"./index-zJXRhr48.js";import"./index-DgXerHVi.js";import"./IconButton-BB9H-X4e.js";import"./ButtonBase-DKnYqpgE.js";import"./useTimeout-CgoAjxgp.js";import"./TransitionGroupContext-pIYTZL6v.js";import"./useForkRef-DOnOtXA5.js";import"./useEventCallback-CrQ8pL3N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BsydgvXb.js";import"./Tooltip-hIdC-Elu.js";import"./useSlot-BiH5AaTw.js";import"./mergeSlotProps-DrnO3OcF.js";import"./useControlled-SqHPXcV4.js";import"./getReactElementRef-CS040HVY.js";import"./Portal-CDUk8pyx.js";import"./utils-kGYhSz9o.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CytfctCW.js";import"./Button-dWZGUH58.js";import"./index-BKyxZB2f.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BCBu9Peg.js";import"./index-DfBuueVn.js";import"./Alert-CtIXGTc-.js";import"./createSvgIcon-BBwf9uD1.js";import"./Close-g56MsvL6.js";import"./AlertTitle-CkdZf4-I.js";import"./Dialog-A9Lv1_DU.js";import"./DialogContext-CrC5_ldc.js";import"./Modal-HL9q2m8c.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BV1Q-DrT.js";import"./Fade-DHWT1KLz.js";import"./DialogTitle-DX33sTfk.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DX5ST-Qj.js";import"./DialogContent-BNiu50g3.js";import"./DialogContentText-D9P7OQbi.js";import"./index-MVgG_W0q.js";import"./index-DuqJ6hnx.js";import"./LinearProgress-C-Ixt0NA.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
