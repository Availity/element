import{j as p}from"./iframe-_UUIOQuH.js";import{P as e}from"./index-CN5W_Lp7.js";import{T as o}from"./index-ZH-6PAbo.js";import{S as n}from"./index-BtEaczgi.js";import{Q as d}from"./suspense-Duf7jLkv.js";import{S as m,u as h,a as S}from"./Spaces-CVinBZs7.js";import{Q as y}from"./queryClient-BHvSfuTF.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-P8N6YQhi.js";import"./useTheme-CMhvYveJ.js";import"./styled-b9_l-4u0.js";import"./memoTheme-CIZa69Jr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-6OKQ2qDF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-B5h19-4r.js";import"./Grid-CC4gnOAh.js";import"./isMuiElement-WWIYAN0M.js";import"./styled-D33n_PsO.js";import"./Stack-DyYrotpf.js";import"./Container-Abk-Ppxh.js";import"./Img-BXENwfM2.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CVIUoUuq.js";import"./index-DpN0Z2Me.js";import"./___vite-browser-external_commonjs-proxy-BQo9Raix.js";import"./index-DzHtvXsL.js";import"./index-CuBjoF4c.js";import"./index-TC4m-Pq9.js";import"./IconButton-CUKPhxxE.js";import"./ButtonBase-B29bExhs.js";import"./useTimeout-CpXLyJm7.js";import"./TransitionGroupContext-BWER5STN.js";import"./useForkRef-Ds0id4pA.js";import"./useEventCallback-C78AkP7O.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrYD12o3.js";import"./Tooltip-BIzLnAgn.js";import"./useSlot-CykKJjN_.js";import"./mergeSlotProps-BdoUtTwz.js";import"./useControlled-De2ikPKN.js";import"./getReactElementRef-C0bnOj0D.js";import"./Portal-CM-iumOR.js";import"./utils-CA__7Tjr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Ceux9c--.js";import"./Button-BOTNYh0S.js";import"./index-C64ixpTy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bp4jKyt3.js";import"./index-CVxi6bkA.js";import"./Alert-BdTrAZw2.js";import"./createSvgIcon-4iIpqybs.js";import"./Close-D8gVO89g.js";import"./AlertTitle-D_KPGiOl.js";import"./Dialog-ChEEMhD_.js";import"./DialogContext-Dgib0Kjl.js";import"./Modal-CM12C_yu.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BIxTCRW2.js";import"./Fade-BLKcm6ko.js";import"./DialogTitle-CE_V1dR2.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DZNcWLkr.js";import"./DialogContent-CbNta1i7.js";import"./DialogContentText-CACLE0Rq.js";import"./index-CrcoPoGw.js";import"./index-CThNG52F.js";import"./LinearProgress-Cn3RGThb.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ap=["_Spaces"];export{i as _Spaces,Ap as __namedExportsOrder,zp as default};
