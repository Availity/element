import{j as p}from"./iframe-C99277Jn.js";import{P as e}from"./index-BO7sJviq.js";import{T as o}from"./index-FIATZ7h1.js";import{S as n}from"./index-y3fpgOs1.js";import{S as m,u as d,a as h}from"./Spaces-ADDQITET.js";import{Q as S}from"./suspense-CD0AGWUG.js";import{Q as y}from"./queryClient-CvIYCF5n.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-YQNMXe3n.js";import"./useTheme-rB5ljihk.js";import"./styled-BSyyF-nm.js";import"./memoTheme-BcCvxPZB.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-ZltxThzN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-XJPq1vP8.js";import"./Grid-iRC4uFdh.js";import"./isMuiElement-nAYICNXy.js";import"./styled-CKZ50tVK.js";import"./Stack-DydGXCUI.js";import"./Container-CFzAHwrR.js";import"./index-BjYhjIdM.js";import"./index-D0-rmQLG.js";import"./___vite-browser-external_commonjs-proxy-B3BvfgAL.js";import"./index-CqGaOivi.js";import"./_toKey-Brw-ZAfO.js";import"./index-_Eten_8G.js";import"./index-BLVZqh54.js";import"./Tooltip-1HJoGAor.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./useTimeout-Dw4BvZaa.js";import"./useControlled-DV2QdfFp.js";import"./useEventCallback-BvtgHlfy.js";import"./getReactElementRef-Bs67iJIN.js";import"./Portal-rCUOv2ZO.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CQi1oJfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-GExIkIsQ.js";import"./ButtonBase-B6dKL5Sm.js";import"./CircularProgress-DWs2PQSt.js";import"./Button-D7NhHobB.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BaWfF9je.js";import"./index-N22BVfFz.js";import"./Alert-BakFFxZ8.js";import"./createSvgIcon-Cab5rVDr.js";import"./Close-DOd84hl1.js";import"./AlertTitle-CyxVbuXY.js";import"./Dialog-CDs6gA7B.js";import"./DialogContext-BH0nVk3v.js";import"./Fade-DTvpgJPw.js";import"./Modal-BSnsGlt8.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CPg3TVnd.js";import"./DialogTitle-BJSFntjn.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-OnGHfwjr.js";import"./DialogContent-BlTdK2fs.js";import"./DialogContentText-BMMt2iOQ.js";import"./index-BiBDMnSv.js";import"./Img-XIUkBjIw.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Dfr4C4PN.js";import"./LinearProgress-CVizUBxr.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
