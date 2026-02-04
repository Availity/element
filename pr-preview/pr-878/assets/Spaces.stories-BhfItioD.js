import{j as p}from"./iframe-Cdk6lpWs.js";import{P as e}from"./index-DFhhaSPO.js";import{T as o}from"./index-KsZzlR7V.js";import{S as n}from"./index-Bw-mxMFV.js";import{S as m,u as d,a as h}from"./Spaces-CM8Lx39i.js";import{Q as S}from"./suspense-CeE3uZb4.js";import{Q as y}from"./queryClient-CpBavhNx.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CO31t9g6.js";import"./useTheme-OiEjV3So.js";import"./styled-Da4jwHSl.js";import"./memoTheme-Dnmlp1j3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BiMhXRVd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BUETqROo.js";import"./Grid-D_4fODgZ.js";import"./styled-BDQK8zLY.js";import"./isMuiElement-DCHxCuAf.js";import"./Stack-CISAqHYT.js";import"./Container-BZnG0h-h.js";import"./index-CENY-smM.js";import"./index-BE_PhRIn.js";import"./___vite-browser-external_commonjs-proxy-liDk0pUO.js";import"./index-Bf5PUARD.js";import"./_toKey-Dw8Dv9OP.js";import"./index-BsAfukHX.js";import"./index-CywYuil6.js";import"./Tooltip-BgHK4L6p.js";import"./useSlot-D-PxlIN3.js";import"./mergeSlotProps-DMc6LXK-.js";import"./useForkRef-BBp7hlnJ.js";import"./useTimeout-CIy7F0jL.js";import"./useControlled-QHn5S2wL.js";import"./useEventCallback-vVwk_Y3I.js";import"./getReactElementRef-ABpHVkKM.js";import"./Portal-Ci08Bzea.js";import"./utils-DiARjLYz.js";import"./TransitionGroupContext-DcA7Ut_f.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CRphJa0r.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-2-tk2V1a.js";import"./ButtonBase-CJIyK2Pl.js";import"./CircularProgress-CILK_PUp.js";import"./Button-CkMj2wnd.js";import"./index-3GTxF1kd.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BMF15TUB.js";import"./index-b9tC0pFc.js";import"./Alert-pJDeBaA5.js";import"./createSvgIcon-1kVfY1hj.js";import"./Close-DI06AlJO.js";import"./AlertTitle-CoSVW4wi.js";import"./Dialog-BemCMp8d.js";import"./DialogContext-B39XAXji.js";import"./Fade-B5dkP1J3.js";import"./Modal-C-Sdy15n.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BehU8qli.js";import"./DialogTitle-DPSEiveY.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-gI_ZIwQg.js";import"./DialogContent-BN3pn7cT.js";import"./DialogContentText-gohzvlKm.js";import"./index-BiBDMnSv.js";import"./Img-C3RipxEd.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BsDpgSFT.js";import"./LinearProgress-D_Mcv3ft.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
