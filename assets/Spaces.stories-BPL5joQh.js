import{j as p}from"./iframe-D6rueNNG.js";import{P as t}from"./index-C228VK9W.js";import{T as i}from"./index-E9_P1BCd.js";import{S}from"./index-CFiPcGtG.js";import{S as d,u as y,a as l}from"./Spaces-CQhJyn-V.js";import{Q as u}from"./suspense-BHWy5sil.js";import{Q as x}from"./queryClient-BzmArXBv.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BUunjapz.js";import"./useTheme-iuyBXSR0.js";import"./styled-ZW0UZQf0.js";import"./memoTheme-CCfkpwUG.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-011omOzu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DT5FlFN8.js";import"./Grid-Ch7w618h.js";import"./styled-BjPVeGBq.js";import"./isMuiElement-DcnMsx99.js";import"./Stack-UTUiIrYm.js";import"./Container-D69exS9C.js";import"./index-BaRtKdXV.js";import"./index-BoSR8ZX1.js";import"./___vite-browser-external_commonjs-proxy-Be2LaGU1.js";import"./index-BZSDLENu.js";import"./_toKey-Cs30Vmya.js";import"./index-XJX0B1LY.js";import"./index-AWy4Z3jX.js";import"./Tooltip-qA0i6HK3.js";import"./useSlot-DvvYNYr-.js";import"./mergeSlotProps-CvdD-egp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k6UH9Eyt.js";import"./useTimeout-BykHjwvK.js";import"./useControlled-CmrCbjvY.js";import"./useEventCallback-QlF7xWZO.js";import"./getReactElementRef-Behh7Kdk.js";import"./Portal-BA5FuLB9.js";import"./utils-BI9CCtVK.js";import"./TransitionGroupContext-DgL19gcU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-y_-PZrbQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BLmBtzUE.js";import"./ButtonBase-CyBCFM1e.js";import"./CircularProgress-CNVgVvu_.js";import"./Button-Cqe8RDHi.js";import"./index-BjO6qU9j.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-3IcwaHvd.js";import"./index-dFI70Ld2.js";import"./Alert-B4aIhQfU.js";import"./createSvgIcon-DVzV6U3r.js";import"./Close-BLkDw3YP.js";import"./AlertTitle-CxuOoSMZ.js";import"./Dialog-CJ0yUBQc.js";import"./DialogContext-CgogJFoB.js";import"./Fade-DS1rltrj.js";import"./Modal-ZhXTdvJb.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CzQqt0qo.js";import"./DialogTitle-Bw1dcP69.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-CrfjblqY.js";import"./DialogContent-Cy47rFfc.js";import"./DialogContentText-C88uRYyz.js";import"./index-DS1ZdVNz.js";import"./Img-BDXjfOE9.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Cf2T5HHJ.js";import"./LinearProgress--r6sDTcc.js";import"./index-B_JKtDXM.js";import"./index-BJ6jjaZ4.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
