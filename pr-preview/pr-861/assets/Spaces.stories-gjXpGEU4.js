import{j as p}from"./iframe-DdGJyqAg.js";import{P as e}from"./index-HU5g1LY2.js";import{T as o}from"./index-CvYPRyok.js";import{S as n}from"./index-VAodLW9S.js";import{S as m,u as d,a as h}from"./Spaces-CM5JTTM4.js";import{Q as S}from"./suspense-BzFS8Nep.js";import{Q as y}from"./queryClient-WLJnH_7H.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DkSeVLdU.js";import"./useTheme-Cv4lKaq_.js";import"./styled-DZNwGmaG.js";import"./memoTheme-zSpKnFub.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DLXtgzgf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CoFPB8Zy.js";import"./Grid-DZe0cyy5.js";import"./styled-Zzv4A2is.js";import"./isMuiElement-DDjJU4Hv.js";import"./Stack-VReAszZR.js";import"./Container-Dqr8G4iZ.js";import"./index-BvIUS6Oo.js";import"./index-CrIdewm5.js";import"./___vite-browser-external_commonjs-proxy-DBR-zej2.js";import"./index-D9N9sMnM.js";import"./_toKey-CN9ZoP-r.js";import"./index-CzY2Ca-y.js";import"./index-C--XPrtb.js";import"./Tooltip-Cpc2Ys61.js";import"./useSlot-eMa7p3Q9.js";import"./mergeSlotProps-DPHtdEFZ.js";import"./useForkRef-B5TSGzbi.js";import"./useTimeout-Cz_VOQaa.js";import"./useControlled-JTS7gCiC.js";import"./useEventCallback-CPaQ5FLe.js";import"./getReactElementRef-cwdxe4es.js";import"./Portal-B-KSdahe.js";import"./utils-CgujwDzQ.js";import"./TransitionGroupContext-DXcWZkFx.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BJSVq7mD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BE3A75mF.js";import"./ButtonBase-CFis8PXN.js";import"./CircularProgress-lWH1rXDR.js";import"./Button-hwETKy73.js";import"./index-DcoLq1GP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-C8uI1pQt.js";import"./index-DWhKChpZ.js";import"./Alert-Cxa7dxTs.js";import"./createSvgIcon-DK_4S9NY.js";import"./Close-CtRv6V_h.js";import"./AlertTitle-99XVXPYf.js";import"./Dialog-BUabGP0w.js";import"./DialogContext-C2hesN2g.js";import"./Fade-D0RG6YQl.js";import"./Modal-R_KASL8z.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CA13Yjqk.js";import"./DialogTitle-Bexlyd2C.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-D4U4y8J6.js";import"./DialogContent-BwM4HGkl.js";import"./DialogContentText-h5VY_-0t.js";import"./index-BiBDMnSv.js";import"./Img-8Fy_2hz_.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BprwUzEa.js";import"./LinearProgress-D6zN5_fa.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Fp=["_Spaces"];export{i as _Spaces,Fp as __namedExportsOrder,Dp as default};
