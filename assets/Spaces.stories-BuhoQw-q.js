import{j as p}from"./iframe-TaNZkFdX.js";import{P as e}from"./index-D_6p8v4I.js";import{T as o}from"./index-CvI2ruD5.js";import{S as n}from"./index-BDHwWUp_.js";import{Q as d}from"./suspense-C1rqFQ3y.js";import{S as m,u as h,a as S}from"./Spaces-CfOZn5r2.js";import{Q as y}from"./queryClient-CtrPya-n.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DmzWjV3O.js";import"./useTheme-BwMLg3Cm.js";import"./styled-B4LT_xKE.js";import"./memoTheme-DWNFUNe8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-01frBhx_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-B6-W-G0J.js";import"./Grid-CXWUeHQh.js";import"./isMuiElement-D3gl8ezB.js";import"./styled-Dk8RL2_h.js";import"./Stack-CHbD9DWZ.js";import"./Container-Bw0hRcvj.js";import"./Img-BsjViAfI.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-D0ROOKOz.js";import"./index-B_tcZaAt.js";import"./___vite-browser-external_commonjs-proxy-BZtc6z5Q.js";import"./index-CY8VLdQ2.js";import"./index-BMlVSLJV.js";import"./index-B97OVu1W.js";import"./IconButton-Bj0GebPw.js";import"./ButtonBase-hN41DD3n.js";import"./useTimeout-6mINgJ0s.js";import"./TransitionGroupContext-DNirSs3q.js";import"./useForkRef-BWA77Ou0.js";import"./useEventCallback-Mv5Tf1uh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-UQNWqsj-.js";import"./Tooltip-NifhenR9.js";import"./useSlot-C54pGJsm.js";import"./mergeSlotProps-I1tu7yOe.js";import"./useControlled-DvjtXf7N.js";import"./getReactElementRef-CAOV2LsM.js";import"./Portal-bQbDJznY.js";import"./utils-DLs5F192.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DaoY2z77.js";import"./Button-BwGYoRWi.js";import"./index-DQOdSWXL.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DJOFM4ge.js";import"./index-CHGdGzuJ.js";import"./Alert-3e-9248b.js";import"./createSvgIcon-gxV3qIoY.js";import"./Close-DkVKVlG0.js";import"./AlertTitle-DXDOfZNf.js";import"./Dialog-BiBoxfRw.js";import"./DialogContext-BGPCm3gr.js";import"./Modal-C4RwlORl.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-aCYOBwWa.js";import"./Fade-CJipK2zd.js";import"./DialogTitle-BIaFmK8V.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Dbe2reCZ.js";import"./DialogContent-DO0gTY8O.js";import"./DialogContentText-BmPAcamt.js";import"./index-MVgG_W0q.js";import"./index-DnWFUxbX.js";import"./LinearProgress-CB_sUQEl.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
