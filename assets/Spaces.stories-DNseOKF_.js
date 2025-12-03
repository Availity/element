import{j as p}from"./iframe-BiHmAaXu.js";import{P as t}from"./index-Cy9sJAxK.js";import{T as i}from"./index-SvqotCfh.js";import{S}from"./index-Cgd0JpyD.js";import{S as d,u as y,a as l}from"./Spaces-CwI1_ehf.js";import{Q as u}from"./suspense-DX64legv.js";import{Q as x}from"./queryClient-Bua6-sLm.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-9ZvZWPZJ.js";import"./useTheme-D51yRe8t.js";import"./styled-Dtda04LL.js";import"./memoTheme-zGeQXNTV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-De5LbgvD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CiWIFjse.js";import"./Grid-CEmIxvlK.js";import"./styled-Zig1TB_m.js";import"./isMuiElement-DKHzA-If.js";import"./Stack-Dj-nUodw.js";import"./Container-BlXDxTKA.js";import"./index-BrKNijPj.js";import"./index-BQtRu7J0.js";import"./___vite-browser-external_commonjs-proxy-BBUbcpu0.js";import"./index-DuRQpI0H.js";import"./_toKey-CCrs_ik9.js";import"./index-BqrPm8p8.js";import"./index-Bh-1iHl-.js";import"./Tooltip-D9RCop2K.js";import"./useSlot-BwnKjiCD.js";import"./mergeSlotProps-vY4QflWx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-egRdNH_q.js";import"./useTimeout-BxBXWuFq.js";import"./useControlled-QJx0Pv3z.js";import"./useEventCallback-A-8aNATG.js";import"./getReactElementRef-DBbsA3vx.js";import"./Portal-3VCYEpJr.js";import"./utils-Derh_BFQ.js";import"./TransitionGroupContext-B15fWyGj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BP935MD-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3B7XTqu.js";import"./ButtonBase-DdAFxN83.js";import"./CircularProgress-BsuuE2cE.js";import"./Button-CeglKkVM.js";import"./index-BvV5FGi6.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CbropkBN.js";import"./index-DpC-D8eR.js";import"./Alert-D6raZ0J0.js";import"./createSvgIcon-IF8Bi_Qp.js";import"./Close-DDN0dZH2.js";import"./AlertTitle-0itP10OT.js";import"./Dialog-B1T-Zvdy.js";import"./DialogContext-Cgxq9EC9.js";import"./Fade-Ck39exYl.js";import"./Modal-zlXF-WhO.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-i5bVk1OO.js";import"./DialogTitle-DGciT36z.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-s3PuEFW1.js";import"./DialogContent-DYcixn6P.js";import"./DialogContentText-DFzunuK_.js";import"./index-DJKl12U0.js";import"./Img-BOKoFMZ0.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CAxnwo0B.js";import"./LinearProgress-DpfrzB46.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Hp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
