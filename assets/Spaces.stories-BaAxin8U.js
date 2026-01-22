import{j as p}from"./iframe-P-I-t7s_.js";import{P as e}from"./index-AsjbMJ5C.js";import{T as o}from"./index-DWh3JVg2.js";import{S as n}from"./index-DGaASH14.js";import{S as m,u as d,a as h}from"./Spaces-B9EZ-pWv.js";import{Q as S}from"./suspense-B9iPAXfi.js";import{Q as y}from"./queryClient-BqOjpHVd.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DMZ3Nhg0.js";import"./useTheme-BPf64W-X.js";import"./styled-DNi79hKI.js";import"./memoTheme-Bi3jfVWD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BFwAhjnY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BCYJimk9.js";import"./Grid-DUqLWWvo.js";import"./styled-Cp0DTD0x.js";import"./isMuiElement-DIafhdSN.js";import"./Stack-JGFv5pEs.js";import"./Container-8zPEfJs6.js";import"./index-Cc847Osj.js";import"./index-DdsUWlQe.js";import"./___vite-browser-external_commonjs-proxy-DDlQnjAM.js";import"./index-BdjU-ADR.js";import"./_toKey-CwF_HlVq.js";import"./index-BjCGSypJ.js";import"./index-BOqcfzn9.js";import"./Tooltip-kyKJtl96.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./useTimeout-Dzhca5Jx.js";import"./useControlled-Cqclzim-.js";import"./useEventCallback-DAYatbRK.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./Portal-_y01gIKP.js";import"./utils-DTqcJog-.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cx6Yk_v4.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BTlhtNIa.js";import"./ButtonBase-P5TjO14T.js";import"./CircularProgress-BRuGXxty.js";import"./Button-xw2JRpr3.js";import"./index-C3cy06cM.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./index-C8xlsgIV.js";import"./Alert-y6fzeclH.js";import"./createSvgIcon-JwEd2gcS.js";import"./Close-BtLp18zk.js";import"./AlertTitle-H64rt6RT.js";import"./Dialog-DOD_DUew.js";import"./DialogContext-BT821fih.js";import"./Fade-CVC1eZsP.js";import"./Modal-vVbgVJa4.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-C0L4z1af.js";import"./DialogTitle-BNx6OtN4.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-CUd4eZVF.js";import"./DialogContent-t_wjDN8N.js";import"./DialogContentText-BTx64sfC.js";import"./index-BiBDMnSv.js";import"./Img-BaCkS-BV.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BsJZMOrl.js";import"./LinearProgress-B88busAC.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
