import{j as p}from"./iframe-5qL0mprR.js";import{P as e}from"./index-DrpSWOjF.js";import{T as o}from"./index-CJigEfEA.js";import{S as n}from"./index-ClcKetnN.js";import{Q as d}from"./suspense-Ca22AqI2.js";import{S as m,u as h,a as S}from"./Spaces-GrgvgJCF.js";import{Q as y}from"./queryClient-jSqp2e0b.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CT3iXlM2.js";import"./useTheme-Dl3uMx7u.js";import"./styled-CoUwmM87.js";import"./memoTheme-DGTRKnQQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-F-Y5u_yh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-jTQ-hmH5.js";import"./Grid-B5L6Dh7M.js";import"./isMuiElement-DHbarLNo.js";import"./styled-rFpyV319.js";import"./Stack-CnLSR6do.js";import"./Container-B0mlIeY3.js";import"./Img-D8vcnaX5.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BgvYUwQe.js";import"./index-Ce6zeul1.js";import"./___vite-browser-external_commonjs-proxy-DolIjbot.js";import"./index-CY8VLdQ2.js";import"./index-Cx0gS9un.js";import"./index-D6eeRdCr.js";import"./IconButton-B8_cpiYd.js";import"./ButtonBase-CEBWCJ86.js";import"./useTimeout-B8tDrGFN.js";import"./TransitionGroupContext-DG4g3onZ.js";import"./useForkRef-B_tBAx6E.js";import"./useEventCallback-DqMc6arA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BqSWo9RJ.js";import"./Tooltip-P-kE-0cn.js";import"./useSlot-Cn1CdUSX.js";import"./mergeSlotProps-BLlOPPFY.js";import"./useControlled-CSqunifB.js";import"./getReactElementRef-DBt8lh_B.js";import"./Portal-BaL9DcFZ.js";import"./utils-ZWxhk7o5.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BldRbwm9.js";import"./Button-8WJV18MQ.js";import"./index-CD_y2Btm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8DRNpD6.js";import"./index-DSxSWwM6.js";import"./Alert-Cexw_gFN.js";import"./createSvgIcon-CZsBBnxz.js";import"./Close-DTIfGCy3.js";import"./AlertTitle-CEv5j1y2.js";import"./Dialog-DZZTknqh.js";import"./DialogContext-BbVE8FmY.js";import"./Modal-CAwaW-IN.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DdJYMJ-d.js";import"./Fade-CwTmGpyj.js";import"./DialogTitle-CZW8NE0P.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Csez1NUk.js";import"./DialogContent-BE13eBM1.js";import"./DialogContentText-ukbJ3as0.js";import"./index-CrcoPoGw.js";import"./index-Cz1ggLKB.js";import"./LinearProgress-CwLRkQYP.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
