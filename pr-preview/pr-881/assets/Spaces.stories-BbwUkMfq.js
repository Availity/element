import{j as p}from"./iframe-D81qY2CF.js";import{P as e}from"./index-DSM5ZWgJ.js";import{T as o}from"./index-D2vS9zPa.js";import{S as n}from"./index-CcvrWeMs.js";import{S as m,u as d,a as h}from"./Spaces-Z6XvW2K-.js";import{Q as S}from"./suspense-Dm71y9gD.js";import{Q as y}from"./queryClient-MtiFOPIE.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-B5yWzxZy.js";import"./useTheme-DaB7mFrL.js";import"./styled-CaGoIOKf.js";import"./memoTheme-A9yntoiy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Dn0-Cqm0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-rRIRPzng.js";import"./Grid-DCMyUpSS.js";import"./styled-BY17iDss.js";import"./isMuiElement-CnND6WC1.js";import"./Stack-DqyNPhS4.js";import"./Container-CAzsbVoz.js";import"./index-BfEP--CJ.js";import"./index-E_v7_lSo.js";import"./___vite-browser-external_commonjs-proxy-6DqOz1aF.js";import"./index-CBn4K3li.js";import"./index-BioZVIix.js";import"./index-D8s0t892.js";import"./Tooltip-DVNRBZHi.js";import"./useSlot-ietvTX_K.js";import"./mergeSlotProps-BaZVmxsR.js";import"./useForkRef-aj5N3dMx.js";import"./useTimeout-DKkko9rl.js";import"./useControlled-JeBGtbqT.js";import"./useEventCallback-CqgW2Pgy.js";import"./getReactElementRef-DGERSSwn.js";import"./Portal-CxFiB9ei.js";import"./utils-or5sFOOm.js";import"./TransitionGroupContext-CUPg0qtb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-huDybs-7.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DShobRfO.js";import"./ButtonBase-D8v-94oh.js";import"./CircularProgress-ByHKQjCZ.js";import"./Button-B5mFfpCi.js";import"./index-BD-so7Wr.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B6ASqf__.js";import"./index-CQoM9xCL.js";import"./Alert-tQBD940e.js";import"./createSvgIcon-cW8ufNaK.js";import"./Close-E_O1U0R0.js";import"./AlertTitle-MDOPZlhk.js";import"./Dialog-C2SKrn6a.js";import"./DialogContext-CQKtXjRY.js";import"./Fade-ChDneRqZ.js";import"./Modal-DwTQgRCi.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DEXVSxef.js";import"./DialogTitle-Cml8aIe9.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BVVwv8cv.js";import"./DialogContent-DEjGo2a3.js";import"./DialogContentText-CiQ8XReO.js";import"./index-BiBDMnSv.js";import"./Img-BSxZ-xsY.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DlzOHjtW.js";import"./LinearProgress-BT0yOapp.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Bp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dp=["_Spaces"];export{i as _Spaces,Dp as __namedExportsOrder,Bp as default};
