import{j as p}from"./iframe-BjnuDffd.js";import{P as e}from"./index-03R5qi8F.js";import{T as o}from"./index-DpVJt-Ed.js";import{S as n}from"./index-CqZiq0s6.js";import{S as m,u as d,a as h}from"./Spaces-B8IaHIQV.js";import{Q as S}from"./suspense-DQI9Ntyw.js";import{Q as y}from"./queryClient-CuN1dcSA.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-rd8sC7yH.js";import"./useTheme-C7UHXn64.js";import"./styled-DqMp1nYt.js";import"./memoTheme-B2JdP5Lg.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-fWFZNgKP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BZu1WY8a.js";import"./Grid-B7_6AdGR.js";import"./styled-BuSaaTq2.js";import"./isMuiElement-CRA1aQWB.js";import"./Stack-2ZpK9jn9.js";import"./Container-DjmD-ytY.js";import"./index-CFUpLV2J.js";import"./index-BgY1J8fE.js";import"./___vite-browser-external_commonjs-proxy-n-RzBoxb.js";import"./index-D16oZYS_.js";import"./_toKey-CDVtnxQV.js";import"./index-C7veCi59.js";import"./index-ozQD-jv-.js";import"./Tooltip-DY2U7J0u.js";import"./useSlot-jAOnMiB5.js";import"./mergeSlotProps-ShRnscjH.js";import"./useForkRef-DH1owG2H.js";import"./useTimeout-C6wFpPob.js";import"./useControlled-BK8V1AI9.js";import"./useEventCallback-C7vIb1Zh.js";import"./getReactElementRef-Cj7TLjNv.js";import"./Portal-BeYOOpZP.js";import"./utils-BWRWa3IK.js";import"./TransitionGroupContext-CjQYVfWF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BCOe5sCp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CTKwlcpD.js";import"./ButtonBase-B91JQX2j.js";import"./CircularProgress-2p5PvuKn.js";import"./Button-Z3VsI-jq.js";import"./index-BPcsFkr_.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CargZ35d.js";import"./index-B9fvs1mL.js";import"./Alert-CxN2_of6.js";import"./createSvgIcon-mv4Pxh2n.js";import"./Close-D01zy2br.js";import"./AlertTitle-C6pgOxyx.js";import"./Dialog-CN1jswmk.js";import"./DialogContext-BdVADrVI.js";import"./Fade-C3ie0yGC.js";import"./Modal-Dw-6s7kU.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJ9OS4uV.js";import"./DialogTitle-DbgtwEKc.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-pvR9SMiM.js";import"./DialogContent-Cl5gQMGZ.js";import"./DialogContentText-CwSyIGPy.js";import"./index-BiBDMnSv.js";import"./Img-D-oq9o7m.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B1kTpIIi.js";import"./LinearProgress-DgCpkw1Z.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
