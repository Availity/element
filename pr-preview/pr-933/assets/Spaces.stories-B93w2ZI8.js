import{j as p}from"./iframe-BOySubGY.js";import{P as e}from"./index-BBVQJ4RI.js";import{T as o}from"./index-DN9BmYUP.js";import{S as n}from"./index-BY15XDHL.js";import{Q as d}from"./suspense-c9GQrknW.js";import{S as m,u as h,a as S}from"./Spaces-DEmjnvZj.js";import{Q as y}from"./queryClient-DZIox4Sn.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DK-wycZj.js";import"./useTheme-BZyZpBhU.js";import"./styled-XjKTZ5Ba.js";import"./memoTheme-C-oySTID.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-SY2Ud8Z5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-C0cMPqSK.js";import"./Grid-CxzBT5ej.js";import"./isMuiElement-BscQb9Cz.js";import"./styled-B4Xqzm8j.js";import"./Stack-CvrbJzig.js";import"./Container-C4UOiudT.js";import"./Img-DYqcwdZe.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BzLe_HW7.js";import"./index-DS3yUKav.js";import"./___vite-browser-external_commonjs-proxy-DjSuNFQ7.js";import"./index-D33PrsP9.js";import"./index-rF5fdurH.js";import"./index-dHFlkqLk.js";import"./IconButton-D23BvDdt.js";import"./ButtonBase-CriPZSS7.js";import"./useTimeout-D7rfSJNw.js";import"./TransitionGroupContext-DX1Xmw-6.js";import"./useForkRef-BEcBTcWu.js";import"./useEventCallback-De91DTs8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B5gdOPr_.js";import"./Tooltip-CVYQnSxv.js";import"./useSlot-BgdUY7vI.js";import"./mergeSlotProps-A5qFZlFu.js";import"./useControlled-ZCAGuxBe.js";import"./getReactElementRef-ekrhOioo.js";import"./Portal-Bk70ZbQ1.js";import"./utils-MRT_IXkN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CORZ0NF7.js";import"./Button-DWb-ONsW.js";import"./index-Axa3knvz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZLHpFL-.js";import"./index-BlA_GZw8.js";import"./Alert-g1lguWxF.js";import"./createSvgIcon-CNdKwBrG.js";import"./Close-C8toxEW2.js";import"./AlertTitle-BA0s0MII.js";import"./Dialog-DHdJZwjP.js";import"./DialogContext-Dkw0ZF2g.js";import"./Modal-JO3U43CI.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wymMCVv9.js";import"./Fade-MtnpW3KP.js";import"./DialogTitle-B90_YRMk.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DHMtjHs_.js";import"./DialogContent-CdzfybOH.js";import"./DialogContentText-Bhu_PZ-i.js";import"./index-CrcoPoGw.js";import"./index-CFuhBYHH.js";import"./LinearProgress-CDfFpHfT.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
