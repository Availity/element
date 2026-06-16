import{j as p}from"./iframe-D9ubqhJK.js";import{P as e}from"./index-DryvU1Ls.js";import{T as o}from"./index-jvKCwEAF.js";import{S as n}from"./index-hzcYFh1I.js";import{Q as d}from"./suspense-BdXPKnPM.js";import{S as m,u as h,a as S}from"./Spaces-BXyWBh1-.js";import{Q as y}from"./queryClient-DsZa5uDf.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-D9VaIl9p.js";import"./useTheme-Bs7bia1b.js";import"./styled-DXiPKtQZ.js";import"./memoTheme-CgUpfGaw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CmwrtNIv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Bn9CddAr.js";import"./Grid-XUldnHEv.js";import"./isMuiElement-CNzi3ipk.js";import"./styled-B7Z91F3L.js";import"./Stack-CGmSesTx.js";import"./Container-vLztGkDr.js";import"./Img-C6EZKOkv.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DGvLPLx7.js";import"./index-Bxqf2OpG.js";import"./___vite-browser-external_commonjs-proxy-DwG-mvXL.js";import"./index-DtUrJ1Wx.js";import"./index-JTnK9PR8.js";import"./index-h4r-WnWl.js";import"./Tooltip-DJtaByj1.js";import"./useSlot-dFBWOBaM.js";import"./mergeSlotProps-CUVj2Ixj.js";import"./useForkRef-CFXiLCEz.js";import"./useTimeout-TLxlWLEl.js";import"./useControlled-BMamuY7F.js";import"./useEventCallback-BOUt7crc.js";import"./getReactElementRef-MrxWZY03.js";import"./Portal-HXWOitc9.js";import"./utils-C9L-o1yc.js";import"./TransitionGroupContext-By53oEia.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bfn47NpZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CdRgNr67.js";import"./ButtonBase-CmaElg-P.js";import"./CircularProgress-BW1moUPm.js";import"./Button-C6KYraw-.js";import"./index-DNmhIX6F.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DlrnpruC.js";import"./index-DXQtvXHc.js";import"./Alert-BdVmakF3.js";import"./createSvgIcon-9Ro74DHR.js";import"./Close-PL6G0Z5Z.js";import"./AlertTitle-DWYWTywy.js";import"./Dialog-DTJQgeWB.js";import"./DialogContext-DSsjzrS5.js";import"./Modal-CR4yZ1tw.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KCj6wAhX.js";import"./Fade-WpG-sZwU.js";import"./DialogTitle-ByGHZdJB.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-WUZjcAzt.js";import"./DialogContent-D6p1qFCD.js";import"./DialogContentText-CMDLNulN.js";import"./index-CrcoPoGw.js";import"./index-CEQFStsh.js";import"./LinearProgress-dq1NWUYM.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
