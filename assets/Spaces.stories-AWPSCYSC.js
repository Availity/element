import{j as p}from"./iframe-Cv4YEYCT.js";import{P as t}from"./index-CZd-ikpv.js";import{T as i}from"./index-Cy8ZwHJB.js";import{S}from"./index-bB8uZqWv.js";import{S as d,u as y,a as l}from"./Spaces-tEwad_36.js";import{Q as u}from"./suspense-DbMB9jKo.js";import{Q as x}from"./queryClient-DxU7aLZ_.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BGV9jSeN.js";import"./useTheme-yn0WqvlF.js";import"./styled-BjYrgzj8.js";import"./memoTheme-pu_-LVrP.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BHaCpI2A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-GX48hKKC.js";import"./Grid-CuYwHY7F.js";import"./styled-Cz-jNn-e.js";import"./isMuiElement-C4Xkg-Fl.js";import"./Stack-BZ8fB6iW.js";import"./Container-Ceu7L51X.js";import"./index-Cp61hPs1.js";import"./index-BrHZs0_A.js";import"./___vite-browser-external_commonjs-proxy-D8UIT_1F.js";import"./index-uYP5-W9N.js";import"./_toKey-Dft4WnKN.js";import"./index-QxXYl1de.js";import"./index-C6B9H3-6.js";import"./Tooltip-DdwYWGQa.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cy9-wLDX.js";import"./useTimeout-S5FMYS9P.js";import"./useControlled-DotOmqWu.js";import"./useEventCallback-Dezg1Jp2.js";import"./getReactElementRef-Cucsv-xJ.js";import"./Portal-HdFRzq7f.js";import"./utils-CC-nVGrC.js";import"./TransitionGroupContext-ReV1kAll.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DpLQsBTB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-y4oP_Qzi.js";import"./ButtonBase-Te2dWPfF.js";import"./CircularProgress-4dbP_wqt.js";import"./Button-CxHqlBlz.js";import"./index-CNJpAeel.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-RzgLEiZ2.js";import"./index-HdGod2-C.js";import"./Alert-BvOiw2Ap.js";import"./createSvgIcon-anG-4vyn.js";import"./Close-CHeCf1pf.js";import"./AlertTitle-q8aMH9Em.js";import"./Dialog-BdcCQMQf.js";import"./DialogContext-DvDqGPPx.js";import"./Fade-72ut2BWr.js";import"./Modal-C2-2MRhp.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CJgjCZ3h.js";import"./DialogTitle-XqSrL_yv.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BctAPQNh.js";import"./DialogContent-Db_inett.js";import"./DialogContentText-DajtmqAa.js";import"./index-DS1ZdVNz.js";import"./Img-B9Otj5KH.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B2h367aa.js";import"./LinearProgress-BCVR-iBP.js";import"./index-CGjFXCyB.js";import"./index-L5zdR5bf.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
