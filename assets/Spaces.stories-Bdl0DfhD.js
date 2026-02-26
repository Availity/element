import{j as p}from"./iframe-DTpfCdTP.js";import{P as e}from"./index-BNFGSt66.js";import{T as o}from"./index-B6j2B8Pp.js";import{S as n}from"./index-BdlJaXZ1.js";import{S as m,u as d,a as h}from"./Spaces-8Hi_nuRn.js";import{Q as S}from"./suspense-DhZCDS-8.js";import{Q as y}from"./queryClient-D-TqA8fh.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Dn1utG1r.js";import"./useTheme-jT65VjN1.js";import"./styled-JKD3wrB9.js";import"./memoTheme-D8G-akul.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-OfK4w6vl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DTAenaTM.js";import"./Grid-cSi6T3Qn.js";import"./styled-TJsrHN39.js";import"./isMuiElement-DL6gjngF.js";import"./Stack-Dc_aLgSc.js";import"./Container-BggHV1YK.js";import"./index-BvAqAliB.js";import"./index-B7sGnkLd.js";import"./___vite-browser-external_commonjs-proxy-DYx3DAeD.js";import"./index-BTctTnrC.js";import"./_toKey-D2wodF39.js";import"./index-BNv7yeS5.js";import"./index-q1MxSMZt.js";import"./Tooltip-uiVSuhLb.js";import"./useSlot-h1Ycty7Q.js";import"./mergeSlotProps-BJk609iI.js";import"./useForkRef-Dez1FBmj.js";import"./useTimeout-BG483csS.js";import"./useControlled-BQlebmQ3.js";import"./useEventCallback-5DZSu_H1.js";import"./getReactElementRef-Bdxo8MI5.js";import"./Portal-Ghvglbwf.js";import"./utils-vs6bWRab.js";import"./TransitionGroupContext-DugTcswx.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BBfgcS2b.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C1za8a59.js";import"./ButtonBase-TqCu7TYl.js";import"./CircularProgress-eXewDO5k.js";import"./Button-CuRegif2.js";import"./index-DFihowQv.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CZ5jOsa4.js";import"./index-Bi0jdUrh.js";import"./Alert-niCaVZPb.js";import"./createSvgIcon-DXGDQ1gJ.js";import"./Close-Ccq543WN.js";import"./AlertTitle-ByE8coEO.js";import"./Dialog-t6pB-wR8.js";import"./DialogContext-CGCAQyRz.js";import"./Fade-D9Ctmrdo.js";import"./Modal-8tunU-lf.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BvhACw8B.js";import"./DialogTitle-COWOfEyS.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-D36M2o00.js";import"./DialogContent-CDweV8V-.js";import"./DialogContentText-DdNq9qKj.js";import"./index-BiBDMnSv.js";import"./Img-C1RamJSX.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-scH1VV1j.js";import"./LinearProgress-CN_TxhBp.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
