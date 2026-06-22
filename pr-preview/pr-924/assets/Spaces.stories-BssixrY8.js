import{j as p}from"./iframe-BdOkmXSO.js";import{P as e}from"./Paper-BEO0J0KI.js";import{T as o}from"./Typography-BP7E3Z2h.js";import{S as n}from"./Stack-Bvj_iASD.js";import{Q as d}from"./suspense-CppDwvWk.js";import{a as m,u as h,b as S}from"./Spaces-CT1ecZ-O.js";import{Q as y}from"./queryClient-Co5EoLfQ.js";import"./preload-helper-Dab_6GC_.js";import"./Paper-X002pFu5.js";import"./useTheme-DpzwBSOw.js";import"./styled-ntycrLPJ.js";import"./memoTheme-Dp1NrYg6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Ba-r-irp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Stack-CkMIcmCj.js";import"./styled-NjTlQkCK.js";import"./index-CRxIUl4L.js";import"./index-BZLdTlCl.js";import"./___vite-browser-external_commonjs-proxy-D-t058PY.js";import"./index-CUaLnuLN.js";import"./Dialog-CbbQIxQP.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./useTimeout-yhleNqH_.js";import"./useControlled-wRMaIAhC.js";import"./useEventCallback-Ci1dFtlM.js";import"./getReactElementRef-CAZnW1NE.js";import"./Grow-zcR73JmX.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C66xLdI-.js";import"./ButtonBase-D0mr5YFJ.js";import"./CircularProgress-BtHd2z-U.js";import"./Actions-j5ZzHduY.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./Dialog-B-kpVC9v.js";import"./DialogContext-Cyj82uMB.js";import"./Modal-C2ZApFn6.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHtRMzsl.js";import"./Fade-BJ4yz3if.js";import"./DialogActions-BKnwWNQi.js";import"./DialogActions-Cc_6uZ23.js";import"./DialogTitle-BxpGZRmr.js";import"./Alert-CSWcSWY9.js";import"./Form-Dy8jxpW5.js";import"./Alert-Dv8Vaeap.js";import"./createSvgIcon-B1lFLeS5.js";import"./Close-CNJCk13c.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./Button-T_obMJ3V.js";import"./Button-NnJ9RF69.js";import"./index-CrcoPoGw.js";import"./CircularProgress-BjPKeL0P.js";import"./DialogContent-DpFO02TP.js";import"./DialogContent-UxQm40hF.js";import"./Box-Bqo_5F9J.js";import"./Box-DXcrr7iM.js";import"./Grid-C8TSgpaR.js";import"./Grid-BUOsnAxa.js";import"./isMuiElement-v3aJqbSB.js";import"./toPropertyKey-DCwh5dYN.js";const Bp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dp=["_Spaces"];export{i as _Spaces,Dp as __namedExportsOrder,Bp as default};
