import{j as p}from"./iframe-DPnTQG0G.js";import{P as e}from"./index-CKyLzbz1.js";import{T as o}from"./index-DvMAIlq4.js";import{S as n}from"./index-CsNDMedn.js";import{Q as d}from"./suspense-Bx1DnDYl.js";import{S as m,u as h,a as S}from"./Spaces-DeTmaXrq.js";import{Q as y}from"./queryClient-D0hQ_bZl.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CfCnRjNa.js";import"./useTheme-DIidgVEY.js";import"./styled-B3r2fqeJ.js";import"./memoTheme-CMfgY8Ge.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BE3nbQ7X.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BwT9D1D3.js";import"./Grid-C4qiCYbq.js";import"./isMuiElement-BqwjpEeh.js";import"./styled-DTgt2DI8.js";import"./Stack-CUFjbj2M.js";import"./Container-Dg-G3qaT.js";import"./Img-BH5jZ8Qq.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DREgSyd0.js";import"./index-lHfpG96z.js";import"./___vite-browser-external_commonjs-proxy-tOSw4hYJ.js";import"./index-ouDB7UmS.js";import"./index-BsKawpQG.js";import"./index-B7O5cvxg.js";import"./IconButton-DddGcaV5.js";import"./ButtonBase-C2F6Y1bD.js";import"./useTimeout-CUwsoYp8.js";import"./TransitionGroupContext-BMEataXp.js";import"./useForkRef-B-MdRiiy.js";import"./useEventCallback-jzoMkJU2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BvBmh-xb.js";import"./Tooltip-oUWx7pT_.js";import"./useSlot-CA9InCnB.js";import"./mergeSlotProps-BoQagQxu.js";import"./useControlled-DDdRMWyJ.js";import"./getReactElementRef-Bl_fL_Lc.js";import"./Portal-DFXYbKgm.js";import"./utils-BzkU8P15.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTR8zjwb.js";import"./Button-D8f966mF.js";import"./index-DyrAPJez.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BFzjjt5D.js";import"./index-xpBzcFAp.js";import"./Alert-B_hWHIp6.js";import"./createSvgIcon-o5Z7wc8L.js";import"./Close-Bho1xGhu.js";import"./AlertTitle-B8-vl0cN.js";import"./Dialog-JIMY-Lr1.js";import"./DialogContext-C3mD67Gd.js";import"./Modal-CcK1uO_P.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ByDG0JKY.js";import"./Fade-Bvo7Nuzl.js";import"./DialogTitle-CpYTwGAN.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DKW0Ohd0.js";import"./DialogContent-C2ELLIJb.js";import"./DialogContentText-DLzTp9Lf.js";import"./index-CrcoPoGw.js";import"./index-CbZMFLzK.js";import"./LinearProgress-D_i46OWS.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
