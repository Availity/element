import{j as p}from"./iframe-CNKi_Ec9.js";import{P as e}from"./index-ByGDk7fM.js";import{T as o}from"./index-1Jxp0Aiy.js";import{S as n}from"./index-BM_So9FB.js";import{S as m,u as d,a as h}from"./Spaces-BSFH-YDy.js";import{Q as S}from"./suspense-BHdj88FS.js";import{Q as y}from"./queryClient-DzXsCGda.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-B0v8-sA3.js";import"./useTheme-BKQS-hPu.js";import"./styled-CGPS0K8z.js";import"./memoTheme-DeusU9l_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DIfLarQN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DEr-V8__.js";import"./Grid-DePYc70X.js";import"./isMuiElement-B5CkoKss.js";import"./styled-CVVnUVY6.js";import"./Stack-CcjdTXZq.js";import"./Container-DdiDjvnS.js";import"./index-DNXNY5D2.js";import"./index-DWFTOh8w.js";import"./___vite-browser-external_commonjs-proxy-DUgwFB0-.js";import"./index-BYBZ-AT1.js";import"./_toKey-BB_T5pb7.js";import"./index-CbwNBzKa.js";import"./index-B621nc9Z.js";import"./Tooltip-CJ_GLTq5.js";import"./useSlot-6u895GGS.js";import"./mergeSlotProps-NHo9zqIM.js";import"./useForkRef-BcCxGyq_.js";import"./useTimeout-qmb5R95B.js";import"./useControlled-w5dFxqhC.js";import"./useEventCallback-Cws-zXFa.js";import"./getReactElementRef-8X4grM9z.js";import"./Portal-C3A-VfFU.js";import"./utils-SSfZp7cC.js";import"./TransitionGroupContext-BESWVVvg.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BIvI5Lxh.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CeXbiSrq.js";import"./ButtonBase-CiH38IXk.js";import"./CircularProgress-BrUNS0I2.js";import"./Button-CTbvABeh.js";import"./index-B_WSnka_.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DRZMbgGT.js";import"./index-C0n2Ltk1.js";import"./Alert-BONBBDar.js";import"./createSvgIcon-DLBoSPlD.js";import"./Close-Dm6cDoM0.js";import"./AlertTitle-Cuap3Y82.js";import"./Dialog-BW4SFYNY.js";import"./DialogContext-DuTa8GiH.js";import"./Fade-B4qzam9p.js";import"./Modal-CT8tTE_f.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJANX_Gq.js";import"./DialogTitle-BqklQ228.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BcKQ2a2v.js";import"./DialogContent-I6ljHDLm.js";import"./DialogContentText-BQhC0Ssv.js";import"./index-BiBDMnSv.js";import"./Img-C25gYbig.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CDERYvbo.js";import"./LinearProgress-CSWVXsMu.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
