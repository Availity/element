import{j as p}from"./iframe-DOPEDWVE.js";import{P as e}from"./index-a__vzDUH.js";import{T as o}from"./index-Bc9oImAB.js";import{S as n}from"./index-CVbaZk5H.js";import{Q as d}from"./suspense-Da2N__me.js";import{S as m,u as h,a as S}from"./Spaces-CwGLheIj.js";import{Q as y}from"./queryClient-CZnJFMhi.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-e-gdlgr6.js";import"./useTheme-D2iYqlAC.js";import"./styled-LPfbW-Wh.js";import"./memoTheme-8zILCmUA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D_VWbga9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-m-kHsJDm.js";import"./Grid-D6ohNbZE.js";import"./isMuiElement-OUcohH0i.js";import"./styled-DCDHMWdc.js";import"./Stack-CjxkYZ6F.js";import"./Container-5_MJa3VZ.js";import"./Img-CRgjhxoF.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-D4Ewo4sZ.js";import"./index-D6zI7NYV.js";import"./___vite-browser-external_commonjs-proxy-XYxfUcR_.js";import"./index-D5qdRn3q.js";import"./index-BTGwkMiQ.js";import"./index-B920RZd2.js";import"./Tooltip-VtUuxwVh.js";import"./useSlot-C4qJPUpL.js";import"./mergeSlotProps-DNHO_T1K.js";import"./useForkRef-B1Lx8fl-.js";import"./useTimeout-CvyLGLNv.js";import"./useControlled-W_wjgM09.js";import"./useEventCallback-2DpT7fNb.js";import"./getReactElementRef-CylE0SZK.js";import"./Portal-CcIDLVWU.js";import"./utils-C1ZbFEVB.js";import"./TransitionGroupContext-GxBk2Ip_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DiHBVMXF.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52uYHTa.js";import"./ButtonBase-CQME6_xK.js";import"./CircularProgress-Bd2XmtNT.js";import"./Button-DHnc0sD-.js";import"./index-NHPSesC7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bt1sNrUf.js";import"./index-CeX-MaSe.js";import"./Alert-Dc8iX1lq.js";import"./createSvgIcon-URN63_Ch.js";import"./Close-Ca30N1zO.js";import"./AlertTitle-CvZapyDY.js";import"./Dialog-DoiaU8uF.js";import"./DialogContext-DQLCvhbu.js";import"./Modal-Dz4Wg6rk.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D5hQN3RU.js";import"./Fade-DWzLIVc2.js";import"./DialogTitle-8OSSU0jq.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Dbs_dH-t.js";import"./DialogContent-B0BNg63W.js";import"./DialogContentText-Cf2eoDwk.js";import"./index-CrcoPoGw.js";import"./index-DYFXadNv.js";import"./LinearProgress-CaTwIQ5L.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
