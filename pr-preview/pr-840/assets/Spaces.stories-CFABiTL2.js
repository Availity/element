import{j as p}from"./iframe-D4l0qtta.js";import{P as t}from"./index-JZdjhGLb.js";import{T as i}from"./index-CsS4JCzl.js";import{S}from"./index-BpTvn-wv.js";import{S as d,u as y,a as l}from"./Spaces-CNCQdxwH.js";import{Q as u}from"./suspense-Cw5XrgzU.js";import{Q as x}from"./queryClient-B4Ypneio.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-DbNlwRfL.js";import"./useTheme-CeD1owOb.js";import"./styled-BTFFsjyJ.js";import"./memoTheme-BA7dV9ce.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DQo__xQb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CbXkJEEm.js";import"./Grid-AzzeqWvx.js";import"./styled-CK-eMcBj.js";import"./isMuiElement-CH7W9SW2.js";import"./Stack-DeWONcZO.js";import"./Container-Cbdyqd46.js";import"./index-VY7D4fU8.js";import"./index-C-DxDp19.js";import"./___vite-browser-external_commonjs-proxy-xaDo7viE.js";import"./index-DuRQpI0H.js";import"./_toKey-Da4UATOv.js";import"./index-DvGssce5.js";import"./index-CzvPe9hU.js";import"./Tooltip-CWqA7bV3.js";import"./useSlot-D-iz2SxY.js";import"./mergeSlotProps-DF_C76Yp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dd_PEYLR.js";import"./useTimeout-tDfAfQSP.js";import"./useControlled-Cq9ik7Uv.js";import"./useEventCallback-BZanBeRj.js";import"./getReactElementRef-CBOb2zug.js";import"./Portal-D2eOL5uX.js";import"./utils-C5eKUPpq.js";import"./TransitionGroupContext-CoIben92.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CDGpK8qC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-vTRylTTB.js";import"./ButtonBase-caw8p1XZ.js";import"./CircularProgress-CNlJ1A1Z.js";import"./Button-c5qr7CJB.js";import"./index-B-RlsP5T.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Domhqj7B.js";import"./index-BGI02owx.js";import"./Alert-BuL5tdYY.js";import"./createSvgIcon-0ZTEW-tI.js";import"./Close-Db0Pijny.js";import"./AlertTitle-Dnabloi7.js";import"./Dialog-BxRu4yI_.js";import"./DialogContext-C_H9DJty.js";import"./Fade-22-1AoWN.js";import"./Modal--YBRLag_.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-C4Qzx4Iq.js";import"./DialogTitle-fIHK7PSy.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DzxGYdiM.js";import"./DialogContent-Ce4ClxKN.js";import"./DialogContentText-C1LbJJd9.js";import"./index-DJKl12U0.js";import"./Img-Bu22B9nE.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B7GnvLsj.js";import"./LinearProgress-CxG62HJH.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Hp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const Jp=["_Spaces"];export{s as _Spaces,Jp as __namedExportsOrder,Hp as default};
