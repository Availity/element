import{j as p}from"./iframe-DyOisw3p.js";import{P as e}from"./index-Dxa7bCja.js";import{T as o}from"./index-ZUZeQ6ON.js";import{S as n}from"./index-DOLuYYYn.js";import{S as m,u as d,a as h}from"./Spaces-CE_UfFvw.js";import{Q as S}from"./suspense-CdWtoiIU.js";import{Q as y}from"./queryClient--adIEIoT.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Ds5OMBpI.js";import"./useTheme-BZ9q4WY8.js";import"./styled-DlFKYmu8.js";import"./memoTheme-ClQmTMaA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Ds2SQ99O.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CT_Tx_FO.js";import"./Grid-D_aaW8Iu.js";import"./styled-lupBF2MK.js";import"./isMuiElement-BDDMqoU0.js";import"./Stack-Ch0vDCre.js";import"./Container-DQWs-8OX.js";import"./index-DN4PVeR-.js";import"./index-DgrfaDhn.js";import"./___vite-browser-external_commonjs-proxy-QrxNotP1.js";import"./index-DUQu9Lss.js";import"./_toKey-DpYDFcYF.js";import"./index-CiFXLyta.js";import"./index-CJEk8w79.js";import"./Tooltip-3XPWX8ag.js";import"./useSlot-DsPkR1Hp.js";import"./mergeSlotProps-ixnHwvJm.js";import"./useForkRef-BtdJvb-F.js";import"./useTimeout-BCyZYTVL.js";import"./useControlled-L_7kh0l2.js";import"./useEventCallback-B6KJfX3V.js";import"./getReactElementRef-Ce2cv_v4.js";import"./Portal-B0VFW4sd.js";import"./utils-4feg5QSW.js";import"./TransitionGroupContext-CUZzTcDE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMD2axpv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CgX6RyGO.js";import"./ButtonBase-BEmwhJpH.js";import"./CircularProgress-CyhGhsVo.js";import"./Button-Do4OGzvj.js";import"./index-BIYW56wV.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BXtElNvn.js";import"./index-CBuxZgVi.js";import"./Alert-p5dQYN5c.js";import"./createSvgIcon-Qu4Q4I06.js";import"./Close-DxXYPAF_.js";import"./AlertTitle-CciKTlRE.js";import"./Dialog-Byz7Ghkt.js";import"./DialogContext-CfHZAwJJ.js";import"./Fade-KpFWzCuU.js";import"./Modal-BLEQPR58.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-m45uhTcp.js";import"./DialogTitle-B4artK5E.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-CFzjPibT.js";import"./DialogContent-Dr7mdQxX.js";import"./DialogContentText-BuhFcqjr.js";import"./index-BiBDMnSv.js";import"./Img-BEi2Q9X-.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BuRWdsJ_.js";import"./LinearProgress-CE0sS8lj.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
