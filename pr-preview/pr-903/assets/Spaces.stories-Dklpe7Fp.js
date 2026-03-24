import{j as p}from"./iframe-BP-fstPH.js";import{P as e}from"./index-Cns2mrxo.js";import{T as o}from"./index-DTL1DK_k.js";import{S as n}from"./index-DDACpU55.js";import{S as m,u as d,a as h}from"./Spaces-BjteWO4z.js";import{Q as S}from"./suspense-BFtb5SYK.js";import{Q as y}from"./queryClient-doAFwZgs.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BbZw2l2T.js";import"./useTheme-8xMS95AC.js";import"./styled-QS_6ePhI.js";import"./memoTheme-CBW4mAKK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BMazaI8i.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-yuve2Yeg.js";import"./Grid-FUwIxOgZ.js";import"./isMuiElement-DVbYF-_U.js";import"./styled-CP91GCBe.js";import"./Stack-DimDvg5e.js";import"./Container-iJP50oB2.js";import"./index-BNFZ0-Ru.js";import"./index-BXvH0f4F.js";import"./___vite-browser-external_commonjs-proxy-BQY9STBd.js";import"./index-DhqxClRF.js";import"./_toKey-DtgcOQ7H.js";import"./index-DbsJp8Qo.js";import"./index-CUBSMbdA.js";import"./Tooltip-CFDxDxIS.js";import"./useSlot-AMpyQgX8.js";import"./mergeSlotProps-CZ6XbOjr.js";import"./useForkRef-kN7FeyJY.js";import"./useTimeout-aFoefsbK.js";import"./useControlled-C1wvNNpf.js";import"./useEventCallback--hrt0XPn.js";import"./getReactElementRef-rCjbZXAY.js";import"./Portal-DXb3wffR.js";import"./utils-ct7xOGzP.js";import"./TransitionGroupContext-CBWt0gZQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B35r-AKt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CG0C3HM8.js";import"./ButtonBase-CN3Lj4mC.js";import"./CircularProgress-CgtN00kw.js";import"./Button-Bi9jGuft.js";import"./index-Ds-ZEgLG.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BNSNkhkk.js";import"./index-B7CmISqd.js";import"./Alert-BWC77ZmA.js";import"./createSvgIcon-CdaKSufU.js";import"./Close-BnHqdXN7.js";import"./AlertTitle-gF3eEEcF.js";import"./Dialog-dR-KKRFr.js";import"./DialogContext-D-LAhsqz.js";import"./Fade-DdOD_q3t.js";import"./Modal-AZaAAX9Q.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Du2lwHJG.js";import"./DialogTitle-BAQuCDFM.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BbIwFoMr.js";import"./DialogContent-BUaQPJCT.js";import"./DialogContentText-C_nWr-tK.js";import"./index-BiBDMnSv.js";import"./Img-B-hEp_sy.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CGGQSRep.js";import"./LinearProgress-Dn8AdF-J.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
