import{j as p}from"./iframe-BgIiq-du.js";import{P as t}from"./index-C9Ukmu7o.js";import{T as i}from"./index-TsQmzoTZ.js";import{S}from"./index-BbN5E_zC.js";import{S as d,u as y,a as l}from"./Spaces-BWdsWyNv.js";import{Q as u}from"./suspense-CK8XrJxB.js";import{Q as x}from"./queryClient-BAQCZwoO.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Zfwh-5mP.js";import"./useTheme-D1y-VmtJ.js";import"./styled-nLr0G4t_.js";import"./memoTheme-BUFmT7AM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BSAr1ZxE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Bqm_9Atf.js";import"./Grid-BxagjAZA.js";import"./styled-D4IfxCmy.js";import"./isMuiElement-CdT2rXyX.js";import"./Stack-L7a-IdF6.js";import"./Container-DQV0JO0Z.js";import"./index-BdQccBBF.js";import"./index-CiE-CXrO.js";import"./___vite-browser-external_commonjs-proxy-BjMzHjy9.js";import"./index-Chk9juOj.js";import"./_toKey-D3ErCz-H.js";import"./index-Dy9GzonX.js";import"./index-CEJHTNJk.js";import"./Tooltip-ZBvV1JRk.js";import"./useSlot-EdtQUYAt.js";import"./mergeSlotProps-CnVkUNbm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DMJLoebf.js";import"./useTimeout-BqNIrHgl.js";import"./useControlled-BtJ2k5T0.js";import"./useEventCallback-BIchpltM.js";import"./getReactElementRef-CoLPcd7a.js";import"./Portal-DTFxnUfG.js";import"./utils-NnkRphE_.js";import"./TransitionGroupContext-CQbv1oLy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C3d2_4qf.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ByM6u0PW.js";import"./ButtonBase-Cb3z3UZq.js";import"./CircularProgress-DMUtFszr.js";import"./Button-CxUn3cs_.js";import"./index-DDWPjCym.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-O7DiaTLk.js";import"./index-Dxyxt5II.js";import"./Alert-BZaieSWF.js";import"./createSvgIcon-ibTAZZq3.js";import"./Close-CfCdcsL2.js";import"./AlertTitle-BThAwQ-R.js";import"./Dialog-CqwE1wk4.js";import"./DialogContext-D16CwXFB.js";import"./Fade-BZsMZeiY.js";import"./Modal-BZOZDgI9.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-eqU3iNBn.js";import"./DialogTitle-ipuCqnIq.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-9zJsDxbG.js";import"./DialogContent-BY4rbCvW.js";import"./DialogContentText-CLcdKpke.js";import"./index-DS1ZdVNz.js";import"./Img-uSD22uGz.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Gj8f2Ovw.js";import"./LinearProgress-CFJOjWMj.js";import"./index-CZr81PwO.js";import"./index-DqBix0bv.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
