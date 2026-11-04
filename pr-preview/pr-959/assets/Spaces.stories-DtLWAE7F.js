import{j as p}from"./iframe-La0hozmm.js";import{P as e}from"./index-CVxIkWKb.js";import{T as o}from"./index-OkwykyCM.js";import{S as n}from"./index-eHZf6pHN.js";import{Q as d}from"./suspense-CKiPZMHe.js";import{S as m,u as h,a as S}from"./Spaces-Ds3y3gle.js";import{Q as y}from"./queryClient-1i1OxbRg.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BvBPQPSI.js";import"./useTheme-D5kgDNuB.js";import"./styled-06PLk0qx.js";import"./memoTheme-CzcgztNR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-F8uVoBR9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-B4jhZySH.js";import"./Grid-DTxUT0NX.js";import"./isMuiElement-VxhL7QTS.js";import"./styled-99JPjMFe.js";import"./Stack-COfd3H0w.js";import"./Container-Bl6cg8Xd.js";import"./Img-ClP78MRd.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-y8X2dNNL.js";import"./index-ClM2XKlh.js";import"./___vite-browser-external_commonjs-proxy-D0Oqq-kF.js";import"./index-CY8VLdQ2.js";import"./index-DA-82Ql7.js";import"./index-CT5mpeGo.js";import"./IconButton-BEf7IA6l.js";import"./ButtonBase-RNjBI3PY.js";import"./useTimeout-CjP9kdgI.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useForkRef-CYgSXLxN.js";import"./useEventCallback-CkMNQS0_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKXLIFka.js";import"./Tooltip-DDgYhS1x.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useControlled-DV2EMPBp.js";import"./getReactElementRef-TIeMXNsW.js";import"./Portal-QPUTbchU.js";import"./utils-C_Yf081A.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-o4xrbGrj.js";import"./Button-x0oW_Zme.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BIfisKmW.js";import"./index-DAsW7_Z1.js";import"./Alert-DpQUQzzA.js";import"./createSvgIcon-CogVIOis.js";import"./Close-B_nlfjmT.js";import"./AlertTitle-B7XK45KE.js";import"./Dialog-BbSrQoyR.js";import"./DialogContext-DqtDV0tt.js";import"./Modal-lk5DA8tl.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHVJATGi.js";import"./Fade-DsXUXhXd.js";import"./DialogTitle-CX2LKPZV.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-N86slMAE.js";import"./DialogContent-cBZq087g.js";import"./DialogContentText-D8UV0ANj.js";import"./index-MVgG_W0q.js";import"./index-DAwBG90N.js";import"./LinearProgress-YO1m63Sr.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
