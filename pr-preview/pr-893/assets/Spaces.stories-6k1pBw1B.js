import{j as p}from"./iframe-DdfW-8_N.js";import{P as e}from"./index-Bs_4tr-F.js";import{T as o}from"./index-CTKQxs8D.js";import{S as n}from"./index-DpB8nAvk.js";import{S as m,u as d,a as h}from"./Spaces-5QoSzUnN.js";import{Q as S}from"./suspense-CUCRFkyj.js";import{Q as y}from"./queryClient-DjyccQVK.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-B3IXTn7K.js";import"./useTheme-CibYXdii.js";import"./styled-LeBzfrVS.js";import"./memoTheme-Dy9OKavz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CwnuSxBW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-B1YYYxPG.js";import"./Grid-BLYhcV5L.js";import"./isMuiElement-Bemz2x0M.js";import"./styled-BbktOZM5.js";import"./Stack-COJVbYMP.js";import"./Container-C4O5rbHe.js";import"./index-Qm8Jx-fd.js";import"./index-L1rOSiqk.js";import"./___vite-browser-external_commonjs-proxy-Dx8KQjT5.js";import"./index-7ol4bgc4.js";import"./_toKey-BXxt23jf.js";import"./index-BtLiTV9Q.js";import"./index-C-S8qNMg.js";import"./Tooltip-Bx3cCyVU.js";import"./useSlot-CGn3_9IL.js";import"./mergeSlotProps-CqPusD8W.js";import"./useForkRef-B88Yvlsp.js";import"./useTimeout-B6LNCSjE.js";import"./useControlled-DoVGZQrv.js";import"./useEventCallback-DvSzgmRL.js";import"./getReactElementRef-C38daVWB.js";import"./Portal-HR7sjuNG.js";import"./utils-ByofAeEv.js";import"./TransitionGroupContext-CyCzSLBs.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-1teZLVpX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-cVpvf3wp.js";import"./ButtonBase-Beiib6fe.js";import"./CircularProgress-YKVCICB8.js";import"./Button-B9MkHEWu.js";import"./index-BFOrYL81.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Dd37ovUy.js";import"./index-BW1G-sU7.js";import"./Alert-C_kTgXaS.js";import"./createSvgIcon-WEQlv1NO.js";import"./Close-RRjitx-c.js";import"./AlertTitle-1I0DGx41.js";import"./Dialog-BU6S9R84.js";import"./DialogContext-C6U93rRn.js";import"./Fade-Dr2QUuJ4.js";import"./Modal-BmEogbMs.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BcoXv1zJ.js";import"./DialogTitle-Bmdfo15m.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-COB1UQPj.js";import"./DialogContent-BBloYlYV.js";import"./DialogContentText-BRG_rc17.js";import"./index-BiBDMnSv.js";import"./Img-CYNwV3Kf.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-WPlrW0bS.js";import"./LinearProgress-BEqFdlDK.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
