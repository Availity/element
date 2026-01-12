import{j as p}from"./iframe-BZz3QcUV.js";import{P as e}from"./index-CAvjtnSP.js";import{T as o}from"./index-ClM7p1ER.js";import{S as n}from"./index-Vz6FX8E2.js";import{S as m,u as d,a as h}from"./Spaces-C9pcqTsx.js";import{Q as S}from"./suspense-CTq0yTTK.js";import{Q as y}from"./queryClient-D4B1D7TN.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CDv_1HFe.js";import"./useTheme-B7Cqxh2G.js";import"./styled-BM-ddlS9.js";import"./memoTheme-Bs2nn0CZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-dKvhZPmN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BOg-vuMP.js";import"./Grid-1nQ5vvaE.js";import"./styled-DdCwn5Ke.js";import"./isMuiElement-BdI-HeXQ.js";import"./Stack-DLX-eFuT.js";import"./Container-DqMY3rTf.js";import"./index-DiX5wH3J.js";import"./index-ChEw8Ly-.js";import"./___vite-browser-external_commonjs-proxy-Dln5QaD1.js";import"./index-BhnKf5D0.js";import"./_toKey-CDTJfhSv.js";import"./index-ChL_UHnh.js";import"./index-B314xkb7.js";import"./Tooltip-BWJHZRl6.js";import"./useSlot-r4YEcyId.js";import"./mergeSlotProps-B23xrLHr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CqxV8UPS.js";import"./useTimeout-DLwU38Ef.js";import"./useControlled-DdT90daF.js";import"./useEventCallback-BVOh0J-M.js";import"./getReactElementRef-Bpvbu8Ov.js";import"./Portal-Zp5JyzDe.js";import"./utils-BgvT_xZo.js";import"./TransitionGroupContext-9H431pbn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DFvf-0uJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cw2IKBAQ.js";import"./ButtonBase-DOxBZg-r.js";import"./CircularProgress-SMz0iZ9M.js";import"./Button-Cp--sx01.js";import"./index-DVq5OAtC.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DKZWjmjR.js";import"./index-DFHt3mEJ.js";import"./Alert-BkWscTjC.js";import"./createSvgIcon-CpO6BPRg.js";import"./Close-CyOlbJDt.js";import"./AlertTitle-XKXkcyew.js";import"./Dialog-CtpKAl0x.js";import"./DialogContext-B7ygUuAj.js";import"./Fade-BQarXe1G.js";import"./Modal-CA8rC7t3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DN1aCuq7.js";import"./DialogTitle-B_ddIDnc.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-QHbmjunN.js";import"./DialogContent-CJh5cg_0.js";import"./DialogContentText-BMIXs7nT.js";import"./index-BiBDMnSv.js";import"./Img-AXRmZkHc.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Pd_0QVn_.js";import"./LinearProgress-iYQYohrQ.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
