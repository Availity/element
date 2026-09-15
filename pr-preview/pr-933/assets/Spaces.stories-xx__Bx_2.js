import{j as p}from"./iframe-_ZTccD58.js";import{P as e}from"./index-CSJoiZpW.js";import{T as o}from"./index-CHmUp4gL.js";import{S as n}from"./index-MbAAKXvE.js";import{Q as d}from"./suspense-Xn0uKYSU.js";import{S as m,u as h,a as S}from"./Spaces-CIBzsRCs.js";import{Q as y}from"./queryClient-DUNahOpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-TFiwEfzG.js";import"./useTheme-CbKlvc9V.js";import"./styled-DxUGJNed.js";import"./memoTheme-BuxtMmS2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BQev244I.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BSxgn2ms.js";import"./Grid-cMYs6nxO.js";import"./isMuiElement-yepEbMeh.js";import"./styled-B0tsulN_.js";import"./Stack-DA_tb5jO.js";import"./Container-ChGZTn1s.js";import"./Img-CMk_i4_U.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CTKxd3L4.js";import"./index-Cal9rjX2.js";import"./___vite-browser-external_commonjs-proxy-CWv8JeV2.js";import"./index-CXRgriMz.js";import"./index-BFdYr0YE.js";import"./index-DLaYSOpi.js";import"./IconButton-DaIXPvFu.js";import"./ButtonBase-CPTcrrxt.js";import"./useTimeout-COBvC2JW.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./useForkRef-BH960YuM.js";import"./useEventCallback-Bsg7GzMN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DP4XdEyk.js";import"./Tooltip-BlJXya1q.js";import"./useSlot-Y1vfiROK.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useControlled-h9lrVQtL.js";import"./getReactElementRef-CKHPMftD.js";import"./Portal-D40QliBd.js";import"./utils-CGytJ6bP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-93kC9vNJ.js";import"./Button-DpAEBbkn.js";import"./index-D2g-Snq2.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B7LeHXNQ.js";import"./index-DpUctnWl.js";import"./Alert-DFAJ7AfX.js";import"./createSvgIcon-CPBwa84_.js";import"./Close-DDepYFWR.js";import"./AlertTitle-jNDr8fVA.js";import"./Dialog-BPTIKEkA.js";import"./DialogContext-BHzS3aCP.js";import"./Modal-D02YFzj_.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B0rEXgSL.js";import"./Fade-U1zsu3gd.js";import"./DialogTitle-JjK8I5MW.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-t9vU36jy.js";import"./DialogContent-B3HIHS0_.js";import"./DialogContentText-0uWVLntu.js";import"./index-CrcoPoGw.js";import"./index-BYny084x.js";import"./LinearProgress-DGkFpceQ.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
