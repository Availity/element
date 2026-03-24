import{j as p}from"./iframe-BXw3gXzi.js";import{P as e}from"./index-CLVk1EvH.js";import{T as o}from"./index-DgW2N-xw.js";import{S as n}from"./index-tCOiXdlf.js";import{S as m,u as d,a as h}from"./Spaces-3LAtkUb6.js";import{Q as S}from"./suspense-DiktpFJ7.js";import{Q as y}from"./queryClient-BgEvXfZK.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DAJ4kOlQ.js";import"./useTheme-BMbLtIQ2.js";import"./styled-B4C1j5cm.js";import"./memoTheme-Cun1OYGu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BaC1f153.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BM1JqmYM.js";import"./Grid-BGtXNav_.js";import"./isMuiElement-HwGtkGEy.js";import"./styled-C8dNPj49.js";import"./Stack-BuTN3X4b.js";import"./Container-BCT1HrQN.js";import"./index-D-R_J93y.js";import"./index-ujimlIq_.js";import"./___vite-browser-external_commonjs-proxy-FWM20rQt.js";import"./index-CziuDJRf.js";import"./_toKey-WKv7aBz5.js";import"./index-Cx3SFk4o.js";import"./index-DejzIRML.js";import"./Tooltip-ByULunc2.js";import"./useSlot-ChptDOQ0.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./useTimeout-0uXpumKy.js";import"./useControlled-B4VTwyPs.js";import"./useEventCallback-3YhfTi0L.js";import"./getReactElementRef-DHOcIADn.js";import"./Portal-7KnvOddD.js";import"./utils-xtkVmQdP.js";import"./TransitionGroupContext-M8heGJda.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-yzZ17Wp2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DeurSYdO.js";import"./ButtonBase-BTnZicAm.js";import"./CircularProgress-DhFZnFeX.js";import"./Button-BgBpxWh8.js";import"./index-DQ-Pw2vZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-WyGfIbWv.js";import"./index-BP5xBfwD.js";import"./Alert-BwwPsaDR.js";import"./createSvgIcon--3tSNQ0H.js";import"./Close-CAtJECmA.js";import"./AlertTitle-DJ56rN9H.js";import"./Dialog-4nNWkK2I.js";import"./DialogContext-CNJxRdx8.js";import"./Fade-D_YaJ4fg.js";import"./Modal-C_gnWSEE.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D7s4TJBu.js";import"./DialogTitle-Dicw4ztr.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CwRvTY4H.js";import"./DialogContent-BPhTKBWy.js";import"./DialogContentText-C7zCLNeH.js";import"./index-BiBDMnSv.js";import"./Img-BtVhEU_7.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DYiFLefs.js";import"./LinearProgress-DDW7ORsT.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
