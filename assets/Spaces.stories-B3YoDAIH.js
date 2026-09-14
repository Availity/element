import{j as p}from"./iframe-D39zpO5D.js";import{P as e}from"./index-CalBDkhA.js";import{T as o}from"./index-CIttbvMR.js";import{S as n}from"./index-BHfSa4RT.js";import{Q as d}from"./suspense-GpnBxC8j.js";import{S as m,u as h,a as S}from"./Spaces-Dt4gHbId.js";import{Q as y}from"./queryClient-Cyj6I3XF.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-B079EtYg.js";import"./useTheme-Q_YzHohC.js";import"./styled-DVn78CF9.js";import"./memoTheme-DS1Qd1tD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-lHvxoPWM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-MvPvGRqH.js";import"./Grid-sUXan3gB.js";import"./isMuiElement-B_WcrTr3.js";import"./styled-D2W9iR9V.js";import"./Stack-DtFT-rmC.js";import"./Container-Bg9CFWCo.js";import"./Img-CtZ0D_Y1.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Iv_LGCnt.js";import"./index-BqziHakW.js";import"./___vite-browser-external_commonjs-proxy-BUL4XQWM.js";import"./index-CnpWGRvj.js";import"./index-9zKcotsN.js";import"./index-CT8p7-xb.js";import"./IconButton-1y7-X1Ns.js";import"./ButtonBase-C5qFdqG6.js";import"./useTimeout-DkqtJI-P.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useForkRef-DNCE6AYe.js";import"./useEventCallback-CTE8ZTt3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZf4mQi8.js";import"./Tooltip-T0tiLXY7.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useControlled-Dc7tfWw6.js";import"./getReactElementRef-BiLy3DMf.js";import"./Portal-D0_VnBDB.js";import"./utils-BiqFTD-G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHrZTrOT.js";import"./Button-BxFiSb--.js";import"./index-LJlq2DD9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DrCHR_XG.js";import"./index-CNlypMN_.js";import"./Alert-CzFOqmWq.js";import"./createSvgIcon-CXilsj0Y.js";import"./Close-C3OBzGrc.js";import"./AlertTitle-BW-5jv-U.js";import"./Dialog-DebJ2hWw.js";import"./DialogContext-C1HjBWtu.js";import"./Modal-Bcdi7MY2.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGS6hD_O.js";import"./Fade-C2SBq3LE.js";import"./DialogTitle-BTrP_oX4.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DeRhHImm.js";import"./DialogContent-IjkbyC5u.js";import"./DialogContentText-CphJQLlJ.js";import"./index-CrcoPoGw.js";import"./index-B7fHS1QU.js";import"./LinearProgress-CtOhayyF.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
