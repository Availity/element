import{j as p}from"./iframe-VmT73p94.js";import{P as e}from"./index-Z6FFaOF9.js";import{T as o}from"./index-DarVdReZ.js";import{S as n}from"./index-CUHhPe5b.js";import{S as m,u as d,a as h}from"./Spaces-DLq4l3dG.js";import{Q as S}from"./suspense-b00f3bJk.js";import{Q as y}from"./queryClient-ok5bL2TB.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DQLSkWvh.js";import"./useTheme-COUM0_Su.js";import"./styled-DVm59HJf.js";import"./memoTheme-CW0LOUve.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-B3jjC7CW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CvMegSiU.js";import"./Grid-Bmv36tXm.js";import"./styled-D1-ZAWkh.js";import"./isMuiElement-Bqpdq4Yq.js";import"./Stack-DZgcNSaF.js";import"./Container-BVb-1dj-.js";import"./index-CbkDeIW7.js";import"./index-DL3HEuLS.js";import"./___vite-browser-external_commonjs-proxy-DqSJPQhn.js";import"./index-CrIvZYvG.js";import"./_toKey-B8wbD7jq.js";import"./index-DZu4PJUf.js";import"./index-HUpkhuIg.js";import"./Tooltip-BRQG12-b.js";import"./useSlot-BmxE9uZS.js";import"./mergeSlotProps-B8SRg1CI.js";import"./useForkRef-Ctnrtb-D.js";import"./useTimeout-BprXv5F8.js";import"./useControlled-BjbV18t2.js";import"./useEventCallback-C3cbUdrm.js";import"./getReactElementRef-ft3Uw4WU.js";import"./Portal-BwXxrIv3.js";import"./utils-ByQY0EBI.js";import"./TransitionGroupContext-CeVXvV0a.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DY7-TJQW.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Br45PAbc.js";import"./ButtonBase-BXyceE0h.js";import"./CircularProgress-CrZ4k3FD.js";import"./Button-zpUHMDEI.js";import"./index-Cb5v9xcC.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-OqnDZfg-.js";import"./index-BYkSGvzB.js";import"./Alert-PtRZKPEO.js";import"./createSvgIcon-CHar5Fph.js";import"./Close-Dm2w8ffc.js";import"./AlertTitle-1Ir1gEXL.js";import"./Dialog-Ce6QHCwh.js";import"./DialogContext-DyE3lkdr.js";import"./Fade-NocNkBOI.js";import"./Modal-DFppbk7B.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CtDRaPiM.js";import"./DialogTitle-DFrKXKxB.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-z9HLU6Wt.js";import"./DialogContent-BQzJFF50.js";import"./DialogContentText-DImjvUMO.js";import"./index-BiBDMnSv.js";import"./Img-BIgNGffb.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DcCj4Oqq.js";import"./LinearProgress-CGuiLOvt.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
