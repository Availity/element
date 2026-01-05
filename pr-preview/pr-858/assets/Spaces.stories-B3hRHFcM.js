import{j as p}from"./iframe-Tg5E9Q0V.js";import{P as t}from"./index-BV-UyTTn.js";import{T as i}from"./index-CAbAbsxX.js";import{S}from"./index-D4DEAloD.js";import{S as d,u as y,a as l}from"./Spaces-B4qlReRG.js";import{Q as u}from"./suspense-D26BOp5-.js";import{Q as x}from"./queryClient-0gDoLhbK.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-DUjZmU49.js";import"./useTheme-D2PM0NC9.js";import"./styled-CkQGWiXZ.js";import"./memoTheme-CSHka9uN.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BcRYJcKe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BsChB_Op.js";import"./Grid-GpGmgKJU.js";import"./styled-CQuv9sTF.js";import"./isMuiElement-DRHNiz3q.js";import"./Stack-DMT1dotB.js";import"./Container-f8pbHfI3.js";import"./index-BawvJ9vE.js";import"./index-HS0VMrul.js";import"./___vite-browser-external_commonjs-proxy-BsJk-Vbm.js";import"./index-ByAKUpTB.js";import"./_toKey-DDhoPzzc.js";import"./index-Dclp8Jz0.js";import"./index-x-cZi-nY.js";import"./Tooltip-BTI4GCPp.js";import"./useSlot-DWYsP92Q.js";import"./mergeSlotProps-BNNCTn4N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B_DO_dbH.js";import"./useTimeout-CYbYxV9r.js";import"./useControlled-BcdiiQVx.js";import"./useEventCallback-pJVTgRiD.js";import"./getReactElementRef-B8vpBm8c.js";import"./Portal-CbAAOrpG.js";import"./utils-BChu3r4-.js";import"./TransitionGroupContext-cQD0tQZD.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-S7vQ2L8Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cl7hs1iw.js";import"./ButtonBase-CCTLTRt8.js";import"./CircularProgress-xXUbWWTu.js";import"./Button-CDV9x4x4.js";import"./index-D8INjewo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-of2VfktU.js";import"./index-CjwyXeBV.js";import"./Alert-TgL858qe.js";import"./createSvgIcon-BlU2wZ3P.js";import"./Close-CFhqNs6G.js";import"./AlertTitle-CGAA0Q6G.js";import"./Dialog-f9EPKtjF.js";import"./DialogContext-Dc4SDTq7.js";import"./Fade-BvyniuaG.js";import"./Modal-BGuLed81.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BgXNmqEU.js";import"./DialogTitle-l7hS7oNL.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-LcOHsTAm.js";import"./DialogContent-Bdwr18VL.js";import"./DialogContentText-eSzwcYem.js";import"./index-DS1ZdVNz.js";import"./Img-CUCYP70x.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DlbJvaWA.js";import"./LinearProgress-B6RUzsVy.js";import"./index-NhK0GdlN.js";import"./index-XmUgrPNy.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const Lp=["_Spaces"];export{s as _Spaces,Lp as __namedExportsOrder,Kp as default};
