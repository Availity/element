import{j as p}from"./iframe-DDdys5VZ.js";import{P as e}from"./index-BIdpMfTg.js";import{T as o}from"./index-Z7ZBVKdt.js";import{S as n}from"./index-C23gf4rm.js";import{S as m,u as d,a as h}from"./Spaces-BMLlWsYV.js";import{Q as S}from"./suspense-By12qyu1.js";import{Q as y}from"./queryClient-CM8KWzLO.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BNuTBhMB.js";import"./useTheme-3S67f5Cb.js";import"./styled-hFTqa5AW.js";import"./memoTheme-Cxx5qwbm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CZtxpkXF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D4-1J1wq.js";import"./Grid-D5jHLohi.js";import"./styled-D0qD_60F.js";import"./isMuiElement-CGZGs55h.js";import"./Stack-XR9IapJe.js";import"./Container-BECr7IV3.js";import"./index-WctVZiAu.js";import"./index-DivR2jCb.js";import"./___vite-browser-external_commonjs-proxy-C0Pi2jES.js";import"./index-DuOb-EIt.js";import"./_toKey-QyxjJVxe.js";import"./index-u56kEo_3.js";import"./index-Do6uxBxf.js";import"./Tooltip-BrywaEgo.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./useTimeout-DZwXI9W9.js";import"./useControlled-DPgR13iz.js";import"./useEventCallback-Cc8SLIyn.js";import"./getReactElementRef-KKwdvyjG.js";import"./Portal-CIlqDXrO.js";import"./utils-CF4In8Xa.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMLU_yM0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOaXfSEH.js";import"./ButtonBase-DZVI88h8.js";import"./CircularProgress-CD5GaXFj.js";import"./Button-uXds9IdN.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./index-CBPoD4av.js";import"./Alert-Dkq1iShR.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./Close-D4KUM2AM.js";import"./AlertTitle-DWmwafwU.js";import"./Dialog-kp8YryC9.js";import"./DialogContext-BOfv2AWJ.js";import"./Fade-Ci7jieLM.js";import"./Modal-QZjHV8Pa.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DQLMuQga.js";import"./DialogTitle-BCXS6dBq.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-CdoD5TAq.js";import"./DialogContent-BmqU-OHm.js";import"./DialogContentText-CLuSi1oE.js";import"./index-BiBDMnSv.js";import"./Img-DAXLrrDj.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-AgFhHFJ-.js";import"./LinearProgress-vmaobFlC.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Fp=["_Spaces"];export{i as _Spaces,Fp as __namedExportsOrder,Dp as default};
