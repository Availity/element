import{j as p}from"./iframe-DbrIJLQi.js";import{P as e}from"./index-CYbneiSx.js";import{T as o}from"./index-uxKHXzQl.js";import{S as n}from"./index-D9nQZvQo.js";import{Q as d}from"./suspense-DYwDfxsZ.js";import{S as m,u as h,a as S}from"./Spaces-weFYYWDd.js";import{Q as y}from"./queryClient-DR1I2pIh.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CCVHPuGA.js";import"./useTheme-DYW2Qal8.js";import"./styled-7I1Qt9E3.js";import"./memoTheme-CYnUbeeS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CJOV5VVW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-ddZNUx2x.js";import"./Grid-D3_qV-Fz.js";import"./isMuiElement-2h_sD4kS.js";import"./styled-DMMrRL0j.js";import"./Stack-H1A63kiw.js";import"./Container-B1a9E6oy.js";import"./Img-B-zXQxFs.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-eGgQknTF.js";import"./index-DncEkrls.js";import"./___vite-browser-external_commonjs-proxy-DxbviS0p.js";import"./index-CfcGBtrm.js";import"./index-BX-NoBQe.js";import"./index-BviXD-l_.js";import"./Tooltip-Dj2v8eaN.js";import"./useSlot-ucEwirIM.js";import"./mergeSlotProps-D6Q6z-MA.js";import"./useForkRef-xHQCOq-i.js";import"./useTimeout-0bEjAxlE.js";import"./useControlled-DZAExesg.js";import"./useEventCallback-GRDf_Mdq.js";import"./getReactElementRef-CTToKV8F.js";import"./Portal-CRDltpFP.js";import"./utils-C3QXpwtY.js";import"./TransitionGroupContext-bpHC9icU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHkbcgjp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-FVSq3BNJ.js";import"./ButtonBase-BHclRNV-.js";import"./CircularProgress-HcGcr7gk.js";import"./Button-CzxszAvI.js";import"./index-BV8EXEzP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DkLovEvc.js";import"./index-iNCv3NbR.js";import"./Alert-CoQKqxGf.js";import"./createSvgIcon-GCeLsGHA.js";import"./Close-BwrnJGzX.js";import"./AlertTitle-cO-QjXdt.js";import"./Dialog-BzwhqSja.js";import"./DialogContext-DMpPiwWm.js";import"./Modal-DerH6gqI.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BxUsxFSD.js";import"./Fade-BisiffpU.js";import"./DialogTitle-k3QX2yJZ.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-B5yzUAFM.js";import"./DialogContent-bqPvHxrs.js";import"./DialogContentText-CYn_C-2r.js";import"./index-CrcoPoGw.js";import"./index-f2vg4op8.js";import"./LinearProgress-DRcefdJJ.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
