import{j as p}from"./iframe-uHgbxI5K.js";import{P as t}from"./index-Cf6cKWWX.js";import{T as i}from"./index-v9QuSlC7.js";import{S}from"./index-BzyIUxG9.js";import{S as d,u as y,a as l}from"./Spaces-C7EehmS7.js";import{Q as u}from"./suspense-3_rNC_Rn.js";import{Q as x}from"./queryClient-DxPO9zrG.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Dmj0lJnR.js";import"./useTheme-CtIbOmqo.js";import"./styled-8YbhM9a0.js";import"./memoTheme-oX4ulD_d.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BUwJzphg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CGtHD5r9.js";import"./Grid-CoybaeI6.js";import"./styled-sJpgZ5yK.js";import"./isMuiElement-DF8mSHc6.js";import"./Stack-DRfNMs7N.js";import"./Container-CyeFbR1g.js";import"./index-CUWrOnCM.js";import"./index-BxzGDXEn.js";import"./___vite-browser-external_commonjs-proxy-CKpKa60-.js";import"./index-BN1Luz_F.js";import"./_toKey-4s8ZQHs-.js";import"./index-DDuJv1_Q.js";import"./index-BovvASnm.js";import"./Tooltip-sNbil-gw.js";import"./useSlot-DoiGXRjP.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQsEeVXe.js";import"./useTimeout-CnBSTBeY.js";import"./useControlled-kFiMxWUJ.js";import"./useEventCallback-1jk_qbz7.js";import"./getReactElementRef-WEJqQMPe.js";import"./Portal-DdZjlCce.js";import"./utils-Cj1f_ISK.js";import"./TransitionGroupContext-D0JdioPb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTIA_7et.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CXBoVS4j.js";import"./ButtonBase-DWgIiiPw.js";import"./CircularProgress-DxKRrnZT.js";import"./Button-D_ToZGbA.js";import"./index-CUd5PmZT.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-C1fws6HS.js";import"./index-B2m3k2Xg.js";import"./Alert-XyFG9jF9.js";import"./createSvgIcon-BmijsGhR.js";import"./Close-B_oSM_XG.js";import"./AlertTitle-CZ5E0pFP.js";import"./Dialog-DX75cFJZ.js";import"./DialogContext-Cpc77ZUv.js";import"./Fade-C1oo-Wld.js";import"./Modal-aX1QMhvm.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D55cv2by.js";import"./DialogTitle-CutJAtHc.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BkSNmmuL.js";import"./DialogContent-CiBBXhuU.js";import"./DialogContentText-BbulZ66W.js";import"./index-DS1ZdVNz.js";import"./Img-BYEs3jJI.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CP1zsWVz.js";import"./LinearProgress-BEUhwrWV.js";import"./index-BS4RPCR9.js";import"./index-DyU1fC7A.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
