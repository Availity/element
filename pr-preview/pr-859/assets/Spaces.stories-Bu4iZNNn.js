import{j as p}from"./iframe-PQChuD5P.js";import{P as e}from"./index-B47zZTRi.js";import{T as o}from"./index-D5f8Vp7A.js";import{S as n}from"./index-CWw8B1ja.js";import{S as m,u as d,a as h}from"./Spaces-J1F76lco.js";import{Q as S}from"./suspense-DEumlA4G.js";import{Q as y}from"./queryClient-WCbpO43W.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DzmRSJAJ.js";import"./useTheme-D_lM5llQ.js";import"./styled-IO14y-za.js";import"./memoTheme-CVvKr3an.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-C-i-WVAF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DSvqrQJU.js";import"./Grid-DbL14Ouo.js";import"./styled-C9qQOw_O.js";import"./isMuiElement-BKekQHvL.js";import"./Stack-DzAEF9zt.js";import"./Container-BWtWb0u_.js";import"./index-DVEc2Vv3.js";import"./index-DfTyqBN3.js";import"./___vite-browser-external_commonjs-proxy-y8cwOC0Q.js";import"./index-Xdeyw5Qm.js";import"./_toKey-Bs2E6uDX.js";import"./index-CdCWOqIf.js";import"./index-CPbMBP85.js";import"./Tooltip-D_0sM1X3.js";import"./useSlot-Budp5-i0.js";import"./mergeSlotProps-D2tsKCVf.js";import"./useForkRef-CKG9IprU.js";import"./useTimeout-CrdRO3z-.js";import"./useControlled-DL9Iut2g.js";import"./useEventCallback-CVuBVoUk.js";import"./getReactElementRef-CkDqfdPm.js";import"./Portal-CcwI5hbz.js";import"./utils-Bn3set7p.js";import"./TransitionGroupContext-4uG2Mcc_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-NXvv48zc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-uRCWfHSj.js";import"./ButtonBase-DrAbzSCI.js";import"./CircularProgress-C9w8hYD6.js";import"./Button-J7D5oBem.js";import"./index-B-1E6jc-.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-Ct-k9MaL.js";import"./index-CpVJRnF1.js";import"./Alert-q4zeF70y.js";import"./createSvgIcon-DUCTV8Uh.js";import"./Close-B8qIlG4s.js";import"./AlertTitle-DPKoDyW8.js";import"./Dialog-5ZU4oVn0.js";import"./DialogContext-DM5ClTMr.js";import"./Fade-BKGIBsen.js";import"./Modal-iRzmQDx3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DtcvWdU4.js";import"./DialogTitle-CFMwvXUi.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BoACxORx.js";import"./DialogContent-Cjhqyajl.js";import"./DialogContentText-SVS4zHN8.js";import"./index-BiBDMnSv.js";import"./Img-DFnY5dAR.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B-RvsC8z.js";import"./LinearProgress-BEiMT0yY.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
