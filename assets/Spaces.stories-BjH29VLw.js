import{j as p}from"./iframe-CwayONq3.js";import{P as e}from"./index-q2qMZHtk.js";import{T as o}from"./index-D86jrWk5.js";import{S as n}from"./index-C55j7MuO.js";import{Q as d}from"./suspense-O0DXezdF.js";import{S as m,u as h,a as S}from"./Spaces-C4TIvW6t.js";import{Q as y}from"./queryClient-2k_Ko9lY.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DlpHeBlY.js";import"./useTheme-DZN2Ghm1.js";import"./styled-WjtpYKzZ.js";import"./memoTheme-CSn7n7-0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CDQ-d4mK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-C4nPPECx.js";import"./Grid-DathB-g2.js";import"./isMuiElement-sqB-nJpP.js";import"./styled-C0MvsQi9.js";import"./Stack-k-008in-.js";import"./Container-BUicGBFY.js";import"./Img-CrqJkGqP.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DIZXZRWI.js";import"./index-Bf04OlcH.js";import"./___vite-browser-external_commonjs-proxy-DMVweGvg.js";import"./index-D0NWAu9R.js";import"./index-DFtp3onc.js";import"./index-rzzKeWqc.js";import"./IconButton-XSGXEsQ5.js";import"./ButtonBase-3L383qSX.js";import"./useTimeout-DzhE3XW1.js";import"./TransitionGroupContext-Bu4CoR7O.js";import"./useForkRef-Cy6dgODW.js";import"./useEventCallback-Cc5Qaj1M.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CcJveUId.js";import"./Tooltip-px23ZV-t.js";import"./useSlot-ar6Q8od1.js";import"./mergeSlotProps-BztucupI.js";import"./useControlled-H2-lqa1O.js";import"./getReactElementRef-CjqPEX8j.js";import"./Portal-B5eAGKeX.js";import"./utils-BJivSKBX.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C4DgWBnT.js";import"./Button-hBir-_1a.js";import"./index-FoJb9FyM.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dok2DrMx.js";import"./index-DPaB5qTM.js";import"./Alert-BLUMuMJ3.js";import"./createSvgIcon-DSjYKgaH.js";import"./Close-BFvihe5l.js";import"./AlertTitle-BbwSyUOQ.js";import"./Dialog-DXhSavcN.js";import"./DialogContext-CIgaWphC.js";import"./Modal-DN1-xy7q.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BYFYfQXf.js";import"./Fade-DXm-QaGZ.js";import"./DialogTitle-CXphqBEb.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-B2OG4-PC.js";import"./DialogContent-JmGPyog1.js";import"./DialogContentText-Cr0h5OMz.js";import"./index-CrcoPoGw.js";import"./index-Cdg12vV3.js";import"./LinearProgress-DwF0-0A7.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
