import{j as p}from"./iframe-74vBDrmZ.js";import{P as t}from"./index-B9pwOp6X.js";import{T as i}from"./index-wf38qGOo.js";import{S}from"./index-DABAYwxJ.js";import{S as d,u as y,a as l}from"./Spaces-Cb2t_F4Y.js";import{Q as u}from"./suspense-jINh7r9J.js";import{Q as x}from"./queryClient-Biy4EPJZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-WApO2-l7.js";import"./useTheme-C3eWChmp.js";import"./styled-BHC3gMyH.js";import"./memoTheme-CrohEj2F.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-B2QvIve-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-B4VqGeVw.js";import"./Grid-D7zFgz1I.js";import"./styled-32LRH9GB.js";import"./isMuiElement-40PMFKcu.js";import"./Stack-B4RYbXhj.js";import"./Container-Bx3d2t5z.js";import"./index-zmotdteK.js";import"./index-D7M7y0-d.js";import"./___vite-browser-external_commonjs-proxy-s_RFnJWO.js";import"./index-C1m1s9iu.js";import"./_toKey-B0HUzOTy.js";import"./index-CSk-g4Wy.js";import"./index-BdaRrwoe.js";import"./Tooltip-D7yzj_N1.js";import"./useSlot-Dpj_kWoj.js";import"./mergeSlotProps-CYq4Cs5M.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CaacVPvw.js";import"./useTimeout-Bh1htgn1.js";import"./useControlled-BzQ0uXxz.js";import"./useEventCallback-D1J4VLx7.js";import"./getReactElementRef-DTaqgOCe.js";import"./Portal-CYFlRt9C.js";import"./utils-BsLLjsnO.js";import"./TransitionGroupContext-BXUgPNXW.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C0zznadg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D5Ff5U4u.js";import"./ButtonBase-HlJCpadJ.js";import"./CircularProgress-BKuGISI6.js";import"./Button-CnH678eA.js";import"./index-Ci5o9uVL.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DyiByr8S.js";import"./index-BDQ9bBG-.js";import"./Alert-BTQPODHR.js";import"./createSvgIcon-CUQeMkEj.js";import"./Close-BXH_H4Yh.js";import"./AlertTitle-pU98MJaK.js";import"./Dialog-tfRwhjSy.js";import"./DialogContext-XlHY6kdi.js";import"./Fade-DPk9gQur.js";import"./Modal-CW_aBWxl.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BdJqATDV.js";import"./DialogTitle-pbHgvGBt.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DgaAN6z6.js";import"./DialogContent-C3UJcSCE.js";import"./DialogContentText-BNcWSlLn.js";import"./index-DS1ZdVNz.js";import"./Img-8zSb0OoL.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BcQ0ws9r.js";import"./LinearProgress-DhbiDxIf.js";import"./index-DuZx5vLQ.js";import"./index-Or3r4rE-.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
