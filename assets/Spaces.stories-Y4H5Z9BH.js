import{j as p}from"./iframe-BxUHITI1.js";import{P as e}from"./index-D4-F_wLy.js";import{T as o}from"./index-DdUtkmNt.js";import{S as n}from"./index-BMhl3l0u.js";import{Q as d}from"./suspense-0wm7O8Sh.js";import{S as m,u as h,a as S}from"./Spaces-DsQwfBGN.js";import{Q as y}from"./queryClient-qVFpVKNq.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BbjEmRJb.js";import"./useTheme-D1EEqNP3.js";import"./styled-CpGjzToy.js";import"./memoTheme-CzoHsl9a.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BPEZnd-f.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-dmaYfFtJ.js";import"./Grid-CYb8qmsK.js";import"./isMuiElement-D7EX6TJ1.js";import"./styled-dRg2RBwo.js";import"./Stack-CFpqy-T3.js";import"./Container-CqfIskg6.js";import"./Img-Duei9IHT.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DsZ_7dTV.js";import"./index-DmTj5jVV.js";import"./___vite-browser-external_commonjs-proxy-BcA6VPFJ.js";import"./index-CY8VLdQ2.js";import"./index-DHv-5oNk.js";import"./index-Cxy_eo2a.js";import"./IconButton-B68upYna.js";import"./ButtonBase-DsL-5Cn7.js";import"./useTimeout-DAfKtcD8.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./useForkRef-lvxB79U5.js";import"./useEventCallback-C37BR1tG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DLAhFeVr.js";import"./Tooltip-DZz3XPMm.js";import"./useSlot-B7qqTYAC.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useControlled-Bgh5sVCP.js";import"./getReactElementRef-CgE3Obh2.js";import"./Portal-uHNWHw4F.js";import"./utils-Bx4IaHxc.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CkGYMLCU.js";import"./Button-iASAD3CE.js";import"./index-D7Z8d6Jb.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BZhbNLcx.js";import"./index-7WzCa7IP.js";import"./Alert-E24KhiR4.js";import"./createSvgIcon-RiBZe8zy.js";import"./Close-B0Mi5Iza.js";import"./AlertTitle-CZ5yQ0GU.js";import"./Dialog-D1WnFzML.js";import"./DialogContext-BEOh8Q5J.js";import"./Modal-CLWW9UYM.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D0eWelix.js";import"./Fade-3fp3ueS9.js";import"./DialogTitle-DFN_BX_l.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DbAVp5dR.js";import"./DialogContent-BOLkobjW.js";import"./DialogContentText-BZr72yYE.js";import"./index-MVgG_W0q.js";import"./index-DMcUz0fG.js";import"./LinearProgress-DF7gBxkn.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
