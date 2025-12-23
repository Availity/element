import{j as p}from"./iframe-BOqhEPj6.js";import{P as t}from"./index-BnDQCKRO.js";import{T as i}from"./index-C8WQ3P9P.js";import{S}from"./index-DMdqsLqb.js";import{S as d,u as y,a as l}from"./Spaces-HNjJZycP.js";import{Q as u}from"./suspense-D7CuN_g-.js";import{Q as x}from"./queryClient-C1k93onC.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Bx06Uw5g.js";import"./useTheme-s5qe_7AX.js";import"./styled-ClQgRsdc.js";import"./memoTheme-BYC15E_2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DCSeVpBd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CIHxGpEh.js";import"./Grid-BJc_wFud.js";import"./styled-BY2Q14_8.js";import"./isMuiElement-FBus6K6C.js";import"./Stack-DPaZpNJF.js";import"./Container-Ck_72FoA.js";import"./index-BnQMcvUu.js";import"./index-CGqRv4RY.js";import"./___vite-browser-external_commonjs-proxy-BIEiDzEk.js";import"./index-vabkworu.js";import"./_toKey-DhmaiSd7.js";import"./index-CJzVG0EX.js";import"./index-CQw0a6ar.js";import"./Tooltip-DKIHpwU2.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./useTimeout-CKtuW5yl.js";import"./useControlled-CmW8DIBb.js";import"./useEventCallback-BHkbNqwn.js";import"./getReactElementRef-DF_NnWMb.js";import"./Portal-Cx3wFGpK.js";import"./utils-CDaWu4n1.js";import"./TransitionGroupContext-TO625Yxj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DnEE7xuk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BP3VjvuD.js";import"./ButtonBase-C7cVXKAH.js";import"./CircularProgress-Xg5tMO8-.js";import"./Button-BDF2rRxm.js";import"./index-DX6yAWWK.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BlVGnbba.js";import"./index-C_l2eppJ.js";import"./Alert-CRy7X466.js";import"./createSvgIcon-BzRll-a0.js";import"./Close-CCJbhEGR.js";import"./AlertTitle-BmNEssV8.js";import"./Dialog-BIjFiSz3.js";import"./DialogContext-BsA807ws.js";import"./Fade-Dvz2gflC.js";import"./Modal-plhmqEr0.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-hLK-Cyuw.js";import"./DialogTitle-Bq15GKyf.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-DABSNqzu.js";import"./DialogContent-BFMONM82.js";import"./DialogContentText-DfQlnCFK.js";import"./index-DS1ZdVNz.js";import"./Img-tbP2vzQ6.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DcvSEA6Q.js";import"./LinearProgress-NRNSYKD9.js";import"./index-CCxw3tf-.js";import"./index-DabjR5GN.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
