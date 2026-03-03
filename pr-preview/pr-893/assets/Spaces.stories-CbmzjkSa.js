import{j as p}from"./iframe-Dv1Hb7kF.js";import{P as e}from"./index-CARN1eJ5.js";import{T as o}from"./index-B7n_TIRx.js";import{S as n}from"./index-B87WwVT5.js";import{S as m,u as d,a as h}from"./Spaces-DAZ6NlMy.js";import{Q as S}from"./suspense-DPCZn-8r.js";import{Q as y}from"./queryClient-TY8OsCJK.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DYUOfCQ3.js";import"./useTheme-CGsP9Gxx.js";import"./styled-89sVFKyy.js";import"./memoTheme-BBZRIDpe.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Lwv6roC7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BHuPsdf_.js";import"./Grid-DHp-nl__.js";import"./isMuiElement-CfSIe_7M.js";import"./styled-VmFmZdM9.js";import"./Stack-Cs6IioTg.js";import"./Container-BOWYat-a.js";import"./index-CzAnwH0P.js";import"./index-DcDvbE2l.js";import"./___vite-browser-external_commonjs-proxy-D8ypgdq-.js";import"./index-DACw6K-J.js";import"./_toKey-BTEnA2Hx.js";import"./index-BXa8nSnK.js";import"./index-BBTP1ICE.js";import"./Tooltip-johHX3Tw.js";import"./useSlot-D3-97Bpj.js";import"./mergeSlotProps-CVQXFPJk.js";import"./useForkRef-DHvmsRje.js";import"./useTimeout-CU6v0sK-.js";import"./useControlled-wUW2FFSG.js";import"./useEventCallback-BE-Xh8QX.js";import"./getReactElementRef-87-1wWv5.js";import"./Portal-nZmp6a4c.js";import"./utils-BsA11HdC.js";import"./TransitionGroupContext-C2v-exTz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-8Sv9aFcC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-X5Y4CM4M.js";import"./ButtonBase-B7Edy8zQ.js";import"./CircularProgress-D7Y0JvGB.js";import"./Button-B4ml1k34.js";import"./index-B9y9IGGa.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5pvqgcrC.js";import"./index-Bukh5E7r.js";import"./Alert-BlKq5dow.js";import"./createSvgIcon-cwUD_L_o.js";import"./Close-CfPkaIeP.js";import"./AlertTitle-D_0pIcIQ.js";import"./Dialog-jSt_M1xa.js";import"./DialogContext-BnWnDpEr.js";import"./Fade-B9vTzmTP.js";import"./Modal-u03eQQEl.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B0FQGZ20.js";import"./DialogTitle-AOD7ILYT.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D4ID92Ry.js";import"./DialogContent-BMB72KzM.js";import"./DialogContentText-DaqOqDnw.js";import"./index-BiBDMnSv.js";import"./Img-Ccp8owAQ.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-1stJCGTk.js";import"./LinearProgress-nF_TgyKT.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
