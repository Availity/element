import{j as p}from"./iframe-D77h7lRS.js";import{P as e}from"./index-DgqH9cgp.js";import{T as o}from"./index-VLdNb8Nf.js";import{S as n}from"./index-DKJ5gtoF.js";import{Q as d}from"./suspense-BkKxAvb_.js";import{S as m,u as h,a as S}from"./Spaces-BLCDoxRd.js";import{Q as y}from"./queryClient-B258ThTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BiY9noHN.js";import"./useTheme-CWKAY9AZ.js";import"./styled-CDvIACaW.js";import"./memoTheme-DqX_R3KK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Bljyylya.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-o7XdZc8G.js";import"./Grid-hgY9dIJR.js";import"./isMuiElement-Blipuvld.js";import"./styled-BMl8GMRY.js";import"./Stack-CP02Z4Z2.js";import"./Container-BclAzrCm.js";import"./Img-CL6twxde.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Cwh8nxUP.js";import"./index-B040VruN.js";import"./___vite-browser-external_commonjs-proxy-8XJy59YQ.js";import"./index-CmwOJNE2.js";import"./index-B5FM-eoA.js";import"./index-DfVYTiZj.js";import"./Tooltip-BhKuATOF.js";import"./useSlot-BBYvJbSe.js";import"./mergeSlotProps-qLX7lv7e.js";import"./useForkRef-SW3gFaM3.js";import"./useTimeout-BjR7jkxB.js";import"./useControlled-BR2YzmEr.js";import"./useEventCallback-d4rGFhnJ.js";import"./getReactElementRef-BIPFoYsf.js";import"./Portal-DtDkDNee.js";import"./utils-CC74677U.js";import"./TransitionGroupContext-DCGSqGsz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-uX8RgR0A.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CCSNmYsA.js";import"./ButtonBase-D6ESZVYa.js";import"./CircularProgress-Bxr3-rHo.js";import"./Button-CJwJUbvG.js";import"./index-CquEWAAI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CnEcCUNg.js";import"./index-DCTFsgIv.js";import"./Alert-BaCaFGsp.js";import"./createSvgIcon-BLoD-eFu.js";import"./Close-WmX40Z7A.js";import"./AlertTitle-ChJMGMOA.js";import"./Dialog-Dtg-AAYQ.js";import"./DialogContext-SXLuIKA4.js";import"./Modal-DrVB10Rb.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-__Xm0d1s.js";import"./Fade-DyYAtDpQ.js";import"./DialogTitle-V7IV97oB.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CQ_o3N4l.js";import"./DialogContent-CGnu0bQV.js";import"./DialogContentText-B-6dT6_d.js";import"./index-CrcoPoGw.js";import"./index-DIQ3EUOt.js";import"./LinearProgress-BhJbN-nI.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
