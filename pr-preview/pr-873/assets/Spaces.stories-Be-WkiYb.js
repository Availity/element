import{j as p}from"./iframe-BACK_0qL.js";import{P as e}from"./index-3uaVz-2R.js";import{T as o}from"./index-44F_PwAA.js";import{S as n}from"./index-BgUu0nys.js";import{S as m,u as d,a as h}from"./Spaces-Mrp-dqei.js";import{Q as S}from"./suspense-Ds-UIyvc.js";import{Q as y}from"./queryClient-BtxDROQG.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DbocNi97.js";import"./useTheme-CAH-7WS1.js";import"./styled-CILYMfR2.js";import"./memoTheme-CehCTkMp.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Bcc0vKQ7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-yoY0NcWx.js";import"./Grid-BgvciMyj.js";import"./styled-D6EtJyjy.js";import"./isMuiElement-9m4N3JlX.js";import"./Stack-BZ18XAbQ.js";import"./Container-DsEO0A5x.js";import"./index-DTBt7OUq.js";import"./index-C8NIjhp6.js";import"./___vite-browser-external_commonjs-proxy-DTUPtHuW.js";import"./index-BYBttBtj.js";import"./_toKey-IUaBX5xF.js";import"./index-D4v9RjYj.js";import"./index-DezS3mgp.js";import"./Tooltip-CvzAHSPe.js";import"./useSlot-4KwJ1ZEX.js";import"./mergeSlotProps-Ce5vEJyz.js";import"./useForkRef-COVhBD0c.js";import"./useTimeout-Bbnn395Q.js";import"./useControlled-Bvcrhgjz.js";import"./useEventCallback-B1QjfuHc.js";import"./getReactElementRef-cseQ0t00.js";import"./Portal-BBUkHp6C.js";import"./utils-CTnKgbLp.js";import"./TransitionGroupContext-B4j_r9NY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DdDv6txA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-fOR7z52u.js";import"./ButtonBase-CDXMi9Z2.js";import"./CircularProgress-BxeLfgty.js";import"./Button-DJ1l2vuX.js";import"./index-CThJnamY.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BWD4KGVI.js";import"./index-DiPvxVbf.js";import"./Alert-Xa7hBB6I.js";import"./createSvgIcon-BJ8pbv3g.js";import"./Close-DONNORYt.js";import"./AlertTitle-wUH0qEk8.js";import"./Dialog-CKqaS-ER.js";import"./DialogContext-D9bfE-wC.js";import"./Fade-BOPFrwB9.js";import"./Modal-DwWll_wO.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-88X4YLU1.js";import"./DialogTitle-BWSpJP3e.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-CTx7Ljh8.js";import"./DialogContent-Cg59OVjs.js";import"./DialogContentText-BKWuA7Ix.js";import"./index-BiBDMnSv.js";import"./Img-DJzoVwio.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BBrlLLs_.js";import"./LinearProgress-BShXYqcN.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
