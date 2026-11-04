import{j as p}from"./iframe-B7It4zq8.js";import{P as e}from"./index-Cs6zky6n.js";import{T as o}from"./index-B9JugXxe.js";import{S as n}from"./index-NPVdg4Et.js";import{Q as d}from"./suspense-faveYIPl.js";import{S as m,u as h,a as S}from"./Spaces-BKJrN7vK.js";import{Q as y}from"./queryClient-DgRtG9I1.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-16eSpGwX.js";import"./useTheme-BEYyhBmQ.js";import"./styled-Bn4RjmYR.js";import"./memoTheme-CGf3L_ek.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D5VLn6r5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DCJTclMn.js";import"./Grid-A8igwbvH.js";import"./isMuiElement-Co847M5i.js";import"./styled-DnXB-Vry.js";import"./Stack-KZSUJmtQ.js";import"./Container-DFLwTEF8.js";import"./Img-DVR_R3GQ.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CyfbJBF5.js";import"./index-Ceu2PZpV.js";import"./___vite-browser-external_commonjs-proxy-BlBmhHyD.js";import"./index-CY8VLdQ2.js";import"./index-CpH8NM-M.js";import"./index-U6rGSuo_.js";import"./IconButton-C-t-b5Lt.js";import"./ButtonBase-B2waO-fK.js";import"./useTimeout-YUVk49Nr.js";import"./TransitionGroupContext-DcJKCyB0.js";import"./useForkRef-CPn4J3x7.js";import"./useEventCallback-C74dKXBI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B2uMItbz.js";import"./Tooltip-CzJoUoCR.js";import"./useSlot-W932GJWf.js";import"./mergeSlotProps-D605olu0.js";import"./useControlled-D_SZmVUM.js";import"./getReactElementRef-DdXJtssw.js";import"./Portal-Dv_fvGmT.js";import"./utils-8hf5HdRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-5kTH7JUJ.js";import"./Button-BIhtYg5K.js";import"./index-DahGL3Ws.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CN80xc_w.js";import"./index-qq87wHed.js";import"./Alert-Cg60ZnQw.js";import"./createSvgIcon-mTQeEUrk.js";import"./Close-C2tp-l78.js";import"./AlertTitle-CpDUr6Aq.js";import"./Dialog-C8yplprO.js";import"./DialogContext-DmJpevMr.js";import"./Modal-XCKy5Q-Z.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CMsbxjXn.js";import"./Fade-dOEIYsg7.js";import"./DialogTitle-B2LLEC84.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CvstoWit.js";import"./DialogContent-Bf00psR1.js";import"./DialogContentText-DVse3Kvq.js";import"./index-MVgG_W0q.js";import"./index-FeSmimA5.js";import"./LinearProgress-DWXP_8Ur.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
