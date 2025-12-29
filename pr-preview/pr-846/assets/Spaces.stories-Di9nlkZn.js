import{j as p}from"./iframe-CJLLcML8.js";import{P as t}from"./index-C84A8wI8.js";import{T as i}from"./index-Dtyzz0Aq.js";import{S}from"./index-D75YOOsa.js";import{S as d,u as y,a as l}from"./Spaces-yQSDpEsp.js";import{Q as u}from"./suspense-Bq3qpeE3.js";import{Q as x}from"./queryClient-DkJBmT0q.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Ckh12xdI.js";import"./useTheme-xHPwzHWg.js";import"./styled-B7le8MWV.js";import"./memoTheme-BPg8_iBl.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D_pkt0MV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BuKoPa3R.js";import"./Grid-DjNI_6Ef.js";import"./styled-u61wxLO2.js";import"./isMuiElement-DVNv0xWp.js";import"./Stack-Rx154AVC.js";import"./Container-1fjr_go_.js";import"./index-CEu1gAoZ.js";import"./index-Dx9RdmXm.js";import"./___vite-browser-external_commonjs-proxy-BUo7wLkX.js";import"./index-D2TaPIAK.js";import"./_toKey-DkOfmtF9.js";import"./index-zrnNI8sN.js";import"./index-CsEAkofl.js";import"./Tooltip-KzdkIRNP.js";import"./useSlot-DNA5Cnoe.js";import"./mergeSlotProps-Do_erTC-.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CMYI3Eu9.js";import"./useTimeout-BDHAbL-Z.js";import"./useControlled-CvR5zcEM.js";import"./useEventCallback-CaMR-E7T.js";import"./getReactElementRef-CwAmIBs7.js";import"./Portal-TXv_ZwAZ.js";import"./utils-CcsuvtaX.js";import"./TransitionGroupContext-6F5e1B-G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DOvHvxlg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOgoFyJ3.js";import"./ButtonBase-BKbTUVR3.js";import"./CircularProgress-RWvPhipq.js";import"./Button-BS9NNOwE.js";import"./index-C2z6S83Q.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-nGyHStYX.js";import"./index-Dou3-0Yz.js";import"./Alert-CSXX8OAm.js";import"./createSvgIcon-1XqqLt2A.js";import"./Close-y44Tsh3s.js";import"./AlertTitle-CqzZu84e.js";import"./Dialog-C876lFGl.js";import"./DialogContext-gFhDSuEp.js";import"./Fade-Dl1RkEkt.js";import"./Modal-BMIrjP1v.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BvruHGhP.js";import"./DialogTitle-D4nQO5Xd.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-gGJAG7qg.js";import"./DialogContent-Dx6SHs2A.js";import"./DialogContentText-B2mflM2E.js";import"./index-DS1ZdVNz.js";import"./Img-Dem31REb.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Br3TWWLG.js";import"./LinearProgress-Cb72qHSz.js";import"./index-BHbyHxZm.js";import"./index-VpMbi36k.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const Lp=["_Spaces"];export{s as _Spaces,Lp as __namedExportsOrder,Kp as default};
