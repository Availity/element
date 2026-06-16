import{j as p}from"./iframe-CskbrvwW.js";import{P as e}from"./index-D2NoLy7w.js";import{T as o}from"./index-BYkKLoSf.js";import{S as n}from"./index-CZsLRVDZ.js";import{Q as d}from"./suspense-vTXPO3Ra.js";import{S as m,u as h,a as S}from"./Spaces-ElJ0x4so.js";import{Q as y}from"./queryClient-BoG43WWR.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-C7gSeK8B.js";import"./useTheme-BYK31DIa.js";import"./styled-BsXlxVo_.js";import"./memoTheme-DEwbXW4J.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-C3YNkC5-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-ChrZYvSC.js";import"./Grid-Dtrs9C3c.js";import"./isMuiElement-AkziJBw1.js";import"./styled-DBnwDxk1.js";import"./Stack-C_7R7j6r.js";import"./Container-YINSrinB.js";import"./Img-BhZdwDNK.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DyeJjk-d.js";import"./index-D3sTtJd8.js";import"./___vite-browser-external_commonjs-proxy-CW-dTi_Y.js";import"./index-BRjqHJWv.js";import"./index-D9O9O8zn.js";import"./index-BA1sIr4x.js";import"./Tooltip-DpvX0KYg.js";import"./useSlot-BWiqm7gO.js";import"./mergeSlotProps-BuWg2zjK.js";import"./useForkRef-CJ9Mlrh4.js";import"./useTimeout-tPc9dJl0.js";import"./useControlled-DIqjKUDM.js";import"./useEventCallback-SyYUcrzB.js";import"./getReactElementRef-C03_kC3i.js";import"./Portal-4hvJB8nO.js";import"./utils-JI7-Ixnq.js";import"./TransitionGroupContext-Bfg0KmSK.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C5o6YfE5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3QjbCEP.js";import"./ButtonBase-D0cuhZpt.js";import"./CircularProgress-DRIVKGSr.js";import"./Button-NBHJiR2s.js";import"./index-BWPz21f_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B2BnKrH8.js";import"./index-6b8QT-0O.js";import"./Alert-0jakBRNy.js";import"./createSvgIcon-Bhh07A3D.js";import"./Close-Behtas3R.js";import"./AlertTitle-DKqqhpnD.js";import"./Dialog-BLGuAv3y.js";import"./DialogContext-BmFILwUn.js";import"./Modal-BBxZlvcb.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D90u1o6C.js";import"./Fade-6PhvYSTo.js";import"./DialogTitle-0nwFTJvN.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Ch6JlzcK.js";import"./DialogContent-axVSTV_b.js";import"./DialogContentText-BYjqh1ol.js";import"./index-CrcoPoGw.js";import"./index-DmE64kfI.js";import"./LinearProgress-Br8DUBLD.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
