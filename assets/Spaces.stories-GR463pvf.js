import{j as p}from"./iframe-igAdvFbl.js";import{P as e}from"./index-BBkFpnwf.js";import{T as o}from"./index-ChMWNEv3.js";import{S as n}from"./index-z9cH4Dkd.js";import{Q as d}from"./suspense-Bt8h633A.js";import{S as m,u as h,a as S}from"./Spaces-BupGGGR-.js";import{Q as y}from"./queryClient-C0EdMpmm.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-ClVD0o31.js";import"./useTheme-CIUac4TP.js";import"./styled-91ph4J30.js";import"./memoTheme-CLnB_uxM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D8sokpBT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BVxISqTJ.js";import"./Grid-DZVhVXMq.js";import"./isMuiElement-BIGdb7v5.js";import"./styled-Ai7RJ0M0.js";import"./Stack-BIYUXFFU.js";import"./Container-DJJd4hOz.js";import"./Img-BehVn1MQ.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-pI1FnI-C.js";import"./index-BlGn_Li3.js";import"./___vite-browser-external_commonjs-proxy-CKbPVC5y.js";import"./index-CY8VLdQ2.js";import"./index-BT-xTknT.js";import"./index-C0-lL2nR.js";import"./IconButton-C_pwG3tG.js";import"./ButtonBase-B-BThNWO.js";import"./useTimeout-BVAWMZsv.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useForkRef-D-t6gd0T.js";import"./useEventCallback-CsTRRlXt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W3XJwf44.js";import"./Tooltip-Cq44iNEt.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useControlled-CFxyCb-W.js";import"./getReactElementRef-B9sY4O0b.js";import"./Portal-CXKAB8qb.js";import"./utils-BtrN11DB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-IKBnSf1M.js";import"./Button-Cul-JvC2.js";import"./index-LwuFN9gm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bjb7RMXU.js";import"./index-CmSTrFPu.js";import"./Alert-FSGa90Ge.js";import"./createSvgIcon-D2IPPG_U.js";import"./Close-zMHLptrc.js";import"./AlertTitle-aTF0v_6t.js";import"./Dialog-CHuA8xqL.js";import"./DialogContext-C1zbciX4.js";import"./Modal-Xx_DAuxP.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ML0QiAd8.js";import"./Fade-D_O_c1g4.js";import"./DialogTitle-DjgDWq8O.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-l2ncjMOV.js";import"./DialogContent-DuxQTV7v.js";import"./DialogContentText-BvIN9B5j.js";import"./index-MVgG_W0q.js";import"./index-B3LiNsBz.js";import"./LinearProgress-cwg1GYu5.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
